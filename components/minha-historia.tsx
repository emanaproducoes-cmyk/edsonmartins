import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Scale, Landmark } from 'lucide-react'

export function MinhaHistoria() {
  return (
    <section id="historia" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        {/* Imagem editorial */}
        <Reveal className="order-2 lg:order-1">
          <div className="group relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-2xl border-2 border-novo-orange/40 md:block"
            />
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/hero-adriana.png"
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
              Adriana Martins consolida sua candidatura a Deputada Federal em 2026 pelo Partido NOVO,
              trazendo uma visão técnica, jurídica e moderna para os grandes desafios do Estado de
              Rondônia em Brasília. Advogada com marcante atuação institucional, Adriana constrói sua
              plataforma sobre duas bandeiras centrais indispensáveis para o crescimento rondoniense: o
              desenvolvimento da logística e infraestrutura estadual e a proteção jurídica e social à
              mulher e à família.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Sua plataforma eleitoral aborda diretamente o sufocamento econômico gerado pelo{' '}
              <strong className="font-semibold text-novo-navy">&ldquo;Custo Rondônia&rdquo;</strong>,
              propondo soluções legislativas para a duplicação de rodovias federais, integração modal e
              atração de investimentos privados. Simultaneamente, Adriana estabelece uma pauta de
              acolhimento e firmeza no combate à violência doméstica, posicionando-se como a voz feminina
              de liderança técnica no Congresso Nacional.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-novo-orange/50 hover:shadow-lg">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-novo-navy text-novo-yellow transition-transform duration-300 group-hover:scale-110">
                  <Landmark className="size-5" />
                </span>
                <div>
                  <p className="font-display text-xl leading-none tracking-wide text-novo-navy">
                    Logística & Infraestrutura
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fim do &ldquo;Custo Rondônia&rdquo; com estradas e integração modal.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-novo-orange/50 hover:shadow-lg">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-novo-navy text-novo-yellow transition-transform duration-300 group-hover:scale-110">
                  <Scale className="size-5" />
                </span>
                <div>
                  <p className="font-display text-xl leading-none tracking-wide text-novo-navy">
                    Proteção à Mulher
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Acolhimento e firmeza no combate à violência doméstica.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
