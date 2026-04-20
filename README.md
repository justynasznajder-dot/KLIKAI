# KLIK.AI — Strona internetowa

Projekt Next.js 14 z TypeScript i CSS Modules.

## Uruchomienie lokalne (Cursor)

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom serwer deweloperski
npm run dev
```

Strona będzie dostępna pod: **http://localhost:3000**

## Struktura projektu

```
klikai/
├── app/
│   ├── globals.css        # Zmienne CSS, fonty, reset
│   ├── layout.tsx         # Root layout z metadanymi SEO
│   └── page.tsx           # Strona główna
├── components/
│   ├── Navbar.tsx / .css
│   ├── Hero.tsx / .css
│   ├── Stats.tsx / .css
│   ├── Services.tsx / .css
│   ├── Steps.tsx / .css
│   ├── Benefits.tsx / .css
│   ├── About.tsx / .css
│   ├── CTA.tsx / .css
│   └── Footer.tsx / .css
├── public/                # Dodaj tu: team.jpg, favicon.ico, og-image.jpg
├── next.config.js
├── package.json
├── tsconfig.json
└── vercel.json
```

## Deploy na Vercel

### Opcja 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Opcja 2 — GitHub + Vercel Dashboard
1. Wrzuć projekt na GitHub
2. Wejdź na vercel.com → New Project
3. Zaimportuj repo → Deploy

## Co warto dodać przed deployem

- [ ] Zdjęcie zespołu → `/public/team.jpg` (podmień placeholder w `About.tsx`)
- [ ] Favicon → `/public/favicon.ico`
- [ ] OG image → `/public/og-image.jpg` (1200×630px)
- [ ] Adres email w `CTA.tsx` (`kontakt@klikai.com.pl`)
- [ ] Domena w `app/layout.tsx` (openGraph.url)

## Kolory marki

| Nazwa       | Hex       |
|-------------|-----------|
| Granat      | `#1a2940` |
| Zieleń      | `#5ab535` |
| Tło zielone | `#f2f8ee` |
