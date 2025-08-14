import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Clock, BarChart3, Share2 } from 'lucide-react';
import { usePoll } from '../../contexts/PollContext';
import type { Poll } from '../../contexts/PollContext';
import { SharePollModal } from './SharePollModal';
import { cn } from '../../utils/cn';
import { formatDistanceToNow } from 'date-fns';

interface PollCardProps {
  poll: Poll;
}

export const PollCard = ({ poll }: PollCardProps) => {
  const { vote, userVotes, subscribeToUpdates, unsubscribeFromUpdates } = usePoll();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const hasVoted = userVotes.has(poll.id);
  const userVote = userVotes.get(poll.id);

  useEffect(() => {
    // Subscribe to real-time updates when component mounts
    subscribeToUpdates(poll.id);
    
    return () => {
      // Unsubscribe when component unmounts
      unsubscribeFromUpdates(poll.id);
    };
  }, [poll.id, subscribeToUpdates, unsubscribeFromUpdates]);

  const handleVote = async () => {
    if (!selectedOption || hasVoted) return;
    
    setIsVoting(true);
    try {
      await vote(poll.id, selectedOption);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Vote failed:', error);
    } finally {
      setIsVoting(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'policy': return 'from-purple-500 to-indigo-500';
      case 'campus': return 'from-blue-500 to-cyan-500';
      case 'social': return 'from-pink-500 to-rose-500';
      case 'academic': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className={cn(
        "p-4 bg-gradient-to-r text-white",
        getCategoryColor(poll.category)
      )}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
            {poll.category}
          </span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4" />
              {formatDistanceToNow(poll.endsAt, { addSuffix: true })}
            </span>
            <button
              onClick={() => setShowShareModal(true)}
              className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              aria-label="Share poll"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <h3 className="text-xl font-bold">{poll.question}</h3>
      </div>

      {/* Poll Options */}
      <div className="p-6 space-y-3">
        {poll.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const isUserVote = userVote === option.id;
          const isWinning = Math.max(...poll.options.map(o => o.votes)) === option.votes;

          return (
            <motion.div
              key={option.id}
              className={cn(
                "relative cursor-pointer transition-all",
                hasVoted ? "cursor-default" : "hover:scale-[1.02]"
              )}
              onClick={() => !hasVoted && setSelectedOption(option.id)}
              whileTap={!hasVoted ? { scale: 0.98 } : {}}
            >
              <div className={cn(
                "relative rounded-lg border-2 p-4 transition-all",
                isSelected && !hasVoted && "border-purple-500 bg-purple-50",
                !isSelected && !hasVoted && "border-gray-200 hover:border-gray-300",
                isUserVote && "border-green-500 bg-green-50",
                !isUserVote && hasVoted && "border-gray-200 bg-gray-50"
              )}>
                {/* Option Text and Vote Count */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {!hasVoted && (
                      <div className={cn(
                        "w-5 h-5 rounded-full border-2 transition-all",
                        isSelected 
                          ? "border-purple-500 bg-purple-500" 
                          : "border-gray-300"
                      )}>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-full h-full flex items-center justify-center"
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                        )}
                      </div>
                    )}
                    {isUserVote && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    <span className={cn(
                      "font-medium",
                      isWinning && hasVoted && "text-purple-600"
                    )}>
                      {option.text}
                    </span>
                    {isWinning && hasVoted && (
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-semibold">
                        Leading
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <motion.span
                      key={option.votes}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="font-semibold"
                    >
                      {option.votes.toLocaleString()}
                    </motion.span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={cn(
                      "absolute left-0 top-0 h-full rounded-full",
                      isUserVote 
                        ? "bg-green-500" 
                        : isWinning 
                        ? "bg-gradient-to-r from-purple-500 to-purple-600"
                        : "bg-gray-400"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${option.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>

                {/* Percentage */}
                <div className="mt-1 text-right">
                  <motion.span
                    key={option.percentage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm font-bold text-gray-700"
                  >
                    {option.percentage}%
                  </motion.span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              {poll.totalVotes.toLocaleString()} votes
            </span>
            {poll.totalVotes > 0 && (
              <motion.span
                className="flex items-center gap-1 text-green-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <TrendingUp className="w-4 h-4" />
                Live
              </motion.span>
            )}
          </div>

          {!hasVoted && (
            <motion.button
              className={cn(
                "px-6 py-2 rounded-lg font-semibold transition-all",
                selectedOption 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              )}
              onClick={handleVote}
              disabled={!selectedOption || isVoting}
              whileHover={selectedOption ? { scale: 1.05 } : {}}
              whileTap={selectedOption ? { scale: 0.95 } : {}}
            >
              {isVoting ? "Voting..." : "Submit Vote"}
            </motion.button>
          )}
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Your vote has been recorded!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Share Modal */}
      <SharePollModal
        poll={poll}
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </motion.div>
  );
};