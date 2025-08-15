import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, ArrowRight, ThumbsUp, MessageCircle, Lightbulb, Zap, Award, Calendar, Rocket, Heart, Globe, CheckCircle, Sparkles, Crown, Trophy, Flame, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [endorsements, setEndorsements] = useState(15847);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero images
  const heroImages = [
    { src: '/timothy-1.jpg', alt: 'Timothy Bulumba - Leader', caption: '🚀 Transforming Makerere' },
    { src: '/timothy-2.jpg', alt: 'Timothy Bulumba - Visionary', caption: '💡 Innovation First' },
    { src: '/timothy-3.jpg', alt: 'Timothy Bulumba - Champion', caption: '🏆 Students First' },
    { src: '/timothy-4.jpg', alt: 'Timothy Bulumba - Builder', caption: '🌟 Building Excellence' },
    { src: '/timothy-5.jpg', alt: 'Timothy Bulumba - Innovator', caption: '⚡ Digital Revolution' },
    { src: '/timothy-6.jpg', alt: 'Timothy Bulumba - Unite', caption: '🤝 Unity in Diversity' },
    { src: '/timothy-7.jpg', alt: 'Timothy Bulumba - Future', caption: '🎯 Future Forward' },
    { src: '/timothy-8.jpg', alt: 'Timothy Bulumba - Success', caption: '✨ Your Success, Our Mission' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEndorse = () => {
    setEndorsements(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Timothy! I just visited your amazing website. I want to support Build Back Better! 🚀');
    window.open(`https://wa.me/256703743491?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
            <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
              <Crown className="w-12 h-12 text-purple-600" />
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">Loading Excellence...</h2>
          <div className="flex gap-2 justify-center">
            {[1,2,3,4,5].map(i => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* HERO SECTION - ABSOLUTELY STUNNING */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-white font-bold text-sm">MAKERERE UNIVERSITY 2025</span>
                <Rocket className="w-5 h-5 text-orange-400 animate-bounce" />
              </motion.div>
              
              {/* Main Title */}
              <motion.div>
                <motion.h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-black mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-white">TIMOTHY</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    BULUMBA
                  </span>
                </motion.h1>
                
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white/80 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  BUILD • BACK • BETTER
                </motion.div>
                
                <motion.p 
                  className="text-xl text-gray-300 max-w-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Revolutionizing student life at Makerere University through innovation, 
                  technology, and unwavering commitment to excellence.
                </motion.p>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-white">{endorsements.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Supporters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">12</div>
                  <div className="text-sm text-gray-400">Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">#1</div>
                  <div className="text-sm text-gray-400">Vision</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('campaigns')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <Rocket className="w-5 h-5" />
                    Explore Vision
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openWhatsApp}
                >
                  <span className="flex items-center gap-2 justify-center">
                    <MessageCircle className="w-5 h-5" />
                    Connect Now
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right - Image Showcase */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                  <div className="relative w-full h-[500px] bg-black/40 rounded-2xl overflow-hidden">
                    <img 
                      src={heroImages[currentImageIndex].src}
                      alt={heroImages[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                      style={{ 
                        objectPosition: 'center 30%',
                        transform: 'scale(1.1)'
                      }}
                    />
                  </div>
                  
                  {/* Caption */}
                  <motion.div 
                    className="absolute bottom-6 left-6 right-6 px-6 py-3 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/20"
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-white font-bold text-lg">{heroImages[currentImageIndex].caption}</p>
                  </motion.div>
                  
                  {/* Live badge */}
                  <motion.div 
                    className="absolute top-6 right-6 px-4 py-2 bg-red-500 rounded-full flex items-center gap-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-white text-sm font-bold">LIVE</span>
                  </motion.div>

                  {/* Floating Thumbs Up Button */}
                  <motion.button
                    className="absolute bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center group"
                    onClick={handleEndorse}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: 1, 
                      rotate: 0,
                      boxShadow: [
                        '0 0 20px rgba(147, 51, 234, 0.4)',
                        '0 0 40px rgba(147, 51, 234, 0.6)',
                        '0 0 20px rgba(147, 51, 234, 0.4)'
                      ]
                    }}
                    transition={{ 
                      scale: { type: "spring", stiffness: 260, damping: 20 },
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <ThumbsUp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                    
                    {/* Endorsement count badge */}
                    <motion.div 
                      className="absolute -top-2 -right-2 bg-white text-purple-600 text-xs font-bold px-2 py-1 rounded-full min-w-[28px] text-center shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {endorsements > 999 ? `${Math.floor(endorsements/1000)}k+` : endorsements}
                    </motion.div>

                    {/* Pulse effect on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-30"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.button>

                  {/* Heart emoji that flies up when endorsed */}
                  <AnimatePresence>
                    {showNotification && (
                      <motion.div
                        className="absolute bottom-24 right-6 pointer-events-none"
                        initial={{ opacity: 1, y: 0, scale: 1 }}
                        animate={{ opacity: 0, y: -100, scale: 1.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <span className="text-4xl">❤️</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Image dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === currentImageIndex 
                          ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REVOLUTIONARY CAMPAIGNS */}
      <section id="campaigns" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Revolutionary 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Campaigns</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming every aspect of student life with cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Digital Campus",
                desc: "One app for everything. Smart ID, payments, and services.",
                color: "from-blue-500 to-cyan-500",
                stats: "50+ Services"
              },
              {
                icon: Trophy,
                title: "Excellence Fund",
                desc: "Scholarships and financial aid for deserving students.",
                color: "from-purple-500 to-pink-500",
                stats: "UGX 100M+"
              },
              {
                icon: Globe,
                title: "Global Connect",
                desc: "International partnerships and exchange programs.",
                color: "from-orange-500 to-red-500",
                stats: "20+ Partners"
              },
              {
                icon: Shield,
                title: "Campus Safety",
                desc: "24/7 security, emergency response, and student wellness.",
                color: "from-green-500 to-teal-500",
                stats: "100% Coverage"
              },
              {
                icon: Lightbulb,
                title: "Innovation Hub",
                desc: "Startup incubator, tech labs, and mentorship programs.",
                color: "from-yellow-500 to-orange-500",
                stats: "500+ Startups"
              },
              {
                icon: Heart,
                title: "Student First",
                desc: "Mental health support, counseling, and peer networks.",
                color: "from-pink-500 to-rose-500",
                stats: "Always Available"
              }
            ].map((campaign, i) => (
              <motion.div
                key={i}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all hover:transform hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${campaign.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${campaign.color} rounded-2xl flex items-center justify-center`}>
                    <campaign.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{campaign.title}</h3>
                  <p className="text-gray-300 mb-6">{campaign.desc}</p>
                  
                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-bold text-white">{campaign.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Real <span className="text-gradient">Impact</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: endorsements.toLocaleString() + '+', label: 'Students Supporting', icon: Users },
              { number: '95%', label: 'Approval Rating', icon: Star },
              { number: '24/7', label: 'Always Available', icon: Calendar },
              { number: '#1', label: 'Student Choice', icon: Award }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20">
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Join thousands of students who believe in excellence
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl font-black text-xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEndorse}
              >
                <span className="flex items-center gap-3 justify-center">
                  <Crown className="w-7 h-7" />
                  JOIN THE MOVEMENT
                  <Sparkles className="w-7 h-7" />
                </span>
              </motion.button>
              
              <motion.button
                className="px-12 py-5 bg-white text-purple-900 rounded-3xl font-black text-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openWhatsApp}
              >
                <span className="flex items-center gap-3 justify-center">
                  <MessageCircle className="w-7 h-7" />
                  CHAT WITH TIMOTHY
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating buttons */}
      <AnimatePresence>
        {showFloatingButton && (
          <>
            <motion.button
              className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center z-50"
              onClick={handleEndorse}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.button>
            
            <motion.button
              className="fixed bottom-8 left-8 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center z-50"
              onClick={openWhatsApp}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Success notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-20 right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-[100]"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">Thank you for your support! 🎉</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default Index;