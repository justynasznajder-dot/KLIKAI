import styles from './Benefits.module.css'

const benefits = [
  'mniej ręcznej pracy',
  'automatyzację procesów',
  'lepszą obsługę klientów',
  'więcej czasu na rozwój biznesu',
  'system, który rośnie razem z Tobą',
]

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Korzyści</div>
      <h2 className={styles.title}>Co zyskujesz?</h2>
      <div className={styles.grid}>
        {benefits.map((b) => (
          <div key={b} className={styles.card}>
            <div className={styles.icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" width="16" height="16">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className={styles.cardTitle}>{b}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
