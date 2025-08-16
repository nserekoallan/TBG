import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor } from 'lucide-react';

// Mobile Components
import { MobileHero } from './mobile/MobileHero';
import { MobileCampaigns } from './mobile/MobileCampaigns';
import { MobileNavigation } from './mobile/MobileNavigation';

// Desktop Components
import Hero from './sections/Hero';
import Campaigns from './sections/Campaigns';
import Header from './Header';

// Shared Components
import PollsSection from './sections/PollsSection';
import Impact from './sections/Impact';
import CallToAction from './sections/CallToAction';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

interface ResponsiveLayoutProps {
  endorsements: number;
  onEndorse: () => void;
  onWhatsApp: () => void;
}

export const ResponsiveLayout = ({ endorsements, onEndorse, onWhatsApp }: ResponsiveLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDeviceToggle, setShowDeviceToggle] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Show device toggle in development
  useEffect(() => {
    setShowDeviceToggle(import.meta.env.DEV);
  }, []);

  const toggleDevice = () => {
    setIsMobile(!isMobile);
  };

  if (isMobile) {
    return (
      <div className="mobile-layout">
        {/* Mobile Navigation */}
        <MobileNavigation 
          endorsements={endorsements}
          onEndorse={onEndorse}
          onWhatsApp={onWhatsApp}
        />

        {/* Mobile Content */}
        <main className="pb-20 pt-20"> {/* Account for fixed nav */}
          <MobileHero 
            endorsements={endorsements}
            onEndorse={onEndorse}
            onWhatsApp={onWhatsApp}
          />
          
          <MobileCampaigns />
          
          {/* Shared sections optimized for mobile */}
          <div className="mobile-polls">
            <PollsSection />
          </div>
          
          <div className="mobile-impact px-4">
            <Impact endorsements={endorsements} />
          </div>
          
          <div className="mobile-cta px-4">
            <CallToAction 
              onEndorse={onEndorse}
              onWhatsApp={onWhatsApp}
            />
          </div>
          
          <Footer />
        </main>

        {/* Development Device Toggle */}
        <AnimatePresence>
          {showDeviceToggle && (
            <motion.button
              onClick={toggleDevice}
              className="fixed top-4 right-4 z-[9999] bg-blue-600 text-white p-2 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileTap={{ scale: 0.9 }}
            >
              <Monitor className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="desktop-layout">
      {/* Desktop Header */}
      <Header />

      {/* Desktop Content */}
      <main>
        <Hero 
          endorsements={endorsements}
          onEndorse={onEndorse}
          onWhatsApp={onWhatsApp}
        />
        
        <Campaigns />
        <PollsSection />
        <Impact endorsements={endorsements} />
        <CallToAction 
          onEndorse={onEndorse}
          onWhatsApp={onWhatsApp}
        />
        <Footer />
      </main>

      {/* Desktop Floating Actions */}
      <FloatingButtons 
        onEndorse={onEndorse}
        onWhatsApp={onWhatsApp}
      />

      {/* Development Device Toggle */}
      <AnimatePresence>
        {showDeviceToggle && (
          <motion.button
            onClick={toggleDevice}
            className="fixed top-4 right-4 z-[9999] bg-purple-600 text-white p-2 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileTap={{ scale: 0.9 }}
          >
            <Smartphone className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};