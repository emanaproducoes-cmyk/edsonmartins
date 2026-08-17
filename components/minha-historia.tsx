'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Calendar, Tractor, Landmark, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* Dados                                                               */
/* ------------------------------------------------------------------ */

const destaques = [
  {
    icon: Calendar,
    title: '40 Anos de Rondônia',
    description: 'Chegada em Urupá em 1986. Vida dedicada à construção e desenvolvimento do estado.',
    accent: 'border-t-novo-orange',
  },
  {
    icon: Tractor,
    title: 'Produtor & Pecuarista',
    description: 'Produtor rural autêntico que vivencia diariamente a rotina e os desafios do campo.',
    accent: 'border-t-sky-500',
  },
  {
    icon: Landmark,
    title: 'Ex-Prefeito Gestor',
    description: 'Construiu a cidade de Urupá "quase do zero", demonstrando capacidade administrativa real.',
    accent: 'border-t-novo-orange',
  },
  {
    icon: ShieldCheck,
    title: '4 Mandatos Ficha Limpa',
    description: 'Reputação ilibada na Assembleia, sem nenhum escândalo, mantendo trabalho comunitário.',
    accent: 'border-t-sky-500',
  },
]

const TOTAL_IMAGENS = 10
const VISIVEIS = 4
const INTERVALO_AUTOPLAY = 4000 // ms

const imagens = Array.from(
  { length: TOTAL_IMAGENS },
  (_, i) => `/images/${String(i + 1).padStart(2, '0')}.jpeg`,
)

/* ------------------------------------------------------------------ */
/* Carrossel                                                           */
/* ------------------------------------------------------------------ */

function CarrosselFotos() {
  const [index, setIndex] = useState(0)
  const [visivel, setVisivel] = useState(true)
  const [pausado, setPausado] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const trocar = (novoIndex: (atual: number) => number) => {
    setVisivel(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setIndex(novoIndex)
      setVisivel(true)
    }, 200)
  }

  const avancar = () => trocar((atual) => (atual + 1) % TOTAL_IMAGENS)
  const voltar = () => trocar((atual) => (atual - 1 + TOTAL_IMAGENS) % TOTAL_IMAGENS)

  useEffect(() => {
    if (pausado) return
    const id = setInterval(avancar, INTERVALO_AUTOPLAY)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pausado, index])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const fotosVisiveis = Array.from(
    { length: VISIVEIS },
    (_, k) => imagens[(index + k) % TOTAL_IMAGENS],
  )

  return (
    <div
      className="relative"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <div
        className={`grid grid-cols-4 gap-2 transition-opacity duration-200 ${
          visivel ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {fotosVisiveis.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative aspect-square overflow-hidden rounded-lg shadow-sm"
          >
            <Image
              src={src}
              alt="Registro da campanha e trajetória de Edson Martins"
              fill
              sizes="(max-width: 768px) 25vw, 12vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Setas */}
      <button
        type="button"
        onClick={voltar}
        aria-label="Foto anterior"
        className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-novo-navy/80 text-white shadow-md transition-colors hover:bg-novo-orange"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        onClick={avancar}
        aria-label="Próxima foto"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 flex size-8 items-center justify-center rounded-full bg-novo-navy/80 text-white shadow-md transition-colors hover:bg-novo-orange"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Seção principal                                                     */
/* ------------------------------------------------------------------ */

export function MinhaHistoria() {
  return (
    <section id="historia" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 md:px-8 lg:grid-cols-2">
        {/* Imagem editorial — alinhada com o 1º parágrafo */}
        <Reveal className="order-2 lg:order-1 lg:mt-28">
          <div className="group relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-novo-orange/40 md:block"
            />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/HERO_HEADER_EDSON.png"
                alt="Adriana Martins em composição editorial da campanha 3030"
                width={1731}
                height={920}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-novo-orange">
              Minha História
            </span>
            <h2 className="mt-3 font-display text-5xl leading-none tracking-wide text-novo-navy md:text-6xl">
              Trajetória, histórico
              <br />e identidade política
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Em 1986, quando migrou do Estado do Espírito Santo acompanhado de sua esposa e três filhos
              pequenos, estabelecendo-se na zona rural do município de Urupá. Trabalhou diretamente na
              terra como produtor rural e pecuarista, sustentando sua família com a força do seu trabalho
              agrícola.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Sua entrada na vida pública ocorreu de forma orgânica devido ao seu espírito comunitário. Foi
              eleito e reeleito Prefeito de Urupá por dois mandatos, sendo o gestor responsável por
              estruturar e construir a infraestrutura urbana e rural do município &ldquo;praticamente do
              zero&rdquo;. Posteriormente, foi eleito Deputado Estadual por quatro mandatos consecutivos na
              Assembleia Legislativa de Rondônia, acumulando extenso patrimônio político pautado pela
              idoneidade moral, simplicidade e atuações voltadas ao atendimento direto dos cidadãos
              rondonienses.
            </p>
          </Reveal>

          {/* Carrossel de fotos */}
          <Reveal delay={280}>
            <div className="mt-6">
              <CarrosselFotos />
            </div>
          </Reveal>

          {/* Cards de destaque — 4 em uma única linha */}
          <Reveal delay={360}>
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {destaques.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className={`group rounded-xl border border-border ${item.accent} border-t-4 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-novo-orange/50 hover:shadow-lg`}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-novo-navy text-novo-yellow transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-4" />
                    </span>
                    <p className="mt-3 font-display text-base leading-none tracking-wide text-novo-navy">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
