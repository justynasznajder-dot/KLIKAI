import styles from './UseCases.module.css'

const schoolItems = [
  'Zarządzanie grupami zajęciowymi i harmonogramami',
  'Elektroniczna lista obecności z automatycznym naliczaniem punktów',
  'Kalendarz dni wolnych i wyjątków grupowych',
  'Obsługa wniosków o odrobienie zajęć',
  'Panel komunikacji z rodzicami - wiadomości i ogłoszenia',
  'Zarządzanie sezonami, katalogiem umiejętności i nagród',
  'Oceny opisowe uczniów na koniec sezonu',
  'System uprawnień - trener, manager szkoły, administrator',
]

const kidsItems = [
  'Własny awatar z systemem poziomów (Żabka -> Mistrz Basenu)',
  'Zdobywanie XP za zaliczone umiejętności pływackie',
  'Monety za obecność wymieniane na nagrody rzeczowe',
  'Customizacja awatara odblokowywana wraz z postępami',
  'Dedykowana aplikacja mobilna',
]

const parentItems = [
  'Podgląd postępów dziecka w czasie rzeczywistym',
  'Historia obecności i zdobytych punktów',
  'Powiadomienia o zajęciach i osiągnięciach dziecka',
  'Wgląd w płatności i ich statusy',
]

const harryItems = [
  'Panel administracyjny do zarządzania kursami, grupami i harmonogramem',
  'Zapisy online na zajęcia i automatyczna organizacja grup',
  'Obsługa płatności internetowych (abonamenty, pojedyncze zajęcia)',
  'Panel dla kursantów i rodziców - dostęp do zajęć, informacji i rozliczeń',
  'Automatyczne powiadomienia (zajęcia, płatności, komunikaty)',
  'Zarządzanie lektorami i organizacją pracy szkoły',
  'Integracje (mail, płatności, kalendarze)',
  'Aplikacja mobilna (w trakcie realizacji) - dostęp do materiałów oraz możliwość wykonywania powtórek po lekcjach na urządzeniach mobilnych',
]

const sportQuestHighlights = [
  'Panel trenerski do obsługi grup, harmonogramów i obecności.',
  'System XP i monet zwiększający motywację dzieci do regularnych zajęć.',
  'Panel rodzica z podglądem postępów, punktów i rozliczeń.',
]

const harryHighlights = [
  'Zapisy online z automatycznym przydziałem do grup i harmonogramu.',
  'Panel szkoły do zarządzania kursami, lektorami i płatnościami.',
  'Panel kursanta i rodzica z dostępem do zajęć, informacji i statusów.',
]

export default function UseCases() {
  return (
    <section className={styles.section} id="realizacje">
      <div className={styles.eyebrow}>Realizacje</div>
      <h2 className={styles.title}>Przykładowe realizacje</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardMain}>
              <div className={styles.cardTitle}>SportQuest - System gamifikacji dla szkół pływania</div>
              <div className={styles.cardDesc}>
                Aplikacja webowa łącząca zarządzanie szkołą pływania z systemem motywacji dla dzieci opartym na mechanizmach gry.
              </div>
              <ul className={styles.highlights}>
                {sportQuestHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.result}>
                <strong>Efekt:</strong> większe zaangażowanie dzieci, lepsza frekwencja i mniej pracy administracyjnej.
              </div>
            </div>
            <div className={styles.previewWrap}>
              <a href="https://sport-quest.vercel.app/" target="_blank" rel="noreferrer" className={styles.previewLink}>
                <img
                  src="/images/projects/SportQuest.png"
                  alt="Podgląd strony SportQuest"
                  className={styles.previewImage}
                />
              </a>
              <a href="https://sport-quest.vercel.app/" target="_blank" rel="noreferrer" className={styles.siteLink}>
                Zobacz stronę
              </a>
            </div>
          </div>
          <details className={styles.details}>
            <summary className={styles.more}>
              <span className={styles.moreLabel}>Zobacz zakres wdrożenia -&gt;</span>
              <span className={styles.lessLabel}>Mniej -&gt;</span>
            </summary>
            <div className={styles.group}>
              <div className={styles.groupTitle}>Dla szkoły i trenerów:</div>
              <ul className={styles.list}>
                {schoolItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.group}>
              <div className={styles.groupTitle}>Dla dzieci:</div>
              <ul className={styles.list}>
                {kidsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.group}>
              <div className={styles.groupTitle}>Dla rodziców:</div>
              <ul className={styles.list}>
                {parentItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </details>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.cardMain}>
              <div className={styles.cardTitle}>Harry English - platforma dla szkoły językowej</div>
              <div className={styles.cardDesc}>
                Nowoczesna strona internetowa połączona z systemem do zarządzania szkołą i obsługi kursantów.
              </div>
              <ul className={styles.highlights}>
                {harryHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.result}>
                <strong>Efekt:</strong> mniej ręcznej pracy, uporządkowana administracja i lepsze doświadczenie kursantów.
              </div>
            </div>
            <div className={styles.previewWrap}>
              <a href="https://www.harry-english.pl/" target="_blank" rel="noreferrer" className={styles.previewLink}>
                <img
                  src="/images/projects/HarryEnglish.png"
                  alt="Podgląd strony Harry English"
                  className={styles.previewImage}
                />
              </a>
              <a href="https://www.harry-english.pl/" target="_blank" rel="noreferrer" className={styles.siteLink}>
                Zobacz stronę
              </a>
            </div>
          </div>
          <details className={styles.details}>
            <summary className={styles.more}>
              <span className={styles.moreLabel}>Zobacz zakres wdrożenia -&gt;</span>
              <span className={styles.lessLabel}>Mniej -&gt;</span>
            </summary>
            <div className={styles.group}>
              <div className={styles.groupTitle}>Kluczowe możliwości:</div>
              <ul className={styles.list}>
                {harryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.group}>
              <div className={styles.groupTitle}>Efekt:</div>
              <div className={styles.cardDesc}>
                mniej ręcznej pracy, uporządkowana administracja i lepsze doświadczenie dla kursantów.
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
