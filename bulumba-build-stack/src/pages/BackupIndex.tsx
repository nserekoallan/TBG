import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, ArrowRight, ThumbsUp, MessageCircle, Target, Lightbulb, Zap, TrendingUp, Award, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ui/ImageCarousel';
import StatsCard from '../components/ui/StatsCard';
import { designTokens } from '../styles/design-tokens';

const Index = () => {
  const [endorsements, setEndorsements] = useState(12847);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Hero images for Timothy with proper alt text and captions
  const heroImages = [
    {
      src: '/timothy-1.jpg',
      alt: 'Timothy Bulumba - Student Leader',
      caption: 'Building a better tomorrow for Makerere University'
    },
    {
      src: '/timothy-2.jpg',
      alt: 'Timothy Bulumba at Campus Event',
      caption: 'Engaging with students across campus'
    },
    {
      src: '/timothy-3.jpg',
      alt: 'Timothy Bulumba Speaking',
      caption: 'Advocating for student rights and progress'
    },
    {
      src: '/timothy-4.jpg',
      alt: 'Timothy Bulumba with Students',
      caption: 'Together we build back better'
    },
    {
      src: '/timothy-5.jpg',
      alt: 'Timothy Bulumba Leadership',
      caption: 'Leading the transformation of student life'
    },
    {
      src: '/timothy-6.jpg',
      alt: 'Timothy Bulumba Community',
      caption: 'Strengthening our university community'
    },
    {
      src: '/timothy-7.jpg',
      alt: 'Timothy Bulumba Vision',
      caption: 'A vision for academic excellence'
    },
    {
      src: '/timothy-8.jpg',
      alt: 'Timothy Bulumba Future',
      caption: 'Empowering the next generation'
    }
  ];

  // Handle initial loading with proper UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowFloatingButton(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEndorse = () => {
    setEndorsements(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    
    // Analytics tracking would go here
    // gtag('event', 'endorse', { event_category: 'engagement' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Timothy! I want to learn more about Bulumba Build Back Better! 🚀');
    window.open(`https://wa.me/256703743491?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-neutral-600 font-medium">Loading Bulumba Build Back Better...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/20 via-white to-orange-50/20">
        {/* Optimized Background Elements */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/3 to-orange-400/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/3 to-blue-400/3 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Campaign Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 text-white rounded-full font-semibold text-sm uppercase tracking-wider shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <Star className="w-4 h-4" aria-hidden="true" />
                <span>Let's Build Back Better</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="text-neutral-900">Bulumba</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500">
                    Build Back Better
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-neutral-700 font-medium leading-relaxed max-w-xl">
                  Transforming Makerere University through innovative campaigns that 
                  empower students, enhance learning, and build a stronger academic 
                  community for the digital age.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 hover:from-blue-700 hover:via-cyan-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:ring-4 focus:ring-blue-500/25"
                >
                  <Link to="/join" className="flex items-center gap-2">
                    Join Movement
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-bold px-8 py-4 text-lg focus:ring-4 focus:ring-neutral-500/25"
                >
                  <Link to="/campaigns">Explore Campaigns</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right - Timothy's Image Carousel */}
            <motion.div
              className="relative max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <ImageCarousel
                images={heroImages}
                autoPlay={true}
                autoPlayInterval={5000}
                aspectRatio="video"
                className="w-full max-w-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-neutral-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real results from our commitment to building back better
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
              label="Active Campaigns"
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
              label="Students Impacted"
              icon={TrendingUp}
              colorScheme="success"
              trend={{ value: 23.7, isPositive: true }}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Key Campaigns */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              Key Campaigns
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Revolutionary initiatives transforming student life at Makerere University
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Guild Scholars Fund",
                description: "Supporting academic excellence through financial assistance, merit scholarships, and educational resources for deserving students.",
                icon: Target,
                status: "Active - ₦2.4M raised",
                progress: 78
              },
              {
                title: "Campus Coin", 
                description: "Revolutionary digital payment solution enabling seamless campus transactions, eliminating cash dependency across university.",
                icon: Zap,
                status: "Beta Testing Phase",
                progress: 65
              },
              {
                title: "Innovation Hubs",
                description: "Creating collaborative spaces equipped with modern technology for creativity, entrepreneurship, and skill development.",
                icon: Lightbulb,
                status: "Phase 1 Complete",
                progress: 90
              }
            ].map((campaign, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <campaign.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4 text-center">{campaign.title}</h3>
                <p className="text-neutral-700 text-center mb-6 leading-relaxed">{campaign.description}</p>
                
                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-neutral-600">Progress</span>
                    <span className="text-sm font-bold text-neutral-900">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${campaign.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                    {campaign.status}
                  </div>
                  <div>
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-neutral-300 text-neutral-700 hover:bg-neutral-50 font-bold group-hover:border-blue-300 group-hover:text-blue-700"
                    >
                      <Link to="/campaigns">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-24 bg-neutral-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 mb-4">Student Services</h2>
            <p className="text-lg text-neutral-600">Quick access to essential university resources and tools</p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Vote & Polls', desc: 'Participate in student decisions', href: '/vote' },
              { icon: Calendar, title: 'Events', desc: 'Upcoming campus activities', href: '/events' },
              { icon: Award, title: 'Resources', desc: 'Academic documents & forms', href: '/resources' },
              { icon: MessageCircle, title: 'Contact Us', desc: 'Get support and assistance', href: '/contact' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.href}>
                  <Card className="hover:shadow-lg transition-all cursor-pointer h-full border-neutral-200 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-neutral-900 mb-2 text-lg">{service.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Ready to Build Back Better?
            </h2>
            <p className="text-xl mb-8 font-medium leading-relaxed opacity-95">
              Join thousands of students who are already part of this transformative movement. 
              Together, we're building a stronger, more innovative Makerere University.
            </p>
            
            {/* Endorsement Counter */}
            <motion.div
              className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <div className="text-4xl font-black text-white">
                  {endorsements.toLocaleString()}
                </div>
                <div className="text-white/90 font-semibold text-lg">Students Supporting</div>
              </div>
              <Button
                onClick={handleEndorse}
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-bold shadow-xl px-8 py-4"
              >
                <ThumbsUp className="w-6 h-6 mr-2" />
                Endorse Now
              </Button>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-bold px-12 py-5 text-lg shadow-xl"
              >
                <Link to="/join" className="flex items-center gap-3">
                  <Users className="w-6 h-6" />
                  Join Movement
                </Link>
              </Button>
              <Button 
                onClick={openWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-12 py-5 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat with Timothy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Buttons */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              onClick={handleEndorse}
              className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 hover:from-blue-700 hover:via-cyan-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-2xl"
            >
              <ThumbsUp className="w-5 h-5 mr-2" />
              Endorse ({endorsements.toLocaleString()})
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl p-0"
          aria-label="Contact Timothy on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      </motion.div>

      {/* Success Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-4 rounded-2xl shadow-xl border border-white/20"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            role="alert"
            aria-live="polite"
          >
            <div className="flex items-center gap-3">
              <ThumbsUp className="w-6 h-6" />
              <span className="font-bold">Thank you for your endorsement! 🎉</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Index;