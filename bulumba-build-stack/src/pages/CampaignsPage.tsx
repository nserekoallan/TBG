import './CampaignsPage.css';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Users, Coins, Lightbulb, Radio, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CampaignsPage = () => {
  const campaigns = [
    {
      id: 1,
      title: "Guild Scholars Fund",
      description: "A comprehensive financial assistance program designed to support academically excellent but financially disadvantaged students at Makerere University. This fund provides scholarships, emergency financial aid, and academic resources to ensure no student's education is compromised due to financial constraints.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      impact: "500+ Students Supported",
      features: [
        "Merit-based scholarships",
        "Emergency financial assistance",
        "Academic resource support",
        "Mentorship programs"
      ]
    },
    {
      id: 2,
      title: "Campus Coin",
      description: "A revolutionary digital payment system tailored specifically for Makerere University campus. Campus Coin enables seamless transactions for cafeteria meals, bookstore purchases, accommodation fees, and other campus services, creating a cashless and efficient payment ecosystem.",
      icon: Coins,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "In Development",
      impact: "40,000+ Users Expected",
      features: [
        "Cashless campus transactions",
        "Mobile wallet integration",
        "Real-time payment tracking",
        "Merchant network expansion"
      ]
    },
    {
      id: 3,
      title: "Innovation Hubs around the Perimeter Wall",
      description: "Establishing state-of-the-art innovation and technology hubs strategically located around Makerere's perimeter wall. These spaces will serve as incubators for student startups, research projects, and collaborative innovation initiatives, fostering entrepreneurship and technological advancement.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Planning Phase",
      impact: "10+ Hub Locations",
      features: [
        "Co-working spaces",
        "Tech incubators",
        "Startup support programs",
        "Innovation workshops"
      ]
    },
    {
      id: 4,
      title: "Digitalization, Voice of Makerere Radio & TV",
      description: "Modernizing and expanding Makerere's media presence through comprehensive digitalization of Voice of Makerere Radio and the launch of a university television station. This initiative aims to enhance communication, provide educational content, and give students practical media experience.",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      impact: "Campus-wide Coverage",
      features: [
        "Digital broadcasting upgrade",
        "TV station launch",
        "Student media training",
        "Educational programming"
      ]
    },
    {
      id: 5,
      title: "Lighting up Makerere & Guild Museum",
      description: "A comprehensive infrastructure improvement project focused on enhancing campus lighting for safety and security, while establishing a dedicated Guild Museum to preserve and showcase Makerere's rich history, student achievements, and cultural heritage.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Active",
      impact: "100% Campus Coverage",
      features: [
        "LED lighting installation",
        "Solar power integration",
        "Museum establishment",
        "Historical preservation"
      ]
    }
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'campaign-status-active';
      case 'In Development':
        return 'campaign-status-development';
      case 'Planning Phase':
        return 'campaign-status-planning';
      default:
        return 'campaign-status-default';
    }
  };

  return (
    <div className="campaigns-root">
      <Header />
      
      {/* Hero Section */}
      <section className="campaigns-hero">
        <div className="campaigns-container">
          <h1 className="campaigns-hero-title">
            Our Core Campaigns
          </h1>
          <p className="campaigns-hero-description">
            Discover the five transformative initiatives that form the backbone of our 
            Build Back Better movement at Makerere University
          </p>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="campaigns-list-section">
        <div className="campaigns-container">
          <div className="campaigns-list">
            {campaigns.map((campaign, index) => (
              <Card key={campaign.id} className="campaign-card">
                <div className={`campaign-card-grid ${index % 2 === 1 ? 'campaign-card-grid-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`campaign-card-image-wrap ${index % 2 === 1 ? 'campaign-card-image-reverse' : ''}`}>
                    <img 
                      src={campaign.image} 
                      alt={campaign.title}
                      className="campaign-card-image"
                    />
                    <div className="campaign-card-image-overlay"></div>
                    <div className="campaign-card-status-badge">
                      <Badge className={getStatusClass(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="campaign-card-content">
                    <div className="campaign-card-header">
                      <campaign.icon className="campaign-card-icon" />
                      <CardTitle className="campaign-card-title">
                        {campaign.title}
                      </CardTitle>
                    </div>
                    
                    <p className="campaign-card-description">
                      {campaign.description}
                    </p>
                    
                    <div className="campaign-card-features">
                      <h4 className="campaign-card-features-title">Key Features:</h4>
                      <ul className="campaign-card-features-list">
                        {campaign.features.map((feature, idx) => (
                          <li key={idx} className="campaign-card-feature">
                            <span className="campaign-card-feature-dot"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="campaign-card-footer">
                      <div className="campaign-card-impact">
                        <strong>Impact:</strong> {campaign.impact}
                      </div>
                      <Button className="campaign-card-learn-btn">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="campaigns-cta">
        <div className="campaigns-container campaigns-cta-content">
          <h2 className="campaigns-cta-title">
            Ready to Support These Campaigns?
          </h2>
          <p className="campaigns-cta-description">
            Your involvement can make a real difference in transforming Makerere University. 
            Join us in building back better.
          </p>
          <div className="campaigns-cta-buttons">
            <Button size="lg" className="campaigns-cta-involved-btn">
              Get Involved
            </Button>
            <Button size="lg" variant="outline" className="campaigns-cta-share-btn">
              Share Campaigns
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampaignsPage;