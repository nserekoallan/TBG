import { Label } from '../components/ui/label';
import { Heart, Users, Handshake, Share2, Mail, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const waysToBrinBenefiHelp = [
    {
      icon: Heart,
      title: "Donate",
      description: "Support our campaigns through financial contributions that directly impact student lives and university infrastructure.",
      actions: [
        "One-time donations",
        "Monthly giving programs",
        "Scholarship sponsorships",
        "Infrastructure funding"
      ],
      buttonText: "Donate Now",
      color: "bg-red-500 hover:bg-red-600"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and contribute your time and skills to make our campaigns successful.",
      actions: [
        "Event organization",
        "Student mentorship",
        "Campaign promotion",
        "Community outreach"
      ],
      buttonText: "Volunteer",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us as an organization, business, or institution to amplify our impact and reach.",
      actions: [
        "Corporate partnerships",
        "Academic collaborations",
        "Resource sharing",
        "Joint initiatives"
      ],
      buttonText: "Partner With Us",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Share2,
      title: "Share",
      description: "Help spread the word about our mission by sharing our campaigns and engaging your networks.",
      actions: [
        "Social media sharing",
        "Word-of-mouth promotion",
        "Content creation",
        "Community engagement"
      ],
      buttonText: "Share Now",
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Us: Be Part of the 
              <span className="block bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                Change!
              </span>
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every great movement starts with individuals who believe in change. 
              Your involvement, no matter how small, contributes to transforming Makerere University 
              and impacting thousands of lives.
            </p>
            <div className="flex items-center justify-center space-x-2 text-orange-100">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Multiple ways to contribute</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Direct impact on students</span>
              <span className="mx-2">•</span>
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Building lasting change</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Four Ways to Make a Difference</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to contribute to our Build Back Better movement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {waysToBrinBenefiHelp.map((way, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <way.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl font-bold">{way.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-gray-600 mb-6 flex-grow">{way.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What you can do:</h4>
                    <ul className="space-y-2">
                      {way.actions.map((action, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className={`${way.color} text-white mt-auto`}>
                    {way.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                Have questions about our campaigns or want to discuss partnership opportunities? 
                We'd love to hear from you!
              </p>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={5}
                      placeholder="Tell us about your interest in our campaigns, how you'd like to contribute, or any questions you have..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    You can also reach us directly at{' '}
                    <a href="mailto:info@bulumba.ug" className="text-blue-600 hover:underline">
                      info@bulumba.ug
                    </a>
                    {' '}or follow us on social media for updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Community</h2>
            <p className="text-lg text-gray-600">See the impact we're making together</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="font-semibold text-gray-900 mb-2">Active Volunteers</div>
                <p className="text-sm text-gray-600">
                  Students and community members contributing their time and skills
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="font-semibold text-gray-900 mb-2">Partner Organizations</div>
                <p className="text-sm text-gray-600">
                  Businesses and institutions supporting our mission
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">1,000+</div>
                <div className="font-semibold text-gray-900 mb-2">Students Impacted</div>
                <p className="text-sm text-gray-600">
                  Lives changed through our campaigns and initiatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUsPage;
