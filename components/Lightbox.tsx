"use client";

import { useEffect, useRef } from "react";
import type { Photo } from "@/lib/content";
import { Icon } from "./Icon";

export function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: {
  images: Photo[];
  index: number;
  title: string;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const n = images.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const go = (d: number) => onIndexChange((index + d + n) % n);

  // Teclado, bloqueo de scroll y foco inicial
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const img = images[index];
  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <div className="baca-lightbox" role="dialog" aria-modal="true" aria-label={title || "Galería"}>
      <div className="baca-lightbox__bar">
        <span>
          {pad(index + 1)} / {pad(n)}
        </span>
        <button ref={closeRef} type="button" className="baca-iconbtn" onClick={onClose} aria-label="Cerrar">
          <Icon name="x" />
        </button>
      </div>
      <div className="baca-lightbox__stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={index} src={img.src} alt={img.alt} />
      </div>
      <div className="baca-lightbox__caption">
        <span>{img.caption || title}</span>
        {n > 1 && (
          <span style={{ display: "flex", gap: 10 }}>
            <button type="button" className="baca-iconbtn" onClick={() => go(-1)} aria-label="Anterior">
              <Icon name="chevron-left" />
            </button>
            <button type="button" className="baca-iconbtn" onClick={() => go(1)} aria-label="Siguiente">
              <Icon name="chevron-right" />
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
