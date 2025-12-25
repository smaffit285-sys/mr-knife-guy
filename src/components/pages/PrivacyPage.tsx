import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Privacy Policy
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
              <h2 className="font-heading text-3xl text-foreground mb-4">Introduction</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                Mr. KNIFE GUY ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Information We Collect</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 font-paragraph text-lg text-dark-gray ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Service preferences and knife care needs</li>
                <li>Payment information for purchases</li>
                <li>Communications with us</li>
                <li>Newsletter subscription preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">How We Use Your Information</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-paragraph text-lg text-dark-gray ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your service requests and transactions</li>
                <li>Send you service updates and promotional communications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Administer giveaways and promotional campaigns</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Information Sharing</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business, conducting our services, or serving our customers, as long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Data Security</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Your Rights</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-paragraph text-lg text-dark-gray ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where we rely on consent to process your information</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Cookies</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Changes to This Policy</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-3xl text-foreground mb-4">Contact Us</h2>
              <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
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
