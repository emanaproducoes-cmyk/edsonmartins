'use client'

import { useEffect, useState } from 'react'
import { HeartHandshake } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function StickyCtaMobile() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-novo-navy/95 p-3 backdrop-blur-md transition-transform duration-300 lg:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      )}
    >
      <a
        href={whatsappLink('Olá! Quero apoiar a campanha da Adriana Martins 3030.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-novo-orange py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-novo-orange-dark"
      >
        <HeartHandshake className="size-5" />
        Quero Apoiar · 3030
      </a>
    </div>
  )
}
