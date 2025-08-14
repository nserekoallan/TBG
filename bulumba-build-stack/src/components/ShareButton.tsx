import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, Copy, Check, MessageCircle, Twitter, 
  Facebook, Mail, Send, X 
} from 'lucide-react';
import { cn } from '../utils/cn';

export interface ShareConfig {
  url?: string;
  title: string;
  description: string;
  hashtags?: string[];
  via?: string;
}

interface ShareButtonProps {
  config: ShareConfig;
  variant?: 'button' | 'icon' | 'text';
  className?: string;
  buttonText?: string;
}

export const ShareButton = ({ 
  config, 
  variant = 'button', 
  className,
  buttonText = 'Share'
}: ShareButtonProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Generate professional URL with proper sanitization
  const baseUrl = 'https://bulumba.ug';
  const currentPath = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.pathname.replace(/[^a-zA-Z0-9-_/]/g, ''))
    : '';
  const shareUrl = config.url || `${baseUrl}${currentPath}`;
  
  // Format message for different platforms
  const getShareMessage = (platform: string) => {
    const base = `${config.title}\n\n${config.description}`;
    const hashtags = config.hashtags ? config.hashtags.map(tag => `#${tag}`).join(' ') : '';
    
    switch(platform) {
      case 'whatsapp':
        return `${base}\n\n🔗 ${shareUrl}\n\n${hashtags}`;
      case 'twitter':
        return `${config.title}\n\n${shareUrl}`;
      case 'email':
        return base;
      default:
        return base;
    }
  };
  
  const copyToClipboard = async () => {
    try {
      // Sanitize URL before copying
      const sanitizedUrl = shareUrl.replace(/[<>"']/g, '');
      await navigator.clipboard.writeText(sanitizedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silent fail - clipboard not available
    }
  };
  
  const share = (platform: string) => {
    const message = getShareMessage(platform);
    const encodedMessage = encodeURIComponent(message);
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(config.title);
    
    switch(platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
        break;
      case 'twitter':
        const hashtags = config.hashtags ? config.hashtags.join(',') : '';
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedMessage}&hashtags=${hashtags}${config.via ? `&via=${config.via}` : ''}`, 
          '_blank'
        );
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodedUrl}&text=${encodedMessage}`, '_blank');
        break;
      case 'email':
        const subject = encodedTitle;
        const body = encodeURIComponent(`${config.description}\n\nRead more: ${shareUrl}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        break;
    }
    
    setShowDropdown(false);
  };
  
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: config.title,
          text: config.description,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      setShowDropdown(true);
    }
  };

  const renderButton = () => {
    switch(variant) {
      case 'icon':
        return (
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={cn(
              "p-2 rounded-lg hover:bg-gray-100 transition-colors",
              className
            )}
            aria-label="Share"
          >
            <Share2 className="w-5 h-5" />
          </button>
        );
      
      case 'text':
        return (
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={cn(
              "text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1",
              className
            )}
          >
            <Share2 className="w-4 h-4" />
            {buttonText}
          </button>
        );
      
      default:
        return (
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={cn(
              "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium",
              "hover:shadow-lg transition-all inline-flex items-center gap-2",
              className
            )}
          >
            <Share2 className="w-4 h-4" />
            {buttonText}
          </button>
        );
    }
  };

  return (
    <div className="relative inline-block">
      {renderButton()}
      
      <AnimatePresence>
        {showDropdown && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setShowDropdown(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Share this page</span>
                  <button
                    onClick={() => setShowDropdown(false)}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Share Options */}
              <div className="p-2">
                {/* Copy Link */}
                <button
                  onClick={copyToClipboard}
                  className={cn(
                    "w-full px-3 py-2 rounded-lg flex items-center gap-3 transition-colors",
                    copied 
                      ? "bg-green-50 text-green-700" 
                      : "hover:bg-gray-50 text-gray-700"
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>Copy link</span>
                    </>
                  )}
                </button>
                
                <div className="h-px bg-gray-200 my-2" />
                
                {/* Social Platforms */}
                <button
                  onClick={() => share('whatsapp')}
                  className="w-full px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span>WhatsApp</span>
                </button>
                
                <button
                  onClick={() => share('twitter')}
                  className="w-full px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-sky-500" />
                  <span>Twitter</span>
                </button>
                
                <button
                  onClick={() => share('facebook')}
                  className="w-full px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <span>Facebook</span>
                </button>
                
                <button
                  onClick={() => share('telegram')}
                  className="w-full px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                >
                  <Send className="w-5 h-5 text-blue-500" />
                  <span>Telegram</span>
                </button>
                
                <button
                  onClick={() => share('email')}
                  className="w-full px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>Email</span>
                </button>
                
                {/* Native Share (if available) */}
                {navigator.share !== undefined && (
                  <>
                    <div className="h-px bg-gray-200 my-2" />
                    <button
                      onClick={shareNative}
                      className="w-full px-3 py-2 rounded-lg bg-purple-50 hover:bg-purple-100 flex items-center gap-3 text-purple-700 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">More options</span>
                    </button>
                  </>
                )}
              </div>
              
              {/* URL Preview */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-500 truncate">
                  {shareUrl.replace('https://', '')}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};