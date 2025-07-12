import './VisionPage.css';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Target, Eye, Heart, Star, ArrowRight, Users, Lightbulb, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisionPage = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Fostering an environment where every student can achieve their full academic potential through innovative learning approaches and comprehensive support systems."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "Integrating cutting-edge technology and fostering innovation to prepare students for the future economy and global challenges."
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building strong partnerships between the university, local communities, and industry to create meaningful impact beyond campus borders."
    },
    {
      icon: Heart,
      title: "Student Welfare",
      description: "Ensuring every student has access to essential services, financial support, and a safe, inclusive campus environment."
    }
  ];

  const achievements = [
    { number: "300+", label: "Students", description: "Diverse academic community" },
    { number: "10", label: "Colleges", description: "Comprehensive education" },
    { number: "5", label: "Programs", description: "Wide range of disciplines" }
  ];

  return (
    <div className="vision-root">
      <Header />
      
      {/* Hero Section */}
      <section className="vision-hero-section">
        <div className="vision-hero-container">
          <div className="vision-hero-content">
            <div className="vision-hero-badge">
              <Eye className="vision-hero-badge-icon" />
              <span className="vision-hero-badge-text">Our Vision & Mission</span>
            </div>
            
            <h1 className="vision-hero-title">
              Building Back Better: 
              <span className="vision-hero-title-gradient">
                A Vision for Makerere
              </span>
            </h1>
            
            <p className="vision-hero-description">
              Our comprehensive vision encompasses academic excellence, innovative technology integration, 
              community engagement, and student welfare to transform Makerere University into a 
              world-class institution for the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="vision-mission-section">
        <div className="vision-mission-container">
          <Card className="vision-mission-card">
            <CardContent className="vision-mission-card-content">
              <div className="vision-mission-header">
                <Star className="vision-mission-icon" />
                <h2 className="vision-mission-title">Our Mission</h2>
              </div>
              
              <blockquote className="vision-mission-quote">
                "To transform Makerere University into a beacon of academic excellence, innovation, 
                and community impact by implementing comprehensive reforms that enhance student experience, 
                modernize infrastructure, and foster a culture of continuous improvement and sustainable development."
              </blockquote>
              
              <div className="vision-mission-cite">
                <cite>— Bulumba Build Back Better Team</cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="vision-pillars-section">
        <div className="vision-pillars-container">
          <div className="vision-pillars-header">
            <h2 className="vision-pillars-title">Our Vision Pillars</h2>
            <p className="vision-pillars-description">
              Four foundational pillars that guide our approach to transforming Makerere University
            </p>
          </div>
          
          <div className="vision-pillars-grid">
            {visionPoints.map((point, index) => (
              <Card key={index} className="vision-pillar-card">
                <CardContent className="vision-pillar-card-content">
                  <div className="vision-pillar-icon-bg">
                    <point.icon className="vision-pillar-icon" />
                  </div>
                  <h3 className="vision-pillar-title">{point.title}</h3>
                  <p className="vision-pillar-description">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Vision */}
      <section className="vision-detail-section">
        <div className="vision-detail-container">
          <div className="vision-detail-content">
            <h2 className="vision-detail-title">
              What "Build Back Better" Means for Makerere
            </h2>
            
            <div className="vision-detail-blocks">
              <div className="vision-detail-row">
                <div className="vision-detail-col">
                  <h3 className="vision-detail-subtitle">Academic Transformation</h3>
                  <p className="vision-detail-text">
                    We envision a Makerere where every student has access to world-class education, 
                    cutting-edge research opportunities, and the resources needed to excel academically. 
                    Our Guild Scholars Fund ensures that financial constraints never limit academic potential.
                  </p>
                  <ul className="vision-detail-list">
                    <li className="vision-detail-listitem">
                      <BookOpen className="vision-detail-listicon" />
                      Enhanced scholarship programs
                    </li>
                    <li className="vision-detail-listitem">
                      <BookOpen className="vision-detail-listicon" />
                      Modern learning facilities
                    </li>
                    <li className="vision-detail-listitem">
                      <BookOpen className="vision-detail-listicon" />
                      Research support initiatives
                    </li>
                  </ul>
                </div>
                <div className="vision-detail-col vision-detail-img-col">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Students studying"
                    className="vision-detail-img"
                  />
                </div>
              </div>

              <div className="vision-detail-row">
                <div className="vision-detail-col vision-detail-img-col">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Innovation hub"
                    className="vision-detail-img"
                  />
                </div>
                <div className="vision-detail-col">
                  <h3 className="vision-detail-subtitle">Technological Innovation</h3>
                  <p className="vision-detail-text">
                    Through Campus Coin and Innovation Hubs, we're creating a digitally-enabled campus 
                    ecosystem that prepares students for the digital economy while solving real-world 
                    problems through technology and entrepreneurship.
                  </p>
                  <ul className="vision-detail-list">
                    <li className="vision-detail-listitem">
                      <Lightbulb className="vision-detail-listicon" />
                      Digital payment systems
                    </li>
                    <li className="vision-detail-listitem">
                      <Lightbulb className="vision-detail-listicon" />
                      Innovation incubators
                    </li>
                    <li className="vision-detail-listitem">
                      <Lightbulb className="vision-detail-listicon" />
                      Startup support programs
                    </li>
                  </ul>
                </div>
              </div>

              <div className="vision-detail-row">
                <div className="vision-detail-col">
                  <h3 className="vision-detail-subtitle">Infrastructure & Community</h3>
                  <p className="vision-detail-text">
                    Our lighting initiative and Guild Museum project represent our commitment to 
                    creating a safe, inspiring campus environment that celebrates our heritage 
                    while building for the future.
                  </p>
                  <ul className="vision-detail-list">
                    <li className="vision-detail-listitem">
                      <Users className="vision-detail-listicon" />
                      Enhanced campus safety
                    </li>
                    <li className="vision-detail-listitem">
                      <Users className="vision-detail-listicon" />
                      Cultural preservation
                    </li>
                    <li className="vision-detail-listitem">
                      <Users className="vision-detail-listicon" />
                      Community engagement
                    </li>
                  </ul>
                </div>
                <div className="vision-detail-col vision-detail-img-col">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="University campus"
                    className="vision-detail-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="vision-stats-section">
        <div className="vision-stats-container">
          <div className="vision-stats-header">
            <h2 className="vision-stats-title">Makerere University Today</h2>
            <p className="vision-stats-description">
              Building on decades of excellence to create an even brighter future
            </p>
          </div>
          
          <div className="vision-stats-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="vision-stat-card">
                <div className="vision-stat-number">{achievement.number}</div>
                <div className="vision-stat-label">{achievement.label}</div>
                <div className="vision-stat-description">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="vision-cta-section">
        <div className="vision-cta-container">
          <h2 className="vision-cta-title">
            Be Part of This Vision
          </h2>
          <p className="vision-cta-description">
            Our vision becomes reality through collective action. Join us in building back better 
            and creating lasting positive change at Makerere University.
          </p>
          <div className="vision-cta-buttons">
            <Button asChild size="lg" className="vision-cta-join-btn">
              <Link to="/join">
                Join Our Movement
                <ArrowRight className="vision-cta-arrow" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="vision-cta-campaigns-btn">
              <Link to="/campaigns">Explore Our Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionPage;