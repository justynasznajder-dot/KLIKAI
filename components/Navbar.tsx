import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        KLIK<span>.AI</span>
      </a>
      <div className={styles.right}>
        <a href="#uslugi">Oferta</a>
        <a href="#cennik">Cennik</a>
        <a href="#realizacje">Realizacje</a>
        <a href="#kontakt" className={styles.cta}>Umów się</a>
      </div>
    </nav>
  )
}
