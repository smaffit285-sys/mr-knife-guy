import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ServiceOption {
  label: string;
  price: number;
  description?: string;
}

interface ServiceSection {
  title: string;
  description?: string;
  options: ServiceOption[];
  note?: string;
  priceNote?: string;
}

const ProductsPage: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  const sections: ServiceSection[] = [
    {
      title: 'Hand Knife Sharpening',
      description: 'Professional hand sharpening service for your knives',
      options: [
        { label: '1 Knife', price: 20 },
        { label: '3 Knives', price: 50 },
        { label: '5 Knives', price: 100 },
      ],
      note: 'Major repair or restoration may cost extra, and will be assessed upon initial consultation.',
    },
    {
      title: 'Budget Sharpening',
      description: 'Affordable sharpening options for all knife sizes',
      options: [
        { label: 'Small Knives (up to 6")', price: 7, description: 'Restoration charge up to $8 per knife' },
        { label: 'Medium Knives (up to 9")', price: 10, description: 'Restoration charge up to $8 per knife' },
        { label: 'Large Knives', price: 12, description: 'Restoration charge up to $8 per knife' },
      ],
      priceNote: 'Restoration charge up to $8 per knife',
    },
    {
      title: 'Knife Maintenance & Classes',
      description: 'Learn proper knife care and sharpening techniques',
      options: [
        { label: 'Knife Maintenance Class', price: 40 },
        { label: 'Knife Sharpening Class', price: 200 },
      ],
    },
    {
      title: 'Basic Knives',
      description: 'Quality starter knives for home cooks',
      options: [
        { label: 'Basic Forged or Japanese Paring Knife', price: 100 },
        { label: 'Basic Chef\'s Knife', price: 160 },
      ],
    },
    {
      title: 'One-on-One Classes & Knife Concierge Service',
      description: 'Personalized instruction and expert knife consultation',
      options: [
        { label: 'One-on-One Classes', price: 0, description: 'Price upon request' },
        { label: 'Knife Concierge Service', price: 0, description: 'Price upon request' },
      ],
    },
  ];

  const handleSelectOption = (sectionIndex: number, optionIndex: number) => {
    const key = `section-${sectionIndex}-option-${optionIndex}`;
    setSelectedOptions(prev => ({
      ...prev,
      [key]: key,
    }));
  };

  const handleAddToCart = (sectionIndex: number, optionIndex: number) => {
    // Placeholder for add to cart functionality
    const section = sections[sectionIndex];
    const option = section.options[optionIndex];
    console.log(`Added to cart: ${section.title} - ${option.label} ($${option.price})`);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-background py-12">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <h1 className="font-heading text-5xl text-foreground mb-4">Our Services & Products</h1>
          <p className="font-paragraph text-lg text-dark-gray">
            Professional knife sharpening, maintenance classes, and quality knives
          </p>
        </div>
      </div>

      {/* Services Sections */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-6">
              {/* Section Header */}
              <div className="border-b-2 border-secondary pb-4">
                <h2 className="font-heading text-4xl text-foreground mb-2">{section.title}</h2>
                {section.description && (
                  <p className="font-paragraph text-lg text-dark-gray">{section.description}</p>
                )}
              </div>

              {/* Section Note */}
              {section.note && (
                <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded">
                  <p className="font-paragraph text-sm text-foreground italic">{section.note}</p>
                </div>
              )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.options.map((option, optionIndex) => {
                  const key = `section-${sectionIndex}-option-${optionIndex}`;
                  const isSelected = selectedOptions[key];

                  return (
                    <Card
                      key={optionIndex}
                      className={`relative transition-all duration-200 hover:shadow-lg ${
                        isSelected ? 'ring-2 ring-secondary' : ''
                      }`}
                    >
                      <CardContent className="p-6">
                        <CardTitle className="text-xl text-foreground mb-3">
                          {option.label}
                        </CardTitle>

                        {option.description && (
                          <p className="font-paragraph text-sm text-dark-gray mb-4">
                            {option.description}
                          </p>
                        )}

                        {/* Price */}
                        <div className="mb-6">
                          {option.price > 0 ? (
                            <div className="flex items-baseline gap-2">
                              <span className="font-heading text-3xl text-secondary">
                                ${option.price}
                              </span>
                            </div>
                          ) : (
                            <Badge variant="outline" className="text-secondary border-secondary">
                              Price Upon Request
                            </Badge>
                          )}
                        </div>
                      </CardContent>

                      <CardFooter className="p-6 pt-0 flex-col gap-2">
                        <Button
                          onClick={() => handleSelectOption(sectionIndex, optionIndex)}
                          variant={isSelected ? 'default' : 'outline'}
                          className="w-full"
                        >
                          {isSelected ? '✓ Selected' : 'Select'}
                        </Button>
                        <Button
                          onClick={() => handleAddToCart(sectionIndex, optionIndex)}
                          className="w-full bg-secondary hover:bg-secondary/90 text-white"
                        >
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>

              {/* Price Note */}
              {section.priceNote && (
                <p className="font-paragraph text-sm text-dark-gray italic">
                  Note: {section.priceNote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary/10 py-16 mt-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h3 className="font-heading text-3xl text-foreground mb-4">
            Need Help Choosing?
          </h3>
          <p className="font-paragraph text-lg text-dark-gray mb-8">
            Contact us for personalized recommendations and consultation
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
