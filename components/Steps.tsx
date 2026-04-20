import styles from './Steps.module.css'

const steps = [
  {
    n: '1',
    title: 'Analizujemy Twoje procesy',
    desc: 'Rozmawiamy o potrzebach i diagnozujemy, co można zautomatyzować — bez żargonu, konkretnie.',
  },
  {
    n: '2',
    title: 'Ustawiamy automatyzacje',
    desc: 'Projektujemy i wdrażamy rozwiązania działające 24/7, dopasowane do Twojego środowiska.',
  },
  {
    n: '3',
    title: 'Ty oszczędzasz czas',
    desc: 'Praca staje się prostsza, szybsza i bardziej efektywna — od razu po wdrożeniu.',
  },
]

export default function Steps() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Jak działamy</div>
      <h2 className={styles.title}>Trzy proste kroki</h2>
      <p className={styles.sub}>Od pierwszej rozmowy do działającego systemu.</p>
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
