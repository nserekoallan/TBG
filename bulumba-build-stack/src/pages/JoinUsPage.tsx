import "./JoinUsPage.css";
import { Label } from "../components/ui/label";
import {
  Heart,
  Users,
  Handshake,
  Share2,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useNavigate } from "react-router-dom";

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    college: "",
  });

  const navigate = useNavigate();
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
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", phone: "", college: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const waysToBrinBenefiHelp = [
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and contribute your time and skills to make our campaigns successful.",
      actions: [
        "Event organization",
        "Student mentorship",
        "Campaign promotion",
        "Community outreach",
      ],
      buttonText: "Volunteer",
      colorClass: "joinus-volunteer-btn",
    },
    {
      icon: Handshake,
      title: "Partner",
      description:
        "Collaborate with us as an organization, business, or institution to amplify our impact and reach.",
      actions: [
        "Corporate partnerships",
        "Academic collaborations",
        "Resource sharing",
        "Joint initiatives",
      ],
      buttonText: "Partner With Us",
      colorClass: "joinus-partner-btn",
    },
    {
      icon: Share2,
      title: "Share",
      description:
        "Help spread the word about our mission by sharing our campaigns and engaging your networks.",
      actions: [
        "Social media sharing",
        "Word-of-mouth promotion",
        "Content creation",
        "Community engagement",
      ],
      buttonText: "Share Now",
      colorClass: "joinus-share-btn",
    },
  ];

  return (
    <div className="joinus-root">
      <Header />

      {/* Hero Section */}
      <section className="joinus-hero">
        <div className="joinus-hero-container">
          <div className="joinus-hero-content">
            <h1 className="joinus-hero-title">
              Join Us: Be Part of the
              <span className="joinus-hero-title-highlight">Change</span>
            </h1>
            <p className="joinus-hero-description">
              Every great movement starts with individuals who believe in
              change. Your involvement, no matter how small, contributes to the
              Building Back Better plan and impacting thousands of lives.
            </p>
            <div className="joinus-hero-badges">
              <div className="joinus-hero-badge">
                <CheckCircle className="joinus-hero-badge-icon" />
                <span className="joinus-hero-badge-text">
                  Multiple ways to contribute
                </span>
              </div>
              <div className="joinus-hero-badge-divider">•</div>
              <div className="joinus-hero-badge">
                <CheckCircle className="joinus-hero-badge-icon" />
                <span className="joinus-hero-badge-text">
                  Direct impact on students
                </span>
              </div>
              <div className="joinus-hero-badge-divider">•</div>
              <div className="joinus-hero-badge">
                <CheckCircle className="joinus-hero-badge-icon" />
                <span className="joinus-hero-badge-text">
                  Building lasting change
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="joinus-ways-section">
        <div className="joinus-ways-container">
          <div className="joinus-ways-header">
            <h2 className="joinus-ways-title">
              Four Ways to Make a Difference
            </h2>
            <p className="joinus-ways-description">
              Choose how you'd like to contribute to our Build Back Better
              movement
            </p>
          </div>

          <div className="joinus-ways-grid">
            {waysToBrinBenefiHelp.map((way, index) => (
              <Card key={index} className="joinus-way-card">
                <CardHeader className="joinus-way-card-header">
                  <div className="joinus-way-icon-bg">
                    <way.icon className="joinus-way-icon" />
                  </div>
                  <CardTitle className="joinus-way-title">
                    {way.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="joinus-way-card-content">
                  <p className="joinus-way-description">{way.description}</p>

                  <div className="joinus-way-actions">
                    <h4 className="joinus-way-actions-title">
                      What you can do:
                    </h4>
                    <ul className="joinus-way-actions-list">
                      {way.actions.map((action, idx) => (
                        <li key={idx} className="joinus-way-action">
                          <span className="joinus-way-action-dot"></span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={
                      way.title === "Volunteer"
                        ? () => navigate("/volunteer")
                        : way.title === 'Partner'
                        ? () => navigate("/partner")
                        : undefined
                    }
                    className={`${way.colorClass} joinus-way-btn`}
                  >
                    {way.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="joinus-contact-section">
        <div className="joinus-contact-container">
          <div className="joinus-contact-content">
            <div className="joinus-contact-header">
              <Mail className="joinus-contact-icon" />
              <h2 className="joinus-contact-title">Get in Touch</h2>
              <p className="joinus-contact-description">
                Have questions about our campaigns or want to discuss
                partnership opportunities? We'd love to hear from you!
              </p>
            </div>

            <Card className="joinus-contact-card">
              <CardContent className="joinus-contact-card-content">
                <form onSubmit={handleSubmit} className="joinus-contact-form">
                  <div className="joinus-contact-form-group">
                    <Label htmlFor="name" className="joinus-contact-label">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="joinus-contact-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="joinus-contact-form-group">
                    <Label htmlFor="phone" className="joinus-contact-label">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="text"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="joinus-contact-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="joinus-contact-form-group">
                    <Label htmlFor="college" className="joinus-contact-label">
                      School/College *
                    </Label>
                    <Input
                      id="college"
                      name="college"
                      type="text"
                      required
                      value={formData.college}
                      onChange={handleInputChange}
                      className="joinus-contact-input"
                      placeholder="Enter your school/college"
                    />
                  </div>
                  <div className="joinus-contact-form-group">
                    <Label htmlFor="email" className="joinus-contact-label">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="joinus-contact-input"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="joinus-contact-form-group">
                    <Label htmlFor="message" className="joinus-contact-label">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="joinus-contact-textarea"
                      rows={5}
                      placeholder="Tell us about your interest in our campaigns, how you'd like to contribute, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="joinus-contact-submit-btn"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="joinus-contact-send-icon" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="joinus-contact-extra">
                  <p className="joinus-contact-extra-text">
                    You can also reach us directly at{" "}
                    <a
                      href="mailto:timothybulumba4@gmail.com"
                      className="joinus-contact-extra-link"
                    >
                      timothybulumba4@gmail.com
                    </a>{" "}
                    or follow us on social media for updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="joinus-success-section">
        <div className="joinus-success-container">
          <div className="joinus-success-header">
            <h2 className="joinus-success-title">Join Our Growing Community</h2>
            <p className="joinus-success-description">
              See the impact we're making together
            </p>
          </div>

          <div className="joinus-success-grid">
            <Card className="joinus-success-card">
              <CardContent className="joinus-success-card-content">
                <div className="joinus-success-number joinus-success-number-blue">
                  500+
                </div>
                <div className="joinus-success-label">Active Volunteers</div>
                <p className="joinus-success-text">
                  Students and community members contributing their time and
                  skills
                </p>
              </CardContent>
            </Card>

            <Card className="joinus-success-card">
              <CardContent className="joinus-success-card-content">
                <div className="joinus-success-number joinus-success-number-green">
                  50+
                </div>
                <div className="joinus-success-label">
                  Partner Organizations
                </div>
                <p className="joinus-success-text">
                  Businesses and institutions supporting our mission
                </p>
              </CardContent>
            </Card>

            <Card className="joinus-success-card">
              <CardContent className="joinus-success-card-content">
                <div className="joinus-success-number joinus-success-number-orange">
                  1,000+
                </div>
                <div className="joinus-success-label">Students Impacted</div>
                <p className="joinus-success-text">
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
