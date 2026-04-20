import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        KLIK<span>.AI</span>
      </div>
      <div className={styles.right}>
        <a href="#uslugi">Automatyzacje</a>
        <a href="#uslugi">Strony</a>
        <a href="#uslugi">Systemy</a>
        <a href="#kontakt" className={styles.cta}>Umów się</a>
      </div>
    </nav>
  )
}
