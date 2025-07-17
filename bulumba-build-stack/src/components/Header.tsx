import './Header.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import B3 from "../assets/images/B2.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Campaigns', path: '/campaigns' },
  ];

  return (
    <header className="header-root">
      <div className="header-container">
        <div className="header-flex">
          {/* Logo */}
          <Link to="/" className="header-logo-link">
            <div className="header-logo-bg">
              <div className="footer-logo-bg">
                <img src={B3} alt="Bulumba Logo" className="footer-logo-img" />
              </div>
            </div>
            <div className="header-logo-title-wrap">
              <span className="header-logo-title">Bulumba</span>
              <span className="header-logo-subtitle">Build Back Better</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={
                  isActive(item.path)
                    ? 'header-nav-link header-nav-link-active'
                    : 'header-nav-link'
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <Button asChild className="header-cta-btn">
              <Link to="/join">Join Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="header-mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="header-mobile-icon" />
            ) : (
              <Menu className="header-mobile-icon" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-nav">
            <nav className="header-mobile-nav-list">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={
                    isActive(item.path)
                      ? 'header-mobile-link header-mobile-link-active'
                      : 'header-mobile-link'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="header-mobile-cta">
                <Button asChild className="header-mobile-cta-btn">
                  <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                    Join Movement
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;