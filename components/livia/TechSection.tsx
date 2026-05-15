'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}

const stats = [
  { label: 'Empresas atendidas', value: 55506, suffix: '+', prefix: '' },
  { label: 'Emitidos em notas', value: 75, suffix: ' Bi', prefix: 'R$' },
  { label: 'Notas fiscais geradas', value: 12237358, suffix: '+', prefix: '' },
]

// Balões da Lívia
const liviaMessages = [
  { text: 'Recebi seu áudio', delay: 0 },
  { text: 'Confirma os dados abaixo', delay: 1.5 },
  { text: 'Autorizar Emissão', delay: 3 },
  { text: 'Nota e Link de pagamentos prontos', delay: 4.5 },
]

const WA_NUMBER = '5561999231379'

export function TechSection() {
  return (
    <section id="tecnologia" className="relative py-24 overflow-hidden bg-gray-50/50">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#12BF00]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0a9400]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + balões da Lívia */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src="/images/fundo-lp.png"
                alt="Zap Notas, assistente de emissão de notas fiscais"
                className="w-full max-w-sm rounded-3xl object-cover shadow-2xl float-animation"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-[#12BF00]/20 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#12BF00]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Balões da Lívia */}
              {liviaMessages.map((msg, i) => (
                <motion.div
                  key={msg.text}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: msg.delay * 0.25 + 0.3 }}
                  animate={{ y: [0, -5, 0] }}
                  style={{
                    position: 'absolute',
                    top: `${15 + i * 22}%`,
                    ...(i % 2 === 0 ? { right: '0px' } : { left: '0px' }),
                  }}
                  className="glass rounded-2xl px-3 py-2 shadow-lg max-w-[160px]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#5A80E6] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[8px] font-bold">L</span>
                    </div>
                    <p className="text-[11px] font-semibold text-gray-800 leading-tight">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: text + stats + steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#12BF00]/10 text-[#0a9400] text-sm font-semibold">
                Tecnologia
              </span>
              {/* Texto aprovado config mobile item 9 / desktop item 7 */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 leading-tight text-balance">
                A tecnologia do Quero Faturar já{' '}
                <span className="text-[#12BF00]">ajuda milhares de empresas</span>
              </h2>
            </div>

            {/* Stats counter */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-2xl font-extrabold text-gray-600 leading-none">
                    {stat.prefix}
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 mt-1.5 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Fluxo passo a passo */}
            <div className="space-y-3">
              {[
                'Você envia a venda por áudio ou texto',
                'O Zap Notas organiza e confirma os dados',
                'A nota é gerada automaticamente',
                'Você recebe PDF e link de pagamento prontos',
              ].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-[#5A80E6] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{step}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#12BF00] text-white font-bold text-base hover:bg-[#0faa00] transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(18,191,0,0.4)] hover:-translate-y-0.5"
            >
              Testar agora no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
