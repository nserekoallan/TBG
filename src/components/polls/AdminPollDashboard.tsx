import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Edit2, Trash2, Eye, EyeOff, Copy, 
  BarChart3, Users, TrendingUp, Share2, Settings 
} from 'lucide-react';
import { usePoll } from '../../contexts/PollContext';
import type { Poll } from '../../contexts/PollContext';
import { SharePollModal } from './SharePollModal';
import { cn } from '../../utils/cn';

export const AdminPollDashboard = () => {
  const { polls, analytics } = usePoll();
  const [selectedPoll, setSelectedPoll] = useState<Poll | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Form state for new poll
  const [newPoll, setNewPoll] = useState({
    question: '',
    category: 'campus' as Poll['category'],
    options: ['', '', '', ''],
    duration: 7 // days
  });
  
  const handleCreatePoll = () => {
    // In production, this would call an API
    console.log('Creating poll:', newPoll);
    setShowCreateForm(false);
    // Reset form
    setNewPoll({
      question: '',
      category: 'campus',
      options: ['', '', '', ''],
      duration: 7
    });
  };
  
  const copyPollLink = async (pollId: string) => {
    const url = `${window.location.origin}/vote/${pollId}`;
    await navigator.clipboard.writeText(url);
    setCopiedId(pollId);
    setTimeout(() => setCopiedId(null), 2000);
  };
  
  const togglePollStatus = (pollId: string) => {
    // In production, this would call an API
    console.log('Toggling poll status:', pollId);
  };
  
  const deletePoll = (pollId: string) => {
    if (confirm('Are you sure you want to delete this poll?')) {
      // In production, this would call an API
      console.log('Deleting poll:', pollId);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Settings className="w-6 h-6 text-purple-600" />
            Poll Management Dashboard
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Create, manage, and share polls with students
          </p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create New Poll
        </button>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">Total Polls</p>
              <p className="text-2xl font-bold text-gray-900">{polls.length}</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Active Polls</p>
              <p className="text-2xl font-bold text-gray-900">
                {polls.filter(p => p.isActive).length}
              </p>
            </div>
            <Eye className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Total Votes</p>
              <p className="text-2xl font-bold text-gray-900">
                {polls.reduce((sum, p) => sum + p.totalVotes, 0).toLocaleString()}
              </p>
            </div>
            <Users className="w-8 h-8 text-green-600" />
          </div>
        </div>
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">Engagement</p>
              <p className="text-2xl font-bold text-gray-900">{analytics.engagementRate.toFixed(2)}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>
      
      {/* Polls Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Poll Question</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Votes</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {polls.map((poll) => (
              <tr key={poll.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-gray-900 line-clamp-1">{poll.question}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      ID: {poll.id} • {poll.options.length} options
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold",
                    poll.category === 'policy' && "bg-purple-100 text-purple-700",
                    poll.category === 'campus' && "bg-blue-100 text-blue-700",
                    poll.category === 'social' && "bg-pink-100 text-pink-700",
                    poll.category === 'academic' && "bg-green-100 text-green-700"
                  )}>
                    {poll.category}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">{poll.totalVotes.toLocaleString()}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => togglePollStatus(poll.id)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition-colors",
                      poll.isActive 
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {poll.isActive ? (
                      <>
                        <Eye className="w-3 h-3" />
                        Active
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3" />
                        Inactive
                      </>
                    )}
                  </button>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyPollLink(poll.id)}
                      className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="Copy poll link"
                    >
                      {copiedId === poll.id ? (
                        <span className="text-xs font-semibold text-green-600">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setSelectedPoll(poll);
                        setShowShareModal(true);
                      }}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Share poll"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      title="Edit poll"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deletePoll(poll.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete poll"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Create Poll Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Create New Poll</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poll Question
                </label>
                <input
                  type="text"
                  value={newPoll.question}
                  onChange={(e) => setNewPoll({ ...newPoll, question: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="What should be our top priority?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newPoll.category}
                  onChange={(e) => setNewPoll({ ...newPoll, category: e.target.value as Poll['category'] })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="policy">Policy</option>
                  <option value="campus">Campus</option>
                  <option value="social">Social</option>
                  <option value="academic">Academic</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Options (min 2, max 6)
                </label>
                {newPoll.options.map((option, index) => (
                  <input
                    key={index}
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...newPoll.options];
                      newOptions[index] = e.target.value;
                      setNewPoll({ ...newPoll, options: newOptions });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Option ${index + 1}`}
                  />
                ))}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (days)
                </label>
                <input
                  type="number"
                  value={newPoll.duration}
                  onChange={(e) => setNewPoll({ ...newPoll, duration: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  min="1"
                  max="30"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowCreateForm(false)}
                className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePoll}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg"
              >
                Create Poll
              </button>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Share Modal */}
      {selectedPoll && (
        <SharePollModal
          poll={selectedPoll}
          isOpen={showShareModal}
          onClose={() => {
            setShowShareModal(false);
            setSelectedPoll(null);
          }}
        />
      )}
    </div>
  );
};