import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Zap Notas | Emita notas fiscais pelo WhatsApp — Quero Faturar',
  description:
    'Emita notas fiscais automaticamente pelo WhatsApp. O Zap Notas entende sua venda, gera a nota, o PDF e o link de pagamento em segundos.',
  keywords: ['nota fiscal', 'whatsapp', 'emissão de notas', 'NF-e', 'NFS-e', 'Quero Faturar', 'nota fiscal eletrônica'],
  authors: [{ name: 'Quero Faturar' }],
  themeColor: '#12BF00',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Zap Notas | Emita notas fiscais pelo WhatsApp — Quero Faturar',
    description:
      'Emita notas fiscais automaticamente pelo WhatsApp. O Zap Notas entende sua venda, gera a nota, o PDF e o link de pagamento em segundos.',
    type: 'website',
    siteName: 'Quero Faturar',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
