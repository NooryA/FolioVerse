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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="clay-badge mb-6">
            <MailIcon className="w-5 h-5" />
            Get In Touch
          </div>
          <h2 className="clay-heading text-5xl md:text-6xl mb-6">
            Let's <span className="clay-text-gradient">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work together to create something
            amazing. Drop me a message and let's get started!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="clay-contact-card group">
                  <div className="clay-contact-icon">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{info.title}</h4>
                    <p className="font-medium text-gray-700">{info.value}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Services Pricing */}
            <div className="mt-12">
              <h4 className="text-lg font-bold text-gray-800 mb-6">Service Pricing</h4>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="clay-service-item">
                    <span className="font-medium text-gray-800">{service.name}</span>
                    <span className="text-purple-600 font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="clay-contact-form">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Me a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="clay-success-icon mb-6">
                    <CheckIcon className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully! 🎉</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Thank you for reaching out! I'll get back to you within 24 hours. In the meantime, feel free to check out my latest
                    projects or connect with me on social media.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="clay-btn clay-btn-secondary">
                    Send Another Message
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

        {/* Social Links & Additional Info */}
        <div className="text-center">
          <div className="clay-card clay-card-social max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's Connect on Social Media</h3>
            <p className="text-gray-600 mb-8">Follow me for development tips, project updates, and behind-the-scenes content.</p>
            <div className="flex justify-center gap-4 mb-8">
              {[
                { name: "Twitter", icon: "🐦", followers: "2.5K" },
                { name: "LinkedIn", icon: "💼", followers: "5.8K" },
                { name: "GitHub", icon: "🐙", followers: "1.2K" },
                { name: "Dribbble", icon: "🏀", followers: "800" },
              ].map((social, index) => (
                <button key={index} className="clay-social-btn">
                  <span className="text-2xl mb-1">{social.icon}</span>
                  <span className="font-semibold">{social.name}</span>
                  <span className="text-sm text-gray-500">{social.followers}</span>
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Prefer email? Send me a message at <strong>hello@alexdev.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
