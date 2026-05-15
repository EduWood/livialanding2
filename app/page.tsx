import { Header } from '@/components/livia/Header'
import { Hero } from '@/components/livia/Hero'
import { VideoSection } from '@/components/livia/VideoSection'
import { ComparisonSection } from '@/components/livia/ComparisonSection'
import { FeaturesSection } from '@/components/livia/FeaturesSection'
import { TechSection } from '@/components/livia/TechSection'
import { WhatsAppSection } from '@/components/livia/WhatsAppSection'
import { CtaFinal } from '@/components/livia/CtaFinal'
import { Footer } from '@/components/livia/Footer'

export default function LiviaLandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <VideoSection />
      <ComparisonSection />
      <FeaturesSection />
      <TechSection />
      <WhatsAppSection />
      <CtaFinal />
      <Footer />
    </main>
  )
}
