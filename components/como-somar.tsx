import { Reveal } from '@/components/reveal'
import { ETAPAS } from '@/lib/site-data'
import { BookOpen, Share2, Megaphone, Vote } from 'lucide-react'

const ICONS = [BookOpen, Share2, Megaphone, Vote]

export function ComoSomar() {
  return (
    <section id="somar" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-novo-orange">
              Participe
            </span>
            <h2 className="mt-3 text-balance font-display text-5xl leading-none tracking-wide text-novo-navy md:text-6xl">
              Como somar forças
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Quatro passos simples para fazer parte da mudança concreta de Rondônia.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-novo-green via-novo-orange to-novo-yellow lg:block"
          />

          <ol className="grid gap-8 lg:grid-cols-4">
            {ETAPAS.map((etapa, i) => {
              const Icon = ICONS[i]
              return (
                <Reveal key={etapa.titulo} delay={i * 120} as="li">
                  <div className="group relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex size-16 items-center justify-center rounded-full border-4 border-background bg-novo-navy text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-novo-orange">
                      <Icon className="size-7" />
                    </span>
                    <span className="mt-3 font-display text-5xl leading-none tracking-wide text-muted-foreground/30 transition-colors duration-300 group-hover:text-novo-orange/50">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 font-display text-2xl leading-none tracking-wide text-novo-navy">
                      {etapa.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{etapa.desc}</p>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm font-medium leading-relaxed text-novo-orange opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {etapa.exemplo}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
