// Professional URL shortener for poll sharing

interface ShortLinkConfig {
  domain: string;
  baseUrl: string;
  shortPrefix: string;
}

interface ShortLinkMapping {
  pollId: string;
  shortCode: string;
  brandedSlug: string;
  createdAt: string;
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

// Storage keys for localStorage
const SHORTLINK_STORAGE_KEY = 'bulumba_shortlinks';
const BRANDED_STORAGE_KEY = 'bulumba_branded_links';

/**
 * Generate a short code for poll IDs
 */
export const generateShortCode = (pollId: string): string => {
  // Check if we already have a short code for this poll
  const existing = getShortLinkMapping(pollId);
  if (existing) {
    return existing.shortCode;
  }

  // Convert poll ID to a short alphanumeric code
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 5);
  const shortCode = `${timestamp.slice(-4)}${random}`.toUpperCase();
  
  // Store the mapping
  storeShortLinkMapping(pollId, shortCode);
  
  return shortCode;
};

/**
 * Store shortlink mapping in localStorage
 */
const storeShortLinkMapping = (pollId: string, shortCode: string): void => {
  try {
    const mappings = getStoredMappings();
    mappings[shortCode] = {
      pollId,
      shortCode,
      brandedSlug: '',
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(SHORTLINK_STORAGE_KEY, JSON.stringify(mappings));
  } catch (error) {
    console.warn('Failed to store shortlink mapping:', error);
  }
};

/**
 * Get stored mappings from localStorage
 */
const getStoredMappings = (): Record<string, ShortLinkMapping> => {
  try {
    const stored = localStorage.getItem(SHORTLINK_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn('Failed to retrieve shortlink mappings:', error);
    return {};
  }
};

/**
 * Get shortlink mapping for a poll ID
 */
const getShortLinkMapping = (pollId: string): ShortLinkMapping | null => {
  const mappings = getStoredMappings();
  return Object.values(mappings).find(mapping => mapping.pollId === pollId) || null;
};

/**
 * Get poll ID from short code
 */
export const getPollIdFromShortCode = (shortCode: string): string | null => {
  const mappings = getStoredMappings();
  const mapping = mappings[shortCode];
  return mapping ? mapping.pollId : null;
};

/**
 * Generate professional shareable links
 */
export const generatePollLinks = (pollId: string) => {
  const shortCode = generateShortCode(pollId);
  
  return {
    // Main professional link
    full: `${activeConfig.baseUrl}`,
    
    // Short link for easy sharing
    short: `${activeConfig.baseUrl}/${activeConfig.shortPrefix}/${shortCode}`,
    
    // QR code friendly link
    qr: `${activeConfig.baseUrl}/${activeConfig.shortPrefix}/${shortCode}`,
    
    // Social media friendly links
    social: {
      whatsapp: `${activeConfig.baseUrl}/${activeConfig.shortPrefix}/${shortCode}`,
      twitter: `${activeConfig.baseUrl}/${activeConfig.shortPrefix}/${shortCode}`,
      facebook: `${activeConfig.baseUrl}/${activeConfig.shortPrefix}/${shortCode}`
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
 * Store branded link mapping
 */
const storeBrandedLinkMapping = (pollId: string, slug: string): void => {
  try {
    const mappings = getBrandedMappings();
    mappings[slug] = {
      pollId,
      shortCode: '',
      brandedSlug: slug,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(BRANDED_STORAGE_KEY, JSON.stringify(mappings));
  } catch (error) {
    console.warn('Failed to store branded link mapping:', error);
  }
};

/**
 * Get branded mappings from localStorage
 */
const getBrandedMappings = (): Record<string, ShortLinkMapping> => {
  try {
    const stored = localStorage.getItem(BRANDED_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.warn('Failed to retrieve branded link mappings:', error);
    return {};
  }
};

/**
 * Get poll ID from branded slug
 */
export const getPollIdFromBrandedSlug = (slug: string): string | null => {
  const mappings = getBrandedMappings();
  const mapping = mappings[slug];
  return mapping ? mapping.pollId : null;
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
  
  const slug = `${urlSafeTitle}-${pollId}`;
  
  // Store the mapping
  storeBrandedLinkMapping(pollId, slug);
  
  return `${activeConfig.baseUrl}/${slug}`;
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