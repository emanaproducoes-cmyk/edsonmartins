'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, ChevronDown, HeartHandshake, ShieldCheck } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

const sweepBase = {
  transition: 'transform 700ms ease-out',
} as const

export function Hero() {
  const [btn1Hover, setBtn1Hover] = useState(false)
  const [btn2Hover, setBtn2Hover] = useState(false)

  return (
    <>
      {/* CSS próprio do componente — garante que a animação exista sempre, sem depender do Tailwind */}
      <style>{`
        @keyframes heroArrowBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .hero-arrow-bounce {
          animation: heroArrowBounce 1.4s ease-in-out infinite;
        }
      `}</style>

      <section
        id="topo"
        className="relative bg-novo-navy-deep pt-24 pb-10 md:pt-28 md:pb-14"
      >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Selo */}
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-novo-orange/40 bg-novo-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-novo-yellow">
          <ShieldCheck className="size-4" />
          Candidato a Deputado Estadual
        </span>

        {/* Moldura do banner — mesmas medidas e proporções do site original */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5 sm:aspect-[16/10] md:aspect-[21/9]">
          <Image
            src="/images/HERO_HEADER_EDSON.png"
            alt="Edson Martins, candidato a Deputado Estadual, com o Congresso Nacional ao fundo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-[68%_center] sm:object-[62%_center] md:object-[58%_center] lg:object-[55%_center]"
          />

          {/* Conteúdo — canto inferior direito do banner */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.55)] sm:px-6 sm:pb-8 md:right-0 md:left-auto md:max-w-lg md:px-8 md:pb-10 md:text-right">
            {/*
              Logo do Edson — agora faz parte do bloco de texto (fluxo normal,
              não mais absoluta sobre a foto), sempre posicionada IMEDIATAMENTE
              ACIMA do slogan. Assim ela nunca cai em cima do rosto do
              candidato, não importa como a foto é cortada em cada breakpoint.
            */}
            <div className="mb-2 flex justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.55)] sm:mb-3 md:justify-end">
              <Image
                src="/images/LOGO_EDSON.png"
                alt="Edson Martins"
                width={400}
                height={260}
                className="h-auto w-32 object-contain sm:w-36 md:w-40 lg:w-44"
              />
            </div>

            <h1 className="font-display text-3xl leading-[0.95] tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
              O Deputado
              <br />
              <span
                className="text-novo-orange"
                style={{
                  WebkitTextStroke: '2px #ffffff',
                  paintOrder: 'stroke fill',
                  textShadow: 'none',
                }}
              >
                do Povo
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-md text-pretty text-xs leading-relaxed text-white/85 sm:text-sm md:ml-auto md:mr-0 md:text-base">
              Edson Martins leva a Assembleia quarenta anos de história,{' '}
              <strong className="font-semibold text-white">gestão honesta e compromisso</strong> com povo
              rondoniense.
            </p>

            <div className="mt-4 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center md:mt-5 md:items-end md:justify-end">
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

      {/* Barra laranja logo abaixo do Hero */}
      <div className="relative bg-novo-orange px-4 py-5 text-center sm:py-6 md:py-7">
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-white sm:text-base sm:tracking-[0.15em] md:text-lg">
          O Deputado do Povo — Quem Conhece, Confia!
        </p>

        {/* Wrapper de posicionamento — fica parado, sem competir com a animação do botão */}
        <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
          <a
            href="#propostas"
            aria-label="Rolar para conhecer o plano de governo"
            className="hero-arrow-bounce flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/40 bg-white/10 text-white shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-300 hover:border-white/70 hover:bg-white/20 sm:size-12"
          >
            <span className="flex flex-col items-center">
              <ChevronDown aria-hidden className="size-4 sm:size-[18px]" />
              <ChevronDown aria-hidden className="-mt-2.5 size-4 sm:size-[18px]" />
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
