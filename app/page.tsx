import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Folder } from "lucide-react";
import { getAllNotes, getNavigationTree } from "@/lib/notes";

export default async function HomePage() {
  const [tree, notes] = await Promise.all([getNavigationTree(), getAllNotes()]);
  const datedNotes = notes
    .filter((note) => note.date)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, 8);

  return (
    <div className="home-page page-container">
      <section className="home-hero">
        <span className="eyebrow">
          <BookOpen size={15} /> Personal knowledge base
        </span>
        <h1>Study Notes</h1>
        <p>Markdown-powered notes for focused learning, organized directly from the content folder.</p>
        <div className="home-stats">
          <span>
            <strong>{notes.length}</strong> notes
          </span>
          <span>
            <strong>{tree.children.filter((node) => node.type === "directory").length}</strong> subjects
          </span>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Library</span>
            <h2>Subjects</h2>
          </div>
        </div>
        <div className="subject-grid">
          {tree.children.map((node) => (
            <Link key={`${node.type}:${node.slug.join("/")}`} href={node.href}>
              <span className="subject-icon">{node.type === "directory" ? <Folder /> : <BookOpen />}</span>
              <span>
                <strong>{node.title}</strong>
                <small>
                  {node.type === "directory" ? node.noteCount : 1} {node.type === "directory" && node.noteCount !== 1 ? "notes" : "note"}
                </small>
              </span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Timeline</span>
            <h2>Recently updated</h2>
          </div>
          <Clock3 size={20} aria-hidden="true" />
        </div>
        {datedNotes.length > 0 ? (
          <div className="recent-list">
            {datedNotes.map((note) => (
              <Link key={note.href} href={note.href}>
                <span>
                  <strong>{note.title}</strong>
                  <small>{note.pathLabel}</small>
                </span>
                <time dateTime={note.date}>{note.date}</time>
              </Link>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            Add a <code>date: YYYY-MM-DD</code> field to note frontmatter to show reliable update dates here.
          </p>
        )}
      </section>
    </div>
  );
}
