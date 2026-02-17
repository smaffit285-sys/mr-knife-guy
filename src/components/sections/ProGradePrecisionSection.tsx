import { motion } from 'framer-motion';
import { Zap, Shield, Gauge } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ProGradePrecisionSection() {
  const features = [
    {
      icon: Shield,
      title: 'Zero Heat Damage',
      description: 'Our process ensures your blade\'s heat-treat and temper remain perfect.',
    },
    {
      icon: Gauge,
      title: 'Precision Material Removal',
      description: 'Using AI enabled measuring and our "digital twin" technology we ensure that the absolute minimum material is removed',
    },
    {
      icon: Zap,
      title: 'High-Endurance Edges',
      description: 'Designed to stay sharper, longer than traditional stone-only finishes.',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-dark overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute bottom-0 left-0 w-40 sm:w-96 h-40 sm:h-96 bg-synthwave-neon-cyan/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          {/* Logo Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <motion.div
              className="w-20 sm:w-28 md:w-40 mx-auto mb-2 rounded-lg border-2 border-synthwave-neon-pink flex items-center justify-center bg-synthwave-dark/50 backdrop-blur overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 0, 110, 0.5)',
                  '0 0 40px rgba(0, 245, 255, 0.5)',
                  '0 0 20px rgba(255, 0, 110, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image 
                src="https://static.wixstatic.com/media/37d64c_c26d92e0c01a495caeb57ac548ba7b8f~mv2.jpg"
                alt="Miami Knife Guy logo"
                width={160}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
              />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 neon-cyan-flicker" style={{ letterSpacing: '1.5px' }}>
              PRO-GRADE PRECISION
            </h2>
            <p className="font-paragraph text-base sm:text-xl neon-pink-glow max-w-2xl mx-auto">
              We use the same high-end mechanized abrasives as the world's leading knife factories, but with a Master Technician's precision.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink/10 to-synthwave-neon-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-synthwave-midnight/50 backdrop-blur border border-synthwave-neon-cyan/30 rounded-lg p-8 hover:border-synthwave-neon-pink/50 transition-colors">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-synthwave-midnight" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-bold text-synthwave-light mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-paragraph text-synthwave-light/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Luxury Anchor Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-synthwave-neon-pink/20 to-synthwave-neon-cyan/20 border-2 border-synthwave-neon-pink/50 rounded-lg p-6 sm:p-12 overflow-hidden">
              {/* Accent */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-synthwave-neon-pink/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-synthwave-neon-pink to-synthwave-neon-cyan" />
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-synthwave-neon-pink">
                    THE TOP SHELF: STONESHARP HERITAGE
                  </h3>
                </div>

                <p className="font-paragraph text-base sm:text-lg text-synthwave-light/90 mb-4 sm:mb-6 max-w-2xl">
                  For the ultimate connoisseur. Full hand-sharpening on premium ceramic and diamond stones from start to finish.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div>
                    <p className="font-heading text-xs sm:text-sm text-synthwave-neon-cyan mb-2">RATE</p>
                    <p className="font-heading text-2xl sm:text-3xl font-bold text-synthwave-neon-pink">
                      $100<span className="text-sm sm:text-lg">/hr</span>
                    </p>
                    <p className="font-paragraph text-xs sm:text-sm text-synthwave-light/60 mt-2">
                      By Consultation Only
                    </p>
                  </div>

                  <div>
                    <p className="font-heading text-xs sm:text-sm text-synthwave-neon-cyan mb-2">BEST FOR</p>
                    <ul className="space-y-2">
                      <li className="font-paragraph text-xs sm:text-base text-synthwave-light/80">
                        • Rare carbon steel
                      </li>
                      <li className="font-paragraph text-xs sm:text-base text-synthwave-light/80">
                        • Heirloom Japanese blades
                      </li>
                      <li className="font-paragraph text-xs sm:text-base text-synthwave-light/80">
                        • Extreme restorations
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center md:justify-start">
                    <motion.a
                      href="tel:650-533-8351"
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-synthwave-neon-blue text-synthwave-midnight font-heading font-bold text-sm sm:text-base rounded-lg hover:shadow-lg hover:shadow-synthwave-neon-blue/50 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      CONSULT NOW
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
