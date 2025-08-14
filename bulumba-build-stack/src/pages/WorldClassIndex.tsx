import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from 'framer-motion';
import { Star, Users, ArrowRight, ThumbsUp, MessageCircle, Target, Lightbulb, Zap, TrendingUp, Award, Calendar, Sparkles, Rocket, Globe, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ui/ImageCarousel';
import StatsCard from '../components/ui/StatsCard';
import { ParticleField } from '../components/effects/ParticleField';
import { MorphingText, GlitchText } from '../components/effects/MorphingText';
import confetti from 'canvas-confetti';

// Lazy load heavy components
const LazyParticleField = lazy(() => import('../components/effects/ParticleField').then(m => ({ default: m.ParticleField })));

const Index = () => {
  const [endorsements, setEndorsements] = useState(12847);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [activeSection, setActiveSection] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);
  
  const { scrollY, scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  
  // 3D Card tilt effect
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-100, 100], [10, -10]);
  const rotateY = useTransform(cardX, [-100, 100], [-10, 10]);

  // Hero images with enhanced metadata
  const heroImages = [
    {
      src: '/timothy-1.jpg',
      alt: 'Timothy Bulumba - Visionary Leader',
      caption: '🚀 Building Tomorrow, Today'
    },
    {
      src: '/timothy-2.jpg',
      alt: 'Timothy Bulumba - Community Builder',
      caption: '💫 Uniting Students, Creating Change'
    },
    {
      src: '/timothy-3.jpg',
      alt: 'Timothy Bulumba - Innovation Champion',
      caption: '🌟 Transforming Ideas into Reality'
    },
    {
      src: '/timothy-4.jpg',
      alt: 'Timothy Bulumba - Student Voice',
      caption: '🎯 Your Voice, Our Mission'
    },
    {
      src: '/timothy-5.jpg',
      alt: 'Timothy Bulumba - Change Maker',
      caption: '⚡ Energizing Student Leadership'
    },
    {
      src: '/timothy-6.jpg',
      alt: 'Timothy Bulumba - Future Builder',
      caption: '🌈 Creating Colorful Tomorrows'
    },
    {
      src: '/timothy-7.jpg',
      alt: 'Timothy Bulumba - Excellence Driver',
      caption: '🏆 Excellence in Every Step'
    },
    {
      src: '/timothy-8.jpg',
      alt: 'Timothy Bulumba - Unity Leader',
      caption: '🤝 Together We Rise'
    }
  ];

  // Dynamic words for morphing text
  const dynamicWords = [
    "TRANSFORM",
    "INNOVATE", 
    "EMPOWER",
    "UNITE",
    "INSPIRE",
    "ELEVATE"
  ];

  // Advanced cursor tracking
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorDot.current && cursorOutline.current) {
        cursorDot.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        cursorOutline.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  // Page load animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Trigger welcome animation
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#06b6d4', '#f97316']
        });
      }, 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-based section activation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        
        if (scrollPos >= top && scrollPos <= bottom) {
          setActiveSection(index);
        }
      });
      
      setShowFloatingButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEndorse = () => {
    setEndorsements(prev => prev + 1);
    setShowNotification(true);
    
    // Epic endorsement celebration
    confetti({
      particleCount: 200,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#3b82f6', '#06b6d4', '#f97316', '#10b981', '#8b5cf6']
    });
    confetti({
      particleCount: 200,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#3b82f6', '#06b6d4', '#f97316', '#10b981', '#8b5cf6']
    });
    
    // Haptic feedback (if supported)
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
    
    setTimeout(() => setShowNotification(false), 3000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Timothy! I just experienced your AMAZING website! I want to join the movement! 🚀✨');
    window.open(`https://wa.me/256703743491?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  // Loading screen - Award-winning design
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <motion.div 
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 blur-xl opacity-50 animate-pulse" />
          <div className="relative flex flex-col items-center gap-8">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping" />
              <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin" />
              <div className="absolute inset-2 border-4 border-r-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
              <div className="absolute inset-4 border-4 border-b-orange-500 rounded-full animate-spin" style={{ animationDuration: '2s' }} />
            </div>
            <motion.div
              className="text-white font-black text-2xl tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              LOADING EXCELLENCE
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" ref={containerRef}>
      {/* Custom Cursor */}
      <div 
        ref={cursorDot}
        className="fixed w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75"
      />
      <div 
        ref={cursorOutline}
        className="fixed w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-all duration-300"
        style={{ transition: 'transform 0.15s, width 0.3s, height 0.3s' }}
      />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Particle Background */}
      <Suspense fallback={null}>
        <LazyParticleField count={50} />
      </Suspense>
      
      <Header />
      
      {/* HERO SECTION - AWARD WINNING DESIGN */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20" />
          <motion.div 
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <motion.div 
          className="container mx-auto px-4 lg:px-8 relative z-10"
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content - REVOLUTIONARY TEXT */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              {/* Animated Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 text-white rounded-full font-bold text-sm uppercase tracking-wider"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)' }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(6, 182, 212, 0.3)',
                    '0 0 20px rgba(249, 115, 22, 0.3)',
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>The Future is Now</span>
                <Rocket className="w-5 h-5 animate-bounce" />
              </motion.div>

              {/* Main Headline with Morphing Text */}
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
                  <GlitchText text="BULUMBA" className="text-white" />
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400 animate-gradient-x">
                    BUILD BACK
                  </span>
                  <br />
                  <MorphingText 
                    words={dynamicWords}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400"
                  />
                </h1>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-300 max-w-xl font-light leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Experience the revolution. Join the movement that's reshaping 
                  Makerere University into a beacon of innovation and excellence.
                </motion.p>
              </div>

              {/* Interactive CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    asChild
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 text-white font-bold px-10 py-6 text-lg rounded-2xl overflow-hidden"
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <Link to="/join" className="relative z-10 flex items-center gap-3">
                      <span>Join Revolution</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xl font-bold px-10 py-6 text-lg rounded-2xl"
                  >
                    <Globe className="w-6 h-6 mr-3 animate-spin-slow" />
                    Explore Universe
                  </Button>
                </motion.div>
              </motion.div>

              {/* Live Stats Counter */}
              <motion.div 
                className="inline-flex items-center gap-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {endorsements.toLocaleString()}
                  </motion.div>
                  <div className="text-gray-400 font-medium">Revolutionaries</div>
                </div>
                <Button
                  onClick={handleEndorse}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-6 py-3 rounded-xl"
                >
                  <Heart className="w-5 h-5 mr-2 animate-pulse" />
                  Join Them
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - 3D Interactive Carousel */}
            <motion.div
              className="relative perspective-1000"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                cardX.set(x);
                cardY.set(y);
              }}
              onMouseLeave={() => {
                cardX.set(0);
                cardY.set(0);
              }}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                <ImageCarousel
                  images={heroImages}
                  autoPlay={true}
                  autoPlayInterval={4000}
                  aspectRatio="video"
                  className="relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-sm font-medium">Scroll to Explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* IMPACT STATS - FLOATING 3D CARDS */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400">
                GLOBAL IMPACT
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Real-time metrics of our revolutionary transformation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { 
                number: endorsements, 
                label: "Global Supporters", 
                icon: Users, 
                color: "from-blue-400 to-blue-600",
                trend: 12.5 
              },
              { 
                number: "5", 
                label: "Active Missions", 
                icon: Target, 
                color: "from-cyan-400 to-cyan-600",
                trend: 0 
              },
              { 
                number: "75+", 
                label: "Partner Nations", 
                icon: Award, 
                color: "from-orange-400 to-orange-600",
                trend: 8.3 
              },
              { 
                number: "2,500+", 
                label: "Lives Transformed", 
                icon: TrendingUp, 
                color: "from-purple-400 to-purple-600",
                trend: 23.7 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -20, 
                  rotateY: 10,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Number with counter animation */}
                  <div className="text-5xl font-black text-white mb-2 text-center">
                    {typeof stat.number === 'number' ? stat.number.toLocaleString() : stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-400 font-semibold text-center mb-4">
                    {stat.label}
                  </div>
                  
                  {/* Trend indicator */}
                  {stat.trend > 0 && (
                    <div className="flex justify-center">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold">
                        ↗ +{stat.trend}%
                      </span>
                    </div>
                  )}
                  
                  {/* Pulse effect */}
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVOLUTIONARY CAMPAIGNS - HOLOGRAPHIC CARDS */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-7xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">
                MISSION CONTROL
              </span>
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Revolutionary initiatives transforming the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: "QUANTUM SCHOLARS",
                description: "Next-gen AI-powered education system with personalized learning paths and neural interfaces.",
                icon: Zap,
                progress: 78,
                status: "PHASE 3 ACTIVE",
                color: "from-blue-500 to-purple-500"
              },
              {
                title: "CAMPUS METAVERSE", 
                description: "Virtual reality campus experience with blockchain-verified credentials and NFT achievements.",
                icon: Globe,
                progress: 65,
                status: "BETA TESTING",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "NEURAL HUBS",
                description: "Brain-computer interface labs for direct knowledge transfer and enhanced cognition.",
                icon: Lightbulb,
                progress: 90,
                status: "LAUNCHING SOON",
                color: "from-orange-500 to-pink-500"
              }
            ].map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Holographic effect background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
                
                <div className="relative p-8 bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
                  {/* Animated scan line */}
                  <motion.div 
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Icon with rotation */}
                  <motion.div 
                    className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${campaign.color} flex items-center justify-center relative`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <campaign.icon className="w-12 h-12 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-3xl font-black text-white mb-4 text-center tracking-wider">
                    {campaign.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-center mb-6 leading-relaxed">
                    {campaign.description}
                  </p>
                  
                  {/* Progress bar with animation */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">PROGRESS</span>
                      <span className="text-sm font-bold text-white">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${campaign.color} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${campaign.progress}%` }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="absolute right-0 top-0 bottom-0 w-2 bg-white/50"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Status badge */}
                  <div className="text-center">
                    <motion.span 
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${campaign.color} text-white`}
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(255,255,255,0.1)',
                          '0 0 40px rgba(255,255,255,0.3)',
                          '0 0 20px rgba(255,255,255,0.1)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {campaign.status}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - EPIC CALL TO ACTION */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600"
            animate={{
              background: [
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #f97316)',
                'linear-gradient(45deg, #f97316, #3b82f6, #8b5cf6)',
                'linear-gradient(45deg, #8b5cf6, #f97316, #3b82f6)',
                'linear-gradient(45deg, #3b82f6, #8b5cf6, #f97316)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-7xl lg:text-8xl font-black mb-8 text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              THE FUTURE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                AWAITS YOU
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-white/80 mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Join the revolution that's reshaping education globally.
              <br />
              Your journey to greatness starts with a single click.
            </motion.p>
            
            {/* Epic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  size="lg"
                  className="relative bg-white text-black hover:bg-gray-100 font-black px-12 py-8 text-xl rounded-3xl overflow-hidden group"
                  onClick={() => {
                    handleEndorse();
                    confetti({
                      particleCount: 300,
                      spread: 100,
                      origin: { y: 0.6 }
                    });
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket className="w-8 h-8 animate-bounce" />
                    LAUNCH YOUR FUTURE
                    <Sparkles className="w-8 h-8 animate-pulse" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  onClick={openWhatsApp}
                  size="lg"
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white hover:text-black font-black px-12 py-8 text-xl rounded-3xl backdrop-blur-xl"
                >
                  <MessageCircle className="w-8 h-8 mr-3" />
                  CONNECT NOW
                </Button>
              </motion.div>
            </div>
            
            {/* Live counter */}
            <motion.div 
              className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
              animate={{ 
                boxShadow: [
                  '0 0 40px rgba(255,255,255,0.1)',
                  '0 0 80px rgba(255,255,255,0.3)',
                  '0 0 40px rgba(255,255,255,0.1)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-red-400 animate-pulse" />
              <span className="text-white font-bold text-xl">
                {endorsements.toLocaleString()} people have already joined
              </span>
              <Heart className="w-8 h-8 text-red-400 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons - ENHANCED */}
      <AnimatePresence>
        {showFloatingButton && (
          <>
            {/* Endorse Button */}
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.button
                onClick={handleEndorse}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.5)',
                    '0 0 40px rgba(139, 92, 246, 0.8)',
                    '0 0 20px rgba(139, 92, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ThumbsUp className="w-6 h-6 mr-2 inline animate-bounce" />
                Endorse ({endorsements.toLocaleString()})
              </motion.button>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.div
              className="fixed bottom-6 left-6 z-50"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-400 to-emerald-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle className="w-8 h-8" />
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Success Notification - EPIC VERSION */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 blur-xl animate-pulse" />
              <div className="relative bg-black/90 backdrop-blur-xl px-12 py-8 rounded-3xl border border-green-400/30">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">
                      YOU'RE AMAZING! 🎉
                    </h3>
                    <p className="text-green-400 font-medium">
                      Welcome to the revolution!
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-10 h-10 text-green-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 10s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;