import { describe, expect, it } from "vitest";
import { getCategory } from "@/lib/notes";

describe("encoded category routes", () => {
  it("uses decoded Unicode names for category titles and breadcrumbs", async () => {
    const category = await getCategory(["%E5%85%B6%E4%BB%96"]);
    expect(category?.title).toBe("其他");
    expect(category?.slug).toEqual(["其他"]);
  });
});
