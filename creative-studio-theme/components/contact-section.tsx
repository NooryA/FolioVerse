"use client";
import { useState } from "react";

// Inline SVG Icons
const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
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

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        projectType: "",
        timeline: "",
        message: "",
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Let's Talk",
      value: "+1 (555) 123-4567",
      description: "Ready to discuss your project?",
      gradient: "studio-bg-gradient",
    },
    {
      icon: <EmailIcon className="w-6 h-6" />,
      title: "Send a Message",
      value: "hello@creativestudio.com",
      description: "We'd love to hear from you",
      gradient: "studio-bg-gradient-secondary",
    },
    {
      icon: <LocationIcon className="w-6 h-6" />,
      title: "Visit Our Studio",
      value: "123 Creative St, Design City",
      description: "Coffee and creativity await",
      gradient: "studio-bg-gradient-warm",
    },
    {
      icon: <CalendarIcon className="w-6 h-6" />,
      title: "Book a Meeting",
      value: "Schedule a consultation",
      description: "Free 30-minute discovery call",
      gradient: "studio-bg-gradient-cool",
    },
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Most projects take 6-12 weeks depending on scope. We'll give you a detailed timeline during our discovery call.",
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love working with innovative startups and have special packages designed for growing businesses.",
    },
    {
      question: "What's included in your design process?",
      answer:
        "Our process includes research, strategy, design, development, testing, and launch support. We're with you every step of the way.",
    },
    {
      question: "Can you work within our budget?",
      answer: "We offer flexible solutions for various budgets. Let's discuss your needs and find the perfect approach for your project.",
    },
  ];

  return (
    <section id="contact" className="studio-section-lg bg-gradient-to-br from-gray-50 to-white">
      <div className="studio-container">
        {/* Section Header */}
        <div className="text-center mb-16 studio-animate-fadeInUp">
          <div className="studio-badge studio-badge-primary mb-4">💌 Let's Create Together</div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            Ready to Start Your
            <br />
            <span className="studio-text-gradient-rainbow">Creative Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you have a clear vision or just a spark of an idea, we're here to help bring your creative dreams to life. Let's chat
            about your next big project!
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className="studio-card group cursor-pointer">
              <div className="studio-card-content text-center">
                <div
                  className={`w-16 h-16 ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <div className="text-white">{method.icon}</div>
                </div>
                <h4 className="font-display text-xl font-bold mb-2 studio-text-gradient">{method.title}</h4>
                <p className="font-semibold text-gray-900 mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="studio-contact-form">
            <h3 className="font-display text-3xl font-bold mb-6 studio-text-gradient">Tell Us About Your Project</h3>

            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 studio-bg-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-display text-2xl font-bold mb-4 studio-text-gradient">Message Sent! ✨</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thanks for reaching out! We'll get back to you within 24 hours with some creative ideas.
                </p>
                <button onClick={() => setSubmitStatus("idle")} className="studio-btn studio-btn-outline">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="studio-form-group">
                    <label className="studio-form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="studio-form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="studio-form-group">
                    <label className="studio-form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="studio-form-input"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="studio-form-group">
                    <label className="studio-form-label">Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="studio-form-input"
                      placeholder="Awesome Company Inc."
                    />
                  </div>
                  <div className="studio-form-group">
                    <label className="studio-form-label">Project Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="studio-form-input">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="studio-form-group">
                    <label className="studio-form-label">Project Type *</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="studio-form-input" required>
                      <option value="">What do you need?</option>
                      <option value="branding">Brand Identity</option>
                      <option value="website">Website Design</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="consulting">Design Consulting</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                  <div className="studio-form-group">
                    <label className="studio-form-label">Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange} className="studio-form-input">
                      <option value="">When do you need this?</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                </div>

                <div className="studio-form-group">
                  <label className="studio-form-label">Tell us about your project *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="studio-form-input studio-form-textarea"
                    placeholder="Describe your vision, goals, and any specific requirements. The more details you share, the better we can help!"
                    required
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="studio-btn studio-btn-primary studio-btn-large w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Magic...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <SendIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="studio-card">
              <div className="studio-card-content">
                <h4 className="font-display text-2xl font-bold mb-6 studio-text-gradient">Let's Make Magic Happen ✨</h4>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Response Time:</strong> We typically respond within 4-6 hours during business days.
                  </p>
                  <p>
                    <strong className="text-gray-900">Free Consultation:</strong> Every project starts with a complimentary discovery call
                    to understand your vision.
                  </p>
                  <p>
                    <strong className="text-gray-900">Collaborative Process:</strong> We believe the best work comes from close
                    collaboration with our clients.
                  </p>
                  <p>
                    <strong className="text-gray-900">Ongoing Support:</strong> Our relationship doesn't end at launch - we're here for the
                    long haul.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="studio-card">
              <div className="studio-card-content text-center">
                <h4 className="font-display text-xl font-bold mb-4 studio-text-gradient">Follow Our Journey</h4>
                <div className="flex justify-center gap-4">
                  {["Instagram", "Dribbble", "Behance", "Twitter"].map((platform, index) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-12 h-12 studio-bg-gradient rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="text-sm font-bold">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="studio-card">
              <div className="studio-card-content">
                <h4 className="font-display text-xl font-bold mb-4 studio-text-gradient">Studio Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg text-sm">
                    <strong className="text-yellow-800">Emergency Projects:</strong> Available 24/7 for urgent requests
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="font-display text-3xl font-bold text-center mb-12 studio-text-gradient">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="studio-card">
                <div className="studio-card-content">
                  <h4 className="font-display text-lg font-bold mb-3 studio-text-gradient">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
