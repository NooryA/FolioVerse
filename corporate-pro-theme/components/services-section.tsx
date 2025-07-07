"use client";
import { useState, useEffect } from "react";

// Premium SVG Icons
const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const CogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

const DollarSignIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
);

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [visibleItems, setVisibleItems] = useState(new Set());

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

  const executiveServices = [
    {
      icon: <RocketIcon className="w-10 h-10" />,
      title: "Strategic Transformation",
      subtitle: "C-Suite Leadership",
      description:
        "Comprehensive organizational transformation through strategic vision, operational excellence, and cultural change management.",
      features: [
        "Strategic Vision Development & Execution",
        "Digital Transformation Roadmaps",
        "Change Management & Culture Design",
        "Performance Optimization Systems",
        "Stakeholder Alignment Strategies",
      ],
      investmentRange: "$75,000 - $250,000",
      duration: "6-18 months",
      results: "300% average ROI",
      caseStudy: "Led $15B Fortune 500 transformation resulting in 40% efficiency gains",
      clientTypes: ["Fortune 500 Companies", "Private Equity Portfolio", "High-Growth Enterprises"],
    },
    {
      icon: <BrainIcon className="w-10 h-10" />,
      title: "Innovation Leadership",
      subtitle: "AI & Digital Strategy",
      description: "Future-focused innovation strategies integrating AI, emerging technologies, and digital business model transformation.",
      features: [
        "AI Strategy & Implementation",
        "Digital Business Model Design",
        "Innovation Lab Development",
        "Technology Due Diligence",
        "Intellectual Property Strategy",
      ],
      investmentRange: "$100,000 - $500,000",
      duration: "8-24 months",
      results: "500% innovation pipeline growth",
      caseStudy: "Built quantum computing division generating $2B market opportunity",
      clientTypes: ["Technology Companies", "Research Institutions", "Innovation Funds"],
    },
    {
      icon: <GlobeIcon className="w-10 h-10" />,
      title: "Global Market Expansion",
      subtitle: "International Strategy",
      description: "End-to-end international expansion strategies for entering new markets and scaling operations globally.",
      features: [
        "Market Entry Strategy & Execution",
        "Cross-Cultural Business Development",
        "International Partnership Frameworks",
        "Regulatory & Compliance Navigation",
        "Global Operations Optimization",
      ],
      investmentRange: "$150,000 - $750,000",
      duration: "12-36 months",
      results: "25+ successful market entries",
      caseStudy: "Expanded into 8 Asian markets generating $800M additional revenue",
      clientTypes: ["Multinational Corporations", "Scale-up Companies", "Investment Firms"],
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: "Governance & IPO Readiness",
      subtitle: "Public Company Excellence",
      description: "World-class governance frameworks, IPO preparation, and public company operational excellence.",
      features: [
        "Board & Governance Structure Design",
        "IPO Readiness & Execution Support",
        "Public Company Compliance Systems",
        "ESG Framework Implementation",
        "Investor Relations Strategy",
      ],
      investmentRange: "$200,000 - $1,000,000",
      duration: "18-48 months",
      results: "3 successful IPOs raising $2.4B",
      caseStudy: "Led IPO process raising $800M with 40% first-day trading premium",
      clientTypes: ["Pre-IPO Companies", "Public Companies", "Private Equity"],
    },
  ];

  const successMetrics = [
    { value: "$15.2B", label: "Enterprise Value Created", description: "Total value generated for clients" },
    { value: "98%", label: "Client Satisfaction", description: "Measured by repeat engagements" },
    { value: "45", label: "Successful Transformations", description: "Completed strategic initiatives" },
    { value: "25+", label: "Markets Entered", description: "International expansion projects" },
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      position: "Chairman & CEO",
      company: "Global Technology Corp",
      quote:
        "Alexander's strategic guidance transformed our entire organization. His quantum computing roadmap positioned us as the industry leader and generated $2B in new market opportunities.",
      rating: 5,
      result: "$2B Market Opportunity",
      image: "MR",
    },
    {
      name: "James Chen",
      position: "Managing Partner",
      company: "Pacific Ventures",
      quote:
        "The most sophisticated strategic mind I've worked with. Alexander's international expansion strategy helped us enter 12 new markets with unprecedented success rates.",
      rating: 5,
      result: "12 New Markets",
      image: "JC",
    },
    {
      name: "Sarah Mitchell",
      position: "Board Chair",
      company: "Innovation Dynamics",
      quote:
        "Alexander's leadership during our IPO was exceptional. His governance framework and investor relations strategy resulted in a 40% trading premium on day one.",
      rating: 5,
      result: "40% IPO Premium",
      image: "SM",
    },
  ];

  const certifications = [
    "Harvard Business School - Strategic Leadership Certificate",
    "MIT Sloan - Digital Transformation Executive Program",
    "Stanford - AI Strategy & Governance Certification",
    "Wharton - Global Executive MBA",
    "McKinsey - Strategic Thinking Methodology",
  ];

  return (
    <section id="services" className="corp-section-xl bg-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>

      <div className="corp-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="corp-badge corp-badge-gold mb-6 inline-flex items-center gap-2">
            <StarIcon className="w-4 h-4" />
            Executive Consulting Excellence
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Transform Your <span className="corp-text-gradient">Enterprise</span>
            <br />
            Through Strategic Leadership
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Leverage two decades of Fortune 500 experience to accelerate growth, optimize operations, and build sustainable competitive
            advantages through world-class strategic consulting.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              id={`metric-${index}`}
              data-animate
              className={`text-center corp-animate-scale-in ${visibleItems.has(`metric-${index}`) ? "" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="corp-card-glass p-6 rounded-2xl">
                <div className="text-3xl lg:text-4xl font-bold corp-text-gradient mb-2">{metric.value}</div>
                <div className="text-yellow-400 font-semibold mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Executive Services */}
        <div className="mb-20">
          <h3 className="font-display text-4xl font-bold text-center mb-12">Executive Consulting Services</h3>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {executiveServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeService === index
                    ? "corp-bg-gradient-gold text-gray-900 shadow-xl scale-105"
                    : "corp-card-glass text-white hover:scale-105"
                }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center ${activeService === index ? "text-gray-900" : "text-yellow-400"}`}
                >
                  {service.icon}
                </div>
                <span className="hidden sm:inline">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="corp-card-glass p-8 lg:p-12 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Service Overview */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="corp-service-icon">{executiveServices[activeService].icon}</div>
                  <div className="flex-1">
                    <div className="corp-badge corp-badge-gold mb-4">{executiveServices[activeService].subtitle}</div>
                    <h4 className="font-display text-3xl font-bold text-white mb-4">{executiveServices[activeService].title}</h4>
                    <p className="text-xl text-gray-300 leading-relaxed">{executiveServices[activeService].description}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h5 className="font-display text-xl font-bold text-white mb-6">Key Components</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {executiveServices[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                <div className="corp-card-premium p-6 rounded-2xl">
                  <h5 className="font-display text-lg font-bold text-white mb-3">Success Story</h5>
                  <p className="text-gray-300 italic">"{executiveServices[activeService].caseStudy}"</p>
                </div>

                {/* Client Types */}
                <div>
                  <h5 className="font-display text-xl font-bold text-white mb-4">Ideal for</h5>
                  <div className="flex flex-wrap gap-3">
                    {executiveServices[activeService].clientTypes.map((type, idx) => (
                      <div key={idx} className="corp-badge corp-badge-glass">
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Investment & Timeline */}
              <div className="space-y-8">
                <div className="corp-card p-6 rounded-2xl">
                  <h5 className="font-display text-xl font-bold text-gray-900 mb-6 text-center">Investment Details</h5>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <DollarSignIcon className="w-6 h-6 text-yellow-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Investment Range</div>
                        <div className="text-gray-700">{executiveServices[activeService].investmentRange}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <CalendarIcon className="w-6 h-6 text-yellow-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Timeline</div>
                        <div className="text-gray-700">{executiveServices[activeService].duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <TrendingUpIcon className="w-6 h-6 text-yellow-600" />
                      <div>
                        <div className="font-semibold text-gray-900">Expected Results</div>
                        <div className="text-gray-700">{executiveServices[activeService].results}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="corp-btn corp-btn-gold corp-btn-large w-full group">
                  Schedule Strategic Consultation
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="corp-btn corp-btn-outline corp-btn-large w-full">Download Service Overview</button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <h3 className="font-display text-4xl font-bold text-center mb-12">Client Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`corp-card-glass p-8 rounded-2xl corp-animate-fade-in ${
                  visibleItems.has(`testimonial-${index}`) ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{testimonial.quote}"</blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 corp-bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">{testimonial.image}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-yellow-400 text-sm">{testimonial.position}</div>
                    <div className="text-gray-400 text-xs">{testimonial.company}</div>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="corp-badge corp-badge-gold text-center w-full">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Credentials */}
        <div className="mb-20">
          <h3 className="font-display text-4xl font-bold text-center mb-12">Executive Credentials & Certifications</h3>
          <div className="corp-card-glass p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h4 className="font-display text-2xl font-bold text-white mb-6">Professional Excellence</h4>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 corp-bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-5 h-5 text-gray-900" />
                      </div>
                      <span className="text-gray-300 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="corp-card p-6 rounded-2xl">
                  <h5 className="font-display text-xl font-bold text-gray-900 mb-4">Recognition</h5>
                  <div className="space-y-3">
                    <div className="corp-badge corp-badge-gold w-full">Fortune 500 CEO of the Year</div>
                    <div className="corp-badge corp-badge-gold w-full">HBR Leadership Award</div>
                    <div className="corp-badge corp-badge-gold w-full">Forbes Top 50 Executives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="corp-card-premium p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-yellow-500/10"></div>
            <div className="relative z-10">
              <h3 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Enterprise?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join the ranks of Fortune 500 leaders who have transformed their organizations through strategic consulting excellence.
                Schedule your executive consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="corp-btn corp-btn-gold corp-btn-large group">
                  <CalendarIcon className="w-6 h-6" />
                  Schedule Executive Consultation
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="corp-btn corp-btn-glass corp-btn-large">Download Executive Portfolio</button>
              </div>

              <div className="mt-8 text-sm text-gray-400">
                <p>Trusted by 45+ Fortune 500 companies • $15B+ in value created • 98% client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
