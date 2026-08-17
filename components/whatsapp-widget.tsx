'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, ExternalLink } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Sender = 'bot' | 'user'
interface Msg {
  id: number
  sender: Sender
  text: string
}
type Step = 'name' | 'city' | 'groupsYesNo' | 'chooseGroup' | 'exitMessage' | 'done'

const GROUPS = [
  'Caminhoneiros / BR-364 & Agro',
  'Mulheres, Mães & Famílias',
  'Jovens Empreendedores',
  'Fim do Isolamento Aéreo',
]

export function WhatsappWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [step, setStep] = useState<Step>('name')
  const [input, setInput] = useState('')
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [group, setGroup] = useState('')
  const [exitChoice, setExitChoice] = useState(false)
  const idRef = useRef(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const push = (sender: Sender, text: string) => {
    idRef.current += 1
    setMessages((m) => [...m, { id: idRef.current, sender, text }])
  }

  // Inicializa a conversa ao abrir
  useEffect(() => {
    if (open && messages.length === 0) {
      push('bot', 'Olá, seja bem-vindo(a)! Vamos somar forças nessa campanha? 🧡')
      setTimeout(() => push('bot', 'Qual é o seu nome completo?'), 400)
    }
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const botLater = (text: string, delay = 450) => setTimeout(() => push('bot', text), delay)

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    push('user', value)
    setInput('')

    if (step === 'name') {
      setName(value)
      botLater(`Muito obrigada, ${value}! É muito bom ter você aqui na nossa equipe. 🙌`)
      botLater('De que cidade você é?', 900)
      setStep('city')
    } else if (step === 'city') {
      setCity(value)
      botLater(`${value} é muito importante pra nós, contamos com você nessa caminhada!`)
      botLater('Quer participar dos nossos grupos para conhecer melhor nossas propostas?', 900)
      setStep('groupsYesNo')
    } else if (step === 'exitMessage') {
      botLater(`Obrigada pela sua participação, vamos ter em conta sua mensagem, ${name}! 💬`)
      setStep('done')
    }
  }

  const choose = (label: string, action: () => void) => {
    push('user', label)
    action()
  }

  const handleYesNo = (yes: boolean) => {
    if (yes) {
      choose('Sim', () => {
        botLater('Que ótimo! Escolha o grupo com que você mais se identifica:')
        setStep('chooseGroup')
      })
    } else {
      choose('Não', () => {
        botLater('Que pena, queríamos ter você nessa caminhada. Gostaria de deixar uma mensagem?')
        setExitChoice(true)
      })
    }
  }

  const handleGroup = (index: number) => {
    if (index < 4) {
      choose(GROUPS[index], () => {
        setGroup(GROUPS[index])
        botLater(`Perfeito! Você agora faz parte do grupo "${GROUPS[index]}". Juntos por Rondônia! 🚀`)
        setStep('done')
      })
    } else if (index === 4) {
      // sair sem escolher
      choose('Sair sem escolher', () => {
        botLater('Que pena, queríamos ter você nessa caminhada. Gostaria de deixar uma mensagem?')
        setStep('chooseGroup')
        setExitChoice(true)
      })
    } else {
      // voltar ao menu anterior
      choose('Retornar ao menu anterior', () => {
        botLater('Sem problemas! Quer participar dos nossos grupos para conhecer melhor nossas propostas?')
        setStep('groupsYesNo')
      })
    }
  }

  const handleExitChoice = (yes: boolean) => {
    setExitChoice(false)
    if (yes) {
      choose('Sim, quero deixar uma mensagem', () => {
        botLater('Pode escrever sua mensagem abaixo. 👇')
        setStep('exitMessage')
      })
    } else {
      choose('Não', () => {
        botLater(`Obrigada pela sua participação, ${name}. Volte aqui em outro momento, ok! 🧡`)
        setStep('done')
      })
    }
  }

  const finalMessage = () => {
    const lines = [
      'Olá! Vim pelo site da campanha Adriana Martins 3030.',
      name && `Nome: ${name}`,
      city && `Cidade: ${city}`,
      group && `Grupo de interesse: ${group}`,
    ].filter(Boolean)
    return lines.join('\n')
  }

  const showTextInput = step === 'name' || step === 'city' || step === 'exitMessage'

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Fechar assistente' : 'Abrir assistente de WhatsApp'}
        className={cn(
          'fixed bottom-5 right-5 z-[9999] flex size-[58px] items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110',
          open ? 'bg-novo-navy' : 'bg-[#25D366] animate-pulse-ring',
        )}
      >
        {open ? <X className="size-7" /> : <MessageCircle className="size-7" />}
      </button>

      {/* Janela do chat */}
      <div
        className={cn(
          'fixed bottom-24 right-5 z-[9999] flex w-[calc(100vw-2.5rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300',
          open ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-90 opacity-0',
        )}
        style={{ height: '520px' }}
        role="dialog"
        aria-label="Assistente virtual da campanha"
      >
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 bg-novo-navy px-4 py-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white">
            <MessageCircle className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-lg tracking-wide text-white">Equipe 3030</p>
            <p className="text-xs text-novo-yellow">Coragem para Cuidar!</p>
          </div>
        </div>

        {/* Mensagens */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-3 overflow-y-auto bg-muted/40 p-4"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn('flex', m.sender === 'user' ? 'justify-end' : 'justify-start')}
            >
              <p
                className={cn(
                  'max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm',
                  m.sender === 'user'
                    ? 'rounded-br-sm bg-novo-orange text-white'
                    : 'rounded-bl-sm bg-card text-foreground',
                )}
              >
                {m.text}
              </p>
            </div>
          ))}

          {/* Opções Sim/Não para grupos */}
          {step === 'groupsYesNo' && !exitChoice && (
            <div className="flex flex-wrap gap-2 pt-1">
              <OptButton onClick={() => handleYesNo(true)}>Sim</OptButton>
              <OptButton onClick={() => handleYesNo(false)}>Não</OptButton>
            </div>
          )}

          {/* Escolha de grupo */}
          {step === 'chooseGroup' && !exitChoice && (
            <div className="flex flex-col gap-2 pt-1">
              {GROUPS.map((g, i) => (
                <OptButton key={g} onClick={() => handleGroup(i)}>
                  {i + 1}. {g}
                </OptButton>
              ))}
              <OptButton onClick={() => handleGroup(4)} variant="ghost">
                5. Sair sem escolher
              </OptButton>
              <OptButton onClick={() => handleGroup(5)} variant="ghost">
                6. Retornar ao menu anterior
              </OptButton>
            </div>
          )}

          {/* Deixar mensagem? */}
          {exitChoice && (
            <div className="flex flex-wrap gap-2 pt-1">
              <OptButton onClick={() => handleExitChoice(true)}>Sim</OptButton>
              <OptButton onClick={() => handleExitChoice(false)}>Não</OptButton>
            </div>
          )}

          {/* Finalização: abrir WhatsApp real */}
          {step === 'done' && (
            <div className="pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:brightness-95"
              >
                <ExternalLink className="size-4" />
                Continuar no WhatsApp oficial
              </a>
            </div>
          )}
        </div>

        {/* Campo de texto */}
        {showTextInput && (
          <form onSubmit={handleTextSubmit} className="flex items-center gap-2 border-t border-border bg-card p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={step === 'exitMessage' ? 'Escreva sua mensagem...' : 'Digite aqui...'}
              className="flex-1 rounded-full border border-border bg-muted px-4 py-2.5 text-sm outline-none transition-colors focus:border-novo-orange"
              autoComplete="off"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-novo-orange text-white transition-colors hover:bg-novo-orange-dark"
            >
              <Send className="size-4" />
            </button>
          </form>
        )}
      </div>
    </>
  )
}

function OptButton({
  children,
  onClick,
  variant = 'solid',
}: {
  children: React.ReactNode
  onClick: () => void
  variant?: 'solid' | 'ghost'
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-4 py-2 text-left text-sm font-medium transition-all duration-200 hover:scale-[1.02]',
        variant === 'solid'
          ? 'border border-novo-orange/40 bg-novo-orange/10 text-novo-navy hover:bg-novo-orange hover:text-white'
          : 'border border-border bg-card text-muted-foreground hover:border-novo-navy hover:text-novo-navy',
      )}
    >
      {children}
    </button>
  )
}
