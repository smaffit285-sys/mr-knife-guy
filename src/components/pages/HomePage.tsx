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
import { Link } from 'react-router-dom';

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
        
        {/* Sharp After Dark Commercial Sharpening Service Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-950"
        >
          <div className="max-w-[100rem] mx-auto">
            <Link to="/sharp-after-dark">
              <motion.div
                className="group relative overflow-hidden rounded-lg border-2 border-synthwave-neon-pink/50 bg-gradient-to-r from-synthwave-neon-pink/10 to-synthwave-neon-cyan/10 p-8 cursor-pointer hover:border-synthwave-neon-pink transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink via-synthwave-purple to-synthwave-neon-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                />
                <div className="relative z-10 text-center">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-synthwave-neon-pink group-hover:text-synthwave-neon-cyan transition-colors duration-300">
                    Sharp After Dark:
                  </h3>
                  <p className="font-paragraph text-xl md:text-2xl text-synthwave-neon-cyan mt-2 group-hover:text-synthwave-light transition-colors duration-300 font-semibold">
                    Commercial Sharpening Service
                  </p>
                  <p className="font-paragraph text-lg text-synthwave-light/70 mt-4 group-hover:text-synthwave-light transition-colors duration-300">
                    Your kitchen doesn't sleep. Neither do your blades.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

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
