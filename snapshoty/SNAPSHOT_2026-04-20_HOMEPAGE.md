# Snapshot: Homepage Sales Version (2026-04-20)

Ten plik jest checkpointem obecnego stanu strony glownej i sluzy jako punkt powrotu.

## Stan projektu

- Stack: Next.js (App Router), TSX + CSS Modules.
- Strona glowna sklada sie z:
  - `Navbar`
  - `Hero`
  - `Stats` (sekcja Problem)
  - `Services` (sekcja Oferta)
  - `Benefits`
  - `About` (Full service)
  - `Steps` (Proces)
  - `UseCases` (Realizacje)
  - `CTA`
  - `Footer`

## Aktywna paleta kolorow (`app/globals.css`)

```css
:root {
  --navy: #0f1923;
  --green: #38bdf8;
  --green-light: #f0f9ff;
  --green-border: #bae6fd;
  --green-mid: #7dd3fc;
  --green-card: #f0f9ff;
  --text-muted: #64748b;
  --text-body: #475569;
  --border: #e2e8f0;
  --border-sec: #e8ecf0;
}
```

## Nawigacja (header)

- `Oferta` -> `#uslugi`
- `Realizacje` -> `#realizacje`
- `Umow sie` -> `#kontakt`

## Najwazniejsze tresci (stan aktualny)

- Hero:
  - "Zamieniamy strony w narzedzia, ktore zarabiaja i oszczedzaja Twoj czas"
  - CTA: "Umow rozmowe", "Zobacz oferte"
- Problem:
  - "Czy Twoja strona naprawde pracuje dla Ciebie?"
  - zakonczenie: "Umow sie na rozmowe, mamy na to sprawdzone sposoby."
- Oferta:
  - 4 bloki: Strony internetowe, Systemy i panele admina, Automatyzacje i AI, Web + Mobile
- Korzysci:
  - 5 punktow (mniej recznej pracy, automatyzacja, itd.)
- Full service:
  - kompleksowa obsluga A-Z
- Proces:
  - 5 krokow wspolpracy
- Realizacje:
  - SportQuest i Harry English
  - widok skrocony + "Zobacz zakres wdrozenia ->" (details)
  - miniatury z lokalnych PNG
- Final CTA:
  - "Masz pomysl? Zrobmy z niego dzialajacy system."

## Lokalizacje obrazkow realizacji

- `public/images/projects/SportQuest.png`
- `public/images/projects/HarryEnglish.png`

## Pliki kluczowe do przywrocenia checkpointu

- `app/page.tsx`
- `app/globals.css`
- `components/Navbar.tsx`
- `components/Navbar.module.css`
- `components/Hero.tsx`
- `components/Hero.module.css`
- `components/Stats.tsx`
- `components/Stats.module.css`
- `components/Services.tsx`
- `components/Services.module.css`
- `components/Benefits.tsx`
- `components/Benefits.module.css`
- `components/About.tsx`
- `components/About.module.css`
- `components/Steps.tsx`
- `components/Steps.module.css`
- `components/UseCases.tsx`
- `components/UseCases.module.css`
- `components/CTA.tsx`
- `components/CTA.module.css`
- `components/Footer.tsx`
- `components/Footer.module.css`

## Jak wrocic do tego stanu

Najprostsza metoda:

1. Cofnij zmiany w plikach kluczowych do wersji zapisanej w historii IDE lub VCS (jesli uruchomisz git).
2. Upewnij sie, ze obrazki w `public/images/projects/` nadal istnieja.
3. Zweryfikuj:
   - `#uslugi`, `#realizacje`, `#kontakt`
   - sekcja Realizacje rozwija sie poprawnie (`Zobacz zakres wdrozenia ->` / `Mniej ->`)

Jesli chcesz twardy restore w 1 kroku, warto teraz zrobic commit checkpoint.
