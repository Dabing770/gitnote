import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryList } from "@/components/category-list";
import { getAllCategorySlugs, getCategory } from "@/lib/notes";

type CategoryPageProps = { params: Promise<{ slug: string[] }> };

export async function generateStaticParams() {
  return (await getAllCategorySlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategory((await params).slug);
  return category
    ? { title: category.title, description: `${category.noteCount} study notes in ${category.title}.` }
    : { title: "Category not found" };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();
  const title = category.title;

  return (
    <div className="category-page page-container narrow-page">
      <Breadcrumb segments={category.slug} currentTitle={title} />
      <header className="category-header">
        <span className="eyebrow">Category</span>
        <h1>{title}</h1>
        <p>{category.noteCount} {category.noteCount === 1 ? "note" : "notes"}</p>
      </header>
      <CategoryList category={category} />
    </div>
  );
}
