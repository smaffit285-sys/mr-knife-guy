import { motion } from 'framer-motion';

export default function SocialLinksSection() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com/miamiknifeguy',
      color: '#1877F2',
    },
    {
      name: 'Instagram',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      ),
      url: 'https://instagram.com/miamiknifeguy',
      color: '#E4405F',
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@miamiknifeguy',
      color: '#000000',
    },
    {
      name: 'Etsy',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.5 8.5h-2v7h-1.5v-7h-2v-1h5.5v1z"/>
        </svg>
      ),
      url: 'https://etsy.com/shop/miamiknifeguy',
      color: '#F1641E',
    },
    {
      name: 'Twitter',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: 'https://twitter.com/miamiknifeguy',
      color: '#1DA1F2',
    },
    {
      name: 'Yelp',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 2c-.5 0-.9.4-.9.9v6.5H5.1c-.5 0-.9.4-.9.9v1.2c0 .5.4.9.9.9h6.5v6.5c0 .5.4.9.9.9h1.2c.5 0 .9-.4.9-.9v-6.5h6.5c.5 0 .9-.4.9-.9v-1.2c0-.5-.4-.9-.9-.9h-6.5V2.9c0-.5-.4-.9-.9-.9h-1.2z"/>
        </svg>
      ),
      url: 'https://yelp.com/biz/miami-knife-guy',
      color: '#AF0606',
    },
    {
      name: 'Google',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      url: 'https://google.com/search?q=Miami+Knife+Guy',
      color: '#4285F4',
    },
    {
      name: 'Trustpilot',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      url: 'https://trustpilot.com/review/miamiknifeguy.com',
      color: '#00B4B3',
    },
    {
      name: 'TripAdvisor',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm3.5-11c0 1.933-1.567 3.5-3.5 3.5S8.5 12.933 8.5 11s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5z"/>
        </svg>
      ),
      url: 'https://tripadvisor.com/Profile/miamiknifeguy',
      color: '#00AF87',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-synthwave-dark border-b border-synthwave-neon-cyan/20">
      {/* Neon glow background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-synthwave-neon-cyan rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="max-w-[100rem] mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-synthwave-neon-cyan mb-1">
            CONNECT WITH US
          </h3>
          <p className="font-paragraph text-synthwave-light/70">
            Follow Miami Knife Guy across all platforms
          </p>
        </motion.div>

        {/* Social Links - Icon Only */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-6 flex-wrap"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="inline-flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                title={social.name}
              >
                <IconComponent className="w-8 h-8" style={{ color: social.color }} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="mt-12 pt-8 border-t border-synthwave-neon-cyan/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-paragraph text-synthwave-light/60 text-sm">
            Don't see your favorite platform? <span className="text-synthwave-neon-cyan font-bold">Contact us directly</span> for more information.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
