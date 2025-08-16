import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Trophy, Globe, Shield, Lightbulb, Heart, 
  Flame, type LucideIcon 
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface Campaign {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  stats: string;
}

const campaigns: Campaign[] = [
  {
    icon: Zap,
    title: "Digital Campus",
    description: "One app for everything. Smart ID, payments, and services.",
    color: "from-blue-500 to-cyan-500",
    stats: "50+ Services"
  },
  {
    icon: Trophy,
    title: "Excellence Fund",
    description: "Scholarships and financial aid for deserving students.",
    color: "from-purple-500 to-pink-500",
    stats: "UGX 100M+"
  },
  {
    icon: Globe,
    title: "Global Connect",
    description: "International partnerships and exchange programs.",
    color: "from-orange-500 to-red-500",
    stats: "20+ Partners"
  },
  {
    icon: Shield,
    title: "Campus Safety",
    description: "24/7 security, emergency response, and student wellness.",
    color: "from-green-500 to-teal-500",
    stats: "100% Coverage"
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Startup incubator, tech labs, and mentorship programs.",
    color: "from-yellow-500 to-orange-500",
    stats: "500+ Startups"
  },
  {
    icon: Heart,
    title: "Student First",
    description: "Mental health support, counseling, and peer networks.",
    color: "from-pink-500 to-rose-500",
    stats: "Always Available"
  }
];

const Campaigns = memo(() => {
  return (
    <section id="campaigns" className="section bg-white">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-responsive-4xl font-black text-gray-900 mb-4">
            Revolutionary 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Campaigns</span>
          </h2>
          <p className="text-responsive-lg text-gray-600 max-w-3xl mx-auto">
            Transforming every aspect of student life with cutting-edge solutions
          </p>
        </motion.div>

        <div className="grid-cols-auto-fit max-w-7xl mx-auto">
          {campaigns.map((campaign, i) => (
            <motion.article
              key={campaign.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={cn(
                "relative h-full bg-white rounded-xl p-8",
                "border border-gray-200 shadow-md",
                "hover:shadow-xl hover:transform hover:-translate-y-2",
                "transition-all duration-300"
              )}>
                
                {/* Icon */}
                <div 
                  className={cn(
                    "w-16 h-16 mb-6 rounded-xl",
                    "flex items-center justify-center",
                    "bg-gradient-to-br",
                    campaign.color
                  )}
                >
                  <campaign.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {campaign.description}
                </p>
                
                {/* Footer with stats */}
                <div className="flex items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    <Flame className="w-4 h-4 text-orange-500" aria-hidden="true" />
                    <span className="font-semibold text-sm">{campaign.stats}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
});

Campaigns.displayName = 'Campaigns';

export default Campaigns;