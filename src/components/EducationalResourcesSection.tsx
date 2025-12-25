import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Download, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { EducationalResources } from '@/entities';

export default function EducationalResourcesSection() {
  const [resources, setResources] = useState<EducationalResources[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { items } = await BaseCrudService.getAll<EducationalResources>(
          'educationalresources'
        );
        setResources(items);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading || resources.length === 0) return null;

  return (
    <section className="py-24 bg-light-gray/30">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-5xl text-foreground mb-4">
            Free Educational Resources
          </h2>
          <p className="font-paragraph text-xl text-dark-gray max-w-3xl mx-auto">
            Download our expert guides and learn how to care for your knives like a professional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource._id}
              className="bg-background border border-light-gray rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {resource.thumbnailImage && (
                <Image
                  src={resource.thumbnailImage}
                  alt={resource.resourceTitle || 'Educational resource'}
                  className="w-full h-48 object-cover"
                  width={400}
                />
              )}

              <div className="p-6">
                {resource.resourceType && (
                  <span className="inline-block bg-primary/10 text-primary font-paragraph text-xs px-3 py-1 rounded-full mb-3">
                    {resource.resourceType}
                  </span>
                )}

                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {resource.resourceTitle}
                </h3>

                {resource.resourceDescription && (
                  <p className="font-paragraph text-base text-dark-gray mb-6">
                    {resource.resourceDescription}
                  </p>
                )}

                {resource.downloadUrl && (
                  <Button
                    asChild
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph"
                  >
                    <a
                      href={resource.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      {resource.callToActionText || 'Download Now'}
                    </a>
                  </Button>
                )}

                {resource.isLeadMagnet && (
                  <p className="font-paragraph text-xs text-dark-gray text-center mt-3">
                    Free download - no credit card required
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
