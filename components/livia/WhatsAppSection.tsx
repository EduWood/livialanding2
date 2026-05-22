'use client'

import { motion } from 'framer-motion'
import { WhatsAppMock } from './WhatsAppMock'

const WA_NUMBER = '5561999231379'
const WA_MESSAGE = 'Olá! Gostaria de testar o Zap Notas para emitir notas de graça.'

export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#12BF00]/10 text-[#0a9400] text-sm font-semibold">
              Teste agora
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 leading-tight text-balance">
              Teste o Zap Notas agora{' '}
              <span className="text-[#12BF00]">no WhatsApp</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Veja uma nota sendo gerada automaticamente em segundos, com PDF e link de pagamento prontos. Sem precisar cadastrar nada.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Envie os dados por áudio ou texto', desc: 'Fale ou escreva normalmente. O Zap Notas entende tudo.' },
                { title: 'Revisão inteligente antes de emitir', desc: 'Confirme os dados e aprove com um simples "ok".' },
                { title: 'Nota, PDF e cobrança prontos', desc: 'Receba tudo no mesmo chat, pronto para enviar.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#12BF00] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-600 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#12BF00] text-white font-bold text-base shadow-xl hover:shadow-[0_0_40px_rgba(18,191,0,0.5)] transition-shadow duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.541 5.875L0 24l6.336-1.513A11.958 11.958 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.745-.525-5.29-1.438l-.38-.224-3.763.898.942-3.668-.247-.389A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
              </svg>
              Emitir nota de graça agora
            </motion.a>
          </motion.div>

          {/* WhatsApp Mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              <WhatsAppMock />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-20 bg-[#12BF00]/20 blur-3xl rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
