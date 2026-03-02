import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { KnifeCatalog } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Image } from '@/components/ui/image';

export default function KnifeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [knife, setKnife] = useState<KnifeCatalog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const loadKnife = async () => {
      try {
        setIsLoading(true);
        if (!id) {
          navigate('/knives-for-sale');
          return;
        }
        const data = await BaseCrudService.getById<KnifeCatalog>('knifecatalog', id);
        setKnife(data);
      } catch (error) {
        console.error('Error loading knife:', error);
        navigate('/knives-for-sale');
      } finally {
        setIsLoading(false);
      }
    };

    loadKnife();
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
        <Header />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }

  if (!knife) {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
        <Header />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-[100rem] mx-auto text-center">
            <h1 className="font-heading text-4xl font-bold text-synthwave-neon-pink mb-4">
              Knife Not Found
            </h1>
            <p className="font-paragraph text-synthwave-light/70 mb-8">
              The knife you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/knives-for-sale')}
              className="px-6 py-3 bg-gradient-to-r from-synthwave-neon-cyan to-synthwave-neon-pink text-slate-950 font-heading font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Back to Catalog
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <Header />

      <main className="w-full">
        {/* Hero Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-synthwave-neon-pink/20 via-synthwave-dark to-synthwave-neon-cyan/20"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink via-synthwave-purple to-synthwave-neon-cyan opacity-10"
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl font-bold bg-gradient-to-r from-synthwave-neon-pink via-synthwave-neon-cyan to-synthwave-neon-pink bg-clip-text text-transparent"
            >
              {knife.productName}
            </motion.h1>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-slate-950"
        >
          <div className="max-w-[100rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-synthwave-neon-cyan/30 bg-slate-900">
                  {knife.productImage ? (
                    <Image
                      src={knife.productImage}
                      alt={knife.productName || 'Knife'}
                      className="w-full h-full object-cover"
                      width={600}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-synthwave-neon-cyan/20 to-synthwave-neon-pink/20 flex items-center justify-center">
                      <span className="text-synthwave-light/50 text-lg">No image available</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Details Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-between"
              >
                {/* Price and Status */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-heading text-5xl font-bold text-synthwave-neon-pink">
                        ${knife.price?.toFixed(2) || '0.00'}
                      </span>
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        knife.inStock
                          ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                          : 'bg-red-500/20 text-red-400 border border-red-500/50'
                      }`}>
                        {knife.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>

                    {/* Type Badge */}
                    {knife.productType && (
                      <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-synthwave-neon-cyan/20 text-synthwave-neon-cyan rounded-lg text-sm font-bold border border-synthwave-neon-cyan/50">
                          {knife.productType}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="font-heading text-2xl font-bold text-synthwave-neon-cyan mb-3">
                      Description
                    </h2>
                    <p className="font-paragraph text-synthwave-light/80 text-lg leading-relaxed mb-4">
                      {knife.shortDescription}
                    </p>
                    {knife.longDescription && (
                      <p className="font-paragraph text-synthwave-light/70 leading-relaxed">
                        {knife.longDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Purchase Section */}
                <div className="border-t border-synthwave-neon-cyan/20 pt-8">
                  <div className="mb-6">
                    <label className="font-heading text-sm font-bold text-synthwave-light mb-3 block">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={!knife.inStock}
                        className="px-4 py-2 bg-synthwave-neon-cyan/20 text-synthwave-neon-cyan rounded-lg hover:bg-synthwave-neon-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                      >
                        −
                      </button>
                      <span className="font-heading text-2xl font-bold text-synthwave-light w-12 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        disabled={!knife.inStock}
                        className="px-4 py-2 bg-synthwave-neon-cyan/20 text-synthwave-neon-cyan rounded-lg hover:bg-synthwave-neon-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <motion.button
                    whileHover={{ scale: knife.inStock ? 1.02 : 1 }}
                    whileTap={{ scale: knife.inStock ? 0.98 : 1 }}
                    disabled={!knife.inStock}
                    className="w-full py-4 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-slate-950 font-heading text-lg font-bold rounded-lg hover:shadow-lg hover:shadow-synthwave-neon-pink/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {knife.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </motion.button>

                  {/* Consultation Link */}
                  {knife.consultationLink && (
                    <motion.a
                      href={knife.consultationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="block mt-4 py-3 text-center border-2 border-synthwave-neon-cyan/50 text-synthwave-neon-cyan font-heading font-bold rounded-lg hover:bg-synthwave-neon-cyan/10 transition-all duration-300"
                    >
                      Schedule Consultation
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => navigate('/knives-for-sale')}
              className="mt-12 px-6 py-3 text-synthwave-neon-cyan font-heading font-bold hover:text-synthwave-neon-pink transition-colors duration-300 flex items-center gap-2"
            >
              ← Back to Catalog
            </motion.button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
