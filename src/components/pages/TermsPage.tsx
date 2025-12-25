import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl text-primary-foreground mb-6">
              Terms of Service
            </h1>
            <p className="font-paragraph text-xl text-light-gray">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Agreement to Terms</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                By accessing or using the services of Mr. KNIFE GUY, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Services</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mb-4">
                Mr. KNIFE GUY provides professional knife sharpening services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 font-paragraph text-lg text-dark-gray ml-4">
                <li>Door-to-door white glove knife sharpening service</li>
                <li>Knife maintenance education and workshops</li>
                <li>Concierge knife sales and consultation</li>
                <li>Related knife care services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Service Terms</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-paragraph text-lg text-dark-gray ml-4">
                <li>Provide accurate information about your knives and service needs</li>
                <li>Ensure knives are clean and free of food debris before service</li>
                <li>Be available for scheduled pickup and delivery times</li>
                <li>Pay for services as agreed upon</li>
                <li>Handle sharpened knives with appropriate care and caution</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Liability and Warranties</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mb-4">
                While we take utmost care in handling your knives:
              </p>
              <ul className="list-disc list-inside space-y-2 font-paragraph text-lg text-dark-gray ml-4">
                <li>We are not responsible for pre-existing damage or defects</li>
                <li>Knives with severe damage may not be repairable</li>
                <li>We will inform you of any issues discovered during inspection</li>
                <li>Our liability is limited to the replacement value of the knife</li>
                <li>We guarantee satisfaction with our sharpening quality</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Payment Terms</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                Payment is due upon completion of services unless otherwise arranged. We accept various payment methods including credit cards, debit cards, and digital payments. Prices are subject to change with notice. Discounts and promotional offers are subject to specific terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Cancellation Policy</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                Cancellations must be made at least 24 hours before scheduled service. Late cancellations may be subject to a fee. We reserve the right to cancel or reschedule services due to unforeseen circumstances, with advance notice when possible.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Intellectual Property</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                All content on our website, including text, graphics, logos, and images, is the property of Mr. KNIFE GUY and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Testimonials and Reviews</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                By submitting a testimonial or review, you grant us the right to use, reproduce, and display your feedback in our marketing materials. We may edit testimonials for length or clarity while maintaining the original meaning.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Giveaway Terms</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                Participation in giveaways is subject to official rules posted on the giveaway page. Prizes have no cash value and cannot be transferred or exchanged. Winners will be selected randomly and notified via email.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Limitation of Liability</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                Mr. KNIFE GUY shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Changes to Terms</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Contact Information</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mt-4">
                Email: info@mrknifeguy.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
