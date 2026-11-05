"use client";

import { useId, useState } from "react";
import { Icon } from "./Icon";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(-1);
  const uid = useId();
  return (
    <div className="baca-accordion">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.question} className={"baca-accordion__item" + (isOpen ? " baca-accordion__item--open" : "")}>
            <h3 style={{ font: "inherit", margin: 0 }}>
              <button
                type="button"
                className="baca-accordion__trigger"
                id={`${uid}-t${i}`}
                aria-expanded={isOpen}
                aria-controls={`${uid}-p${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{it.question}</span>
                <Icon name="plus" size={20} />
              </button>
            </h3>
            <div className="baca-accordion__panel" id={`${uid}-p${i}`} role="region" aria-labelledby={`${uid}-t${i}`}>
              <div>
                <p>{it.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
