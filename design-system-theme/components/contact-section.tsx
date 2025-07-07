"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DribbbleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 13.508c-.054-.198-.125-.393-.202-.583a23.365 23.365 0 00-.303-.814c.814-.593 1.467-1.25 1.918-1.946.694 1.472.928 3.162.551 4.867a6.771 6.771 0 00-1.964-1.524zM13.194 1.4c1.8.434 3.379 1.4 4.54 2.707a4.916 4.916 0 01-1.571 1.525c-.493-.669-1.021-1.297-1.587-1.866a5.845 5.845 0 00-1.382-1.366zM12 2.453c-.213 0-.424.005-.632.014-.424.018-.84.061-1.248.127-.686.111-1.33.312-1.922.588-.33-.546-.718-1.043-1.163-1.478C8.678 1.154 10.285 1 12 1c.345 0 .686.019 1.023.056-.341.47-.666.958-.97 1.471-.018-.025-.035-.049-.053-.074zm-6.33 1.717c.955.573 1.686 1.444 2.109 2.424-.598.246-1.191.533-1.776.863-.784-.684-1.784-1.167-2.897-1.35C3.767 4.918 4.847 3.825 5.67 3.17zm-1.915 4.931c1.467.106 2.824.915 3.56 2.207.056.099.108.201.157.305-.465.362-.89.751-1.272 1.173-.68-.511-1.522-.854-2.464-.972-.045-.288-.068-.58-.068-.878 0-.553.063-1.097.174-1.626.304-.035.61-.06.913-.209zm-.72 4.021c.984.134 1.849.49 2.58.983.199.133.379.285.555.445C6.77 13.8 6.516 14.116 6.25 14.42c-.686.784-1.17 1.747-1.378 2.793-.526-.914-.83-1.969-.83-3.093 0-.14.007-.279.02-.417.395-.111.774-.249 1.143-.408zm1.987 6.491c.211-.993.718-1.917 1.41-2.661.247-.267.512-.513.793-.739.302.589.64 1.147 1.01 1.669.56 1.179 1.297 2.196 2.184 3.02-.372.072-.752.121-1.14.146-.577.037-1.15.025-1.713-.054a5.861 5.861 0 01-2.544-1.381zm7.731 1.604c-.825-.777-1.539-1.773-2.061-2.905-.28-.61-.511-1.248-.693-1.908.632-.457 1.34-.822 2.097-1.075.199-.066.401-.124.605-.174.069 1.92-.333 3.81-1.316 5.462.119-.133.239-.267.368-.4z" />
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

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email Us",
      value: "hello@designsystem.studio",
      description: "Send us a message anytime",
      gradient: "from-blue-500 to-cyan-500",
      href: "mailto:hello@designsystem.studio",
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
      gradient: "from-green-500 to-emerald-500",
      href: "tel:+15551234567",
    },
    {
      icon: LocationIcon,
      title: "Visit Us",
      value: "San Francisco, CA",
      description: "Come say hello",
      gradient: "from-purple-500 to-pink-500",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: TwitterIcon, name: "Twitter", href: "#", gradient: "from-blue-400 to-blue-600" },
    { icon: LinkedInIcon, name: "LinkedIn", href: "#", gradient: "from-blue-600 to-blue-800" },
    { icon: GithubIcon, name: "GitHub", href: "#", gradient: "from-gray-700 to-gray-900" },
    { icon: DribbbleIcon, name: "Dribbble", href: "#", gradient: "from-pink-500 to-pink-700" },
  ];

  const projectTypes = [
    "Design System Creation",
    "Component Library",
    "Brand Identity",
    "Web Application",
    "Mobile App",
    "Design Consultation",
    "Other",
  ];

  const budgetRanges = ["Under $10K", "$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K+"];

  const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "3+ months"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30"></div>
        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 ds-container">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-8 animate-pulse-slow">
            <MailIcon className="w-4 h-4" />
            Let's Connect
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 mb-8 leading-tight">
            Start Your{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Design Journey</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-bounce-in"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your <span className="font-bold text-purple-600">digital experience</span>? Let's create something{" "}
            <span className="font-bold text-pink-600">extraordinary</span> together.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className={`group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-lg font-semibold text-gray-700 mb-2">{info.value}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Project</h3>
              <p className="text-gray-600">We'd love to hear about your vision and how we can help bring it to life.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">We've received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project goals, challenges, and vision..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-6 h-6" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Side Content */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Design System?</h3>
              <div className="space-y-4">
                {[
                  { icon: CheckCircleIcon, text: "Proven track record with 50+ successful projects" },
                  { icon: ClockIcon, text: "Average 60% faster development time" },
                  { icon: CalendarIcon, text: "Dedicated support and ongoing maintenance" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Overview */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery Call", description: "Understanding your needs and goals" },
                  { step: "02", title: "Proposal", description: "Detailed project plan and timeline" },
                  { step: "03", title: "Design & Build", description: "Creating your custom design system" },
                  { step: "04", title: "Launch & Support", description: "Implementation and ongoing maintenance" },
                ].map((phase, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {phase.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{phase.title}</h4>
                      <p className="text-gray-600 text-sm">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-24">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto p-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Design Process?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join the <span className="font-bold text-purple-600">500+ teams</span> that have accelerated their development with our design
              systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6" />
                  Schedule a Call
                </span>
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Download Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
