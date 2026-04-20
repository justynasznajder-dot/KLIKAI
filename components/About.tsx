import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="o-nas">
      <div className={styles.grid}>
        <div className={styles.text}>
          <div className={styles.eyebrow}>Kim jesteśmy</div>
          <h2 className={styles.title}>
            Budujemy systemy,<br />
            które <em>naprawdę działają</em>
          </h2>
          <p className={styles.desc}>
            Łączymy strony z automatyzacjami AI — tworzymy systemy, które
            pozyskują klientów i oszczędzają czas. Bez obietnic bez pokrycia.
          </p>
          <a href="#kontakt" className={styles.btn}>
            Umów się na rozmowę
          </a>
        </div>
        <div className={styles.visual}>
          {/* Zastąp tą sekcję zdjęciem zespołu: <Image src="/team.jpg" alt="Zespół KLIK.AI" fill /> */}
          <div className={styles.placeholder}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="30" cy="26" r="16" fill="rgba(255,255,255,0.12)" stroke="rgba(90,181,53,0.5)" strokeWidth="1.5"/>
              <circle cx="30" cy="26" r="8" fill="rgba(90,181,53,0.4)"/>
              <circle cx="54" cy="26" r="16" fill="rgba(255,255,255,0.08)" stroke="rgba(90,181,53,0.3)" strokeWidth="1.5"/>
              <circle cx="54" cy="26" r="8" fill="rgba(90,181,53,0.2)"/>
              <rect x="8" y="52" width="64" height="22" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(90,181,53,0.25)" strokeWidth="1.5"/>
            </svg>
            <span className={styles.placeholderText}>Dodaj zdjęcie zespołu</span>
          </div>
        </div>
      </div>
    </section>
  )
}
