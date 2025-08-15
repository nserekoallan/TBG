import { memo } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, MessageCircle } from 'lucide-react';
import { ShareButton } from '../ShareButton';

interface CallToActionProps {
  onEndorse: () => void;
  onWhatsApp: () => void;
}

const CallToAction = memo(({ onEndorse, onWhatsApp }: CallToActionProps) => {
  return (
    <section className="section bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden relative" aria-label="Call to Action">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-responsive-4xl font-black text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-responsive-xl text-white/90 mb-8">
            Join thousands of students who believe in excellence
          </p>
          
          <div className="mb-8">
            <ShareButton
              config={{
                title: "Join Timothy Bulumba's Movement",
                description: "Be part of the Build Back Better campaign. Transform Makerere University with innovation and excellence!",
                hashtags: ['BulumbaBuildBack', 'MakerereVotes2025', 'StudentPower']
              }}
              variant="button"
              buttonText="Share Campaign"
              className="bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30"
            />
          </div>
          
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="px-12 py-5 bg-white text-purple-600 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEndorse}
              aria-label="Join the movement"
            >
              <Crown className="w-7 h-7 mr-3 inline" />
              JOIN THE MOVEMENT
              <Sparkles className="w-7 h-7 ml-3 inline" />
            </motion.button>
            
            <motion.button
              className="px-12 py-5 bg-transparent text-white border-2 border-white rounded-2xl font-black text-xl hover:bg-white hover:text-purple-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onWhatsApp}
              aria-label="Chat with Timothy on WhatsApp"
            >
              <MessageCircle className="w-7 h-7 mr-3 inline" />
              CHAT WITH TIMOTHY
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

CallToAction.displayName = 'CallToAction';

export default CallToAction;