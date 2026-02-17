import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Globe, Star, TrendingUp } from 'lucide-react';

export default function SocialLinksSection() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/miamiknifeguy',
      color: 'hover:bg-blue-600',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-600/50',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/miamiknifeguy',
      color: 'hover:bg-pink-600',
      bgColor: 'bg-pink-600/20',
      borderColor: 'border-pink-600/50',
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.96-.1z" />
        </svg>
      ),
      url: 'https://tiktok.com/@miamiknifeguy',
      color: 'hover:bg-black',
      bgColor: 'bg-black/20',
      borderColor: 'border-black/50',
    },
    {
      name: 'Etsy',
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 0h20v24H2V0zm10.5 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3 4h6v2h-6v-2zm0 4h6v2h-6v-2z" />
        </svg>
      ),
      url: 'https://etsy.com/shop/miamiknifeguy',
      color: 'hover:bg-amber-600',
      bgColor: 'bg-amber-600/20',
      borderColor: 'border-amber-600/50',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/miamiknifeguy',
      color: 'hover:bg-sky-500',
      bgColor: 'bg-sky-500/20',
      borderColor: 'border-sky-500/50',
    },
    {
      name: 'Yelp',
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.5 2c-.5 0-.9.4-.9.9v6.5H5.1c-.5 0-.9.4-.9.9v1.2c0 .5.4.9.9.9h6.5v6.5c0 .5.4.9.9.9h1.2c.5 0 .9-.4.9-.9v-6.5h6.5c.5 0 .9-.4.9-.9v-1.2c0-.5-.4-.9-.9-.9h-6.5V2.9c0-.5-.4-.9-.9-.9h-1.2z" />
        </svg>
      ),
      url: 'https://yelp.com/biz/miami-knife-guy',
      color: 'hover:bg-red-600',
      bgColor: 'bg-red-600/20',
      borderColor: 'border-red-600/50',
    },
    {
      name: 'Google',
      icon: Globe,
      url: 'https://google.com/search?q=Miami+Knife+Guy',
      color: 'hover:bg-blue-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/50',
    },
    {
      name: 'Trustpilot',
      icon: Star,
      url: 'https://trustpilot.com/review/miamiknifeguy.com',
      color: 'hover:bg-green-600',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-600/50',
    },
    {
      name: 'TripAdvisor',
      icon: TrendingUp,
      url: 'https://tripadvisor.com/Profile/miamiknifeguy',
      color: 'hover:bg-emerald-600',
      bgColor: 'bg-emerald-600/20',
      borderColor: 'border-emerald-600/50',
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
      <div className="max-w-[100rem] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-synthwave-neon-cyan mb-2">
            CONNECT WITH US
          </h3>
          <p className="font-paragraph text-synthwave-light/70">
            Follow Miami Knife Guy across all platforms
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
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
                className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 ${social.bgColor} ${social.borderColor} transition-all duration-300 group hover:scale-110 hover:shadow-lg`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`p-3 rounded-lg mb-3 ${social.color} transition-all duration-300 text-white`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="font-heading text-sm font-bold text-synthwave-light text-center group-hover:text-synthwave-neon-cyan transition-colors">
                  {social.name}
                </span>
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
