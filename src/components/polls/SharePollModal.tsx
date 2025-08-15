import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Copy, Check, Share2, MessageCircle, 
  Twitter, Facebook, Link2, QrCode, Mail, Globe, ExternalLink 
} from 'lucide-react';
import type { Poll } from '../../contexts/PollContext';
import { 
  generatePollLinks, 
  generateBrandedLink, 
  getQRCodeUrl,
  formatLinkForDisplay,
  trackLinkClick 
} from '../../utils/urlShortener';
import { cn } from '../../utils/cn';

interface SharePollModalProps {
  poll: Poll;
  isOpen: boolean;
  onClose: () => void;
}

export const SharePollModal = ({ poll, isOpen, onClose }: SharePollModalProps) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [selectedLinkType, setSelectedLinkType] = useState<'short' | 'branded' | 'full'>('short');
  
  // Generate professional URLs
  const links = generatePollLinks(poll.id);
  const brandedLink = generateBrandedLink(poll.id, poll.question);
  
  // Select which link to use based on user preference
  const getPrimaryLink = () => {
    switch(selectedLinkType) {
      case 'branded': return brandedLink;
      case 'full': return links.full;
      default: return links.short;
    }
  };
  
  const primaryLink = getPrimaryLink();
  const displayLink = formatLinkForDisplay(primaryLink);
  
  // Generate share message with professional link
  const shareMessage = `🗳️ Have your say! Vote on: "${poll.question}"\n\n✅ Cast your vote: ${links.qr}\n\n#BulumbaBuildBack #MakerereVotes #StudentVoice`;
  
  // Generate embed code for websites
  const embedCode = `<!-- Bulumba Campaign Poll Widget -->
<iframe 
  src="${links.embed}" 
  width="100%" 
  height="450" 
  frameborder="0"
  title="${poll.question}"
  loading="lazy">
</iframe>`;
  
  // Generate QR code URL with branding
  const qrCodeUrl = getQRCodeUrl(links.qr);
  
  const copyToClipboard = async (text: string, type: 'link' | 'embed') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'link') {
        setCopiedLink(true);
        trackLinkClick('copy', poll.id);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        setCopiedEmbed(true);
        setTimeout(() => setCopiedEmbed(false), 2000);
      }
    } catch (err) {
      // Silent fail - clipboard not available
    }
  };
  
  const shareViaWhatsApp = () => {
    const message = encodeURIComponent(shareMessage);
    trackLinkClick('whatsapp', poll.id);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };
  
  const shareViaTwitter = () => {
    const tweetText = `📊 "${poll.question}"\n\nVote now & make your voice heard at Makerere! 🗳️`;
    const message = encodeURIComponent(tweetText);
    const url = encodeURIComponent(links.social.twitter);
    trackLinkClick('twitter', poll.id);
    window.open(`https://twitter.com/intent/tweet?text=${message}&url=${url}&hashtags=BulumbaBuildBack,MakerereVotes`, '_blank');
  };
  
  const shareViaFacebook = () => {
    const url = encodeURIComponent(links.social.facebook);
    trackLinkClick('facebook', poll.id);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };
  
  const shareViaEmail = () => {
    const subject = encodeURIComponent(`Important Poll: ${poll.question}`);
    const body = encodeURIComponent(
      `Dear Student,\n\n${shareMessage}\n\nVote here: ${primaryLink}\n\nBest regards,\nTimothy Bulumba Campaign Team`
    );
    trackLinkClick('email', poll.id);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };
  
  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Poll: ${poll.question}`,
          text: shareMessage,
          url: primaryLink,
        });
      } catch (err) {
        // User cancelled or error
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <Share2 className="w-6 h-6 text-purple-600" />
                      Share Poll
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Share this poll with students to get more responses
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>
              
              {/* Poll Preview */}
              <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="text-sm text-purple-600 font-semibold mb-2">
                  {poll.category.toUpperCase()} POLL
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {poll.question}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{poll.totalVotes.toLocaleString()} votes</span>
                  <span>•</span>
                  <span>{poll.options.length} options</span>
                  <span>•</span>
                  <span>Ends {new Date(poll.endsAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              {/* Share Options */}
              <div className="p-6 space-y-6">
                {/* Link Type Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Choose Link Format
                  </label>
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() => setSelectedLinkType('short')}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        selectedLinkType === 'short'
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      <Link2 className="w-4 h-4 inline mr-1" />
                      Short Link
                    </button>
                    <button
                      onClick={() => setSelectedLinkType('branded')}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        selectedLinkType === 'branded'
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      <Globe className="w-4 h-4 inline mr-1" />
                      Branded Link
                    </button>
                    <button
                      onClick={() => setSelectedLinkType('full')}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        selectedLinkType === 'full'
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                    >
                      <ExternalLink className="w-4 h-4 inline mr-1" />
                      Full Link
                    </button>
                  </div>
                  
                  {/* Link Display and Copy */}
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={primaryLink}
                        readOnly
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg text-sm font-medium text-purple-900"
                      />
                      <div className="absolute top-0 right-2 h-full flex items-center">
                        <span className="text-xs text-purple-600 font-semibold bg-white px-2 py-1 rounded">
                          {displayLink}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(primaryLink, 'link')}
                      className={cn(
                        "px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2",
                        copiedLink
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
                      )}
                    >
                      {copiedLink ? (
                        <>
                          <Check className="w-5 h-5" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Professional URLs Display */}
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">Available Links:</p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">Short:</span> <span className="font-mono text-purple-600">timothybulumba.com/p/A7B3XYZ</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">QR-friendly:</span> <span className="font-mono text-purple-600">timothybulumba.com/A7B3XYZ</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">Branded:</span> <span className="font-mono text-purple-600">timothybulumba.com/campus-priority-1</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Sharing */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Share via Social Media
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <button
                      onClick={shareViaWhatsApp}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={shareViaTwitter}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="font-medium">Twitter</span>
                    </button>
                    
                    <button
                      onClick={shareViaFacebook}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-medium">Facebook</span>
                    </button>
                    
                    <button
                      onClick={shareViaEmail}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">Email</span>
                    </button>
                  </div>
                </div>
                
                {/* QR Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    QR Code for Printed Materials
                  </label>
                  <div className="flex items-center gap-4">
                    <img
                      src={qrCodeUrl}
                      alt="Poll QR Code"
                      className="w-32 h-32 border-2 border-gray-300 rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-2">
                        Students can scan this QR code to vote directly on their phones
                      </p>
                      <a
                        href={qrCodeUrl}
                        download={`poll-${poll.id}-qr.png`}
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm"
                      >
                        <QrCode className="w-4 h-4" />
                        Download QR Code
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Embed Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Embed on Website
                  </label>
                  <div className="flex gap-2">
                    <textarea
                      value={embedCode}
                      readOnly
                      rows={3}
                      className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-xs font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(embedCode, 'embed')}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all",
                        copiedEmbed
                          ? "bg-green-500 text-white"
                          : "bg-gray-600 text-white hover:bg-gray-700"
                      )}
                    >
                      {copiedEmbed ? (
                        <>
                          <Check className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Native Share (if available) */}
                {navigator.share !== undefined && (
                  <button
                    onClick={shareNative}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <Share2 className="w-5 h-5 inline mr-2" />
                    Share via Device
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};