import styles from './Benefits.module.css'

const benefits = [
  {
    title: 'Więcej klientów',
    desc: 'Narzędzia same generują leady — Ty zamykasz sprzedaż.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="16" height="16">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Oszczędność czasu',
    desc: 'Pozwól narzędziom pracować za Ciebie przez całą dobę.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="16" height="16">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Pełna elastyczność',
    desc: 'Systemy dopasowane do procesów i środowiska firmy.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="16" height="16">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Bezpieczeństwo',
    desc: 'Dane firmy bezpieczne, zgodnie ze standardami RODO.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#5ab535" strokeWidth="2" width="16" height="16">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Dlaczego my</div>
      <h2 className={styles.title}>Realne korzyści dla firmy</h2>
      <div className={styles.grid}>
        {benefits.map((b) => (
          <div key={b.title} className={styles.card}>
            <div className={styles.icon}>{b.icon}</div>
            <div>
              <div className={styles.cardTitle}>{b.title}</div>
              <div className={styles.cardDesc}>{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
