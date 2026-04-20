# AI Context: KLIKAI Homepage

Dokument kontekstowy dla kolejnych chatow AI.
Cel: szybkie wejscie w temat bez ponownego tlumaczenia projektu.

## 1) Projekt i cel biznesowy

- Projekt: landing/sales page dla KLIK.AI.
- Cel: sprzedaz uslug software + AI:
  - strony internetowe
  - systemy/panele admina
  - automatyzacje AI
  - web + mobile (wspolny backend)
  - full service (hosting, domena, utrzymanie)

## 2) Zasady, ktore byly ustalone

- Nie przebudowywac drastycznie UI.
- Trzymac aktualna kolorystyke:
  - dark navy + sky blue + jasne sekcje.
- Zmiany glownie w tresci i lekkim dopracowaniu UX.
- Jezyk i ton: polski, prosty, biznesowy, konkretny.

## 3) Aktualna struktura strony glownej

Kolejnosc komponentow w `app/page.tsx`:

1. `Navbar`
2. `Hero`
3. `Stats` (Problem)
4. `Services` (Oferta)
5. `Benefits` (Co zyskujesz)
6. `About` (Full service)
7. `Steps` (Proces)
8. `UseCases` (Przykladowe realizacje)
9. `CTA`
10. `Footer`

## 4) Nawigacja i anchor links

- `Oferta` -> `#uslugi`
- `Realizacje` -> `#realizacje`
- `Umow sie` -> `#kontakt`

## 5) Realizacje (sekcja kluczowa)

Komponent: `components/UseCases.tsx`

- Pokazane 2 realizacje:
  - SportQuest
  - Harry English
- Kazda ma:
  - tytul + krotki opis
  - 3 najwazniejsze punkty (highlights)
  - linijke "Efekt"
  - preview obrazka po prawej
  - link "Zobacz strone"
  - rozwijane szczegoly `details`:
    - zamkniete: "Zobacz zakres wdrozenia ->"
    - otwarte: "Mniej ->"

Obrazki sa lokalne:

- `/images/projects/SportQuest.png`
- `/images/projects/HarryEnglish.png`

## 6) Co bylo ostatnio poprawiane

- Wieksza czytelnosc fontow w sekcjach:
  - oferta
  - korzysci
  - navbar
- Lepszy UX w realizacjach:
  - mniej pustego miejsca
  - bardziej konkretne CTA
  - podsumowanie efektu przed rozwinieciem

## 7) Preferencje usera (styl wspolpracy)

- Krótkie, konkretne iteracje UI/content.
- Szybkie poprawki "to zmien", "powieksz", "daj inaczej".
- Duzy nacisk na czytelnosc i uklad "jak na screenie".

## 8) Checklist przed kolejnymi zmianami

1. Nie ruszac ustalonej palety w `app/globals.css` bez prosby.
2. Sprawdzic, czy anchors (`#uslugi`, `#realizacje`, `#kontakt`) nadal dzialaja.
3. Po edycji sekcji realizacji zweryfikowac:
   - miniatury widoczne
   - linki prowadza do poprawnych stron
   - details pokazuje poprawne etykiety.
4. Trzymac kompatybilnosc mobilna (media queries w CSS modules).
