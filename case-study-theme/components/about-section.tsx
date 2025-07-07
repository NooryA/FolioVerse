"use client";

import { useState } from "react";
import {
  Award,
  Users,
  BarChart3,
  Target,
  CheckCircle,
  TrendingUp,
  Zap,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  Lightbulb,
  PieChart,
  FileText,
} from "lucide-react";

export function AboutSection() {
  const [activeMethodology, setActiveMethodology] = useState(0);

  const expertise = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Analysis",
      description:
        "Transform complex business challenges into clear, actionable insights through comprehensive data analysis and user research.",
      metrics: "95% accuracy in problem identification",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Solutions",
      description: "Design and implement solutions that directly address core business objectives with measurable outcomes.",
      metrics: "156% average performance improvement",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Measurable Results",
      description: "Every project delivers quantifiable business impact with detailed metrics and ROI analysis.",
      metrics: "$12.8M+ total client value generated",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stakeholder Alignment",
      description: "Facilitate collaboration between teams, ensuring all stakeholders are aligned on objectives and outcomes.",
      metrics: "98% stakeholder satisfaction rate",
    },
  ];

  const methodology = [
    {
      phase: "Discovery & Research",
      duration: "1-2 weeks",
      description: "Comprehensive analysis of current state, stakeholder interviews, and competitive research",
      activities: [
        "Stakeholder interviews and workshops",
        "User research and behavioral analysis",
        "Competitive landscape assessment",
        "Technical and business constraint mapping",
      ],
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      phase: "Analysis & Strategy",
      duration: "1-2 weeks",
      description: "Deep dive analysis to identify root causes and develop strategic approach",
      activities: [
        "Data analysis and pattern identification",
        "Problem statement refinement",
        "Solution hypothesis development",
        "Success metrics definition",
      ],
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      phase: "Design & Development",
      duration: "4-8 weeks",
      description: "Iterative design and development with continuous validation and stakeholder feedback",
      activities: [
        "Prototyping and design iteration",
        "User testing and validation",
        "Development and implementation",
        "Quality assurance and optimization",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      phase: "Measurement & Optimization",
      duration: "2-4 weeks",
      description: "Launch monitoring, performance analysis, and continuous improvement",
      activities: [
        "Performance monitoring and analytics",
        "User feedback collection and analysis",
        "Optimization recommendations",
        "Case study documentation and insights",
      ],
      icon: <PieChart className="w-6 h-6" />,
    },
  ];

  const achievements = [
    { value: "50+", label: "Successful Case Studies", icon: <FileText className="w-5 h-5" /> },
    { value: "95%", label: "Client Satisfaction", icon: <Star className="w-5 h-5" /> },
    { value: "12", label: "Industry Awards", icon: <Award className="w-5 h-5" /> },
    { value: "156%", label: "Avg Performance Boost", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const testimonials = [
    {
      quote:
        "The case study approach completely transformed how we think about our product. The detailed analysis and clear recommendations led to a 67% increase in conversions.",
      author: "Sarah Chen",
      role: "Product Director",
      company: "RetailCorp",
    },
    {
      quote:
        "Exceptional methodology and execution. The team's ability to translate complex data into actionable insights resulted in $2.3M additional revenue.",
      author: "Michael Rodriguez",
      role: "VP of Engineering",
      company: "DataFlow Inc",
    },
    {
      quote:
        "Outstanding work on our mobile banking project. The comprehensive case study methodology ensured we hit every milestone and exceeded user expectations.",
      author: "Jennifer Kim",
      role: "Chief Digital Officer",
      company: "SecureBank",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Users className="w-5 h-5" />
            <span className="font-semibold">About the Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Proven Methodology for
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Exceptional Results</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I combine strategic thinking, data-driven analysis, and human-centered design to create case studies that not only document
            success but drive continuous improvement and business growth.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Core Expertise Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block">{item.metrics}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">My Case Study Methodology</h3>

          {/* Process Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {methodology.map((phase, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeMethodology === index ? "transform scale-105" : "hover:transform hover:scale-105"
                }`}
                onClick={() => setActiveMethodology(index)}
              >
                <div
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeMethodology === index
                      ? "bg-blue-600 text-white border-blue-600 shadow-xl"
                      : "bg-white text-slate-900 border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${activeMethodology === index ? "bg-white/20" : "bg-blue-100 text-blue-600"}`}>
                      {phase.icon}
                    </div>
                    <div className="text-sm font-semibold opacity-80">{phase.duration}</div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{phase.phase}</h4>
                  <p className={`text-sm leading-relaxed ${activeMethodology === index ? "text-blue-100" : "text-slate-600"}`}>
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Phase Information */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-600 text-white rounded-lg">{methodology[activeMethodology].icon}</div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900">{methodology[activeMethodology].phase}</h4>
                <p className="text-slate-600">{methodology[activeMethodology].duration}</p>
              </div>
            </div>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">{methodology[activeMethodology].description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {methodology[activeMethodology].activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Track Record of Success</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-200">{achievement.icon}</div>
                <div className="text-3xl font-bold mb-1">{achievement.value}</div>
                <div className="text-blue-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">What Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose This Approach */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Why Case Studies Drive Success</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Evidence-Based Decisions</h4>
                    <p className="text-slate-600">Every recommendation is backed by data and real user insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Measurable Outcomes</h4>
                    <p className="text-slate-600">Clear metrics and KPIs to track success and ROI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Continuous Learning</h4>
                    <p className="text-slate-600">Each project builds organizational knowledge for future success</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Stakeholder Buy-in</h4>
                    <p className="text-slate-600">Clear documentation ensures alignment and supports decision-making</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">67%</div>
                <div className="text-sm text-slate-600">Average conversion improvement</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Clock className="w-8 h-8 text-green-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">50%</div>
                <div className="text-sm text-slate-600">Faster time-to-value</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">95%</div>
                <div className="text-sm text-slate-600">Client satisfaction rate</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">$12.8M</div>
                <div className="text-sm text-slate-600">Total value generated</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how my proven methodology can deliver the results you need.
          </p>
          <button className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Start Your Case Study</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
