import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofTicker from '@/components/sections/SocialProofTicker';
import PainPointSection from '@/components/sections/PainPointSection';
import ProGradePrecisionSection from '@/components/sections/ProGradePrecisionSection';
import PricingSection from '@/components/sections/PricingSection';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  const [showMobilePhone, setShowMobilePhone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobilePhone(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-synthwave-midnight text-synthwave-light min-h-screen overflow-x-hidden">
      <Header />

      {/* Main Content */}
      <main className="w-full">
        <HeroSection />
        <SocialProofTicker />
        <PainPointSection />
        <ProGradePrecisionSection />
        <PricingSection />
        <BeforeAfterSlider />
        <CTASection />
      </main>

      <Footer />

      {/* Sticky Mobile Phone CTA */}
      {showMobilePhone && (
        <motion.a
          href="tel:650-533-8351"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 md:hidden z-40 bg-synthwave-neon-pink text-synthwave-midnight rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'tel:650-533-8351';
          }}
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      )}

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
