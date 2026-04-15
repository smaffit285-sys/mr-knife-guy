import { motion } from 'framer-motion';
import { ChevronDown, MousePointer2 } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useNavigate } from 'react-router-dom';

const socialLogos = [
  {
    name: 'Instagram',
    icon: () => (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    ),
    url: 'https://www.instagram.com/miamiknifeguy/',
    color: '#E4405F',
  },
  {
    name: 'TikTok',
    icon: () => (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
      </svg>
    ),
    url: 'https://tiktok.com/@miamiknifeguy',
    color: '#000000',
  },
  {
    name: 'Facebook',
    icon: () => (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    url: 'https://facebook.com/miamiknifeguy',
    color: '#1877F2',
  },
  {
    name: 'Twitter',
    icon: () => (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    url: 'https://twitter.com/miamiknifeguy',
    color: '#1DA1F2',
  },
];

export default function HeroSection() {
  const navigate = useNavigate();

  const handleImageClick = (e: React.MouseEvent) => {
    // Check if the click target is a link (social media)
    const target = e.target as HTMLElement;
    if (target.closest('a')) {
      return; // Allow link clicks to proceed
    }
    // Navigate to brand story page for any other click in the container
    navigate('/brand-story');
  };
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
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
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[100rem] mx-auto text-center overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Rotated Scrolling Backdrop */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Image 
            src="https://static.wixstatic.com/media/37d64c_c26d92e0c01a495caeb57ac548ba7b8f~mv2.jpg"
            alt="Scrolling backdrop"
            width={400}
            className="w-full h-auto object-cover"
            style={{ transform: 'rotate(-90deg)', opacity: 0.08 }}
          />
        </motion.div>
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block relative">
            <motion.div
              className="w-40 sm:w-56 md:w-80 mx-auto mb-2 rounded-lg border-2 border-synthwave-neon-pink flex items-center justify-center bg-synthwave-dark/50 backdrop-blur overflow-hidden cursor-pointer relative"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255, 0, 110, 0.5)',
                  '0 0 40px rgba(0, 245, 255, 0.5)',
                  '0 0 20px rgba(255, 0, 110, 0.5)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              onClick={handleImageClick}
            >
              <Image 
                src="https://static.wixstatic.com/media/37d64c_c26d92e0c01a495caeb57ac548ba7b8f~mv2.jpg"
                alt="Miami Knife Guy logo"
                width={320}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center top' }}
              />
              {/* Shape icon - bottom right */}
              <div className="absolute bottom-2 right-2">
                <MousePointer2 className="w-5 h-5 text-synthwave-neon-cyan" />
              </div>
            </motion.div>
            {/* Social Icons Overlay - Centered below glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-12 flex gap-2 sm:gap-3 bg-synthwave-midnight/90 rounded-full px-3 sm:px-4 py-2 border border-synthwave-neon-cyan/50 backdrop-blur-sm">
              {socialLogos.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center transition-all duration-300 hover:text-synthwave-neon-cyan"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    <IconComponent style={{ color: social.color }} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight neon-sign-pink"
          style={{ letterSpacing: '1.5px' }}
        >
          <span className="neon-sign-pink text-6xl">Precision Hand-Guided Knife Sharpening</span>
          <br />

        </motion.h1>
         {/* Subtitle */}
         <motion.p
           variants={itemVariants}
           className="font-paragraph text-2xl sm:text-2xl md:text-2xl mb-2 sm:mb-3 max-w-2xl mx-auto leading-relaxed font-semibold neon-sign-cyan"
         >
           Restoring mirror edges to your culinary tools using high-end abrasives and specialized equipment. No cheap pull-throughs. No ruined blades.
         </motion.p>
         {/* Service Details */}
         <motion.p
           variants={itemVariants}
           className="font-paragraph text-lg sm:text-xl md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed neon-sign-light"
         >
           Local Drop-Off & Pick-Up Service | Pricing Tiers Based on Knife Size
         </motion.p>
         {/* Subheadline */}

         <motion.div
           variants={itemVariants}
           className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
         >
          <div className="flex flex-col items-center w-full sm:w-auto">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-2"
            >
              <ChevronDown className="w-6 h-6 text-synthwave-neon-blue" />
            </motion.div>
            <motion.a
              href="/customer-info"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-synthwave-neon-blue text-synthwave-midnight font-heading font-bold text-sm sm:text-base rounded-lg hover:shadow-lg hover:shadow-synthwave-neon-blue/50 transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK NOW
            </motion.a>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-2"
            >
              <ChevronDown className="w-6 h-6 text-synthwave-neon-blue" />
            </motion.div>
            <motion.a
              href="tel:305-909-5773"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-synthwave-neon-blue text-synthwave-neon-blue font-heading font-bold text-sm sm:text-base rounded-lg hover:bg-synthwave-neon-blue/10 transition-all w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CALL (305) 909-5773
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >

      </motion.div>
    </section>
  );
}
