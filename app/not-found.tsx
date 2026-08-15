import Link from "next/link";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="not-found page-container narrow-page">
      <FileQuestion size={40} aria-hidden="true" />
      <span className="eyebrow">404</span>
      <h1>Note not found</h1>
      <p>The note may have been moved, renamed, or deleted from the content folder.</p>
      <Link href="/">
        <ArrowLeft size={16} /> Return to the library
      </Link>
    </div>
  );
}
