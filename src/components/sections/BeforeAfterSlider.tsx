import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section id="before-after" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-dark overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute bottom-0 right-0 w-40 sm:w-96 h-40 sm:h-96 bg-synthwave-neon-pink/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 relative z-10"
        >
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 neon-unified-title" style={{ letterSpacing: '1.5px' }}>
            TRANSFORMATION
          </h2>
          <p className="font-paragraph text-base sm:text-xl neon-unified-title">
            See the difference our master sharpening makes
          </p>
        </motion.div>

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div
            className="relative w-full aspect-video bg-synthwave-midnight rounded-lg overflow-hidden border border-synthwave-neon-cyan/30 cursor-col-resize group"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-synthwave-neon-pink/30 to-synthwave-dark flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">❌</div>
                <p className="font-heading text-lg sm:text-2xl font-bold text-synthwave-neon-pink">BEFORE</p>
                <p className="font-paragraph text-xs sm:text-sm text-synthwave-light/60 mt-1 sm:mt-2">Dull, damaged edge</p>
              </div>
            </div>

            {/* After Image (Slider) */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-synthwave-neon-cyan/30 to-synthwave-dark flex items-center justify-center overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
              transition={{ width: { type: 'spring', stiffness: 100, damping: 20 } }}
            >
              <div className="text-center w-full">
                <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">✨</div>
                <p className="font-heading text-lg sm:text-2xl font-bold text-synthwave-neon-cyan">AFTER</p>
                <p className="font-paragraph text-xs sm:text-sm text-synthwave-light/60 mt-1 sm:mt-2">Factory-fresh edge</p>
              </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-synthwave-neon-pink to-synthwave-neon-cyan"
              style={{ left: `${sliderPosition}%` }}
              transition={{ left: { type: 'spring', stiffness: 100, damping: 20 } }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan rounded-full shadow-lg flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex gap-1">
                  <div className="w-1 h-2 sm:h-3 bg-synthwave-midnight rounded-full" />
                  <div className="w-1 h-2 sm:h-3 bg-synthwave-midnight rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Instruction Text */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20 pointer-events-none">
              <p className="font-heading text-xs text-synthwave-light/50 group-hover:text-synthwave-light/70 transition-colors">
                DRAG TO COMPARE
              </p>
            </div>
          </div>

          {/* Details Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-synthwave-midnight/50 border border-synthwave-neon-pink/30 rounded-lg p-4 sm:p-6"
            >
              <h3 className="font-heading text-base sm:text-lg font-bold text-synthwave-neon-pink mb-3 sm:mb-4">
                BEFORE: THE PROBLEM
              </h3>
              <ul className="space-y-2 font-paragraph text-synthwave-light/70 text-xs sm:text-sm">
                <li>• Crushed food instead of slicing</li>
                <li>• Visible edge damage and wear</li>
                <li>• Difficult to use and unsafe</li>
                <li>• Frustrating kitchen experience</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-synthwave-midnight/50 border border-synthwave-neon-cyan/30 rounded-lg p-4 sm:p-6"
            >
              <h3 className="font-heading text-base sm:text-lg font-bold text-synthwave-neon-cyan mb-3 sm:mb-4">
                AFTER: THE SOLUTION
              </h3>
              <ul className="space-y-2 font-paragraph text-synthwave-light/70 text-xs sm:text-sm">
                <li>• Razor-sharp, factory-fresh edge</li>
                <li>• Glides through food effortlessly</li>
                <li>• Extended edge retention</li>
                <li>• Professional kitchen performance</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
