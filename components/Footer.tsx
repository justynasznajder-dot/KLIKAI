import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.logo}>
          KLIK<span>.AI</span>
        </div>
        <p className={styles.copy}>klikai.com.pl · klikai.eu</p>
      </div>
      <div className={styles.right}>
        <a href="/polityka-prywatnosci">Polityka prywatności</a>
        <a href="/rodo">RODO</a>
      </div>
    </footer>
  )
}
