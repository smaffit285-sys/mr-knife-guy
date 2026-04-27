import Footer from '@/components/Footer';
import Header from '@/components/Header';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import CTASection from '@/components/sections/CTASection';
import ClubPricingLevels from '@/components/sections/ClubPricingLevels';
import FiveLiesSection from '@/components/sections/FiveLiesSection';
import HeroSection from '@/components/sections/HeroSection';
import PainPointSection from '@/components/sections/PainPointSection';
import ProGradePrecisionSection from '@/components/sections/ProGradePrecisionSection';
import SocialLinksSection from '@/components/sections/SocialLinksSection';
import SocialProofTicker from '@/components/sections/SocialProofTicker';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MousePointer2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <Header />

      <main className="w-full">
        <HeroSection />
        <SocialProofTicker />
        <PainPointSection />

        {/* Sharp After Dark Commercial Sharpening Service Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-950"
        >
          <div className="max-w-[100rem] mx-auto">
            <Link to="/sharp-after-dark" className="flex justify-center">
              <motion.div
                className="group relative overflow-hidden rounded-lg border-2 border-synthwave-neon-pink/50 bg-gradient-to-r from-synthwave-neon-pink/10 to-synthwave-neon-cyan/10 p-4 cursor-pointer hover:border-synthwave-neon-pink transition-all duration-300 w-fit"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink via-synthwave-purple to-synthwave-neon-cyan opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="relative z-10 text-center">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold neon-sign-pink group-hover:text-synthwave-neon-cyan transition-colors duration-300">
                    Sharp After Dark:
                  </h3>
                  <p className="font-heading text-xl md:text-2xl neon-sign-cyan mt-2 group-hover:text-synthwave-light transition-colors duration-300 font-semibold">
                    Commercial Sharpening for Miami's Top Kitchens
                  </p>
                  <p className="font-heading text-lg text-synthwave-light/70 mt-4 group-hover:text-synthwave-light transition-colors duration-300">
                    Pickup at last call. Back before first prep. Zero downtime — ever.
                  </p>
                  <div className="absolute -bottom-3 -right-3">
                    <MousePointer2 className="w-5 h-5 text-synthwave-neon-cyan group-hover:text-synthwave-light transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <ClubPricingLevels />

        {/* Knives for Sale Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-950"
        >
          <div className="max-w-[100rem] mx-auto">
            <Link to="/knives-for-sale" className="flex justify-center">
              <motion.div
                className="group relative overflow-hidden rounded-lg border-2 border-synthwave-neon-cyan/50 bg-gradient-to-r from-synthwave-neon-cyan/10 to-synthwave-neon-pink/10 p-4 cursor-pointer hover:border-synthwave-neon-cyan transition-all duration-300 w-fit"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-cyan via-synthwave-purple to-synthwave-neon-pink opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                />
                <div className="relative z-10 text-center">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold neon-sign-cyan group-hover:text-synthwave-neon-pink transition-colors duration-300">
                    Knives for Sale
                  </h3>
                  <p className="font-heading text-lg text-synthwave-light/70 mt-4 group-hover:text-synthwave-light transition-colors duration-300">
                    Explore our premium blade collection
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <BeforeAfterSlider />
        <ProGradePrecisionSection />
        <FiveLiesSection />
        <CTASection />
        <SocialLinksSection />
      </main>

      <Footer />

      {/* STICKY MOBILE CTA */}
      <Link to="/customer-info">
        <motion.div
          className="fixed bottom-4 right-4 md:hidden z-40 px-4 py-3 bg-synthwave-neon-cyan text-synthwave-midnight rounded-md font-heading font-bold shadow-xl hover:shadow-synthwave-neon-cyan/20 transition-all text-center tracking-wide uppercase text-sm cursor-pointer w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Text SHARP
        </motion.div>
      </Link>

      {/* DESKTOP CONTACT */}
      <motion.a
        href="tel:3059095773"
        className="hidden md:flex items-center gap-2 md:fixed md:top-6 md:right-6 z-40 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-md font-heading text-sm hover:bg-synthwave-neon-cyan/20 transition-all shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        DIRECT LINE: (305) 909-5773
      </motion.a>
    </div>
  );
}
