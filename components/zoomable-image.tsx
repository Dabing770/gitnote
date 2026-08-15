"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <>
      <button className="article-image-button" type="button" onClick={() => setOpen(true)}>
        <img src={src} alt={alt} loading="lazy" />
      </button>
      {open && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" aria-label="Close image preview" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
          <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
