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
      <details className={styles.contactBox}>
        <summary className={styles.btn}>Skontaktuj się z nami</summary>
        <form className={styles.form} action="mailto:kontakt@klikai.com.pl" method="post" encType="text/plain">
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Imię i nazwisko</span>
              <input type="text" name="imie_i_nazwisko" placeholder="Np. Jan Kowalski" required />
            </label>
            <label className={styles.field}>
              <span>Adres e-mail</span>
              <input type="email" name="email" placeholder="np. kontakt@firma.pl" required />
            </label>
          </div>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Telefon</span>
              <input type="tel" name="telefon" placeholder="Np. +48 500 000 000" />
            </label>
            <label className={styles.field}>
              <span>Temat</span>
              <input type="text" name="temat" placeholder="Np. Nowa strona firmowa" />
            </label>
          </div>
          <label className={styles.field}>
            <span>Wiadomość</span>
            <textarea name="wiadomosc" rows={5} placeholder="Napisz krótko, czego potrzebujesz." required />
          </label>
          <button type="submit" className={styles.submit}>
            Wyślij zapytanie
          </button>
        </form>
      </details>
      <p className={styles.sub}>Szybka odpowiedź · Konkretna propozycja · Realny plan działania</p>
    </section>
  )
}
