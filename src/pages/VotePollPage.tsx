import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, MessageCircle } from 'lucide-react';
import { PollProvider, usePoll } from '../contexts/PollContext';
import { PollCard } from '../components/polls/PollCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VotePollContent = () => {
  const { pollId } = useParams<{ pollId: string }>();
  const { polls } = usePoll();
  
  // Find the specific poll
  const poll = polls.find(p => p.id === pollId);
  
  if (!poll) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Poll Not Found</h1>
          <p className="text-gray-600 mb-6">The poll you're looking for doesn't exist or has ended.</p>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Timothy! I just voted on your poll. I want to support Build Back Better!');
    window.open(`https://wa.me/256703743491?text=${message}`, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Campaign
          </Link>
        </motion.div>
        
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Voice <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Matters</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cast your vote and help shape the future of Makerere University with Timothy Bulumba's Build Back Better campaign.
          </p>
        </motion.div>
        
        {/* Poll Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <PollCard poll={poll} />
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Learn More?
            </h2>
            <p className="text-gray-600 mb-6">
              Explore Timothy Bulumba's vision for Makerere University and see how together we can Build Back Better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#campaigns"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                View All Campaigns
              </Link>
              <button
                onClick={openWhatsApp}
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Timothy
              </button>
            </div>
          </div>
          
          {/* More Polls Link */}
          <Link 
            to="/#polls"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            View More Polls →
          </Link>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

const VotePollPage = () => {
  return (
    <PollProvider>
      <VotePollContent />
    </PollProvider>
  );
};

export default VotePollPage;