"use client";

import { useState } from "react";
import { Palette, Code, Coffee, Award, BookOpen, MapPin } from "lucide-react";

// Custom artist tools icons
const BrushIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 5H3m4 6H3m4 6H3"
    />
  </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("statement");

  const artistTools = [
    {
      icon: Code,
      name: "Code Architecture",
      description: "Crafting clean, scalable solutions",
      color: "text-blue-600",
    },
    {
      icon: Palette,
      name: "Design Systems",
      description: "Building cohesive visual languages",
      color: "text-purple-600",
    },
    {
      icon: Coffee,
      name: "User Research",
      description: "Understanding human behavior",
      color: "text-amber-600",
    },
    {
      icon: Award,
      name: "Performance",
      description: "Optimizing for speed and efficiency",
      color: "text-green-600",
    },
  ];

  const exhibitions = [
    {
      year: "2024",
      title: "Modern Web Applications",
      venue: "React & Next.js Showcase",
      description: "A collection of responsive, interactive web applications",
    },
    {
      year: "2023",
      title: "UI/UX Innovation",
      venue: "Design Systems Exhibition",
      description: "Exploring the intersection of design and technology",
    },
    {
      year: "2022",
      title: "Full-Stack Mastery",
      venue: "Technical Portfolio",
      description: "End-to-end development solutions",
    },
  ];

  const credentials = ["Master of Computer Science", "Certified React Developer", "UX Design Specialization", "AWS Cloud Practitioner"];

  return (
    <section id="about" className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="gallery-label mb-4">Artist Statement</div>
          <h2 className="gallery-heading gallery-heading-lg mb-6">Behind the Canvas</h2>
          <p className="gallery-subtitle">Where creativity meets code, and ideas transform into digital experiences</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Artist Portrait & Bio */}
          <div className="lg:col-span-2">
            <div className="gallery-card">
              {/* Tab Navigation */}
              <div className="gallery-controls mb-8">
                <button onClick={() => setActiveTab("statement")} className={`gallery-filter ${activeTab === "statement" ? "active" : ""}`}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Artist Statement
                </button>
                <button onClick={() => setActiveTab("process")} className={`gallery-filter ${activeTab === "process" ? "active" : ""}`}>
                  <BrushIcon className="w-4 h-4 mr-2" />
                  Creative Process
                </button>
                <button
                  onClick={() => setActiveTab("philosophy")}
                  className={`gallery-filter ${activeTab === "philosophy" ? "active" : ""}`}
                >
                  <CameraIcon className="w-4 h-4 mr-2" />
                  Philosophy
                </button>
              </div>

              {/* Tab Content */}
              <div className="gallery-exhibition">
                {activeTab === "statement" && (
                  <div>
                    <h3 className="gallery-title text-xl mb-4">Digital Artisan & Code Curator</h3>
                    <div className="gallery-curator-note">
                      I am a digital artisan who believes that great software is not just functional—it's beautiful, intuitive, and
                      meaningful. My work exists at the intersection of technology and human experience, where every line of code is a
                      brushstroke in a larger masterpiece.
                    </div>
                    <div className="gallery-text space-y-4">
                      <p>
                        With over five years of experience in full-stack development, I've cultivated a unique approach that treats web
                        applications as living, breathing artworks. Each project is an opportunity to explore new techniques, push creative
                        boundaries, and solve complex problems with elegant solutions.
                      </p>
                      <p>
                        My passion lies in creating digital experiences that feel natural and delightful to users while maintaining the
                        highest standards of performance and accessibility. I believe that the best interfaces are invisible—they simply
                        work, allowing users to focus on what matters most.
                      </p>
                      <p>
                        From concept to deployment, I approach each project with the meticulousness of a curator and the creativity of an
                        artist, ensuring that every detail serves both function and form.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "process" && (
                  <div>
                    <h3 className="gallery-title text-xl mb-4">The Creative Process</h3>
                    <div className="gallery-curator-note">
                      My development process is inspired by traditional art techniques, where each phase builds upon the last to create
                      something greater than the sum of its parts.
                    </div>
                    <div className="gallery-text space-y-4">
                      <div>
                        <strong>Discovery & Research:</strong> Like studying a subject before painting, I begin every project by
                        understanding the user's needs, market context, and technical constraints.
                      </div>
                      <div>
                        <strong>Sketching & Wireframing:</strong> Ideas flow onto paper first, then digital mockups, allowing for rapid
                        iteration and refinement before any code is written.
                      </div>
                      <div>
                        <strong>Palette Selection:</strong> Choosing the right technology stack is like selecting colors for a painting—each
                        tool must work harmoniously with the others.
                      </div>
                      <div>
                        <strong>Composition & Development:</strong> The actual coding phase, where careful attention to architecture,
                        performance, and user experience come together.
                      </div>
                      <div>
                        <strong>Exhibition & Iteration:</strong> Launching is just the beginning—continuous refinement based on user
                        feedback ensures the work remains relevant and effective.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "philosophy" && (
                  <div>
                    <h3 className="gallery-title text-xl mb-4">Design Philosophy</h3>
                    <div className="gallery-curator-note">
                      Great design is invisible. Great code is maintainable. Great user experiences are effortless.
                    </div>
                    <div className="gallery-text space-y-4">
                      <p>
                        <strong>Human-Centered Design:</strong> Technology should adapt to people, not the other way around. Every decision
                        I make prioritizes the human experience.
                      </p>
                      <p>
                        <strong>Craftsmanship:</strong> Like traditional craftspeople, I believe in taking pride in the quality of work,
                        from the visible interface to the underlying code architecture.
                      </p>
                      <p>
                        <strong>Continuous Learning:</strong> The digital landscape evolves rapidly, and staying current requires constant
                        curiosity and a willingness to experiment with new tools and techniques.
                      </p>
                      <p>
                        <strong>Collaborative Spirit:</strong> The best work comes from collaboration—with designers, stakeholders, and
                        users—creating solutions that truly serve their intended purpose.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Artist Info Sidebar */}
          <div className="space-y-8">
            {/* Artist Portrait */}
            <div className="gallery-card text-center">
              <div className="gallery-frame">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Alessandro Rivera - Digital Artist & Developer"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="gallery-caption">
                <h3 className="gallery-title text-lg mb-2">Alessandro Rivera</h3>
                <p className="gallery-artist">Digital Artisan & Full-Stack Developer</p>
                <div className="flex items-center justify-center gap-2 text-gallery-text-light mt-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Tools & Mediums */}
            <div className="gallery-card">
              <h3 className="gallery-title text-lg mb-4">Tools & Mediums</h3>
              <div className="space-y-3">
                {artistTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gallery-bg-warm rounded-lg">
                      <Icon className={`w-5 h-5 ${tool.color} mt-0.5`} />
                      <div>
                        <div className="font-semibold text-gallery-primary">{tool.name}</div>
                        <div className="text-sm text-gallery-text-light">{tool.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Credentials */}
            <div className="gallery-card">
              <h3 className="gallery-title text-lg mb-4">Credentials</h3>
              <div className="space-y-2">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-2 text-gallery-text-medium">
                    <Award className="w-4 h-4 text-gallery-accent" />
                    <span className="text-sm">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition History */}
        <div className="gallery-card">
          <h3 className="gallery-heading gallery-heading-md mb-8 text-center">Exhibition History</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {exhibitions.map((exhibition, index) => (
              <div key={index} className="gallery-exhibition">
                <div className="gallery-year text-2xl font-bold mb-2">{exhibition.year}</div>
                <h4 className="gallery-title text-lg mb-2">{exhibition.title}</h4>
                <p className="gallery-artist mb-3">{exhibition.venue}</p>
                <p className="gallery-text text-sm">{exhibition.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gallery-card max-w-2xl mx-auto">
            <h3 className="gallery-heading gallery-heading-md mb-4">Let's Create Together</h3>
            <p className="gallery-text mb-8">
              Interested in commissioning a piece or collaborating on a project? I'm always excited to work with fellow creators and
              innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="gallery-btn gallery-btn-primary">
                <Palette className="w-5 h-5" />
                Commission a Project
              </a>
              <a href="#projects" className="gallery-btn gallery-btn-secondary">
                <BrushIcon className="w-5 h-5" />
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
