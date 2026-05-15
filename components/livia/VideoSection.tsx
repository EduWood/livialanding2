'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const WA_NUMBER = '5561999231379'
const VIDEO_URL = 'https://www.youtube.com/embed/ZbIX0gCti4w?autoplay=1&mute=1&playsinline=1'

export function VideoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="demonstracao" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#12BF00]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#12BF00]/10 text-[#0a9400] text-sm font-bold tracking-wide">
            Veja como funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 text-balance leading-tight">
            Emitir nota ainda rouba{' '}
            <span className="text-[#12BF00]">tempo do seu dia?</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Empresas que investem em automação seguem ganhando velocidade, consistência e escala. Foi pensando nisso que nasceu a{' '}
            <span className="font-semibold text-gray-600">Zap Notas</span>, o novo módulo inteligente do Quero Faturar.
          </p>
        </motion.div>

        {/* Layout: vídeo no centro | texto à direita */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

          {/* Vídeo — grande, formato vertical 9/16 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-shrink-0 flex justify-center"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-950"
              style={{ width: '360px', aspectRatio: '9/16' }}
            >
              {/* Barra decorativa */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-2 px-4 py-3 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-[#12BF00]/80" />
                </div>
                <span className="text-white/60 text-xs ml-2 font-medium tracking-wide">
                  Zap Notas — Quero Faturar
                </span>
              </div>

              {/* Thumbnail / Play */}
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 z-20 w-full h-full flex flex-col items-center justify-center bg-gray-900 group cursor-pointer"
                  aria-label="Reproduzir vídeo"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950" />
                  <div className="absolute inset-0 bg-[#12BF00]/5" />
                  <div className="relative z-10 flex flex-col items-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-[#12BF00] flex items-center justify-center shadow-[0_0_60px_rgba(18,191,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_80px_rgba(18,191,0,0.7)] transition-all duration-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="translate-x-0.5" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-white font-bold text-lg">Clique para assistir</p>
                      <p className="text-gray-400 text-sm">Zap Notas em ação</p>
                    </div>
                  </div>
                </button>
              )}

              {/* Iframe YouTube */}
              {isPlaying && (
                <iframe
                  src={VIDEO_URL}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  title="Zap Notas — Nota Fiscal pelo WhatsApp"
                />
              )}
            </div>
          </motion.div>

          {/* Texto lateral + badges + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col gap-6 max-w-md justify-center"
          >
            <p className="text-gray-500 text-base leading-relaxed">
              Agora, basta enviar uma mensagem ou um áudio com os dados da venda e a{' '}
              <span className="font-semibold text-gray-600">Zap Notas</span> cuida do restante: consulta cadastros, organiza informações, monta a nota, envia prévia para revisão, emite, gera PDF e cria a cobrança integrada, tudo direto pelo WhatsApp e conectado ao seu sistema.
            </p>

            <div className="w-12 h-0.5 bg-[#12BF00] rounded-full" />

            <p className="text-gray-500 text-base leading-relaxed">
              O <span className="font-semibold text-gray-600">Zap Notas</span> já está disponível no Quero Faturar.{' '}
              Conheça uma nova forma de emitir notas: mais simples, mais rápida e muito mais inteligente. Entre em contato e teste agora!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { text: 'Sem necessidade de sistema' },
                { text: 'Nota gerada em segundos' },
                { text: 'Direto pelo WhatsApp' },
              ].map(({ text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm font-medium"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#12BF00]" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Oi+L%C3%ADvia%2C+quero+testar+a+emiss%C3%A3o+de+nota+fiscal!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#12BF00] text-white font-bold text-base hover:bg-[#0faa00] transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(18,191,0,0.4)] hover:-translate-y-0.5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Testar agora é de graça
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
