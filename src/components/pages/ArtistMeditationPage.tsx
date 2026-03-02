import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ArtistMeditationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <p className="font-paragraph text-base sm:text-lg text-gray-500 leading-relaxed text-center">
          I do this in my spare time. This shit is my meditation. I refuse to rush this process, and I will do exactly what my hands and my eyes tell me I need to do to this blade. By choosing this option, you're trusting the artist and his process. Knives generally take around an hour for normal sharpening, but up to 40+ hours for complex geometries, extreme thinning, reprofiles, and repairs. I end up billing for less time than it actually takes, but don't rush this process
        </p>

        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-500 text-black font-heading font-bold rounded-lg hover:bg-gray-400 transition-colors"
          >
            BACK
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
