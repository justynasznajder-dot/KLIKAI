import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="18" height="18">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Automatyzacje AI',
    desc: 'Zamieniamy powtarzalne, ręczne zadania na automatyczne procesy oparte o sztuczną inteligencję.',
    link: '#kontakt',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="18" height="18">
        <rect x="2" y="3" width="20" height="14" rx="1"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Strony internetowe',
    desc: 'Tworzymy nowoczesne strony sprzedażowe, zoptymalizowane pod kątem konwersji.',
    link: '#kontakt',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="18" height="18">
        <circle cx="7" cy="8" r="3"/>
        <circle cx="17" cy="16" r="3"/>
        <path d="M10 8.5l4 3"/>
      </svg>
    ),
    title: 'Integracje systemów',
    desc: 'Łączymy różne narzędzia w jeden spójny ekosystem, który działa płynnie i bez błędów.',
    link: '#kontakt',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="uslugi">
      <div className={styles.header}>
        <div className={styles.eyebrow}>Co robimy</div>
        <h2 className={styles.title}>Trzy filary Twojego sukcesu</h2>
        <p className={styles.sub}>Kompleksowe podejście do automatyzacji i obecności online.</p>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <a href={s.link} className={styles.link}>Więcej →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
