"use client";
import { useState } from "react";

// Inline SVG Icons
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

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    projectType: "",
    budget: "",
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
        position: "",
        phone: "",
        projectType: "",
        budget: "",
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

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Executive Line",
      value: "+1 (555) 123-4567",
      description: "Direct line for executive consultations",
    },
    {
      icon: <EmailIcon className="w-6 h-6" />,
      title: "Business Email",
      value: "john.patterson@executivepro.com",
      description: "Professional inquiries and proposals",
    },
    {
      icon: <LocationIcon className="w-6 h-6" />,
      title: "Global Headquarters",
      value: "New York, NY | London, UK",
      description: "Serving clients worldwide",
    },
    {
      icon: <CalendarIcon className="w-6 h-6" />,
      title: "Availability",
      value: "Monday - Friday, 9 AM - 6 PM EST",
      description: "Emergency consultations available 24/7",
    },
  ];

  const socialLinks = [
    { icon: <LinkedInIcon className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <TwitterIcon className="w-5 h-5" />, name: "Twitter", href: "#" },
  ];

  const faqs = [
    {
      question: "What is the typical engagement timeline?",
      answer:
        "Most strategic consulting engagements range from 3-12 months, depending on scope and complexity. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we serve Fortune 500 companies and growth-stage organizations globally. Our team has experience across North America, Europe, and Asia-Pacific markets.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We focus on technology, healthcare, financial services, manufacturing, and emerging markets. Our cross-industry experience brings valuable insights to each engagement.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We establish clear KPIs and success metrics at the beginning of each engagement, with regular progress reviews and measurable outcomes that align with your business objectives.",
    },
  ];

  return (
    <section id="contact" className="corp-section-lg bg-gray-50">
      <div className="corp-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="corp-badge corp-badge-primary mb-4">Executive Consultation</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Drive Your <span className="corp-text-gradient">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Schedule a strategic consultation to discuss your challenges and explore how executive
            leadership can accelerate your organization's growth.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="corp-card p-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Schedule Strategic Consultation</h3>

            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-heading text-xl font-semibold text-gray-900 mb-2">Consultation Request Submitted</h4>
                <p className="text-gray-600 mb-4">
                  Thank you for your interest. We'll contact you within 24 hours to schedule your strategic consultation.
                </p>
                <button onClick={() => setSubmitStatus("idle")} className="corp-btn corp-btn-outline">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="corp-form-group">
                    <label className="corp-form-label">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="corp-form-input" required />
                  </div>
                  <div className="corp-form-group">
                    <label className="corp-form-label">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="corp-form-input" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="corp-form-group">
                    <label className="corp-form-label">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="corp-form-input"
                      required
                    />
                  </div>
                  <div className="corp-form-group">
                    <label className="corp-form-label">Position/Title *</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="corp-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="corp-form-group">
                  <label className="corp-form-label">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="corp-form-input" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="corp-form-group">
                    <label className="corp-form-label">Project Type *</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="corp-form-select" required>
                      <option value="">Select project type</option>
                      <option value="strategic-planning">Strategic Planning</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="operational-excellence">Operational Excellence</option>
                      <option value="innovation-consulting">Innovation Consulting</option>
                      <option value="leadership-development">Leadership Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="corp-form-group">
                    <label className="corp-form-label">Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="corp-form-select">
                      <option value="">Select budget range</option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-plus">$500,000+</option>
                    </select>
                  </div>
                </div>

                <div className="corp-form-group">
                  <label className="corp-form-label">Preferred Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} className="corp-form-select">
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12-plus-months">12+ months</option>
                  </select>
                </div>

                <div className="corp-form-group">
                  <label className="corp-form-label">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="corp-form-textarea"
                    placeholder="Please describe your business challenges, goals, and how we can help..."
                    required
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="corp-btn corp-btn-primary corp-btn-large w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      Schedule Consultation
                      <ArrowRightIcon className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="corp-card p-8">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-700 font-medium mb-1">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="corp-card p-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="corp-card p-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="corp-btn corp-btn-outline w-full">
                  <CalendarIcon className="w-4 h-4" />
                  Book 30-Min Discovery Call
                </button>
                <button className="corp-btn corp-btn-outline w-full">Download Executive Bio</button>
                <button className="corp-btn corp-btn-outline w-full">View Case Studies</button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="corp-card p-6">
                <h4 className="font-heading text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
