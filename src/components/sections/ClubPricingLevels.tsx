import { motion } from 'framer-motion';
import { Zap, Users, Crown, Infinity, Eye, Gem } from 'lucide-react';

export default function ClubPricingLevels() {
  const levels = [
    {
      name: 'Scope the Scene',
      icon: Eye,
      description: 'Get a taste of the Miami Knife Club',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-500/10',
      accentColor: 'text-blue-400',
    },
    {
      name: 'Limited Access',
      icon: Zap,
      description: 'Explore core sharpening services',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-500/10',
      accentColor: 'text-purple-400',
    },
    {
      name: 'Club Regular',
      icon: Users,
      description: 'Join our community of knife enthusiasts',
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/50',
      bgColor: 'bg-green-500/10',
      accentColor: 'text-green-400',
    },
    {
      name: 'VIP',
      icon: Crown,
      description: 'Premium access and priority service',
      color: 'from-yellow-500 to-orange-500',
      borderColor: 'border-yellow-500/50',
      bgColor: 'bg-yellow-500/10',
      accentColor: 'text-yellow-400',
    },
    {
      name: 'No Limits',
      icon: Infinity,
      description: 'Ultimate membership with all benefits',
      color: 'from-red-500 to-pink-500',
      borderColor: 'border-red-500/50',
      bgColor: 'bg-red-500/10',
      accentColor: 'text-red-400',
    },
    {
      name: 'Club Benefactor',
      icon: Gem,
      description: 'Support our vision with exclusive perks and all No Limits benefits',
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
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-synthwave-neon-cyan">
            MEMBERSHIP LEVELS
          </h2>
          <p className="font-paragraph text-xl text-synthwave-light/80">
            Find your perfect fit in the Miami Knife Club
          </p>
        </motion.div>

        {/* Pricing Level Boxes */}
        <div className="relative z-10 mb-16 space-y-6">
          {/* Middle Four Boxes - Single Row */}
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
                    {/* Gradient Background on Hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}
                    />

                    {/* Icon */}
                    <div className={`mb-4 inline-block p-3 rounded-lg ${level.bgColor}`}>
                      <IconComponent className={`w-6 h-6 ${level.accentColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-base font-bold text-synthwave-light mb-2">
                      {level.name}
                    </h3>

                    {/* Description */}
                    <p className="font-paragraph text-synthwave-light/70 text-xs leading-relaxed">
                      {level.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${level.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Row - Scope the Scene and Club Benefactor (Half Screen Each) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Scope the Scene - Half Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <motion.div
                className={`relative rounded-xl border-2 ${levels[0].borderColor} ${levels[0].bgColor} backdrop-blur-sm p-4 transition-all duration-300 hover:border-opacity-100 border-opacity-50 overflow-hidden max-h-[180px]`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${levels[0].color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}
                />

                {/* Icon */}
                <div className={`mb-4 inline-block p-3 rounded-lg ${levels[0].bgColor}`}>
                  {(() => {
                    const IconComponent = levels[0].icon;
                    return <IconComponent className={`w-6 h-6 ${levels[0].accentColor}`} />;
                  })()}
                </div>

                {/* Title */}
                <h3 className="font-heading text-base font-bold text-synthwave-light mb-2">
                  {levels[0].name}
                </h3>

                {/* Description */}
                <p className="font-paragraph text-synthwave-light/70 text-xs leading-relaxed">
                  {levels[0].description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${levels[0].color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                />
              </motion.div>
            </motion.div>

            {/* Club Benefactor - Half Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group"
            >
              <motion.div
                className={`relative rounded-xl border-2 ${levels[5].borderColor} ${levels[5].bgColor} backdrop-blur-sm p-4 transition-all duration-300 hover:border-opacity-100 border-opacity-50 overflow-hidden max-h-[180px]`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${levels[5].color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10`}
                />

                {/* Icon */}
                <div className={`mb-4 inline-block p-3 rounded-lg ${levels[5].bgColor}`}>
                  {(() => {
                    const IconComponent = levels[5].icon;
                    return <IconComponent className={`w-6 h-6 ${levels[5].accentColor}`} />;
                  })()}
                </div>

                {/* Title */}
                <h3 className="font-heading text-base font-bold text-synthwave-light mb-2">
                  {levels[5].name}
                </h3>

                {/* Description */}
                <p className="font-paragraph text-synthwave-light/70 text-xs leading-relaxed">
                  {levels[5].description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${levels[5].color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-synthwave-neon-cyan to-transparent relative z-10 mb-16"
        />
      </div>
    </section>
  );
}
