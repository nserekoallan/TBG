// Professional URL shortener for poll sharing

interface ShortLinkConfig {
  domain: string;
  baseUrl: string;
  shortPrefix: string;
}

// Production configuration
const config: ShortLinkConfig = {
  domain: 'timothybulumba.com', // Professional domain for voting
  baseUrl: 'https://www.timothybulumba.com',
  shortPrefix: 'p' // p for poll
};

// Fallback for development
const devConfig: ShortLinkConfig = {
  domain: 'timothybulumba.com',
  baseUrl: 'https://www.timothybulumba.com',
  shortPrefix: 'poll'
};

// Use production config if available, otherwise development
const activeConfig = import.meta.env.PROD ? config : devConfig;

/**
 * Generate a short code for poll IDs
 */
export const generateShortCode = (_pollId: string): string => {
  // Convert poll ID to a short alphanumeric code
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 5);
  return `${timestamp.slice(-4)}${random}`.toUpperCase();
};

/**
 * Generate professional shareable links
 */
export const generatePollLinks = (pollId: string) => {
  const shortCode = generateShortCode(pollId);
  
  return {
    // Main professional link
    full: `${activeConfig.baseUrl}/vote/${pollId}`,
    
    // Short link for easy sharing
    short: `${activeConfig.baseUrl}/${activeConfig.shortPrefix}/${shortCode}`,
    
    // QR code friendly link
    qr: `${activeConfig.domain}/${shortCode}`,
    
    // Social media friendly links
    social: {
      whatsapp: `${activeConfig.domain}/w/${shortCode}`,
      twitter: `${activeConfig.domain}/t/${shortCode}`,
      facebook: `${activeConfig.domain}/f/${shortCode}`
    },
    
    // Embed link for websites
    embed: `${activeConfig.baseUrl}/embed/${pollId}`,
    
    // Direct API endpoint
    api: `${activeConfig.baseUrl}/api/poll/${pollId}`
  };
};

/**
 * Generate campaign-specific links
 */
export const generateCampaignLinks = () => {
  return {
    main: 'https://www.timothybulumba.com',
    vote: 'https://www.timothybulumba.com/vote',
    campaign: 'https://www.timothybulumba.com/campaigns',
    join: 'https://www.timothybulumba.com/join'
  };
};

/**
 * Format link for display (show domain only)
 */
export const formatLinkForDisplay = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname + urlObj.pathname;
  } catch {
    // If not a valid URL, return a formatted version
    return `${activeConfig.domain}/poll`;
  }
};

/**
 * Generate a branded short link
 */
export const generateBrandedLink = (pollId: string, title: string): string => {
  // Create a URL-safe version of the title
  const urlSafeTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 30);
  
  return `${activeConfig.baseUrl}/${urlSafeTitle}-${pollId}`;
};

/**
 * Get QR code URL with branding
 */
export const getQRCodeUrl = (pollUrl: string): string => {
  const encodedUrl = encodeURIComponent(pollUrl);
  // Using a reliable QR code service with customization
  return `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodedUrl}&bgcolor=FFFFFF&color=7C3AED&format=png&margin=20`;
};

/**
 * Track link clicks (for analytics)
 */
export const trackLinkClick = (linkType: string, pollId: string) => {
  // In production, this would send to analytics service
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share_link_click', {
      event_category: 'poll_sharing',
      event_label: linkType,
      poll_id: pollId
    });
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: any;
  }
}