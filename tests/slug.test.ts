import { describe, expect, it } from "vitest";
import path from "node:path";
import { displayName, encodePath, isPathInside, normalizeSegments } from "@/lib/slug";

describe("slug safety and Unicode", () => {
  it("preserves Finnish, Chinese, and spaces", () => {
    const values = ["Liikemäärä", "Happo-emästasapaino", "光电效应", "Typen kierto"];
    expect(normalizeSegments(values)).toEqual(values);
    expect(decodeURIComponent(encodePath(values))).toBe(values.join("/"));
  });

  it("rejects traversal and encoded separators", () => {
    expect(normalizeSegments(["..", ".env"])).toBeNull();
    expect(normalizeSegments(["Biology%2F..%2F.env"])).toBeNull();
    expect(normalizeSegments(["Physics\\..\\package.json"])).toBeNull();
  });

  it("checks resolved paths stay below the content root", () => {
    const root = path.resolve("content");
    expect(isPathInside(root, path.join(root, "Physics", "note.md"))).toBe(true);
    expect(isPathInside(root, path.resolve(root, "..", ".env"))).toBe(false);
  });

  it("creates readable titles from filenames", () => {
    expect(displayName("Comptonin-sironta.md")).toBe("Comptonin sironta");
  });
});
