import { useState, useRef } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { 
  Zap, Trophy, Globe, Shield, Lightbulb, Heart, 
  ChevronRight, ArrowRight, Users, Target, Clock,
  type LucideIcon 
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Campaign {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  fullDesc: string;
  impact: string;
  timeline: string;
  beneficiaries: string;
  color: string;
  gradient: string;
  stats: string;
  highlights: string[];
}

const campaigns: Campaign[] = [
  {
    id: 'digital-campus',
    icon: Zap,
    title: "Digital Campus Revolution",
    shortDesc: "One app for everything student",
    fullDesc: "Transform Makerere into a fully digital campus where every service is accessible through a single, powerful mobile app.",
    impact: "50,000+ students benefit daily",
    timeline: "Launch in 3 months",
    beneficiaries: "All students & staff",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-600 to-cyan-600",
    stats: "50+ Services",
    highlights: [
      "Digital ID & payments",
      "Course registration made simple", 
      "Real-time campus updates",
      "AI-powered academic assistant"
    ]
  },
  {
    id: 'excellence-fund',
    icon: Trophy,
    title: "Excellence Fund",
    shortDesc: "No student left behind financially",
    fullDesc: "A comprehensive scholarship and financial aid program ensuring every talented student can complete their education.",
    impact: "2,000+ scholarships annually",
    timeline: "Active immediately",
    beneficiaries: "Needy & brilliant students",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-600 to-pink-600",
    stats: "UGX 100M+",
    highlights: [
      "Merit-based scholarships",
      "Emergency financial support",
      "Skills development grants",
      "Entrepreneurship funding"
    ]
  },
  {
    id: 'global-connect',
    icon: Globe,
    title: "Global Connect",
    shortDesc: "World-class partnerships",
    fullDesc: "Establish international partnerships that provide exchange programs, global internships, and world-class research opportunities.",
    impact: "500+ international opportunities",
    timeline: "Partnerships in 6 months",
    beneficiaries: "All academic programs",
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-600 to-red-600",
    stats: "20+ Partners",
    highlights: [
      "Student exchange programs",
      "International internships",
      "Global research collaboration",
      "Virtual cultural exchange"
    ]
  },
  {
    id: 'campus-safety',
    icon: Shield,
    title: "Campus Safety 360",
    shortDesc: "24/7 security & wellness",
    fullDesc: "Comprehensive safety network including emergency response, mental health support, and physical security upgrades.",
    impact: "100% campus coverage",
    timeline: "Implementation in 2 months",
    beneficiaries: "Entire campus community",
    color: "from-green-500 to-teal-500",
    gradient: "from-green-600 to-teal-600",
    stats: "24/7 Coverage",
    highlights: [
      "Emergency response system",
      "Mental health support",
      "Enhanced lighting & CCTV",
      "Safety mobile app"
    ]
  },
  {
    id: 'innovation-hub',
    icon: Lightbulb,
    title: "Innovation Hub",
    shortDesc: "Your startup dreams realized",
    fullDesc: "State-of-the-art innovation center providing mentorship, funding, and resources to turn student ideas into successful businesses.",
    impact: "100+ startups launched yearly",
    timeline: "Hub opens in 4 months",
    beneficiaries: "All entrepreneurial students",
    color: "from-yellow-500 to-orange-500",
    gradient: "from-yellow-600 to-orange-600",
    stats: "500+ Startups",
    highlights: [
      "Seed funding available",
      "Expert mentorship program",
      "Modern co-working spaces",
      "Market access facilitation"
    ]
  },
  {
    id: 'student-first',
    icon: Heart,
    title: "Student First Initiative",
    shortDesc: "Your voice, your university",
    fullDesc: "Revolutionary student participation platform ensuring every voice is heard in university decisions that affect student life.",
    impact: "Direct student governance",
    timeline: "Live democratic platform",
    beneficiaries: "Every single student",
    color: "from-pink-500 to-rose-500",
    gradient: "from-pink-600 to-rose-600",
    stats: "Always Active",
    highlights: [
      "Monthly town halls",
      "Digital voting platform",
      "Student advisory board",
      "Transparent decision making"
    ]
  }
];

export const MobileCampaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (_event: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x < -threshold && currentIndex < campaigns.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const selectedCampaignData = campaigns.find(c => c.id === selectedCampaign);

  return (
    <section id="campaigns-mobile" className="py-16 bg-gray-50 overflow-hidden">
      <div className="px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Revolutionary 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Campaigns</span>
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Swipe through our game-changing initiatives that will transform your university experience
          </p>
        </motion.div>

        {/* Campaign Cards Carousel */}
        <div className="relative mb-8" ref={constraintsRef}>
          <motion.div 
            className="flex gap-4"
            drag="x"
            dragConstraints={constraintsRef}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentIndex * (320 + 16) }} // Card width + gap
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {campaigns.map((campaign) => (
              <motion.div
                key={campaign.id}
                className="flex-shrink-0 w-80"
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCampaign(campaign.id)}
              >
                <div className={cn(
                  "relative h-64 rounded-2xl p-6 text-white overflow-hidden cursor-pointer",
                  "bg-gradient-to-br", campaign.gradient,
                  "shadow-xl"
                )}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 text-6xl">
                      <campaign.icon className="w-16 h-16" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <campaign.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-xs font-semibold">IMPACT</div>
                        <div className="text-sm font-bold">{campaign.stats}</div>
                      </div>
                    </div>

                    <h3 className="text-xl font-black mb-2">{campaign.title}</h3>
                    <p className="text-white/90 text-sm mb-4 flex-1">{campaign.shortDesc}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs">
                        <div className="flex items-center gap-1 text-white/80">
                          <Clock className="w-3 h-3" />
                          {campaign.timeline}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {campaigns.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === currentIndex ? "w-8 bg-purple-600" : "w-2 bg-gray-300"
              )}
            />
          ))}
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-black text-purple-600 mb-1">6</div>
            <div className="text-xs text-gray-600 font-semibold">Game-Changing Campaigns</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm">
            <div className="text-2xl font-black text-green-600 mb-1">50K+</div>
            <div className="text-xs text-gray-600 font-semibold">Students Impacted</div>
          </div>
        </div>

        {/* CTA */}
        <motion.button
          onClick={() => document.getElementById('polls-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl"
          whileTap={{ scale: 0.98 }}
        >
          <span>Vote on Priority Campaigns</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaignData && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCampaign(null)}
        >
          <motion.div
            className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
            
            {/* Header */}
            <div className={cn(
              "rounded-2xl p-4 mb-6 text-white",
              "bg-gradient-to-br", selectedCampaignData.gradient
            )}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <selectedCampaignData.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black">{selectedCampaignData.title}</h3>
              </div>
              <p className="text-white/90 text-sm">{selectedCampaignData.fullDesc}</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <div className="text-xs font-semibold text-gray-600">Impact</div>
                <div className="text-sm font-bold">{selectedCampaignData.impact}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                <div className="text-xs font-semibold text-gray-600">Timeline</div>
                <div className="text-sm font-bold">{selectedCampaignData.timeline}</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-xl">
                <Target className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <div className="text-xs font-semibold text-gray-600">Target</div>
                <div className="text-sm font-bold">{selectedCampaignData.beneficiaries}</div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 mb-3">Key Highlights</h4>
              <div className="space-y-2">
                {selectedCampaignData.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    </div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setSelectedCampaign(null)}
              className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl"
            >
              Got it! 👍
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};