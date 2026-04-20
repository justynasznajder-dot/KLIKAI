import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" width="18" height="18">
        <rect x="2" y="3" width="20" height="14" rx="1"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Strony internetowe',
    desc: 'Nowoczesne, szybkie i dopasowane do Twojego biznesu.',
    points: ['strony firmowe', 'landing page', 'strony sprzedażowe', 'SEO i wydajność'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" width="18" height="18">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Systemy i panele admina',
    desc: 'Budujemy narzędzia, które porządkują Twój biznes.',
    points: ['panel administracyjny', 'zarządzanie użytkownikami', 'zarządzanie treścią', 'integracje'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" width="18" height="18">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Automatyzacje i AI',
    desc: 'Automatyzujemy procesy i wykorzystujemy AI, żeby oszczędzać Twój czas.',
    points: ['automatyzacja procesów', 'chatboty i AI', 'generowanie treści', 'integracje systemów'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" width="18" height="18">
        <rect x="2" y="4" width="12" height="16" rx="2"/>
        <rect x="16" y="7" width="6" height="10" rx="1"/>
      </svg>
    ),
    title: 'Web + Mobile',
    desc: 'Jedna baza danych, jedna logika, wiele możliwości.',
    points: ['aplikacja + strona', 'synchronizacja danych', 'skalowalność', 'niższe koszty'],
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="uslugi">
      <div className={styles.header}>
        <div className={styles.eyebrow}>Oferta</div>
        <h2 className={styles.title}>Usługi, które realnie wspierają sprzedaż i operacje</h2>
        <p className={styles.sub}>Projektujemy i wdrażamy rozwiązania od pierwszej strony po skalowalne aplikacje.</p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <ul className={styles.points}>
              {s.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
