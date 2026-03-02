import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function BeforeAfterDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const knifeId = parseInt(id || '0');

  // Placeholder image URL
  const placeholderImage = 'https://static.wixstatic.com/media/37d64c_460796e67a93440f96e0fd00d3861189~mv2.png?originWidth=192&originHeight=192';

  // Generate 3 before and 3 after images for this knife
  const beforeImages = Array.from({ length: 3 }, (_, i) => ({
    id: `before-${knifeId}-${i}`,
    url: placeholderImage,
    alt: `Before image - photo ${i + 1}`,
  }));

  const afterImages = Array.from({ length: 3 }, (_, i) => ({
    id: `after-${knifeId}-${i}`,
    url: placeholderImage,
    alt: `After image - photo ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-synthwave-midnight">
      <Header />

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="w-full max-w-[120rem] mx-auto px-3 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/before-after')}
            className="flex items-center gap-2 text-synthwave-neon-cyan hover:text-synthwave-neon-pink transition-colors mb-8 font-paragraph"
          >
            <ChevronLeft size={20} />
            Back to Before & After
          </motion.button>

          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent">
                KNIFE #{knifeId + 1}
              </span>
            </h1>
            <p className="font-paragraph text-synthwave-light/80 text-lg">
              Professional sharpening transformation
            </p>
          </motion.div>

          {/* Before & After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* BEFORE Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-synthwave-neon-pink mb-2">
                  BEFORE
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-synthwave-neon-pink to-transparent"></div>
              </div>

              {/* Before Images Grid */}
              <div className="grid grid-cols-1 gap-4">
                {beforeImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="aspect-video rounded-lg overflow-hidden bg-synthwave-dark border border-synthwave-neon-cyan/20 hover:border-synthwave-neon-cyan/50 transition-colors"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AFTER Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6">
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-synthwave-neon-cyan mb-2">
                  AFTER
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-synthwave-neon-cyan to-transparent"></div>
              </div>

              {/* After Images Grid */}
              <div className="grid grid-cols-1 gap-4">
                {afterImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="aspect-video rounded-lg overflow-hidden bg-synthwave-dark border border-synthwave-neon-cyan/20 hover:border-synthwave-neon-cyan/50 transition-colors"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-synthwave-dark/50 backdrop-blur border border-synthwave-neon-cyan/20 rounded-lg p-6 sm:p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-synthwave-neon-cyan mb-4">
              THE TRANSFORMATION
            </h3>
            <p className="font-paragraph text-synthwave-light/80 text-base sm:text-lg leading-relaxed mb-6">
              This knife underwent our professional sharpening process, transforming it from a dull, damaged blade into a razor-sharp instrument ready for professional kitchen use. The edge was restored to factory specifications with extended edge retention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-synthwave-midnight/50 border border-synthwave-neon-pink/20 rounded p-4">
                <p className="font-heading text-synthwave-neon-pink text-sm font-bold mb-2">BEFORE</p>
                <ul className="space-y-1 font-paragraph text-synthwave-light/70 text-sm">
                  <li>• Crushed food instead of slicing</li>
                  <li>• Visible edge damage</li>
                  <li>• Difficult to use</li>
                </ul>
              </div>
              <div className="bg-synthwave-midnight/50 border border-synthwave-neon-cyan/20 rounded p-4">
                <p className="font-heading text-synthwave-neon-cyan text-sm font-bold mb-2">AFTER</p>
                <ul className="space-y-1 font-paragraph text-synthwave-light/70 text-sm">
                  <li>• Razor-sharp edge</li>
                  <li>• Glides through food</li>
                  <li>• Professional performance</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={() => navigate('/knives-for-sale')}
              className="bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight font-heading font-bold px-8 py-3 rounded hover:shadow-lg transition-shadow"
            >
              Get Your Knives Sharpened
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
