import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SocialProofTicker() {
  const testimonials = [
    {
      name: 'James M.',
      text: 'Best sharpening I\'ve ever had. My knives feel brand new.',
      rating: 5,
    },
    {
      name: 'Sarah L.',
      text: 'Professional, fast, and the results are incredible.',
      rating: 5,
    },
    {
      name: 'Marcus T.',
      text: 'Worth every penny. My kitchen prep is 10x faster now.',
      rating: 5,
    },
    {
      name: 'Elena R.',
      text: 'The attention to detail is unmatched. Highly recommend.',
      rating: 5,
    },
    {
      name: 'David K.',
      text: 'Factory-grade sharpening at its finest. Game changer.',
      rating: 5,
    },
  ];

  return (
    <section className="relative w-full py-12 bg-synthwave-dark border-y border-synthwave-neon-cyan/20 overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-synthwave-midnight/50 backdrop-blur border border-synthwave-neon-cyan/30 rounded-lg p-6 hover:border-synthwave-neon-pink/50 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-synthwave-neon-pink text-synthwave-neon-pink"
                  />
                ))}
              </div>
              <p className="text-synthwave-light/80 font-paragraph text-sm mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-synthwave-neon-cyan font-heading text-sm font-bold">
                — {testimonial.name}
              </p>
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
