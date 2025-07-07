"use client";

import { useState } from "react";

// Inline SVG Icons
const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getServiceIcon = (serviceName: string) => {
    switch (serviceName) {
      case "Web Development":
        return "💻";
      case "Mobile App Development":
        return "📱";
      case "UI/UX Design":
        return "🎨";
      case "Consulting":
        return "🧠";
      default:
        return "✨";
    }
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email Me",
      value: "hello@alexdev.com",
      description: "Best for project inquiries",
      link: "mailto:hello@alexdev.com",
    },
    {
      icon: PhoneIcon,
      title: "Call Me",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri, 9am-6pm PST",
      link: "tel:+15551234567",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work worldwide",
      link: "#",
    },
    {
      icon: ClockIcon,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster!",
      link: "#",
    },
  ];

  const services = [
    { name: "Web Development", price: "Starting at $5,000" },
    { name: "Mobile App Development", price: "Starting at $8,000" },
    { name: "UI/UX Design", price: "Starting at $3,000" },
    { name: "Consulting", price: "Starting at $150/hour" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="clay-section">
      <div className="clay-container">
        {/* Creative Header */}
        <div className="text-center mb-20">
          <div className="clay-collaboration-badge mb-12">
            <div className="clay-collab-icons">
              <div className="clay-icon-orbit">
                <span className="clay-orbit-icon">💡</span>
                <span className="clay-orbit-icon">🚀</span>
                <span className="clay-orbit-icon">✨</span>
                <span className="clay-orbit-icon">🎯</span>
              </div>
            </div>
            <div className="clay-collab-text">
              <span>Let's Create Magic Together</span>
            </div>
          </div>
          <h2 className="clay-heading text-6xl md:text-7xl mb-8">
            Ready to Build <span className="clay-text-gradient">Something Epic?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Every groundbreaking project starts with a simple "hello." Whether you're dreaming of the next big app, need to revamp your
            digital presence, or want to explore cutting-edge technologies, I'm here to turn your vision into reality. Let's embark on this
            creative adventure together!
          </p>
        </div>

        {/* Creative Contact Options */}
        <div className="clay-contact-methods mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="clay-creative-contact-card group">
                <div className="clay-creative-icon">
                  <info.icon className="w-8 h-8" />
                </div>
                <h4 className="clay-card-title">{info.title}</h4>
                <p className="clay-card-value">{info.value}</p>
                <p className="clay-card-desc">{info.description}</p>
                <div className="clay-card-glow"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Collaboration Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Creative Services Showcase */}
          <div className="lg:col-span-2">
            <div className="clay-services-showcase">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🎨 What I Create</h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="clay-creative-service">
                    <div className="clay-service-icon">{getServiceIcon(service.name)}</div>
                    <div className="clay-service-content">
                      <h4 className="clay-service-name">{service.name}</h4>
                      <p className="clay-service-price">{service.price}</p>
                    </div>
                    <div className="clay-service-hover-effect"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-3">
            <div className="clay-creative-form">
              <div className="clay-form-header">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">💌 Start Our Journey</h3>
                <p className="text-gray-600 mb-8">Tell me about your project and let's create something extraordinary together!</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="clay-success-celebration mb-8">
                    <div className="clay-success-icon mb-6">
                      <CheckIcon className="w-16 h-16 text-white" />
                    </div>
                    <div className="clay-celebration-particles">
                      <span className="clay-particle">🎉</span>
                      <span className="clay-particle">✨</span>
                      <span className="clay-particle">🚀</span>
                      <span className="clay-particle">💫</span>
                    </div>
                  </div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-6">Your Message Launched Successfully!</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Amazing! Your message has been sent to my digital workspace. I'll craft a personalized response within 24 hours. While
                    you wait, explore my latest creations or connect with me on social platforms!
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="clay-btn clay-btn-primary">
                    ✨ Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="clay-form-group">
                      <label className="clay-form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="clay-form-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="clay-form-group">
                      <label className="clay-form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="clay-form-input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="clay-form-group">
                    <label className="clay-form-label">Project Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="clay-form-input"
                      placeholder="What's your project about?"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="clay-form-group">
                      <label className="clay-form-label">Budget Range</label>
                      <select name="budget" value={formData.budget} onChange={handleInputChange} className="clay-form-input">
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                    <div className="clay-form-group">
                      <label className="clay-form-label">Timeline</label>
                      <select name="timeline" value={formData.timeline} onChange={handleInputChange} className="clay-form-input">
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-plus-months">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div className="clay-form-group">
                    <label className="clay-form-label">Project Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="clay-form-textarea"
                      rows={6}
                      placeholder="Tell me about your project, goals, target audience, specific features you need, and any other important details..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`clay-btn clay-btn-primary w-full ${isSubmitting ? "clay-btn-loading" : ""}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="clay-spinner"></div>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <SendIcon className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Creative Social Connection */}
        <div className="clay-social-universe">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">🌟 Join My Digital Universe</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with me across different platforms and become part of my creative community. Get exclusive insights, behind-the-scenes
              content, and early access to my latest projects!
            </p>
          </div>

          <div className="clay-social-galaxy">
            <div className="clay-social-orbit">
              {[
                { name: "Twitter", icon: "🐦", followers: "2.5K" },
                { name: "LinkedIn", icon: "💼", followers: "5.8K" },
                { name: "GitHub", icon: "🐙", followers: "1.2K" },
                { name: "Dribbble", icon: "🏀", followers: "800" },
              ].map((social, index) => (
                <div key={index} className="clay-social-planet" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="clay-planet-content">
                    <div className="clay-planet-icon">{social.icon}</div>
                    <div className="clay-planet-info">
                      <h4 className="clay-planet-name">{social.name}</h4>
                      <p className="clay-planet-followers">{social.followers}</p>
                    </div>
                  </div>
                  <div className="clay-planet-rings"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="clay-contact-footer">
            <div className="clay-footer-card">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">🚀 Ready to Launch Your Project?</h4>
              <p className="text-gray-600 mb-6">
                Whether you prefer a quick chat or a detailed email, I'm here to help bring your vision to life.
              </p>
              <div className="clay-contact-actions">
                <a href="mailto:hello@alexdev.com" className="clay-btn clay-btn-primary">
                  📧 Email Me Directly
                </a>
                <a href="tel:+15551234567" className="clay-btn clay-btn-secondary">
                  📞 Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
