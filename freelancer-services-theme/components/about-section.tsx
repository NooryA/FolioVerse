"use client";

import { useState } from "react";

// Inline SVG Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
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

const AwardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export default function AboutSection() {
  const [selectedService, setSelectedService] = useState(0);

  const coreServices = [
    {
      icon: <CodeIcon className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Modern web applications built with cutting-edge technologies",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
      deliverables: ["Responsive Web Apps", "API Development", "Database Design", "Performance Optimization"],
      timeframe: "2-8 weeks",
    },
    {
      icon: <DesignIcon className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers",
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer"],
      deliverables: ["User Research", "Wireframes", "Prototypes", "Design Systems"],
      timeframe: "1-4 weeks",
    },
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Strategic planning to achieve your business goals",
      technologies: ["Analytics", "SEO Tools", "Marketing Automation", "CRM Systems"],
      deliverables: ["Market Analysis", "Brand Strategy", "Growth Planning", "ROI Tracking"],
      timeframe: "1-3 weeks",
    },
  ];

  const achievements = [
    { number: "150+", label: "Projects Delivered", icon: <RocketIcon className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <HeartIcon className="w-6 h-6" /> },
    { number: "24hr", label: "Response Time", icon: <ClockIcon className="w-6 h-6" /> },
    { number: "5⭐", label: "Average Rating", icon: <StarIcon className="w-6 h-6" /> },
  ];

  const workingPrinciples = [
    {
      icon: <ShieldIcon className="w-6 h-6" />,
      title: "Quality First",
      description: "Every project is built with attention to detail and industry best practices",
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "Reliable project timelines with regular updates throughout the process",
    },
    {
      icon: <UserIcon className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Your success is my priority. I work closely with you every step of the way",
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Future-Proof",
      description: "Solutions built to scale and adapt as your business grows",
    },
  ];

  return (
    <section id="about" className="freelancer-section freelancer-section-lg">
      <div className="freelancer-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="freelancer-badge freelancer-badge-primary mb-4">
            <UserIcon className="w-4 h-4" />
            About My Services
          </div>
          <h2 className="freelancer-heading text-4xl md:text-5xl mb-6">
            Professional <span className="freelancer-text-gradient">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I help businesses transform their digital presence with modern, scalable solutions that drive real results and growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content - Service Details */}
          <div className="space-y-8">
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-8">Core Services</h3>

                {/* Service Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {coreServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(index)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        selectedService === index
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>

                {/* Selected Service Content */}
                <div className="freelancer-animate-fadeInUp">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      {coreServices[selectedService].icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{coreServices[selectedService].title}</h4>
                      <p className="text-gray-600">{coreServices[selectedService].description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {coreServices[selectedService].technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Deliverables</h5>
                      <ul className="space-y-2">
                        {coreServices[selectedService].deliverables.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Typical Timeline:</span>
                      <span className="text-indigo-600 font-bold">{coreServices[selectedService].timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Principles */}
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-6">How I Work</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {workingPrinciples.map((principle, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {principle.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{principle.title}</h4>
                        <p className="text-sm text-gray-600">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats and Achievements */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="freelancer-card text-center">
                  <div className="freelancer-card-content">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Testimonials */}
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-6">What Clients Say</h3>
                <div className="space-y-6">
                  {[
                    {
                      text: "Alex transformed our online presence completely. The new website increased our leads by 300%.",
                      author: "Sarah Johnson",
                      role: "CEO, TechStart Inc.",
                      rating: 5,
                    },
                    {
                      text: "Professional, responsive, and delivered exactly what we needed. Highly recommended!",
                      author: "Mike Chen",
                      role: "Founder, Growth Co.",
                      rating: 5,
                    },
                  ].map((testimonial, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="freelancer-card">
              <div className="freelancer-card-content">
                <h3 className="freelancer-card-title mb-6">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-600">Available for new projects</span>
                  </div>
                  <div className="text-sm text-gray-600">I'm currently accepting 2-3 new clients for Q1 2024. Book your spot today!</div>
                  <button className="freelancer-btn freelancer-btn-primary w-full">Reserve Your Spot</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical <span className="freelancer-text-gradient">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                level: "Expert",
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
                level: "Expert",
              },
              {
                category: "Tools & Design",
                skills: ["Figma", "Git", "Docker", "AWS", "Vercel"],
                level: "Advanced",
              },
            ].map((skillGroup, index) => (
              <div key={index} className="freelancer-service-card">
                <div className="freelancer-service-icon">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <h4 className="freelancer-service-title">{skillGroup.category}</h4>
                <div className="mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">{skillGroup.level}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="freelancer-card max-w-2xl mx-auto">
            <div className="freelancer-card-content">
              <h3 className="text-3xl font-bold mb-4">
                Ready to <span className="freelancer-text-gradient">Work Together?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss your project and create something amazing that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="freelancer-btn freelancer-btn-primary freelancer-btn-large">Get Free Consultation</button>
                <button className="freelancer-btn freelancer-btn-outline freelancer-btn-large">View Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
