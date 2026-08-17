'use client'

import { Reveal } from '@/components/reveal'
import { Truck, FileStack, Building2, ShieldAlert } from 'lucide-react'

const DESAFIOS = [
  {
    icon: MapPinOff,
    titulo: 'Escoamento Comprometido',
    desc: 'Gargalos logísticos severos na malha rodoviária elevam o custo do frete e reduzem a competitividade do produtor rondoniense.',
  },
  {
    icon: FileStack,
    titulo: 'Custo Burocrático',
    desc: 'Excesso de burocracia estatal e tributação punitiva sufocam o pequeno produtor e empreendedores locais.',
  },
  {
    icon: Building2,
    titulo: 'Infraestrutura Municipal',
    desc: 'Vulnerabilidade nos ramais e vicinais produtivas isola famílias e dificulta a circulação de riquezas no interior.',
  },
  {
    icon: ShieldAlert,
    titulo: 'Segurança Descentralizada',
    desc: 'Necessidade urgente de fortalecimento e presença ostensiva das forças de segurança nas zonas urbanas e rurais.',
  },
]

// Textura de ruído sutil para o glassmorphism dos cards
const NOISE_BG = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
  backgroundBlendMode: 'overlay' as const,
}

export function RondoniaProblemas() {
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
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-novo-orange">
              Diagnóstico
            </span>
            <h2 className="mt-3 text-balance font-display text-4xl leading-none tracking-wide text-white md:text-6xl">
              Desafios <span className="text-novo-orange">Estruturais</span> do Estado
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {DESAFIOS.map((desafio, i) => {
            const Icon = desafio.icon

            return (
              <Reveal key={desafio.titulo} delay={(i % 4) * 90} as="article">
                <div
                  style={NOISE_BG}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/15 border-l-4 border-l-sky-400 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-l-novo-orange hover:bg-white/[0.09]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-novo-orange/15 text-novo-orange transition-all duration-300 group-hover:bg-novo-orange group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-xl leading-none tracking-wide text-white">
                      {desafio.titulo}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/65">{desafio.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
