"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="baca-header">
        <div className="baca-header__inner">
          <button type="button" className="baca-header__logo" onClick={goTop} aria-label="BACA Arquitectura & Diseño — inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo/baca-logo-claro.svg" alt="" />
          </button>
          <nav className="baca-header__nav" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a key={l.key} href={l.href} className="baca-header__link">
                {l.label}
              </a>
            ))}
          </nav>
          <Button className="baca-header__cta" variant="blush" size="sm" href={WHATSAPP_URL} target="_blank">
            Hablemos de tu proyecto
          </Button>
          <button
            type="button"
            className="baca-iconbtn baca-iconbtn--plain baca-header__toggle"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </header>

      {open && (
        <div className="baca-menu" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="baca-menu__top">
            <span className="baca-header__logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo/baca-logo-claro.svg" alt="BACA Arquitectura & Diseño" />
            </span>
            <button
              type="button"
              className="baca-iconbtn baca-iconbtn--dark baca-iconbtn--plain"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <Icon name="x" size={24} />
            </button>
          </div>
          <div className="baca-menu__links">
            {NAV_LINKS.map((l, i) => (
              <a key={l.key} href={l.href} className="baca-menu__link" onClick={() => setOpen(false)}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {l.label}
              </a>
            ))}
          </div>
          <Button href={WHATSAPP_URL} target="_blank" size="lg" fullWidth icon="message-circle" iconPosition="start">
            Hablemos de tu proyecto
          </Button>
        </div>
      )}
    </>
  );
}
