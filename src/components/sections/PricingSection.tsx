import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'TRY IT',
      price: 0,
      period: 'first month',
      description: 'Test the Miami Knife Club',
      features: [
        '2 Medium or 3 Small knives',
        'Free first month with review',
        'Professional sharpening',
        'No commitment required',
      ],
      highlighted: false,
    },
    {
      name: 'I LIKE IT',
      price: 20,
      period: 'per month',
      description: 'Growing collection',
      features: [
        'Up to 5 mixed knives',
        '50% off repair services',
        'Free honing lesson',
        'Monthly maintenance',
        'Priority scheduling',
      ],
      highlighted: true,
    },
    {
      name: 'I WANT MORE',
      price: 45,
      period: 'per month',
      description: 'Complete arsenal',
      features: [
        'Up to 10 mixed knives',
        'Priority turnaround',
        'Free honing lesson',
        'Expert maintenance',
        'VIP member status',
        'Exclusive member events',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-synthwave-neon-cyan/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-synthwave-neon-pink" style={{ letterSpacing: '1.5px' }}>
            <span className="bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent">
              MIAMI KNIFE CLUB
            </span>
          </h2>
          <p className="font-paragraph text-xl text-synthwave-light/80">
            Choose your sharpening tier
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {/* Highlighted Border Glow */}
              {plan.highlighted && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(255, 0, 110, 0.3)',
                      '0 0 40px rgba(0, 245, 255, 0.3)',
                      '0 0 20px rgba(255, 0, 110, 0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}

              <div
                className="relative bg-black/50 backdrop-blur rounded-lg p-8 transition-all duration-300 border border-synthwave-neon-cyan hover:border-synthwave-neon-cyan"
              >
                {/* Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight px-4 py-1 rounded-full font-heading text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="font-heading text-2xl font-bold text-synthwave-light mb-2">
                  {plan.name}
                </h3>
                <p className="font-paragraph text-sm text-synthwave-light/60 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-heading text-5xl font-bold bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="font-paragraph text-synthwave-light/60 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-synthwave-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-synthwave-light/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#cta"
                  className={`block w-full py-3 rounded-lg font-heading font-bold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-synthwave-neon-pink to-synthwave-purple text-synthwave-midnight hover:shadow-lg hover:shadow-synthwave-neon-pink/50'
                      : 'border-2 border-synthwave-neon-cyan text-synthwave-neon-cyan hover:bg-synthwave-neon-cyan/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SELECT PLAN
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-paragraph text-synthwave-light/60 mt-12 relative z-10"
        >
          Join the Miami Knife Club and keep your blades razor-sharp. All memberships include professional sharpening and inspection.
        </motion.p>
      </div>
    </section>
  );
}
