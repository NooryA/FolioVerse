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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      value: "hello@alexdev.com",
      description: "Best way to reach me",
      available: true,
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available Mon-Fri 9AM-6PM PST",
      available: true,
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work worldwide",
      available: true,
    },
    {
      icon: ClockIcon,
      title: "Response Time",
      value: "< 24 hours",
      description: "Usually much faster!",
      available: true,
    },
  ];

  const servicePackages = [
    {
      title: "Website Consultation",
      price: "Free",
      duration: "30 min",
      description: "Let's discuss your project requirements",
      features: ["Project Assessment", "Technology Recommendations", "Timeline Estimation", "Budget Planning"],
      popular: false,
    },
    {
      title: "Landing Page",
      price: "$2,500",
      duration: "2-3 weeks",
      description: "High-converting single page website",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Analytics Setup"],
      popular: true,
    },
    {
      title: "Full Website",
      price: "$5,000+",
      duration: "4-8 weeks",
      description: "Complete website with multiple pages",
      features: ["Custom Design", "CMS Integration", "E-commerce Ready", "Ongoing Support"],
      popular: false,
    },
  ];

  const availability = [
    { day: "Monday", slots: ["9:00 AM", "2:00 PM", "4:00 PM"] },
    { day: "Tuesday", slots: ["10:00 AM", "1:00 PM", "3:00 PM"] },
    { day: "Wednesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    { day: "Thursday", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    { day: "Friday", slots: ["9:00 AM", "2:00 PM"] },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="freelancer-section freelancer-section-lg">
      <div className="freelancer-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="freelancer-badge freelancer-badge-primary mb-4">
            <MailIcon className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="freelancer-heading text-4xl md:text-5xl mb-6">
            Let's Start Your <span className="freelancer-text-gradient">Next Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? I'm here to help you create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-8">Tell Me About Your Project</h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h4>
                    <p className="text-gray-600 mb-8">
                      Thanks for reaching out! I'll review your project details and get back to you within 24 hours.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="freelancer-btn freelancer-btn-outline">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="freelancer-form-group">
                        <label className="freelancer-form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="freelancer-form-input"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="freelancer-form-group">
                        <label className="freelancer-form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="freelancer-form-input"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="freelancer-form-group">
                        <label className="freelancer-form-label">Company (Optional)</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="freelancer-form-input"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="freelancer-form-group">
                        <label className="freelancer-form-label">Project Type *</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="freelancer-form-input"
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="website">Website Development</option>
                          <option value="ecommerce">E-commerce Store</option>
                          <option value="webapp">Web Application</option>
                          <option value="mobile">Mobile App</option>
                          <option value="redesign">Website Redesign</option>
                          <option value="consulting">Consulting</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="freelancer-form-group">
                        <label className="freelancer-form-label">Budget Range *</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="freelancer-form-input"
                          required
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-plus">$50,000+</option>
                        </select>
                      </div>
                      <div className="freelancer-form-group">
                        <label className="freelancer-form-label">Timeline *</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="freelancer-form-input"
                          required
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div className="freelancer-form-group">
                      <label className="freelancer-form-label">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="freelancer-form-input freelancer-form-textarea"
                        placeholder="Tell me about your project goals, requirements, and any specific features you need..."
                        rows={6}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`freelancer-btn freelancer-btn-primary freelancer-btn-large w-full ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <SendIcon className="w-5 h-5" />
                          Send Project Details
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-gray-700 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-6">Current Availability</h3>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-green-600 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Available for new projects</span>
                  </div>
                  <p className="text-sm text-gray-600">I'm currently accepting new clients and can start your project within 1-2 weeks.</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">This Week's Schedule:</h4>
                  {availability.slice(0, 3).map((day, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{day.day}</span>
                      <div className="flex gap-2">
                        {day.slots.map((slot, slotIndex) => (
                          <span key={slotIndex} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="freelancer-btn freelancer-btn-outline w-full mt-6">
                  <CalendarIcon className="w-4 h-4" />
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Service <span className="freelancer-text-gradient">Packages</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`freelancer-card ${pkg.popular ? "ring-2 ring-indigo-500" : ""}`}>
                <div className="freelancer-card-content">
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-indigo-600">{pkg.price}</span>
                    <span className="text-sm text-gray-500">/ {pkg.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`freelancer-btn w-full ${pkg.popular ? "freelancer-btn-primary" : "freelancer-btn-outline"}`}>
                    {pkg.price === "Free" ? "Book Free Call" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">What Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                text: "Alex delivered exactly what we needed on time and within budget. Highly recommended!",
                author: "Sarah Johnson",
                role: "CEO, TechStart",
                rating: 5,
              },
              {
                text: "Professional, responsive, and talented. Our website looks amazing and performs great.",
                author: "Mike Chen",
                role: "Founder, Growth Co",
                rating: 5,
              },
              {
                text: "Working with Alex was a pleasure. He understood our vision and brought it to life perfectly.",
                author: "Lisa Rodriguez",
                role: "Marketing Director",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="freelancer-card">
                <div className="freelancer-card-content">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
