import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    setEmail('');
    alert('Thank you for subscribing to our knife care tips newsletter!');
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-secondary-foreground"
                  strokeWidth="2"
                >
                  <path d="M3 12L21 2L18 12L21 22L3 12Z" />
                </svg>
              </div>
              <span className="font-heading text-xl text-secondary">Mr. KNIFE GUY</span>
            </div>
            <p className="font-paragraph text-sm text-light-gray mb-6">
              Expert hand knife sharpening services with artisan precision and exceptional customer care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/store"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/our-story"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg text-background mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <a
                  href="mailto:info@mrknifeguy.com"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  info@mrknifeguy.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <a
                  href="tel:+15551234567"
                  className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
                >
                  (555) 123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/giveaway"
                className="font-paragraph text-sm text-secondary hover:underline"
              >
                Enter Our Knife Giveaway →
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg text-background mb-6">Knife Care Tips</h3>
            <p className="font-paragraph text-sm text-light-gray mb-4">
              Subscribe for expert tips on knife maintenance and care.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-light-gray text-background placeholder:text-light-gray"
              />
              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-light-gray/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-light-gray">
              © {new Date().getFullYear()} Mr. KNIFE GUY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-paragraph text-sm text-light-gray hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
