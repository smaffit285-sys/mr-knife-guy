import { motion } from 'framer-motion';
import { Zap, Users, Crown, Infinity, Eye, Gem } from 'lucide-react';

export default function ClubPricingLevels() {
  const levels = [
    {
      name: 'Scope the Scene',
      icon: Eye,
      price: 'FREE',
      priceSubtext: '(with honest review)',
      benefits: ['1 knife any size', 'One-time, no commitment', 'Let the edge sell itself'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-500/10',
      accentColor: 'text-blue-400',
    },
    {
      name: 'Limited Access',
      icon: Zap,
      price: '$30',
      benefits: ['1 Large OR', '1 Medium + 2 Small'],
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-500/10',
      accentColor: 'text-purple-400',
    },
    {
      name: 'Club Regular',
      icon: Users,
      price: '$60',
      benefits: ['1 Large + 1 Medium + 3 Small OR', '3 Medium + 4 Small'],
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/50',
      bgColor: 'bg-green-500/10',
      accentColor: 'text-green-400',
    },
    {
      name: 'VIP',
      icon: Crown,
      price: '$105',
      benefits: ['4 Large + 2 Medium + 2 Small OR', '6 Medium + 6 Small'],
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-500/50',
      bgColor: 'bg-yellow-500/10',
      accentColor: 'text-yellow-400',
    },
    {
      name: 'All Access',
      icon: Infinity,
      price: '$200',
      benefits: ['Up to 20 knives any size OR', '30 small knives'],
      color: 'from-red-500 to-pink-500',
      borderColor: 'border-red-500/50',
      bgColor: 'bg-red-500/10',
      accentColor: 'text-red-400',
    },
    {
      name: 'Club Benefactor',
      icon: Gem,
      price: 'BY INQUIRY',
      benefits: ['Unlimited priority service', 'White-glove logistics', '1-on-1 masterclasses', 'Curated collection access'],
      color: 'from-violet-500 to-fuchsia-500',
      borderColor: 'border-violet-500/50',
      bgColor: 'bg-violet-500/10',
      accentColor: 'text-violet-400',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-synthwave-neon-pink/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-synthwave-neon-cyan/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 neon-sign-cyan">
            MIAMI KNIFE CLUB
          </h2>
          <p className="font-heading text-xl neon-sign-pink">
            Recurring sharpening on your schedule.<br />
            Never fight your food again.
          </p>
          <p className="font-paragraph text-sm text-synthwave-light/50 mt-3">
            Small = up to 5" · Medium = 5–9" · Large = 9"+
          </p>
        </motion.div>

        {/* Pricing Level Boxes */}
        <div className="relative z-10 mb-16 space-y-6">
          {/* Middle Four Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {levels.slice(1, 5).map((level, index) => {
              const IconComponent = level.icon;
              return (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className={`relative h-full rounded-xl border-2 ${level.borderColor} ${level.bgColor} backdrop-blur-sm p-4 transition-all duration-300 hover:border-opacity-100 border-opacity-50 overflow-hidden`}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}
                    />
                    <div className={`mb-4 inline-block p-3 rounded-lg ${level.bgColor}`}>
                      <IconComponent className={`w-6 h-6 ${level.accentColor}`} />
                    </div>
                    <h3 className="font-heading text-base font-bold text-synthwave-light mb-2">
                      {level.name}
                    </h3>
                    <div className="mb-3">
                      <p className={`font-heading text-lg font-bold ${level.accentColor}`}>
                        {level.price}
                      </p>
                      {level.priceSubtext && (
                        <p className="font-paragraph text-synthwave-light/60 text-xs">
