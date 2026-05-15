'use client'

import { motion } from 'framer-motion'
import { WhatsAppMock } from './WhatsAppMock'

const floatingCards = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5A80E6]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    label: 'Nota gerada',
    sub: 'NFS-e automática',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5A80E6]">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    label: 'PDF enviado',
    sub: 'Para o cliente',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5A80E6]">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    label: 'Link de cobrança',
    sub: 'Pix e Boleto',
  },
]

const mobileFlow = [
  'Abrir o WhatsApp',
  'Enviar áudio',
  'Gerar nota',
  'Enviar para o cliente',
]

const WA_NUMBER = '5561999231379'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fundo-lp.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Layout: flex justify-between com padding lateral grande */}
      <div className="relative z-10 w-full h-screen min-h-[700px] flex items-center px-4 sm:px-8 lg:px-12 pt-20">

        {/* LEFT CARD — fixado na borda esquerda */}
        {/* Coluna esquerda: badge acima + card abaixo */}
        <div className="flex flex-col gap-0 flex-shrink-0 w-full max-w-[420px]">

        {/* Badge verde — fora do card, flutuando acima */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full mb-8"
        >
          <div className="inline-flex flex-col items-start gap-1 px-5 py-4 rounded-2xl bg-[#12BF00] shadow-[0_8px_40px_rgba(18,191,0,0.5)] w-full border border-[#0faa00]">
            <span className="text-white font-extrabold text-xl leading-tight tracking-tight">
              ZAP NOTAS Quero Faturar
            </span>
            <span className="text-white/90 text-sm font-medium leading-snug">
              Emita notas pelo WhatsApp em poucos segundos.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-[420px] space-y-6 bg-white/80 backdrop-blur-md rounded-3xl p-7 shadow-2xl border border-white/70 flex-shrink-0"
        >
          {/* Pill azul */}
          <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#5A80E6]/15 border border-[#5A80E6]/30 text-[#4060c0] text-xs font-semibold whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5A80E6] flex-shrink-0" />
            A primeira a emitir nota fiscal pelo WhatsApp
          </span>

          {/* Headline */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-[#5A80E6] uppercase tracking-[0.2em]">
              Nota Fiscal pelo WhatsApp
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-700 leading-[1.2]">
              Emita notas fiscais enviando um{' '}
              <span className="relative inline">
                <span className="relative z-10">áudio no WhatsApp.</span>
                <span className="absolute bottom-0.5 left-0 w-full h-[5px] bg-[#12BF00]/50 rounded-full -z-0" />
              </span>
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              <span className="font-extrabold text-[#12BF00]">O Zap Notas entende</span> o que você disse e gera a nota fiscal no mesmo instante{' '}
              <span className="font-semibold text-gray-600">com PDF e link de pagamento.</span>
            </p>
          </div>

          {/* Cards flutuantes */}
          <div className="hidden sm:flex flex-row gap-2 flex-wrap">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
                className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-md border border-gray-100 flex-1 min-w-[110px]"
              >
                <div className="w-7 h-7 rounded-lg bg-[#5A80E6]/10 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-600 leading-tight">{card.label}</p>
                  <p className="text-[10px] text-gray-500 leading-tight">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="sm:hidden flex flex-wrap gap-2">
            {mobileFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 bg-white/80 border border-gray-200 rounded-full px-2.5 py-1 text-[11px] font-semibold text-gray-700 shadow-sm">
                  <span className="w-4 h-4 rounded-full bg-[#12BF00] text-white text-[9px] flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
                  {step}
                </span>
                {i < mobileFlow.length - 1 && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#12BF00] text-white font-bold text-sm hover:bg-[#0faa00] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(18,191,0,0.45)] hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.541 5.875L0 24l6.336-1.513A11.958 11.958 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.745-.525-5.29-1.438l-.38-.224-3.763.898.942-3.668-.247-.389A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              Fale com o Zap Notas agora →
            </a>
            <a
              href="#demonstracao"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#12BF00] hover:text-[#12BF00] transition-all duration-300"
            >
              Ver demonstração
            </a>
          </div>
        </motion.div>

        </div>{/* fim coluna esquerda */}

        {/* Espaço central livre — Lívia visível */}
        <div className="flex-1" />

        {/* RIGHT CARD — fixado na borda direita */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:flex flex-shrink-0 float-animation"
        >
          <WhatsAppMock />
        </motion.div>

      </div>
    </section>
  )
}
