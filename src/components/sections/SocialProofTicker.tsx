import { motion } from 'framer-motion';

export default function SocialProofTicker() {
  const phrases = [
    '5-STAR RATED ON YELP',
    'OVER 10,000 BLADES RESTORED',
    'MOBILE ON-SITE SERVICE',
    'AS SEEN IN MIAMI DINING MAGAZINE',
  ];

  return (
    <section className="relative w-full py-8 bg-synthwave-dark border-y border-synthwave-neon-cyan/20 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...phrases, ...phrases].map((phrase, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 flex items-center gap-4"
            >
              <span className="text-synthwave-neon-pink font-heading text-lg md:text-xl font-bold tracking-wider">
                {phrase}
              </span>
              <span className="text-synthwave-neon-cyan text-2xl">•</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-synthwave-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-synthwave-dark to-transparent z-10" />
    </section>
  );
}
