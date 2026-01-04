import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, Clock, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: '',
    referralSource: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      'Thank you for contacting Mr. KNIFE GUY! We will respond to your inquiry within 24 hours.'
    );
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceInterest: '',
      referralSource: '',
      message: '',
    });
  };

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
              Get in Touch
            </h1>
            <p className="font-paragraph text-xl text-light-gray">
              Ready to experience artisan hand sharpening? We're here to answer your questions and
              schedule your service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-foreground mb-6">Send Us a Message</h2>
              <p className="font-paragraph text-lg text-dark-gray mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-paragraph text-base text-foreground mb-2 block">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="font-paragraph text-base text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="font-paragraph text-base text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="font-paragraph text-base text-foreground mb-2 block">
                    Service Interest *
                  </label>
                  <Select
                    value={formData.serviceInterest}
                    onValueChange={(value) =>
                      setFormData({ ...formData, serviceInterest: value })
                    }
                    required
                  >
                    <SelectTrigger id="serviceInterest">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="white-glove">Door-to-Door White Glove Service</SelectItem>
                      <SelectItem value="education">Knife Maintenance Education</SelectItem>
                      <SelectItem value="sales">Concierge Knife Sales</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="referralSource" className="font-paragraph text-base text-foreground mb-2 block">
                    How did you hear about us?
                  </label>
                  <Select
                    value={formData.referralSource}
                    onValueChange={(value) => setFormData({ ...formData, referralSource: value })}
                  >
                    <SelectTrigger id="referralSource">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Friend/Family Referral</SelectItem>
                      <SelectItem value="chef">Chef Recommendation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="font-paragraph text-base text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your knife sharpening needs or ask any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-lg py-6 h-auto"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-foreground mb-6">Contact Information</h2>
              <p className="font-paragraph text-lg text-dark-gray mb-8">
                Reach out to us directly or visit during our service hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@mrknifeguy.com"
                      className="font-paragraph text-base text-dark-gray hover:text-primary transition-colors"
                    >
                      info@mrknifeguy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+16505338361"
                      className="font-paragraph text-base text-dark-gray hover:text-primary transition-colors"
                    >
                      650 533 8361
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Hours of Operation</h3>
                    <div className="font-paragraph text-base text-dark-gray space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Service Area</h3>
                    <p className="font-paragraph text-base text-dark-gray">
                      Door-to-door service available throughout the greater metropolitan area.
                      Contact us to confirm coverage in your location.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-foreground rounded-lg p-8">
                <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                  Follow Us
                </h3>
                <p className="font-paragraph text-base text-light-gray mb-6">
                  Stay connected for knife care tips, behind-the-scenes content, and special offers.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-secondary-foreground" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-secondary-foreground" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-secondary-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-4">Our Service Area</h2>
            <p className="font-paragraph text-xl text-light-gray max-w-3xl mx-auto">
              We provide door-to-door white glove service throughout the region
            </p>
          </motion.div>

          <motion.div
            className="bg-dark-gray rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video flex items-center justify-center">
              <MapPin className="w-20 h-20 text-light-gray" />
            </div>
          </motion.div>
          <p className="font-paragraph text-sm text-light-gray text-center mt-4">
            Map integration placeholder - Service area coverage details available upon request
          </p>
        </div>
      </section>
    </div>
  );
}
