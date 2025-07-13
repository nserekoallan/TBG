import "./Volunteer.css";
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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
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
      setFormData({ name: "", email: "", college: "", phone: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-root">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <h1 className="contact-hero-title">Partner</h1>
          <p className="contact-hero-description">
            Become a Building Back Better partner
          </p>
        </div>
      </section>
      {/* Contact Form and Map */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-grid">
            {/* Contact Form */}
            <div>
              <div className="contact-form-header">
                <h2 className="contact-form-title">Become a Partner</h2>
                <p className="contact-form-description">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
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
                        Company/Institution *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.college}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        placeholder="Enter your company or institution name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="contact-form-label">
                        Phone Contact *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="contact-form-input"
                        placeholder="Enter your phone number"
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

export default ContactUs;
