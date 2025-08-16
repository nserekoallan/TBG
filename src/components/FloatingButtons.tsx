import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, CheckCircle } from 'lucide-react';
import { cn } from '../utils/cn';

interface FloatingButtonsProps {
  onEndorse: () => void;
  onWhatsApp: () => void;
}

const FloatingButtons = memo(({ onEndorse, onWhatsApp }: FloatingButtonsProps) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEndorse = () => {
    onEndorse();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <>
      <AnimatePresence>
        {showButtons && (
          <>
            <motion.button
              className={cn(
                "fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 z-40",
                "btn-primary rounded-full",
                "flex items-center justify-center"
              )}
              onClick={handleEndorse}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Endorse Timothy"
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.button>
            
            <motion.button
              className={cn(
                "fixed bottom-4 right-20 sm:bottom-8 sm:right-28 w-14 h-14 sm:w-16 sm:h-16 z-40",
                "bg-gradient-to-r from-green-500 to-emerald-600",
                "rounded-full shadow-2xl",
                "flex items-center justify-center"
              )}
              onClick={onWhatsApp}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Success notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className={cn(
              "fixed top-24 right-8 z-40",
              "bg-gradient-to-r from-green-500 to-emerald-600",
              "text-white px-8 py-4 rounded-2xl shadow-2xl"
            )}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Thank you for your support!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

FloatingButtons.displayName = 'FloatingButtons';

export default FloatingButtons;