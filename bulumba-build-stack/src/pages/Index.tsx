
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
    { icon: Users, label: "Students Impacted", value: "40,000+" },
    { icon: Target, label: "Active Campaigns", value: "5" },
    { icon: Heart, label: "Community Partners", value: "50+" },
    { icon: Lightbulb, label: "Innovation Projects", value: "15+" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="mb-6">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-4">
              <span className="text-blue-200 text-sm font-medium">Makerere University Campaign 2024</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Bulumba
            </span>
            <br />
            <span className="text-white">Build Back Better</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming Makerere University through innovative campaigns that empower students, 
            enhance learning, and build a stronger academic community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
              <Link to="/join">
                Join Our Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/campaigns">Explore Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campaign Slogans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {slogans.map((slogan, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{slogan}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-orange-400" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our key initiatives designed to transform the Makerere experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <campaign.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students, faculty, and community members working together to build back better
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link to="/join">Get Involved Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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
