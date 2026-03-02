import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MiamiKnifeClubPage() {
  const [spotlights, setSpotlights] = useState([
    { id: 0, x: 0, y: 0, angle: -30, intensity: 0.6 },
    { id: 1, x: 50, y: 0, angle: 0, intensity: 0.6 },
    { id: 2, x: 100, y: 0, angle: 30, intensity: 0.6 },
  ]);

  useEffect(() => {
    const intervals = spotlights.map((spotlight) => {
      return setInterval(() => {
        setSpotlights((prev) =>
          prev.map((s) => {
            if (s.id === spotlight.id) {
              const randomX = Math.random() * 100;
              const randomY = Math.random() * 40;
              const randomAngle = (Math.random() - 0.5) * 60;
              return {
                ...s,
                x: randomX,
                y: randomY,
                angle: randomAngle,
                intensity: 0.4 + Math.random() * 0.4,
              };
            }
            return s;
          })
        );
      }, 4000 + Math.random() * 3000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Muted Club Lights Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diffused Cyan Glow - Top Left */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-synthwave-neon-cyan/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Diffused Neon Pink Glow - Bottom Right */}
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-synthwave-neon-pink/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Subtle Purple Accent - Center */}
        <motion.div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-synthwave-purple/3 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      {/* Spotlight Beams Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {spotlights.map((spotlight) => (
          <motion.div
            key={spotlight.id}
            className="absolute"
            animate={{
              left: `${spotlight.x}%`,
              top: `${spotlight.y}%`,
            }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            {/* Spotlight Beam - Cone shaped with realistic light physics */}
            <svg
              className="absolute"
              width="400"
              height="600"
              viewBox="0 0 400 600"
              style={{
                filter: `drop-shadow(0 0 ${20 * spotlight.intensity}px rgba(0, 255, 255, ${spotlight.intensity}))`,
                opacity: spotlight.intensity,
              }}
            >
              <defs>
                <linearGradient
                  id={`beam-gradient-${spotlight.id}`}
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={spotlight.id === 1 ? '#FF007F' : '#00FFFF'}
                    stopOpacity={spotlight.intensity}
                  />
                  <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
                </linearGradient>
                <filter id={`blur-${spotlight.id}`}>
                  <feGaussianBlur in="SourceGraphic" stdDeviation={3 + spotlight.intensity * 2} />
                </filter>
              </defs>
              {/* Main beam cone */}
              <polygon
                points="200,0 50,600 350,600"
                fill={`url(#beam-gradient-${spotlight.id})`}
                filter={`url(#blur-${spotlight.id})`}
              />
              {/* Inner bright core */}
              <polygon
                points="200,0 150,600 250,600"
                fill={spotlight.id === 1 ? '#FF007F' : '#00FFFF'}
                opacity={spotlight.intensity * 0.3}
                filter={`url(#blur-${spotlight.id})`}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <Header />
      
      {/* Main Content */}
      <main className="pt-24 pb-20 relative z-10">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Neon Title with Spotlight Illumination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            {/* Illumination effect that responds to spotlights */}
            <div className="absolute inset-0 pointer-events-none">
              {spotlights.map((spotlight) => (
                <motion.div
                  key={`title-light-${spotlight.id}`}
                  className="absolute w-full h-full"
                  animate={{
                    opacity: spotlight.intensity * 0.3,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-full h-full blur-2xl"
                    style={{
                      background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, ${
                        spotlight.id === 1 ? 'rgba(255, 0, 127, 0.2)' : 'rgba(0, 255, 255, 0.2)'
                      }, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold mb-4 relative z-10">
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

          {/* Duplicate CTA Section Below Club Benefactor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-20"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight font-heading font-bold text-lg hover:shadow-lg hover:shadow-synthwave-neon-pink/50 transition-all">
              JOIN THE CLUB
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
