import path from "node:path";

export function displayName(value: string): string {
  return value
    .replace(/\.md$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeSegments(segments: readonly string[]): string[] | null {
  if (segments.length === 0) return [];

  const normalized: string[] = [];
  for (const rawSegment of segments) {
    let segment: string;
    try {
      segment = decodeURIComponent(rawSegment).normalize("NFC");
    } catch {
      return null;
    }

    if (
      !segment ||
      segment === "." ||
      segment === ".." ||
      segment.includes("/") ||
      segment.includes("\\") ||
      segment.includes("\0")
    ) {
      return null;
    }
    normalized.push(segment);
  }
  return normalized;
}

export function encodePath(segments: readonly string[]): string {
  return segments.map((segment) => encodeURIComponent(segment.normalize("NFC"))).join("/");
}

export function noteHref(segments: readonly string[]): string {
  return `/notes/${encodePath(segments)}`;
}

export function categoryHref(segments: readonly string[]): string {
  return `/category/${encodePath(segments)}`;
}

export function isPathInside(root: string, candidate: string): boolean {
  const relative = path.relative(root, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}
