'use client'

import { motion } from 'framer-motion'

const MonitorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="8" y1="21" x2="16" y2="21"/>
  </svg>
)
const FormIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)
const FileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>
  </svg>
)
const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
)

const oldSteps = [
  { icon: <MonitorIcon />, label: 'Abrir sistema', sub: 'Entrar no emissor.' },
  { icon: <FormIcon />, label: 'Preencher dados', sub: 'Cliente, valor, serviço.' },
  { icon: <FileIcon />, label: 'Gerar nota', sub: 'Clicar em "Gerar Nota".' },
  { icon: <DownloadIcon />, label: 'Baixar PDF', sub: 'Baixar o arquivo PDF.' },
  { icon: <SendIcon />, label: 'Enviar pro cliente', sub: 'Abrir e-mail ou WhatsApp.' },
]

const newSteps = [
  { label: 'Abrir WhatsApp' },
  { label: 'Enviar áudio' },
  { label: 'Gerar nota' },
  { label: 'Enviar para o cliente' },
]

const WA_NUMBER = '5561999231379'

export function ComparisonSection() {
  return (
    <section id="demo" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 space-y-3"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-700 text-balance">
            O futuro{' '}
            <span className="text-[#12BF00]">está aqui</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* ——— PASSADO ——— */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex flex-col gap-6"
          >
            {/* Label */}
            <div className="inline-flex self-start">
              <span className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold tracking-widest uppercase">
                PASSADO
              </span>
            </div>

            {/* Steps horizontais com setas */}
            <div className="flex items-start justify-between gap-0.5 overflow-hidden">
              {oldSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-0.5 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm text-base flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-semibold text-gray-500 text-center leading-tight w-[40px] sm:w-[52px]">{step.label}</span>
                  </motion.div>
                  {i < oldSteps.length - 1 && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2.5" className="flex-shrink-0 -mt-3"><polyline points="9 18 15 12 9 6"/></svg>
                  )}
                </div>
              ))}
            </div>

            {/* Imagem do sistema — laptop branco */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/sistema-passado.jpeg"
                alt="Sistema QueroFaturar — tela de emissão de nota fiscal no laptop"
                className="w-full h-auto object-contain"
              />
            </div>


          </motion.div>

          {/* ——— FUTURO ——— */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#e8f5e9] to-[#e3f0ff] rounded-3xl p-8 border border-[#12BF00]/20 flex flex-col gap-6 relative overflow-visible"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#12BF00]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Label */}
            <div className="inline-flex self-start">
              <span className="px-4 py-1.5 rounded-full bg-[#12BF00] text-white text-xs font-bold tracking-widest uppercase shadow-md">
                FUTURO
              </span>
            </div>

            {/* 4 steps icons row */}
            <div className="flex items-start justify-between gap-0.5 sm:gap-2 relative z-10 overflow-hidden">
              {newSteps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-0.5 sm:gap-1 min-w-0">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#12BF00]/30 flex items-center justify-center shadow-sm flex-shrink-0">
                      {i === 0 && (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#12BF00"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.541 5.875L0 24l6.336-1.513A11.958 11.958 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.745-.525-5.29-1.438l-.38-.224-3.763.898.942-3.668-.247-.389A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
                      )}
                      {i === 1 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5A80E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>
                      )}
                      {i === 2 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12BF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 10.5 17 15 12"/></svg>
                      )}
                      {i === 3 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5A80E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                      )}
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-semibold text-gray-700 text-center leading-tight w-[40px] sm:w-[56px]">{step.label}</span>
                  </div>
                  {i < newSteps.length - 1 && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#5A80E6" strokeWidth="2.5" className="flex-shrink-0 -mt-3"><polyline points="9 18 15 12 9 6"/></svg>
                  )}
                </div>
              ))}
            </div>

            {/* iPhone cel.png + balões */}
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start flex-1 relative z-10">
              <div className="flex justify-center items-end w-full sm:flex-1">
                <img
                  src="/images/cel.png"
                  alt="Conversa real com o Zap Notas no WhatsApp mostrando emissão de nota fiscal"
                  className="w-full max-w-[260px] sm:max-w-[340px] object-contain drop-shadow-2xl"
                />
              </div>

              {/* Balões */}
              <div className="flex flex-col gap-3 w-full sm:pt-4 sm:max-w-[140px]">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-lg border border-gray-100">
                  <p className="text-gray-600 font-extrabold text-sm leading-tight">
                    Agora imagine fazer tudo isso no{' '}
                    <span className="text-[#12BF00]">WhatsApp</span>
                  </p>
                </div>
                <div className="bg-[#5A80E6]/80 rounded-2xl px-3 py-2.5 shadow-md">
                  <p className="text-white text-[11px] leading-relaxed">
                    Enquanto você ainda perde tempo tentando emitir nota... tem gente resolvendo tudo com uma simples mensagem no WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl bg-[#12BF00] text-white font-bold text-sm hover:bg-[#0faa00] transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(18,191,0,0.4)] hover:-translate-y-0.5 self-center relative z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.541 5.875L0 24l6.336-1.513A11.958 11.958 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.938 0-3.745-.525-5.29-1.438l-.38-.224-3.763.898.942-3.668-.247-.389A9.96 9.96 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
              Quero emitir pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
