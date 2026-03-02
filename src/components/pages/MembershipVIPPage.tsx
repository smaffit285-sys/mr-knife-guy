import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function MembershipVIPPage() {
  const perks = [
    { text: 'Up to 75 knives per month', color: 'bg-yellow-500' },
    { text: 'Elite sharpening service', color: 'bg-yellow-500' },
    { text: 'Dedicated account manager', color: 'bg-yellow-500' },
    { text: 'Daily exclusive content', color: 'bg-yellow-500' },
    { text: 'Private VIP events', color: 'bg-yellow-500' },
    { text: '25% discount on all services', color: 'bg-yellow-500' },
    { text: 'Free specialty blade assessment', color: 'bg-yellow-500' },
    { text: 'Priority shipping & handling', color: 'bg-yellow-500' },
  ];

  const pricingTiers = [
    { pieces: '1-30 knives', price: '$150', description: 'Elite sharpening' },
    { pieces: '31-75 knives', price: '$225', description: 'Elite bulk package' },
    { pieces: 'Custom requests', price: '$175', description: 'Premium blade work' },
    { pieces: 'Maintenance plan', price: '$300/mo', description: 'Premium maintenance' },
    { pieces: 'Concierge service', price: '$250', description: 'White-glove service' },
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
            VIP
          </h1>
          <p className="font-paragraph text-xl text-synthwave-light">
            Elite membership for serious collectors
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
                    <div className="bg-yellow-500 w-3 h-3 rounded-full mt-2 flex-shrink-0" />
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
