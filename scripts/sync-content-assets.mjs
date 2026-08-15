import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const contentRoot = path.resolve(projectRoot, "content");
const outputRoot = path.resolve(projectRoot, "public", "_content");
const allowedExtensions = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
]);

function assertInsideProject(target) {
  const relative = path.relative(projectRoot, target);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing unsafe generated asset path: ${target}`);
  }
}

async function copyAssets(sourceDirectory, destinationDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;

    const source = path.join(sourceDirectory, entry.name);
    const destination = path.join(destinationDirectory, entry.name);

    if (entry.isDirectory()) {
      await copyAssets(source, destination);
      continue;
    }

    if (!entry.isFile() || !allowedExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    await mkdir(destinationDirectory, { recursive: true });
    await cp(source, destination);
  }
}

assertInsideProject(outputRoot);
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await copyAssets(contentRoot, outputRoot);
console.log("Content images synchronized to public/_content.");
