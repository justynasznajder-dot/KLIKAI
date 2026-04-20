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
      <div className={styles.contact} id="dane-kontaktowe">
        <div className={styles.contactTitle}>Dane kontaktowe</div>
        <p>RAFAŁ MAKOWSKI FIRMA HANDLOWO-USŁUGOWA MA-KOL</p>
        <p>ul. Kingi 14D</p>
        <p>41-711 Ruda Śląska</p>
        <p>kom. 609 174 700</p>
        <p>NIP: 6412345272</p>
        <p>REGON: 241514614</p>
      </div>
      <div className={styles.right}>
        <a href="/polityka-prywatnosci">Polityka prywatności</a>
        <a href="/rodo">RODO</a>
      </div>
    </footer>
  )
}
