"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Clock,
  BarChart3,
  FileText,
  Users,
  Target,
  Star,
  ExternalLink,
} from "lucide-react";

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
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Get a detailed response within 24 hours",
      contact: "hello@casestudy.pro",
      action: "Send Email",
      primary: true,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Strategy Call",
      description: "30-min consultation to discuss your project",
      contact: "Book a call",
      action: "Schedule Call",
      primary: false,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect for quick questions and updates",
      contact: "@casestudy-professional",
      action: "Connect",
      primary: false,
    },
  ];

  const projectTypes = [
    "UX/UI Design Case Study",
    "Product Development Case Study",
    "Market Research Case Study",
    "Digital Transformation Case Study",
    "Performance Optimization Case Study",
    "Other",
  ];

  const budgetRanges = ["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K - $250K", "$250K+"];

  const timelines = ["1-2 months", "3-4 months", "5-6 months", "6+ months", "Flexible"];

  const faqs = [
    {
      question: "What's included in a case study project?",
      answer:
        "Complete analysis from problem identification to solution implementation, including research, strategy, design/development, testing, and detailed documentation with measurable results.",
    },
    {
      question: "How long does a typical case study take?",
      answer:
        "Most projects take 3-6 months depending on complexity. We provide detailed timelines during our initial consultation based on your specific requirements.",
    },
    {
      question: "What's your approach to measuring success?",
      answer:
        "We establish clear KPIs and success metrics upfront, then track progress throughout the project. Every case study includes detailed ROI analysis and measurable business impact.",
    },
    {
      question: "Do you work with startups or only large companies?",
      answer:
        "I work with organizations of all sizes, from startups to Fortune 500 companies. Each project is tailored to your specific needs, budget, and timeline.",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Create Your
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Success Story?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and how my proven case study methodology can deliver the measurable results your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Start Your Project</h3>

            {submitSuccess ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-slate-600">I'll get back to you within 24 hours to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project goals, challenges, and what success looks like for you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Options */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                      method.primary
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-slate-900 border-slate-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${method.primary ? "bg-white/20" : "bg-blue-100 text-blue-600"}`}>{method.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">{method.title}</h4>
                        <p className={`text-sm mb-2 ${method.primary ? "text-blue-100" : "text-slate-600"}`}>{method.description}</p>
                        <p className={`font-medium ${method.primary ? "text-blue-200" : "text-slate-800"}`}>{method.contact}</p>
                      </div>
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
                          method.primary ? "bg-white/20 text-white hover:bg-white/30" : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {method.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-green-600" />
                <h4 className="font-bold text-slate-900">Response Time</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Email inquiries</span>
                  <span className="font-semibold text-slate-900">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Project proposals</span>
                  <span className="font-semibold text-slate-900">2-3 business days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Strategy calls</span>
                  <span className="font-semibold text-slate-900">Same week</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-4">What to Expect</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Detailed project analysis and recommendations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Custom methodology tailored to your needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Clear timeline and milestone delivery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Measurable results and ROI tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-3">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every successful case study starts with a conversation. Ready to transform your ideas into measurable results?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule a Call</span>
            </button>
            <button className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>View Case Studies</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
