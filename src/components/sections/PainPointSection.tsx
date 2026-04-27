import { motion } from 'framer-motion';
import { AlertCircle, Zap } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function PainPointSection() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-synthwave-midnight overflow-hidden">
      <div className="max-w-[100rem] mx-auto">
        {/* Background Elements */}
        <motion.div
          className="absolute top-10 right-0 w-40 sm:w-96 h-40 sm:h-96 bg-synthwave-neon-pink/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport
