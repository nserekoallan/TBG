
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'In Development':
        return 'bg-blue-500';
      case 'Planning Phase':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Campaigns
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the five transformative initiatives that form the backbone of our 
            Build Back Better movement at Makerere University
          </p>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {campaigns.map((campaign, index) => (
              <Card key={campaign.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={campaign.image} 
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getStatusColor(campaign.status)} text-white`}>
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <campaign.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {campaign.title}
                      </CardTitle>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {campaign.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {campaign.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <strong>Impact:</strong> {campaign.impact}
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Support These Campaigns?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your involvement can make a real difference in transforming Makerere University. 
            Join us in building back better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Involved
            </Button>
            <Button size="lg" variant="outline">
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
