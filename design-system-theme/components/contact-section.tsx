"use client";

import { useState } from "react";

// Inline SVG Icons
const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      title: "Design System Audit",
      price: "Starting at $5,000",
      duration: "2-3 weeks",
      description: "Comprehensive analysis of your current design patterns and recommendations for improvement.",
      features: ["Pattern Inventory", "Gap Analysis", "Recommendations", "Roadmap"]
    },
    {
      title: "Custom Design System",
      price: "Starting at $25,000",
      duration: "3-6 months",
      description: "End-to-end design system creation with tokens, components, and documentation.",
      features: ["Design Tokens", "Component Library", "Documentation", "Implementation Support"]
    },
    {
      title: "Design System Training",
      price: "Starting at $2,500",
      duration: "1-2 weeks",
      description: "Team training on design system principles, tools, and best practices.",
      features: ["Team Workshops", "Best Practices", "Tool Training", "Ongoing Support"]
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="ds-section ds-bg-gray-50">
      <div className="ds-container">
        {/* Section Header */}
        <div className="ds-text-center ds-mb-16">
          <div className="ds-badge ds-badge-primary ds-mb-6">
            <MailIcon className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="ds-text-5xl ds-font-extrabold ds-text-gray-900 ds-mb-6">
            Ready to Build Your <span className="ds-text-primary-600">Design System?</span>
          </h2>
          <p className="ds-text-xl ds-text-gray-600 max-w-3xl mx-auto">
            Let's discuss your design system needs and create a scalable foundation for your product.
          </p>
        </div>

        <div className="ds-grid ds-grid-cols-1 lg:ds-grid-cols-3 ds-gap-12 ds-mb-16">
          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="ds-text-2xl ds-font-bold ds-text-gray-900 ds-mb-8">Our Services</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="ds-card">
                  <div className="ds-card-body">
                    <h4 className="ds-text-lg ds-font-bold ds-text-gray-900 ds-mb-2">
                      {service.title}
                    </h4>
                    <div className="ds-flex ds-justify-between ds-items-center ds-mb-3">
                      <span className="ds-text-lg ds-font-semibold ds-text-primary-600">
                        {service.price}
                      </span>
                      <span className="ds-badge ds-badge-secondary">{service.duration}</span>
                    </div>
                    <p className="ds-text-gray-600 ds-mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="ds-flex ds-items-center ds-gap-2">
                          <CheckIcon className="w-4 h-4 ds-text-primary-600" />
                          <span className="ds-text-sm ds-text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="ds-card">
              <div className="ds-card-header">
                <h3 className="ds-text-2xl ds-font-bold ds-text-gray-900">
                  Start Your Project
                </h3>
                <p className="ds-text-gray-600">
                  Tell us about your design system needs and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="ds-card-body">
                {isSubmitted ? (
                  <div className="ds-text-center py-12">
                    <div className="ds-w-16 ds-h-16 ds-bg-primary-100 ds-rounded-full ds-flex ds-items-center ds-justify-center mx-auto ds-mb-6">
                      <CheckIcon className="w-8 h-8 ds-text-primary-600" />
                    </div>
                    <h4 className="ds-text-2xl ds-font-bold ds-text-gray-900 ds-mb-4">
                      Thank You!
                    </h4>
                    <p className="ds-text-gray-600 ds-mb-8">
                      We've received your inquiry and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="ds-btn ds-btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="ds-grid ds-grid-cols-1 md:ds-grid-cols-2 ds-gap-6">
                      <div className="ds-form-group">
                        <label className="ds-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="ds-input"
                          required
                        />
                      </div>
                      <div className="ds-form-group">
                        <label className="ds-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="ds-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="ds-grid ds-grid-cols-1 md:ds-grid-cols-2 ds-gap-6">
                      <div className="ds-form-group">
                        <label className="ds-label">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="ds-input"
                        />
                      </div>
                      <div className="ds-form-group">
                        <label className="ds-label">Project Type *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="ds-input"
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="audit">Design System Audit</option>
                          <option value="new">New Design System</option>
                          <option value="migration">System Migration</option>
                          <option value="training">Team Training</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="ds-form-group">
                      <label className="ds-label">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="ds-input"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (< 1 month)</option>
                        <option value="short">Short term (1-3 months)</option>
                        <option value="medium">Medium term (3-6 months)</option>
                        <option value="long">Long term (6+ months)</option>
                      </select>
                    </div>

                    <div className="ds-form-group">
                      <label className="ds-label">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="ds-input ds-textarea"
                        rows={6}
                        placeholder="Tell us about your current design challenges, team size, and project goals..."
                        required
                      />
                    </div>

                    <button type="submit" className="ds-btn ds-btn-primary ds-btn-lg ds-w-full">
                      <SendIcon className="w-5 h-5" />
                      Send Project Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="ds-text-center">
          <div className="ds-card max-w-2xl mx-auto">
            <div className="ds-card-body">
              <h3 className="ds-text-2xl ds-font-bold ds-text-gray-900 ds-mb-4">
                Questions? Let's Talk
              </h3>
              <p className="ds-text-gray-600 ds-mb-8">
                Not sure where to start? Schedule a free 30-minute consultation to discuss your design system needs.
              </p>
              <div className="ds-flex ds-flex-col sm:ds-flex-row ds-gap-4 ds-justify-center">
                <button className="ds-btn ds-btn-outline ds-btn-lg">
                  Schedule Call
                </button>
                <button className="ds-btn ds-btn-outline ds-btn-lg">
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}