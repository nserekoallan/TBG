import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Vote, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VotePage = () => {
  const [votes, setVotes] = useState<{[key: string]: string}>({});
  
  const activePolls = [
    {
      id: 'campus-wifi',
      title: 'Campus WiFi Upgrade Priority',
      description: 'Which areas should receive WiFi upgrades first?',
      options: ['Library & Study Areas', 'Hostels', 'Lecture Halls', 'Recreation Centers'],
      deadline: '2024-02-25',
      totalVotes: 1247,
      category: 'Infrastructure'
    },
    {
      id: 'dining-hours',
      title: 'Extended Dining Hall Hours',
      description: 'Should dining halls extend operating hours during exam periods?',
      options: ['Yes, until 11 PM', 'Yes, until 10 PM', 'Keep current hours', 'Weekend extension only'],
      deadline: '2024-02-20',
      totalVotes: 892,
      category: 'Campus Life'
    },
    {
      id: 'scholarship-criteria',
      title: 'Guild Scholars Fund Criteria',
      description: 'What should be the primary criteria for scholarship selection?',
      options: ['Academic Merit', 'Financial Need', 'Community Service', 'Mixed Criteria'],
      deadline: '2024-02-28',
      totalVotes: 1556,
      category: 'Financial Aid'
    }
  ];

  const handleVote = (pollId: string, option: string) => {
    setVotes(prev => ({ ...prev, [pollId]: option }));
  };

  const submitVote = (pollId: string) => {
    // In a real app, this would submit to an API
    console.log('Submitting vote for poll:', pollId, 'Option:', votes[pollId]);
    alert('Vote submitted successfully! Thank you for participating.');
  };

  const getDaysLeft = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Vote className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Voting</h1>
              <p className="text-gray-600">Your voice matters - participate in university decisions</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-900">3</div>
              <div className="text-blue-700">Active Polls</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-900">3,695</div>
              <div className="text-green-700">Total Votes Cast</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-900">89%</div>
              <div className="text-purple-700">Student Participation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Polls */}
      <section className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {activePolls.map((poll) => {
            const daysLeft = getDaysLeft(poll.deadline);
            const hasVoted = votes[poll.id];
            
            return (
              <Card key={poll.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{poll.title}</CardTitle>
                        <Badge variant="outline">{poll.category}</Badge>
                      </div>
                      <p className="text-gray-600">{poll.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{daysLeft} days left</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{poll.totalVotes.toLocaleString()} votes</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {poll.options.map((option, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="radio"
                          id={`${poll.id}-${index}`}
                          name={poll.id}
                          value={option}
                          checked={votes[poll.id] === option}
                          onChange={() => handleVote(poll.id, option)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                        />
                        <label 
                          htmlFor={`${poll.id}-${index}`}
                          className="ml-3 text-gray-700 cursor-pointer flex-1"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Deadline: {new Date(poll.deadline).toLocaleDateString('en-UG', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <Button
                      onClick={() => submitVote(poll.id)}
                      disabled={!hasVoted}
                      className={hasVoted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
                    >
                      {hasVoted ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Submit Vote
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 mr-2" />
                          Select Option
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Voting Guidelines */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Voting Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <ul className="space-y-2">
              <li>• One vote per poll per student</li>
              <li>• Votes are anonymous and confidential</li>
              <li>• Results will be published after each poll closes</li>
              <li>• Your student ID is required for verification</li>
              <li>• Contact the Student Council for questions or concerns</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default VotePage;