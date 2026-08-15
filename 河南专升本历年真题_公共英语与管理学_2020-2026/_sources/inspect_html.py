from __future__ import annotations

import re
import sys
import urllib.request
from urllib.parse import urljoin

from lxml import html


def fetch(url: str) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 Chrome/126 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


for page_url in sys.argv[1:]:
    document = html.fromstring(fetch(page_url))
    print(f"\nURL: {page_url}")
    print("TITLE:", document.xpath("string(//h1[1])").strip())
    candidates = []
    for element in document.xpath("//article|//main|//div"):
        text_length = len(" ".join(element.text_content().split()))
        image_count = len(element.xpath(".//img"))
        if text_length >= 500 or image_count >= 5:
            candidates.append(
                (
                    text_length,
                    image_count,
                    element.tag,
                    element.get("id") or "",
                    element.get("class") or "",
                )
            )
    print("CANDIDATES:")
    for candidate in sorted(candidates, reverse=True)[:12]:
        print("  ", candidate)
    for index, image in enumerate(document.xpath("//img"), 1):
        source = (
            image.get("data-original")
            or image.get("data-src")
            or image.get("src")
            or ""
        )
        source = urljoin(page_url, source)
        parent = image.getparent()
        parent_class = ""
        if parent is not None:
            parent_class = parent.get("class") or ""
        if source and not re.search(r"(?:logo|avatar|icon|qr|code)", source, re.I):
            print(index, image.get("class"), parent_class, source)
