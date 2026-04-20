import type { Metadata } from 'next'
import Script from 'next/script'
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="pl">
      <body>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  )
}
