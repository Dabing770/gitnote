"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import { FileText, Search as SearchIcon, X } from "lucide-react";
import type { NoteSummary } from "@/types/notes";

function resultExcerpt(note: NoteSummary, query: string): string {
  const content = note.body || note.excerpt;
  const index = content.toLocaleLowerCase().indexOf(query.toLocaleLowerCase());
  if (index < 0) return content.slice(0, 150);
  const start = Math.max(0, index - 55);
  const end = Math.min(content.length, index + query.length + 95);
  return `${start > 0 ? "…" : ""}${content.slice(start, end)}${end < content.length ? "…" : ""}`;
}

export function Search({ notes, onNavigate }: { notes: NoteSummary[]; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const fuse = useMemo(
    () =>
      new Fuse(notes, {
        keys: [
          { name: "title", weight: 0.45 },
          { name: "pathLabel", weight: 0.25 },
          { name: "tags", weight: 0.15 },
          { name: "body", weight: 0.15 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    [notes],
  );

  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, []);

  const results = query.trim().length >= 2 ? fuse.search(query.trim(), { limit: 20 }) : [];

  function goTo(href: string) {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(href);
  }

  return (
    <>
      <button className="search-trigger" type="button" onClick={() => setOpen(true)}>
        <SearchIcon size={16} aria-hidden="true" />
        <span>Search notes…</span>
        <kbd>Ctrl K</kbd>
      </button>
      {open && (
        <div className="search-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <section
            className="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Search notes"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-input-row">
              <SearchIcon size={20} aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, path, tag, or content"
                aria-label="Search query"
              />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close search">
                <X size={18} />
              </button>
            </div>
            <div className="search-results">
              {query.trim().length < 2 ? (
                <p className="search-hint">Type at least two characters to search {notes.length} notes.</p>
              ) : results.length === 0 ? (
                <p className="search-hint">No matching notes.</p>
              ) : (
                results.map(({ item }) => (
                  <button key={item.href} type="button" onClick={() => goTo(item.href)}>
                    <FileText size={17} aria-hidden="true" />
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.pathLabel}</small>
                      <em>{resultExcerpt(item, query.trim())}</em>
                    </span>
                  </button>
                ))
              )}
            </div>
            <div className="search-footer">
              <span>
                <kbd>Esc</kbd> to close
              </span>
              <span>
                {query.trim().length >= 2
                  ? `${results.length} of ${notes.length} notes`
                  : `${notes.length} notes indexed`}
              </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
