import { describe, expect, it } from "vitest";
import {
  extractTableOfContents,
  resolveMarkdownImage,
  withObsidianImages,
  withoutDuplicateTitle,
} from "@/lib/markdown";

describe("Markdown helpers", () => {
  it("builds unique heading ids for the table of contents", () => {
    expect(extractTableOfContents("# Title\n## Fotoni\n### Energia\n## Fotoni")).toEqual([
      { id: "fotoni", title: "Fotoni", level: 2 },
      { id: "energia", title: "Energia", level: 3 },
      { id: "fotoni-1", title: "Fotoni", level: 2 },
    ]);
  });

  it("converts Obsidian image embeds", () => {
    expect(withObsidianImages("![[Aalto kuva.png|Aalto]]")).toBe("![Aalto](<Aalto kuva.png>)");
  });

  it("removes only a matching leading H1 already shown by the page", () => {
    expect(withoutDuplicateTitle("# Kvanttifysiikka\n\nText", "Kvanttifysiikka")).toBe("Text");
    expect(withoutDuplicateTitle("# Different\n\nText", "Kvanttifysiikka")).toContain("# Different");
  });

  it("resolves relative and nearest Obsidian images but blocks escapes", () => {
    const assets = [
      ["Physics", "images", "photon.png"],
      ["Chemistry", "Kuvat", "shared.png"],
      ["Physics", "Kuvat", "shared.png"],
    ];
    expect(resolveMarkdownImage("./images/photon.png", ["Physics", "Note"], assets)).toContain(
      "/_content/Physics/images/photon.png",
    );
    expect(resolveMarkdownImage("shared.png", ["Physics", "FY7", "Note"], assets)).toContain(
      "/_content/Physics/Kuvat/shared.png",
    );
    expect(resolveMarkdownImage("../../../secret.png", ["Physics", "Note"], assets)).toBeUndefined();
  });
});
