# maria-portfolio

CV/portafolio de María Pacheco (versión B, sin juego). Next.js 15 (App Router) + React 19, sin dependencias extra.

## Correr

```bash
npm install
npm run dev     # http://localhost:3000  (ES)  ·  http://localhost:3000/en  (EN)
npm run build && npm start
```

## Rutas

- `/` → español (`app/(es)`), `<html lang="es">`
- `/en` → inglés (`app/(en)/en`), `<html lang="en">`

Cada idioma tiene su propio root layout (route groups) con su metadata, canonical y `hreflang`. El botón ES/EN enlaza entre las dos rutas.

## Dónde se edita

- **Textos ES/EN, proyectos, videos, experiencia:** `content/content.ts`
- **Links (redes, correo, CV):** `links` en `content/content.ts`
- **Estilos y tokens de color:** `app/globals.css`
- **Imágenes:** `public/images/`

## Pendiente

- Sube el PDF del CV a `public/cv-maria-pacheco.pdf` (o cambia `links.cv`).
- Define `NEXT_PUBLIC_SITE_URL` con el dominio final (por defecto `https://dev.mariacacacho.com`) para que las URLs de OG/canonical sean correctas.
- Opcional: link de cada video a su post (agrega `href` en `videos` y envuelve la tarjeta en `<a>`).
- Favicon: agrega `app/(es)/icon.png` y `app/(en)/icon.png`, o un `public/favicon.ico`.
