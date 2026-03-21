import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { ChevronRight } from 'lucide-react';

export default function BeforeAfterPage() {
  // Create 21 groups with before and after images
  const groupCount = 21;
  
  // Placeholder image URL
  const placeholderImage = 'https://static.wixstatic.com/media/37d64c_460796e67a93440f96e0fd00d3861189~mv2.png?originWidth=192&originHeight=192';
  
  // User-provided before and after images
  const beforeImage = 'https://static.wixstatic.com/media/37d64c_aeec82f451b34f6287b4813d206b1b4e~mv2.png';
  const afterImage = 'https://static.wixstatic.com/media/37d64c_83f0e7a8792a466a84b9bd37bfe81605~mv2.png';
  
  // Knife #2 images
  const knife2BeforeImage = 'https://static.wixstatic.com/media/37d64c_f17b6eeae2774063844962a6be48e4f0~mv2.png';
  const knife2AfterImage = 'https://static.wixstatic.com/media/37d64c_eeb38045722f42f2990807d81877d744~mv2.png';
  
  const navigate = useNavigate();

  const knifeGroups = Array.from({ length: groupCount }, (_, i) => ({
    id: i,
    beforeImage: i === 0 ? beforeImage : i === 1 ? knife2BeforeImage : placeholderImage,
    afterImage: i === 0 ? null : i === 1 ? knife2AfterImage : placeholderImage,
    beforeAlt: `Knife ${i + 1} - Before sharpening`,
    afterAlt: `Knife ${i + 1} - After sharpening`,
  }));

  return (
    <div className="min-h-screen bg-synthwave-midnight">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="w-full max-w-[120rem] mx-auto px-3 sm:px-6 lg:px-8">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent">
                BEFORE & AFTER
              </span>
            </h1>
            <p className="font-paragraph text-synthwave-light/80 text-lg">
              Professional knife sharpening transformations
            </p>
          </motion.div>

          {/* Knife Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {knifeGroups.map((group, index) => (
              <motion.button
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true, margin: '-100px' }}
                onClick={() => navigate(`/before-after/${group.id}`)}
                className="group relative bg-synthwave-dark/50 backdrop-blur border border-synthwave-neon-cyan/20 rounded-lg overflow-hidden hover:border-synthwave-neon-cyan/50 transition-all hover:shadow-lg hover:shadow-synthwave-neon-cyan/20 cursor-pointer"
              >
                {/* Container for Before & After */}
                <div className="relative w-full">
                  {/* Header */}
                  <div className="px-4 pt-4 pb-2">
                    <p className="font-heading text-synthwave-neon-cyan text-sm font-bold">
                      Knife #{group.id + 1}
                    </p>
                  </div>

                  {/* Images Container */}
                  <div className={`grid ${group.afterImage ? 'grid-cols-2' : 'grid-cols-1'} gap-2 px-4 pb-4`}>
                    {/* After Image */}
                    {group.afterImage && (
                      <div className="relative">
                        <div className="aspect-square rounded overflow-hidden bg-synthwave-dark border border-synthwave-neon-cyan/30 group-hover:border-synthwave-neon-cyan/60 transition-colors">
                          <Image
                            src={group.afterImage}
                            alt={group.afterAlt}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-1 left-1 bg-synthwave-neon-cyan/80 text-synthwave-midnight px-2 py-1 rounded text-xs font-heading font-bold">
                          AFTER
                        </div>
                      </div>
                    )}

                    {/* Before Image */}
                    <div className="relative">
                      <div className="aspect-square rounded overflow-hidden bg-synthwave-dark border border-synthwave-neon-pink/30 group-hover:border-synthwave-neon-pink/60 transition-colors">
                        <Image
                          src={group.beforeImage}
                          alt={group.beforeAlt}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-1 left-1 bg-synthwave-neon-pink/80 text-synthwave-midnight px-2 py-1 rounded text-xs font-heading font-bold">
                        BEFORE
                      </div>
                    </div>
                  </div>

                  {/* CTA Arrow */}
                  <div className="px-4 pb-4 flex items-center justify-between">
                    <span className="font-paragraph text-synthwave-light/60 text-xs group-hover:text-synthwave-light/80 transition-colors">
                      View Details
                    </span>
                    <ChevronRight
                      size={16}
                      className="text-synthwave-neon-cyan group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink/0 to-synthwave-neon-cyan/0 group-hover:from-synthwave-neon-pink/10 group-hover:to-synthwave-neon-cyan/10 transition-colors pointer-events-none" />
              </motion.button>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-synthwave-dark/50 backdrop-blur border border-synthwave-neon-cyan/20 rounded-lg p-6 sm:p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-synthwave-neon-cyan mb-4">
              PROFESSIONAL TRANSFORMATIONS
            </h3>
            <p className="font-paragraph text-synthwave-light/80 text-base sm:text-lg leading-relaxed">
              Each knife shown above underwent our professional sharpening process. Click on any knife to see the full before and after gallery with detailed transformation information. Our master sharpeners restore dull, damaged blades to factory-fresh condition with extended edge retention.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
