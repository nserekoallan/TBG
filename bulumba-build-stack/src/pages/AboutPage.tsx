
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Target, Users, Award, History, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Bulumba",
      role: "Campaign Leader",
      description: "Leading the vision for transforming Makerere University through innovative campaigns and community engagement.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sarah Namukasa",
      role: "Academic Affairs Coordinator",
      description: "Overseeing the Guild Scholars Fund and academic excellence initiatives across all university colleges.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "David Okello",
      role: "Technology & Innovation Lead",
      description: "Spearheading Campus Coin development and innovation hub establishment around the campus perimeter.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Grace Atim",
      role: "Community Engagement Manager",
      description: "Building partnerships and managing volunteer programs to maximize community impact and participation.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from academic support to infrastructure development."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Our campaigns are designed to benefit all students, regardless of background, ensuring equal opportunities for success."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and creative approaches to solve traditional university challenges."
    },
    {
      icon: History,
      title: "Legacy",
      description: "We build upon Makerere's rich heritage while creating sustainable improvements for future generations."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Campaign Launch",
      description: "Official launch of the Build Back Better initiative with five core campaigns.",
      status: "completed"
    },
    {
      year: "2024",
      title: "Guild Scholars Fund Established",
      description: "Successfully launched scholarship program supporting 100+ students in first phase.",
      status: "completed"
    },
    {
      year: "2024",
      title: "Campus Coin Development",
      description: "Beta testing of digital payment system with selected campus vendors.",
      status: "in-progress"
    },
    {
      year: "2025",
      title: "Innovation Hubs Opening",
      description: "Planned opening of first innovation hub facility around the perimeter wall.",
      status: "planned"
    },
    {
      year: "2025",
      title: "Complete Infrastructure Upgrade",
      description: "Full campus lighting upgrade and Guild Museum establishment.",
      status: "planned"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About Our 
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent block">
                Movement
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              The Build Back Better campaign represents a comprehensive vision for transforming 
              Makerere University into a world-class institution that serves as a beacon of 
              academic excellence, innovation, and community impact across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link to="/vision">Our Vision</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/campaigns">View Campaigns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg border-l-4 border-l-blue-600">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <Quote className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                    "Our mission is to transform Makerere University through innovative campaigns that enhance 
                    student experience, modernize infrastructure, and create lasting positive impact. We believe 
                    that by working together, we can build back better and establish Makerere as a leading 
                    institution for the 21st century."
                  </blockquote>
                  <cite className="text-gray-600 font-medium">Build Back Better Campaign Team</cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our approach to transforming Makerere University
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated leaders working tirelessly to make the Build Back Better vision a reality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our Build Back Better campaign
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      milestone.status === 'completed' ? 'bg-green-500 border-green-500' :
                      milestone.status === 'in-progress' ? 'bg-blue-500 border-blue-500' :
                      'bg-gray-300 border-gray-300'
                    }`}></div>
                  </div>
                  <div className="flex-grow">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {milestone.year}
                            </Badge>
                            <Badge className={
                              milestone.status === 'completed' ? 'bg-green-500' :
                              milestone.status === 'in-progress' ? 'bg-blue-500' :
                              'bg-gray-500'
                            }>
                              {milestone.status.replace('-', ' ')}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact So Far</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Measurable progress in our mission to transform Makerere University
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Students Supported", description: "Through various programs" },
              { number: "50+", label: "Partners", description: "Organizations & businesses" },
              { number: "5", label: "Active Campaigns", description: "Comprehensive initiatives" },
              { number: "100%", label: "Transparency", description: "Open reporting & accountability" }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the transformation. Your involvement, whether big or small, 
            contributes to building a better Makerere University for current and future students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link to="/join">
                Get Involved Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
