// HPI 1.6-G
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@/components/ui/image';
import { CheckCircle, Award, BookOpen, Truck, Star, ArrowRight, Quote, ChevronDown } from 'lucide-react';
import EducationalResourcesSection from '@/components/EducationalResourcesSection';

// --- 1. DATA FIDELITY PROTOCOL: CANONICAL DATA SOURCES ---
// Preserved exactly from original source
const SLIDES = [
  {
    id: 'slide-1',
    alt: 'Artisan hand sharpening a knife with precision',
  },
  {
    id: 'slide-2',
    alt: 'Beautifully restored chef knives with razor-sharp edges',
  },
  {
    id: 'slide-3',
    alt: 'Door-to-door white glove knife service delivery',
  },
  {
    id: 'slide-4',
    alt: 'Professional knife sharpening tools and whetstones',
  },
  {
    id: 'slide-5',
    alt: 'Satisfied customer receiving expertly sharpened knives',
  },
  {
    id: 'slide-6',
    alt: 'Close-up of hand-sharpened blade edge showing precision craftsmanship',
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    quote:
      "Sean was incredibly knowledgeable and gave me a great lesson in knife ownership and use – I thought I'd ruined my Shun knives, but he restored them perfectly!",
    rating: 5,
  },
  {
    name: 'Michael T.',
    quote:
      'My blade was sharpened by Sean in no time at all – incredibly fast and the edge is flawless!',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    quote:
      'Sean let me watch the hand-sharpening process; his attention to detail and passion for craftsmanship turned my dull knives into razor-sharp works of art.',
    rating: 5,
  },
  {
    name: 'Chef David R.',
    quote:
      'As a professional chef, I demand the best. Sean delivers superior edges that I trust in my kitchen every day. Hand sharpening makes all the difference.',
    rating: 5,
  },
  {
    name: 'Emily K.',
    quote:
      'The personalized advice on knife care was invaluable. Sean taught me proper techniques that have extended the life of my entire collection.',
    rating: 5,
  },
  {
    name: 'Robert H.',
    quote:
      'I was skeptical about hand sharpening versus machine methods, but after seeing the results, I\'m a believer. The quality is unmatched.',
    rating: 5,
  },
];

const SERVICES = [
  {
    title: 'Door-to-Door White Glove Service',
    description:
      'Convenient pickup, expert hand sharpening, and delivery with personalized handling and care instructions.',
    icon: Truck,
    link: '/services#white-glove',
  },
  {
    title: 'Knife Maintenance Education',
    description:
      'Learn proper care, honing techniques, and storage methods to extend the life of your blades.',
    icon: BookOpen,
    link: '/services#education',
  },
  {
    title: 'Concierge Knife Sales',
    description:
      'Curated selection of premium knives with personalized recommendations based on your needs.',
    icon: Award,
    link: '/services#sales',
  },
];

// --- 2. UTILITY COMPONENTS FOR MOTION & LAYOUT ---

// Intersection Observer Wrapper for Scroll Reveals
type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'scale-up';
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  className, 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  // Map animation types to initial CSS classes
  const getInitialClass = () => {
    switch(animation) {
        case 'fade-in': return 'opacity-0 transition-opacity duration-1000 ease-out';
        case 'slide-in-right': return 'opacity-0 translate-x-10 transition-all duration-1000 ease-out';
        case 'scale-up': return 'opacity-0 scale-95 transition-all duration-1000 ease-out';
        case 'fade-up': default: return 'opacity-0 translate-y-10 transition-all duration-1000 ease-out';
    }
  };

  return (
    <div ref={ref} className={`${className || ''} ${getInitialClass()} group-visible`}>
      <style>{`
        .is-visible { opacity: 1 !important; transform: none !important; }
      `}</style>
      {children}
    </div>
  );
};

// Parallax Image Component
const ParallaxImage = ({ src, alt, className, speed = 0.5 }: { src: string, alt: string, className?: string, speed?: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
                <Image src={src} alt={alt} width={1200} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
};


// --- 3. MAIN COMPONENT ---

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Hero Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-clip font-paragraph selection:bg-secondary selection:text-white">
      
      {/* --- HERO SECTION: IMMERSIVE CINEMATIC --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
              <Image
                src={'https://static.wixstatic.com/media/37d64c_1ca0632a987a4e3bb639e08468012d9c~mv2.png?originWidth=1920&originHeight=1024'}
                alt={SLIDES[currentSlide].alt}
                width={1920}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block py-2 px-3 border border-secondary/50 rounded-full text-secondary text-sm tracking-[0.2em] uppercase backdrop-blur-sm bg-black/20">
              <div>Artisan Craftsmanship</div>
              <div className="text-xs tracking-[0.15em]">Since 2009</div>
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight leading-[0.9]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 italic font-serif">
              Redefined
            </span>
          </motion.h1>

          <motion.p
            className="font-paragraph text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Hand-Sharpened Knives Delivered with Care by Mr. KNIFE GUY. 
            Restoring your blades to perfection, trusted by home cooks and professional chefs alike.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-10 py-7 text-lg tracking-wide transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Schedule White Glove Service</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black rounded-none px-10 py-7 text-lg tracking-wide bg-transparent backdrop-blur-sm"
            >
              <Link to="/our-story">Discover Our Story</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
        >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* --- PHILOSOPHY SECTION: MINIMALIST TEXT --- */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[100rem]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                    <AnimatedElement animation="fade-up">
                        <h2 className="font-heading text-5xl md:text-6xl text-foreground leading-tight mb-8">
                            The Edge of <br/>
                            <span className="text-secondary italic font-serif">Perfection</span>
                        </h2>
                        <div className="w-24 h-1 bg-secondary mb-8" />
                    </AnimatedElement>
                </div>
                <div className="lg:col-span-7">
                    <AnimatedElement animation="fade-up" delay={200}>
                        <p className="text-xl md:text-2xl text-dark-gray leading-relaxed font-light">
                            "A dull knife is a dangerous tool. A sharp knife is an extension of the hand."
                        </p>
                        <p className="mt-6 text-lg text-dark-gray/80 leading-relaxed">
                            We believe that sharpening is not just maintenance—it is an art form. 
                            Unlike machine grinding that eats away at your blade, our artisan hand-sharpening 
                            techniques preserve the integrity of the steel, creating an edge that is 
                            finer, stronger, and longer-lasting.
                        </p>
                    </AnimatedElement>
                </div>
            </div>
        </div>
      </section>

      {/* --- SERVICES SECTION: STICKY LAYOUT --- */}
      <section className="bg-foreground text-background py-32 relative">
        <div className="container mx-auto px-6 max-w-[100rem]">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Sticky Header */}
                <div className="lg:w-1/3">
                    <div className="sticky top-32">
                        <AnimatedElement>
                            <span className="text-secondary text-sm tracking-widest uppercase font-bold mb-4 block">Our Expertise</span>
                            <h2 className="font-heading text-5xl md:text-6xl text-white mb-6">
                                Artisan <br/> Services
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-md">
                                Comprehensive knife care solutions crafted with precision. From our door to yours.
                            </p>
                            <Button asChild variant="link" className="text-secondary p-0 hover:text-white transition-colors group">
                                <Link to="/services" className="flex items-center gap-2 text-lg">
                                    View Full Service Menu <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </AnimatedElement>
                    </div>
                </div>

                {/* Scrollable Cards */}
                <div className="lg:w-2/3 flex flex-col gap-8">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedElement key={index} delay={index * 100} animation="fade-up">
                                <div className="group relative bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-all duration-500">
                                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                        <Icon className="w-16 h-16 text-secondary" />
                                    </div>
                                    <h3 className="font-heading text-3xl text-white mb-4 group-hover:text-secondary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg mb-8 max-w-xl">
                                        {service.description}
                                    </p>
                                    <div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-secondary/50 transition-colors" />
                                    <Link to={service.link} className="inline-flex items-center text-white text-sm tracking-widest uppercase hover:text-secondary transition-colors">
                                        Learn More
                                    </Link>
                                </div>
                            </AnimatedElement>
                        );
                    })}
                </div>
            </div>
        </div>
      </section>

      {/* --- VISUAL BREATHER: PARALLAX IMAGE --- */}
      <section className="h-[80vh] w-full relative overflow-hidden">
        <ParallaxImage 
            src="https://static.wixstatic.com/media/37d64c_2ad8bedb0e4f448b98a3f5b68ed60836~mv2.png?originWidth=1152&originHeight=960" 
            alt="Close up of knife edge" 
            className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <AnimatedElement animation="scale-up">
                <div className="bg-white/90 backdrop-blur-md p-12 max-w-2xl text-center mx-4 border border-white/50 shadow-2xl">
                    <h3 className="font-heading text-3xl text-foreground mb-4">"The sharpest tool in the shed."</h3>
                    <p className="font-paragraph text-dark-gray">
                        Experience the difference of a truly sharp blade. It changes everything about how you cook.
                    </p>
                </div>
            </AnimatedElement>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 max-w-[100rem]">
            <div className="text-center mb-20">
                <AnimatedElement>
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Why Choose Mr. KNIFE GUY?</h2>
                    <div className="w-16 h-1 bg-secondary mx-auto" />
                </AnimatedElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                    { icon: CheckCircle, title: "Meticulous Hand Sharpening", desc: "For lasting edges that outperform machine methods." },
                    { icon: BookOpen, title: "Personalized Education", desc: "Learn proper techniques to maintain your investment." },
                    { icon: Award, title: "Concierge Sales", desc: "Curated selection with personalized recommendations." },
                    { icon: Truck, title: "White Glove Convenience", desc: "Pickup and delivery with exceptional care." }
                ].map((item, i) => (
                    <AnimatedElement key={i} delay={i * 100} animation="fade-up">
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <item.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
                            <p className="text-dark-gray leading-relaxed">{item.desc}</p>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: HORIZONTAL SCROLL / MASONRY FEEL --- */}
      <section className="py-32 bg-light-gray/30 border-y border-dark-gray/10">
        <div className="container mx-auto px-6 max-w-[100rem]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <AnimatedElement>
                    <h2 className="font-heading text-4xl md:text-5xl text-foreground">Trusted by <br/>Enthusiasts</h2>
                </AnimatedElement>
                <AnimatedElement delay={200}>
                    <Button asChild variant="outline" className="mt-6 md:mt-0 border-foreground text-foreground hover:bg-foreground hover:text-white rounded-none">
                        <Link to="/testimonials">Read All Reviews</Link>
                    </Button>
                </AnimatedElement>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TESTIMONIALS.slice(0, 3).map((t, i) => (
                    <AnimatedElement key={i} delay={i * 150} animation="fade-up">
                        <div className="bg-background p-8 shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                            <Quote className="absolute top-4 right-4 w-12 h-12 text-secondary/10 group-hover:text-secondary/20 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, starI) => (
                                    <Star key={starI} className="w-4 h-4 fill-secondary text-secondary" />
                                ))}
                            </div>
                            <p className="text-dark-gray text-lg italic mb-6 flex-grow leading-relaxed">"{t.quote}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <span className="font-heading text-sm font-bold text-foreground">{t.name}</span>
                            </div>
                        </div>
                    </AnimatedElement>
                ))}
            </div>
        </div>
      </section>

      {/* --- OUR STORY TEASER: SPLIT LAYOUT --- */}
      <section className="py-0 bg-foreground text-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative h-[50vh] lg:h-auto overflow-hidden">
                <ParallaxImage 
                    src="https://static.wixstatic.com/media/37d64c_df503b4dc33842f1ae488546ddabe7e9~mv2.png?originWidth=1152&originHeight=960" 
                    alt="Artisan working on a blade" 
                    className="w-full h-full absolute inset-0"
                />
            </div>
            <div className="flex items-center justify-center p-12 lg:p-24 bg-foreground">
                <AnimatedElement animation="slide-in-right">
                    <span className="text-secondary text-sm tracking-widest uppercase font-bold mb-4 block">The Artisan</span>
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-8">
                        A Lifelong Passion for <br/> Blade Craftsmanship
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        From childhood experiments with ancient techniques to earning the trust of professional chefs. 
                        Mr. KNIFE GUY is built on a foundation of dedication, resilience, and an uncompromising 
                        commitment to quality over quantity.
                    </p>
                    <Button asChild className="bg-secondary text-white hover:bg-secondary/90 rounded-none px-8 py-6">
                        <Link to="/our-story">Read The Full Story</Link>
                    </Button>
                </AnimatedElement>
            </div>
        </div>
      </section>

      {/* --- CTA & FORM SECTION --- */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-white shadow-2xl border border-gray-100 p-8 md:p-16 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

                <div className="text-center mb-12 relative z-10">
                    <AnimatedElement>
                        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Ready to Elevate Your Knives?</h2>
                        <p className="text-dark-gray text-lg">Limited appointments available – book now for artisan care.</p>
                    </AnimatedElement>
                </div>

                <AnimatedElement delay={200}>
                    <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Name</label>
                                <Input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-gray-50 border-gray-200 focus:border-secondary rounded-none h-12"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground uppercase tracking-wider">Email</label>
                                <Input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="bg-gray-50 border-gray-200 focus:border-secondary rounded-none h-12"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground uppercase tracking-wider">Message</label>
                            <Textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={4}
                                className="bg-gray-50 border-gray-200 focus:border-secondary rounded-none resize-none"
                                placeholder="Tell us about your knives..."
                            />
                        </div>
                        <div className="text-center pt-4">
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full md:w-auto bg-foreground text-white hover:bg-foreground/90 rounded-none px-12 py-6 text-lg tracking-wide"
                            >
                                Request Consultation
                            </Button>
                        </div>
                    </form>
                </AnimatedElement>
            </div>
        </div>
      </section>

      {/* --- GIVEAWAY BANNER --- */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 text-center relative z-10">
            <AnimatedElement animation="scale-up">
                <h2 className="font-heading text-4xl md:text-6xl mb-6">Win Premium Knives</h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
                    Enter now for your chance to win free sharpening sessions or premium cutlery. 
                    One winner selected monthly.
                </p>
                <Button
                    asChild
                    size="lg"
                    className="bg-white text-secondary hover:bg-gray-100 rounded-none px-12 py-8 text-xl font-bold tracking-wider shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                    <Link to="/giveaway">Enter The Giveaway</Link>
                </Button>
            </AnimatedElement>
        </div>
      </section>

      {/* --- EDUCATIONAL RESOURCES SECTION --- */}
      <EducationalResourcesSection />

    </div>
  );
}