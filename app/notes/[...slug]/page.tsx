import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { TableOfContents } from "@/components/table-of-contents";
import { extractTableOfContents, withoutDuplicateTitle } from "@/lib/markdown";
import { getAllNoteSlugs, getAssetPaths, getNote } from "@/lib/notes";

type NotePageProps = { params: Promise<{ slug: string[] }> };

export async function generateStaticParams() {
  return (await getAllNoteSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const note = await getNote((await params).slug);
  if (!note) return { title: "Note not found" };
  return {
    title: note.title,
    description: note.excerpt,
    keywords: note.tags,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const [note, assets] = await Promise.all([getNote(slug), getAssetPaths()]);
  if (!note) notFound();
  const toc = extractTableOfContents(note.content);
  const renderedMarkdown = withoutDuplicateTitle(note.content, note.title);

  return (
    <div className="note-page">
      <article className="article-column">
        <Breadcrumb segments={note.slug} currentTitle={note.title} />
        <header className="article-header">
          <h1>{note.title}</h1>
          <div className="article-meta">
            {note.date && <time dateTime={note.date}>Updated {note.date}</time>}
            {note.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </header>
        {renderedMarkdown.trim() ? (
          <MarkdownRenderer markdown={renderedMarkdown} noteSlug={note.slug} assets={assets} />
        ) : (
          <p className="empty-state">This Markdown file is empty.</p>
        )}
      </article>
      <aside className="toc-column">
        <TableOfContents items={toc} />
      </aside>
    </div>
  );
}
