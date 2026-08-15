import { cache } from "react";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type {
  NavigationDirectory,
  NavigationFile,
  NavigationNode,
  Note,
  NoteFrontmatter,
  NoteSummary,
} from "@/types/notes";
import {
  categoryHref,
  displayName,
  isPathInside,
  normalizeSegments,
  noteHref,
} from "@/lib/slug";

export const CONTENT_ROOT = path.resolve(process.cwd(), "content");
const MARKDOWN_EXTENSION = ".md";
const ASSET_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"]);

function isVisibleName(name: string): boolean {
  return !name.startsWith(".") && name !== "node_modules";
}

function parseFrontmatter(data: Record<string, unknown>): NoteFrontmatter {
  const tags = Array.isArray(data.tags)
    ? data.tags.filter((tag): tag is string => typeof tag === "string")
    : typeof data.tags === "string"
      ? [data.tags]
      : [];

  return {
    title: typeof data.title === "string" ? data.title.trim() : undefined,
    subject: typeof data.subject === "string" ? data.subject.trim() : undefined,
    tags,
    date:
      typeof data.date === "string"
        ? data.date
        : data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : undefined,
    description: typeof data.description === "string" ? data.description.trim() : undefined,
  };
}

function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[\[([^\]]+)\]\]/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`~|$\\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function safeContentPath(segments: readonly string[], extension = ""): string | null {
  const normalized = normalizeSegments(segments);
  if (!normalized) return null;
  const candidate = path.resolve(CONTENT_ROOT, ...normalized) + extension;
  return isPathInside(CONTENT_ROOT, candidate) ? candidate : null;
}

export const getNote = cache(async (inputSegments: readonly string[]): Promise<Note | null> => {
  const segments = normalizeSegments(inputSegments);
  if (!segments || segments.length === 0) return null;

  const sourcePath = safeContentPath(segments, MARKDOWN_EXTENSION);
  if (!sourcePath) return null;

  let raw: string;
  try {
    raw = await readFile(sourcePath, "utf8");
  } catch {
    return null;
  }

  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(raw);
  } catch {
    parsed = matter(`---\n---\n\n${raw}`);
  }

  const frontmatter = parseFrontmatter(parsed.data);
  const title = frontmatter.title || displayName(segments.at(-1) ?? "Untitled");
  const body = plainText(parsed.content);
  const description = frontmatter.description || body.slice(0, 180);

  return {
    title,
    slug: segments,
    href: noteHref(segments),
    pathLabel: segments.map(displayName).join(" / "),
    excerpt: description || "Empty note",
    body,
    tags: frontmatter.tags,
    date: frontmatter.date,
    content: parsed.content,
    frontmatter,
    sourcePath,
  };
});

export async function scanMarkdownFiles(directory: string, prefix: string[] = []): Promise<string[][]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const results: string[][] = [];

  for (const entry of entries) {
    if (!isVisibleName(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await scanMarkdownFiles(absolute, [...prefix, entry.name])));
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === MARKDOWN_EXTENSION) {
      results.push([...prefix, path.basename(entry.name, MARKDOWN_EXTENSION)]);
    }
  }
  return results;
}

export const getAllNoteSlugs = cache(async (): Promise<string[][]> => scanMarkdownFiles(CONTENT_ROOT));

export const getAllNotes = cache(async (): Promise<NoteSummary[]> => {
  const slugs = await getAllNoteSlugs();
  const notes = await Promise.all(slugs.map((slug) => getNote(slug)));
  return notes.filter((note): note is Note => note !== null);
});

async function buildDirectory(directory: string, slug: string[]): Promise<NavigationDirectory> {
  const entries = await readdir(directory, { withFileTypes: true });
  const children: NavigationNode[] = [];

  for (const entry of entries) {
    if (!isVisibleName(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const child = await buildDirectory(absolute, [...slug, entry.name]);
      const containsFiles = child.noteCount > 0;
      const directoryIsEmpty = (await readdir(absolute)).length === 0;
      if (containsFiles || directoryIsEmpty) children.push(child);
    } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === MARKDOWN_EXTENSION) {
      const name = path.basename(entry.name, MARKDOWN_EXTENSION);
      const fileSlug = [...slug, name];
      const note = await getNote(fileSlug);
      const file: NavigationFile = {
        type: "file",
        name,
        title: note?.title ?? displayName(name),
        slug: fileSlug,
        href: noteHref(fileSlug),
      };
      children.push(file);
    }
  }

  children.sort((a, b) => {
    if (a.type !== b.type) return a.type === "directory" ? -1 : 1;
    return a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" });
  });

  return {
    type: "directory",
    name: slug.at(-1) ?? "content",
    title: displayName(slug.at(-1) ?? "content"),
    slug,
    href: slug.length > 0 ? categoryHref(slug) : "/",
    children,
    noteCount: children.reduce(
      (total, child) => total + (child.type === "file" ? 1 : child.noteCount),
      0,
    ),
  };
}

export const getNavigationTree = cache(async (): Promise<NavigationDirectory> =>
  buildDirectory(CONTENT_ROOT, []),
);

export async function getCategory(segments: readonly string[]): Promise<NavigationDirectory | null> {
  const normalized = normalizeSegments(segments);
  if (!normalized || normalized.length === 0) return null;
  const directory = safeContentPath(normalized);
  if (!directory) return null;
  try {
    if (!(await stat(directory)).isDirectory()) return null;
    return buildDirectory(directory, normalized);
  } catch {
    return null;
  }
}

export const getAllCategorySlugs = cache(async (): Promise<string[][]> => {
  const result: string[][] = [];
  function walk(nodes: NavigationNode[]) {
    for (const node of nodes) {
      if (node.type !== "directory") continue;
      result.push(node.slug);
      walk(node.children);
    }
  }
  walk((await getNavigationTree()).children);
  return result;
});

export const getAssetPaths = cache(async (): Promise<string[][]> => {
  const assets: string[][] = [];
  async function walk(directory: string, prefix: string[]) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (!isVisibleName(entry.name)) continue;
      if (entry.isDirectory()) {
        await walk(path.join(directory, entry.name), [...prefix, entry.name]);
      } else if (entry.isFile() && ASSET_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
        assets.push([...prefix, entry.name]);
      }
    }
  }
  await walk(CONTENT_ROOT, []);
  return assets;
});
