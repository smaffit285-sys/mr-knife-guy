import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-synthwave-dark border-t border-synthwave-neon-cyan/20 py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-lg sm:text-xl font-bold bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent mb-2">
              MIAMI KNIFE GUY
            </h3>
            <p className="text-synthwave-light/70 font-paragraph text-xs sm:text-sm">
              Elite knife sharpening with factory-grade precision.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-heading text-sm font-bold text-synthwave-neon-pink mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-synthwave-light/70 hover:text-synthwave-neon-cyan transition-colors font-paragraph text-xs sm:text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-synthwave-light/70 hover:text-synthwave-neon-cyan transition-colors font-paragraph text-xs sm:text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#before-after"
                  className="text-synthwave-light/70 hover:text-synthwave-neon-cyan transition-colors font-paragraph text-xs sm:text-sm"
                >
                  Before & After
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-heading text-sm font-bold text-synthwave-neon-pink mb-4">
              CONTACT
            </h4>
            <div className="space-y-3">
              <a
                href="tel:650-533-8361"
                className="flex items-center gap-2 text-synthwave-light/70 hover:text-synthwave-neon-cyan transition-colors font-paragraph text-xs sm:text-sm"
              >
                <Phone size={14} className="flex-shrink-0" />
                (650) 533-8361
              </a>
              <p className="flex items-center gap-2 text-synthwave-light/70 font-paragraph text-xs sm:text-sm">
                <MapPin size={14} className="flex-shrink-0" />
                Miami, FL
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-synthwave-neon-cyan/20 pt-6 sm:pt-8">
          <p className="text-center text-synthwave-light/50 font-paragraph text-xs">
            © 2026 Miami Knife Guy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
