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
        <section className="relative w-full py-32 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5"/>
                </pattern>
                <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00FFFF"/>
                  <stop offset="100%" stopColor="#FF007F"/>
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
            </svg>
          </div>

          {/* Horizontal Scan Lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.3) 2px, rgba(0, 255, 255, 0.3) 4px)',
              animation: 'scan 8s linear infinite'
            }}/>
          </div>

          {/* Animated Neon Orbs */}
          <motion.div
            className="absolute top-10 left-10 w-80 h-80 bg-synthwave-neon-pink/10 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-synthwave-neon-cyan/10 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-synthwave-purple/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Geometric Accent Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-synthwave-neon-cyan to-transparent opacity-30"/>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-synthwave-neon-pink to-transparent opacity-30"/>

          <div className="max-w-[100rem] mx-auto relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h1 
                className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(to bottom, #ff99ff 0%, #FF007F 50%, #ff0066 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                animate={{ textShadow: [
                  '0 0 15px rgba(255, 0, 127, 0.6), 0 0 30px rgba(255, 0, 127, 0.4), 0 0 50px rgba(255, 153, 255, 0.3)',
                  '0 0 25px rgba(255, 0, 127, 0.9), 0 0 50px rgba(255, 0, 127, 0.6), 0 0 80px rgba(255, 153, 255, 0.5)',
                  '0 0 15px rgba(255, 0, 127, 0.6), 0 0 30px rgba(255, 0, 127, 0.4), 0 0 50px rgba(255, 153, 255, 0.3)'
                ]}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SHARP AFTER DARK
              </motion.h1>
              <motion.p 
                className="font-paragraph text-2xl md:text-3xl mb-6 neon-cyan-flicker"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Commercial Sharpening Service
              </motion.p>
              <p className="font-paragraph text-lg text-synthwave-light/80 max-w-2xl mx-auto">
                Your kitchen doesn't sleep. Neither do your blades.
              </p>
            </motion.div>
          </div>

          <style>{`
            @keyframes scan {
              0% { transform: translateY(0); }
              100% { transform: translateY(10px); }
            }
          `}</style>
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
                    {index < 3 ? (
                      <>
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
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <h3 className="font-heading text-lg font-bold text-synthwave-neon-pink">
                          {image.title}
                        </h3>
                      </div>
                    )}
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
