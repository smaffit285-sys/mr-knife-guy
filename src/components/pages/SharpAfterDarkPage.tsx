import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

export default function SharpAfterDarkPage() {
  const images = [
    {
      url: 'https://static.wixstatic.com/media/37d64c_bee695b14a5d4475a6e18a778c210f4b~mv2.png',
      alt: 'Sharp After Dark - Top Left Image',
      title: 'Sharp After Dark'
    },
    {
      url: 'https://static.wixstatic.com/media/37d64c_5d6ee69760ed44c1b959486957854280~mv2.jpg',
      alt: 'Sharp After Dark Commercial Sharpening Service - Professional Knives',
      title: 'Professional Knife Sharpening'
    },
    {
      url: 'https://static.wixstatic.com/media/37d64c_668cac880e5c4b2d978a048a2f4fdb32~mv2.png',
      alt: 'Sharp After Dark - Top Right Image',
      title: 'Sharp After Dark Service'
    },
    {
      url: 'https://static.wixstatic.com/media/37d64c_8549b2080ba84f8595f983f41f6d858a~mv2.jpg',
      alt: 'Filo Despues Del Anochecer - Miami Knife Guy Event',
      title: 'Event Information'
    },
    {
      url: 'https://static.wixstatic.com/media/37d64c_5bb33ca2958a43bca7f70656693cc784~mv2.jpg',
      alt: 'Sharp After Dark - Commercial Sharpening Service Details',
      title: 'Service Details'
    },
    {
      url: 'https://static.wixstatic.com/media/37d64c_53eac3715b3e4aeeb142437191fcb233~mv2.png',
      alt: 'Sharp After Dark - Featured Image',
      title: 'Premium Service'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden selection:bg-cyan-500/30">
      <Header />

      <main className="w-full">
        {/* Hero Section */}
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
              <h1 className="font-heading text-6xl md:text-7xl font-bold mb-4 neon-pink-glow">
                SHARP AFTER DARK
              </h1>
              <p className="font-paragraph text-2xl neon-cyan-flicker mb-6">
                Commercial Sharpening Service
              </p>
              <p className="font-paragraph text-lg text-synthwave-light/80 max-w-2xl mx-auto">
                Your kitchen doesn't sleep. Neither do your blades.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
          <div className="max-w-[100rem] mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold neon-cyan-flicker mb-4">
                Service Gallery
              </h2>
              <p className="font-paragraph text-lg text-synthwave-light/70">
                Explore our commercial sharpening service offerings and promotions
              </p>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border-2 border-synthwave-neon-cyan/30 hover:border-synthwave-neon-pink/50 transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-96 overflow-hidden bg-slate-900">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-synthwave-midnight via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <h3 className="font-heading text-lg font-bold text-synthwave-neon-pink">
                        {image.title}
                      </h3>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
          <div className="max-w-[100rem] mx-auto">
            {/* Background Elements */}
            <motion.div
              className="absolute top-0 left-0 w-96 h-96 bg-synthwave-neon-cyan/5 rounded-full blur-3xl"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 neon-pink-glow">
                Ready to Keep Your Blades Sharp?
              </h2>
              <p className="font-paragraph text-lg text-synthwave-light/80 mb-8">
                Join our commercial sharpening service and experience professional-grade blade maintenance.
              </p>
              
              <motion.a
                href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight font-heading font-bold rounded-lg text-lg hover:shadow-lg hover:shadow-synthwave-neon-pink/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
