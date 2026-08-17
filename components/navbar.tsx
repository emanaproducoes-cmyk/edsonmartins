'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, whatsappLink } from '@/lib/site-data'
import { cn } from '@/lib/utils'
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-novo-navy/90 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        {/* Marca — logo horizontal, funciona como home */}
        <a
          href="#topo"
          aria-label="Adriana Martins - início"
          className="group/logo relative inline-flex items-center overflow-hidden"
        >
          <Image
            src="/images/LOGO_HORIZONTAL.png"
            alt="Adriana Martins 3030 - Partido NOVO"
            width={320}
            height={64}
            priority
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105 sm:h-9 md:h-16"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/4 -translate-x-[200%] skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover/logo:translate-x-[500%]"
          />
        </a>
        {/* Links desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium uppercase tracking-wide text-white/85 transition-colors hover:text-novo-yellow after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-novo-yellow after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink('Olá! Quero apoiar a campanha da Adriana Martins 3030.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-novo-orange px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:bg-novo-orange-dark hover:shadow-lg hover:shadow-novo-orange/30"
          >
            Quero Apoiar
          </a>
        </div>
        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {/* Menu mobile */}
      <div
        className={cn(
          'overflow-hidden bg-novo-navy/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <div className="flex flex-col gap-1 px-4 pb-5 pt-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium uppercase tracking-wide text-white/90 transition-colors hover:bg-white/10 hover:text-novo-yellow"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink('Olá! Quero apoiar a campanha da Adriana Martins 3030.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-novo-orange px-5 py-3 text-center text-base font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-novo-orange-dark"
          >
            Quero Apoiar
          </a>
        </div>
      </div>
    </header>
  )
}
