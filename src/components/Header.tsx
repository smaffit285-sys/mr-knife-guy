import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Before & After', href: '#before-after' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-synthwave-midnight/95 backdrop-blur border-b border-synthwave-neon-cyan/20">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Image
            src="https://static.wixstatic.com/media/37d64c_c26d92e0c01a495caeb57ac548ba7b8f~mv2.jpg"
            alt="Miami Knife Guy Logo"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full"
          />
          <span className="font-heading text-2xl font-bold bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan bg-clip-text text-transparent hidden sm:inline">
            MIAMI KNIFE GUY
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-synthwave-light hover:text-synthwave-neon-cyan transition-colors font-paragraph text-sm"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-synthwave-neon-cyan"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-synthwave-dark border-t border-synthwave-neon-cyan/20 px-4 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-synthwave-light hover:text-synthwave-neon-cyan transition-colors font-paragraph"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
