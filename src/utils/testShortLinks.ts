// Test file to verify shortlink functionality
import { 
  generateShortCode, 
  generatePollLinks, 
  generateBrandedLink,
  getPollIdFromShortCode,
  getPollIdFromBrandedSlug
} from './urlShortener';

// Test the shortlink system
export const testShortLinks = () => {
  console.log('Testing Shortlink System...');
  
  // Test poll ID
  const testPollId = 'poll-student-campus-food-quality';
  const testPollTitle = 'Campus Food Quality Improvement';
  
  // Generate short code
  const shortCode = generateShortCode(testPollId);
  console.log('Generated short code:', shortCode);
  
  // Generate all poll links
  const links = generatePollLinks(testPollId);
  console.log('Generated links:', links);
  
  // Generate branded link
  const brandedLink = generateBrandedLink(testPollId, testPollTitle);
  console.log('Generated branded link:', brandedLink);
  
  // Test retrieval
  const retrievedPollId1 = getPollIdFromShortCode(shortCode);
  console.log('Retrieved poll ID from short code:', retrievedPollId1);
  
  // Extract slug from branded link for testing
  const urlParts = new URL(brandedLink);
  const slug = urlParts.pathname.substring(1); // Remove leading slash
  const retrievedPollId2 = getPollIdFromBrandedSlug(slug);
  console.log('Retrieved poll ID from branded slug:', retrievedPollId2);
  
  // Verify both match
  console.log('Short code test passed:', retrievedPollId1 === testPollId);
  console.log('Branded link test passed:', retrievedPollId2 === testPollId);
  
  return {
    shortCode,
    links,
    brandedLink,
    testsPassed: retrievedPollId1 === testPollId && retrievedPollId2 === testPollId
  };
};

// Run test in development
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  // Make test available globally for console testing
  (window as any).testShortLinks = testShortLinks;
}