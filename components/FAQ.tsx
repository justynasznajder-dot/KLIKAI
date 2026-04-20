import styles from './FAQ.module.css'

const faq = [
  {
    q: 'Ile trwa wdrożenie?',
    a: 'Proste strony wdrażamy zwykle w 2-4 tygodnie, a większe systemy etapami. Na starcie dostajesz konkretny harmonogram i priorytety.',
  },
  {
    q: 'Czy mogę zacząć od małego zakresu?',
    a: 'Tak. Często zaczynamy od wersji MVP i rozwijamy projekt razem z Twoim biznesem, bez zamrażania budżetu na wiele miesięcy.',
  },
  {
    q: 'Czy zapewniacie utrzymanie po wdrożeniu?',
    a: 'Tak. Oferujemy pełne wsparcie po starcie: monitoring, poprawki, rozwój funkcji i bieżącą opiekę techniczną.',
  },
  {
    q: 'Czy integrujecie system z moimi narzędziami?',
    a: 'Tak. Integrujemy m.in. płatności, CRM, narzędzia mailingowe, kalendarze i inne systemy, z których korzysta Twoja firma.',
  },
  {
    q: 'Jak wygląda komunikacja podczas projektu?',
    a: 'Pracujemy transparentnie: regularne podsumowania, jasne statusy i szybki kontakt. W każdej chwili wiesz, na jakim etapie jest wdrożenie.',
  },
]

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>FAQ</div>
      <h2 className={styles.title}>Najczęstsze pytania przed startem współpracy</h2>
      <div className={styles.list}>
        {faq.map((item) => (
          <details key={item.q} className={styles.item}>
            <summary className={styles.q}>{item.q}</summary>
            <p className={styles.a}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
