"use client";
import { useState, useEffect } from "react";

// Premium SVG Icons
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(Array.from(prev).concat(entry.target.id)));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

  const consultationSteps = [
    {
      step: 1,
      title: "Initial Discovery",
      duration: "30 minutes",
      description: "Understanding your business challenges and strategic objectives",
    },
    {
      step: 2,
      title: "Strategic Assessment",
      duration: "1-2 weeks",
      description: "Comprehensive analysis and strategic recommendations development",
    },
    {
      step: 3,
      title: "Proposal Presentation",
      duration: "60 minutes",
      description: "Detailed proposal with timeline, investment, and expected outcomes",
    },
  ];

  const contactMethods = [
    {
      icon: <CalendarIcon className="w-8 h-8" />,
      title: "Executive Consultation",
      subtitle: "Book Strategic Session",
      description: "Schedule a 30-minute strategic consultation to discuss your business transformation needs.",
      action: "Schedule Now",
      priority: "primary",
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Direct Executive Line",
      subtitle: "+1 (646) 555-0147",
      description: "Direct access for C-Suite executives and board members for immediate strategic discussions.",
      action: "Call Now",
      priority: "secondary",
    },
    {
      icon: <EmailIcon className="w-8 h-8" />,
      title: "Executive Email",
      subtitle: "alexander.reed@qtdynamics.com",
      description: "Professional inquiries, partnership opportunities, and strategic consultation requests.",
      action: "Send Email",
      priority: "secondary",
    },
  ];

  const guarantees = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: "100% Confidentiality",
      description: "All discussions covered by executive-level NDAs",
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "24-Hour Response",
      description: "Initial response within 24 hours guaranteed",
    },
    {
      icon: <StarIcon className="w-6 h-6" />,
      title: "Fortune 500 Expertise",
      description: "20+ years of proven executive leadership",
    },
  ];

  const socialProof = [
    "Trusted by 45+ Fortune 500 companies",
    "$15.2B+ in enterprise value created",
    "98% client satisfaction rate",
    "25+ international markets served",
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>

      <div className="corp-container relative z-10 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div id="contact-header" data-animate className={`corp-animate-fade-in ${visibleItems.has("contact-header") ? "" : "opacity-0"}`}>
            <div className="corp-badge corp-badge-gold mb-6 inline-flex items-center gap-2">
              <RocketIcon className="w-4 h-4" />
              Executive Consultation Available
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Transform Your <span className="corp-text-gradient">Enterprise</span>
              <br />
              Starting Today
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join the ranks of Fortune 500 leaders who have transformed their organizations through strategic executive consulting. Your
              transformation begins with a single conversation.
            </p>

            {/* Social Proof Ticker */}
            <div className="corp-card-glass rounded-full p-4 inline-block">
              <div className="flex items-center gap-8 text-sm text-gray-300">
                {socialProof.map((proof, index) => (
                  <span key={index} className="whitespace-nowrap">
                    {proof}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              id={`contact-method-${index}`}
              data-animate
              className={`corp-card-glass p-8 rounded-3xl text-center group cursor-pointer transition-all duration-500 hover:scale-105 ${
                visibleItems.has(`contact-method-${index}`) ? "corp-animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="corp-service-icon mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-yellow-400 font-semibold text-lg mb-4">{method.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{method.description}</p>
              <button
                className={`corp-btn ${method.priority === "primary" ? "corp-btn-gold" : "corp-btn-glass"} corp-btn-large w-full group`}
              >
                {method.action}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Consultation Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-bold text-white mb-6">Strategic Consultation Process</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to understanding your challenges and developing transformational solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultationSteps.map((step, index) => (
              <div
                key={index}
                id={`step-${index}`}
                data-animate
                className={`corp-card-glass p-8 rounded-2xl text-center relative overflow-hidden ${
                  visibleItems.has(`step-${index}`) ? "corp-animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 corp-bg-gradient-gold"></div>
                <div className="w-16 h-16 corp-bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-3">{step.title}</h4>
                <div className="corp-badge corp-badge-glass mb-4">{step.duration}</div>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div
            id="contact-form"
            data-animate
            className={`corp-card-glass p-8 lg:p-12 rounded-3xl ${
              visibleItems.has("contact-form") ? "corp-animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h3 className="font-display text-3xl font-bold text-white mb-8">Request Strategic Consultation</h3>

            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 corp-bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-10 h-10 text-gray-900" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-4">Consultation Request Received</h4>
                <p className="text-gray-300 mb-6 text-lg">
                  Thank you for your interest in strategic consulting. My executive team will contact you within 24 hours to schedule your
                  consultation and discuss your transformation objectives.
                </p>
                <button onClick={() => setSubmitStatus("idle")} className="corp-btn corp-btn-gold corp-btn-large">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">Executive Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">Executive Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="your@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="Your organization"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">Executive Position *</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="CEO, COO, etc."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">Consultation Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      required
                    >
                      <option value="">Select consultation type</option>
                      <option value="strategic-transformation">Strategic Transformation</option>
                      <option value="innovation-leadership">Innovation Leadership</option>
                      <option value="global-expansion">Global Market Expansion</option>
                      <option value="governance-ipo">Governance & IPO Readiness</option>
                      <option value="operational-excellence">Operational Excellence</option>
                      <option value="other">Other Executive Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-3">Investment Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-yellow-400 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select investment range</option>
                      <option value="75k-250k">$75,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="1m-plus">$1,000,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-3">Strategic Objectives & Challenges *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your strategic challenges, transformation objectives, and how executive consulting can accelerate your organization's success..."
                    required
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="corp-btn corp-btn-gold corp-btn-large w-full group text-lg">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Processing Request...
                    </span>
                  ) : (
                    <>
                      Request Strategic Consultation
                      <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Guarantees */}
          <div
            id="contact-info"
            data-animate
            className={`space-y-8 ${visibleItems.has("contact-info") ? "corp-animate-slide-in-right" : "opacity-0"}`}
          >
            {/* Executive Guarantees */}
            <div className="corp-card-glass p-8 rounded-2xl">
              <h4 className="font-display text-2xl font-bold text-white mb-6">Executive Guarantees</h4>
              <div className="space-y-6">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 corp-bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="text-gray-900">{guarantee.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">{guarantee.title}</h5>
                      <p className="text-gray-300 text-sm">{guarantee.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="corp-card-glass p-8 rounded-2xl">
              <h4 className="font-display text-2xl font-bold text-white mb-6">Immediate Resources</h4>
              <div className="space-y-4">
                <button className="corp-btn corp-btn-glass w-full justify-between">
                  <span>Download Executive Bio</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
                <button className="corp-btn corp-btn-glass w-full justify-between">
                  <span>View Transformation Case Studies</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
                <button className="corp-btn corp-btn-glass w-full justify-between">
                  <span>Strategic Framework Overview</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Social Connections */}
            <div className="corp-card-glass p-8 rounded-2xl">
              <h4 className="font-display text-2xl font-bold text-white mb-6">Executive Network</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-14 h-14 corp-bg-gradient-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="w-6 h-6 text-gray-900" />
                </a>
                <a
                  href="#"
                  className="w-14 h-14 corp-bg-gradient-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  title="Twitter"
                >
                  <TwitterIcon className="w-6 h-6 text-gray-900" />
                </a>
              </div>
              <p className="text-gray-300 text-sm mt-4">
                Connect with my 50,000+ executive network and stay updated on strategic insights and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-yellow-400/40 rounded-full corp-animate-pulse"></div>
        <div
          className="absolute top-1/3 right-32 w-2 h-2 bg-yellow-300/30 rounded-full corp-animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-yellow-500/20 rounded-full corp-animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
