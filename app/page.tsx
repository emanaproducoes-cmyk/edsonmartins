import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { MinhaHistoria } from '@/components/minha-historia'
import { RondoniaProblemas } from '@/components/rondonia-problemas'
import { MinhasPropostas } from '@/components/minhas-propostas'
import { ComoSomar } from '@/components/como-somar'
import { CtaFinal } from '@/components/cta-final'
import { Footer } from '@/components/footer'
import { WhatsappWidget } from '@/components/whatsapp-widget'
import { StickyCtaMobile } from '@/components/sticky-cta-mobile'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MinhaHistoria />
      <RondoniaProblemas />
      <MinhasPropostas />
      <ComoSomar />
      <CtaFinal />
      <Footer />
      <WhatsappWidget />
      <StickyCtaMobile />
    </main>
  )
}
