import styles from './Stats.module.css'

const stats = [
  { num: '24', suffix: '/7', label: 'Działanie' },
  { num: '100', suffix: '%', label: 'RODO' },
  { num: '3', suffix: 'x', label: 'Więcej leadów' },
]

export default function Stats() {
  return (
    <div className={styles.bar}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.num}>
            {s.num}<span>{s.suffix}</span>
          </div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
