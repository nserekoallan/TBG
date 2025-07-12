
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from '../components/ui/button';
import { ArrowLeft, Home, Search } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="text-center px-4 max-w-2xl mx-auto">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gray-200 mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-6"></div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
          
          {/* Searched Path Info */}
          <div className="bg-gray-100 rounded-lg p-4 mb-8 text-left">
            <div className="flex items-center text-gray-600 text-sm">
              <Search className="h-4 w-4 mr-2" />
              <span>You searched for: </span>
              <code className="bg-white px-2 py-1 rounded text-red-600 ml-1">
                {location.pathname}
              </code>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/campaigns">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View Our Campaigns
              </Link>
            </Button>
          </div>
          
          {/* Help Links */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
              <Link to="/vision" className="text-blue-600 hover:underline">Our Vision</Link>
              <Link to="/join" className="text-blue-600 hover:underline">Join Us</Link>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
