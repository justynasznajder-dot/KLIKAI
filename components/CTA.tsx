import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="kontakt">
      <h2 className={styles.title}>
        Gotowy na <em>automatyzację</em>?
      </h2>
      <p className={styles.desc}>
        Umów bezpłatną rozmowę i sprawdź,<br />
        co możemy zautomatyzować w Twojej firmie.
      </p>
      <a href="mailto:kontakt@klikai.com.pl" className={styles.btn}>
        Umów się teraz
      </a>
      <p className={styles.sub}>
        Bezpłatna konsultacja · Bez zobowiązań · Odpowiadamy w 24h
      </p>
    </section>
  )
}
