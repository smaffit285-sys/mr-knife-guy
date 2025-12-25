import { motion } from 'framer-motion';
import { Star, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { CustomerTestimonials } from '@/entities';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<CustomerTestimonials[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { items } = await BaseCrudService.getAll<CustomerTestimonials>(
          'customertestimonials'
        );
        setTestimonials(items);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const trustBadges = [
    {
      icon: Award,
      title: 'Trusted by Professionals',
      description: 'Preferred by chefs and culinary experts',
    },
    {
      icon: Users,
      title: '500+ Satisfied Customers',
      description: 'Growing community of knife enthusiasts',
    },
    {
      icon: TrendingUp,
      title: '98% Satisfaction Rate',
      description: 'Consistently exceptional service',
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
              Customer Testimonials
            </h1>
            <p className="font-paragraph text-xl text-light-gray">
              Hear from home cooks and professional chefs who trust Mr. KNIFE GUY for artisan hand
              sharpening
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-background border-b border-light-gray">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">{badge.title}</h3>
                  <p className="font-paragraph text-base text-dark-gray">{badge.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-dark-gray">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  className="bg-background border border-light-gray rounded-lg p-8 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Customer Photo */}
                  {testimonial.customerPhoto && (
                    <div className="mb-6">
                      <Image
                        src={testimonial.customerPhoto}
                        alt={testimonial.customerName || 'Customer'}
                        className="w-20 h-20 rounded-full object-cover mx-auto"
                        width={80}
                      />
                    </div>
                  )}

                  {/* Star Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.starRating || 5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-paragraph text-base text-dark-gray mb-6 italic text-center">
                    "{testimonial.quote}"
                  </p>

                  {/* Customer Name */}
                  <p className="font-heading text-lg text-foreground text-center mb-2">
                    {testimonial.customerName}
                  </p>

                  {/* Source Platform */}
                  {testimonial.sourcePlatform && (
                    <p className="font-paragraph text-sm text-dark-gray text-center">
                      via {testimonial.sourcePlatform}
                    </p>
                  )}

                  {/* Featured Badge */}
                  {testimonial.isFeatured && (
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-secondary/10 text-secondary font-paragraph text-xs px-3 py-1 rounded-full">
                        Featured Review
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-4">
              Video Testimonials
            </h2>
            <p className="font-paragraph text-xl text-light-gray max-w-3xl mx-auto">
              Watch our customers share their experiences with artisan hand sharpening
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((index) => (
              <motion.div
                key={index}
                className="bg-background/5 border border-light-gray/20 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-video bg-dark-gray flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-light-gray"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="font-paragraph text-base text-light-gray">
                    Customer video testimonial placeholder - Coming soon
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentive Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-secondary-foreground mb-6">
              Share Your Experience & Save
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/90 mb-8">
              We value your feedback! Submit a testimonial and receive 15% off your next service.
              Video testimonials earn 25% off. Refer a friend and both of you save 20%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-primary-foreground hover:bg-foreground/90 font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Link to="/contact">Submit Your Testimonial</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Link to="/services#referral">Learn About Referral Rewards</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="font-paragraph text-xl text-dark-gray mb-8">
              Join hundreds of satisfied customers who trust Mr. KNIFE GUY for artisan hand
              sharpening
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact">Book Your Service Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
