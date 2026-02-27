import { motion } from 'framer-motion';
import { AlertCircle, Zap } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function PainPointSection() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute top-10 right-0 w-40 sm:w-96 h-40 sm:h-96 bg-synthwave-neon-pink/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-start gap-4 mb-8">
              <AlertCircle className="w-6 sm:w-8 h-6 sm:h-8 text-synthwave-neon-pink flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 neon-pink-flicker" style={{ letterSpacing: '1.5px' }}>
                    DULL IS DANGEROUS.
                  </h2>
                <p className="font-paragraph text-sm sm:text-lg neon-cyan-glow">
                Dull blades slip off of food and on to your fingers, leading to expensive hospital trips. A dull blade doesn't cut; it crushes, causing more food waste, and constant dangerous struggle just to make dinner. Stop fighting your food and start enjoying the kitchen again. We bring the 'factory fresh' edge back to your blades—only better.
              </p>
              </div>
            </div>

            {/* Pain Points List */}
            <div className="space-y-4">
              {[
                'Crushing instead of slicing',
                'Increased prep time and frustration',
                'Risk of slips and accidents',
                'Damaged blade edges',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-synthwave-light/70"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-synthwave-neon-cyan rounded-full" />
                   <span className="font-paragraph text-sm sm:text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Solution Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-64 sm:h-96 bg-gradient-to-br from-synthwave-neon-pink/20 to-synthwave-neon-cyan/20 rounded-lg border border-synthwave-neon-cyan/30 overflow-hidden flex items-center justify-center">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-synthwave-neon-cyan" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid2)" />
                </svg>
              </div>

              {/* Comparison Visual */}
              <motion.div
                className="relative z-10 text-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex gap-4 sm:gap-8 justify-center items-end">
                  {/* Dull */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-full h-64 sm:h-80 mb-2 sm:mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="https://static.wixstatic.com/media/37d64c_92a8eac1bdd74446b2f746ea8b329cea~mv2.jpg"
                        alt="Dull knife"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-heading text-xs sm:text-sm font-bold text-synthwave-neon-pink">DULL</p>
                    <p className="font-paragraph text-xs text-synthwave-light/60 mt-1 sm:mt-2">Crushes food</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-synthwave-neon-cyan" />
                  </motion.div>

                  {/* Sharp */}
                  <div className="flex flex-col items-center">
                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">✨</div>
                    <p className="font-heading text-xs sm:text-sm font-bold text-synthwave-neon-cyan">SHARP</p>
                    <p className="font-paragraph text-xs text-synthwave-light/60 mt-1 sm:mt-2">Glides through</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Accent */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-synthwave-neon-pink/30 rounded-lg"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
