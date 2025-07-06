"use client";

import { useState, useEffect } from "react";
import {
  User,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Globe,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Star,
  Download,
  Printer,
  Eye,
  ChevronRight,
  Building,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  Database,
  Cloud,
  Shield,
  Settings,
  Zap,
  Languages,
  BookOpen,
  Award as Certificate,
  Trophy,
  FileText,
  Send,
  ExternalLink,
} from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("summary");
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const personalInfo = {
    name: "Alex Rodriguez",
    title: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    email: "alex.rodriguez@example.com",
    linkedin: "linkedin.com/in/alexrodriguez",
    github: "github.com/alexrodriguez",
    website: "alexrodriguez.dev",
    summary: `Experienced Senior Full-Stack Developer with 5+ years of expertise in building scalable web applications and leading development teams. Proven track record of delivering high-quality solutions that serve 100,000+ users while maintaining 99.9% uptime. Passionate about mentoring junior developers and implementing best practices in software development.`,
  };

  const experiences: Experience[] = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      description: [
        "Led development team of 8+ engineers in building enterprise-scale web applications",
        "Architected and implemented microservices infrastructure serving 100,000+ daily users",
        "Reduced deployment time by 60% through implementation of CI/CD pipelines",
        "Mentored 5 junior developers, improving team productivity by 40%",
        "Collaborated with product managers and designers to deliver user-centered solutions",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      duration: "Jun 2020 - Dec 2021",
      description: [
        "Developed and maintained multiple client-facing applications using React and Node.js",
        "Built RESTful APIs and GraphQL endpoints for mobile and web applications",
        "Implemented real-time features using WebSockets for live chat and notifications",
        "Optimized database queries resulting in 50% improvement in response times",
        "Participated in code reviews and helped establish development best practices",
      ],
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "WebSockets", "Redis"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "San Francisco, CA",
      duration: "Mar 2019 - May 2020",
      description: [
        "Created responsive websites and web applications for diverse client portfolio",
        "Collaborated with UX/UI designers to translate mockups into functional interfaces",
        "Implemented modern JavaScript frameworks and maintained legacy systems",
        "Improved website performance by 35% through optimization techniques",
        "Worked directly with clients to gather requirements and provide technical guidance",
      ],
      technologies: ["JavaScript", "Vue.js", "HTML5", "CSS3", "Sass", "jQuery"],
    },
  ];

  const education: Education[] = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      year: "2015 - 2019",
      details: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering",
        "Senior Project: Built a machine learning recommendation system for e-commerce",
        "Teaching Assistant for Introduction to Programming course",
      ],
    },
  ];

  const skills: Skill[] = [
    {
      category: "Frontend Technologies",
      items: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend Technologies",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 80 },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", level: 87 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 78 },
        { name: "CI/CD", level: 83 },
        { name: "Terraform", level: 75 },
      ],
    },
  ];

  const achievements = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: "Team Leadership Excellence Award",
      issuer: "TechCorp Inc.",
      year: "2023",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Top Performer - Q4 2022",
      issuer: "TechCorp Inc.",
      year: "2022",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      title: "Certified ScrumMaster",
      issuer: "Scrum Alliance",
      year: "2022",
      icon: <Certificate className="w-5 h-5" />,
    },
  ];

  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack marketplace application with payment processing",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: "10,000+ users, 99.9% uptime",
      link: "#",
    },
    {
      name: "AI Chat Assistant",
      description: "Machine learning powered customer service chatbot",
      technologies: ["Python", "OpenAI", "React", "WebSockets"],
      metrics: "60% reduction in support tickets",
      link: "#",
    },
    {
      name: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      technologies: ["Vue.js", "D3.js", "MongoDB", "Redis"],
      metrics: "1TB+ data processed daily",
      link: "#",
    },
  ];

  const menuItems = [
    { id: "summary", label: "Professional Summary", icon: <User className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <FileText className="w-4 h-4" /> },
    { id: "achievements", label: "Achievements", icon: <Award className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "summary":
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Summary</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{personalInfo.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600">5+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">100K+</h3>
                  <p className="text-gray-600">Users Served</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600">99.9%</h3>
                  <p className="text-gray-600">Uptime Rate</p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600">8+</h3>
                  <p className="text-gray-600">Team Members Led</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Team Leadership & Mentoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">System Architecture Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Performance Optimization</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Cloud Infrastructure (AWS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">CI/CD Pipeline Implementation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Database Design & Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Agile Development Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Experience</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 pb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-600 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Technical Skills</h2>
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{skillGroup.category}</h3>
                    <div className="space-y-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">{skill.name}</span>
                            <span className="text-gray-600 font-semibold">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: animateSkills ? `${skill.level}%` : "0%",
                                transitionDelay: `${skillIndex * 100}ms`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Languages className="w-5 h-5" />
                    Languages
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">English</span>
                      <span className="text-gray-600">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Spanish</span>
                      <span className="text-gray-600">Fluent</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Soft Skills
                  </h4>
                  <div className="space-y-2">
                    <div className="text-gray-700">Team Leadership</div>
                    <div className="text-gray-700">Project Management</div>
                    <div className="text-gray-700">Problem Solving</div>
                    <div className="text-gray-700">Communication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                        <p className="text-lg text-green-600 font-semibold">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                      <ExternalLink className="w-5 h-5 text-gray-400" />
                    </div>

                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-gray-600 font-medium">{project.metrics}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Achievements & Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-400">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-yellow-600">{achievement.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
                        <p className="text-yellow-600 font-semibold">{achievement.issuer}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
                <p className="text-xl text-blue-600 font-semibold">{personalInfo.title}</p>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{personalInfo.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <a href={`https://${personalInfo.linkedin}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`https://${personalInfo.github}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={`https://${personalInfo.website}`} className="text-gray-600 hover:text-gray-800 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <Printer className="w-4 h-4" />
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Resume Sections</h3>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeSection === item.id ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <span className={activeSection === item.id ? "text-white" : "text-gray-400"}>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setIsPreviewMode(!isPreviewMode)}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-3 rounded-lg flex items-center gap-3 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span className="font-medium">Preview Mode</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
