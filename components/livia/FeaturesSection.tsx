'use client'

import { motion } from 'framer-motion'
import { Mic, FileText, Link2, BarChart2, Search, RefreshCw, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Comando de Voz',
    description: 'Emite notas apenas falando ou enviando áudio. Sem digitar nada.',
  },
  {
    icon: FileText,
    title: 'Emissão Completa',
    description: 'Emite NF-e, NFS-e e NFC-e direto pelo WhatsApp, de forma automática e segura.',
  },
  {
    icon: Link2,
    title: 'Cobrança Integrada',
    description: 'Gera Pix, boleto ou link de pagamento automaticamente junto com a nota.',
  },
  {
    icon: Shield,
    title: 'Revisão Inteligente',
        description: 'Visualize e revise a nota antes de emitir ou cancelar. O Zap Notas confirma tudo.',
  },
  {
    icon: Search,
    title: 'Consulta Automática',
    description: 'Consulta produtos e clientes já cadastrados sem sair do WhatsApp.',
  },
  {
    icon: RefreshCw,
    title: 'Conecta ao Sistema',
    description: 'Cadastro de dados sempre atualizados no Quero Faturar.',
  },
  {
    icon: BarChart2,
    title: 'Relatórios',
    description: 'Acompanhe suas emissões, valores e clientes direto pelo painel.',
  },
  {
    icon: Zap,
    title: 'Teste Disponível',
        description: 'Use o Zap Notas no início sem custo, antes de contratar o módulo.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function FeaturesSection() {
  return (
    <section id="funcoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#12BF00]/10 text-[#0a9400] text-sm font-semibold">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-600 text-balance">
            Tudo o que você precisa para{' '}
            <span className="text-[#12BF00]">emitir notas pelo WhatsApp</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            O Zap Notas conecta a sua operação ao sistema do Quero Faturar e cuida de todo o processo de emissão de forma simples e segura.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#12BF00]/30 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#12BF00]/10 group-hover:bg-[#12BF00] flex items-center justify-center mb-4 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-[#12BF00] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-600 mb-2 text-base">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
