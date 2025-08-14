import { useState, useEffect, Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { PollProvider } from '../contexts/PollContext';
import { SocialMeta } from '../components/SocialMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import FloatingButtons from '../components/FloatingButtons';

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
  const [endorsements, setEndorsements] = useState(15847);
  const [isLoading, setIsLoading] = useState(true);

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
              
              <PollsSection />
              
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
        </div>
      </PollProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default IndexRefactored;