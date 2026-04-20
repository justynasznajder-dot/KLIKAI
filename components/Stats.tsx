import styles from './Stats.module.css'

const problems = [
  'masz stronę, ale nie przynosi klientów',
  'robisz dużo rzeczy ręcznie (maile, excel, chaos)',
  'tracisz czas na powtarzalne zadania',
  'brakuje Ci systemu do zarządzania',
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Problem</div>
      <h2 className={styles.title}>Czy Twoja strona naprawdę pracuje dla Ciebie?</h2>
      <ul className={styles.list}>
        {problems.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
      <p className={styles.end}>To właśnie rozwiązujemy.</p>
    </section>
  )
}
