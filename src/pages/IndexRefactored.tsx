import { useState, useEffect, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { PollProvider } from '../contexts/PollContext';
import { SocialMeta } from '../components/SocialMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import FloatingButtons from '../components/FloatingButtons';

// Import test functions for development
if (import.meta.env.DEV) {
  import('../utils/testShortLinks');
}

// Lazy load sections for better performance
const Hero = lazy(() => import('../components/sections/Hero'));
const Campaigns = lazy(() => import('../components/sections/Campaigns'));
const Impact = lazy(() => import('../components/sections/Impact'));
const PollsSection = lazy(() => import('../components/sections/PollsSection'));
const CallToAction = lazy(() => import('../components/sections/CallToAction'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-[var(--color-gray-400)] mb-6">{error.message}</p>
        <button 
          onClick={resetErrorBoundary}
          className="btn btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

const IndexRefactored = () => {
  const [searchParams] = useSearchParams();
  const [endorsements, setEndorsements] = useState(15847);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [highlightedPollId, setHighlightedPollId] = useState<string | null>(null);

  useEffect(() => {
    // Check if we have a poll parameter from short link
    const pollId = searchParams.get('poll');
    if (pollId) {
      setHighlightedPollId(pollId);
      // Scroll to polls section after a delay to ensure it's rendered
      setTimeout(() => {
        const pollsSection = document.getElementById('polls-section');
        if (pollsSection) {
          pollsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
    }
  }, [searchParams]);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Load endorsements from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('endorsements');
    if (stored) {
      setEndorsements(parseInt(stored, 10));
    }
  }, []);

  // Save endorsements to localStorage
  useEffect(() => {
    localStorage.setItem('endorsements', endorsements.toString());
  }, [endorsements]);

  const handleEndorse = () => {
    setEndorsements(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Timothy! I just visited your amazing website. I want to support Build Back Better!');
    window.open(`https://wa.me/256703743491?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <PollProvider>
          <div className="min-h-screen bg-white">
            <SocialMeta />
            <Header />
          
          <main>
            <Suspense fallback={<LoadingScreen />}>
              <Hero 
                endorsements={endorsements}
                onEndorse={handleEndorse}
                onWhatsApp={openWhatsApp}
              />
              
              <Campaigns />
              
              <PollsSection highlightedPollId={highlightedPollId} />
              
              <Impact endorsements={endorsements} />
              
              <CallToAction 
                onEndorse={handleEndorse}
                onWhatsApp={openWhatsApp}
              />
            </Suspense>
          </main>

          <FloatingButtons 
            onEndorse={handleEndorse}
            onWhatsApp={openWhatsApp}
          />
          
          <Footer />

          {/* Success notification */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                className="fixed top-20 right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-[100]"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold">Thank you for your support! 🎉</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PollProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default IndexRefactored;