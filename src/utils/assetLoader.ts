/**
 * Production-ready asset loader using Vite's import.meta.glob
 */

// Use Vite's glob import - this handles both dev and production correctly
const imageModules = import.meta.glob('../assets/images/timothy-[1-3].jpg', { 
  eager: true, 
  query: '?url',
  import: 'default'
});

// Extract Timothy images in order
const getTimothyImages = (): string[] => {
  const images: string[] = [];
  
  // Sort by filename to ensure consistent order
  const sortedKeys = Object.keys(imageModules).sort();
  
  for (const path of sortedKeys) {
    const url = imageModules[path] as string;
    if (url) {
      images.push(url);
    }
  }
  
  return images;
};

export const TIMOTHY_IMAGE_ARRAY = getTimothyImages();

// Direct import fallback for development
const directImports: string[] = [];
try {
  import('../assets/images/timothy-1.jpg').then(m => directImports[0] = m.default);
  import('../assets/images/timothy-2.jpg').then(m => directImports[1] = m.default);  
  import('../assets/images/timothy-3.jpg').then(m => directImports[2] = m.default);
} catch (e) {
  console.warn('Direct imports failed');
}

// Fallback check - multiple strategies
export const getTimothyImagesWithFallback = (): string[] => {
  console.log('🔍 Glob images:', TIMOTHY_IMAGE_ARRAY);
  console.log('🔍 Direct imports:', directImports);
  
  if (TIMOTHY_IMAGE_ARRAY.length > 0) {
    console.log('✅ Using Vite glob imports:', TIMOTHY_IMAGE_ARRAY);
    return TIMOTHY_IMAGE_ARRAY;
  }
  
  if (directImports.filter(Boolean).length > 0) {
    console.log('✅ Using direct imports:', directImports.filter(Boolean));
    return directImports.filter(Boolean);
  }
  
  // Final fallback - hardcoded working scholars image for testing
  console.warn('⚠️ Using hardcoded fallback');
  return [
    '/src/assets/images/scholars5.jpg',
    '/src/assets/images/scholars3.jpg',
    '/src/assets/images/scholars4.jpg'
  ];
};

// Preload images for better UX
export const preloadImages = async (urls: string[]): Promise<void> => {
  const promises = urls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();  
      img.onerror = () => reject(new Error(`Failed to load: ${url}`));
      img.src = url;
    });
  });

  try {
    await Promise.all(promises);
    console.log('✅ All images preloaded successfully');
  } catch (error) {
    console.warn('⚠️ Some images failed to preload:', error);
  }
};