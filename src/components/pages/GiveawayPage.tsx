import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Trophy, Star, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { PastGiveawayWinners } from '@/entities';

export default function GiveawayPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralName: '',
  });
  const [winners, setWinners] = useState<PastGiveawayWinners[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const { items } = await BaseCrudService.getAll<PastGiveawayWinners>(
          'pastgiveawaywinners'
        );
        setWinners(items);
      } catch (error) {
        console.error('Error fetching winners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      'Thank you for entering! You are now registered for our monthly knife giveaway. Good luck!'
    );
    setFormData({ name: '', email: '', referralName: '' });
  };

  const prizes = [
    {
      icon: Gift,
      title: 'Premium Knife Set',
      description: 'High-quality artisan-approved chef knives worth $500+',
    },
    {
      icon: Star,
      title: 'Free Sharpening Service',
      description: 'One year of complimentary knife sharpening (up to 12 knives)',
    },
    {
      icon: Trophy,
      title: 'Educational Workshop',
      description: 'Private knife care and maintenance session ($150 value)',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-secondary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h1 className="font-heading text-6xl md:text-7xl text-secondary-foreground mb-6">
              Win Premium Knives or Free Sharpening!
            </h1>
            <p className="font-paragraph text-xl text-secondary-foreground/90">
              Enter today for your chance to win – one winner selected monthly
            </p>
          </motion.div>
        </div>
      </section>

      {/* Entry Form */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-foreground mb-6">Enter the Giveaway</h2>
              <p className="font-paragraph text-lg text-dark-gray mb-8">
                Fill out the form below to enter. It's free and takes less than a minute!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-paragraph text-base text-foreground mb-2 block">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-paragraph text-base text-foreground mb-2 block">
                    Email Address *
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
                  <label htmlFor="referral" className="font-paragraph text-base text-foreground mb-2 block">
                    Referred by (Optional)
                  </label>
                  <Input
                    id="referral"
                    type="text"
                    placeholder="Name of person who referred you"
                    value={formData.referralName}
                    onChange={(e) => setFormData({ ...formData, referralName: e.target.value })}
                  />
                  <p className="font-paragraph text-sm text-dark-gray mt-2">
                    Earn bonus entries by referring friends!
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-lg py-6 h-auto"
                >
                  Enter Now
                </Button>

                <p className="font-paragraph text-xs text-dark-gray text-center">
                  By entering, you agree to receive occasional emails about knife care tips and
                  special offers. You can unsubscribe at any time.
                </p>
              </form>
            </motion.div>

            {/* Prizes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-foreground mb-6">What You Can Win</h2>
              <p className="font-paragraph text-lg text-dark-gray mb-8">
                Each month, we select one lucky winner to receive one of these amazing prizes:
              </p>

              <div className="space-y-6">
                {prizes.map((prize, index) => {
                  const Icon = prize.icon;
                  return (
                    <div
                      key={index}
                      className="bg-background border border-light-gray rounded-lg p-6 flex gap-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-foreground mb-2">
                          {prize.title}
                        </h3>
                        <p className="font-paragraph text-base text-dark-gray">
                          {prize.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-primary/10 rounded-lg p-6">
                <h3 className="font-heading text-xl text-foreground mb-3">Bonus Entries</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-paragraph text-base text-dark-gray">
                      Refer a friend: +2 bonus entries for each referral
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-paragraph text-base text-dark-gray">
                      Share on social media: +1 bonus entry
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="font-paragraph text-base text-dark-gray">
                      Submit a testimonial: +3 bonus entries
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-8 text-center">
              Official Rules
            </h2>

            <div className="bg-background/5 border border-light-gray/20 rounded-lg p-8 space-y-4">
              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">Eligibility</h3>
                <p className="font-paragraph text-base text-light-gray">
                  Open to residents of the United States, 18 years or older. Employees of Mr. KNIFE
                  GUY and their immediate family members are not eligible.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">Entry Period</h3>
                <p className="font-paragraph text-base text-light-gray">
                  Entries accepted throughout the month. Winner announced on the first business day
                  of the following month via email and social media.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">
                  Winner Selection
                </h3>
                <p className="font-paragraph text-base text-light-gray">
                  One winner selected randomly from all eligible entries. Winner will be notified
                  via email within 3 business days of selection.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">Prize Details</h3>
                <p className="font-paragraph text-base text-light-gray">
                  Prize awarded as described. No cash alternative. Prize must be claimed within 30
                  days of notification. Unclaimed prizes will be forfeited.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">Privacy</h3>
                <p className="font-paragraph text-base text-light-gray">
                  Your information will be used solely for giveaway administration and occasional
                  promotional emails. We will never sell or share your information with third
                  parties.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Winners */}
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
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-5xl text-foreground mb-4">Past Winners</h2>
            <p className="font-paragraph text-xl text-dark-gray max-w-3xl mx-auto">
              Congratulations to our previous giveaway winners!
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-dark-gray">Loading winners...</p>
            </div>
          ) : winners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {winners.map((winner, index) => (
                <motion.div
                  key={winner._id}
                  className="bg-background border border-light-gray rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {winner.winnerPhoto && (
                    <Image
                      src={winner.winnerPhoto}
                      alt={winner.winnerName || 'Winner'}
                      className="w-full h-64 object-cover"
                      width={400}
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-2xl text-foreground mb-2">
                      {winner.winnerName}
                    </h3>
                    <p className="font-paragraph text-base text-dark-gray mb-3">
                      Won: {winner.prizeWon}
                    </p>
                    {winner.dateWon && (
                      <p className="font-paragraph text-sm text-dark-gray mb-4">
                        {new Date(winner.dateWon).toLocaleDateString('en-US', {
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    )}
                    {winner.winnerQuote && (
                      <p className="font-paragraph text-base text-dark-gray italic">
                        "{winner.winnerQuote}"
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-dark-gray">
                Be the first winner! Enter the giveaway today.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
