"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS, type Project } from "@/lib/content";
import { INSTAGRAM_URL } from "@/lib/site";
import { Icon } from "./Icon";
import { Lightbox } from "./Lightbox";
import { StatusTag } from "./StatusTag";

const ORDER = ["piedra", "jardin", "clasica", "blackmagic", "aviation", "margarita", "gaia"] as const;
const TOTAL = ORDER.length + 1; // + tarjeta de Instagram

export function ProjectsSlider() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0, id: 0 });
  const [dragging, setDragging] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
  const [photo, setPhoto] = useState(0);
  const [pos, setPos] = useState({ i: 0, left: 0, width: 100, start: true, end: false });

  const stepOf = (el: HTMLDivElement) => {
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "20") || 20;
    return (first ? first.offsetWidth : 300) + gap;
  };

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // El índice se reparte por el recorrido total, así llega a 08/08 al final del carril
    const next = {
      i: max > 0 ? Math.round((el.scrollLeft / max) * (TOTAL - 1)) : 0,
      left: Math.round((el.scrollLeft / el.scrollWidth) * 1000) / 10,
      width: Math.round((el.clientWidth / el.scrollWidth) * 1000) / 10,
      start: el.scrollLeft <= 2,
      end: el.scrollLeft >= max - 2,
    };
    // Sin cambios no se vuelve a renderizar (evita re-render en cada evento de scroll)
    setPos((prev) => (prev.i === next.i && prev.left === next.left && prev.width === next.width && prev.start === next.start && prev.end === next.end ? prev : next));
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * stepOf(el), behavior: reduce ? "auto" : "smooth" });
  };

  // Arrastrar con el mouse (en pantallas táctiles se usa el scroll nativo)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { down: true, moved: false, x: e.clientX, left: track.current?.scrollLeft ?? 0, id: e.pointerId };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = track.current;
    if (!d.down || !el) return;
    if (e.buttons === 0) return endDrag(); // se soltó fuera del carril: no dejar el arrastre colgado
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true;
      setDragging(true);
      el.setPointerCapture(d.id);
    }
    if (d.moved) el.scrollLeft = d.left - dx;
  };
  function endDrag() {
    if (!drag.current.down) return;
    drag.current.down = false;
    setDragging(false);
  }
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className="pslider">
      <div
        ref={track}
        className={"pslider__track" + (dragging ? " is-dragging" : "")}
        role="region"
        aria-label="Proyectos"
        tabIndex={0}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return; // solo con el carril enfocado, no desde una tarjeta
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        }}
      >
        {ORDER.map((id) => {
          const p = PROJECTS[id];
          return (
            <button
              key={id}
              type="button"
              className="pslide"
              aria-haspopup="dialog"
              onClick={() => {
                setActive(p);
                setPhoto(0);
              }}
            >
              <Image src={p.cover} alt={p.alt} fill sizes="(max-width: 700px) 72vw, (max-width: 1000px) 40vw, 300px" draggable={false} />
              <span className="pslide__body">
                <span className="pslide__title">{p.title}</span>
                <span className="pslide__meta">
                  {p.meta} <span aria-hidden="true">·</span> <StatusTag status={p.status} />
                </span>
              </span>
            </button>
          );
        })}
        <a className="pslide pslide--insta" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" draggable={false}>
          <span>Más obras y avances en Instagram</span>
          <span className="pslide__handle">
            @baca_arquitectura <Icon name="move-right" />
          </span>
        </a>
      </div>

      <div className="pslider__bar">
        <span className="pslider__count">
          {String(pos.i + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </span>
        <span className="pslider__progress" aria-hidden="true">
          <i style={{ left: `${pos.left}%`, width: `${pos.width}%` }} />
        </span>
        <span className="pslider__arrows">
          <button type="button" className="baca-iconbtn baca-iconbtn--dark" onClick={() => go(-1)} disabled={pos.start} aria-label="Proyectos anteriores">
            <Icon name="chevron-left" />
          </button>
          <button type="button" className="baca-iconbtn baca-iconbtn--dark" onClick={() => go(1)} disabled={pos.end} aria-label="Proyectos siguientes">
            <Icon name="chevron-right" />
          </button>
        </span>
      </div>

      {active && (
        <Lightbox images={active.gallery} index={photo} title={active.title} onIndexChange={setPhoto} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
