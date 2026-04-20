import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>
        <span className={styles.line} />
        Automatyzacja &amp; AI dla firm
      </div>
      <h1 className={styles.h1}>
        Inteligentne systemy,<br />
        które <em>ułatwiają</em><br />
        życie Twojej firmy
      </h1>
      <p className={styles.value}>
        Więcej klientów. Mniej pracy ręcznej. Od zaraz.
      </p>
      <p className={styles.desc}>
        Łączymy nowoczesne strony z automatyzacjami AI — tworząc systemy,
        które pozyskują klientów i oszczędzają czas.
      </p>
      <div className={styles.btns}>
        <a href="#kontakt" className={styles.btnGreen}>
          Umów bezpłatną rozmowę
        </a>
        <a href="#uslugi" className={styles.btnOutline}>
          Zobacz usługi →
        </a>
      </div>
    </section>
  )
}
