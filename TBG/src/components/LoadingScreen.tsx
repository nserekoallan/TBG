import { memo } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Rocket } from 'lucide-react';

const LoadingScreen = memo(() => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-pink-800 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main logo animation */}
        <motion.div
          className="w-40 h-40 mx-auto mb-8 relative"
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Outer ring */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-xl opacity-70"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle ring */}
          <motion.div 
            className="absolute inset-2 bg-gradient-to-l from-blue-400 via-purple-500 to-pink-500 rounded-full blur-md"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner circle with crown */}
          <div className="absolute inset-4 bg-gradient-to-br from-white to-purple-100 rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Crown className="w-16 h-16 text-purple-600" />
            </motion.div>
          </div>

          {/* Sparkles around crown */}
          <motion.div
            className="absolute top-0 right-0"
            animate={{ 
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-0 left-0"
            animate={{ 
              scale: [0, 1, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Rocket className="w-6 h-6 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.h2 
          className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-2"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ 
            backgroundSize: "200% 200%",
            backgroundImage: "linear-gradient(90deg, #fde68a, #f9a8d4, #c084fc, #60a5fa, #fde68a)"
          }}
        >
          BULUMBA
        </motion.h2>
        
        <motion.p 
          className="text-white text-xl font-bold mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Build Back Better
        </motion.p>

        {/* Loading dots */}
        <div className="flex gap-3 justify-center">
          {[1,2,3,4,5].map(i => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{
                background: `linear-gradient(45deg, ${
                  ['#fbbf24', '#f472b6', '#a78bfa', '#60a5fa', '#34d399'][i-1]
                }, ${
                  ['#f472b6', '#a78bfa', '#60a5fa', '#34d399', '#fbbf24'][i-1]
                })`
              }}
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Loading message */}
        <motion.p 
          className="mt-6 text-white/80 text-sm font-medium"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing excellence...
        </motion.p>
      </motion.div>
    </div>
  );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;