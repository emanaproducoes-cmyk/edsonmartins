'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Send } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function CtaFinal() {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [cidade, setCidade] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const msg = `Olá! Quero somar forças com a campanha Adriana Martins 3030.%0A%0ANome: ${nome}%0AWhatsApp: ${whatsapp}%0ACidade: ${cidade}`
    window.open(
      `https://wa.me/${'5569992865915'}?text=${encodeURIComponent(
        `Olá! Quero somar forças com a campanha Adriana Martins 3030.\n\nNome: ${nome}\nWhatsApp: ${whatsapp}\nCidade: ${cidade}`,
      )}`,
      '_blank',
    )
    void msg
  }

  return (
    <section className="relative overflow-hidden bg-novo-navy-deep py-20 md:py-28">
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-novo-orange/25 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        {/* Texto + imagem impacto */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-novo-yellow/40 bg-novo-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-novo-yellow">
            A hora é agora
          </span>
          <h2 className="mt-5 text-balance font-display text-6xl leading-[0.92] tracking-wide text-white md:text-7xl">
            Coragem
            <br />
            <span className="text-novo-orange">para Cuidar!</span>
          </h2>
          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-white/80">
            Rondônia precisa de uma voz técnica e firme em Brasília. Deixe seus dados e receba as
            propostas da campanha diretamente no seu WhatsApp. Juntos, vamos transformar problemas
            concretos em soluções concretas.
          </p>
        </div>

        {/* Formulário */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-sm md:p-9">
          <h3 className="font-display text-3xl leading-none tracking-wide text-white">
            Some forças com a campanha
          </h3>
          <p className="mt-2 text-sm text-white/60">Preencha e fale com a equipe pelo WhatsApp.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-white/80">
                Nome completo
              </label>
              <input
                id="nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-novo-orange focus:bg-white/10"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-white/80">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(69) 99999-9999"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-novo-orange focus:bg-white/10"
              />
            </div>
            <div>
              <label htmlFor="cidade" className="mb-1.5 block text-sm font-medium text-white/80">
                Cidade
              </label>
              <input
                id="cidade"
                type="text"
                required
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Sua cidade em Rondônia"
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-novo-orange focus:bg-white/10"
              />
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-novo-orange px-6 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-novo-orange/30 transition-all duration-300 hover:scale-[1.02] hover:bg-novo-orange-dark animate-pulse-ring"
            >
              <Send className="size-5" />
              Quero Apoiar
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          <a
            href={whatsappLink('Olá! Quero falar com a equipe da campanha Adriana Martins 3030.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm text-white/60 underline-offset-4 transition-colors hover:text-novo-yellow hover:underline"
          >
            Prefiro falar direto no WhatsApp oficial
          </a>
        </div>
      </div>
    </section>
  )
}
