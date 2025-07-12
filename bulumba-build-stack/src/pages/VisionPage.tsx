
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
    { number: "75+", label: "Years of Excellence", description: "Building on Makerere's legacy" },
    { number: "40,000+", label: "Students", description: "Diverse academic community" },
    { number: "9", label: "Colleges", description: "Comprehensive education" },
    { number: "100+", label: "Programs", description: "Wide range of disciplines" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
              <Eye className="h-4 w-4 text-blue-200 mr-2" />
              <span className="text-blue-200 text-sm font-medium">Our Vision & Mission</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Building Back Better: 
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent block">
                A Vision for Makerere
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive vision encompasses academic excellence, innovative technology integration, 
              community engagement, and student welfare to transform Makerere University into a 
              world-class institution for the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 text-center italic leading-relaxed">
                "To transform Makerere University into a beacon of academic excellence, innovation, 
                and community impact by implementing comprehensive reforms that enhance student experience, 
                modernize infrastructure, and foster a culture of continuous improvement and sustainable development."
              </blockquote>
              
              <div className="text-center mt-8">
                <cite className="text-gray-600 font-medium">— Bulumba Build Back Better Team</cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four foundational pillars that guide our approach to transforming Makerere University
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionPoints.map((point, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{point.title}</h3>
                  <p className="text-gray-600 flex-grow">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What "Build Back Better" Means for Makerere
            </h2>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Academic Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    We envision a Makerere where every student has access to world-class education, 
                    cutting-edge research opportunities, and the resources needed to excel academically. 
                    Our Guild Scholars Fund ensures that financial constraints never limit academic potential.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                      Enhanced scholarship programs
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                      Modern learning facilities
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                      Research support initiatives
                    </li>
                  </ul>
                </div>
                <div className="order-first md:order-last">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Students studying"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Innovation hub"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technological Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    Through Campus Coin and Innovation Hubs, we're creating a digitally-enabled campus 
                    ecosystem that prepares students for the digital economy while solving real-world 
                    problems through technology and entrepreneurship.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <Lightbulb className="h-4 w-4 text-blue-600 mr-2" />
                      Digital payment systems
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="h-4 w-4 text-blue-600 mr-2" />
                      Innovation incubators
                    </li>
                    <li className="flex items-center">
                      <Lightbulb className="h-4 w-4 text-blue-600 mr-2" />
                      Startup support programs
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Infrastructure & Community</h3>
                  <p className="text-gray-600 mb-4">
                    Our lighting initiative and Guild Museum project represent our commitment to 
                    creating a safe, inspiring campus environment that celebrates our heritage 
                    while building for the future.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      Enhanced campus safety
                    </li>
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      Cultural preservation
                    </li>
                    <li className="flex items-center">
                      <Users className="h-4 w-4 text-blue-600 mr-2" />
                      Community engagement
                    </li>
                  </ul>
                </div>
                <div className="order-first md:order-last">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="University campus"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Makerere University Today</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Building on decades of excellence to create an even brighter future
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold text-orange-400 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                <div className="text-sm text-blue-100">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Be Part of This Vision
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our vision becomes reality through collective action. Join us in building back better 
            and creating lasting positive change at Makerere University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link to="/join">
                Join Our Movement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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

