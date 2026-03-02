import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MiamiKnifeClubPage() {
  return (
    <div className="min-h-screen bg-synthwave-midnight">
      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Neon Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-synthwave-neon-pink via-synthwave-neon-cyan to-synthwave-neon-blue animate-pulse">
                MIAMI
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-synthwave-neon-cyan via-synthwave-neon-blue to-synthwave-neon-pink animate-pulse" style={{ animationDelay: '0.2s' }}>
                KNIFE
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-synthwave-neon-blue via-synthwave-neon-pink to-synthwave-neon-cyan animate-pulse" style={{ animationDelay: '0.4s' }}>
                CLUB
              </span>
            </h1>
            
            {/* Decorative neon lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-synthwave-neon-pink to-transparent mx-auto mb-8 max-w-md"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-synthwave-neon-cyan text-lg sm:text-xl md:text-2xl font-paragraph mb-8 tracking-widest"
            >
              EXCLUSIVE KNIFE ENTHUSIASTS COLLECTIVE
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'ELITE MEMBERS',
                description: 'Join our exclusive community of knife enthusiasts and collectors.',
                icon: '⚡'
              },
              {
                title: 'PREMIUM BLADES',
                description: 'Access to limited edition knives and custom sharpening services.',
                icon: '🔪'
              },
              {
                title: 'VIP EVENTS',
                description: 'Attend exclusive nightclub-style events and knife showcases.',
                icon: '🎭'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="border border-synthwave-neon-cyan/30 bg-synthwave-dark/50 backdrop-blur p-8 hover:border-synthwave-neon-pink/50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-xl text-synthwave-neon-pink mb-3">
                  {item.title}
                </h3>
                <p className="text-synthwave-light font-paragraph text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mb-20"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight font-heading font-bold text-lg hover:shadow-lg hover:shadow-synthwave-neon-pink/50 transition-all">
              JOIN THE CLUB
            </button>
          </motion.div>

          {/* Membership Levels */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              {
                name: 'Scope the Scene',
                description: 'Entry level access to explore our exclusive knife community and events.',
                color: '#D4A574',
                glowColor: 'rgba(212, 165, 116, 0.5)',
              },
              {
                name: 'Limited Access',
                description: 'Gain entry to select club events and access to limited edition knife releases.',
                color: '#39FF14',
                glowColor: 'rgba(57, 255, 20, 0.5)',
              },
              {
                name: 'Club Regular',
                description: 'Full membership with priority access to all club events and exclusive workshops.',
                color: '#00FFFF',
                glowColor: 'rgba(0, 255, 255, 0.5)',
              },
              {
                name: 'VIP',
                description: 'Premium tier with VIP seating at events, early access to new releases, and personal concierge service.',
                color: '#FF007F',
                glowColor: 'rgba(255, 0, 127, 0.5)',
              },
              {
                name: 'All Access',
                description: 'Ultimate membership including unlimited event access, custom knife consultations, and exclusive merchandise.',
                color: '#FFD700',
                glowColor: 'rgba(255, 215, 0, 0.5)',
              },
              {
                name: 'Club Benefactor',
                description: 'Elite patron status with lifetime benefits, naming rights to events, and bespoke knife commissions.',
                color: '#9D4EDD',
                glowColor: 'rgba(157, 78, 221, 0.5)',
              },
            ].map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="p-6 rounded-lg border border-opacity-30 backdrop-blur-sm"
                  style={{
                    borderColor: level.color,
                    backgroundColor: `rgba(0, 0, 0, 0.3)`,
                    boxShadow: `0 0 20px ${level.glowColor}`,
                  }}
                  whileHover={{
                    boxShadow: `0 0 30px ${level.glowColor}`,
                  }}
                >
                  <h3
                    className="font-heading text-[22px] font-bold mb-3"
                    style={{
                      color: level.color,
                      textShadow: `0 0 10px ${level.glowColor}`,
                    }}
                  >
                    {level.name}
                  </h3>
                  <p className="font-paragraph text-light-gray text-base leading-relaxed">
                    {level.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
