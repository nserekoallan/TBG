import './CampaignsPage.css';
import { Card, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Users, Coins, Lightbulb, Radio, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import scholars5 from '../assets/images/scholars5.jpg';
import scholars2 from '../assets/images/scholars7.jpg';
import scholars3 from '../assets/images/scholars3.jpg';
import scholars4 from '../assets/images/scholars4.jpg';
import scholars6 from '../assets/images/scholars6.jpg';

const CampaignsPage = () => {
  const campaigns = [
    {
      id: 1,
      title: "GUILD SCHOLARS FUND",
      description: "This fund is dedicated to providing financial assistance to deserving students at Makerere university. By alleviating financial burdens, through providing half tuition scholarships at most 50% tuition fee coverage for financially disadvantaged students. This could be done through Crowd sourcing and digital fundraising, corporate partnerships, grant applications and event-based fundraising to save a Makererenean.",
      icon: Users,
      image: scholars2,
      status: "Active",
      
      features: [
      ]
    },
    {
      id: 2,
      title: "CAMPUS COIN",
      description: "Establishing a student SACCO at Makerere University with a focus on fixed accounts accessibility only after graduation with an annual interest rate. This will promote financial discipline and prepare students for post-campus life.",
      icon: Coins,
      image: scholars5,
      status: "In Development",
      features: [
        "1. Pursuing further studies",
        "2. Job transitions",
        "3. Entrepreneurship",
        "4. Promoting financial independence",
        "5. Financial security post-graduation",
        "Saving as low as 5000 per month"
      ]
    },
    {
      id: 3,
      title: "GUILD MUSEUM",
      description: "We will establish a dedicated Guild museum to preserve and showcase the rich history, achievements and contributions of the Makerere University Students Guild. Celebrating its legacy for future generations. Lighting up leisure parks within Makerere university to enhance safety and aesthetics during night hours.",
      icon: Lightbulb,
      image: scholars4,
      status: "Planning Phase",
      impact: "",
      features: []
    },
    {
      id: 4,
      title: "SCHOOL-BASED INNOVATION SHOWROOMS AROUND THE UNIVERSITY PERIMETER WALL.",
      description: "We envision transforming the perimeter wall into a dynamic space for innovation showrooms by establishing strategically located innovation showrooms. This can be done through the Makerere university innovation hub. This can easily transform Makerere into the \"SILICON VALLEY\" of East Africa. This provides students with modern workspaces, resources and mentorship to develop ground breaking ideas, fastening entrepreneurship and technological advancement within the university and surrounding community.",
      icon: Radio,
      image: scholars6,
      status: "Active",
      features: []
    },
    {
      id: 5,
      title: "DIGITALIZATION, VOICE OF MAKERERE RADIO & TV",
      description: "This focuses on fully digitalizing university operations i.e. Guild Sittings , students voices, health campaigns etc.. by upgrading our digital infrastructure and media platforms. We aim to enhance communication, improve access to information and provide students with cutting edge learning and broadcasting opportunities.",
      icon: Zap,
      image: scholars3,
      status: "Active",
      features: []
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
            Build Back Better plan at Makerere University
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
                      <ul className="campaign-card-features-list">
                        {campaign.features.map((feature, idx) => (
                          <li key={idx} className="campaign-card-feature">
                            <span className="campaign-card-feature-dot">
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="campaign-card-footer">
                      <div className="campaign-card-impact">
                        <strong></strong> {campaign.impact}
                      </div>
                      
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
          <div className="campaigns-cta-buttons">
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampaignsPage;