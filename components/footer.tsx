import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { NAV_LINKS, whatsappLink, WHATSAPP_DISPLAY } from '@/lib/site-data'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-novo-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
            {/* Foto de fundo, mesclada e esmaecida no final para não cortar seco */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-top opacity-35 mix-blend-luminosity"
              style={{ backgroundImage: "url('/images/ADRIANA_Perfil.webp')" }}
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-novo-navy-deep/10 via-novo-navy-deep/60 to-novo-navy-deep" />

            <div className="relative px-1 py-1">
              <Image
                src="/images/Logo_AM_Stroke_6px.png"
                alt="Adriana Martins 3030"
                width={600}
                height={650}
                className="h-auto w-36 md:w-40"
                priority={false}
              />
              <p className="mt-1 font-display text-2xl italic tracking-wide text-novo-orange">
                Coragem para Cuidar!
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                Adriana Martins — Candidata a Deputada Federal por Rondônia pelo Partido NOVO.
              </p>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-white/90">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-novo-yellow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato + redes */}
          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-white/90">Fale com a campanha</h3>
            <p className="mt-4 text-sm text-white/60">WhatsApp oficial</p>
            <a
              href={whatsappLink('Olá! Quero falar com a campanha Adriana Martins 3030.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl tracking-wide text-novo-yellow transition-colors hover:text-novo-orange"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <div className="mt-5 flex gap-3">
              {[
                {
                  icon: InstagramIcon,
                  label: 'Instagram',
                  href: 'https://www.instagram.com/adrianamartinsoficial30/',
                },
                { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  href: whatsappLink('Olá! Quero somar forças com a campanha 3030.'),
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-novo-orange hover:bg-novo-orange hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/45">
            Propaganda eleitoral autorizada. CNPJ 68.353.217/0001-19. A produção deste material segue as
            diretrizes de identidade visual do Partido NOVO (2023).
          </p>
          <p className="mt-3 text-xs text-white/45">
            &copy; {new Date().getFullYear()} Adriana Martins 3030 · Coragem para Cuidar! · Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
