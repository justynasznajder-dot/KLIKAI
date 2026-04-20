import styles from './Pricing.module.css'

const packages = [
  {
    name: 'START',
    price: 'od 2 500 zł',
    desc: 'Szybki start w internecie - profesjonalna strona bez zbędnych kosztów',
    features: [
      'strona główna + 2-3 podstrony',
      'nowoczesny wygląd dopasowany do branży',
      'pełna responsywność (telefon / tablet / komputer)',
      'podpięcie domeny i hostingu',
      'podstawowa optymalizacja SEO',
    ],
  },
  {
    name: 'BIZNES',
    badge: 'Najczęściej wybierany',
    price: 'od 6 000 zł',
    desc: 'Strona, która realnie wspiera rozwój Twojej firmy',
    features: [
      'do 6-8 podstron',
      'indywidualny projekt',
      'panel do edycji treści (CMS)',
      'optymalizacja SEO',
      'integracje (Google, mapa, mail)',
      'projekt pod konwersję (pozyskiwanie klientów)',
    ],
  },
  {
    name: 'PRO',
    price: 'od 10 000 zł',
    desc: 'Zaawansowana strona dopasowana do Twojego biznesu',
    features: [
      'do 10-15 podstron lub rozbudowana struktura',
      'pełen indywidualny projekt',
      'dodatkowe funkcjonalności',
      'integracje (newsletter, narzędzia zewnętrzne)',
      'optymalizacja wydajności i szybkości',
      'UX/UI nastawiony na sprzedaż i skalowanie',
    ],
  },
  {
    name: 'SYSTEM / CUSTOM',
    price: 'od 20 000 zł',
    desc: 'Dedykowane rozwiązania i aplikacje webowe',
    features: [
      'indywidualna struktura (bez limitu podstron)',
      'panel administracyjny',
      'logowanie użytkowników',
      'baza danych',
      'automatyzacje procesów',
      'system dopasowany do Twojego biznesu',
      'możliwość rozbudowy o aplikację mobilną',
    ],
  },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="cennik">
      <div className={styles.eyebrow}>Cennik</div>
      <h2 className={styles.title}>Cennik</h2>
      <p className={styles.lead}>
        Ceny mają charakter poglądowy i zależą od zakresu projektu. Umów się na darmowe spotkanie,
        a przygotujemy rekomendację i dokładną wycenę dopasowaną do Twojego biznesu.
      </p>

      <div className={styles.grid}>
        {packages.map((pkg) => (
          <article key={pkg.name} className={`${styles.card} ${pkg.badge ? styles.featured : ''}`}>
            {pkg.badge && <div className={styles.badge}>{pkg.badge}</div>}
            <h3 className={styles.cardTitle}>{pkg.name}</h3>
            <p className={styles.price}>{pkg.price}</p>
            <p className={styles.cardDesc}>{pkg.desc}</p>
            <ul className={styles.points}>
              {pkg.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className={styles.maintenance}>
        <h3 className={styles.maintenanceTitle}>Opieka i utrzymanie</h3>
        <p className={styles.maintenanceDesc}>
          Zapewniamy stałą opiekę nad stroną lub systemem, dzięki czemu wszystko działa stabilnie,
          bezpiecznie i bez Twojego zaangażowania.
        </p>
        <p className={styles.maintenancePrice}>od 150 zł / miesiąc (zakres ustalany indywidualnie)</p>
        <ul className={styles.points}>
          <li>monitoring działania strony / systemu</li>
          <li>aktualizacje techniczne</li>
          <li>kopie zapasowe (backup)</li>
          <li>szybkie reagowanie na błędy</li>
          <li>drobne zmiany i poprawki</li>
          <li>rozwój strony lub systemu</li>
          <li>wsparcie techniczne</li>
        </ul>
        <div className={styles.notes}>
          <p>dodatkowe prace: od 120 zł / h</p>
          <p>automatyzacje / AI: wycena indywidualna</p>
          <p>hosting i infrastruktura: indywidualnie (zależnie od projektu)</p>
        </div>
      </article>

      <p className={styles.disclaimer}>
        Każdy projekt wyceniamy indywidualnie - cena zależy od zakresu i funkcjonalności.
      </p>

      <div className={styles.ctaBox}>
        <h3 className={styles.ctaTitle}>Nie wiesz, który pakiet wybrać?</h3>
        <p className={styles.ctaText}>Napisz do nas - doradzimy najlepsze rozwiązanie dla Twojego biznesu.</p>
        <a href="#kontakt" className={styles.ctaButton}>
          Skontaktuj się
        </a>
      </div>
    </section>
  )
}
