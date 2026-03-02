import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { KnifeCatalog } from '@/entities';
import { Image } from '@/components/ui/image';

interface KnifeCategorySectionProps {
  title: string;
  knives: KnifeCatalog[];
  index: number;
}

export default function KnifeCategorySection({ title, knives, index }: KnifeCategorySectionProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-20"
    >
      {/* Section Title */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan rounded-full" />
      </motion.div>

      {/* Knives Grid */}
      {knives.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knives.map((knife, idx) => (
            <Link key={knife._id} to={`/knife/${knife._id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-lg border border-synthwave-neon-cyan/30 bg-slate-900/50 backdrop-blur-sm hover:border-synthwave-neon-pink/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  {knife.productImage ? (
                    <Image
                      src={knife.productImage}
                      alt={knife.productName || 'Knife'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      width={400}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-synthwave-neon-cyan/20 to-synthwave-neon-pink/20 flex items-center justify-center">
                      <span className="text-synthwave-light/50">No image</span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-synthwave-neon-cyan group-hover:text-synthwave-neon-pink transition-colors duration-300 mb-2">
                      {knife.productName}
                    </h3>
                    <p className="font-paragraph text-sm text-synthwave-light/70 line-clamp-2 mb-3">
                      {knife.shortDescription}
                    </p>
                  </div>

                  {/* Price and Status */}
                  <div className="flex items-center justify-between pt-3 border-t border-synthwave-neon-cyan/20">
                    <span className="font-heading text-2xl font-bold text-synthwave-neon-pink">
                      ${knife.price?.toFixed(2) || '0.00'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      knife.inStock
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}>
                      {knife.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="w-full py-2 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-slate-950 font-heading font-bold rounded-md hover:shadow-lg hover:shadow-synthwave-neon-pink/50 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 border border-dashed border-synthwave-neon-cyan/30 rounded-lg"
        >
          <p className="font-paragraph text-synthwave-light/50 text-lg">
            No knives available in this category yet.
          </p>
        </motion.div>
      )}
    </motion.section>
  );
}
