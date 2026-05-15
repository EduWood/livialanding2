'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'O futuro está aqui', href: '#demo' },
  { label: 'Funções', href: '#funcoes' },
  { label: 'Demonstração', href: '#demonstracao' },
  { label: 'Teste Grátis', href: '#whatsapp' },
  { label: 'Contatos', href: '#contato' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/querofaturar',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@quero.faturar',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/sistemaquerofaturar/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.994 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Linktree',
    href: 'https://linktr.ee/Quero_Faturar_',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.953 15.066c-.08.163-.08.324 0 .486.08.162.243.243.405.243h7.284c.162 0 .324-.08.405-.243.08-.162.08-.323 0-.486l-3.642-6.31-3.452 6.31zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
      </svg>
    ),
  },
]

const WA_NUMBER = '5561999231379'

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#">
              <Image
                src="/images/logo.png"
                alt="QueroFaturar - Nota Fiscal Eletrônica"
                width={180}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A primeira IA que emite notas fiscais pelo WhatsApp. Rápido, automático e seguro.
            </p>

            {/* Contacts */}
            <div className="space-y-2.5">
              <a
                href="mailto:contato@querofaturar.com.br"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#12BF00] transition-colors"
              >
                <Mail size={14} />
                contato@querofaturar.com.br
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#12BF00] transition-colors"
              >
                <Phone size={14} />
                +55 (61) 99923-1379
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-[#12BF00] hover:bg-gray-700 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust badges — config desktop item 12 */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Google */}
              <a
                href="https://www.google.com/search?q=quero+faturar&oq=quero+faturar&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIMCAEQIxgnGIAEGIoFMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgYIBRBFGD0yBggGEEUYPTIGCAcQRRg90gEIMjQyNmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 rounded-xl px-3 py-2 hover:bg-gray-700 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" aria-label="Google">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-gray-300 text-xs font-medium">Google</span>
              </a>
              {/* Reclame Aqui */}
              <a
                href="https://www.reclameaqui.com.br/empresa/quero-faturar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gray-800 rounded-xl px-3 py-2 hover:bg-gray-700 transition-colors"
              >
                <div className="w-4 h-4 rounded-full bg-[#00b14f] flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <span className="text-gray-300 text-xs font-medium">Boa reputação no Reclame Aqui</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Menu</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#12BF00] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2026 Quero Faturar. Produto desenvolvido por{' '}
            <a
              href="https://www.codehash.dev.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-medium hover:text-[#12BF00] transition-colors"
            >
              CodeHash Sistemas®
            </a>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
