import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function BeforeAfterPage() {
  // Create 30 groups of 3 images for each side
  const groupCount = 30;
  const imagesPerGroup = 3;
  
  // Placeholder image URL
  const placeholderImage = 'https://static.wixstatic.com/media/37d64c_460796e67a93440f96e0fd00d3861189~mv2.png?originWidth=192&originHeight=192';

  const beforeGroups = Array.from({ length: groupCount }, (_, i) => ({
    id: `before-${i}`,
    images: Array.from({ length: imagesPerGroup }, (_, j) => ({
      id: `before-${i}-${j}`,
      url: placeholderImage,
      alt: `Before image ${i + 1} - photo ${j + 1}`,
    })),
  }));

  const afterGroups = Array.from({ length: groupCount }, (_, i) => ({
    id: `after-${i}`,
    images: Array.from({ length: imagesPerGroup }, (_, j) => ({
      id: `after-${i}-${j}`,
      url: placeholderImage,
      alt: `After image ${i + 1} - photo ${j + 1}`,
    })),
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

          {/* Split View Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            {/* BEFORE Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:pr-4 lg:border-r border-synthwave-neon-cyan/20"
            >
              <div className="sticky top-24 mb-8">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-synthwave-neon-pink mb-2">
                  BEFORE
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-synthwave-neon-pink to-transparent"></div>
              </div>

              {/* Before Groups */}
              <div className="space-y-8">
                {beforeGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.02 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="bg-synthwave-dark/50 backdrop-blur border border-synthwave-neon-cyan/10 rounded-lg p-4 hover:border-synthwave-neon-cyan/30 transition-colors"
                  >
                    <div className="text-xs font-paragraph text-synthwave-neon-cyan/60 mb-3">
                      Group {groupIndex + 1}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {group.images.map((image) => (
                        <div
                          key={image.id}
                          className="aspect-square rounded overflow-hidden bg-synthwave-dark border border-synthwave-neon-cyan/20 hover:border-synthwave-neon-cyan/50 transition-colors"
                        >
                          <Image
                            src={image.url}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AFTER Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:pl-4"
            >
              <div className="sticky top-24 mb-8">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-synthwave-neon-cyan mb-2">
                  AFTER
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-synthwave-neon-cyan to-transparent"></div>
              </div>

              {/* After Groups */}
              <div className="space-y-8">
                {afterGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.02 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="bg-synthwave-dark/50 backdrop-blur border border-synthwave-neon-cyan/10 rounded-lg p-4 hover:border-synthwave-neon-cyan/30 transition-colors"
                  >
                    <div className="text-xs font-paragraph text-synthwave-neon-cyan/60 mb-3">
                      Group {groupIndex + 1}
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {group.images.map((image) => (
                        <div
                          key={image.id}
                          className="aspect-square rounded overflow-hidden bg-synthwave-dark border border-synthwave-neon-cyan/20 hover:border-synthwave-neon-cyan/50 transition-colors"
                        >
                          <Image
                            src={image.url}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
