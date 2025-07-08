"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, User, MessageCircle, Calendar, Star, Quote } from "lucide-react";

// Social media icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// Gallery visitor testimonials
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Design Director",
    company: "TechCorp",
    message: "Alessandro's work is absolutely stunning. The attention to detail and user experience is exceptional.",
    rating: 5,
    date: "March 15, 2024",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    message: "Working with Alessandro was a game-changer for our platform. Highly recommend!",
    rating: 5,
    date: "February 28, 2024",
  },
  {
    name: "Emma Thompson",
    role: "Product Manager",
    company: "Innovation Labs",
    message: "The gallery wall theme is incredibly creative and professionally executed.",
    rating: 5,
    date: "January 22, 2024",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "web-development",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "web-development",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="gallery-label mb-4">Gallery Visitor's Book</div>
          <h2 className="gallery-heading gallery-heading-lg mb-6">Commission a Masterpiece</h2>
          <p className="gallery-subtitle">Ready to bring your vision to life? Let's create something extraordinary together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Gallery Information */}
            <div className="gallery-card">
              <h3 className="gallery-heading gallery-heading-md mb-6">Gallery Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gallery-accent rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gallery-primary" />
                  </div>
                  <div>
                    <h4 className="gallery-title text-lg mb-1">Email</h4>
                    <p className="gallery-text">alessandro@digitalartistry.com</p>
                    <p className="gallery-text text-sm">For commissions and inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gallery-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gallery-primary" />
                  </div>
                  <div>
                    <h4 className="gallery-title text-lg mb-1">Phone</h4>
                    <p className="gallery-text">+1 (555) 123-4567</p>
                    <p className="gallery-text text-sm">Mon-Fri, 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gallery-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gallery-primary" />
                  </div>
                  <div>
                    <h4 className="gallery-title text-lg mb-1">Studio Location</h4>
                    <p className="gallery-text">San Francisco, CA</p>
                    <p className="gallery-text text-sm">Available for remote collaboration</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gallery-accent rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gallery-primary" />
                  </div>
                  <div>
                    <h4 className="gallery-title text-lg mb-1">Response Time</h4>
                    <p className="gallery-text">Within 24 hours</p>
                    <p className="gallery-text text-sm">Usually much faster</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="gallery-card">
              <h3 className="gallery-title text-lg mb-4">Follow the Gallery</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gallery-bg-warm hover:bg-gallery-accent rounded-full flex items-center justify-center transition-colors group"
                >
                  <LinkedInIcon className="w-6 h-6 text-gallery-primary group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gallery-bg-warm hover:bg-gallery-accent rounded-full flex items-center justify-center transition-colors group"
                >
                  <TwitterIcon className="w-6 h-6 text-gallery-primary group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gallery-bg-warm hover:bg-gallery-accent rounded-full flex items-center justify-center transition-colors group"
                >
                  <GitHubIcon className="w-6 h-6 text-gallery-primary group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Visitor Testimonials */}
            <div className="gallery-card">
              <h3 className="gallery-title text-lg mb-6">Recent Visitor Comments</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="gallery-exhibition">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-gallery-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="gallery-text text-sm italic mb-2">"{testimonial.message}"</p>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-gallery-accent fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="gallery-text text-xs">
                          <strong>{testimonial.name}</strong>, {testimonial.role} at {testimonial.company}
                        </div>
                        <div className="gallery-text text-xs text-gallery-text-light">{testimonial.date}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="gallery-card">
            <h3 className="gallery-heading gallery-heading-md mb-6">Commission Request</h3>

            {submitted ? (
              <div className="gallery-exhibition text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="gallery-title text-lg mb-2">Thank you for your interest!</h4>
                <p className="gallery-text">
                  Your commission request has been received. I'll get back to you within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="gallery-form-label">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="gallery-form-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="gallery-form-label">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="gallery-form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="gallery-form-label">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Project Type
                  </label>
                  <select name="projectType" value={formData.projectType} onChange={handleInputChange} className="gallery-form-select">
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="design-system">Design System</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="gallery-form-label">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="gallery-form-input"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <label className="gallery-form-label">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="gallery-form-textarea"
                    placeholder="Tell me about your vision, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full gallery-btn gallery-btn-primary justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="gallery-loading-frame w-4 h-4 mr-2"></div>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Commission Request
                    </>
                  )}
                </button>

                <p className="gallery-text text-sm text-center">
                  By sending this request, you agree to discuss your project and receive a personalized quote.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gallery-card max-w-3xl mx-auto">
            <h3 className="gallery-heading gallery-heading-md mb-4">Ready to Start Your Project?</h3>
            <p className="gallery-text text-lg mb-8">
              From concept to completion, I'm here to help you create something extraordinary. Let's discuss your vision and bring it to
              life with cutting-edge technology and creative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:alessandro@digitalartistry.com" className="gallery-btn gallery-btn-primary">
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
              <a href="tel:+15551234567" className="gallery-btn gallery-btn-secondary">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
