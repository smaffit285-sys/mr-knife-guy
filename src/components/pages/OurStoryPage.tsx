import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Sparkles, Target, Heart, Award, BookOpen } from 'lucide-react';

export default function OurStoryPage() {
  const timeline = [
    {
      year: 'Childhood',
      title: 'The Spark of Fascination',
      description:
        'It began with curiosity – watching family knives transform from dull to sharp, experimenting with ancient techniques like flint knapping with obsidian. A childhood fascination that would become a lifelong passion.',
      icon: Sparkles,
    },
    {
      year: 'Early Years',
      title: 'Learning Through Dedication',
      description:
        'Armed with traditional tools like Arkansas whetstones and diamond sharpeners passed down from a grandfather, countless hours were spent mastering the craft through trial and error, learning the nuances of each blade.',
      icon: BookOpen,
    },
    {
      year: 'Professional Journey',
      title: 'Overcoming Challenges',
      description:
        'In professional settings, the commitment to excellence and attention to detail sometimes created conflicts. But refusing to compromise on quality over quantity built a reputation for superior, hand-crafted edges.',
      icon: Target,
    },
    {
      year: 'Today',
      title: 'Earning Trust',
      description:
        'Through dedication and artisan-level results, Mr. KNIFE GUY has earned the trust of high-profile chefs and discerning home cooks. Every blade sharpened is a testament to resilience and rebellion against mediocrity.',
      icon: Award,
    },
  ];

  const values = [
    {
      title: 'Quality Over Quantity',
      description:
        'Every knife receives individual attention and the time it deserves. We never rush the process or compromise on results.',
      icon: Award,
    },
    {
      title: 'Artisan Craftsmanship',
      description:
        'Hand sharpening is an art form. We use traditional techniques refined over years to deliver superior edges.',
      icon: Sparkles,
    },
    {
      title: 'Customer Education',
      description:
        'We believe in empowering our customers with knowledge. Understanding proper knife care extends the life of your investment.',
      icon: BookOpen,
    },
    {
      title: 'Exceptional Service',
      description:
        'From white glove delivery to personalized consultations, we treat every customer and every blade with respect and care.',
      icon: Heart,
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
              The Journey of Mr. KNIFE GUY
            </h1>
            <p className="font-paragraph text-xl text-light-gray">
              A Lifelong Passion for Artisan Blade Craftsmanship
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://static.wixstatic.com/media/37d64c_c1135ce9665345afb4772af44f29dee0~mv2.png?originWidth=768&originHeight=576"
                alt="Traditional knife sharpening tools and whetstones"
                className="w-full h-auto rounded-lg"
                width={800}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-foreground mb-6">
                From Curiosity to Craftsmanship
              </h2>
              <p className="font-paragraph text-lg text-dark-gray mb-6">
                What started as a childhood fascination with the transformation of dull blades into
                sharp, precise tools has evolved into a dedication to artisan craftsmanship that
                defines every service we provide.
              </p>
              <p className="font-paragraph text-lg text-dark-gray mb-6">
                The journey wasn't always easy. It required resilience, countless hours of practice,
                and an unwavering commitment to quality over convenience. But through dedication and
                a refusal to accept mediocrity, Mr. KNIFE GUY has become synonymous with superior
                hand-sharpened edges.
              </p>
              <p className="font-paragraph text-lg text-dark-gray">
                Today, we're proud to serve both home cooks and professional chefs who demand the
                best for their blades. Every knife tells a story, and we're honored to be part of
                yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-4">The Journey</h2>
            <p className="font-paragraph text-xl text-light-gray max-w-3xl mx-auto">
              Milestones that shaped our commitment to artisan excellence
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <span className="font-heading text-lg text-secondary">{item.year}</span>
                    </div>
                    <h3 className="font-heading text-3xl text-primary-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="font-paragraph text-lg text-light-gray">{item.description}</p>
                  </div>

                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="bg-background/5 border border-light-gray/20 rounded-lg p-12 flex items-center justify-center h-64">
                      <Icon className="w-24 h-24 text-secondary" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-4">Our Core Values</h2>
            <p className="font-paragraph text-xl text-dark-gray max-w-3xl mx-auto">
              The principles that guide every blade we sharpen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-background border border-light-gray rounded-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-4">{value.title}</h3>
                  <p className="font-paragraph text-base text-dark-gray">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Techniques */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-primary-foreground mb-6">
                Traditional Tools, Modern Excellence
              </h2>
              <p className="font-paragraph text-lg text-light-gray mb-6">
                We honor the traditional methods passed down through generations while applying
                modern understanding of metallurgy and blade geometry.
              </p>
              <p className="font-paragraph text-lg text-light-gray mb-6">
                From Arkansas whetstones to diamond sharpeners, each tool in our collection has been
                carefully selected and mastered. We don't rely on machines to do the work – every
                edge is crafted by hand, with precision and care.
              </p>
              <p className="font-paragraph text-lg text-light-gray">
                This combination of time-honored techniques and expert knowledge ensures that every
                knife receives the perfect edge for its intended use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://static.wixstatic.com/media/37d64c_90546bc2352649e8b8d57ee17d26d419~mv2.png?originWidth=768&originHeight=576"
                alt="Collection of traditional knife sharpening tools and whetstones"
                className="w-full h-auto rounded-lg"
                width={800}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Experience the Artisan Difference
            </h2>
            <p className="font-paragraph text-xl text-light-gray mb-8">
              Let us bring the same dedication, expertise, and passion to your knives. Join our
              community of satisfied customers who trust Mr. KNIFE GUY for superior hand sharpening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
