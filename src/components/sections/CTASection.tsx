import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-synthwave-neon-pink/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-synthwave-neon-cyan/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight neon-sign-pink" style={{ letterSpacing: '1.5px' }}>
            READY FOR THE REVOLUTION?
          </h2>

          <p className="font-heading text-lg neon-sign-cyan mb-12 max-w-xl mx-auto">
            Transform your kitchen with factory-fresh edges. Book your sharpening service today and experience the difference.
          </p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-synthwave-neon-blue text-synthwave-midnight font-heading font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-synthwave-neon-blue/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK MY SHARPENING
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Call Button */}
            <motion.a
              href="tel:305-909-5773"
              className="flex items-center gap-2 px-6 py-3 border-2 border-synthwave-neon-blue text-synthwave-neon-blue font-heading font-bold rounded-lg hover:bg-synthwave-neon-blue/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              CALL (305) 909-5773
            </motion.a>

            {/* Text Button */}
            <motion.a
              href="sms:305-909-5773?body=SHARP"
              className="flex items-center gap-2 px-6 py-3 border-2 border-synthwave-neon-blue text-synthwave-neon-blue font-heading font-bold rounded-lg hover:bg-synthwave-neon-blue/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              TEXT 'SHARP'
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-12 border-t border-synthwave-neon-cyan/20"
          >
            <p className="font-paragraph text-sm text-synthwave-light/60 mb-6">
              TRUSTED BY MIAMI'S ELITE CHEFS & HOME COOKS
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              {['5★ Rated', 'Same-Day Service', 'Master Certified'].map((badge, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-synthwave-dark/50 border border-synthwave-neon-cyan/30 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="font-heading text-xs font-bold text-synthwave-neon-cyan">
                    {badge}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-synthwave-neon-pink to-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
