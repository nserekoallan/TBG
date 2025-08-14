import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Users, ArrowRight, ThumbsUp, MessageCircle, Target, Lightbulb, Zap, TrendingUp, Award, Calendar, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [endorsements, setEndorsements] = useState(12847);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Hero images for Timothy
  const heroImages = [
    '/timothy-1.jpg',
    '/timothy-2.jpg', 
    '/timothy-3.jpg',
    '/timothy-4.jpg',
    '/timothy-5.jpg',
    '/timothy-6.jpg',
    '/timothy-7.jpg',
    '/timothy-8.jpg'
  ];

  // Handle floating button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate carousel  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleEndorse = () => {
    setEndorsements(prev => prev + 1);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/256703743491?text=Hi Timothy! I want to learn more about Bulumba Build Back Better! 🚀', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-orange-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Campaign Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <Star className="w-5 h-5" />
                <span>Let's Build Back Better</span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="text-gray-900">Bulumba</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500">
                    Build Back Better
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-700 max-w-2xl font-medium leading-relaxed">
                  Transforming Makerere University through innovative campaigns that 
                  empower students, enhance learning, and build a stronger academic 
                  community for the digital age.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 hover:from-blue-700 hover:via-cyan-600 hover:to-orange-600 text-white font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <Link to="/join" className="flex items-center gap-3">
                    Join Movement
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-bold px-10 py-4 text-lg"
                >
                  <Link to="/campaigns">Explore Campaigns</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right - Timothy's Image Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Orange to Blue Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-cyan-500 to-blue-600 p-2 rounded-3xl">
                  <div className="bg-white rounded-3xl h-full overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt={`Timothy Bulumba ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover object-center"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10"
                >
                  <ChevronLeft className="w-7 h-7 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-4 shadow-xl transition-all hover:scale-110 z-10"
                >
                  <ChevronRight className="w-7 h-7 text-gray-700" />
                </button>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-4 h-4 rounded-full transition-all border-2 ${
                        index === currentImageIndex 
                          ? 'bg-white border-white shadow-lg scale-125' 
                          : 'bg-white/60 border-white/80 hover:bg-white/80 hover:scale-110'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: endorsements.toLocaleString(), label: "Student Supporters", icon: Users, color: "from-blue-500 to-cyan-500" },
              { number: "5", label: "Active Campaigns", icon: Target, color: "from-purple-500 to-pink-500" },
              { number: "75+", label: "Partner Organizations", icon: Award, color: "from-orange-500 to-red-500" },
              { number: "2,500+", label: "Students Impacted", icon: TrendingUp, color: "from-emerald-500 to-teal-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-xl border border-slate-100 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Campaigns */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-800">
              Key Campaigns
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Revolutionary initiatives transforming student life at Makerere University
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Guild Scholars Fund",
                description: "Supporting academic excellence through financial assistance, merit scholarships, and educational resources for deserving students.",
                icon: Target,
                color: "from-emerald-500 to-teal-500",
                status: "Active - ₦2.4M raised"
              },
              {
                title: "Campus Coin", 
                description: "Revolutionary digital payment solution enabling seamless campus transactions, eliminating cash dependency across university.",
                icon: Zap,
                color: "from-blue-500 to-purple-500",
                status: "Beta Testing Phase"
              },
              {
                title: "Innovation Hubs",
                description: "Creating collaborative spaces equipped with modern technology for creativity, entrepreneurship, and skill development.",
                icon: Lightbulb,
                color: "from-orange-500 to-red-500", 
                status: "Phase 1 Complete"
              }
            ].map((campaign, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${campaign.color} flex items-center justify-center shadow-lg`}>
                  <campaign.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-4 text-center">{campaign.title}</h3>
                <p className="text-slate-600 text-center mb-6 leading-relaxed">{campaign.description}</p>
                <div className="text-center space-y-3">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${campaign.color} text-white`}>
                    {campaign.status}
                  </div>
                  <div>
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold"
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

      {/* Student Portal Access */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Student Services</h2>
            <p className="text-slate-600 text-lg">Quick access to essential university resources and tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Vote & Polls', desc: 'Participate in student decisions', href: '/vote', color: 'bg-blue-500' },
              { icon: Calendar, title: 'Events', desc: 'Upcoming campus activities', href: '/events', color: 'bg-green-500' },
              { icon: Award, title: 'Resources', desc: 'Academic documents & forms', href: '/resources', color: 'bg-purple-500' },
              { icon: MessageCircle, title: 'Contact Us', desc: 'Get support and assistance', href: '/contact', color: 'bg-orange-500' }
            ].map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full border-slate-200">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
              className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <div className="text-3xl font-black text-white">
                  {endorsements.toLocaleString()}
                </div>
                <div className="text-white/80 font-medium">Students Supporting</div>
              </div>
              <Button
                onClick={handleEndorse}
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-bold shadow-xl"
              >
                <ThumbsUp className="w-5 h-5 mr-2" />
                Endorse Now
              </Button>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-bold px-10 py-4 text-lg shadow-xl"
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
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-10 py-4 text-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat with Timothy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Endorse Button */}
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 py-4 rounded-full shadow-2xl"
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