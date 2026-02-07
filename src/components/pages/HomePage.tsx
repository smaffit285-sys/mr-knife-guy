'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Check, X } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSticky, setIsSticky] = useState(false);

  // Testimonials data
  const testimonials = [
    {
      name: 'Marcus T.',
      quote: 'Best knife sharpening in Miami. Razor sharp.',
      rating: 5,
    },
    {
      name: 'Elena R.',
      quote: 'Professional, fast, and my knives have never been better.',
      rating: 5,
    },
    {
      name: 'David K.',
      quote: 'Worth every penny. Elite service.',
      rating: 5,
    },
    {
      name: 'Sofia M.',
      quote: 'The difference is night and day. Highly recommend.',
      rating: 5,
    },
    {
      name: 'James P.',
      quote: 'Precision craftsmanship at its finest.',
      rating: 5,
    },
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sticky CTA on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSliderChange = (e) => {
    setSliderPosition(parseFloat(e.target.value));
  };

  return (
    <div className="bg-synthwave-midnight text-synthwave-light min-h-screen overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-synthwave-neon-cyan/10 via-transparent to-synthwave-neon-pink/10" />
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-synthwave-neon-cyan" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[120rem] w-full px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block mb-6">
              <div className="text-6xl md:text-8xl font-bold tracking-tighter">
                <span className="text-synthwave-neon-cyan">MIAMI</span>
                <br />
                <span className="text-synthwave-neon-pink">KNIFE</span>
                <br />
                <span className="text-synthwave-neon-cyan">GUY</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-synthwave-neon-cyan mb-8 font-light tracking-wide"
          >
            ELITE KNIFE SHARPENING SERVICE
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-synthwave-light/80 mb-12 max-w-2xl mx-auto"
          >
            Factory-grade precision. Master craftsmanship. Zero heat damage.
            <br />
            Your blades deserve excellence.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-synthwave-neon-pink text-synthwave-midnight font-bold text-lg rounded-lg hover:bg-synthwave-neon-cyan hover:text-synthwave-midnight transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            SCHEDULE NOW
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown className="w-8 h-8 text-synthwave-neon-cyan" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF TICKER ===== */}
      <section className="relative py-12 bg-synthwave-dark border-y border-synthwave-neon-cyan/30">
        <div className="max-w-[120rem] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-synthwave-neon-cyan">TRUSTED BY MIAMI'S ELITE</h2>
          </div>

          <div className="relative h-24 flex items-center justify-center overflow-hidden rounded-lg border border-synthwave-neon-pink/30 bg-synthwave-midnight/50">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8"
            >
              <p className="text-lg text-synthwave-light mb-2">"{testimonials[activeTestimonial].quote}"</p>
              <p className="text-synthwave-neon-cyan font-bold">{testimonials[activeTestimonial].name}</p>
              <div className="flex justify-center gap-1 mt-2">
                {Array(testimonials[activeTestimonial].rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-synthwave-neon-pink">
                      ★
                    </span>
                  ))}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeTestimonial ? 'bg-synthwave-neon-pink w-8' : 'bg-synthwave-neon-cyan/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DULL VS SHARP PAIN POINT ===== */}
      <section className="py-20 px-6 max-w-[120rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-synthwave-neon-pink">DULL</span> VS{' '}
            <span className="text-synthwave-neon-cyan">SHARP</span>
          </h2>
          <p className="text-lg text-synthwave-light/70">The difference between mediocre and elite</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dull */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg border border-synthwave-neon-pink/50 bg-synthwave-dark/50 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-synthwave-neon-pink mb-6">DULL BLADES</h3>
            <ul className="space-y-4">
              {['Crushing instead of cutting', 'Food oxidizes faster', 'Dangerous slips & accidents', 'Wrist strain & fatigue', 'Ruined ingredients'].map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-synthwave-neon-pink flex-shrink-0 mt-1" />
                    <span className="text-synthwave-light/80">{item}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Sharp */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg border border-synthwave-neon-cyan/50 bg-synthwave-dark/50 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-synthwave-neon-cyan mb-6">SHARP BLADES</h3>
            <ul className="space-y-4">
              {['Precision cuts every time', 'Preserves food integrity', 'Safe, controlled cuts', 'Effortless technique', 'Professional results'].map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-synthwave-neon-cyan flex-shrink-0 mt-1" />
                    <span className="text-synthwave-light/80">{item}</span>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== MECHANIZED VS HAND COMPARISON ===== */}
      <section className="py-20 px-6 max-w-[120rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-synthwave-neon-pink">MECHANIZED</span> VS{' '}
            <span className="text-synthwave-neon-cyan">HAND-CRAFTED</span>
          </h2>
          <p className="text-lg text-synthwave-light/70">Why master sharpening beats factory machines</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mechanized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg border border-synthwave-neon-pink/50 bg-synthwave-dark/50 backdrop-blur"
          >
            <h3 className="text-2xl font-bold text-synthwave-neon-pink mb-6">STANDARD SHARPENING</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-synthwave-neon-cyan font-bold mb-2">Factory-Grade Abrasives</p>
                <p className="text-synthwave-light/80">Professional-grade stones & compounds used by master craftsmen</p>
              </div>
              <div>
                <p className="text-synthwave-neon-cyan font-bold mb-2">Master Skill</p>
                <p className="text-synthwave-light/80">Years of precision training & blade expertise</p>
              </div>
              <div>
                <p className="text-synthwave-neon-cyan font-bold mb-2">Zero Heat Damage</p>
                <p className="text-synthwave-light/80">Hand-controlled technique preserves blade integrity</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-synthwave-neon-cyan">$35/knife</div>
          </motion.div>

          {/* Hand-Crafted */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-lg border border-synthwave-neon-cyan/50 bg-synthwave-dark/50 backdrop-blur relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-synthwave-neon-pink text-synthwave-midnight text-xs font-bold rounded">
              LUXURY
            </div>
            <h3 className="text-2xl font-bold text-synthwave-neon-cyan mb-6">STONESHARP HERITAGE</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-synthwave-neon-pink font-bold mb-2">Artisanal Technique</p>
                <p className="text-synthwave-light/80">Traditional hand-honing with premium Japanese stones</p>
              </div>
              <div>
                <p className="text-synthwave-neon-pink font-bold mb-2">Bespoke Finishing</p>
                <p className="text-synthwave-light/80">Custom edge profiles tailored to your blade</p>
              </div>
              <div>
                <p className="text-synthwave-neon-pink font-bold mb-2">Heritage Service</p>
                <p className="text-synthwave-light/80">Consultation & blade assessment included</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-synthwave-neon-pink">$60/hr</div>
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section id="pricing" className="py-20 px-6 max-w-[120rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">MIAMI KNIFE CLUB</h2>
          <p className="text-lg text-synthwave-light/70">Membership pricing for elite knife enthusiasts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'STARTER',
              price: '$99',
              period: '/month',
              features: ['4 knife sharpening sessions', 'Priority scheduling', 'Email support', 'Member discount: 10%'],
              color: 'synthwave-neon-cyan',
            },
            {
              name: 'PROFESSIONAL',
              price: '$199',
              period: '/month',
              features: ['Unlimited sharpening', 'Priority scheduling', '24/7 phone support', 'Member discount: 20%', 'Free maintenance check'],
              color: 'synthwave-neon-pink',
              featured: true,
            },
            {
              name: 'ELITE',
              price: '$349',
              period: '/month',
              features: ['Unlimited sharpening + honing', 'White-glove service', 'Dedicated concierge', 'Member discount: 30%', 'Free blade assessment', 'Custom edge profiles'],
              color: 'synthwave-neon-cyan',
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-8 rounded-lg border-2 backdrop-blur transition-all ${
                plan.featured
                  ? `border-${plan.color} bg-synthwave-dark/80 shadow-lg shadow-${plan.color}/50 scale-105`
                  : `border-${plan.color}/50 bg-synthwave-dark/50`
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 text-${plan.color}`}>{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold text-${plan.color}`}>{plan.price}</span>
                <span className="text-synthwave-light/60">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 text-${plan.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-synthwave-light/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.featured
                    ? `bg-${plan.color} text-synthwave-midnight hover:shadow-lg hover:shadow-${plan.color}/50`
                    : `border-2 border-${plan.color} text-${plan.color} hover:bg-${plan.color}/10`
                }`}
              >
                JOIN NOW
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BEFORE & AFTER SLIDER ===== */}
      <section className="py-20 px-6 max-w-[120rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">TRANSFORMATION</h2>
          <p className="text-lg text-synthwave-light/70">See the difference our expertise makes</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-synthwave-neon-cyan/50">
            {/* Before image */}
            <div className="absolute inset-0 bg-gradient-to-r from-synthwave-neon-pink/20 to-transparent">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-synthwave-neon-pink font-bold text-xl mb-2">BEFORE</p>
                  <p className="text-synthwave-light/60">Dull, damaged edge</p>
                </div>
              </div>
            </div>

            {/* After image overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-synthwave-neon-cyan/20"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-synthwave-neon-cyan font-bold text-xl mb-2">AFTER</p>
                  <p className="text-synthwave-light/60">Razor-sharp precision</p>
                </div>
              </div>
            </div>

            {/* Slider handle */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
            />

            {/* Visual slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-synthwave-light cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-synthwave-neon-cyan rounded-full flex items-center justify-center shadow-lg shadow-synthwave-neon-cyan/50">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-synthwave-midnight rounded-full" />
                  <div className="w-1 h-3 bg-synthwave-midnight rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY CTA ===== */}
      {isSticky && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-synthwave-midnight/95 backdrop-blur border-t border-synthwave-neon-cyan/30 py-4 px-6"
        >
          <div className="max-w-[120rem] mx-auto flex items-center justify-between">
            <div>
              <p className="text-synthwave-neon-cyan font-bold">Ready to elevate your blades?</p>
              <p className="text-synthwave-light/70 text-sm">Join Miami's elite knife enthusiasts</p>
            </div>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-synthwave-neon-pink text-synthwave-midnight font-bold rounded-lg hover:bg-synthwave-neon-cyan transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              SCHEDULE NOW
            </a>
          </div>
        </motion.div>
      )}

      {/* Footer spacing for sticky CTA */}
      {isSticky && <div className="h-20" />}

      {/* ===== FOOTER ===== */}
      <footer className="bg-synthwave-dark border-t border-synthwave-neon-cyan/30 py-12 px-6">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-synthwave-neon-cyan font-bold text-lg mb-4">MIAMI KNIFE GUY</h3>
              <p className="text-synthwave-light/70">Elite knife sharpening service for Miami's discerning professionals.</p>
            </div>
            <div>
              <h4 className="text-synthwave-neon-pink font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-synthwave-light/70">
                <li>
                  <a href="#pricing" className="hover:text-synthwave-neon-cyan transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-synthwave-neon-cyan transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-synthwave-neon-cyan transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-synthwave-neon-cyan font-bold mb-4">FOLLOW</h4>
              <ul className="space-y-2 text-synthwave-light/70">
                <li>
                  <a href="#" className="hover:text-synthwave-neon-pink transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-synthwave-neon-pink transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-synthwave-neon-pink transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-synthwave-neon-cyan/30 pt-8 text-center text-synthwave-light/50">
            <p>&copy; 2026 Miami Knife Guy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
