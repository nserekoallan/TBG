import { useState, useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Preload priority images
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setImageSrc('/placeholder.jpg'); // Fallback image
    onError?.();
  };

  // Generate blur placeholder
  const getPlaceholderStyle = () => {
    if (placeholder === 'blur' && !isLoaded) {
      return {
        filter: 'blur(20px)',
        transform: 'scale(1.1)',
      };
    }
    return {};
  };

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse",
            className
          )}
          aria-hidden="true"
        />
      )}
      
      {/* Actual Image */}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "transition-all duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={getPlaceholderStyle()}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

// Responsive Image Component
export const ResponsiveImage = ({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: OptimizedImageProps & { sizes?: string }) => {
  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${baseSrc}?w=${w} ${w}w`)
      .join(', ');
  };

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      {...props}
    />
  );
};