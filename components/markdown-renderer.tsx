import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ImageOff } from "lucide-react";
import { ZoomableImage } from "@/components/zoomable-image";
import { resolveMarkdownImage, withObsidianImages } from "@/lib/markdown";

export function MarkdownRenderer({
  markdown,
  noteSlug,
  assets,
}: {
  markdown: string;
  noteSlug: string[];
  assets: string[][];
}) {
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypeKatex, { strict: false }],
          [rehypeHighlight, { detect: true }],
        ]}
        components={{
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              {...props}
              {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => {
            const resolved = resolveMarkdownImage(
              typeof src === "string" ? src : undefined,
              noteSlug,
              assets,
            );
            return resolved ? (
              <ZoomableImage src={resolved} alt={alt || "Note image"} />
            ) : (
              <span className="missing-image" role="img" aria-label="Image unavailable">
                <ImageOff size={18} /> Image unavailable: {String(src ?? "")}
              </span>
            );
          },
        }}
      >
        {withObsidianImages(markdown)}
      </ReactMarkdown>
    </div>
  );
}
