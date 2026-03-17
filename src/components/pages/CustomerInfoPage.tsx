import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { Bookings } from '@/entities';

export default function CustomerInfoPage() {
  const [formData, setFormData] = useState({
    nameOrBusiness: '',
    email: '',
    phone: '',
    serviceType: '', // 'residential' or 'commercial'
    knifeCount: '',
    knifeType: '',
    knifeCondition: '',
    imageFile: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: 'residential' | 'commercial') => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType === type ? '' : type,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, imageFile: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Prepare booking data for CMS
      const bookingData: Bookings = {
        _id: crypto.randomUUID(),
        customerName: formData.nameOrBusiness,
        service: `${formData.serviceType} - ${formData.knifeType} (${formData.knifeCondition})`,
        quantity: parseInt(formData.knifeCount) || 0,
        zipCode: '', // Not collected in form, can be added if needed
        totalPrice: 0, // Can be calculated based on service type
      };

      // Save to CMS
      await BaseCrudService.create('Bookings', bookingData);

      // Simulate additional processing time
      await new Promise(resolve => setTimeout(resolve, 500));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          nameOrBusiness: '',
          email: '',
          phone: '',
          serviceType: '',
          knifeCount: '',
          knifeType: '',
          knifeCondition: '',
          imageFile: null,
        });
        setImagePreview(null);
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage('Failed to submit form. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />

      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 tracking-wider">
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                SHARP AFTER DARK
              </span>
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-cyan-300/80 tracking-wide">
              The night shift for your edge.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mt-6" />
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900/50 to-black border border-cyan-500/30 rounded-lg p-8 md:p-10 backdrop-blur-sm"
          >
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded text-red-300 font-paragraph text-sm"
              >
                {errorMessage}
              </motion.div>
            )}
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 border border-cyan-400 rounded-full mb-6"
                >
                  <Check className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <h2 className="font-heading text-3xl font-bold text-cyan-300 mb-2">
                  Message Received
                </h2>
                <p className="font-paragraph text-gray-300">
                  We'll be in touch shortly to discuss your sharpening needs.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name/Business */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                    Name / Business
                  </label>
                  <input
                    type="text"
                    name="nameOrBusiness"
                    value={formData.nameOrBusiness}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    placeholder="Your name or business"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    placeholder="(305) 555-0000"
                  />
                </div>

                {/* Service Type - Residential vs Commercial */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-4 uppercase tracking-wide">
                    Service Type
                  </label>
                  <div className="flex gap-4">
                    {/* Residential Checkbox */}
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center gap-3 px-4 py-3 border-2 rounded cursor-pointer transition-all ${
                        formData.serviceType === 'residential'
                          ? 'border-cyan-400 bg-cyan-500/10'
                          : 'border-cyan-500/30 hover:border-cyan-400/50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          formData.serviceType === 'residential'
                            ? 'border-cyan-400 bg-cyan-400/20'
                            : 'border-cyan-500/50'
                        }`}
                      >
                        {formData.serviceType === 'residential' && (
                          <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
                        )}
                      </div>
                      <span className="font-paragraph text-white">Residential</span>
                      <input
                        type="checkbox"
                        checked={formData.serviceType === 'residential'}
                        onChange={() => handleCheckboxChange('residential')}
                        className="hidden"
                      />
                    </motion.label>

                    {/* Commercial Checkbox */}
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center gap-3 px-4 py-3 border-2 rounded cursor-pointer transition-all ${
                        formData.serviceType === 'commercial'
                          ? 'border-cyan-400 bg-cyan-500/10'
                          : 'border-cyan-500/30 hover:border-cyan-400/50'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          formData.serviceType === 'commercial'
                            ? 'border-cyan-400 bg-cyan-400/20'
                            : 'border-cyan-500/50'
                        }`}
                      >
                        {formData.serviceType === 'commercial' && (
                          <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
                        )}
                      </div>
                      <span className="font-paragraph text-white">Commercial</span>
                      <input
                        type="checkbox"
                        checked={formData.serviceType === 'commercial'}
                        onChange={() => handleCheckboxChange('commercial')}
                        className="hidden"
                      />
                    </motion.label>
                  </div>
                </div>

                {/* Knife Details Section */}
                <div className="border-t border-cyan-500/20 pt-6">
                  <h3 className="font-heading text-lg font-bold text-cyan-300 mb-4 uppercase tracking-wide">
                    Knife Details
                  </h3>

                  {/* Knife Count */}
                  <div className="mb-4">
                    <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                      Number of Knives (Approx OK)
                    </label>
                    <input
                      type="number"
                      name="knifeCount"
                      value={formData.knifeCount}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                      placeholder="e.g., 5"
                    />
                  </div>

                  {/* Knife Type */}
                  <div className="mb-4">
                    <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                      Knife Type
                    </label>
                    <select
                      name="knifeType"
                      value={formData.knifeType}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-paragraph focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    >
                      <option value="">Select knife type</option>
                      <option value="chef">Chef Knives</option>
                      <option value="paring">Paring Knives</option>
                      <option value="serrated">Serrated Knives</option>
                      <option value="japanese">Japanese Knives</option>
                      <option value="german">German Knives</option>
                      <option value="mixed">Mixed Collection</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Knife Condition */}
                  <div className="mb-4">
                    <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                      Current Condition
                    </label>
                    <select
                      name="knifeCondition"
                      value={formData.knifeCondition}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-cyan-500/50 rounded px-4 py-3 text-white font-paragraph focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                    >
                      <option value="">Select condition</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="poor">Poor / Damaged</option>
                    </select>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block font-paragraph text-sm font-semibold text-cyan-300 mb-2 uppercase tracking-wide">
                      Upload Knife Photo
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center gap-2 w-full bg-black border-2 border-dashed border-cyan-500/50 rounded px-4 py-6 cursor-pointer hover:border-cyan-400 hover:bg-cyan-500/5 transition-all"
                      >
                        <Upload className="w-5 h-5 text-cyan-400" />
                        <span className="font-paragraph text-gray-300">
                          {imagePreview ? 'Image selected' : 'Click to upload or drag and drop'}
                        </span>
                      </label>
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 relative"
                      >
                        <Image src={imagePreview} alt="Knife preview" className="w-full h-48 object-cover rounded border border-cyan-500/30" />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData(prev => ({ ...prev, imageFile: null }));
                          }}
                          className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-paragraph transition-colors"
                        >
                          Remove
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-600/50 text-black font-heading font-bold py-4 px-6 rounded text-lg uppercase tracking-widest transition-all shadow-lg hover:shadow-cyan-500/50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-500 font-paragraph text-sm mt-8"
          >
            We'll review your information and contact you within 24 hours.
          </motion.p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
