'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { PROBLEMAS } from '@/lib/site-data'
import {
  Construction,
  TriangleAlert,
  Route,
  PlaneTakeoff,
  Stethoscope,
  ShieldAlert,
  FileStack,
  Users,
  ChevronDown,
} from 'lucide-react'

const ICONS = [
  Construction,
  TriangleAlert,
  Route,
  PlaneTakeoff,
  Stethoscope,
  ShieldAlert,
  FileStack,
  Users,
]

// Textura de ruído sutil para o glassmorphism dos cards
const NOISE_BG = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
  backgroundBlendMode: 'overlay' as const,
}

export function RondoniaProblemas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="rondonia" className="relative overflow-hidden bg-novo-navy py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-novo-orange/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-novo-orange/[0.06] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-novo-orange">
              O Diagnóstico
            </span>
            <h2 className="mt-3 text-balance font-display text-2xl leading-none tracking-wide text-white md:text-6xl">
              Rondônia não precisa de discursos vindos de Brasília. Precisa de{' '}
              <span className="text-novo-orange">representatividade FEDERAL</span> que traga
              resultados para o nosso estado.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMAS.map((problema, i) => {
            const Icon = ICONS[i]
            const isOpen = openIndex === i

            return (
              <Reveal key={problema.titulo} delay={(i % 4) * 90} as="article">
                <div
                  style={NOISE_BG}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-novo-orange/50 hover:bg-white/[0.09]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-novo-orange/15 text-novo-orange transition-all duration-300 group-hover:bg-novo-orange group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl leading-none tracking-wide text-white">
                      {problema.titulo}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/65">{problema.desc}</p>

                  {isOpen && (
                    <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-relaxed text-white/65">
                      <strong className="font-semibold text-white">Ação 3030:</strong>{' '}
                      {problema.acao}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="mt-4 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wide text-novo-orange transition-colors duration-300 hover:text-novo-yellow"
                  >
                    <ChevronDown className="size-3.5" />
                    {isOpen ? 'Menos detalhes' : 'Saiba mais'}
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
