import { motion } from 'framer-motion';
import { CommunityKnives } from '@/types/community-knives';
import { Image } from '@/components/ui/image';

interface CommunityKnivesSectionProps {
  knives: CommunityKnives[];
}

export default function CommunityKnivesSection({ knives }: CommunityKnivesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-[100rem] mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-synthwave-neon-cyan to-synthwave-neon-pink bg-clip-text text-transparent">
            Community Marketplace
          </h2>
          <p className="font-paragraph text-synthwave-light/70 text-lg mb-4">
            Vetted community members selling premium blades
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-synthwave-neon-cyan to-synthwave-neon-pink rounded-full" />
        </motion.div>

        {/* Community Knives Grid */}
        {knives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knives.map((knife, idx) => (
              <motion.div
                key={knife._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-lg border border-synthwave-neon-pink/30 bg-slate-900/50 backdrop-blur-sm hover:border-synthwave-neon-cyan/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  {knife.itemImage ? (
                    <Image
                      src={knife.itemImage}
                      alt={knife.itemName || 'Community Knife'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      width={400}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-synthwave-neon-pink/20 to-synthwave-neon-cyan/20 flex items-center justify-center">
                      <span className="text-synthwave-light/50">No image</span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Style Badge */}
                  {knife.knifeStyle && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-synthwave-neon-pink/80 text-slate-950 text-xs font-bold rounded-full">
                      {knife.knifeStyle}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-synthwave-neon-pink group-hover:text-synthwave-neon-cyan transition-colors duration-300 mb-2">
                      {knife.itemName}
                    </h3>
                    <p className="font-paragraph text-sm text-synthwave-light/70 line-clamp-2 mb-3">
                      {knife.itemDescription}
                    </p>

                    {/* Seller Info */}
                    <div className="py-3 border-t border-synthwave-neon-pink/20">
                      <p className="font-paragraph text-xs text-synthwave-light/60 mb-1">
                        <span className="font-bold text-synthwave-light">Seller:</span> {knife.sellerName}
                      </p>
                      {knife.sellerContact && (
                        <p className="font-paragraph text-xs text-synthwave-light/60">
                          <span className="font-bold text-synthwave-light">Contact:</span> {knife.sellerContact}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pt-3 border-t border-synthwave-neon-pink/20">
                    <span className="font-heading text-2xl font-bold text-synthwave-neon-cyan">
                      ${knife.itemPrice?.toFixed(2) || '0.00'}
                    </span>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-full py-2 bg-gradient-to-r from-synthwave-neon-cyan to-synthwave-neon-pink text-slate-950 font-heading font-bold rounded-md hover:shadow-lg hover:shadow-synthwave-neon-cyan/50 transition-all duration-300">
                    Contact Seller
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16 border border-dashed border-synthwave-neon-pink/30 rounded-lg"
          >
            <p className="font-paragraph text-synthwave-light/50 text-lg mb-4">
              No community knives available yet.
            </p>
            <p className="font-paragraph text-synthwave-light/40 text-sm">
              Vetted members can list their knives here soon.
            </p>
          </motion.div>
        )}

        {/* CTA for Sellers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-lg border border-synthwave-neon-cyan/30 bg-gradient-to-r from-synthwave-neon-cyan/5 to-synthwave-neon-pink/5 text-center"
        >
          <h3 className="font-heading text-2xl font-bold text-synthwave-neon-cyan mb-3">
            Are you a vetted member?
          </h3>
          <p className="font-paragraph text-synthwave-light/70 mb-6 max-w-2xl mx-auto">
            List your premium blades in our community marketplace and connect with fellow knife enthusiasts.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-synthwave-neon-cyan to-synthwave-neon-pink text-slate-950 font-heading font-bold rounded-lg hover:shadow-lg hover:shadow-synthwave-neon-cyan/50 transition-all duration-300 hover:scale-105">
            Become a Seller
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
