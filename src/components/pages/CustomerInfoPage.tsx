import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

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

    // Simulate form submission
    setTimeout(() => {
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
    }, 1500);
  };

  return (
    <div className="bg-synthwave-midnight text-white min-h-screen overflow-x-hidden relative">
      <Header />

      <main className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Tron Grid Background */}
        <div className="fixed inset-0 top-0 z-0 pointer-events-none overflow-hidden">
          {/* Main Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-customer" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#gridGradient-customer)" strokeWidth="0.8"/>
              </pattern>
              <linearGradient id="gridGradient-customer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF"/>
                <stop offset="100%" stopColor="#FF007F"/>
              </linearGradient>
              <radialGradient id="perspectiveGradient" cx="50%" cy="30%">
                <stop offset="0%" stopColor="rgba(0, 255, 255, 0.3)"/>
                <stop offset="100%" stopColor="rgba(255, 0, 127, 0.1)"/>
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-customer)"/>
            <rect width="100%" height="100%" fill="url(#perspectiveGradient)"/>
          </svg>

          {/* Neon Palm Trees - Left */}
          <motion.svg
            className="absolute left-0 top-1/4 w-48 h-96 opacity-30"
            viewBox="0 0 100 200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <defs>
              <linearGradient id="palmGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF"/>
                <stop offset="100%" stopColor="#FF007F"/>
              </linearGradient>
            </defs>
            {/* Trunk */}
            <line x1="50" y1="100" x2="50" y2="180" stroke="url(#palmGradient1)" strokeWidth="3"/>
            {/* Fronds */}
            {[0, 60, 120, 180, 240, 300].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x2 = 50 + 40 * Math.cos(rad);
              const y2 = 100 + 40 * Math.sin(rad);
              return (
                <line key={angle} x1="50" y1="100" x2={x2} y2={y2} stroke="url(#palmGradient1)" strokeWidth="2" opacity="0.8"/>
              );
            })}
          </motion.svg>

          {/* Neon Palm Trees - Right */}
          <motion.svg
            className="absolute right-0 top-1/3 w-48 h-96 opacity-30"
            viewBox="0 0 100 200"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          >
            <defs>
              <linearGradient id="palmGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF007F"/>
                <stop offset="100%" stopColor="#00FFFF"/>
              </linearGradient>
            </defs>
            {/* Trunk */}
            <line x1="50" y1="100" x2="50" y2="180" stroke="url(#palmGradient2)" strokeWidth="3"/>
            {/* Fronds */}
            {[0, 60, 120, 180, 240, 300].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x2 = 50 + 40 * Math.cos(rad);
              const y2 = 100 + 40 * Math.sin(rad);
              return (
                <line key={angle} x1="50" y1="100" x2={x2} y2={y2} stroke="url(#palmGradient2)" strokeWidth="2" opacity="0.8"/>
              );
            })}
          </motion.svg>

          {/* Scan Lines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
            animation: 'scan 8s linear infinite'
          }}/>
        </div>

        {/* Red Carpet Effect */}
        <div className="fixed bottom-0 left-0 right-0 h-32 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-red-800/10 to-transparent"/>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #8B0000 0px, #8B0000 20px, #A52A2A 20px, #A52A2A 40px)',
          }}/>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 tracking-wider">
              <span 
                style={{
                  background: 'linear-gradient(to bottom, #ff99ff 0%, #FF007F 50%, #ff0066 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                className="block"
              >
                <motion.span
                  animate={{ textShadow: [
                    '0 0 15px rgba(255, 0, 127, 0.6), 0 0 30px rgba(255, 0, 127, 0.4), 0 0 50px rgba(255, 153, 255, 0.3)',
                    '0 0 25px rgba(255, 0, 127, 0.9), 0 0 50px rgba(255, 0, 127, 0.6), 0 0 80px rgba(255, 153, 255, 0.5)',
                    '0 0 15px rgba(255, 0, 127, 0.6), 0 0 30px rgba(255, 0, 127, 0.4), 0 0 50px rgba(255, 153, 255, 0.3)'
                  ]}}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  SHARP AFTER DARK
                </motion.span>
              </span>
            </h1>
            <motion.p 
              className="font-paragraph text-xl md:text-2xl mb-6 tracking-widest"
              style={{
                color: '#00FFFF',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.5)'
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              The night shift for your edge.
            </motion.p>

            {/* Animated Spotlight Beams */}
            <div className="relative h-32 mb-8 flex items-center justify-center">
              {/* Beam 1 - Left */}
              <motion.div
                className="absolute w-32 h-40 opacity-40"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255, 0, 127, 0.8), transparent)',
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                  filter: 'blur(8px)',
                }}
                animate={{
                  x: [-60, -40, -60],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Beam 2 - Center */}
              <motion.div
                className="absolute w-40 h-40 opacity-50"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0, 255, 255, 0.9), transparent)',
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
                  filter: 'blur(10px)',
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
              
              {/* Beam 3 - Right */}
              <motion.div
                className="absolute w-32 h-40 opacity-40"
                style={{
                  background: 'linear-gradient(to bottom, rgba(147, 112, 219, 0.8), transparent)',
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                  filter: 'blur(8px)',
                }}
                animate={{
                  x: [60, 40, 60],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4.2, repeat: Infinity }}
              />

              {/* Glow effect where beams brighten */}
              <motion.div
                className="absolute w-48 h-32 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent)',
                  filter: 'blur(20px)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
              />
            </div>

            <div className="h-1 bg-gradient-to-r from-transparent via-synthwave-neon-pink to-transparent mx-auto mb-8 max-w-md" />
          </motion.div>

          {/* Velvet Ropes - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 opacity-40 rounded-full" style={{
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3)'
          }}/>

          {/* Velvet Ropes - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-64 bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 opacity-40 rounded-full" style={{
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.3)'
          }}/>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-synthwave-dark/60 to-synthwave-midnight/80 border-2 border-synthwave-neon-cyan/40 rounded-lg p-8 md:p-10 backdrop-blur-md relative z-10"
            style={{
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)'
            }}
          >
            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-synthwave-neon-cyan/20 border border-synthwave-neon-cyan rounded-full mb-6"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
                  }}
                >
                  <Check className="w-8 h-8 text-synthwave-neon-cyan" />
                </motion.div>
                <h2 className="font-heading text-3xl font-bold mb-2" style={{
                  color: '#00FFFF',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
                }}>
                  Message Received
                </h2>
                <p className="font-paragraph text-synthwave-light/80">
                  We'll be in touch shortly to discuss your sharpening needs.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name/Business */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                    color: '#00FFFF',
                    textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                  }}>
                    Name / Business
                  </label>
                  <input
                    type="text"
                    name="nameOrBusiness"
                    value={formData.nameOrBusiness}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-synthwave-midnight/50 border-2 border-synthwave-neon-cyan/40 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-synthwave-neon-cyan focus:ring-1 focus:ring-synthwave-neon-cyan/50 transition-all"
                    placeholder="Your name or business"
                    style={{
                      boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                    color: '#00FFFF',
                    textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-synthwave-midnight/50 border-2 border-synthwave-neon-cyan/40 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-synthwave-neon-cyan focus:ring-1 focus:ring-synthwave-neon-cyan/50 transition-all"
                    placeholder="your@email.com"
                    style={{
                      boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                    color: '#00FFFF',
                    textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-synthwave-midnight/50 border-2 border-synthwave-neon-cyan/40 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-synthwave-neon-cyan focus:ring-1 focus:ring-synthwave-neon-cyan/50 transition-all"
                    placeholder="(305) 555-0000"
                    style={{
                      boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                    }}
                  />
                </div>

                {/* Service Type - Residential vs Commercial */}
                <div>
                  <label className="block font-paragraph text-sm font-semibold mb-4 uppercase tracking-wide" style={{
                    color: '#00FFFF',
                    textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                  }}>
                    Service Type
                  </label>
                  <div className="flex gap-4">
                    {/* Residential Checkbox */}
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center gap-3 px-4 py-3 border-2 rounded cursor-pointer transition-all ${
                        formData.serviceType === 'residential'
                          ? 'border-synthwave-neon-cyan bg-synthwave-neon-cyan/10'
                          : 'border-synthwave-neon-cyan/30 hover:border-synthwave-neon-cyan/50'
                      }`}
                      style={formData.serviceType === 'residential' ? {
                        boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)'
                      } : {}}
                    >
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          formData.serviceType === 'residential'
                            ? 'border-synthwave-neon-cyan bg-synthwave-neon-cyan/20'
                            : 'border-synthwave-neon-cyan/50'
                        }`}
                      >
                        {formData.serviceType === 'residential' && (
                          <div className="w-3 h-3 bg-synthwave-neon-cyan rounded-sm" />
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
                          ? 'border-synthwave-neon-pink bg-synthwave-neon-pink/10'
                          : 'border-synthwave-neon-pink/30 hover:border-synthwave-neon-pink/50'
                      }`}
                      style={formData.serviceType === 'commercial' ? {
                        boxShadow: '0 0 15px rgba(255, 0, 127, 0.4)'
                      } : {}}
                    >
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all ${
                          formData.serviceType === 'commercial'
                            ? 'border-synthwave-neon-pink bg-synthwave-neon-pink/20'
                            : 'border-synthwave-neon-pink/50'
                        }`}
                      >
                        {formData.serviceType === 'commercial' && (
                          <div className="w-3 h-3 bg-synthwave-neon-pink rounded-sm" />
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
                <div className="border-t border-synthwave-neon-cyan/20 pt-6">
                  <h3 className="font-heading text-lg font-bold mb-4 uppercase tracking-wide" style={{
                    color: '#FF007F',
                    textShadow: '0 0 10px rgba(255, 0, 127, 0.6)'
                  }}>
                    Knife Details
                  </h3>

                  {/* Knife Count */}
                  <div className="mb-4">
                    <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                      color: '#00FFFF',
                      textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                    }}>
                      Number of Knives (Approx OK)
                    </label>
                    <input
                      type="number"
                      name="knifeCount"
                      value={formData.knifeCount}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full bg-synthwave-midnight/50 border-2 border-synthwave-neon-cyan/40 rounded px-4 py-3 text-white font-paragraph placeholder-gray-500 focus:outline-none focus:border-synthwave-neon-cyan focus:ring-1 focus:ring-synthwave-neon-cyan/50 transition-all"
                      placeholder="e.g., 5"
                      style={{
                        boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                      }}
                    />
                  </div>

                  {/* Knife Type */}
                  <div className="mb-4">
                    <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                      color: '#00FFFF',
                      textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                    }}>
                      Knife Type
                    </label>
                    <select
                      name="knifeType"
                      value={formData.knifeType}
                      onChange={handleInputChange}
                      className="w-full bg-synthwave-midnight/50 border-2 border-synthwave-neon-cyan/40 rounded px-4 py-3 text-white font-paragraph focus:outline-none focus:border-synthwave-neon-cyan focus:ring-1 focus:ring-synthwave-neon-cyan/50 transition-all"
                      style={{
                        boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                      }}
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
                    <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                      color: '#00FFFF',
                      textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                    }}>
                      Current Condition
                    </label>
                    <select
                      name="knifeCondition"
                      value={formData.knifeCondition}
                      onChange={handleInputChange}
                      className="w-full bg-synthwave-midnight/50 border-2 border-synthwave-neon-cyan/40 rounded px-4 py-3 text-white font-paragraph focus:outline-none focus:border-synthwave-neon-cyan focus:ring-1 focus:ring-synthwave-neon-cyan/50 transition-all"
                      style={{
                        boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)'
                      }}
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
                    <label className="block font-paragraph text-sm font-semibold mb-2 uppercase tracking-wide" style={{
                      color: '#00FFFF',
                      textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
                    }}>
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
                        className="flex items-center justify-center gap-2 w-full bg-synthwave-midnight/50 border-2 border-dashed border-synthwave-neon-cyan/50 rounded px-4 py-6 cursor-pointer hover:border-synthwave-neon-cyan hover:bg-synthwave-neon-cyan/5 transition-all"
                        style={{
                          boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.05)'
                        }}
                      >
                        <Upload className="w-5 h-5 text-synthwave-neon-cyan" />
                        <span className="font-paragraph text-synthwave-light/70">
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
                        <Image src={imagePreview} alt="Knife preview" className="w-full h-48 object-cover rounded border-2 border-synthwave-neon-cyan/40" style={{
                          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
                        }} />
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
                  className="w-full mt-8 bg-gradient-to-r from-synthwave-neon-pink to-synthwave-neon-cyan text-synthwave-midnight font-heading font-bold py-4 px-6 rounded text-lg uppercase tracking-widest transition-all disabled:cursor-not-allowed"
                  style={{
                    boxShadow: '0 0 20px rgba(255, 0, 127, 0.4), 0 0 10px rgba(0, 255, 255, 0.2)'
                  }}
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
            className="text-center font-paragraph text-sm mt-8 relative z-10"
            style={{
              color: '#00FFFF',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.6)'
            }}
          >
            We'll review your information and contact you within 24 hours.
          </motion.p>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
}
