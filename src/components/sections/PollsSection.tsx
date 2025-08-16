import { useState } from 'react';
import { motion } from 'framer-motion';
import { Vote, BarChart3, TrendingUp, MessageSquare } from 'lucide-react';
import { PollCard } from '../polls/PollCard';
import { AnalyticsDashboard } from '../polls/AnalyticsDashboard';
import { ShareButton } from '../ShareButton';
import { usePoll } from '../../contexts/PollContext';
import { cn } from '../../utils/cn';

interface PollsSectionProps {
  highlightedPollId?: string | null;
}

const PollsSection = ({ highlightedPollId }: PollsSectionProps) => {
  const { polls, analytics } = usePoll();
  const [activeTab, setActiveTab] = useState<'polls' | 'analytics'>('polls');

  return (
    <section className="section bg-gray-50" id="polls-section">
      <div className="container pt-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Vote className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900">
              Your Voice <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Matters</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Shape the future of Makerere University. Vote on key issues and see real-time results.
          </p>
          <div className="mt-4">
            <ShareButton
              config={{
                title: "Vote on Campus Issues - Bulumba Polls",
                description: `Join ${analytics.totalParticipants.toLocaleString()} students shaping Makerere's future. Vote on ${polls.length} active polls!`,
                hashtags: ['MakerereVotes', 'StudentVoice', 'BulumbaBuildBack']
              }}
              variant="text"
              buttonText="Share Polls"
            />
          </div>
        </motion.div>

        {/* Live Stats Banner */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">{analytics.totalParticipants.toLocaleString()}</div>
              <div className="text-white/80 text-sm">Students Engaged</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{polls.length}</div>
              <div className="text-white/80 text-sm">Active Polls</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{analytics.engagementRate.toFixed(2)}%</div>
              <div className="text-white/80 text-sm">Engagement Rate</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              <div className="text-white/80 text-sm">Live Updates</div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-xl shadow-md p-1">
            <button
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2",
                activeTab === 'polls'
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setActiveTab('polls')}
            >
              <MessageSquare className="w-5 h-5" />
              Active Polls
            </button>
            <button
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2",
                activeTab === 'analytics'
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={() => setActiveTab('analytics')}
            >
              <BarChart3 className="w-5 h-5" />
              Analytics
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'polls' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {polls.filter(poll => poll.isActive).map((poll, index) => (
              <motion.div
                key={poll.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={highlightedPollId === poll.id ? 'ring-4 ring-purple-500 ring-opacity-50 rounded-lg' : ''}
              >
                <PollCard poll={poll} isHighlighted={highlightedPollId === poll.id} />
              </motion.div>
            ))}
          </div>
        ) : (
          <AnalyticsDashboard />
        )}

        {/* Call to Action */}
        {activeTab === 'polls' && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 text-purple-700 rounded-full">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">
                New polls added weekly based on student feedback
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PollsSection;