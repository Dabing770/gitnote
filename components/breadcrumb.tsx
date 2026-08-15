import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { categoryHref, displayName } from "@/lib/slug";

export function Breadcrumb({ segments, currentTitle }: { segments: string[]; currentTitle: string }) {
  const directories = segments.slice(0, -1);
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/" aria-label="Home">
        <Home size={14} />
      </Link>
      {directories.map((segment, index) => {
        const slug = directories.slice(0, index + 1);
        return (
          <span key={slug.join("/")}>
            <ChevronRight size={13} aria-hidden="true" />
            <Link href={categoryHref(slug)}>{displayName(segment)}</Link>
          </span>
        );
      })}
      <span>
        <ChevronRight size={13} aria-hidden="true" />
        <span aria-current="page">{currentTitle}</span>
      </span>
    </nav>
  );
}
