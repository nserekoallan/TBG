import './Index.css';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Lightbulb, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const slogans = [
    "Building Tomorrow's Makerere Today",
    "Innovation • Excellence • Community",
    "Your Voice, Our Future, One University"
  ];

  const quickStats = [
    { icon: Users, label: "Students Impacted", value: "300+" },
    { icon: Target, label: "Active Campaigns", value: "5" },
    { icon: Heart, label: "Community Partners", value: "2" },
    { icon: Lightbulb, label: "Innovation Projects", value: "5" }
  ];


  return (
    <div className="index-root">
      <Header />
      
      {/* Hero Section */}
      <section className="index-hero">
        {/* Background Image */}
        <div 
          className="index-hero-bg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.0)), url('https://mkeqcoiwszenuwxntjrh.supabase.co/storage/v1/object/public/tourismimages//WhatsApp%20Image%202025-07-12%20at%2017.08.41_65e51e77.jpg')`
          }}
        />
        
        {/* Content */}
        <div className="index-hero-content">
          <div className="index-hero-badge-row">
            <div className="index-hero-badge">
              <span className='bulumba'>Let's Build Back Better </span>
            </div>
          </div>
          
          <h1 className="index-hero-title">
            <span className="index-hero-title-gradient">
              Bulumba
            </span>
            <br />
            <span className="index-hero-title-white">Build Back Better</span>
          </h1>
          
          <p className="index-hero-description">
            Transforming Makerere University through innovative campaigns that empower students, 
            enhance learning, and build a stronger academic community.
          </p>
          
          <div className="index-hero-buttons">
            <Button asChild size="lg" className="index-hero-join-btn">
              <Link to="/join">
                Join Us
                <ArrowRight className="index-hero-arrow" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="index-hero-explore-btn">
              <Link to="/campaigns">Explore Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campaign Slogans */}
      <section className="index-slogans-section">
        <div className="index-container">
          <div className="index-slogans-header">
            <h2 className="index-slogans-title">About The Campaign</h2>
            <div className="index-slogans-divider"></div>
            <p className="index-featured-description">
              Bulumba's Build Back Better plan is a transformative initiative
              dedicated to empowering Makerere university students for a
              brighter future. Our goal is to foster innovation, support student
              success and preserve the rich history of this esteemed
              institution, ensuring it remains a beacon of Excel in Africa and
              beyond. We believe in collective action to build a stronger, more
              vibrant university community for generations to come.
            </p>
          </div>
          <div className="index-slogans-header">
            <h2 className="index-slogans-title">Our Mission</h2>
            <div className="index-slogans-divider"></div>
          </div>
          
          <div className="index-slogans-grid">
            {slogans.map((slogan, index) => (
              <Card key={index} className="index-slogan-card">
                <CardContent className="index-slogan-card-content">
                  <h3 className="index-slogan-text">{slogan}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="index-stats-section">
        <div className="index-container">
          <div className="index-stats-grid">
            {quickStats.map((stat, index) => (
              <div key={index} className="index-stat-card">
                <stat.icon className="index-stat-icon" />
                <div className="index-stat-value">{stat.value}</div>
                <div className="index-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Preview */}
      <section className="index-featured-section">
        <div className="index-container">
          <div className="index-featured-header">
            <h2 className="index-featured-title">Core Campaigns</h2>
            <p className="index-featured-description">
              Discover our key initiatives designed to transform your Makerere experience
            </p>
          </div>
          
          <div className="index-featured-grid">
            {[
              {
                title: "Guild Scholars Fund",
                description: "Supporting academic excellence through financial assistance",
                icon: BookOpen
              },
              {
                title: "Campus Coin",
                description: "Digital payment solution for seamless campus transactions",
                icon: Target
              },
              {
                title: "Innovation Hubs",
                description: "Creating spaces for creativity and technological advancement",
                icon: Lightbulb
              }
            ].map((campaign, index) => (
              <Card key={index} className="index-featured-card">
                <CardContent className="index-featured-card-content">
                  <campaign.icon className="index-featured-icon" />
                  <h3 className="index-featured-campaign-title">{campaign.title}</h3>
                  <p className="index-featured-campaign-description">{campaign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="index-featured-viewall-row">
            <Button asChild size="lg" variant="outline">
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="index-cta-section">
        <div className="index-container index-cta-content">
          <h2 className="index-cta-title">Ready to Make a Difference?</h2>
          <p className="index-cta-description">
            Join thousands of students, faculty, and community members working together to build back better
          </p>
          <div className="index-cta-buttons">
            <Button asChild size="lg" className="index-cta-join-btn">
              <Link to="/join">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="index-cta-vision-btn">
              <Link to="/vision">Learn Our Vision</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;