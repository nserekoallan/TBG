import "./ContactPage.css";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  X
} from "lucide-react";
import { useToast } from "../hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Makerere University"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["timothybulumba4@gmail.com"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+256 7037434", "+256 776133293"],
    },
  ];

  return (
    <div className="contact-root">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Have questions about our campaigns or want to get involved? We're
            here to help and would love to hear from you.
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
                  <CardTitle className="contact-info-title">
                    {info.title}
                  </CardTitle>
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
                  Fill out the form below and we'll get back to you as soon as
                  possible. Whether you have questions, want to volunteer, or
                  are interested in partnerships, we're excited to connect with
                  you.
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
                        <Label htmlFor="email" className="contact-form-label1">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="contact-form-input1"
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

            <div>
              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="contact-social-title">
                    Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="contact-social-description">
                    Stay updated with our latest campaigns and activities
                    through our social media channels.
                  </p>
                  <div className="contact-social-icons">
                    <a
                      href="https://x.com/TBulumba"
                      className="footer-social-link"
                    >
                      <X className="footer-social-icon" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bulumba-timothy-120bb126b/"
                      className="footer-social-link"
                    >
                      <Linkedin className="footer-social-icon" />
                    </a>
                    <a
                      href="https://wa.me/qr/LL35LR6NT6ZJG1 "
                      className="footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="footer-social-icon" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100082311822729"
                      className="footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="footer-social-icon" />
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
            

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
