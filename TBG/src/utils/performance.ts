// Performance monitoring utilities

export const measurePerformance = () => {
  if (typeof window === 'undefined') return;
  
  // Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      // Log LCP to analytics service
      logMetric('LCP', lastEntry.startTime);
    });
    
    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // LCP is not available
    }
    
    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.name === 'first-input') {
          const fid = entry.processingStart - entry.startTime;
          logMetric('FID', fid);
        }
      });
    });
    
    try {
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // FID is not available
    }
    
    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    let clsEntries: any[] = [];
    
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = clsEntries[0];
          const lastSessionEntry = clsEntries[clsEntries.length - 1];
          
          if ((entry as any).startTime - lastSessionEntry.startTime < 1000 &&
              (entry as any).startTime - firstSessionEntry.startTime < 5000) {
            clsEntries.push(entry);
            clsValue += (entry as any).value;
          } else {
            clsEntries = [entry];
            clsValue = (entry as any).value;
          }
        }
      }
      logMetric('CLS', clsValue);
    });
    
    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // CLS is not available
    }
  }
  
  // Page Load Metrics
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (perfData) {
      logMetric('DNS', perfData.domainLookupEnd - perfData.domainLookupStart);
      logMetric('TCP', perfData.connectEnd - perfData.connectStart);
      logMetric('Request', perfData.responseStart - perfData.requestStart);
      logMetric('Response', perfData.responseEnd - perfData.responseStart);
      logMetric('DOM Processing', perfData.domComplete - perfData.domInteractive);
      logMetric('Load Complete', perfData.loadEventEnd - perfData.loadEventStart);
    }
  });
};

// Log metrics (integrate with analytics service)
const logMetric = (name: string, value: number) => {
  // Round to 2 decimal places
  const roundedValue = Math.round(value * 100) / 100;
  
  // In production, send to analytics service
  if (import.meta.env.PROD) {
    // Example: Google Analytics
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'performance', {
        metric_name: name,
        value: roundedValue,
        metric_unit: 'ms'
      });
    }
  } else {
    // Development logging
    if (roundedValue > getThreshold(name)) {
      console.warn(`Performance Warning: ${name} = ${roundedValue}ms (threshold: ${getThreshold(name)}ms)`);
    }
  }
};

// Performance thresholds
const getThreshold = (metric: string): number => {
  const thresholds: Record<string, number> = {
    'LCP': 2500, // Good < 2.5s
    'FID': 100,  // Good < 100ms
    'CLS': 0.1,  // Good < 0.1
    'DNS': 50,
    'TCP': 150,
    'Request': 200,
    'Response': 800,
    'DOM Processing': 1500,
    'Load Complete': 100
  };
  return thresholds[metric] || 1000;
};

// Resource hints for faster loading
export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    { rel: 'dns-prefetch', href: 'https://bulumba.ug' },
    { rel: 'dns-prefetch', href: 'https://api.bulumba.ug' },
  ];
  
  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.setAttribute('crossorigin', hint.crossorigin);
    }
    document.head.appendChild(link);
  });
};

// Lazy load images
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
};

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    measurePerformance();
    addResourceHints();
    
    // Setup lazy loading when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', lazyLoadImages);
    } else {
      lazyLoadImages();
    }
  }
};