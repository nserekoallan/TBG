/**
 * Utility to handle form submissions via WhatsApp
 */

export interface WhatsAppFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  college?: string;
  [key: string]: string | undefined;
}

export const submitToWhatsApp = (
  formType: 'contact' | 'join' | 'volunteer' | 'partner' | 'general',
  formData: WhatsAppFormData
): void => {
  const phoneNumber = '256703743491'; // Timothy's WhatsApp number
  
  let messageHeader = '';
  let messageFooter = '';
  
  // Set header based on form type
  switch(formType) {
    case 'contact':
      messageHeader = '*📧 New Contact Form Submission*';
      messageFooter = '_Sent from Contact page_';
      break;
    case 'join':
      messageHeader = '*🎯 New Join Us Application*';
      messageFooter = '_I want to join the Build Back Better movement!_';
      break;
    case 'volunteer':
      messageHeader = '*🙋 New Volunteer Application*';
      messageFooter = '_I want to volunteer for the campaign!_';
      break;
    case 'partner':
      messageHeader = '*🤝 New Partnership Inquiry*';
      messageFooter = '_Looking forward to partnership opportunities!_';
      break;
    default:
      messageHeader = '*📝 New Form Submission*';
      messageFooter = '_Sent from Bulumba Build Back Better website_';
  }
  
  // Build the message
  let message = `${messageHeader}\n\n`;
  
  // Add form fields
  if (formData.name) message += `*Name:* ${formData.name}\n`;
  if (formData.email) message += `*Email:* ${formData.email}\n`;
  if (formData.phone) message += `*Phone:* ${formData.phone}\n`;
  if (formData.college) message += `*College/Institution:* ${formData.college}\n`;
  if (formData.subject) message += `*Subject:* ${formData.subject}\n`;
  
  // Add message if present
  if (formData.message) {
    message += `\n*Message:*\n${formData.message}\n`;
  }
  
  // Add footer
  message += `\n${messageFooter}`;
  
  // Encode and open WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank');
};

/**
 * Direct WhatsApp link for quick contact
 */
export const openWhatsAppChat = (customMessage?: string): void => {
  const phoneNumber = '256703743491';
  const defaultMessage = "Hi Timothy! I just visited your amazing website. I want to support Build Back Better!";
  const message = encodeURIComponent(customMessage || defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
};