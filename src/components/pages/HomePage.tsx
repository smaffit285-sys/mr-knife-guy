import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import CTASection from '@/components/sections/CTASection';
import ClubPricingLevels from '@/components/sections/ClubPricingLevels';
import FiveLiesSection from '@/components/sections/FiveLiesSection';
import HeroSection from '@/components/sections/HeroSection';
import PainPointSection from '@/components/sections/PainPointSection';
import ProGradePrecisionSection from '@/components/sections/ProGradePrecisionSection';
import SocialProofTicker from '@/components/sections/SocialProofTicker';
import SocialLinksSection from '@/components/sections/SocialLinksSection';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    /* REFINED AESTHETIC: Moving to Slate, Steel, and Precision Accents */
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <Header />

      <main className="w-full">
        <HeroSection />
        <SocialProofTicker />
        {/* B2B FOCUS: Focus on kitchen efficiency and safety costs */}
        <PainPointSection />
        <ClubPricingLevels />
        <BeforeAfterSlider />
        <ProGradePrecisionSection />
        <FiveLiesSection />
        <CTASection />
        <SocialLinksSection />
      </main>

      <Footer />

      {/* STICKY MOBILE CTA: Updated for B2B tone */}
      <motion.a
        href="#cta"
        className="fixed bottom-4 right-4 left-4 md:hidden z-40 px-4 py-3 bg-cyan-600 text-white rounded-md font-heading font-bold shadow-xl hover:shadow-cyan-500/20 transition-all text-center tracking-wide uppercase text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Book Service
      </motion.a>

      {/* DESKTOP CONTACT: Professional reach-out for North Miami Beach inquiries */}
      <motion.a
        href="tel:786-XXX-XXXX" // Suggesting a local 305 or 786 number
        className="hidden md:flex items-center gap-2 md:fixed md:top-6 md:right-6 z-40 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-md font-heading text-sm hover:bg-cyan-600 transition-all shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        DIRECT LINE: 786-XXX-XXXX
      </motion.a>
    </div>
  );
}
