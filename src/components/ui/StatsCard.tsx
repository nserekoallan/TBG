import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  number: string | number;
  label: string;
  icon: LucideIcon;
  colorScheme: 'primary' | 'secondary' | 'accent' | 'success';
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
}

const colorSchemes = {
  primary: {
    gradient: 'from-blue-500 to-blue-600',
    background: 'bg-blue-50',
    text: 'text-blue-900',
  },
  secondary: {
    gradient: 'from-orange-500 to-orange-600', 
    background: 'bg-orange-50',
    text: 'text-orange-900',
  },
  accent: {
    gradient: 'from-cyan-500 to-cyan-600',
    background: 'bg-cyan-50', 
    text: 'text-cyan-900',
  },
  success: {
    gradient: 'from-emerald-500 to-emerald-600',
    background: 'bg-emerald-50',
    text: 'text-emerald-900',
  }
};

export const StatsCard = ({ 
  number, 
  label, 
  icon: Icon, 
  colorScheme,
  trend,
  delay = 0 
}: StatsCardProps) => {
  const scheme = colorSchemes[colorScheme];

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
          <div className={`w-full h-full bg-gradient-to-br ${scheme.gradient} rounded-full transform translate-x-8 -translate-y-8`} />
        </div>
        
        {/* Icon */}
        <div className="relative mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${scheme.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Number */}
        <div className="relative mb-2">
          <motion.div 
            className="text-4xl font-black text-neutral-900 leading-none"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: delay + 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            viewport={{ once: true }}
          >
            {typeof number === 'number' ? number.toLocaleString() : number}
          </motion.div>
          
          {/* Trend indicator */}
          {trend && (
            <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ml-2 ${
              trend.isPositive 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              <span className={trend.isPositive ? '↗' : '↘'}>
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </span>
            </div>
          )}
        </div>

        {/* Label */}
        <div className="text-neutral-600 font-semibold text-lg leading-tight">
          {label}
        </div>

        {/* Hover effect gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${scheme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
      </div>
    </motion.div>
  );
};

export default StatsCard;