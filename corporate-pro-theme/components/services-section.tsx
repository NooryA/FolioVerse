"use client";
import { useState, useEffect } from "react";

// Inline SVG Icons
const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const BulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const CogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: "Strategic Leadership",
      description: "Transform your organization with proven strategic planning and execution frameworks.",
      features: [
        "Strategic Vision Development",
        "Competitive Analysis & Positioning",
        "Market Entry Strategy",
        "Leadership Team Development",
        "Performance Optimization",
      ],
      price: "Starting at $25,000",
      duration: "3-6 months",
      results: "40% average increase in operational efficiency",
    },
    {
      icon: <ChartIcon className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Modernize operations and accelerate growth through technology-driven innovation.",
      features: [
        "Digital Strategy Development",
        "Technology Stack Assessment",
        "Process Automation Design",
        "Change Management",
        "ROI Measurement & Analytics",
      ],
      price: "Starting at $35,000",
      duration: "6-12 months",
      results: "60% reduction in operational costs",
    },
    {
      icon: <BulbIcon className="w-8 h-8" />,
      title: "Innovation Consulting",
      description: "Foster innovation culture and develop breakthrough solutions for complex challenges.",
      features: [
        "Innovation Framework Design",
        "Ideation Workshop Facilitation",
        "Product Development Strategy",
        "Innovation Lab Setup",
        "Intellectual Property Strategy",
      ],
      price: "Starting at $20,000",
      duration: "2-4 months",
      results: "3x increase in innovation pipeline",
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Operational Excellence",
      description: "Optimize processes and systems to achieve sustainable competitive advantage.",
      features: [
        "Process Mapping & Analysis",
        "Lean Six Sigma Implementation",
        "Quality Management Systems",
        "Supply Chain Optimization",
        "Continuous Improvement Culture",
      ],
      price: "Starting at $30,000",
      duration: "4-8 months",
      results: "25% improvement in productivity",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp Industries",
      company: "Fortune 500 Technology Company",
      quote:
        "John's strategic guidance transformed our entire organization. His digital transformation roadmap helped us achieve 40% growth in just 18 months.",
      rating: 5,
      result: "$2.8B Revenue Growth",
    },
    {
      name: "Michael Chen",
      position: "Chairman, Global Ventures",
      company: "International Investment Firm",
      quote:
        "Exceptional leadership and vision. The operational excellence program John implemented saved us $50M annually while improving customer satisfaction.",
      rating: 5,
      result: "$50M Cost Savings",
    },
    {
      name: "Lisa Rodriguez",
      position: "President, Innovation Labs",
      company: "Healthcare Technology Leader",
      quote:
        "John's innovation consulting helped us develop 3 breakthrough products that now generate 60% of our revenue. His approach is methodical and results-driven.",
      rating: 5,
      result: "3 New Product Lines",
    },
  ];

  const caseStudies = [
    {
      title: "Fortune 500 Digital Transformation",
      industry: "Technology",
      challenge: "Legacy systems hindering growth and innovation",
      solution: "Comprehensive digital transformation strategy with cloud migration and AI implementation",
      results: ["40% increase in operational efficiency", "60% reduction in system downtime", "$100M cost savings over 3 years"],
      duration: "12 months",
    },
    {
      title: "Global Manufacturing Optimization",
      industry: "Manufacturing",
      challenge: "Inefficient supply chain and quality control issues",
      solution: "Lean Six Sigma implementation with IoT-enabled monitoring systems",
      results: ["25% improvement in productivity", "90% reduction in defects", "35% faster time-to-market"],
      duration: "8 months",
    },
    {
      title: "Healthcare Innovation Program",
      industry: "Healthcare",
      challenge: "Need for breakthrough medical device solutions",
      solution: "Innovation lab creation with structured R&D processes",
      results: ["3 patent-pending innovations", "200% increase in R&D productivity", "$500M market opportunity identified"],
      duration: "6 months",
    },
  ];

  return (
    <section id="services" className="corp-section-lg">
      <div className="corp-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="corp-badge corp-badge-primary mb-4">Executive Consulting Services</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your <span className="corp-text-gradient">Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage two decades of Fortune 500 experience to accelerate growth, optimize operations, and build sustainable competitive
            advantages for your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="corp-services-grid mb-20">
          {services.map((service, index) => (
            <div key={index} className="corp-service-card">
              <div className="corp-service-icon">{service.icon}</div>
              <h3 className="corp-service-title">{service.title}</h3>
              <p className="corp-service-description">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Investment</span>
                  <span className="font-semibold text-gray-900">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Timeline</span>
                  <span className="font-semibold text-gray-900">{service.duration}</span>
                </div>
              </div>

              <div className="corp-badge corp-badge-success mb-4">{service.results}</div>

              <button className="corp-btn corp-btn-primary w-full">
                Learn More
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="corp-card">
                <div className="corp-card-header">
                  <div className="corp-badge corp-badge-outline mb-3">{study.industry}</div>
                  <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">{study.title}</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                <div className="corp-card-body">
                  <h5 className="font-semibold text-gray-900 mb-3">Solution</h5>
                  <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                  <h5 className="font-semibold text-gray-900 mb-3">Results</h5>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="corp-card-footer">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">{study.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-bold text-gray-900 text-center mb-12">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="corp-testimonial">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="corp-testimonial-quote">"{testimonial.quote}"</p>
                <div className="corp-testimonial-author">
                  <div className="corp-testimonial-avatar">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="corp-testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="corp-badge corp-badge-success corp-badge-sm">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="corp-card p-12 bg-gradient-to-br from-blue-50 to-white">
            <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a strategic consultation to discuss your challenges and explore how executive leadership can accelerate your
              organization's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="corp-btn corp-btn-primary corp-btn-large">
                Schedule Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="corp-btn corp-btn-outline corp-btn-large">Download Case Studies</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
