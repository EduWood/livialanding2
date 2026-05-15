'use client'

import { motion } from 'framer-motion'

const WA_NUMBER = '5561999231379'

export function CtaFinal() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="relative min-h-[600px] flex items-center">
        <img
          src="/images/fundo-final.png"
          alt="Zap Notas Quero Faturar"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_top]"
        />
        {/* Gradiente ajustado para valorizar a personagem */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-xl space-y-8">
            {/* Headline apenas — config item 11 / item 13 */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-600 leading-[1.1] text-balance"
            >
              Enquanto você lê isso, uma nota poderia estar{' '}
              <span className="text-[#12BF00]">pronta</span>
            </motion.h2>

            {/* CTA Button — config mobile item 15 / desktop item 11 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(18,191,0,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#12BF00] text-white font-extrabold text-lg shadow-2xl transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.541 5.875L0 24l6.336-1.513A11.958 11.958 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.745-.525-5.29-1.438l-.38-.224-3.763.898.942-3.668-.247-.389A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                Testar agora pelo WhatsApp
              </motion.a>
            </motion.div>

            {/* Prova social — config mobile item 15 / desktop item 12 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Google */}
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-sm border border-gray-100">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div>
                  <p className="text-[10px] text-gray-500 leading-none">Avaliações no</p>
                  <p className="text-xs font-bold text-gray-800 leading-none mt-0.5">Google</p>
                </div>
                <div className="flex gap-0.5 ml-1">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>

              {/* Reclame Aqui */}
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-sm border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-[#00b14f] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 leading-none">Boa reputação no</p>
                  <p className="text-xs font-bold text-gray-800 leading-none mt-0.5">Reclame Aqui</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
