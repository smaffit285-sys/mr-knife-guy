import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { KnifeCatalog } from '@/entities';
import { CommunityKnives } from '@/types/community-knives';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import KnifeCategorySection from '@/components/sections/KnifeCategorySection';
import CommunityKnivesSection from '@/components/sections/CommunityKnivesSection';

const KNIFE_STYLES = ['European style', 'Japanese style', 'Custom maker', 'Pocket / Camping / Tactical'];

export default function KnivesForSalePage() {
  const [catalogKnives, setCatalogKnives] = useState<KnifeCatalog[]>([]);
  const [communityKnives, setCommunityKnives] = useState<CommunityKnives[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadKnives = async () => {
      try {
        setIsLoading(true);
        const catalogResult = await BaseCrudService.getAll<KnifeCatalog>('knifecatalog', [], { limit: 100 });
        const communityResult = await BaseCrudService.getAll<CommunityKnives>('communityknives', [], { limit: 100 });
        
        setCatalogKnives(catalogResult.items || []);
        setCommunityKnives(communityResult.items?.filter(k => k.isAvailable) || []);
      } catch (error) {
        console.error('Error loading knives:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadKnives();
  }, []);

  const getKnivesByStyle = (style: string) => {
    return catalogKnives.filter(knife => knife.productType === style);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <Header />

      <main className="w-full">
        {/* Hero Section with Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-synthwave-neon-pink/20 via-synthwave-dark to-synthwave-neon-cyan/20">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink via-synthwave-purple to-synthwave-neon-cyan opacity-10"
              style={{ backgroundSize: '200% 200%' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-synthwave-neon-pink via-synthwave-neon-cyan to-synthwave-neon-pink bg-clip-text text-transparent"
            >
              Knives for Sale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-paragraph text-xl md:text-2xl text-synthwave-light/80 max-w-2xl mx-auto"
            >
              Explore premium blades from our curated collection and community marketplace
            </motion.p>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <div className="w-full px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {/* Catalog Sections */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-950">
              <div className="max-w-[100rem] mx-auto">
                {KNIFE_STYLES.map((style, index) => (
                  <KnifeCategorySection
                    key={style}
                    title={style}
                    knives={getKnivesByStyle(style)}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Community Knives Section */}
            <CommunityKnivesSection knives={communityKnives} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
