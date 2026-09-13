from __future__ import annotations

import html
import re
import shutil
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote, unquote, urljoin, urlparse, urlsplit, urlunsplit
from urllib.request import Request, urlopen


BASE = "https://kurssi.matematiikkakilpailut.fi/"
OUT = Path("Kilpamatematiikka.new")
CHAPTERS = [
    ("01_induktiivinen_paattely.html", "01 Induktiivinen päättely"),
    ("02_kehäkulmalause.html", "02 Kehäkulmalause"),
    ("03_aritmetiikan_peruslause.html", "03 Aritmetiikan peruslause"),
    ("04_algebrallinen_manipulaatio.html", "04 Algebrallinen manipulaatio"),
    ("05_laatikkoperiaate.html", "05 Laatikkoperiaate"),
    ("06_jännenelikulmiot.html", "06 Jännenelikulmiot"),
    ("07_kongruenssit_I.html", "07 Kongruenssit"),
    ("08_polynomit_I.html", "08 Polynomit"),
    ("09_laskennallinen_kombinatoriikka.html", "09 Laskennallinen kombinatoriikka"),
    ("10_pituusgeometriaa.html", "10 Pituusgeometriaa"),
    ("11_kongruenssit_II.html", "11 Kongruenssit II"),
    ("12_polynomit_II.html", "12 Polynomit II"),
    ("13_verkot.html", "13 Verkot"),
    ("14_konfiguraatiot.html", "14 Geometriset konfiguraatiot"),
    ("15_Diofantoksen_yhtälöt.html", "15 Diofantoksen yhtälöt"),
    ("16_arviointi.html", "16 Arviointia ja epäyhtälöitä"),
    ("17_pelit.html", "17 Pelit"),
    ("18_Bezout'n_lemma.html", "18 Aritmetiikan peruslauseen todistus"),
    ("19_summia.html", "19 Summia"),
    ("20_kulmanjahtaus.html", "20 Kulmanjahtaus"),
    ("21_kiinalainen_jäännöslause.html", "21 Kiinalainen jäännöslause"),
    ("22_konstruktio.html", "22 Konstruktiot"),
    ("23_epäyhtälöt.html", "23 Epäyhtälöitä"),
    ("24_pisteen_potenssi.html", "24 Pisteen potenssi ja radikaaliakselit"),
    ("25_kertolasku.html", "25 Kertolasku kongruensseissa"),
    ("26_prosessit_ja_algoritmit.html", "26 Prosessit ja algoritmit"),
    ("27_funktionaaliyhtälöt.html", "27 Funktionaaliyhtälöt"),
    ("28_transformaatiot.html", "28 Transformaatiot"),
    ("29_aritmetiikan_peruslause.html", "29 Aritmetiikan peruslause II"),
    ("30_globaali.html", "30 Globaalit argumentit"),
    ("31_lineaariset_rekursiot.html", "31 Lineaariset rekursiot"),
    ("32_inversio.html", "32 Inversio"),
    ("33_primitiivijuuren_olemassaolo.html", "33 Primitiivijuurten olemassaolon todistus"),
]


def fetch(url: str) -> bytes:
    parts = urlsplit(url)
    url = urlunsplit(
        (parts.scheme, parts.netloc, quote(parts.path, safe="/%:@"), quote(parts.query, safe="=&%:@"), parts.fragment)
    )
    req = Request(url, headers={"User-Agent": "Mozilla/5.0 (personal study-note importer)"})
    with urlopen(req, timeout=60) as response:
        return response.read()


def safe_name(name: str) -> str:
    name = unquote(name).replace("\u00ad", "")
    return re.sub(r'[<>:"/\\|?*]+', "-", name).strip(" .") or "asset"


class MarkdownParser(HTMLParser):
    def __init__(self, page_url: str, assets_dir: Path, chapter_map: dict[str, str]):
        super().__init__(convert_charrefs=True)
        self.page_url = page_url
        self.assets_dir = assets_dir
        self.chapter_map = chapter_map
        self.out: list[str] = []
        self.in_main = False
        self.skip_depth = 0
        self.links: list[str | None] = []
        self.lists: list[tuple[str, int]] = []
        self.in_pre = False
        self.asset_names: dict[str, str] = {}
        self.just_opened_li = False

    def emit(self, value: str) -> None:
        if self.in_main and not self.skip_depth:
            self.out.append(value)

    def local_link(self, href: str) -> str:
        if href.startswith("#"):
            return href
        parsed = urlparse(urljoin(self.page_url, href))
        basename = unquote(Path(parsed.path).name)
        if basename in self.chapter_map:
            target = (self.chapter_map[basename] + ".md").replace(" ", "%20")
            return target + (("#" + parsed.fragment) if parsed.fragment else "")
        return urljoin(self.page_url, href)

    def save_image(self, src: str) -> str:
        if src.startswith(f"{self.assets_dir.name}/"):
            return src
        url = urljoin(self.page_url, src)
        if url in self.asset_names:
            return self.asset_names[url]
        original = safe_name(Path(urlparse(url).path).name)
        stem = Path(original).stem
        suffix = Path(original).suffix or ".bin"
        candidate = original
        counter = 2
        while (self.assets_dir / candidate).exists():
            candidate = f"{stem}-{counter}{suffix}"
            counter += 1
        (self.assets_dir / candidate).write_bytes(fetch(url))
        relative = f"{self.assets_dir.name}/{candidate}"
        self.asset_names[url] = relative
        return relative

    def handle_starttag(self, tag: str, attrs_list: list[tuple[str, str | None]]) -> None:
        attrs = {k: v or "" for k, v in attrs_list}
        if tag == "main" and attrs.get("id") == "quarto-document-content":
            self.in_main = True
            return
        if not self.in_main:
            return
        if tag in {"script", "style", "button", "noscript"}:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        element_id = attrs.get("id")
        if element_id and tag != "main":
            self.emit(f'<a id="{html.escape(element_id, quote=True)}"></a>')
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self.emit("\n\n" + "#" * int(tag[1]) + " ")
        elif tag == "p":
            if self.just_opened_li:
                self.just_opened_li = False
            else:
                self.emit("\n\n")
        elif tag == "br":
            self.emit("  \n")
        elif tag == "hr":
            self.emit("\n\n---\n\n")
        elif tag in {"strong", "b"}:
            self.emit("**")
        elif tag == "em":
            self.emit("*")
        elif tag == "code" and not self.in_pre:
            self.emit("`")
        elif tag == "pre":
            self.in_pre = True
            self.emit("\n\n```\n")
        elif tag == "blockquote":
            self.emit("\n\n> ")
        elif tag in {"ul", "ol"}:
            self.lists.append((tag, 0))
            self.emit("\n")
        elif tag == "li":
            kind, number = self.lists[-1] if self.lists else ("ul", 0)
            if kind == "ol":
                number += 1
                self.lists[-1] = (kind, number)
                marker = f"{number}. "
            else:
                marker = "- "
            self.emit("\n" + "  " * max(0, len(self.lists) - 1) + marker)
            self.just_opened_li = True
        elif tag == "a":
            href = attrs.get("href")
            self.links.append(self.local_link(href) if href else None)
            if href:
                self.emit("[")
        elif tag == "img":
            src = attrs.get("src")
            if src:
                local = self.save_image(src)
                self.emit(f"\n\n![{attrs.get('alt', '')}]({local})\n\n")
        elif tag == "figcaption":
            self.emit("\n\n*")
        elif tag == "dt":
            self.emit("\n\n**")
        elif tag == "dd":
            self.emit("\n\n: ")
        elif tag == "summary":
            self.emit("\n\n**")
        elif tag == "sup":
            self.emit("^")

    def handle_endtag(self, tag: str) -> None:
        if not self.in_main:
            return
        if tag == "main":
            self.in_main = False
            return
        if tag in {"script", "style", "button", "noscript"} and self.skip_depth:
            self.skip_depth -= 1
        elif not self.skip_depth:
            if tag in {"h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "dd"}:
                self.emit("\n\n")
            elif tag in {"strong", "b"}:
                self.emit("**")
            elif tag == "em":
                self.emit("*")
            elif tag == "code" and not self.in_pre:
                self.emit("`")
            elif tag == "pre":
                self.emit("\n```\n\n")
                self.in_pre = False
            elif tag in {"ul", "ol"}:
                if self.lists:
                    self.lists.pop()
                self.emit("\n")
            elif tag == "a":
                href = self.links.pop() if self.links else None
                if href:
                    self.emit(f"]({href})")
            elif tag == "figcaption":
                self.emit("*\n\n")
            elif tag in {"dt", "summary"}:
                self.emit("**")

    def handle_data(self, data: str) -> None:
        if not self.in_main or self.skip_depth:
            return
        if self.in_pre:
            self.emit(data)
        else:
            self.emit(re.sub(r"\s+", " ", data))
        if data.strip():
            self.just_opened_li = False


def preprocess(raw_html: str, assets_dir: Path, chapter_number: str, css: str) -> tuple[str, dict[str, str]]:
    raw_html = re.sub(
        r'<span\b[^>]*class=["\'][^"\']*screen-reader-only[^"\']*["\'][^>]*>.*?</span>',
        "",
        raw_html,
        flags=re.I | re.S,
    )
    math_counter = 0

    def math_repl(match: re.Match[str]) -> str:
        nonlocal math_counter
        opening, body = match.group(1), match.group(2)
        tex_match = re.search(
            r'<annotation[^>]*encoding=["\']application/x-tex["\'][^>]*>(.*?)</annotation>',
            body,
            flags=re.I | re.S,
        )
        if not tex_match:
            return ""
        tex = html.unescape(tex_match.group(1)).strip()
        display = re.search(r'display=["\']block["\']', opening, flags=re.I)
        math_counter += 1
        return f"\n\n$${tex}$$\n\n" if display else f"${tex}$"

    raw_html = re.sub(r"(<math\b[^>]*>)(.*?)</math>", math_repl, raw_html, flags=re.I | re.S)
    svg_counter = 0

    def svg_repl(match: re.Match[str]) -> str:
        nonlocal svg_counter
        svg_counter += 1
        svg = match.group(0)
        root = re.match(r"<svg\b([^>]*)>", svg, flags=re.I | re.S)
        classes = []
        alt = ""
        if root:
            class_match = re.search(r'class=["\']([^"\']+)', root.group(1), flags=re.I)
            alt_match = re.search(r'aria-label=["\']([^"\']+)', root.group(1), flags=re.I)
            classes = class_match.group(1).split() if class_match else []
            alt = html.unescape(alt_match.group(1)) if alt_match else ""
        rules = []
        for selector, declarations in re.findall(r"([^{}]+)\{([^{}]*)\}", css):
            if any(("." + class_name) in selector for class_name in classes):
                rules.append(f"{selector}{{{declarations}}}")
        if rules:
            svg = re.sub(r"(<svg\b[^>]*>)", r"\1<style>" + "".join(rules) + "</style>", svg, count=1, flags=re.I)
        filename = f"{chapter_number}-figure-{svg_counter:02d}.svg"
        (assets_dir / filename).write_text(svg, encoding="utf-8")
        return f'<img src="{assets_dir.name}/{filename}" alt="{html.escape(alt, quote=True)}">'

    raw_html = re.sub(r"<svg\b[^>]*>.*?</svg>", svg_repl, raw_html, flags=re.I | re.S)

    # Raw HTML tables preserve merged cells and equation-heavy layouts better than pipe tables.
    table_counter = 0
    tables: dict[str, str] = {}

    def table_repl(match: re.Match[str]) -> str:
        nonlocal table_counter
        table_counter += 1
        marker = f"KILPAMATEMATIIKKA_TABLE_{table_counter:04d}"
        tables[marker] = match.group(0)
        return f"<p>{marker}</p>"

    raw_html = re.sub(r"<table\b[^>]*>.*?</table>", table_repl, raw_html, flags=re.I | re.S)
    return raw_html, tables


def restore_tables(markdown: str, tables: dict[str, str]) -> str:
    for key, value in tables.items():
        markdown = markdown.replace(key, "\n\n" + value + "\n\n")
    return markdown


def clean(markdown: str, tables: dict[str, str]) -> str:
    markdown = restore_tables(markdown, tables)
    markdown = markdown.replace("\u00ad", "")
    markdown = re.sub(r"[ \t]+\n", "\n", markdown)
    markdown = re.sub(r"\n{3,}", "\n\n", markdown)
    markdown = re.sub(r" +([.,;:!?])", r"\1", markdown)
    return markdown.strip() + "\n"


def main() -> None:
    staging = Path("Kilpamatematiikka.importing")
    if staging.exists():
        shutil.rmtree(staging)
    staging.mkdir()
    css = fetch(urljoin(BASE, "site_libs/bootstrap/bootstrap-304f123d551284118641d909dd58a018.min.css")).decode("utf-8")
    chapter_map = {unquote(url): title for url, title in CHAPTERS}
    index = [
        "# Kilpamatematiikka",
        "",
        "芬兰竞赛数学基础课程的 Markdown 备份。正文、题目和图像来自原课程网站。",
        "",
        f"- 原始课程：{BASE}",
        "- 作者：Olli Järviniemi ja valmennusjaos",
        "",
        "## 目录",
        "",
    ]
    for source_name, title in CHAPTERS:
        print(f"Converting {title}")
        page_url = urljoin(BASE, source_name)
        raw_html = fetch(page_url).decode("utf-8")
        assets_dir = staging / f"{title}.assets"
        assets_dir.mkdir()
        prepared, tables = preprocess(raw_html, assets_dir, title[:2], css)
        parser = MarkdownParser(page_url, assets_dir, chapter_map)
        parser.feed(prepared)
        markdown = clean("".join(parser.out), tables)
        markdown = (
            "---\n"
            f'title: "{title}"\n'
            f'source: "{page_url}"\n'
            'author: "Olli Järviniemi"\n'
            "---\n\n"
            + markdown
            + f"\n---\n\n原文：[{page_url}]({page_url})\n"
        )
        (staging / f"{title}.md").write_text(markdown, encoding="utf-8")
        if not any(assets_dir.iterdir()):
            assets_dir.rmdir()
        index.append(f"- [[{title}]]")
    (staging / "README.md").write_text("\n".join(index) + "\n", encoding="utf-8")
    if OUT.exists():
        raise FileExistsError(f"Refusing to overwrite existing folder: {OUT}")
    staging.rename(OUT)


if __name__ == "__main__":
    main()
