'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

const sweepBase = {
  transition: 'transform 700ms ease-out',
} as const

export function Hero() {
  const [bannerHover, setBannerHover] = useState(false)
  const [btn1Hover, setBtn1Hover] = useState(false)
  const [btn2Hover, setBtn2Hover] = useState(false)

  return (
    <section
      id="topo"
      className="relative bg-novo-navy-deep pt-24 pb-10 md:pt-28 md:pb-14"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Moldura do banner — mesmas medidas e proporções do site original */}
        <div
          onMouseEnter={() => setBannerHover(true)}
          onMouseLeave={() => setBannerHover(false)}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5 sm:aspect-[16/10] md:aspect-[21/9]"
        >
          <Image
            src="/images/HERO_HEADER_EDSON.png"
            alt="Edson Martins, candidato, com o Congresso Nacional ao fundo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-[68%_center] sm:object-[62%_center] md:object-[58%_center] lg:object-[55%_center]"
          />

          {/* Efeito scanner — faixa de luz que varre o banner no hover (via estado do React) */}
          <div
            aria-hidden
            style={{
              ...sweepBase,
              transform: bannerHover ? 'translateX(350%) skewX(-12deg)' : 'translateX(-150%) skewX(-12deg)',
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />

          {/* Botões — canto inferior direito do banner */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 text-center sm:px-6 sm:pb-8 md:right-0 md:left-auto md:px-8 md:pb-10 md:text-right">
            <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:items-end md:justify-end">
              <a
                href={whatsappLink('Olá! Quero apoiar a campanha do Edson Martins.')}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setBtn1Hover(true)}
                onMouseLeave={() => setBtn1Hover(false)}
                className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-novo-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-novo-orange/25 transition-all duration-300 hover:scale-[1.03] hover:bg-novo-orange-dark hover:shadow-xl hover:shadow-novo-orange/40 sm:w-auto md:px-7 md:py-4 md:text-base"
              >
                <span
                  aria-hidden
                  style={{
                    ...sweepBase,
                    transitionDuration: '500ms',
                    transform: btn1Hover ? 'translateX(350%) skewX(-12deg)' : 'translateX(-150%) skewX(-12deg)',
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <HeartHandshake className="relative z-10 size-4 md:size-5" />
                <span className="relative z-10">Quero Apoiar</span>
                <ArrowRight
                  className="relative z-10 size-4 transition-transform duration-300 md:size-5"
                  style={{ transform: btn1Hover ? 'translateX(4px)' : 'translateX(0)' }}
                />
              </a>
              <a
                href="#propostas"
                onMouseEnter={() => setBtn2Hover(true)}
                onMouseLeave={() => setBtn2Hover(false)}
                className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:border-novo-yellow hover:bg-white/5 hover:text-novo-yellow sm:w-auto md:px-7 md:py-4 md:text-base"
              >
                <span
                  aria-hidden
                  style={{
                    ...sweepBase,
                    transitionDuration: '500ms',
                    transform: btn2Hover ? 'translateX(350%) skewX(-12deg)' : 'translateX(-150%) skewX(-12deg)',
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />
                <span className="relative z-10">Conhecer o Plano</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
