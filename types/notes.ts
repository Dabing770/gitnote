export type NoteFrontmatter = {
  title?: string;
  subject?: string;
  tags: string[];
  date?: string;
  description?: string;
};

export type NoteSummary = {
  title: string;
  slug: string[];
  href: string;
  pathLabel: string;
  excerpt: string;
  body: string;
  tags: string[];
  date?: string;
};

export type Note = NoteSummary & {
  content: string;
  frontmatter: NoteFrontmatter;
  sourcePath: string;
};

export type NavigationFile = {
  type: "file";
  name: string;
  title: string;
  slug: string[];
  href: string;
};

export type NavigationDirectory = {
  type: "directory";
  name: string;
  title: string;
  slug: string[];
  href: string;
  children: NavigationNode[];
  noteCount: number;
};

export type NavigationNode = NavigationFile | NavigationDirectory;

export type TocItem = {
  id: string;
  title: string;
  level: number;
};
