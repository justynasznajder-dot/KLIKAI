import styles from './Steps.module.css'

const steps = [
  {
    n: '1',
    title: 'Rozmowa i analiza potrzeb',
    desc: 'Poznajemy Twoje cele biznesowe, obecne narzędzia i największe blokery.',
  },
  {
    n: '2',
    title: 'Propozycja rozwiązania',
    desc: 'Przedstawiamy konkretny plan: co wdrażamy, jak to działa i jaki daje efekt.',
  },
  {
    n: '3',
    title: 'Projekt i development',
    desc: 'Projektujemy interfejs, budujemy logikę systemu i integrujemy niezbędne moduły.',
  },
  {
    n: '4',
    title: 'Wdrożenie',
    desc: 'Uruchamiamy rozwiązanie produkcyjnie i konfigurujemy wszystkie elementy środowiska.',
  },
  {
    n: '5',
    title: 'Wsparcie i rozwój',
    desc: 'Po starcie rozwijamy system i wspieramy Twój zespół na kolejnych etapach.',
  },
]

export default function Steps() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Proces</div>
      <h2 className={styles.title}>Jak wygląda współpraca?</h2>
      <p className={styles.sub}>Jasny proces od pierwszego kontaktu do gotowego rozwiązania.</p>
      <div className={styles.list}>
        {steps.map((s) => (
          <div key={s.n} className={styles.step}>
            <div className={styles.num}>{s.n}</div>
            <div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
