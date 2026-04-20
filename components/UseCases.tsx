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

export default function UseCases() {
  return (
    <section className={styles.section} id="realizacje">
      <div className={styles.eyebrow}>Realizacje</div>
      <h2 className={styles.title}>Przykładowe realizacje</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>SportQuest - System gamifikacji dla szkół pływania</div>
          <div className={styles.cardDesc}>
            Aplikacja webowa łącząca zarządzanie szkołą pływania z systemem motywacji dla dzieci opartym na mechanizmach gry.
          </div>
          <a href="https://sport-quest.vercel.app/" target="_blank" rel="noreferrer" className={styles.siteLink}>
            Zobacz stronę
          </a>
          <details className={styles.details}>
            <summary className={styles.more}>
              <span className={styles.moreLabel}>Więcej -&gt;</span>
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
          <div className={styles.cardTitle}>Harry English - platforma dla szkoły językowej</div>
          <div className={styles.cardDesc}>
            Nowoczesna strona internetowa połączona z systemem do zarządzania szkołą i obsługi kursantów.
          </div>
          <a href="https://www.harry-english.pl/" target="_blank" rel="noreferrer" className={styles.siteLink}>
            Zobacz stronę
          </a>
          <details className={styles.details}>
            <summary className={styles.more}>
              <span className={styles.moreLabel}>Więcej -&gt;</span>
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
