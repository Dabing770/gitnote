import Link from "next/link";
import { FileText, Folder } from "lucide-react";
import type { NavigationDirectory } from "@/types/notes";

export function CategoryList({ category }: { category: NavigationDirectory }) {
  if (category.children.length === 0) {
    return <p className="empty-state">This folder is empty. Add a Markdown file and rebuild the site.</p>;
  }

  return (
    <div className="category-list">
      {category.children.map((node) => (
        <Link key={`${node.type}:${node.slug.join("/")}`} href={node.href}>
          {node.type === "directory" ? <Folder size={19} /> : <FileText size={19} />}
          <span>
            <strong>{node.title}</strong>
            <small>
              {node.type === "directory"
                ? `${node.noteCount} ${node.noteCount === 1 ? "note" : "notes"}`
                : node.slug.map((part) => part.replace(/[-_]+/g, " ")).join(" / ")}
            </small>
          </span>
        </Link>
      ))}
    </div>
  );
}
