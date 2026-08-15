from __future__ import annotations

import copy
import hashlib
import html as html_module
import re
import subprocess
import time
import urllib.request
from pathlib import Path
from urllib.parse import urljoin, urlparse

from lxml import html
from PIL import Image, ImageOps
from pypdf import PdfReader, PdfWriter
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfgen import canvas


ROOT = Path(r"C:\gitnote\河南专升本历年真题_公共英语与管理学_2020-2026")
SOURCES = ROOT / "_sources"
ENGLISH = ROOT / "公共英语"
MANAGEMENT = ROOT / "管理学"
HTML_DIR = SOURCES / "html"
ASSET_DIR = SOURCES / "assets"
EDGE_PROFILE = SOURCES / "edge-profile"
EDGE = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
PY_FONT = "STSong-Light"

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 Chrome/126 Safari/537.36"
)


def ensure_dirs() -> None:
    for directory in (SOURCES, ENGLISH, MANAGEMENT, HTML_DIR, ASSET_DIR, EDGE_PROFILE):
        directory.mkdir(parents=True, exist_ok=True)


def fetch_bytes(url: str, *, referer: str | None = None, attempts: int = 3) -> bytes:
    headers = {"User-Agent": USER_AGENT, "Accept": "*/*"}
    if referer:
        headers["Referer"] = referer
    request = urllib.request.Request(url, headers=headers)
    last_error: Exception | None = None
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                return response.read()
        except Exception as exc:  # network retry boundary
            last_error = exc
            if attempt + 1 < attempts:
                time.sleep(1.5 * (attempt + 1))
    assert last_error is not None
    raise last_error


def download_file(url: str, target: Path, *, referer: str | None = None) -> Path:
    if target.exists() and target.stat().st_size > 0:
        return target
    data = fetch_bytes(url, referer=referer)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(data)
    return target


def xpath_first(document: html.HtmlElement, xpath: str) -> html.HtmlElement:
    matches = document.xpath(xpath)
    if not matches:
        raise RuntimeError(f"未找到正文节点：{xpath}")
    return matches[0]


def safe_name(value: str) -> str:
    value = re.sub(r"[^0-9A-Za-z._-]+", "_", value).strip("_")
    return value[:100] or "asset"


def image_url(element: html.HtmlElement, base_url: str) -> str:
    source = (
        element.get("data-original")
        or element.get("data-src")
        or element.get("data-echo")
        or element.get("src")
        or ""
    )
    if source.startswith("//"):
        source = "https:" + source
    return urljoin(base_url, source)


def localize_content_images(element: html.HtmlElement, page_url: str, slug: str) -> None:
    destination = ASSET_DIR / slug
    destination.mkdir(parents=True, exist_ok=True)
    for index, image in enumerate(element.xpath(".//img"), 1):
        source = image_url(image, page_url)
        if not source or source.startswith("data:"):
            continue
        parsed = urlparse(source)
        extension = Path(parsed.path).suffix.lower()
        if extension not in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
            extension = ".img"
        digest = hashlib.sha1(source.encode("utf-8")).hexdigest()[:10]
        target = destination / f"{index:03d}_{digest}{extension}"
        try:
            download_file(source, target, referer=page_url)
            image.set("src", target.as_uri())
        except Exception as exc:
            image.set("alt", f"原网页图片加载失败：{source}（{exc}）")
            image.attrib.pop("src", None)
        for attribute in ("data-original", "data-src", "data-echo", "loading"):
            image.attrib.pop(attribute, None)


def clean_content(element: html.HtmlElement, page_url: str, slug: str) -> html.HtmlElement:
    cleaned = copy.deepcopy(element)
    for unwanted in cleaned.xpath(
        ".//script|.//style|.//iframe|.//form|.//button|.//video|.//audio|.//object|.//noscript"
    ):
        unwanted.drop_tree()
    for node in cleaned.xpath(".//*"):
        style = node.get("style") or ""
        style = re.sub(r"position\s*:\s*(?:fixed|sticky)[^;]*;?", "", style, flags=re.I)
        if style:
            node.set("style", style)
        else:
            node.attrib.pop("style", None)
        node.attrib.pop("onclick", None)
    bare_image_pattern = re.compile(r"https?://\S+\.(?:jpe?g|png|webp)(?:\?\S*)?", re.I)
    for node in cleaned.xpath(".//p|.//div"):
        value = " ".join(node.text_content().split())
        if bare_image_pattern.fullmatch(value):
            for child in list(node):
                node.remove(child)
            node.text = None
            image = html.Element("img")
            image.set("src", value)
            node.append(image)
    localize_content_images(cleaned, page_url, slug)
    return cleaned


def extract_block(url: str, xpath: str, slug: str) -> str:
    last_error: Exception | None = None
    for attempt in range(3):
        data = fetch_bytes(url)
        document = html.fromstring(data, base_url=url)
        try:
            element = clean_content(xpath_first(document, xpath), url, slug)
            return html.tostring(element, encoding="unicode", method="html")
        except Exception as exc:
            last_error = exc
            if attempt + 1 < 3:
                time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"正文提取失败：{url}；{last_error}")


def make_html_document(
    *,
    title: str,
    blocks: list[tuple[str, str, str]],
    note: str,
    slug: str,
) -> Path:
    rendered_blocks: list[str] = []
    for index, (section_title, url, xpath) in enumerate(blocks, 1):
        body = extract_block(url, xpath, f"{slug}_{index}")
        rendered_blocks.append(
            "<section class='source-section'>"
            f"<h2>{html_module.escape(section_title)}</h2>"
            f"<p class='source'>来源：<a href='{html_module.escape(url)}'>{html_module.escape(url)}</a></p>"
            f"{body}</section>"
        )
    document = f"""<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>{html_module.escape(title)}</title>
<style>
@page {{ size: A4; margin: 16mm 15mm 17mm; }}
* {{ box-sizing: border-box; }}
html, body {{ margin: 0; padding: 0; }}
body {{ color: #111; font-family: "Times New Roman", "Microsoft YaHei", "SimSun", serif; font-size: 11pt; line-height: 1.58; }}
h1 {{ margin: 0 0 8pt; text-align: center; font-size: 19pt; line-height: 1.3; }}
h2 {{ margin: 16pt 0 7pt; font-size: 14pt; page-break-after: avoid; }}
h3, h4 {{ page-break-after: avoid; }}
.notice {{ margin: 8pt 0 16pt; padding: 8pt 10pt; border: 1px solid #888; background: #f6f6f6; font-size: 9.5pt; }}
.source {{ color: #555; font-size: 8.5pt; overflow-wrap: anywhere; }}
.source-section + .source-section {{ break-before: page; }}
p {{ margin: 5pt 0; }}
img {{ display: block; max-width: 100% !important; height: auto !important; margin: 8pt auto; break-inside: avoid; }}
table {{ width: 100% !important; border-collapse: collapse; break-inside: avoid; }}
td, th {{ border: 1px solid #777; padding: 4pt; vertical-align: top; }}
a {{ color: inherit; text-decoration: none; }}
</style>
</head>
<body>
<h1>{html_module.escape(title)}</h1>
<div class="notice">{html_module.escape(note)}</div>
{''.join(rendered_blocks)}
</body>
</html>"""
    target = HTML_DIR / f"{slug}.html"
    target.write_text(document, encoding="utf-8")
    return target


def print_html_pdf(html_path: Path, pdf_path: Path) -> None:
    if not EDGE.exists():
        raise FileNotFoundError(f"找不到 Edge：{EDGE}")
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    command = [
        str(EDGE),
        "--headless=new",
        "--disable-gpu",
        "--disable-extensions",
        "--no-pdf-header-footer",
        f"--user-data-dir={EDGE_PROFILE}",
        f"--print-to-pdf={pdf_path}",
        html_path.as_uri(),
    ]
    result = subprocess.run(command, check=False, capture_output=True, text=True, timeout=120)
    if result.returncode != 0 or not pdf_path.exists() or pdf_path.stat().st_size < 1000:
        raise RuntimeError(
            f"Edge 生成 PDF 失败：{pdf_path.name}\nreturncode={result.returncode}\n"
            f"stdout={result.stdout}\nstderr={result.stderr}"
        )


def html_to_pdf(
    *,
    output: Path,
    title: str,
    note: str,
    slug: str,
    blocks: list[tuple[str, str, str]],
) -> None:
    source_html = make_html_document(title=title, blocks=blocks, note=note, slug=slug)
    print_html_pdf(source_html, output)


def collect_page_images(url: str, xpath: str, *, pattern: str | None = None) -> list[str]:
    document = html.document_fromstring(fetch_bytes(url), base_url=url)
    sources: list[str] = []
    for image in document.xpath(xpath):
        source = image_url(image, url)
        if not source:
            continue
        if pattern and not re.search(pattern, source, flags=re.I):
            continue
        source = source.replace(
            "https://www.yeluzsb.cn/storage/",
            "https://wzapi-zgclass-com.oss-cn-shanghai.aliyuncs.com/storage/",
        )
        source = source.replace("/q_70/", "/q_100/")
        if source not in sources:
            sources.append(source)
    return sources


def image_pdf(
    *,
    output: Path,
    image_urls: list[str],
    title: str,
    source_url: str,
    slug: str,
) -> None:
    if not image_urls:
        raise RuntimeError(f"没有提取到图片：{title}")
    local_dir = ASSET_DIR / slug
    local_dir.mkdir(parents=True, exist_ok=True)
    local_images: list[Path] = []
    request_referer = source_url.split("；", 1)[0]
    for index, url in enumerate(image_urls, 1):
        extension = Path(urlparse(url).path).suffix.lower()
        if extension not in {".jpg", ".jpeg", ".png", ".webp"}:
            extension = ".img"
        target = local_dir / f"{index:03d}{extension}"
        download_file(url, target, referer=request_referer)
        local_images.append(target)

    page_width, page_height = A4
    pdf = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    pdf.setTitle(title)
    pdf.setAuthor("公开网页资料整理")
    pdf.setSubject(f"来源：{source_url}")
    pdf.setKeywords("河南专升本 真题 非官方整理")
    margin = 6.0
    for path in local_images:
        with Image.open(path) as original:
            image = ImageOps.exif_transpose(original)
            width, height = image.size
            if width <= 0 or height <= 0:
                raise RuntimeError(f"无效图片尺寸：{path}")
        scale = min((page_width - 2 * margin) / width, (page_height - 2 * margin) / height)
        draw_width = width * scale
        draw_height = height * scale
        x = (page_width - draw_width) / 2
        y = (page_height - draw_height) / 2
        pdf.setFillColorRGB(1, 1, 1)
        pdf.rect(0, 0, page_width, page_height, fill=1, stroke=0)
        pdf.drawImage(str(path), x, y, draw_width, draw_height, preserveAspectRatio=True, mask="auto")
        pdf.showPage()
    pdf.save()


def merge_pdfs(inputs: list[Path], output: Path) -> None:
    writer = PdfWriter()
    for source in inputs:
        reader = PdfReader(str(source))
        for page in reader.pages:
            writer.add_page(page)
    with output.open("wb") as handle:
        writer.write(handle)


def split_english_2012_2019() -> None:
    source = SOURCES / "公共英语_2005-2019_来源合集.pdf"
    if not source.exists():
        download_file(
            "https://dev.hnzsb.cn/upload/articles/file/aid_776/"
            "_05-19%E5%B9%B4%E4%B8%93%E5%8D%87%E6%9C%AC%E5%85%AC%E5%85%B1%E8%8B%B1%E8%AF%AD%E7%9C%9F%E9%A2%98_419161263.pdf",
            source,
        )
    reader = PdfReader(str(source))
    page_ranges = {
        2019: ((1, 6), (91, 94)),
        2018: ((7, 12), (95, 98)),
        2017: ((13, 18), (99, 103)),
        2016: ((19, 24), (104, 107)),
        2015: ((25, 30), (108, 111)),
        2014: ((31, 36), (112, 116)),
        2013: ((37, 42), (117, 121)),
        2012: ((43, 48), (122, 127)),
    }
    for year, ranges in page_ranges.items():
        writer = PdfWriter()
        for first, last in ranges:
            for page_number in range(first, last + 1):
                writer.add_page(reader.pages[page_number - 1])
        writer.add_metadata(
            {
                "/Title": f"{year}年河南专升本公共英语真题及参考答案",
                "/Subject": "从公开的2005—2019河南专升本公共英语真题合订本中拆分",
                "/Author": "公开资料整理",
            }
        )
        target = ENGLISH / f"{year}年河南专升本公共英语真题及参考答案.pdf"
        with target.open("wb") as handle:
            writer.write(handle)


def create_notice_pdf(output: Path, title: str, paragraphs: list[str]) -> None:
    pdfmetrics.registerFont(UnicodeCIDFont(PY_FONT))
    page_width, page_height = A4
    pdf = canvas.Canvas(str(output), pagesize=A4, pageCompression=1)
    pdf.setTitle(title)
    pdf.setFont(PY_FONT, 17)
    pdf.drawCentredString(page_width / 2, page_height - 72, title)
    y = page_height - 112
    pdf.setFont(PY_FONT, 10.5)
    max_chars = 44
    for paragraph in paragraphs:
        lines: list[str] = []
        rest = paragraph
        while rest:
            lines.append(rest[:max_chars])
            rest = rest[max_chars:]
        for line in lines:
            if y < 62:
                pdf.showPage()
                pdf.setFont(PY_FONT, 10.5)
                y = page_height - 62
            pdf.drawString(55, y, line)
            y -= 18
        y -= 8
    pdf.save()


def build_english() -> None:
    text_sources = [
        (
            2020,
            "2020年河南专升本公共英语真题",
            "公开网页全文整理；来源并非河南省教育考试院官方原卷，网页未附答案。",
            "english_2020",
            [("试题正文", "https://www.educity.cn/zhuanjieben/333460.html", "//div[contains(@class,'detail_content')]")],
            "2020年河南专升本公共英语真题_公开网页整理.pdf",
        ),
        (
            2021,
            "2021年河南专升本公共英语真题及参考答案解析",
            "公开网页整理；答案与解析由培训网站整理，不是官方答案。",
            "english_2021",
            [("试题与参考答案解析", "https://www.educity.cn/zhuanjieben/3362983.html", "//div[contains(@class,'detail_content')]")],
            "2021年河南专升本公共英语真题及参考答案解析_非官方.pdf",
        ),
        (
            2022,
            "2022年河南专升本公共英语真题及参考答案",
            "网页明确标注为考生回忆版；答案由培训网站整理，不是官方答案。",
            "english_2022",
            [("考生回忆版试题与参考答案", "https://www.233.com/zsb/english/zhenti/202301/04152442354564.html", "//div[contains(@class,'js-news-content-main')]")],
            "2022年河南专升本公共英语真题及参考答案_考生回忆版.pdf",
        ),
        (
            2023,
            "2023年河南专升本公共英语真题",
            "公开网页提供完整题面；标题虽称含解析，但公开正文未给出完整答案，下载附件需要登录，故本PDF只保留公开题面。",
            "english_2023",
            [("公开题面", "https://www.aipta.com/article/8415.html", "//div[contains(@class,'info-body')]")],
            "2023年河南专升本公共英语真题_公开网页整理.pdf",
        ),
    ]
    for _, title, note, slug, blocks, filename in text_sources:
        html_to_pdf(output=ENGLISH / filename, title=title, note=note, slug=slug, blocks=blocks)

    yelu_2024_q = "https://www.yeluzsb.cn/newsdetail?id=859"
    yelu_2024_a = "https://www.yeluzsb.cn/newsdetail?id=860"
    question_images = collect_page_images(
        yelu_2024_q,
        "//div[contains(concat(' ',normalize-space(@class),' '),' detail ')]//img",
        pattern=r"/storage/images/editor/upload/image/",
    )
    answer_images = collect_page_images(
        yelu_2024_a,
        "//div[contains(concat(' ',normalize-space(@class),' '),' detail ')]//img",
        pattern=r"/storage/images/editor/upload/image/",
    )
    image_pdf(
        output=ENGLISH / "2024年河南专升本公共英语真题及参考答案_考生回忆版.pdf",
        image_urls=question_images + answer_images,
        title="2024年河南专升本公共英语真题及参考答案（考生回忆版）",
        source_url=f"{yelu_2024_q}；答案：{yelu_2024_a}",
        slug="english_2024",
    )

    sohu_2025 = "https://www.sohu.com/a/872635726_122070811"
    images_2025 = collect_page_images(
        sohu_2025,
        "//img",
        pattern=r"images01/20250318/.+\.(?:jpe?g|png)",
    )
    # 搜狐正文末图与第11图是同一张写作题的重复排版，答案页为第12图。
    if len(images_2025) == 13:
        images_2025 = images_2025[:12]
    image_pdf(
        output=ENGLISH / "2025年河南专升本公共英语真题及参考答案_回忆整理版.pdf",
        image_urls=images_2025,
        title="2025年河南专升本公共英语真题及参考答案（回忆整理版）",
        source_url=sohu_2025,
        slug="english_2025",
    )

    images_2026 = [
        "https://q6.itc.cn/q_100/images01/20260321/8f5b90336033420980033bc9f7497c92.png",
        "https://q4.itc.cn/q_100/images01/20260321/ebe0717fd4144e938b6659f02c26b4e3.png",
        "https://q7.itc.cn/q_100/images01/20260321/5847e570240c4738b39a98bd9221c712.png",
        "https://q7.itc.cn/q_100/images01/20260321/f711efa4d05144f3b1f9e419ca143968.png",
        "https://q5.itc.cn/q_100/images01/20260321/2ebae978b48d48d19bbee05f56cb36c1.png",
        "https://q1.itc.cn/q_100/images01/20260321/419138ab012e4431862f86de1b56a936.png",
        "https://q0.itc.cn/q_100/images01/20260321/4a64050ef1ac457fa88af8baef28e44e.png",
        "https://q9.itc.cn/q_100/images01/20260321/d35a6bfc5d7e4cf0942a0fdfc9ff5bb7.png",
        "https://q6.itc.cn/q_100/images01/20260321/0dfcb047b70147439da59a730cee0ee5.png",
        "https://q1.itc.cn/q_100/images01/20260321/1884ec9ff98748cda75d238984106b99.png",
        "https://q9.itc.cn/q_100/images01/20260321/7eb0cd1c16f64545a4375b676a7056dc.png",
    ]
    image_pdf(
        output=ENGLISH / "2026年河南专升本公共英语真题_考生回忆版_无答案.pdf",
        image_urls=images_2026,
        title="2026年河南专升本公共英语真题（考生回忆版，无答案）",
        source_url="https://www.sohu.com/a/999381029_122062991",
        slug="english_2026",
    )


def build_management() -> None:
    for year, article in ((2020, 7934),):
        html_to_pdf(
            output=MANAGEMENT / f"{year}年河南专升本管理学真题_公开网页整理.pdf",
            title=f"{year}年河南专升本管理学真题",
            note="公开网页提供题面；答案解析附件需要登录，故本PDF仅保留公开题面。来源不是考试主管部门官方原卷。",
            slug=f"management_{year}",
            blocks=[("公开题面", f"https://www.aipta.com/article/{article}.html", "//div[contains(@class,'info-body')]")],
        )

    html_to_pdf(
        output=MANAGEMENT / "2021年河南专升本管理学真题及部分参考答案解析_非官方.pdf",
        title="2021年河南专升本管理学真题及部分参考答案解析",
        note="培训网站整理版；大部分题目附答案或解析，但最后案例题答案并不完整，不是官方答案。",
        slug="management_2021",
        blocks=[("试题与部分参考答案解析", "https://www.educity.cn/zhuanjieben/363076.html", "//div[contains(@class,'detail_content')]")],
    )

    html_to_pdf(
        output=MANAGEMENT / "2022年河南专升本管理学真题及部分主观题参考答案_回忆整理版.pdf",
        title="2022年河南专升本管理学真题及部分主观题参考答案",
        note="完整题面来自公开网页；主观题参考答案页明确称考生回忆版。答案由培训网站整理，不是官方答案。",
        slug="management_2022",
        blocks=[
            ("完整公开题面", "https://www.aipta.com/article/7936.html", "//div[contains(@class,'info-body')]") ,
            ("部分主观题参考答案", "https://www.233.com/zsb/zyk/zhenti/202301/04164202965839.html", "//div[contains(@class,'js-news-content-main')]") ,
        ],
    )

    for year, article in ((2023, 7937), (2024, 10269), (2025, 10270)):
        html_to_pdf(
            output=MANAGEMENT / f"{year}年河南专升本管理学真题_公开网页整理.pdf",
            title=f"{year}年河南专升本管理学真题",
            note=(
                "公开网页题面整理；答案解析附件需要登录，故本PDF只保留公开题面。"
                + ("该年份公开资料属于回忆或还原整理，并非官方原卷。" if year >= 2023 else "")
            ),
            slug=f"management_{year}",
            blocks=[("公开题面", f"https://www.aipta.com/article/{article}.html", "//div[contains(@class,'info-body')]")],
        )

    images_2026 = [
        "https://q5.itc.cn/q_100/images01/20260322/28e3077562474736adee0d7db1c8bc59.jpeg",
        "https://q3.itc.cn/q_100/images01/20260322/84ff2e80a4c94a8399d7eae993636ecb.jpeg",
        "https://q6.itc.cn/q_100/images01/20260322/b4bcc8c073e04e3b9bb58363e9faecfd.jpeg",
        "https://q0.itc.cn/q_100/images01/20260322/23096f8846a74028856315b0aa6933c1.jpeg",
        "https://q0.itc.cn/q_100/images01/20260322/6ad030c2e6e14ab7adcaac4f340f16da.jpeg",
        "https://q4.itc.cn/q_100/images01/20260322/40b784208680462f8038c7b8200b068d.jpeg",
        "https://q6.itc.cn/q_100/images01/20260322/413f2eb152874701a7d444e4b1c20c98.jpeg",
        "https://q9.itc.cn/q_100/images01/20260322/5ef66429dfdd4a9785e69529f6f3ba14.jpeg",
        "https://q2.itc.cn/q_100/images01/20260322/43cc60586d704960872a46ba6d35731a.jpeg",
        "https://q4.itc.cn/q_100/images01/20260322/769536f6afc34a63be6ebdc513dda062.jpeg",
    ]
    image_pdf(
        output=MANAGEMENT / "2026年河南专升本管理学真题_考生回忆版_无答案.pdf",
        image_urls=images_2026,
        title="2026年河南专升本管理学真题（考生回忆版，无答案）",
        source_url="https://www.sohu.com/a/999626262_122070811",
        slug="management_2026",
    )


def validate() -> None:
    rows: list[str] = ["科目\t文件\t页数\t大小(Byte)\t可提取文本字符数"]
    errors: list[str] = []
    for subject, directory in (("公共英语", ENGLISH), ("管理学", MANAGEMENT)):
        files = sorted(directory.glob("*.pdf"))
        if len(files) != 7:
            errors.append(f"{subject} PDF数量应为7，实际为{len(files)}")
        for path in files:
            try:
                reader = PdfReader(str(path))
                text_count = sum(len((page.extract_text() or "").strip()) for page in reader.pages)
                rows.append(f"{subject}\t{path.name}\t{len(reader.pages)}\t{path.stat().st_size}\t{text_count}")
                if not reader.pages:
                    errors.append(f"空PDF：{path}")
            except Exception as exc:
                errors.append(f"无法读取PDF：{path}：{exc}")
    (SOURCES / "PDF校验结果.tsv").write_text("\n".join(rows) + "\n", encoding="utf-8-sig")
    if errors:
        raise RuntimeError("\n".join(errors))


def main() -> None:
    ensure_dirs()
    build_english()
    build_management()
    validate()
    print("DONE")


if __name__ == "__main__":
    main()
