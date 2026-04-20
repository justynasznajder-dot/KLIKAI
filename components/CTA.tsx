import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="kontakt">
      <h2 className={styles.title}>
        Masz pomysł? <em>Zróbmy z niego działający system.</em>
      </h2>
      <p className={styles.desc}>
        Powiedz nam co chcesz osiągnąć - zaproponujemy najlepsze rozwiązanie.
      </p>
      <div className={styles.btns}>
        <a href="mailto:kontakt@klikai.com.pl" className={styles.btn}>
          Skontaktuj się
        </a>
        <a href="#kontakt" className={styles.btnOutline}>
          Umów rozmowę
        </a>
      </div>
      <p className={styles.sub}>Szybka odpowiedź · Konkretna propozycja · Realny plan działania</p>
    </section>
  )
}
