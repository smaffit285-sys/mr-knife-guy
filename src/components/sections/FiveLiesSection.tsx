import { motion } from 'framer-motion';

const lies = [
  {
    id: 1,
    myth: "Pull-throughs are fine",
    truth: "They shred metal; we restore geometry",
  },
  {
    id: 2,
    myth: "A knife is just a knife",
    truth: "Every steel needs a custom angle",
  },
  {
    id: 3,
    myth: "Sharpening is a pain",
    truth: "Fast turnaround and local drop-off",
  },
  {
    id: 4,
    myth: "I'm not a chef",
    truth: "A dull knife is the most dangerous tool in your house",
  },
  {
    id: 5,
    myth: "It's chipped—trash it",
    truth: "We save chips, broken tips, and rusted steel",
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
    <section id="five-lies" className="w-full py-20 bg-gradient-to-b from-synthwave-dark to-synthwave-midnight">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-6xl font-bold text-synthwave-neon-pink mb-4">
            The 5 Lies of Sharpening
          </h2>
          <p className="font-paragraph text-lg text-synthwave-light max-w-2xl mx-auto">
            Debunking common myths about knife sharpening and maintenance
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {lies.map((lie) => (
            <motion.div
              key={lie.id}
              variants={cardVariants}
              className="group relative bg-gradient-to-br from-synthwave-dark to-synthwave-midnight border border-synthwave-neon-cyan rounded-lg p-6 hover:border-synthwave-neon-pink transition-all duration-300 hover:shadow-lg hover:shadow-synthwave-neon-pink/20"
            >
              {/* Card Number */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-synthwave-neon-cyan/10 flex items-center justify-center border border-synthwave-neon-cyan">
                <span className="font-heading text-synthwave-neon-cyan font-bold">{lie.id}</span>
              </div>

              {/* Myth Section */}
              <div className="mb-6 pr-12">
                <h3 className="font-heading text-lg font-bold text-synthwave-neon-pink mb-2">
                  The Myth
                </h3>
                <p className="font-paragraph text-synthwave-light text-sm leading-relaxed">
                  {lie.myth}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-synthwave-neon-cyan to-transparent mb-6"></div>

              {/* Truth Section */}
              <div>
                <h4 className="font-heading text-sm font-bold text-synthwave-neon-cyan mb-2 uppercase tracking-wide">
                  The Truth
                </h4>
                <p className="font-paragraph text-synthwave-light text-sm leading-relaxed">
                  {lie.truth}
                </p>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-synthwave-neon-pink/5 to-synthwave-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
