import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>
        <span className={styles.line} />
        Strony • Systemy • Automatyzacje • AI
      </div>
      <h1 className={styles.h1}>
        Zamieniamy strony w narzędzia,<br />
        które <em>zarabiają</em> i oszczędzają<br />
        Twój czas
      </h1>
      <p className={styles.value}>
        Tworzymy strony, systemy i automatyzacje AI, które realnie wspierają Twój biznes
        - od prostych stron po zaawansowane aplikacje z panelem i integracjami.
      </p>
      <div className={styles.btns}>
        <a href="#kontakt" className={styles.btnGreen}>
          Umów rozmowę
        </a>
        <a href="#uslugi" className={styles.btnOutline}>
          Zobacz ofertę
        </a>
      </div>
      <p className={styles.trust}>Strony • Systemy • Automatyzacje • AI</p>
    </section>
  )
}
