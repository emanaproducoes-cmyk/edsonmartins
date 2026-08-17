import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Roboto_Condensed } from 'next/font/google'
import './globals.css'
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})
export const metadata: Metadata = {
  metadataBase: new URL('https://adrianamartins-virid.vercel.app'),
  title: 'Adriana Martins 3030 — Deputada Federal | Coragem para Cuidar!',
  description:
    'Adriana Martins, candidata a Deputada Federal por Rondônia pelo Partido NOVO. Coragem para Cuidar! Um plano técnico e concreto para a segurança, a renda e o futuro de Rondônia. Some forças com a campanha 3030.',
  generator: 'v0.app',
  keywords: [
    'Adriana Martins',
    '3030',
    'Deputada Federal',
    'Partido NOVO',
    'Rondônia',
    'Coragem para Cuidar',
  ],
  openGraph: {
    title: 'Adriana Martins 3030 — Coragem para Cuidar!',
    description:
      'Candidata a Deputada Federal por Rondônia pelo Partido NOVO. Um plano concreto para Rondônia.',
    url: 'https://adrianamartins-virid.vercel.app',
    siteName: 'Adriana Martins 3030',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adriana Martins 3030 — Coragem para Cuidar! Candidata a Deputada Federal por Rondônia.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adriana Martins 3030 — Coragem para Cuidar!',
    description:
      'Candidata a Deputada Federal por Rondônia pelo Partido NOVO. Um plano concreto para Rondônia.',
    images: ['/og-image.png'],
  },
}
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ec671c',
  width: 'device-width',
  initialScale: 1,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebas.variable} ${robotoCondensed.variable} bg-background`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
