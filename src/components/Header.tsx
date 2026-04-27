import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import './header-effects.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Before & After', href: '/before-after' },
    { label: 'Knives for Sale', href: '/knives-for-sale' },
    { label: 'Sharpening Services', href: '/knife-service' },
    { label: 'Book Now', href: '/customer-info' },
  ];

  // ... keep existing code (socialLogos array removed - moved to HeroSection)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-synthwave-midnight/95 backdrop-blur border-b border-synthwave-neon-cyan/20">
      <div className="max-w-[100rem] mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-4 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image
              src="https://static.wixstatic.com/media/37d64c_c26d92e0c01a495caeb57ac548ba7b8f~mv2.jpg"
              alt="Miami Knife Guy Logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
            />
            <span className="font-heading text-sm sm:text-2xl font-bold bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent hidden xs:inline">
              MIAMI KNIFE GUY
            </span>
          </motion.div>
        </Link>

        {/* Navigation - Desktop and Mobile */}
        <nav className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-8 flex-wrap">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link key={link.label} to={link.href}>
                <motion.div
                  className="neon-glow-text text-synthwave-light hover:text-synthwave-neon-cyan transition-colors font-paragraph text-xs sm:text-sm lg:text-sm cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.div>
              </Link>
            ) : (
              <motion.a
                key={link.label}
                href={link.href}
                className="neon-glow-text text-synthwave-light hover:text-synthwave-neon-cyan transition-colors font-paragraph text-xs sm:text-sm lg:text-sm"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            )
          ))}
        </nav>

        {/* Mobile Menu Button - Hidden */}
        <button
          className="hidden text-synthwave-neon-cyan p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
