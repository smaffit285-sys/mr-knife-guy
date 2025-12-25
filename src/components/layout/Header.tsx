import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/store' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Blog', path: '/blog' },
    { name: 'Knife Giveaway', path: '/giveaway' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-light-gray">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-8 h-8 text-primary-foreground"
                strokeWidth="2"
              >
                <path d="M3 12L21 2L18 12L21 22L3 12Z" />
              </svg>
            </div>
            <span className="font-heading text-2xl text-primary">Mr. KNIFE GUY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA and Cart */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph"
            >
              <Link to="/contact">Book Service</Link>
            </Button>
            <MiniCart cartIconClassName="relative" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <MiniCart cartIconClassName="relative" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-light-gray">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-base py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-primary font-medium'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph mt-4"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Service
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
