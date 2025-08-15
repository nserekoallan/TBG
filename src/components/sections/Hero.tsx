import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, Rocket, Sparkles, ThumbsUp } from 'lucide-react';
import { ShareButton } from '../ShareButton';
import { cn } from '../../utils/cn';

interface HeroImage {
  src: string;
  alt: string;
  caption: string;
}

interface HeroProps {
  endorsements: number;
  onEndorse: () => void;
  onWhatsApp: () => void;
}

// Use dynamic base URL for GitHub Pages deployment
const baseUrl = import.meta.env.BASE_URL || '/';
const heroImages: HeroImage[] = [
  { src: `${baseUrl}timothy-1.jpg`, alt: 'Timothy Bulumba - Leader', caption: 'Transforming Makerere' },
  { src: `${baseUrl}timothy-2.jpg`, alt: 'Timothy Bulumba - Visionary', caption: 'Innovation First' },
  { src: `${baseUrl}timothy-3.jpg`, alt: 'Timothy Bulumba - Champion', caption: 'Students First' },
  { src: `${baseUrl}timothy-4.jpg`, alt: 'Timothy Bulumba - Builder', caption: 'Building Excellence' },
  { src: `${baseUrl}timothy-5.jpg`, alt: 'Timothy Bulumba - Innovator', caption: 'Digital Revolution' },
  { src: `${baseUrl}timothy-6.jpg`, alt: 'Timothy Bulumba - Unite', caption: 'Unity in Diversity' },
  { src: `${baseUrl}timothy-7.jpg`, alt: 'Timothy Bulumba - Future', caption: 'Future Forward' },
  { src: `${baseUrl}timothy-8.jpg`, alt: 'Timothy Bulumba - Success', caption: 'Your Success, Our Mission' }
];

const Hero = memo(({ endorsements, onEndorse, onWhatsApp }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images with proper cleanup
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let isMounted = true;
    
    const preloadImages = async () => {
      const promises = heroImages.map(img => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          images.push(image);
          image.onload = () => resolve(image);
          image.onerror = () => reject(new Error(`Failed to load ${img.src}`));
          image.src = img.src;
        });
      });
      
      try {
        await Promise.all(promises);
        if (isMounted) {
          setImagesLoaded(true);
        }
      } catch (error) {
        // Silent fail - images will load on demand
        if (isMounted) {
          setImagesLoaded(true);
        }
      }
    };

    preloadImages();
    
    return () => {
      isMounted = false;
      // Cleanup image references
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  // Auto-rotate images with stable interval
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Increased for smoother experience
    
    return () => clearInterval(interval);
  }, [imagesLoaded, heroImages.length]);

  const handleEndorse = () => {
    onEndorse();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const formatEndorsements = (count: number): string => {
    if (count > 999) {
      return `${Math.floor(count / 1000)}k+`;
    }
    return count.toString();
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"
      aria-label="Hero Section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Static gradient orbs for better performance */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)`,
              left: `${30 * i}%`,
              top: `${20 * i}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              className={cn(
                "inline-flex items-center gap-3 px-6 py-3",
                "bg-white/80 backdrop-blur-sm rounded-full shadow-lg",
                "text-purple-700 font-semibold text-sm border border-purple-200"
              )}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span>MAKERERE UNIVERSITY 2025</span>
              <Rocket className="w-5 h-5 text-purple-600" />
            </motion.div>
            
            {/* Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-responsive-5xl font-black mb-4">
                <span className="text-gray-900">TIMOTHY</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">BULUMBA</span>
              </h1>
              
              <div className="text-responsive-2xl font-bold text-gray-700 mb-6">
                BUILD • BACK • BETTER
              </div>
              
              <p className="text-responsive-lg text-gray-600 max-w-xl leading-relaxed">
                Revolutionizing student life at Makerere University through innovation, 
                technology, and unwavering commitment to excellence.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-responsive-2xl font-black text-purple-600">{formatEndorsements(endorsements)}</div>
                <div className="text-sm text-gray-600">Supporters</div>
              </div>
              <div className="text-center">
                <div className="text-responsive-2xl font-black text-purple-600">12</div>
                <div className="text-sm text-gray-600">Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-responsive-2xl font-black text-purple-600">#1</div>
                <div className="text-sm text-gray-600">Vision</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                onClick={() => document.getElementById('campaigns')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Explore Vision"
              >
                <Rocket className="w-5 h-5 mr-2 inline" />
                Explore Vision
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              
              <button
                className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all"
                onClick={onWhatsApp}
                aria-label="Connect on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2 inline" />
                Connect Now
              </button>
              
              <ShareButton
                config={{
                  title: "Timothy Bulumba for Guild President",
                  description: "Join the Build Back Better movement at Makerere University. Your voice, your future!",
                  hashtags: ['BulumbaBuildBack', 'MakerereVotes', 'StudentPower'],
                  via: 'TimothyBulumba'
                }}
                variant="text"
                buttonText="Share Campaign"
                className="self-center"
              />
            </motion.div>
          </motion.div>

          {/* Right - Image Carousel */}
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-500)] via-[var(--color-secondary-500)] to-[var(--color-accent-500)] rounded-3xl blur-2xl opacity-30" />
              
              {/* Image container */}
              <div className="relative glass rounded-3xl p-2">
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-black/40 rounded-2xl overflow-hidden">
                  {!imagesLoaded ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-blue-200 animate-pulse" />
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex].src}
                        alt={heroImages[currentImageIndex].alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ 
                          objectPosition: 'center 30%',
                        }}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1.05 }}
                        exit={{ opacity: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        loading="eager"
                        decoding="async"
                      />
                    </AnimatePresence>
                  )}
                  
                  {/* Caption */}
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6 px-6 py-3 glass rounded-2xl"
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-white font-bold text-lg">{heroImages[currentImageIndex].caption}</p>
                  </motion.div>
                  
                  {/* Live badge */}
                  <motion.div 
                    className="absolute top-6 right-6 px-4 py-2 bg-[var(--color-error)] rounded-full flex items-center gap-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-sm font-bold">LIVE</span>
                  </motion.div>

                  {/* Floating Thumbs Up Button */}
                  <motion.button
                    className={cn(
                      "absolute bottom-24 right-6 w-14 h-14",
                      "btn-primary rounded-full",
                      "flex items-center justify-center group"
                    )}
                    onClick={handleEndorse}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    aria-label={`Endorse Timothy - ${endorsements} endorsements`}
                  >
                    <ThumbsUp className="w-7 h-7 text-white" />
                    
                    {/* Endorsement count badge */}
                    <span 
                      className="absolute -top-2 -right-2 badge badge-primary text-xs"
                      aria-live="polite"
                    >
                      {formatEndorsements(endorsements)}
                    </span>
                  </motion.button>

                  {/* Heart emoji animation */}
                  <AnimatePresence>
                    {showNotification && (
                      <motion.div
                        className="absolute bottom-24 right-6 pointer-events-none text-4xl"
                        initial={{ opacity: 1, y: 0, scale: 1 }}
                        animate={{ opacity: 0, y: -100, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        aria-hidden="true"
                      >
                        ❤️
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Image dots */}
                <div className="flex justify-center gap-2 mt-6" role="tablist">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        i === currentImageIndex 
                          ? "w-8 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)]" 
                          : "w-2 bg-white/30 hover:bg-white/50"
                      )}
                      role="tab"
                      aria-selected={i === currentImageIndex}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;