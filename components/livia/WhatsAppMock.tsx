'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WhatsAppMockProps {
  className?: string
}

const MESSAGES = [
  { from: 'user', type: 'audio', time: '14:21' },
  { from: 'livia', type: 'nota', time: '14:21' },
  { from: 'user', text: 'confirmar', time: '14:22' },
  { from: 'livia', type: 'file', time: '14:23' },
]

// Delays em ms para cada mensagem aparecer
const DELAYS = [600, 1800, 4200, 5600]
// Após a última mensagem, reinicia o loop
const LOOP_RESET = 9000

export function WhatsAppMock({ className = '' }: WhatsAppMockProps) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typingIndex, setTypingIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = []

    function run() {
      setVisibleCount(0)
      setTypingIndex(null)

      MESSAGES.forEach((msg, i) => {
        // Mostra indicador de digitação para mensagens da Lívia (exceto áudio do usuário)
        if (msg.from === 'livia') {
          const typingTimer = setTimeout(() => {
            setTypingIndex(i)
          }, DELAYS[i] - 900)
          timers.push(typingTimer)
        }

        const showTimer = setTimeout(() => {
          setTypingIndex(null)
          setVisibleCount(i + 1)
          // Scroll suave para baixo
          if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
          }
        }, DELAYS[i])
        timers.push(showTimer)
      })

      // Loop
      const loopTimer = setTimeout(() => {
        run()
      }, LOOP_RESET)
      timers.push(loopTimer)
    }

    run()
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className={`bg-[#ECE5DD] rounded-3xl overflow-hidden shadow-2xl w-full max-w-[280px] ${className}`}>
      {/* Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#12BF00] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          L
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-none">Zap Notas</p>
          <p className="text-green-200 text-xs mt-0.5">online</p>
        </div>
      </div>

      {/* Chat body */}
      <div ref={scrollRef} className="p-3 pb-4 space-y-2 min-h-[220px] max-h-[340px] overflow-y-auto scrollbar-none">
        <AnimatePresence>
          {MESSAGES.slice(0, visibleCount).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} items-end gap-1.5`}
            >
              {msg.from === 'livia' && (
                <div className="w-5 h-5 rounded-full bg-[#5A80E6] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[8px] font-bold">L</span>
                </div>
              )}

              {/* Áudio do usuário */}
              {msg.type === 'audio' && (
                <div className="bg-[#DCF8C6] rounded-2xl rounded-br-sm px-3 py-2 shadow-sm flex items-center gap-2 max-w-[90%]">
                  <div className="w-6 h-6 rounded-full bg-[#12BF00] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[2, 4, 7, 5, 8, 6, 3, 5, 7, 4, 6, 3].map((h, idx) => (
                      <div key={idx} className="w-0.5 rounded-full bg-[#075E54]/50" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">0:12</span>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">{msg.time}</span>
                </div>
              )}

              {/* Resumo da nota (resposta do Zap Notas) */}
              {msg.type === 'nota' && (
                <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm max-w-[85%]">
                  <p className="text-[10px] font-bold text-gray-700 mb-1.5">Itens da Nota</p>
                  <div className="text-[9.5px] text-gray-600 leading-relaxed space-y-0.5 mb-2">
                    <p><span className="font-semibold">1. Item:</span> Caneca Cerâmica 330ml</p>
                    <p>Cód: 0102 · Qtd: 3 · R$ 123,00</p>
                    <p>Desconto: 10% (R$ 36,90)</p>
                    <p className="font-semibold text-gray-700">Total Liq.: R$ 333,30</p>
                  </div>
                  <div className="text-[9.5px] text-gray-600 leading-relaxed space-y-0.5 mb-2">
                    <p><span className="font-semibold">2. Item:</span> Cola de Bastão</p>
                    <p>Cód: 207632 · Qtd: 2 · R$ 19,90</p>
                    <p>Desconto: 10% (R$ 3,98)</p>
                    <p className="font-semibold text-gray-700">Total Liq.: R$ 35,82</p>
                  </div>
                  <div className="border-t border-gray-100 pt-1.5 mb-1.5 text-[9.5px] text-gray-600 space-y-0.5">
                    <p className="font-bold text-gray-700">Totais</p>
                    <p>Valor bruto: R$ 428,70</p>
                    <p>Descontos: R$ 40,88</p>
                    <p className="font-bold text-gray-800">Valor liquido: R$ 387,82</p>
                  </div>
                  <div className="border-t border-gray-100 pt-1.5 text-[9.5px] text-gray-600 space-y-0.5 mb-2">
                    <p className="font-bold text-gray-700">Pagamento</p>
                    <p>Forma: PIX</p>
                  </div>
                  <p className="text-[10px] font-bold text-[#12BF00]">Confirmar envio da nota fiscal?</p>
                  <p className="text-[9px] text-gray-400 text-right mt-1">{msg.time}</p>
                </div>
              )}

              {/* Arquivo da nota fiscal */}
              {msg.type === 'file' && (
                <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm max-w-[85%]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="9" y1="13" x2="15" y2="13"/>
                        <line x1="9" y1="17" x2="13" y2="17"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-700 leading-tight">NFSe_387.82.pdf</p>
                      <p className="text-[9px] text-gray-400">81.6 KB · PDF</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[9.5px] text-[#5A80E6] font-semibold">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5A80E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Link de cobranca PIX gerado
                  </div>
                  <p className="text-[9px] text-gray-400 text-right mt-1">{msg.time}</p>
                </div>
              )}

              {/* Texto simples */}
              {!msg.type && (
                <div
                  className={`rounded-2xl px-3 py-2 shadow-sm max-w-[78%] ${
                    msg.from === 'user'
                      ? 'bg-[#DCF8C6] rounded-br-sm'
                      : 'bg-white rounded-bl-sm'
                  }`}
                >
                  <p className="text-[11px] text-gray-700 leading-snug">{msg.text}</p>
                  <p className="text-[9px] text-gray-400 text-right mt-0.5">{msg.time}</p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Indicador de digitação */}
          {typingIndex !== null && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-end gap-1.5 justify-start"
            >
              <div className="w-5 h-5 rounded-full bg-[#5A80E6] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-bold">L</span>
              </div>
              <div className="bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-sm flex items-center gap-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 rounded-full bg-gray-400"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
