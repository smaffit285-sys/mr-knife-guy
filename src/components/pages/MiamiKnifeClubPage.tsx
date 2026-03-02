import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MiamiKnifeClubPage() {
  const [spotlights, setSpotlights] = useState([
    { id: 0, originX: 20, originY: 5, angle: -35, intensity: 0.8 },
    { id: 1, originX: 50, originY: 5, angle: 0, intensity: 0.8 },
    { id: 2, originX: 80, originY: 5, angle: 35, intensity: 0.8 },
  ]);

  const [flashIntensity, setFlashIntensity] = useState(0);

  useEffect(() => {
    const intervals = spotlights.map((spotlight) => {
      return setInterval(() => {
        setSpotlights((prev) =>
          prev.map((s) => {
            if (s.id === spotlight.id) {
              // Sweep 70 degrees: from -35 to +35 degrees (focused on title)
              const newAngle = -35 + Math.random() * 70;
              const newIntensity = 0.6 + Math.random() * 0.3;
              
              // Trigger flash less frequently - only when beam is very close to center
              if (Math.abs(newAngle) < 8 && Math.random() > 0.7) {
                setFlashIntensity(0.3);
                setTimeout(() => setFlashIntensity(0), 300);
              }
              
              return {
                ...s,
                angle: newAngle,
                intensity: newIntensity,
              };
            }
            return s;
          })
        );
      }, 2000 + Math.random() * 1000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Flash Washout Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${flashIntensity})`,
          opacity: flashIntensity,
        }}
        transition={{ duration: 0.05 }}
      />

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
        {spotlights.map((spotlight) => {
          // Calculate beam position based on origin and angle
          const beamX = spotlight.originX;
          const beamY = spotlight.originY;
          
          return (
            <motion.div
              key={spotlight.id}
              className="absolute"
              style={{
                left: `${beamX}%`,
                top: `${beamY}%`,
                transform: `rotate(${spotlight.angle}deg)`,
                transformOrigin: 'center top',
              }}
              animate={{
                rotate: spotlight.angle,
              }}
              transition={{ duration: 1.2, ease: 'linear' }}
            >
              {/* Spotlight Beam - Cone shaped with realistic light physics */}
              <svg
                className="absolute"
                width="300"
                height="800"
                viewBox="0 0 300 800"
                style={{
                  filter: `drop-shadow(0 0 ${25 * spotlight.intensity}px rgba(0, 255, 255, ${spotlight.intensity}))`,
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
                    <feGaussianBlur in="SourceGraphic" stdDeviation={4 + spotlight.intensity * 3} />
                  </filter>
                </defs>
                {/* Main beam cone - 60 degree spread (120 total from -60 to +60) */}
                <polygon
                  points="150,0 30,800 270,800"
                  fill={`url(#beam-gradient-${spotlight.id})`}
                  filter={`url(#blur-${spotlight.id})`}
                />
                {/* Inner bright core */}
                <polygon
                  points="150,0 100,800 200,800"
                  fill={spotlight.id === 1 ? '#FF007F' : '#00FFFF'}
                  opacity={spotlight.intensity * 0.4}
                  filter={`url(#blur-${spotlight.id})`}
                />
              </svg>
            </motion.div>
          );
        })}
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
              {spotlights.map((spotlight) => {
                // Calculate illumination position based on beam angle
                const beamX = spotlight.originX;
                const beamY = spotlight.originY + 15; // Offset down from origin
                const beamAngleRad = (spotlight.angle * Math.PI) / 180;
                const illuminationDistance = 20; // How far down the beam to calculate illumination
                const illuminationX = beamX + Math.sin(beamAngleRad) * illuminationDistance;
                const illuminationY = beamY + Math.cos(beamAngleRad) * illuminationDistance;

                return (
                  <motion.div
                    key={`title-light-${spotlight.id}`}
                    className="absolute w-full h-full"
                    animate={{
                      opacity: spotlight.intensity * 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="w-full h-full blur-3xl"
                      style={{
                        background: `radial-gradient(circle at ${illuminationX}% ${illuminationY}%, ${
                          spotlight.id === 1 ? 'rgba(255, 0, 127, 0.3)' : 'rgba(0, 255, 255, 0.3)'
                        }, transparent)`,
                      }}
                    />
                  </motion.div>
                );
              })}
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
              FINALLY A CLUB THAT'S NEVER DULL
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

          {/* Package Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mb-20"
          >
            <p className="font-paragraph font-bold text-[18pt] text-gray-100 max-w-2xl mx-auto leading-relaxed uppercase animate-pulse" style={{
              color: '#E8E8E8',
              textShadow: '0 0 10px rgba(232, 232, 232, 0.6), 0 0 20px rgba(200, 200, 200, 0.4), 0 0 30px rgba(150, 150, 150, 0.2)',
              letterSpacing: '0.05em'
            }}>
              PARTY AS OFTEN AS YOU LIKE! MONTHLY, QUARTERLY, SEMI-ANNUALLY, AND ONCE YEARLY PACKAGES AVAILABLE. SKIP THE LINE OR EVEN THE COVER CHARGE BASED ON ATTENDANCE
            </p>
            <p className="font-paragraph text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed mt-4">
              all quoted prices are assessed at semi-annual reoccurring rates
            </p>
          </motion.div>

          {/* Membership Levels */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {[
              {
                name: 'Scope the Scene',
                description: 'Entry level access to explore our exclusive knife community and events.',
                color: '#D4A574',
                glowColor: 'rgba(212, 165, 116, 0.5)',
                path: '/membership/scope-the-scene',
              },
              {
                name: 'Limited Access',
                description: 'Gain entry to select club events and access to limited edition knife releases.',
                color: '#39FF14',
                glowColor: 'rgba(57, 255, 20, 0.5)',
                path: '/membership/limited-access',
              },
              {
                name: 'Club Regular',
                description: 'Full membership with priority access to all club events and exclusive workshops.',
                color: '#00FFFF',
                glowColor: 'rgba(0, 255, 255, 0.5)',
                path: '/membership/club-regular',
              },
              {
                name: 'VIP',
                description: 'Premium tier with VIP seating at events, early access to new releases, and personal concierge service.',
                color: '#FF007F',
                glowColor: 'rgba(255, 0, 127, 0.5)',
                path: '/membership/vip',
              },
              {
                name: 'All Access',
                description: 'Ultimate membership including unlimited event access, custom knife consultations, and exclusive merchandise.',
                color: '#FFD700',
                glowColor: 'rgba(255, 215, 0, 0.5)',
                path: '/membership/all-access',
              },
              {
                name: 'Club Benefactor',
                description: 'Elite patron status with lifetime benefits, naming rights to events, and bespoke knife commissions.',
                color: '#9D4EDD',
                glowColor: 'rgba(157, 78, 221, 0.5)',
                path: '/membership/club-benefactor',
              },
            ].map((level, index) => (
              <Link key={index} to={level.path}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center cursor-pointer"
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
              </Link>
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
