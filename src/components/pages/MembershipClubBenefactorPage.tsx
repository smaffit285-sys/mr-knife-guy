import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function MembershipClubBenefactorPage() {
  const perks = [
    { text: 'Unlimited knives per month', color: 'bg-synthwave-neon-pink' },
    { text: 'Platinum sharpening service', color: 'bg-synthwave-neon-pink' },
    { text: 'Personal account manager', color: 'bg-synthwave-neon-pink' },
    { text: 'Real-time exclusive content', color: 'bg-synthwave-neon-pink' },
    { text: 'Private events & workshops', color: 'bg-synthwave-neon-pink' },
    { text: '40% discount on all services', color: 'bg-synthwave-neon-pink' },
    { text: 'Free specialty blade assessment', color: 'bg-synthwave-neon-pink' },
    { text: 'Priority shipping & handling', color: 'bg-synthwave-neon-pink' },
    { text: 'Exclusive product previews', color: 'bg-synthwave-neon-pink' },
    { text: 'Lifetime membership benefits', color: 'bg-synthwave-neon-pink' },
  ];

  const pricingTiers = [
    { pieces: '1-75 knives', price: '$400', description: 'Platinum sharpening' },
    { pieces: '76-unlimited', price: '$650', description: 'Unlimited platinum' },
    { pieces: 'Custom requests', price: '$500', description: 'Premium blade work' },
    { pieces: 'Maintenance plan', price: '$800/mo', description: 'Platinum maintenance' },
    { pieces: 'Concierge service', price: '$600', description: 'Platinum concierge' },
    { pieces: 'Custom projects', price: 'Premium', description: 'Bespoke services' },
    { pieces: 'Sponsorship', price: 'Custom', description: 'Club sponsorship' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-synthwave-midnight to-synthwave-dark">
      <Header />
      
      <main className="flex-1 w-full max-w-[100rem] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-heading text-6xl font-bold text-synthwave-neon-cyan mb-4">
            Club Benefactor
          </h1>
          <p className="font-paragraph text-xl text-synthwave-light">
            Platinum membership with exclusive privileges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Perks Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl font-bold text-synthwave-neon-pink mb-8">
              Membership Perks
            </h2>
            <ul className="space-y-4">
              {perks.map((perk, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className={`${perk.color} w-3 h-3 rounded-full mt-2 flex-shrink-0`} />
                  <span className="font-paragraph text-lg text-synthwave-light">
                    {perk.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing Tiers Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl font-bold text-synthwave-neon-pink mb-8">
              Sharpening Options
            </h2>
            <div className="space-y-4">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-synthwave-dark border border-synthwave-neon-cyan rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-synthwave-neon-pink w-3 h-3 rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-synthwave-neon-cyan">
                        {tier.pieces}
                      </h3>
                      <p className="font-paragraph text-synthwave-light mt-1">
                        {tier.description}
                      </p>
                      <p className="font-heading text-2xl font-bold text-synthwave-neon-pink mt-3">
                        {tier.price}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
