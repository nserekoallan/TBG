import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, X, Facebook, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import logoImg from '../assets/images/logo.jpg';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh opacity-5"></div>
      
      <motion.div 
        className="container mx-auto px-4 lg:px-8 py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-primary-400">
                    <img src={logoImg} alt="Bulumba Logo" className="w-full h-full object-cover" />
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-success-400 to-success-600 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Bulumba
                  </h3>
                  <p className="text-primary-400 font-medium">
                    Build Back Better
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transforming Makerere University through innovative campaigns, 
                community engagement, and student-driven initiatives for a brighter future.
              </p>
              
              <div className="flex items-center gap-2 text-primary-400">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Made with love for Makerere students</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Campaigns', path: '/campaigns' },
                { name: 'Vision', path: '/vision' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Get Involved */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-heading font-semibold text-white mb-6">
              Get Involved
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Join Movement', path: '/join' },
                { name: 'Volunteer', path: '/volunteer' },
                { name: 'Partner With Us', path: '/partner' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
        
        {/* Contact Info Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-dark-700 to-dark-800 rounded-2xl">
              <div className="p-3 bg-primary-500/10 rounded-xl">
                <MapPin className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Makerere University, Kampala</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-dark-700 to-dark-800 rounded-2xl">
              <div className="p-3 bg-accent-500/10 rounded-xl">
                <Mail className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">timothybulumba4@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-dark-700 to-dark-800 rounded-2xl">
              <div className="p-3 bg-success-500/10 rounded-xl">
                <Phone className="w-6 h-6 text-success-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+256 703 743 491</p>
              </div>
            </div>
          </div>
        </motion.div>

        
        {/* Social Media & Copyright */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              Connect with us:
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: X, href: "https://x.com/TBulumba", color: "hover:bg-gray-600" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bulumba-timothy-120bb126b/", color: "hover:bg-blue-600" },
                { icon: FaWhatsapp, href: "https://wa.me/qr/LL35LR6NT6ZJG1", color: "hover:bg-green-600" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100082311822729", color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-dark-700 rounded-xl text-gray-300 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Bulumba Build Back Better. All rights reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
