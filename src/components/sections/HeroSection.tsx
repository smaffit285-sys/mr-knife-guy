import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function HeroSection() {
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        className="absolute top-20 left-10 w-72 h-72 bg-synthwave-neon-pink/20 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-synthwave-neon-cyan/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="mb-2">
          <div className="inline-block">
            <motion.div
              className="w-56 md:w-80 mx-auto mb-2 rounded-lg border-2 border-synthwave-neon-pink flex items-center justify-center bg-synthwave-dark/50 backdrop-blur overflow-hidden"
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
                width={320}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-synthwave-neon-pink"
          style={{ letterSpacing: '1.5px' }}
        >
          <span className="bg-gradient-to-r from-synthwave-neon-pink via-synthwave-purple to-synthwave-neon-cyan bg-clip-text text-transparent">
            Precision Edges
          </span>
          <br />
          <span className="text-synthwave-neon-pink">Since 2009</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-paragraph text-lg md:text-2xl text-synthwave-light/80 max-w-3xl mx-auto mb-8"
        >
          Sharpening the Future of Miami's Kitchens.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#pricing"
            className="px-8 py-4 bg-synthwave-neon-blue text-synthwave-midnight font-heading font-bold rounded-lg hover:shadow-lg hover:shadow-synthwave-neon-blue/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK NOW
          </motion.a>
          <motion.a
            href="tel:650-533-8351"
            className="px-8 py-4 border-2 border-synthwave-neon-blue text-synthwave-neon-blue font-heading font-bold rounded-lg hover:bg-synthwave-neon-blue/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CALL NOW
          </motion.a>
        </motion.div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-synthwave-neon-cyan" />
      </motion.div>
    </section>
  );
}
