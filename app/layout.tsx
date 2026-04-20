import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KLIK.AI — Automatyzacje | Strony | Systemy AI',
  description: 'Budujemy inteligentne systemy, które ułatwiają życie Twojej firmie. Automatyzacje AI, nowoczesne strony internetowe i integracje systemów.',
  keywords: 'automatyzacja AI, strony internetowe, integracje systemów, RODO, leady',
  openGraph: {
    title: 'KLIK.AI — Automatyzacje | Strony | Systemy AI',
    description: 'Budujemy inteligentne systemy, które ułatwiają życie Twojej firmie.',
    url: 'https://klikai.com.pl',
    siteName: 'KLIK.AI',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
