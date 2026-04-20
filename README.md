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

## Google Analytics 4 (GA4)

1. Skopiuj `.env.example` do `.env.local`.
2. Uzupełnij identyfikator GA4:
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Uruchom ponownie dev server (`npm run dev`).

Integracja jest dodana globalnie w `app/layout.tsx` i ładuje się tylko wtedy, gdy `NEXT_PUBLIC_GA_ID` jest ustawione.

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

## Kontekst i snapshoty

- `kontekst/` - dokumenty opisujące aktualny stan projektu i ustalenia do dalszej pracy z AI.
- `snapshoty/` - checkpointy konkretnych etapów (co bylo wdrożone i jak wrócić do stanu).

Przyklad:
- `kontekst/AI_CONTEXT.md`
- `snapshoty/SNAPSHOT_2026-04-20_HOMEPAGE.md`

## Jak przywrócić snapshot (workflow)

1. Otwórz wybrany plik z folderu `snapshoty/` i sprawdź listę plików kluczowych.
2. Wprowadź rollback tylko dla tych plików (z historii IDE, gita albo ręcznie).
3. Upewnij się, że assety (np. obrazy w `public/images/projects/`) nadal istnieją.
4. Uruchom lokalnie:
   - `npm run dev`
5. Zweryfikuj sekcje i anchor links (`#uslugi`, `#realizacje`, `#kontakt`).
