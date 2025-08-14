import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, ArrowRight, ThumbsUp, MessageCircle, Target, Lightbulb, Zap, TrendingUp, Award, Calendar, Rocket, Heart, Globe, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ui/ImageCarousel';
import StatsCard from '../components/ui/StatsCard';

const Index = () => {
  const [endorsements, setEndorsements] = useState(12847);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Hero images for Timothy with enhanced captions
  const heroImages = [
    {
      src: '/timothy-1.jpg',
      alt: 'Timothy Bulumba - Visionary Leader',
      caption: '🚀 Leading the Revolution at Makerere'
    },
    {
      src: '/timothy-2.jpg',
      alt: 'Timothy Bulumba - Student Champion',
      caption: '💫 Your Voice, Our Mission'
    },
    {
      src: '/timothy-3.jpg',
      alt: 'Timothy Bulumba - Innovation Driver',
      caption: '🌟 Building Tomorrow, Today'
    },
    {
      src: '/timothy-4.jpg',
      alt: 'Timothy Bulumba - Unity Builder',
      caption: '🤝 Together We Rise'
    },
    {
      src: '/timothy-5.jpg',
      alt: 'Timothy Bulumba - Change Maker',
      caption: '⚡ Transforming Student Life'
    },
    {
      src: '/timothy-6.jpg',
      alt: 'Timothy Bulumba - Excellence Leader',
      caption: '🏆 Excellence in Every Step'
    },
    {
      src: '/timothy-7.jpg',
      alt: 'Timothy Bulumba - Future Builder',
      caption: '🌈 Creating Brighter Futures'
    },
    {
      src: '/timothy-8.jpg',
      alt: 'Timothy Bulumba - Student First',
      caption: '❤️ Students First, Always'
    }
  ];

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
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
    const message = encodeURIComponent('Hi Timothy! I just saw your amazing website. I want to join the Build Back Better movement! 🚀');
    window.open(`https://wa.me/256703743491?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  // Epic loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 flex items-center justify-center">
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
            <div className="absolute inset-0 border-4 border-white/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin" />
            <div className="absolute inset-2 border-4 border-r-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-4 border-4 border-b-orange-500 rounded-full animate-spin" />
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Excellence...
          </motion.h2>
          <p className="text-white/80 text-lg">Bulumba Build Back Better</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* HERO SECTION - STUNNING DESIGN */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content - POWERFUL MESSAGING */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Animated Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-2xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              >
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>The Future is Now</span>
                <Rocket className="w-5 h-5 animate-bounce" />
              </motion.div>

              {/* Main Headline - BOLD & INSPIRING */}
              <motion.div className="space-y-4">
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="block text-gray-900">BULUMBA</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 animate-gradient">
                    BUILD BACK
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-gradient-reverse">
                    BETTER
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed max-w-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Join Timothy Bulumba in revolutionizing Makerere University. 
                  Together, we're creating a future where every student thrives, 
                  innovation flourishes, and excellence becomes our standard.
                </motion.p>
              </motion.div>

              {/* Stats Preview */}
              <motion.div 
                className="flex flex-wrap gap-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    {endorsements.toLocaleString()}+
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Students Supporting</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-orange-500">
                    5
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Active Campaigns</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">Commitment</div>
                </div>
              </motion.div>

              {/* CTA Buttons - COMPELLING ACTIONS */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 hover:from-blue-700 hover:via-cyan-600 hover:to-orange-600 text-white font-bold px-10 py-6 text-lg shadow-2xl rounded-2xl"
                  >
                    <Link to="/join" className="flex items-center gap-3">
                      <Users className="w-6 h-6" />
                      Join The Movement
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    onClick={openWhatsApp}
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-green-500 hover:bg-green-50 text-gray-700 hover:text-green-700 font-bold px-10 py-6 text-lg rounded-2xl transition-all"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Chat with Timothy
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - STUNNING IMAGE CAROUSEL */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              
              {/* Carousel with enhanced styling */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <ImageCarousel
                  images={heroImages}
                  autoPlay={true}
                  autoPlayInterval={4000}
                  aspectRatio="video"
                  className="w-full"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-12 h-12 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-600">
            <span className="text-sm font-semibold">Discover More</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* IMPACT STATS - IMPRESSIVE NUMBERS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-black text-gray-900 mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Impact</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our commitment to transforming Makerere University
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <StatsCard 
              number={endorsements}
              label="Student Supporters"
              icon={Users}
              colorScheme="primary"
              trend={{ value: 12.5, isPositive: true }}
              delay={0}
            />
            <StatsCard 
              number={5}
              label="Revolutionary Campaigns"
              icon={Target}
              colorScheme="accent"
              delay={0.1}
            />
            <StatsCard 
              number="75+"
              label="Partner Organizations"
              icon={Award}
              colorScheme="secondary"
              trend={{ value: 8.3, isPositive: true }}
              delay={0.2}
            />
            <StatsCard 
              number="2,500+"
              label="Lives Transformed"
              icon={TrendingUp}
              colorScheme="success"
              trend={{ value: 23.7, isPositive: true }}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* KEY CAMPAIGNS - INNOVATIVE SOLUTIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-4">
              Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Campaigns</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformative initiatives that will reshape student life at Makerere
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Guild Scholars Fund",
                description: "AI-powered scholarship matching, merit-based rewards, and financial literacy programs for every student.",
                icon: Target,
                status: "₦2.4M Raised",
                progress: 78,
                color: "from-blue-600 to-cyan-500",
                features: ["Zero-interest loans", "Merit rewards", "Emergency funds"]
              },
              {
                title: "Campus Coin", 
                description: "Blockchain-based digital currency for seamless campus transactions. Say goodbye to cash!",
                icon: Zap,
                status: "Beta Launch Soon",
                progress: 65,
                color: "from-cyan-500 to-green-500",
                features: ["Instant transfers", "Reward points", "Merchant network"]
              },
              {
                title: "Innovation Hubs",
                description: "24/7 tech spaces with VR labs, 3D printers, and startup incubators for student entrepreneurs.",
                icon: Lightbulb,
                status: "3 Hubs Complete",
                progress: 90,
                color: "from-orange-500 to-pink-500",
                features: ["Free access", "Expert mentors", "Funding support"]
              }
            ].map((campaign, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Card glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${campaign.color} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300`} />
                
                {/* Card content */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  {/* Icon */}
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${campaign.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <campaign.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">{campaign.title}</h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{campaign.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {campaign.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-600">Progress</span>
                      <span className="text-sm font-black text-gray-900">{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className={`h-full bg-gradient-to-r ${campaign.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${campaign.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Status & CTA */}
                  <div className="text-center space-y-3">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${campaign.color} text-white shadow-lg`}>
                      {campaign.status}
                    </span>
                    <div>
                      <Button 
                        asChild
                        variant="outline" 
                        className="border-2 hover:scale-105 transition-transform"
                      >
                        <Link to="/campaigns">Learn More →</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT SERVICES - QUICK ACCESS */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Portal</span>
            </h2>
            <p className="text-lg text-gray-600">Quick access to essential services and resources</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Vote & Polls', desc: 'Have your say', href: '/vote', color: 'from-blue-500 to-cyan-500' },
              { icon: Calendar, title: 'Events', desc: 'Never miss out', href: '/events', color: 'from-cyan-500 to-green-500' },
              { icon: Award, title: 'Resources', desc: 'Study materials', href: '/resources', color: 'from-orange-500 to-red-500' },
              { icon: MessageCircle, title: 'Support', desc: '24/7 assistance', href: '/contact', color: 'from-purple-500 to-pink-500' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Link to={service.href}>
                  <Card className="hover:shadow-2xl transition-all cursor-pointer h-full border-0 bg-white">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                      <p className="text-gray-600">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EPIC CALL TO ACTION */}
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl lg:text-7xl font-black mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Make History?
            </motion.h2>
            <p className="text-2xl mb-12 font-light leading-relaxed opacity-95">
              Join {endorsements.toLocaleString()} students who believe in a better tomorrow.
              <br />
              Your voice matters. Your vote counts. Your future starts now.
            </p>
            
            {/* Endorsement Counter */}
            <motion.div
              className="inline-flex items-center gap-8 bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <motion.div 
                  className="text-6xl font-black text-white"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {endorsements.toLocaleString()}
                </motion.div>
                <div className="text-white/90 font-semibold text-lg">Students Strong</div>
              </div>
              <Button
                onClick={handleEndorse}
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-black shadow-2xl px-10 py-6 text-lg rounded-2xl"
              >
                <ThumbsUp className="w-7 h-7 mr-3" />
                Add Your Voice
              </Button>
            </motion.div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-white/90 font-black px-12 py-6 text-xl shadow-2xl rounded-2xl"
                >
                  <Link to="/join" className="flex items-center gap-3">
                    <Rocket className="w-8 h-8" />
                    Join Movement Now
                    <Sparkles className="w-8 h-8" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  onClick={openWhatsApp}
                  size="lg"
                  variant="outline"
                  className="border-3 border-white text-white hover:bg-white hover:text-purple-600 font-black px-12 py-6 text-xl rounded-2xl"
                >
                  <MessageCircle className="w-8 h-8 mr-3" />
                  Message Timothy
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Buttons - ENHANCED */}
      <AnimatePresence>
        {showFloatingButton && (
          <>
            <motion.div
              className="fixed bottom-6 right-6 z-50"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.button
                onClick={handleEndorse}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                    '0 0 40px rgba(147, 51, 234, 0.8)',
                    '0 0 20px rgba(147, 51, 234, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ThumbsUp className="w-6 h-6" />
                Endorse ({endorsements.toLocaleString()})
              </motion.button>
            </motion.div>

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

      {/* Success Notification - BEAUTIFUL */}
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
              <div className="relative bg-white px-12 py-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">
                      THANK YOU! 🎉
                    </h3>
                    <p className="text-green-600 font-semibold">
                      You're part of the revolution!
                    </p>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <Heart className="w-10 h-10 text-red-500" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;