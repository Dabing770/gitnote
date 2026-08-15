import GithubSlugger from "github-slugger";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { Heading, Root, Text } from "mdast";
import type { TocItem } from "@/types/notes";
import { encodePath, normalizeSegments } from "@/lib/slug";

function nodeText(node: Heading): string {
  const parts: string[] = [];
  visit(node, "text", (child: Text) => parts.push(child.value));
  return parts.join("").trim();
}

export function extractTableOfContents(markdown: string): TocItem[] {
  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const slugger = new GithubSlugger();
  const headings: TocItem[] = [];
  visit(tree, "heading", (node: Heading) => {
    if (node.depth < 2 || node.depth > 4) return;
    const title = nodeText(node);
    if (title) headings.push({ id: slugger.slug(title), title, level: node.depth });
  });
  return headings;
}

export function withObsidianImages(markdown: string): string {
  return markdown.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, source: string, alt?: string) => {
    const cleanSource = source.trim();
    const label = (alt || cleanSource).trim().replaceAll("]", "\\]");
    return `![${label}](<${cleanSource}>)`;
  });
}

export function withoutDuplicateTitle(markdown: string, title: string): string {
  const match = markdown.match(/^\s*#\s+(.+?)\s*(?:\r?\n|$)/);
  if (!match) return markdown;
  const heading = match[1].replace(/[*_`]/g, "").trim();
  return heading.localeCompare(title.trim(), undefined, { sensitivity: "base" }) === 0
    ? markdown.slice(match[0].length)
    : markdown;
}

function commonPrefixLength(left: readonly string[], right: readonly string[]): number {
  let index = 0;
  while (index < left.length && index < right.length && left[index] === right[index]) index += 1;
  return index;
}

export function resolveMarkdownImage(
  source: string | undefined,
  noteSlug: readonly string[],
  assets: readonly string[][],
): string | undefined {
  if (!source) return source;
  if (/^(?:https?:|data:|blob:)/i.test(source) || source.startsWith("/")) return source;

  const withoutSuffix = source.split(/[?#]/, 1)[0];
  let decoded: string;
  try {
    decoded = decodeURIComponent(withoutSuffix);
  } catch {
    return undefined;
  }

  const rawSegments = decoded.replaceAll("\\", "/").split("/");
  const noteDirectory = noteSlug.slice(0, -1);
  const combined = [...noteDirectory, ...rawSegments];
  const stack: string[] = [];
  for (const segment of combined) {
    if (!segment || segment === ".") continue;
    if (segment === "..") {
      if (stack.length === 0) return undefined;
      stack.pop();
    } else {
      stack.push(segment.normalize("NFC"));
    }
  }

  let resolved = normalizeSegments(stack);
  const directMatch = resolved && assets.some((asset) => asset.join("/") === resolved?.join("/"));

  if (!directMatch && rawSegments.length === 1) {
    const basename = rawSegments[0].normalize("NFC").toLocaleLowerCase();
    const candidates = assets.filter(
      (asset) => asset.at(-1)?.normalize("NFC").toLocaleLowerCase() === basename,
    );
    candidates.sort(
      (a, b) => commonPrefixLength(b, noteDirectory) - commonPrefixLength(a, noteDirectory),
    );
    resolved = candidates[0] ?? null;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return resolved ? `${basePath}/_content/${encodePath(resolved)}` : undefined;
}
