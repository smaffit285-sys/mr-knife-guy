import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BaseCrudService } from '@/integrations';
import { EducationalResources } from '@/entities';

export default function LeadMagnetPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [resources, setResources] = useState<EducationalResources[]>([]);
  const [selectedResource, setSelectedResource] = useState<EducationalResources | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { items } = await BaseCrudService.getAll<EducationalResources>(
          'educationalresources'
        );
        const leadMagnets = items.filter((r) => r.isLeadMagnet);
        setResources(leadMagnets);
        if (leadMagnets.length > 0) {
          setSelectedResource(leadMagnets[0]);
        }
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('hasSeenLeadMagnet');
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 5000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenPopup = sessionStorage.getItem('hasSeenLeadMagnet');
        if (!hasSeenPopup) {
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenLeadMagnet', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedResource?.downloadUrl) {
      window.open(selectedResource.downloadUrl, '_blank');
    }
    alert('Thank you! Your free knife maintenance guide is downloading. Check your email for more tips!');
    setEmail('');
    handleClose();
  };

  if (!selectedResource) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-foreground/80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-background rounded-lg shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground/20 transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              {/* Content */}
              <div className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-secondary" />
                </div>

                <h2 className="font-heading text-3xl text-foreground text-center mb-4">
                  {selectedResource.callToActionText || 'Free Knife Maintenance Guide'}
                </h2>

                <p className="font-paragraph text-base text-dark-gray text-center mb-6">
                  {selectedResource.resourceDescription ||
                    'Download our comprehensive guide to keeping your knives sharp and in perfect condition. Expert tips from Mr. KNIFE GUY!'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-center"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-lg py-6 h-auto"
                  >
                    Download Free Guide
                  </Button>
                </form>

                <p className="font-paragraph text-xs text-dark-gray text-center mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
