// Import all Timothy images from the folder
import timothy1 from '../assets/images/timothy-1.jpg?url';
import timothy2 from '../assets/images/timothy-2.jpg?url';
import timothy3 from '../assets/images/timothy-3.jpg?url';
import timothy4 from '../assets/images/timothy-4.jpg?url';
import timothy5 from '../assets/images/timothy-5.jpg?url';
import timothy6 from '../assets/images/timothy-6.jpg?url';
import timothy7 from '../assets/images/timothy-7.jpg?url';
import timothy8 from '../assets/images/timothy-8.jpg?url';

export const HERO_IMAGES = [
  timothy1, 
  timothy2, 
  timothy3, 
  timothy4, 
  timothy5, 
  timothy6, 
  timothy7, 
  timothy8
];

console.log('📸 ALL Timothy images loaded:', {
  count: HERO_IMAGES.length,
  images: HERO_IMAGES
});