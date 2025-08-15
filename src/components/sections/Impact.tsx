import { memo } from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Calendar, Award, type LucideIcon } from 'lucide-react';
import { ShareButton } from '../ShareButton';
import { cn } from '../../utils/cn';

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface ImpactProps {
  endorsements: number;
}

const Impact = memo(({ endorsements }: ImpactProps) => {
  const stats: Stat[] = [
    { 
      number: endorsements.toLocaleString() + '+', 
      label: 'Students Supporting', 
      icon: Users 
    },
    { 
      number: '95%', 
      label: 'Approval Rating', 
      icon: Star 
    },
    { 
      number: '24/7', 
      label: 'Always Available', 
      icon: Calendar 
    },
    { 
      number: '#1', 
      label: 'Student Choice', 
      icon: Award 
    }
  ];

  return (
    <section className="section bg-gray-50" aria-label="Impact Statistics">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-responsive-4xl font-black text-gray-900 mb-4">
            Real <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <div className="mt-4">
            <ShareButton
              config={{
                title: "Timothy Bulumba's Real Impact",
                description: `${endorsements.toLocaleString()}+ students supporting the Build Back Better movement at Makerere University`,
                hashtags: ['BulumbaBuildBack', 'MakerereImpact', 'StudentLeadership']
              }}
              variant="text"
              buttonText="Share Our Impact"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.article
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={cn(
                "w-24 h-24 mx-auto mb-4",
                "bg-white rounded-3xl shadow-lg",
                "flex items-center justify-center",
                "border border-purple-100"
              )}>
                <stat.icon className="w-12 h-12 text-purple-600" aria-hidden="true" />
              </div>
              <div className="text-responsive-3xl font-black text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
});

Impact.displayName = 'Impact';

export default Impact;