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
  title: 'Edson Martins 308o0 — Deputado Estadual | O Deputado do Povo!',
  description:
    'Edson Martins, candidato a Deputado Estadual por Rondônia pelo Partido NOVO. O Deputado do Povo! Edson Martins leva a Assembleia quarenta anos de história, gestão honesta e compromisso com povo rondoniense.',
  generator: 'v0.app',
  keywords: [
    'Edson Martins',
    '30800',
    'Deputada Estadual',
    'Partido NOVO',
    'Rondônia',
    'O Deputado do Povo',
  ],
  openGraph: {
    title: 'Edson Martins 30800 — O Deputado do Povo!',
    description:
      'Candidato a Deputada Estadual por Rondônia pelo Partido NOVO. Um plano concreto para Rondônia.',
    url: 'https://https://edsonmartins.vercel.app/',
    siteName: 'Edson Martins 30800',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edson Martins 30800 — O Deputado do Povo! Candidata a Deputada Estadual por Rondônia.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edson Martins 30800 — O Deputado do Povo!',
    description:
      'Candidato a Deputado Estadual por Rondônia pelo Partido NOVO. Um plano concreto para Rondônia.',
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
