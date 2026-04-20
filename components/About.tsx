import styles from './About.module.css'

export default function About() {
  const items = [
    'domena i hosting',
    'konfiguracja maili',
    'wdrożenie',
    'bezpieczeństwo i backupy',
    'rozwój i utrzymanie',
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
            <div className={styles.sideTitle}>W pakiecie otrzymujesz</div>
            <ul className={styles.sideList}>
              {items.map((item) => (
                <li key={`side-${item}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
