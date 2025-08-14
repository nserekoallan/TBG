import "./AboutPage.css";
import { Button } from "../components/ui/button";
import { Target, Users, ArrowRight, Star, Rocket, Lightbulb, MessageCircle, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HERO_IMAGES } from '../data/images';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* About Header */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <Star className="w-4 h-4" />
              <span>About Us</span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-dark-800">
              Meet the <span className="text-gradient">Visionary</span>
            </h1>
            
            <p className="text-xl text-dark-600 leading-relaxed">
              Learn about Timothy Bulumba's journey and the mission behind 
              Bulumba Build Back Better at Makerere University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timothy's Profile Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Timothy's Photo */}
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={HERO_IMAGES[2]} 
                      alt="Timothy Bulumba"
                      className="w-full h-96 object-cover"
                      style={{ objectPosition: 'center 35%' }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl" />
                </div>
                
                {/* Contact Card */}
                <motion.div 
                  className="mt-6 p-6 bg-white rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-heading font-bold text-dark-800 mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:timothybulumba4@gmail.com"
                      className="flex items-center gap-3 text-dark-600 hover:text-primary-600 transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-primary-600 text-sm">@</span>
                      </div>
                      <span className="text-sm">timothybulumba4@gmail.com</span>
                    </a>
                    <a 
                      href="https://wa.me/256703743491"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-dark-600 hover:text-green-600 transition-colors"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm">+256 703 743 491</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Timothy's Bio */}
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl font-heading font-bold text-dark-800 mb-4">
                    Timothy Bulumba
                  </h2>
                  <p className="text-primary-600 font-semibold text-lg mb-6">
                    Founder & Visionary Leader, Bulumba Build Back Better
                  </p>
                  
                  <div className="prose prose-lg text-dark-600 space-y-4">
                    <p>
                      Timothy Bulumba is a passionate advocate for educational transformation and student empowerment 
                      at Makerere University. With a deep commitment to bridging the gap between traditional academic 
                      excellence and modern digital innovation, Timothy has dedicated his efforts to creating meaningful 
                      change within Uganda's premier institution of higher learning.
                    </p>
                    
                    <p>
                      His vision extends beyond conventional student leadership, focusing on sustainable initiatives 
                      that will benefit generations of Makerere students. Through the Bulumba Build Back Better movement, 
                      Timothy champions innovative solutions including digital payment systems, scholarship programs, 
                      and collaborative learning spaces.
                    </p>
                    
                    <p>
                      Timothy believes that Makerere University can serve as a model for educational institutions 
                      across Africa, demonstrating how traditional academic values can be enhanced through 
                      technological advancement and community-driven initiatives.
                    </p>
                  </div>
                </div>
                
                {/* Key Highlights */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-primary-100">
                    <GraduationCap className="w-8 h-8 text-primary-600 mb-3" />
                    <h4 className="font-heading font-bold text-dark-800 mb-2">Educational Background</h4>
                    <p className="text-sm text-dark-600">Student at Makerere University with deep understanding of institutional challenges and opportunities</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-accent-100">
                    <Trophy className="w-8 h-8 text-accent-600 mb-3" />
                    <h4 className="font-heading font-bold text-dark-800 mb-2">Leadership Experience</h4>
                    <p className="text-sm text-dark-600">Proven track record in student advocacy, community organizing, and institutional reform initiatives</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-dark-800 mb-4">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-dark-600">
                The driving principles behind Bulumba Build Back Better
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-dark-800">Our Mission</h3>
                </div>
                <p className="text-dark-600 leading-relaxed">
                  To transform Makerere University into a modern, digitally-enhanced institution that serves 
                  as a beacon of excellence throughout Africa. We are committed to fostering innovation, 
                  supporting student success, and preserving the rich heritage of this esteemed institution.
                </p>
                <ul className="space-y-3 text-dark-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Empower students through innovative financial solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Bridge traditional academic excellence with modern technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Create sustainable improvements for future generations</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-dark-800">Our Vision</h3>
                </div>
                <p className="text-dark-600 leading-relaxed">
                  A Makerere University where every student has access to world-class resources, innovative 
                  learning environments, and the tools needed to succeed in the digital age while maintaining 
                  the institution's prestigious academic standards.
                </p>
                <ul className="space-y-3 text-dark-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Digital transformation of campus operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Inclusive access to educational opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>A model for universities across Africa</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-dark-800 mb-4">
                Key Initiatives
              </h2>
              <p className="text-lg text-dark-600 max-w-3xl mx-auto">
                The core programs driving positive change at Makerere University
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Guild Scholars Fund",
                  description: "Financial assistance and merit-based scholarships supporting academic excellence and reducing financial barriers to education.",
                  impact: "300+ students supported"
                },
                {
                  icon: Rocket,
                  title: "Campus Coin",
                  description: "Revolutionary digital payment solution for seamless campus transactions, modernizing financial operations across the university.",
                  impact: "Digital transformation"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Hubs",
                  description: "Collaborative spaces for creativity, technological advancement, and entrepreneurial growth within the university ecosystem.",
                  impact: "5 innovation projects"
                }
              ].map((initiative, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <initiative.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-dark-800">{initiative.title}</h3>
                  </div>
                  <p className="text-dark-600 leading-relaxed mb-4">
                    {initiative.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                    {initiative.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-dark-800 mb-6">
                Join the Movement
              </h2>
              <p className="text-lg text-dark-600 mb-12">
                Be part of the transformation at Makerere University. Together, we can build back better.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold">
                    <Link to="/join" className="flex items-center gap-2">
                      Join Our Mission
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg" variant="outline" className="border-2 border-primary-200 hover:border-primary-400 hover:bg-primary-50 px-8 py-4 rounded-xl font-semibold">
                    <Link to="/campaigns">View Our Campaigns</Link>
                  </Button>
                </motion.div>
                
                <motion.a
                  href="tel:+256703743491"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Call Timothy
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;