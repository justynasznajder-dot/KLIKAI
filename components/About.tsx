import styles from './About.module.css'

export default function About() {
  const items = [
    'domena i hosting',
    'konfiguracja maili',
    'wdrożenie',
    'bezpieczeństwo i backupy',
    'rozwój i utrzymanie',
  ]
  const process = [
    'jeden opiekun projektu i jasny plan działań',
    'regularne podsumowania postępu prac',
    'etapowe wdrożenia bez zatrzymywania firmy',
    'stałe wsparcie techniczne po starcie',
  ]

  return (
    <section className={styles.section} id="o-nas">
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className={styles.eyebrow}>Full service</div>
          <h2 className={styles.title}>
            Kompleksowa obsługa - nie musisz się <em>niczym martwić</em>
          </h2>
          <p className={styles.desc}>
            Zajmujemy się wszystkim od A do Z.
          </p>
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#kontakt" className={styles.btn}>
            Skontaktuj się
          </a>
        </div>
        <div className={styles.visual}>
          <div className={styles.placeholder}>
            <div className={styles.sideTitle}>Jak to prowadzimy</div>
            <ul className={styles.sideList}>
              {process.map((item) => (
                <li key={`side-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
