import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, Users, Truck, Crown, Clock } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Commercial Sharpening',
    description: 'Professional knife sharpening for restaurants and commercial kitchens. We handle high-volume sharpening with precision angles tailored to your blade types.',
    icon: Zap,
    features: ['Bulk processing', 'Custom angles', 'Fast turnaround', 'On-site available'],
    color: 'from-synthwave-neon-pink to-synthwave-neon-cyan',
  },
  {
    id: 2,
    title: 'White Glove Residential',
    description: 'Premium home sharpening service with personalized attention. We restore your kitchen knives to perfection with white-glove service.',
    icon: Users,
    features: ['In-home service', 'Expert consultation', 'Premium restoration', 'Blade care tips'],
    color: 'from-synthwave-neon-cyan to-synthwave-neon-blue',
  },
  {
    id: 3,
    title: 'Customer Drop-off',
    description: 'Convenient drop-off sharpening service. Leave your knives with us and pick them up when ready. Perfect for busy professionals.',
    icon: Truck,
    features: ['Local pickup', 'Quick service', 'Secure handling', 'Flexible scheduling'],
    color: 'from-synthwave-neon-blue to-synthwave-purple',
  },
  {
    id: 4,
    title: 'Miami Knife Club Subscription',
    description: 'Join our exclusive membership program. Regular sharpening, priority service, and exclusive access to special events and workshops.',
    icon: Crown,
    features: ['Monthly service', 'Priority access', 'Member events', 'Exclusive pricing'],
    color: 'from-synthwave-purple to-synthwave-neon-pink',
  },
  {
    id: 5,
    title: 'Sharp After Dark - Zero Downtime Commercial',
    description: 'After-hours commercial sharpening service. We sharpen your knives overnight so your kitchen is fully equipped by morning.',
    icon: Clock,
    features: ['After-hours service', 'Zero downtime', 'Commercial grade', 'Guaranteed quality'],
    color: 'from-synthwave-neon-pink to-synthwave-neon-cyan',
  },
];

export default function KnifeServicePage() {
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-synthwave-midnight text-synthwave-light">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-synthwave-neon-pink via-synthwave-neon-cyan to-synthwave-neon-blue bg-clip-text text-transparent">
            Knife Sharpening Services
          </h1>
          <p className="font-paragraph text-lg sm:text-xl text-synthwave-light/80 max-w-3xl mx-auto">
            Professional sharpening solutions tailored to your needs. From commercial kitchens to home chefs, we deliver the Miami Edge.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-synthwave-dark to-synthwave-midnight border-2 border-synthwave-neon-pink/30 rounded-lg p-6 sm:p-8 hover:border-synthwave-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-synthwave-neon-pink/20 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-synthwave-midnight" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-synthwave-neon-cyan relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-paragraph text-sm sm:text-base text-synthwave-light/80 mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${service.color}`}></span>
                      <span className="font-paragraph text-xs sm:text-sm text-synthwave-light/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-synthwave-neon-pink/10 to-synthwave-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-synthwave-neon-pink/10 to-synthwave-neon-cyan/10 border-2 border-synthwave-neon-pink rounded-lg p-8 sm:p-12 lg:p-16 text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-synthwave-neon-pink">
            Ready to Get the Miami Edge?
          </h2>
          <p className="font-paragraph text-lg text-synthwave-light/80 mb-8 max-w-2xl mx-auto">
            Book your consultation today and experience professional knife sharpening like never before.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight font-heading font-bold rounded-lg hover:shadow-lg hover:shadow-synthwave-neon-pink/50 transition-all duration-300"
          >
            Book Consultation
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
