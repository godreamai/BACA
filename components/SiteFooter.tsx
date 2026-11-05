import { FACEBOOK_URL, INSTAGRAM_URL, MAPS_URL, NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="baca-footer">
      <div className="baca-footer__inner">
        <div className="baca-footer__top">
          <div className="baca-footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="baca-footer__logo" src="/assets/logo/baca-logo-oscuro.svg" alt="BACA Arquitectura & Diseño" />
            <p>Arquitectura, diseño y acompañamiento de obra. Arq. Facundo Bató.</p>
          </div>
          <nav aria-label="Secciones">
            <div className="baca-footer__label">Navegación</div>
            <div className="baca-footer__list">
              {NAV_LINKS.map((l) => (
                <a key={l.key} href={l.href}>{l.label}</a>
              ))}
            </div>
          </nav>
          <div>
            <div className="baca-footer__label">Contacto</div>
            <div className="baca-footer__list">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div>
            <div className="baca-footer__label">Ubicación</div>
            <div className="baca-footer__list">
              <span>Buenos Aires, Argentina</span>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
            </div>
          </div>
        </div>
        <div className="baca-footer__bottom">
          <span>© {year} BACA Arquitectura &amp; Diseño</span>
          <a
            className="baca-footer__credit"
            href="https://webs.godreamai.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Creado por GDAI (se abre en una pestaña nueva)"
          >
            <span>Creado por</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo/gdai-blanco.png" alt="" width={583} height={301} />
          </a>
        </div>
      </div>
    </footer>
  );
}
