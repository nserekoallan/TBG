import './NotFound.css';
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
    <div className="notfound-root">
      <Header />
      
      <div className="notfound-main">
        <div className="notfound-content">
          {/* 404 Illustration */}
          <div className="notfound-illustration">
            <div className="notfound-404">404</div>
            <div className="notfound-divider"></div>
          </div>
          
          {/* Error Message */}
          <h1 className="notfound-title">
            Page Not Found
          </h1>
          <p className="notfound-description">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
          
          {/* Searched Path Info */}
          <div className="notfound-pathinfo">
            <div className="notfound-pathinfo-row">
              <Search className="notfound-pathinfo-icon" />
              <span>You searched for: </span>
              <code className="notfound-pathinfo-code">
                {location.pathname}
              </code>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="notfound-actions">
            <Button asChild size="lg" className="notfound-home-btn">
              <Link to="/">
                <Home className="notfound-home-icon" />
                Go to Homepage
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/campaigns">
                <ArrowLeft className="notfound-campaigns-icon" />
                View Our Campaigns
              </Link>
            </Button>
          </div>
          
          {/* Help Links */}
          <div className="notfound-helplinks">
            <p className="notfound-helplinks-title">Looking for something specific?</p>
            <div className="notfound-helplinks-row">
              <Link to="/about" className="notfound-helplink">About Us</Link>
              <Link to="/vision" className="notfound-helplink">Our Vision</Link>
              <Link to="/join" className="notfound-helplink">Join Us</Link>
              <Link to="/contact" className="notfound-helplink">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;