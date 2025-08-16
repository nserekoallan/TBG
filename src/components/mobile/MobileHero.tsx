import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, Heart, MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

// Import images
import timothy1 from '../../assets/images/timothy-1.jpg';
import timothy2 from '../../assets/images/timothy-2.jpg';
import timothy3 from '../../assets/images/timothy-3.jpg';

interface MobileHeroProps {
  endorsements: number;
  onEndorse: () => void;
  onWhatsApp: () => void;
}

const heroImages = [timothy1, timothy2, timothy3];

export const MobileHero = ({ endorsements, onEndorse, onWhatsApp }: MobileHeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showEndorseAnimation, setShowEndorseAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleEndorse = () => {
    onEndorse();
    setShowEndorseAnimation(true);
    setTimeout(() => setShowEndorseAnimation(false), 2000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Section - Image & Identity */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-8">
          {/* Image Carousel */}
          <div className="relative mb-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  alt="Timothy Bulumba"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              
              {/* Live Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-red-500 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-white text-xs font-bold">LIVE</span>
              </div>
            </div>

            {/* Image Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === currentImage ? "w-6 bg-white" : "w-2 bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Identity */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-black text-white mb-2">
              TIMOTHY<br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                BULUMBA
              </span>
            </h1>
            <div className="text-xl font-bold text-purple-200 mb-4 tracking-wider">
              BUILD • BACK • BETTER
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Your voice for innovation, excellence, and student-first leadership at Makerere University
            </p>
          </motion.div>

          {/* Live Stats */}
          <motion.div 
            className="flex items-center gap-6 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="flex items-center gap-1 text-2xl font-black text-yellow-400">
                <Heart className="w-5 h-5" />
                {endorsements.toLocaleString()}
              </div>
              <div className="text-xs text-white/60">Supporters</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-center">
              <div className="flex items-center gap-1 text-2xl font-black text-green-400">
                <TrendingUp className="w-5 h-5" />
                #1
              </div>
              <div className="text-xs text-white/60">Choice</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Actions */}
        <div className="px-6 pb-8 space-y-4">
          {/* Primary CTA */}
          <motion.button
            onClick={() => document.getElementById('campaigns-mobile')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 text-lg"
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span>Explore Campaigns</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 gap-3">
            <motion.button
              onClick={handleEndorse}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Heart className="w-4 h-4" />
              <span>Endorse</span>
            </motion.button>
            
            <motion.button
              onClick={onWhatsApp}
              className="bg-green-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
            </motion.button>
          </div>
        </div>

        {/* Floating Endorsement Animation */}
        <AnimatePresence>
          {showEndorseAnimation && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-6xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, y: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                ❤️
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};