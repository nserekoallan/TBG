import './ContactPage.css';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Twitter, Instagram } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Makerere University",
        "University Road, Kampala",
        "Uganda"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@bulumba.ug",
        "campaigns@bulumba.ug",
        "partnerships@bulumba.ug"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+256 XXX XXX XXX",
        "+256 XXX XXX XXX",
        "Mon-Fri: 8AM-6PM"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="contact-root">
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">
            Contact Us
          </h1>
          <p className="contact-hero-description">
            Have questions about our campaigns or want to get involved? 
            We're here to help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <Card key={index} className="contact-info-card">
                <CardHeader>
                  <div className="contact-info-icon-bg">
                    <info.icon className="contact-info-icon" />
                  </div>
                  <CardTitle className="contact-info-title">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="contact-info-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="contact-info-detail">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-grid">
            {/* Contact Form */}
            <div>
              <div className="contact-form-header">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-description">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  Whether you have questions, want to volunteer, or are interested in partnerships, 
                  we're excited to connect with you.
                </p>
              </div>

              <Card className="contact-form-card">
                <CardContent className="contact-form-card-content">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-row">
                      <div>
                        <Label htmlFor="name" className="contact-form-label">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="contact-form-input"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="contact-form-label">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="contact-form-input"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="contact-form-label">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        placeholder="What is this message about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="contact-form-label">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="contact-form-textarea"
                        rows={6}
                        placeholder="Please provide details about your inquiry, how you'd like to get involved, or any questions you have about our campaigns..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="contact-form-submit-btn"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="contact-form-send-icon" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="contact-map-header">
                <h2 className="contact-map-title">Find Us</h2>
                <p className="contact-map-description">
                  Visit us at Makerere University campus or connect with us through our social media channels.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="contact-map-card">
                <CardContent className="contact-map-card-content">
                  <div className="contact-map-placeholder">
                    <div className="contact-map-placeholder-content">
                      <MapPin className="contact-map-icon" />
                      <p>Interactive Map</p>
                      <p className="contact-map-location">Makerere University Campus</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="contact-social-title">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="contact-social-description">
                    Stay updated with our latest campaigns and activities through our social media channels.
                  </p>
                  <div className="contact-social-icons">
                    <a 
                      href="#" 
                      className="contact-social-icon contact-social-facebook"
                    >
                      <Facebook className="contact-social-svg" />
                    </a>
                    <a 
                      href="#" 
                      className="contact-social-icon contact-social-twitter"
                    >
                      <Twitter className="contact-social-svg" />
                    </a>
                    <a 
                      href="#" 
                      className="contact-social-icon contact-social-instagram"
                    >
                      <Instagram className="contact-social-svg" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="contact-faq-container">
          <div className="contact-faq-content">
            <div className="contact-faq-header">
              <h2 className="contact-faq-title">Frequently Asked Questions</h2>
              <p className="contact-faq-description">Quick answers to common questions about our campaigns</p>
            </div>

            <div className="contact-faq-list">
              {[
                {
                  question: "How can I get involved with the campaigns?",
                  answer: "There are multiple ways to get involved: you can volunteer your time, make a donation, partner with us as an organization, or simply share our campaigns on social media. Visit our Join Us page to learn more about each option."
                },
                {
                  question: "Are donations to the Guild Scholars Fund tax-deductible?",
                  answer: "Yes, donations to our scholarship fund are tax-deductible. We'll provide you with the necessary documentation for your tax records. Contact us for more information about donation receipts."
                },
                {
                  question: "How do I apply for support from the Guild Scholars Fund?",
                  answer: "Applications for the Guild Scholars Fund are processed through the university's financial aid office. We work closely with them to identify and support deserving students. Check our Campaigns page for detailed application information."
                },
                {
                  question: "Can businesses partner with your campaigns?",
                  answer: "Absolutely! We welcome partnerships with businesses of all sizes. Whether through sponsorship, resource sharing, or collaborative initiatives, there are many ways to partner with us. Contact us to discuss partnership opportunities."
                }
              ].map((faq, index) => (
                <Card key={index} className="contact-faq-card">
                  <CardContent className="contact-faq-card-content">
                    <h3 className="contact-faq-question">{faq.question}</h3>
                    <p className="contact-faq-answer">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;