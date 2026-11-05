"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { Icon } from "./Icon";

/** Botón flotante de WhatsApp. */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Aparece al pasar el hero y se oculta al llegar a la CTA / footer (que ya tienen su propio botón).
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 760;
      setShow(y > 760 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <a
      className="baca-wa"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <Icon name="message-circle" />
      <span>Consultar por WhatsApp</span>
    </a>
  );
}
