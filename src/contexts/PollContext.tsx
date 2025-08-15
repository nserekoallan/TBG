import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface Poll {
  id: string;
  question: string;
  options: PollOption[];
  totalVotes: number;
  category: 'policy' | 'campus' | 'social' | 'academic';
  isActive: boolean;
  createdAt: Date;
  endsAt: Date;
}

export interface PollAnalytics {
  totalParticipants: number;
  averageParticipation: number;
  topIssues: Array<{ issue: string; percentage: number }>;
  engagementRate: number;
  trendingTopics: string[];
  demographics: {
    year1: number;
    year2: number;
    year3: number;
    year4: number;
    postgrad: number;
  };
}

interface PollContextType {
  polls: Poll[];
  analytics: PollAnalytics;
  userVotes: Map<string, string>;
  vote: (pollId: string, optionId: string) => Promise<void>;
  subscribeToUpdates: (pollId: string) => void;
  unsubscribeFromUpdates: (pollId: string) => void;
  isLoading: boolean;
}

const PollContext = createContext<PollContextType | undefined>(undefined);

export const usePoll = () => {
  const context = useContext(PollContext);
  if (!context) {
    throw new Error('usePoll must be used within a PollProvider');
  }
  return context;
};

// Simulate real-time updates
const simulateRealtimeUpdate = (poll: Poll): Poll => {
  const updatedPoll = { ...poll };
  const randomOptionIndex = Math.floor(Math.random() * poll.options.length);
  
  updatedPoll.options = updatedPoll.options.map((option, index) => {
    if (index === randomOptionIndex) {
      return { ...option, votes: option.votes + 1 };
    }
    return option;
  });
  
  updatedPoll.totalVotes = updatedPoll.options.reduce((sum, opt) => sum + opt.votes, 0);
  updatedPoll.options = updatedPoll.options.map(option => ({
    ...option,
    percentage: Math.round((option.votes / updatedPoll.totalVotes) * 10000) / 100
  }));
  
  return updatedPoll;
};

export const PollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [polls, setPolls] = useState<Poll[]>([
    {
      id: '1',
      question: 'What should be our top priority for campus improvement?',
      options: [
        { id: '1a', text: 'Better WiFi & Internet', votes: 3421, percentage: 35 },
        { id: '1b', text: 'Library 24/7 Access', votes: 2847, percentage: 29 },
        { id: '1c', text: 'More Study Spaces', votes: 2156, percentage: 22 },
        { id: '1d', text: 'Food Court Upgrade', votes: 1372, percentage: 14 }
      ],
      totalVotes: 9796,
      category: 'campus',
      isActive: true,
      createdAt: new Date('2025-01-10'),
      endsAt: new Date('2025-01-20')
    },
    {
      id: '2',
      question: 'Which student support service do you need most?',
      options: [
        { id: '2a', text: 'Mental Health Counseling', votes: 4521, percentage: 42 },
        { id: '2b', text: 'Career Guidance', votes: 3234, percentage: 30 },
        { id: '2c', text: 'Academic Tutoring', votes: 1893, percentage: 18 },
        { id: '2d', text: 'Financial Aid Support', votes: 1074, percentage: 10 }
      ],
      totalVotes: 10722,
      category: 'social',
      isActive: true,
      createdAt: new Date('2025-01-12'),
      endsAt: new Date('2025-01-22')
    },
    {
      id: '3',
      question: 'How should we improve student accommodation?',
      options: [
        { id: '3a', text: 'Reduce Hostel Fees', votes: 5123, percentage: 48 },
        { id: '3b', text: 'Better Security', votes: 2456, percentage: 23 },
        { id: '3c', text: 'Renovate Facilities', votes: 2134, percentage: 20 },
        { id: '3d', text: 'Increase Capacity', votes: 962, percentage: 9 }
      ],
      totalVotes: 10675,
      category: 'policy',
      isActive: true,
      createdAt: new Date('2025-01-13'),
      endsAt: new Date('2025-01-23')
    }
  ]);

  const [analytics, setAnalytics] = useState<PollAnalytics>({
    totalParticipants: 15847,
    averageParticipation: 78.34,
    topIssues: [
      { issue: 'Mental Health Support', percentage: 42.15 },
      { issue: 'Accommodation Costs', percentage: 38.42 },
      { issue: 'Internet Connectivity', percentage: 35.78 },
      { issue: 'Career Services', percentage: 30.93 }
    ],
    engagementRate: 82.67,
    trendingTopics: ['#BetterWiFi', '#MentalHealthMatters', '#AffordableHostels', '#24-7Library'],
    demographics: {
      year1: 28.45,
      year2: 26.23,
      year3: 24.18,
      year4: 18.72,
      postgrad: 4.42
    }
  });

  const [userVotes, setUserVotes] = useState<Map<string, string>>(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const [activeSubscriptions, setActiveSubscriptions] = useState<Set<string>>(new Set());

  // Simulate real-time updates every 3-7 seconds for subscribed polls
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeSubscriptions.size > 0) {
        setPolls(prevPolls => 
          prevPolls.map(poll => {
            if (activeSubscriptions.has(poll.id) && Math.random() > 0.5) {
              return simulateRealtimeUpdate(poll);
            }
            return poll;
          })
        );
        
        // Update analytics
        setAnalytics(prev => ({
          ...prev,
          totalParticipants: prev.totalParticipants + Math.floor(Math.random() * 5),
          engagementRate: Math.round(Math.min(95, prev.engagementRate + (Math.random() - 0.3)) * 100) / 100
        }));
      }
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(interval);
  }, [activeSubscriptions]);

  const vote = useCallback(async (pollId: string, optionId: string) => {
    // Check if user already voted
    if (userVotes.has(pollId)) {
      throw new Error('You have already voted in this poll');
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update poll with new vote
    setPolls(prevPolls => 
      prevPolls.map(poll => {
        if (poll.id === pollId) {
          const updatedOptions = poll.options.map(option => {
            if (option.id === optionId) {
              return { ...option, votes: option.votes + 1 };
            }
            return option;
          });
          
          const newTotalVotes = updatedOptions.reduce((sum, opt) => sum + opt.votes, 0);
          
          return {
            ...poll,
            options: updatedOptions.map(option => ({
              ...option,
              percentage: Math.round((option.votes / newTotalVotes) * 10000) / 100
            })),
            totalVotes: newTotalVotes
          };
        }
        return poll;
      })
    );
    
    // Record user vote
    setUserVotes(prev => new Map(prev).set(pollId, optionId));
    
    // Update analytics
    setAnalytics(prev => ({
      ...prev,
      totalParticipants: prev.totalParticipants + 1,
      averageParticipation: Math.min(100, prev.averageParticipation + 0.1)
    }));
    
    setIsLoading(false);
  }, [userVotes]);

  const subscribeToUpdates = useCallback((pollId: string) => {
    setActiveSubscriptions(prev => new Set(prev).add(pollId));
  }, []);

  const unsubscribeFromUpdates = useCallback((pollId: string) => {
    setActiveSubscriptions(prev => {
      const newSet = new Set(prev);
      newSet.delete(pollId);
      return newSet;
    });
  }, []);

  return (
    <PollContext.Provider value={{
      polls,
      analytics,
      userVotes,
      vote,
      subscribeToUpdates,
      unsubscribeFromUpdates,
      isLoading
    }}>
      {children}
    </PollContext.Provider>
  );
};