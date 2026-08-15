import type { Metadata } from "next";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark-dimmed.css";
import "./globals.css";
import { AppShell } from "@/components/app-shell";
import { getAllNotes, getNavigationTree } from "@/lib/notes";

export const metadata: Metadata = {
  title: { default: "Study Notes", template: "%s | Study Notes" },
  description: "A fast, searchable personal study knowledge base generated from Markdown files.",
};

const themeScript = `(() => {
  try {
    const saved = localStorage.getItem('study-notes-theme') || 'system';
    const dark = saved === 'dark' || (saved === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.dataset.theme = saved;
  } catch {}
})();`;

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [tree, notes] = await Promise.all([getNavigationTree(), getAllNotes()]);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <AppShell nodes={tree.children} notes={notes}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
