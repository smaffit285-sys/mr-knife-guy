import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import './header-effects.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Sharp After Dark', href: '/sharp-after-dark' },
    { label: 'Knife Club', href: '/miami-knife-club' },
    { label: 'Before & After', href: '/before-after' },
    { label: 'Sharpening Services', href: '/knife-service' },
    { label: 'Book Now', href: '/customer-info' },
  ];

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
            <span className="font-heading text-lg sm:text-xl font-bold text-synthwave-neon-cyan hidden sm:inline">
              Miami Knife Guy
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-paragraph text-sm text-synthwave-light hover:text-synthwave-neon-cyan transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-synthwave-neon-cyan/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-synthwave-neon-cyan" />
          ) : (
            <Menu className="w-6 h-6 text-synthwave-neon-cyan" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-synthwave-dark border-t border-synthwave-neon-cyan/20 px-3 sm:px-6 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-paragraph text-sm text-synthwave-light hover:text-synthwave-neon-cyan transition-colors duration-300 py-2"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
