import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Target, Vote, Users, MessageCircle, 
  Menu, X, Heart, Share2, ExternalLink,
  ChevronRight, Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface MobileNavigationProps {
  endorsements: number;
  onEndorse: () => void;
  onWhatsApp: () => void;
}

export const MobileNavigation = ({ endorsements, onEndorse, onWhatsApp }: MobileNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { 
      icon: Home, 
      label: 'Home', 
      action: () => window.scrollTo(0, 0),
      color: 'text-blue-600'
    },
    { 
      icon: Target, 
      label: 'Campaigns', 
      action: () => document.getElementById('campaigns-mobile')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'text-purple-600'
    },
    { 
      icon: Vote, 
      label: 'Vote', 
      action: () => document.getElementById('polls-section')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'text-green-600'
    },
    { 
      icon: Users, 
      label: 'About', 
      action: () => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'text-orange-600'
    }
  ];

  const socialActions = [
    {
      icon: MessageCircle,
      label: 'Chat on WhatsApp',
      action: onWhatsApp,
      bg: 'bg-green-600',
      description: 'Get instant updates'
    },
    {
      icon: Heart,
      label: 'Endorse Timothy',
      action: onEndorse,
      bg: 'bg-red-500',
      description: `Join ${endorsements.toLocaleString()} supporters`
    },
    {
      icon: Share2,
      label: 'Share Campaign',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Timothy Bulumba - Build Back Better',
            text: 'Join the movement for positive change at Makerere University!',
            url: window.location.href,
          });
        }
      },
      bg: 'bg-blue-600',
      description: 'Spread the word'
    }
  ];

  return (
    <>
      {/* Fixed Top Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-black text-sm text-gray-900">TIMOTHY</div>
              <div className="text-xs text-purple-600 font-semibold">BUILD BACK BETTER</div>
            </div>
          </div>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </motion.div>

      {/* Fixed Bottom Navigation */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="grid grid-cols-4 px-2 py-2">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={item.action}
              className="flex flex-col items-center gap-1 p-3 rounded-xl"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <item.icon className={cn("w-5 h-5", item.color)} />
              <span className="text-xs font-semibold text-gray-600">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Menu</h2>
                <p className="text-sm text-gray-600">Navigate & take action</p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {/* Quick Actions */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {socialActions.map((action, index) => (
                    <motion.button
                      key={action.label}
                      onClick={() => {
                        action.action();
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", action.bg)}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-gray-900">{action.label}</div>
                        <div className="text-sm text-gray-600">{action.description}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Navigation</h3>
                <div className="grid grid-cols-2 gap-3">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => {
                        item.action();
                        setIsMenuOpen(false);
                      }}
                      className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl"
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <item.icon className={cn("w-8 h-8", item.color)} />
                      <span className="font-semibold text-gray-700">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Visit Website', url: 'https://timothybulumba.com' },
                    { label: 'Facebook Page', url: '#' },
                    { label: 'Twitter Profile', url: '#' },
                    { label: 'Instagram', url: '#' }
                  ].map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <span className="font-semibold text-gray-700">{link.label}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-900 mb-1">
                  Timothy Bulumba - Build Back Better
                </div>
                <div className="text-xs text-gray-600">
                  Your voice for change at Makerere University
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};