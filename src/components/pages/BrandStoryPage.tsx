import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BrandStoryPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-synthwave-midnight text-synthwave-light flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Neon Title */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-synthwave-neon-cyan/10 to-synthwave-neon-pink/10" />
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-synthwave-neon-cyan/20" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute top-20 left-10 w-40 sm:w-72 h-40 sm:h-72 bg-synthwave-neon-pink/20 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-synthwave-neon-cyan/20 rounded-full blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          {/* Title */}
          <motion.div
            className="relative z-10 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight neon-pink-flicker"
              style={{ letterSpacing: '2px' }}
            >
              <span className="neon-pink-flicker font-roboto text-7xl">The Evolution of the Edge</span>
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="h-1 w-full max-w-3xl mx-auto bg-gradient-to-r from-synthwave-neon-pink via-synthwave-neon-cyan to-synthwave-neon-blue"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 127, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)',
              }}
            />
          </motion.div>
        </section>

        {/* Brand Story Content Section */}
        <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-synthwave-neon-cyan/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-synthwave-neon-pink/20 rounded-full blur-3xl" />
          </div>

          {/* Content Container */}
          <motion.div
            className="relative z-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-synthwave-dark/40 backdrop-blur-sm border border-synthwave-neon-cyan/30 rounded-lg p-8 sm:p-12 md:p-16 space-y-3">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl mb-2 underline font-normal md:text-2xl [text-shadow:0px_1px_10px_#bfbfbf] text-[#a4e1f9ff]">When Steel Whispers, Listen</h2>
                <p className="font-paragraph text-base sm:text-lg md:text-xl leading-relaxed text-synthwave-light">
                  For sixteen years, I lived within the walls of a legend. I began as an apprentice in one of the country's most renowned sharpening houses, learning the "old ways" under a master recognized across the globe. I gave my loyalty, my labor, and my years to that craft. But eventually, a quiet truth began to whisper from the steel: The standard wasn't enough.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl sm:text-3xl mb-2 text-synthwave-neon-cyan underline font-normal md:text-xl [text-shadow:0px_1px_10px_#bfbfbf]">The Choice: Volume vs. Vision</h2>
                <p className="font-paragraph text-base sm:text-lg md:text-xl leading-relaxed text-synthwave-light">
                  In the world of high-volume sharpening, speed is the king. I was told to sharpen faster, to prioritize the clock, and to stick to the rigid methods of the past. But my hands wouldn't listen. I began to develop my own techniques—edges that didn't just meet the standard, but redefined it. They were sharper, they lasted longer, and they possessed a mirror-like finish that the old ways couldn't replicate.
                </p>
                <p className="font-paragraph text-base sm:text-lg md:text-xl leading-relaxed text-synthwave-light mt-2">
                  When my mentor told me I was "too slow" because I cared too much about the result, I knew I had reached the edge of my known world. I chose to leave the volume behind to pursue the Perfect Edge.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl sm:text-3xl mb-2 md:text-xl underline font-normal [text-shadow:0px_0px_10px_#bfbfbf] text-[#a747deff]">A Custom Forge for a Custom Result</h2>
                <p className="font-paragraph text-base sm:text-lg md:text-xl leading-relaxed text-synthwave-light">
                  I spent four years preparing, building my own sharpening station from the ground up to allow for control and precision that no "off-the-shelf" machine can match. I traded the safety of the institution for the soul of the steel.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl sm:text-3xl mb-2 text-synthwave-neon-pink md:text-2xl [text-shadow:0px_1px_10px_#bfbfbf] font-normal underline">The Journey to You</h2>
                <p className="font-paragraph text-base sm:text-lg md:text-xl leading-relaxed text-synthwave-light">
                  I have crossed this country to bring this mastery to Miami. I am not here to "churn out" knives for the masses. I am here for the discerning few—the ones who understand that a tool is an extension of the hand, and that perfection cannot be rushed.
                </p>
                <p className="font-paragraph text-base sm:text-lg md:text-xl leading-relaxed text-synthwave-light mt-2">
                  My quest is to find those who, like me, hear the steel whisper. I am the Guide for those who refuse to settle for anything less than a surgically perfect edge.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="mt-12 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 rounded-full bg-synthwave-neon-pink" style={{ boxShadow: '0 0 10px rgba(255, 0, 127, 0.8)' }} />
              <div className="w-2 h-2 rounded-full bg-synthwave-neon-cyan" style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)' }} />
              <div className="w-2 h-2 rounded-full bg-synthwave-neon-blue" style={{ boxShadow: '0 0 10px rgba(0, 128, 255, 0.8)' }} />
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
