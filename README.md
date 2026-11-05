# BACA Arquitectura & Diseño — sitio web

Landing en Next.js (App Router + TypeScript).

## Cómo correrlo
```bash
npm install
npm run dev        # desarrollo → http://localhost:3000
npm run build      # build de producción
npm start          # sirve el build
```

## Variables de entorno (opcional, `.env.local`)
Ver `.env.example`.

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Dominio público (Open Graph, sitemap, robots). Ponerlo antes de publicar. |
| `NEXT_PUBLIC_SHOW_REVIEW_NOTES` | `true` muestra los avisos internos "Pendiente de validación". |

## Dónde tocar cada cosa
- Textos de proyectos, servicios, pasos y preguntas: `lib/content.ts` y `components/Differentials.tsx`.
- Links (WhatsApp, Instagram, Facebook, Maps) y navegación: `lib/site.ts`.
- Estructura de la página: `app/page.tsx`.
- Estilos de secciones: `app/site.css`. Tokens (colores, tipografía, espaciado): `app/styles/`.
- Fotos y logos: `public/assets/`. Imagen para compartir el link: `public/og.png`. Ícono: `app/icon.svg`.

## Pendientes antes de publicar
- Reemplazar las fotos provisionales (382×462 px) por originales en alta resolución y sin marcas de agua de terceros.
- Confirmar nombres, estados y alcance de servicios (ver avisos con `NEXT_PUBLIC_SHOW_REVIEW_NOTES=true`).
- Definir `NEXT_PUBLIC_SITE_URL` con el dominio real.
