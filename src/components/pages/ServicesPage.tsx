import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Truck, BookOpen, Award, Gift, HelpCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'white-glove',
      icon: Truck,
      title: 'Door-to-Door White Glove Service',
      description:
        'Experience the ultimate convenience with our premium pickup and delivery service. We handle your knives with meticulous care from start to finish.',
      benefits: [
        'Convenient pickup from your location',
        'Expert hand sharpening using traditional techniques',
        'Personalized care instructions for each blade',
        'Safe, secure delivery back to your door',
        'Inspection and consultation included',
      ],
      pricing: 'Starting at $8 per knife. Volume discounts available for 5+ knives.',
    },
    {
      id: 'education',
      icon: BookOpen,
      title: 'Knife Maintenance Educational Service',
      description:
        'Learn the art of proper knife care from an expert. Our educational sessions empower you to maintain your blades like a professional.',
      benefits: [
        'One-on-one personalized instruction',
        'Proper honing and maintenance techniques',
        'Storage and handling best practices',
        'Blade inspection and assessment skills',
        'Lifetime access to educational resources',
      ],
      pricing:
        'Workshop sessions from $75. Private consultations available. Group rates for culinary teams.',
    },
    {
      id: 'sales',
      icon: Award,
      title: 'Concierge Knife Sales',
      description:
        'Discover the perfect knife for your needs with expert guidance. We offer a curated selection of premium blades with personalized recommendations.',
      benefits: [
        'Curated selection of artisan-approved brands',
        'Personalized recommendations based on your cooking style',
        'Expert guidance on knife selection',
        'Competitive pricing on premium knives',
        'Complimentary sharpening with purchase',
      ],
      pricing: 'Premium knives from $150. Consultation included with every purchase.',
    },
    {
      id: 'referral',
      icon: Gift,
      title: 'Referral and Testimonial Discounts',
      description:
        'Share the experience and save! We reward our loyal customers who help spread the word about artisan knife care.',
      benefits: [
        '20% off your next service for each successful referral',
        '15% discount for submitting a written testimonial',
        '25% off for video testimonials',
        'Stackable discounts for multiple referrals',
        'Exclusive offers for repeat customers',
      ],
      pricing: 'Earn discounts on all services. No limit on referral rewards.',
    },
  ];

  const faqs = [
    {
      question: 'How does hand sharpening differ from machine methods?',
      answer:
        'Hand sharpening allows for precise control of the blade angle and edge geometry, resulting in a superior, longer-lasting edge. Machine sharpening can remove too much metal and create inconsistent bevels. Our artisan approach ensures each knife receives individual attention and the perfect edge for its specific use.',
    },
    {
      question: 'What knives qualify for white glove service?',
      answer:
        'We sharpen all types of kitchen knives, including chef knives, santoku, paring knives, bread knives, cleavers, and specialty blades. We also service pocket knives, hunting knives, and other edge tools. If you have a blade that needs sharpening, we can help.',
    },
    {
      question: 'How long does the sharpening process take?',
      answer:
        'For white glove service, typical turnaround is 2-3 business days. Rush service is available for an additional fee. If you prefer to wait, we can often sharpen your knives while you observe the process, which typically takes 10-15 minutes per knife.',
    },
    {
      question: 'Do you offer services for restaurants and professional kitchens?',
      answer:
        'Absolutely! We provide specialized services for culinary professionals, including scheduled maintenance programs, bulk discounts, and on-site sharpening for larger operations. We also offer educational workshops for kitchen staff.',
    },
    {
      question: 'What if my knife is damaged or has chips in the blade?',
      answer:
        'We can repair most blade damage, including chips, bent tips, and broken edges. During our inspection, we\'ll assess the damage and provide recommendations. In most cases, we can restore your knife to excellent working condition.',
    },
    {
      question: 'How often should I have my knives professionally sharpened?',
      answer:
        'For home cooks, professional sharpening 2-4 times per year is typical, depending on usage. Professional chefs may need monthly service. We\'ll teach you proper honing techniques to maintain the edge between sharpenings, extending the time between professional services.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl text-primary-foreground mb-6">
              Our Artisan Knife Services
            </h1>
            <p className="font-paragraph text-xl text-light-gray">
              Crafted with Precision and Care – Expert hand-sharpening services that restore your
              blades to perfection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="font-heading text-4xl text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="font-paragraph text-lg text-dark-gray mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="font-heading text-xl text-foreground mb-4">Benefits:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg
                                className="w-4 h-4 text-secondary-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="font-paragraph text-base text-dark-gray">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-light-gray/30 rounded-lg p-6 mb-6">
                      <h3 className="font-heading text-lg text-foreground mb-2">Pricing:</h3>
                      <p className="font-paragraph text-base text-dark-gray">{service.pricing}</p>
                    </div>

                    <Button
                      asChild
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph"
                    >
                      <Link to="/contact">Book This Service</Link>
                    </Button>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-foreground rounded-lg p-12 flex items-center justify-center h-96">
                      <Icon className="w-32 h-32 text-secondary" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shop Integration Teaser */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-6">
              Premium Knives & Sharpening Packages
            </h2>
            <p className="font-paragraph text-xl text-light-gray mb-8">
              Browse our curated selection of artisan-approved knives and service packages. Each
              purchase includes personalized consultation and complimentary sharpening.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-lg px-8 py-6 h-auto"
            >
              <Link to="/store">Shop Premium Knives</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-5xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-paragraph text-xl text-dark-gray max-w-3xl mx-auto">
              Everything you need to know about our artisan knife sharpening services
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-light-gray rounded-lg px-6"
                >
                  <AccordionTrigger className="font-heading text-lg text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-paragraph text-base text-dark-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-paragraph text-base text-dark-gray mb-4">
              Still have questions? We're here to help.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-paragraph"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
