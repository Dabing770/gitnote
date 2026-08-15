import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Breadcrumb } from "@/components/breadcrumb";

describe("category breadcrumbs", () => {
  it("shows a top-level category only once", () => {
    const markup = renderToStaticMarkup(
      <Breadcrumb segments={["Biology"]} currentTitle="Biology" />,
    );
    expect(markup.match(/Biology/g)).toHaveLength(1);
  });

  it("links parent categories and shows the current nested category once", () => {
    const markup = renderToStaticMarkup(
      <Breadcrumb segments={["Biology", "BI4"]} currentTitle="BI4" />,
    );
    expect(markup).toContain('href="/category/Biology"');
    expect(markup.match(/BI4/g)).toHaveLength(1);
  });
});
