import { motion } from 'framer-motion';
import { 
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { 
  Users, TrendingUp, Award, Target, Activity, 
  Hash, Calendar, BarChart3, PieChart as PieChartIcon 
} from 'lucide-react';
import { usePoll } from '../../contexts/PollContext';
import { cn } from '../../utils/cn';

export const AnalyticsDashboard = () => {
  const { analytics, polls } = usePoll();

  // Prepare data for charts
  const topIssuesData = analytics.topIssues.map(issue => ({
    name: issue.issue,
    value: issue.percentage
  }));

  const demographicsData = [
    { name: 'Year 1', value: analytics.demographics.year1, fill: '#8b5cf6' },
    { name: 'Year 2', value: analytics.demographics.year2, fill: '#3b82f6' },
    { name: 'Year 3', value: analytics.demographics.year3, fill: '#10b981' },
    { name: 'Year 4', value: analytics.demographics.year4, fill: '#f59e0b' },
    { name: 'Postgrad', value: analytics.demographics.postgrad, fill: '#ef4444' }
  ];

  const participationTrend = [
    { day: 'Mon', participation: 72 },
    { day: 'Tue', participation: 78 },
    { day: 'Wed', participation: 85 },
    { day: 'Thu', participation: 82 },
    { day: 'Fri', participation: 88 },
    { day: 'Sat', participation: 75 },
    { day: 'Sun', participation: 80 }
  ];

  const categoryEngagement = [
    { category: 'Policy', A: 85, fullMark: 100 },
    { category: 'Campus', A: 92, fullMark: 100 },
    { category: 'Social', A: 78, fullMark: 100 },
    { category: 'Academic', A: 88, fullMark: 100 },
    { category: 'Sports', A: 65, fullMark: 100 }
  ];

  const StatCard = ({ icon: Icon, label, value, change, color }: any) => (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, shadow: "lg" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          color
        )}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {change && (
          <span className={cn(
            "text-sm font-semibold flex items-center gap-1",
            change > 0 ? "text-green-600" : "text-red-600"
          )}>
            <TrendingUp className="w-4 h-4" />
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Live Campaign Analytics
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Real-time insights into student engagement and priorities
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Participants"
          value={analytics.totalParticipants.toLocaleString()}
          change={12}
          color="bg-gradient-to-r from-purple-500 to-purple-600"
        />
        <StatCard
          icon={Activity}
          label="Engagement Rate"
          value={`${analytics.engagementRate}%`}
          change={5}
          color="bg-gradient-to-r from-blue-500 to-blue-600"
        />
        <StatCard
          icon={Target}
          label="Active Polls"
          value={polls.filter(p => p.isActive).length}
          color="bg-gradient-to-r from-green-500 to-green-600"
        />
        <StatCard
          icon={Award}
          label="Avg. Participation"
          value={`${analytics.averageParticipation}%`}
          change={8}
          color="bg-gradient-to-r from-orange-500 to-orange-600"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Issues Bar Chart */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Top Student Priorities</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topIssuesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={1} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Demographics Pie Chart */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Voter Demographics</h3>
            <PieChartIcon className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={demographicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {demographicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Participation Trend */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Weekly Participation Trend</h3>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={participationTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="participation" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Engagement Radar */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Category Engagement</h3>
            <Target className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={categoryEngagement}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="category" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar 
                name="Engagement" 
                dataKey="A" 
                stroke="#8b5cf6" 
                fill="#8b5cf6" 
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Trending Topics */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Hash className="w-6 h-6" />
          <h3 className="text-lg font-bold">Trending Topics</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {analytics.trendingTopics.map((topic, index) => (
            <motion.span
              key={topic}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {topic}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Live Update Indicator */}
      <motion.div
        className="text-center text-sm text-gray-600 flex items-center justify-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span>Analytics update in real-time as students vote</span>
      </motion.div>
    </div>
  );
};