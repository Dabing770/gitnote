import { afterEach, describe, expect, it } from "vitest";
import { mkdir, mkdtemp, rename, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { scanMarkdownFiles } from "@/lib/notes";

const temporaryDirectories: string[] = [];
afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

describe("content filesystem synchronization", () => {
  it("reflects add, modify, move, deep Unicode paths, and delete without code changes", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "study-notes-test-"));
    temporaryDirectories.push(root);
    const deep = path.join(root, "Physics", "现代物理", "Syvä", "Taso");
    await mkdir(deep, { recursive: true });
    const original = path.join(deep, "Liikemäärä.md");
    await writeFile(original, "# Ensimmäinen", "utf8");

    expect(await scanMarkdownFiles(root)).toContainEqual([
      "Physics",
      "现代物理",
      "Syvä",
      "Taso",
      "Liikemäärä",
    ]);

    await writeFile(original, "# Muokattu", "utf8");
    const moved = path.join(deep, "光电效应.md");
    await rename(original, moved);
    expect(await scanMarkdownFiles(root)).toContainEqual(["Physics", "现代物理", "Syvä", "Taso", "光电效应"]);

    await rm(moved);
    expect(await scanMarkdownFiles(root)).toEqual([]);
  });
});
