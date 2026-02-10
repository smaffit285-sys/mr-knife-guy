import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofTicker from '@/components/sections/SocialProofTicker';
import PainPointSection from '@/components/sections/PainPointSection';
import ProGradePrecisionSection from '@/components/sections/ProGradePrecisionSection';
import PricingSection from '@/components/sections/PricingSection';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import FiveLiesSection from '@/components/sections/FiveLiesSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="bg-synthwave-midnight text-synthwave-light min-h-screen overflow-x-hidden">
      <Header />

      {/* Main Content */}
      <main className="w-full">
        <HeroSection />
        <SocialProofTicker />
        <PainPointSection />
        <PricingSection />
        <ProGradePrecisionSection />
        <BeforeAfterSlider />
        <FiveLiesSection />
        <CTASection />
      </main>

      <Footer />

      {/* Sticky Mobile "SCHEDULE PICKUP NOW" Button */}
      <motion.a
        href="#cta"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:hidden z-40 px-6 py-4 bg-synthwave-neon-blue text-synthwave-midnight rounded-lg font-heading font-bold shadow-lg hover:shadow-2xl hover:shadow-synthwave-neon-blue/50 transition-all w-[calc(100%-2rem)] max-w-xs text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        SCHEDULE PICKUP NOW
      </motion.a>

      {/* Desktop Phone CTA */}
      <motion.a
        href="tel:650-533-8351"
        className="hidden md:fixed md:top-6 md:right-6 z-40 bg-synthwave-neon-pink text-synthwave-midnight px-6 py-3 rounded-full font-heading text-sm hover:bg-synthwave-neon-cyan transition-colors shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        CALL 650-533-8351
      </motion.a>
    </div>
  );
}
