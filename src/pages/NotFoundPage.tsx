import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* 404 Illustration */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-9xl font-bold text-purple-200 select-none"
                >
                  404
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Search className="w-16 h-16 text-purple-400" />
                </motion.div>
              </div>

              {/* Error Message */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Page Not Found
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Sorry, the page or link you're looking for doesn't exist. 
                  It might have been moved, deleted, or you entered the wrong URL.
                </p>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link to="/" className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Go Home
                  </Link>
                </Button>
                
                <Button asChild size="lg" variant="outline">
                  <button onClick={() => window.history.back()} className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Go Back
                  </button>
                </Button>
              </motion.div>

              {/* Help Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-12 p-6 bg-white rounded-lg shadow-sm border border-purple-100"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Looking for something specific?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Check out our <Link to="/campaigns" className="text-purple-600 hover:underline">campaigns</Link></p>
                  <p>• Learn more <Link to="/about" className="text-purple-600 hover:underline">about Timothy</Link></p>
                  <p>• <Link to="/contact" className="text-purple-600 hover:underline">Contact us</Link> for support</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;