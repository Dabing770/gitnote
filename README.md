# Study Notes

一个以 `content/` 为唯一内容来源的个人学习笔记网站。项目使用 Next.js App Router、React、TypeScript、Tailwind CSS、KaTeX 和 Fuse.js。新增、修改、移动或删除 Markdown 文件后，不需要修改任何 React 页面；重新构建即可同步网站结构。

项目既可以部署到 **GitHub Pages**（生成普通 HTML/CSS 静态网站），也可以部署到 **Vercel**。

## 功能

- 自动扫描 `content/` 下任意深度的文件夹和 `.md` 文件
- UTF-8 路由，支持中文、芬兰语 `ä/ö/å`、空格和英文文件名
- 无限层级 Sidebar、折叠状态保存、当前文章高亮
- 手机端 Drawer 导航
- Markdown、GFM 表格、Task List、代码高亮
- KaTeX 块级公式和行内公式
- Markdown 相对图片自动发布、响应式显示和点击放大
- 兼容 Obsidian 图片语法 `![[image.png]]`
- 自动 Breadcrumb 和文章 TOC，阅读位置高亮
- Fuse.js 客户端全文搜索：标题、路径、标签和正文
- Light / Dark / System 三种主题，选择保存在浏览器中
- 首页学科统计和可靠的 frontmatter 日期排序
- 自动 SEO Metadata 和正常 404 页面
- 静态导出，GitHub Pages 不需要服务器或数据库

## 项目结构

```text
app/
├── category/[...slug]/page.tsx  # 任意深度分类页
├── notes/[...slug]/page.tsx     # 任意深度文章页
├── globals.css                  # 全站和 Markdown 阅读样式
├── layout.tsx                   # 全站布局、导航和搜索数据
└── page.tsx                     # 首页
components/
├── app-shell.tsx
├── sidebar.tsx
├── search.tsx
├── markdown-renderer.tsx
├── table-of-contents.tsx
├── breadcrumb.tsx
├── theme-toggle.tsx
└── zoomable-image.tsx
lib/
├── notes.ts                     # 安全扫描、读取、树生成
├── markdown.ts                  # TOC、图片和 Markdown 辅助逻辑
└── slug.ts                      # UTF-8 URL 和路径安全
content/                         # 唯一的笔记与图片来源
scripts/sync-content-assets.mjs  # 构建前自动同步图片
tests/                           # 路由、Markdown、文件变化测试
.github/workflows/deploy-pages.yml
```

## 安装和本地运行

需要 Node.js 20.9 或更高版本，推荐 Node.js 22 LTS。

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

其他命令：

```bash
npm run test       # 单元和文件同步测试
npm run lint       # ESLint
npm run typecheck  # TypeScript strict 检查
npm run build      # 生成静态 HTML/CSS 到 out/
npm run start      # 本地预览 out/ 中已经构建的静态网站
```

> `npm run build` 使用 `output: "export"`。最终可部署文件位于 `out/`，其中包含各页面的 HTML、CSS、JavaScript 搜索逻辑和自动同步的图片。

## 放入自己的笔记

所有内容必须放在 `content/` 下。例如：

```text
content/
├── Biology/
│   ├── Solu.md
│   └── BI4/
│       └── Proteiini.md
├── Physics/
│   ├── Kvanttifysiikka.md
│   └── images/
│       └── photon.png
└── Chemistry/
    └── Elektrolyysi.md
```

对应 URL：

```text
content/Physics/Kvanttifysiikka.md
→ /notes/Physics/Kvanttifysiikka/

content/Biology/BI4/Proteiini.md
→ /notes/Biology/BI4/Proteiini/
```

可以直接新增、修改、删除、重命名或移动文件。开发服务器需要重启时，执行一次 `npm run dev`；部署环境每次 push 都会重新构建。

### Frontmatter

Frontmatter 可选：

```markdown
---
title: Kvanttifysiikka
subject: Physics
tags:
  - FY8
  - YO
date: 2026-08-15
description: Fotonien energia ja liikemäärä.
---
```

- 没有 `title`：使用文件名，并把 `-`、`_` 转为空格。
- 没有 `description`：从 Markdown 正文生成摘要。
- `date`：用于首页 `Recently updated`。建议写成 `YYYY-MM-DD`。
- 不使用文件系统修改时间作为部署依据，因为 Vercel/GitHub 的 checkout 时间不能可靠代表笔记更新时间。

### 数学公式

行内公式：

```markdown
Fotonin energia on $E=hf$.
```

块级公式：

```markdown
$$
p = \frac{h}{\lambda}
$$
```

不要把普通芬兰语句子放进 `$...$`，否则 KaTeX 会把它当成数学表达式。

### 图片

标准相对路径：

```text
content/Physics/Kvanttifysiikka.md
content/Physics/images/compton.png
```

```markdown
![Compton scattering](./images/compton.png)
```

也支持 Obsidian：

```markdown
![[compton.png]]
```

对于 Obsidian 的单文件名图片，程序会查找同名资源，并优先选择与当前笔记目录最接近的文件。若同名图片较多，推荐改用明确的标准相对路径。

支持 `.png`、`.jpg`、`.jpeg`、`.gif`、`.webp`、`.svg`、`.avif`。`predev` 和 `prebuild` 会自动把这些图片同步到 `public/_content/`；该目录是生成物并已加入 `.gitignore`，不要手动编辑。

## 搜索如何工作

构建时，Server Component 读取所有 Markdown，生成只包含标题、路径、标签和纯文本正文的搜索数据。浏览器打开搜索框后，Fuse.js 在本地完成模糊搜索，不需要数据库、API 或第三方搜索服务。快捷键为 `Ctrl+K`（macOS 使用 `Command+K`）。

## 安全设计

- URL 的每一个路径段都先进行安全解码和 Unicode NFC 规范化。
- 拒绝 `.`、`..`、斜杠、反斜杠、NUL 和编码后的路径分隔符。
- `path.resolve` 后再次确认路径仍位于 `content/` 内。
- 笔记读取固定追加 `.md`，不能读取 `.env`、`package.json` 或系统文件。
- 只自动公开允许的图片扩展名。
- `react-markdown` 默认不执行 Markdown 中的原始 HTML 或 JavaScript；项目没有启用 `rehype-raw`。

## 发布到 GitHub Pages

当前项目已经包含自动发布工作流：`.github/workflows/deploy-pages.yml`。

### 1. 创建 GitHub Repository（已有仓库可跳过）

1. 登录 GitHub。
2. 点击右上角 `+` → `New repository`。
3. 输入仓库名，例如 `study-notes`。
4. 不要勾选自动创建 README，避免与本地文件冲突。
5. 点击 `Create repository`。

### 2. 把本地项目推送到 GitHub

新仓库第一次执行：

```bash
git init
git add .
git commit -m "Create study notes website"
git branch -M main
git remote add origin https://github.com/你的用户名/study-notes.git
git push -u origin main
```

如果已经设置过 `origin`，不要再次执行 `git remote add`，直接提交和 push。

### 3. 启用 GitHub Pages

1. 打开 GitHub 仓库。
2. 进入 `Settings` → `Pages`。
3. 在 `Build and deployment` 的 `Source` 中选择 **GitHub Actions**。
4. 打开仓库的 `Actions` 页面。
5. 等待 `Deploy study notes to GitHub Pages` 变为绿色。

发布地址通常是：

```text
https://你的用户名.github.io/仓库名/
```

工作流会自动识别仓库名并设置 Next.js `basePath`，所以 CSS、JavaScript、图片和内部链接都能在子路径下工作。若仓库名本身是 `用户名.github.io`，则自动使用网站根路径。

### 4. GitHub Pages 更新流程

以后只需修改 `content/`，然后：

```bash
git add .
git commit -m "Update notes"
git push
```

GitHub Actions 会依次执行测试、Lint、TypeScript 检查、静态构建和 Pages 发布。任何检查失败时不会覆盖当前线上网站。

## 发布到 Vercel

1. 确认项目已经 push 到 GitHub。
2. 登录 [Vercel](https://vercel.com/)。
3. 点击 `Add New` → `Project`。
4. 选择对应 GitHub Repository 并点击 `Import`。
5. Framework Preset 保持 `Next.js`。
6. Build Command 保持 `npm run build`，不需要数据库或环境变量。
7. 点击 `Deploy`。

每次 push 后，Vercel 会自动重新构建。由于本项目静态导出，Vercel 会直接分发 `out/` 中的静态文件。

## 日常更新建议

```bash
# 1. 修改、移动、新增或删除 content/ 中的笔记和图片

# 2. 本地查看
npm run dev

# 3. 提交并发布
git add .
git commit -m "Update notes"
git push
```

## 常见问题

### 新笔记没有出现

确认文件位于 `content/` 下、扩展名是 `.md`，然后重新运行开发服务器或重新构建。GitHub/Vercel 上需要确认修改已 commit 并 push。

### 图片显示 unavailable

检查大小写、扩展名和相对路径。Linux 部署环境区分大小写，`Photon.png` 和 `photon.png` 是不同文件。

### URL 打开 404

不要在 URL 中加入 `.md`。文件 `content/Physics/Aalto liike.md` 的地址是 `/notes/Physics/Aalto%20liike/`。网站中的链接会自动编码，通常不需要手写 URL。

### 同名文件

不同目录下同名 Markdown 完全支持，例如 `Biology/Intro.md` 和 `Physics/Intro.md`。同一目录下不要同时创建同名文件夹和同名 Markdown（如 `Topic/` 与 `Topic.md`），避免人类阅读和链接含义混淆。
