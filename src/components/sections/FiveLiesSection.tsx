import { motion } from 'framer-motion';

const lies = [
  {
    id: 1,
    myth: "Pull-throughs are fine",
    truth: "They shred metal geometry. We restore the original edge angle every time.",
  },
  {
    id: 2,
    myth: "A knife is just a knife",
    truth: "Every steel is different. German, Japanese, single-bevel — each needs a custom angle and abrasive sequence.",
  },
  {
    id: 3,
    myth: "Sharpening takes too long",
    truth: "Pickup at last call, back before first prep. Zero downtime. Or we come to you.",
  },
  {
    id: 4,
    myth: "I'm not a chef — it doesn't matter",
    truth: "A dull knife is the most dangerous tool in your house. And your food tastes better when it's cut, not crushed.",
  },
  {
    id: 5,
    myth: "It's chipped or broken — trash it",
    truth: "We save chips, broken tips, and damaged blades. If there's steel left, there's an edge left.",
  },
];

export default function FiveLiesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="five-lies" className="w-full py-20 bg-gradient-to-b from-synthwave-dark to-synthwave-midnight overflow-x-hidden">
      <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 neon-sign-pink">
            The 5 Lies of Sharpening
          </h2>
          <p className="font-heading text-base sm:text-lg neon-sign-cyan max-w-2xl mx-auto px-2">
            Debunking the myths that are keeping your knives dull
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {lies.map((lie) => (
            <motion.div
              key={lie.id}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-synthwave-dark to-synthwave-midnight border border-synthwave-neon-cyan rounded-lg p-4 sm:p-6 hover:border-synthwave-neon-pink transition-all duration-300 hover:shadow-lg hover:shadow-synthwave-neon-pink/20 w-full"
            >
              {/* Card Number */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-synthwave-neon-cyan/10 flex items-center justify-center border border-synthwave-neon-cyan flex-shrink-0">
                <span className="font-heading text-synthwave-neon-cyan font-bold text-xs sm:text-sm">{lie.id}</span>
              </div>

              {/* Myth Section */}
              <div className="mb-4 sm:mb-6 pr-10 sm:pr-12">
                <h3 className="font-heading text-base sm:text-lg font-bold text-synthwave-neon-pink mb-2">
                  The Myth
                </h3>
                <p className="font-paragraph text-synthwave-light text-xs sm:text-sm leading-relaxed break-words">
                  {lie.myth}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-synthwave-neon-cyan to-transparent mb-4 sm:mb-6"></div>

              {/* Truth Section */}
              <div>
                <h4 className="font-heading text-xs sm:text-sm font-bold text-synthwave-neon-cyan mb-2 uppercase tracking-wide">
                  The Truth
                </h4>
                <p className="font-paragraph text-synthwave-light text-xs sm:text-sm leading-relaxed break-words">
                  {lie.truth}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-synthwave-neon-pink/5 to-synthwave-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA below the 5 lies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="font-heading text-lg neon-sign-cyan mb-4">
            Ready to
