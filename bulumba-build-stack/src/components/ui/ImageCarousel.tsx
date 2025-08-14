import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from './button';

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}

export const ImageCarousel = ({
  images,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = '',
  aspectRatio = 'video'
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [imageStates, setImageStates] = useState<Record<number, 'loading' | 'loaded' | 'error'>>(
    {}
  );

  // Preload images
  useEffect(() => {
    images.forEach((image, index) => {
      if (!imageStates[index]) {
        setImageStates(prev => ({ ...prev, [index]: 'loading' }));
        const img = new Image();
        img.onload = () => {
          setImageStates(prev => ({ ...prev, [index]: 'loaded' }));
        };
        img.onerror = () => {
          setImageStates(prev => ({ ...prev, [index]: 'error' }));
        };
        img.src = image.src;
      }
    });
  }, [images, imageStates]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, autoPlayInterval]);

  // Navigation handlers
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case ' ':
          event.preventDefault();
          setIsPlaying(prev => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]'
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center bg-neutral-100 rounded-2xl min-h-96">
        <p className="text-neutral-500">No images available</p>
      </div>
    );
  }

  return (
    <div 
      className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-cyan-500 to-blue-600 p-0.5 shadow-2xl ${className}`}
      role="img"
      aria-label="Image carousel"
    >
      {/* Main image container */}
      <div className={`relative bg-white rounded-2xl overflow-hidden ${aspectRatioClasses[aspectRatio]}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.4, 0, 0.2, 1] // Custom easing
            }}
          >
            {imageStates[currentIndex] === 'loading' && (
              <div className="absolute inset-0 bg-neutral-100 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-neutral-300 border-t-primary-500 rounded-full animate-spin" />
              </div>
            )}
            
            {imageStates[currentIndex] === 'error' && (
              <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
                <p className="text-neutral-500">Failed to load image</p>
              </div>
            )}

            {imageStates[currentIndex] === 'loaded' && (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            )}

            {/* Caption overlay */}
            {images[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-medium">{images[currentIndex].caption}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation controls */}
        {images.length > 1 && (
          <>
            {/* Previous button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700" />
            </Button>

            {/* Next button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-neutral-700" />
            </Button>

            {/* Play/Pause button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 focus:opacity-100"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </Button>
          </>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20 ${
                  index === currentIndex
                    ? 'bg-white border-white scale-125 shadow-lg'
                    : 'bg-white/50 border-white/70 hover:bg-white/75 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image counter */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;