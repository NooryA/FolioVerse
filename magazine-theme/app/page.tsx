"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Bookmark,
  Share2,
  Calendar,
  User,
  Camera,
  Star,
  Quote,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Code,
  Briefcase,
  Award,
  Target,
  Zap,
  Coffee,
} from "lucide-react";

interface MagazinePage {
  id: string;
  type: "cover" | "article" | "gallery" | "interview" | "back";
  title: string;
  subtitle?: string;
  content: any;
  backgroundColor: string;
  textColor: string;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const magazinePages: MagazinePage[] = [
    // Cover Page
    {
      id: "cover",
      type: "cover",
      title: "DEV WEEKLY",
      subtitle: "The Future of Development",
      backgroundColor: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900",
      textColor: "text-white",
      content: (
        <div className="h-full flex flex-col justify-between p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
              }}
            ></div>
          </div>

          {/* Header */}
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-6xl font-bold mb-2">DEV</div>
                <div className="text-2xl font-light">WEEKLY</div>
              </div>
              <div className="text-right text-sm">
                <div>ISSUE #42</div>
                <div>JANUARY 2024</div>
                <div className="font-bold">$12.99</div>
              </div>
            </div>
          </div>

          {/* Main Feature */}
          <div className="relative z-10 flex-1 flex items-center">
            <div className="max-w-2xl">
              <div className="text-yellow-400 font-bold mb-4">EXCLUSIVE INTERVIEW</div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">Meet Alex Rodriguez</h1>
              <h2 className="text-2xl text-gray-300 mb-8 leading-relaxed">
                The Full-Stack Developer Revolutionizing Modern Web Development
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
                    alt="Alex Rodriguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Alex Rodriguez</div>
                  <div className="text-gray-300">Senior Full-Stack Developer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <div className="text-yellow-400 text-sm font-bold">ALSO INSIDE:</div>
                <div className="text-sm space-y-1">
                  <div>• Latest React 18 Features</div>
                  <div>• AI in Web Development</div>
                  <div>• Career Growth Tips</div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">20+ PAGES</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Table of Contents
    {
      id: "toc",
      type: "article",
      title: "Contents",
      backgroundColor: "bg-white",
      textColor: "text-gray-900",
      content: (
        <div className="h-full p-12 bg-white">
          <div className="grid grid-cols-12 gap-8 h-full">
            {/* Left Column */}
            <div className="col-span-7">
              <div className="border-b border-gray-300 pb-4 mb-8">
                <h1 className="text-4xl font-bold mb-2">Contents</h1>
                <div className="text-gray-500">Issue #42 • January 2024</div>
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">The Developer's Journey</h3>
                    <p className="text-gray-600">From student to senior developer - an inspiring story</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">04</div>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Project Showcase</h3>
                    <p className="text-gray-600">Innovative applications changing the industry</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">08</div>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Tech Stack Deep Dive</h3>
                    <p className="text-gray-600">Tools and technologies for modern development</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">12</div>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Industry Insights</h3>
                    <p className="text-gray-600">Expert opinions on the future of web development</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">16</div>
                </div>

                <div className="flex justify-between items-start pb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Connect & Collaborate</h3>
                    <p className="text-gray-600">Get in touch for your next project</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">20</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-5">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 h-full">
                <h2 className="text-2xl font-bold mb-4">Editor's Note</h2>
                <div className="prose prose-gray">
                  <p className="mb-4">
                    Welcome to this special edition featuring Alex Rodriguez, a remarkable developer who's been making waves in the tech
                    industry.
                  </p>
                  <p className="mb-4">
                    In this issue, we explore Alex's journey from a curious student to a seasoned professional leading innovative projects.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-bold">Sarah Mitchell</div>
                      <div className="text-gray-600 text-sm">Editor-in-Chief</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // About Article
    {
      id: "about",
      type: "article",
      title: "The Developer's Journey",
      backgroundColor: "bg-white",
      textColor: "text-gray-900",
      content: (
        <div className="h-full p-12 bg-white">
          <div className="grid grid-cols-12 gap-8 h-full">
            <div className="col-span-8">
              <div className="mb-8">
                <div className="text-blue-600 font-bold mb-2">COVER STORY</div>
                <h1 className="text-5xl font-bold mb-4 leading-tight">The Developer's Journey</h1>
                <h2 className="text-xl text-gray-600 mb-6">From curious student to industry leader</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>By Sarah Mitchell</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>January 15, 2024</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="mb-6">
                  <div className="float-left w-32 h-32 mr-6 mb-4 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&crop=face"
                      alt="Alex Rodriguez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg leading-relaxed">
                    <span className="text-6xl float-left leading-none pr-2 font-serif">A</span>
                    lex Rodriguez's journey into web development began not in a classroom, but in his childhood bedroom, tinkering with his
                    first computer at age 12. "I was fascinated by how websites worked," he recalls, his eyes lighting up as he remembers
                    those early days of discovery.
                  </p>
                </div>

                <p className="mb-6">
                  Fast forward to today, and Alex is a senior full-stack developer at TechCorp Inc., leading a team of talented engineers
                  and architecting solutions that serve millions of users worldwide. His path wasn't always straightforward, but it's been
                  marked by an unwavering curiosity and determination to solve complex problems.
                </p>

                <blockquote className="border-l-4 border-blue-600 pl-6 my-8 text-xl italic text-gray-700">
                  "The best developers aren't just coders - they're problem solvers, collaborators, and lifelong learners."
                </blockquote>

                <p className="mb-6">
                  Alex's expertise spans the full development stack, from crafting intuitive user interfaces with React and Vue.js to
                  building robust backend systems with Node.js and Python. But what sets him apart isn't just his technical skills - it's
                  his ability to bridge the gap between complex technology and real-world business needs.
                </p>

                <p>
                  "I've learned that the most successful projects aren't just technically excellent," Alex explains. "They solve real
                  problems for real people. That's what drives me every day."
                </p>
              </div>
            </div>

            <div className="col-span-4">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-semibold text-gray-600">Experience</dt>
                      <dd className="text-lg">5+ Years</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-600">Location</dt>
                      <dd className="text-lg">San Francisco, CA</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-600">Specialization</dt>
                      <dd className="text-lg">Full-Stack Development</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-600">Education</dt>
                      <dd className="text-lg">CS Degree, UC Berkeley</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">By the Numbers</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">50+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">100K+</div>
                      <div className="text-sm text-gray-600">Users Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">5</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">98%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Skills Highlight</h3>
                  <div className="space-y-2">
                    {[
                      { skill: "React.js", level: 95 },
                      { skill: "Node.js", level: 90 },
                      { skill: "TypeScript", level: 88 },
                      { skill: "Python", level: 85 },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{item.skill}</span>
                          <span className="text-sm text-gray-500">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Projects Gallery
    {
      id: "projects",
      type: "gallery",
      title: "Project Showcase",
      backgroundColor: "bg-gray-50",
      textColor: "text-gray-900",
      content: (
        <div className="h-full p-12 bg-gray-50">
          <div className="mb-8">
            <div className="text-blue-600 font-bold mb-2">PORTFOLIO</div>
            <h1 className="text-4xl font-bold mb-4">Project Showcase</h1>
            <p className="text-xl text-gray-600">Innovative applications that make a difference</p>
          </div>

          <div className="grid grid-cols-2 gap-8 h-[calc(100%-200px)]">
            {/* Featured Project */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4d3aea6?w=600&h=300&fit=crop"
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-semibold">Featured</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack marketplace serving 10,000+ users with real-time inventory management and seamless payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "PostgreSQL", "AWS"].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">2024</div>
                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="space-y-4">
              {[
                {
                  title: "AI Chat Assistant",
                  tech: ["Python", "OpenAI", "React"],
                  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=150&fit=crop",
                },
                {
                  title: "Mobile Banking App",
                  tech: ["React Native", "Firebase"],
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=150&fit=crop",
                },
                {
                  title: "Analytics Dashboard",
                  tech: ["Vue.js", "D3.js", "MongoDB"],
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=150&fit=crop",
                },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                  <img src={project.image} alt={project.title} className="w-32 h-24 object-cover" />
                  <div className="p-4 flex-1">
                    <h4 className="font-bold mb-1">{project.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">+{project.tech.length - 2}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    // Contact Page
    {
      id: "contact",
      type: "interview",
      title: "Let's Connect",
      backgroundColor: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
      textColor: "text-white",
      content: (
        <div className="h-full p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative z-10">
            <div className="mb-12 text-center">
              <div className="text-yellow-400 font-bold mb-4">GET IN TOUCH</div>
              <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to collaborate on your next big project? Let's build something amazing together.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-300">alex@example.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-gray-300">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-gray-300">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Social Media</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: <Github className="w-5 h-5" />, label: "GitHub", color: "bg-gray-700" },
                      { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "bg-blue-600" },
                      { icon: <Twitter className="w-5 h-5" />, label: "Twitter", color: "bg-sky-500" },
                      { icon: <Globe className="w-5 h-5" />, label: "Website", color: "bg-indigo-600" },
                    ].map((social, index) => (
                      <button
                        key={index}
                        className={`${social.color} p-3 rounded-lg hover:scale-110 transition-transform`}
                        title={social.label}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What I Can Do For You</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Code className="w-6 h-6" />,
                      title: "Full-Stack Development",
                      description: "End-to-end web application development",
                    },
                    {
                      icon: <Briefcase className="w-6 h-6" />,
                      title: "Technical Consulting",
                      description: "Architecture and technology decisions",
                    },
                    {
                      icon: <Award className="w-6 h-6" />,
                      title: "Code Review & Mentoring",
                      description: "Helping teams improve their skills",
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Project Leadership",
                      description: "Leading development teams to success",
                    },
                  ].map((service, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white/10 rounded-lg">
                      <div className="text-yellow-400">{service.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1">{service.title}</h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-lg">
                  <h3 className="font-bold mb-2">Ready to Start?</h3>
                  <p className="text-gray-300 text-sm mb-4">I'm always excited to discuss new opportunities and challenging projects.</p>
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < magazinePages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentPage && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;

    const deltaX = e.clientX - dragStartX;
    if (Math.abs(deltaX) > 100) {
      if (deltaX > 0 && currentPage > 0) {
        prevPage();
      } else if (deltaX < 0 && currentPage < magazinePages.length - 1) {
        nextPage();
      }
      setIsDragging(false);
      setDragStartX(null);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartX(null);
  };

  return (
    <div className="h-screen bg-gray-800 flex items-center justify-center p-8 overflow-hidden">
      {/* Magazine Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl h-full bg-white rounded-lg shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Current Page */}
        <div
          className={`absolute inset-0 ${magazinePages[currentPage].backgroundColor} ${
            isFlipping ? "animate-pulse" : ""
          } transition-all duration-600`}
        >
          {magazinePages[currentPage].content}
        </div>

        {/* Page Flip Effect */}
        {isFlipping && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>}

        {/* Navigation Controls */}
        <div className="absolute top-6 right-6 flex items-center gap-4 z-50">
          <div className="bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
            <span className="text-sm font-medium">
              Page {currentPage + 1} of {magazinePages.length}
            </span>
          </div>
          <button className="bg-black/50 text-white p-2 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="bg-black/50 text-white p-2 rounded-lg backdrop-blur-sm hover:bg-black/70 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Page Navigation */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-40"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === magazinePages.length - 1 || isFlipping}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Page Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
          {magazinePages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Magazine Binding Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-600 to-transparent opacity-30 pointer-events-none"></div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-8 text-white/70 text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Navigate</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div>Drag to flip pages</div>
        </div>
      </div>
    </div>
  );
}
