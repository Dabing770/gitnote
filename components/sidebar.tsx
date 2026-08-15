"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, FileText, Folder, FolderOpen } from "lucide-react";
import type { NavigationNode, NoteSummary } from "@/types/notes";
import { Search } from "@/components/search";
import { ThemeToggle } from "@/components/theme-toggle";

function ancestorKeys(pathname: string, nodes: NavigationNode[]): string[] {
  const keys: string[] = [];
  function walk(node: NavigationNode): boolean {
    if (node.type === "file") return pathname === node.href;
    const active = node.children.some(walk);
    if (active) keys.push(node.slug.join("/"));
    return active;
  }
  nodes.forEach(walk);
  return keys;
}

function TreeNode({
  node,
  depth,
  openFolders,
  toggle,
  pathname,
  onNavigate,
}: {
  node: NavigationNode;
  depth: number;
  openFolders: Set<string>;
  toggle: (key: string) => void;
  pathname: string;
  onNavigate?: () => void;
}) {
  if (node.type === "file") {
    const active = pathname === node.href;
    return (
      <Link
        href={node.href}
        className={`tree-file ${active ? "active" : ""}`}
        style={{ paddingInlineStart: `${12 + depth * 15}px` }}
        aria-current={active ? "page" : undefined}
        onClick={onNavigate}
      >
        <FileText size={15} aria-hidden="true" />
        <span>{node.title}</span>
      </Link>
    );
  }

  const key = node.slug.join("/");
  const open = openFolders.has(key);
  const FolderIcon = open ? FolderOpen : Folder;
  return (
    <div className="tree-directory">
      <div className="tree-folder-row" style={{ paddingInlineStart: `${4 + depth * 15}px` }}>
        <button
          type="button"
          className="tree-folder-toggle"
          aria-label={`${open ? "Collapse" : "Expand"} ${node.title}`}
          aria-expanded={open}
          onClick={() => toggle(key)}
        >
          <ChevronRight className={open ? "rotated" : ""} size={14} aria-hidden="true" />
        </button>
        <Link href={node.href} onClick={onNavigate}>
          <FolderIcon size={16} aria-hidden="true" />
          <span>{node.title}</span>
          <small>{node.noteCount}</small>
        </Link>
      </div>
      {open && (
        <div>
          {node.children.map((child) => (
            <TreeNode
              key={`${child.type}:${child.slug.join("/")}`}
              node={child}
              depth={depth + 1}
              openFolders={openFolders}
              toggle={toggle}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
          {node.children.length === 0 && (
            <p className="empty-folder" style={{ paddingInlineStart: `${30 + depth * 15}px` }}>
              Empty folder
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function Sidebar({
  nodes,
  notes,
  onNavigate,
}: {
  nodes: NavigationNode[];
  notes: NoteSummary[];
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const currentAncestors = useMemo(() => ancestorKeys(pathname, nodes), [pathname, nodes]);
  const [openFolders, setOpenFolders] = useState<Set<string>>(() => new Set(currentAncestors));

  useEffect(() => {
    const saved = localStorage.getItem("study-notes-folders");
    let stored: string[] = [];
    try {
      stored = saved ? (JSON.parse(saved) as string[]) : [];
    } catch {
      stored = [];
    }
    // The saved UI preference only exists in the browser, so hydrate it after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenFolders(new Set([...stored, ...currentAncestors]));
  }, [currentAncestors]);

  function toggle(key: string) {
    setOpenFolders((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      localStorage.setItem("study-notes-folders", JSON.stringify([...next]));
      return next;
    });
  }

  return (
    <div className="sidebar-inner">
      <Link className="sidebar-brand" href="/" onClick={onNavigate}>
        <span className="brand-mark">S</span>
        <span>
          <strong>Study Notes</strong>
          <small>Personal knowledge base</small>
        </span>
      </Link>
      <Search notes={notes} onNavigate={onNavigate} />
      <nav className="sidebar-tree" aria-label="Notes">
        {nodes.map((node) => (
          <TreeNode
            key={`${node.type}:${node.slug.join("/")}`}
            node={node}
            depth={0}
            openFolders={openFolders}
            toggle={toggle}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
      <footer className="sidebar-footer">
        <ThemeToggle />
        <span>{notes.length} notes</span>
      </footer>
    </div>
  );
}
