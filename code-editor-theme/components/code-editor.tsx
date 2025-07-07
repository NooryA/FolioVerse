"use client";

import { useState, useEffect } from "react";
import {
  Files,
  Search,
  GitBranch,
  User,
  Package,
  Settings,
  X,
  Play,
  Terminal,
  Folder,
  FileText,
  Coffee,
  Zap,
  Heart,
  Star,
  ExternalLink,
  Github,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Globe,
  Code,
  Database,
  Palette,
  Briefcase,
} from "lucide-react";

export function CodeEditor() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("README.md");
  const [openTabs, setOpenTabs] = useState<string[]>(["README.md"]);
  const [activePanel, setActivePanel] = useState("explorer");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    Array<{
      file: string;
      line: number;
      content: string;
      match: string;
    }>
  >([]);
  const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
    portfolio: true,
    src: true,
    about: true,
    projects: true,
    contact: true,
  });

  useEffect(() => {
    setMounted(true);

    // Enhanced terminal startup sequence
    const terminalMessages = [
      "$ git clone https://github.com/alexdev/portfolio.git",
      "Cloning into 'portfolio'...",
      "remote: Enumerating objects: 347, done.",
      "remote: Total 347 (delta 0), reused 0 (delta 0), pack-reused 347",
      "Receiving objects: 100% (347/347), 2.31 MiB | 4.62 MiB/s, done.",
      "Resolving deltas: 100% (156/156), done.",
      "",
      "$ cd portfolio && npm install",
      "✓ Installing dependencies...",
      "✓ Setting up development environment...",
      "",
      "$ npm run dev",
      "✓ Portfolio server started on http://localhost:3000",
      "✓ Ready for exploration! 🚀",
      "",
      "Welcome to Alex Developer's Interactive Portfolio!",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < terminalMessages.length) {
        setTerminalOutput((prev) => [...prev, terminalMessages[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const fileStructure = [
    {
      name: "portfolio",
      type: "folder",
      children: [
        { name: "README.md", type: "file", ext: "md" },
        {
          name: "src",
          type: "folder",
          children: [
            {
              name: "about",
              type: "folder",
              children: [
                { name: "bio.tsx", type: "file", ext: "ts" },
                { name: "skills.json", type: "file", ext: "json" },
                { name: "experience.ts", type: "file", ext: "ts" },
              ],
            },
            {
              name: "projects",
              type: "folder",
              children: [
                { name: "featured.tsx", type: "file", ext: "ts" },
                { name: "gallery.tsx", type: "file", ext: "ts" },
                { name: "tech-stack.json", type: "file", ext: "json" },
              ],
            },
            {
              name: "contact",
              type: "folder",
              children: [
                { name: "info.tsx", type: "file", ext: "ts" },
                { name: "form.tsx", type: "file", ext: "ts" },
                { name: "social.json", type: "file", ext: "json" },
              ],
            },
          ],
        },
        { name: "package.json", type: "file", ext: "json" },
        { name: ".gitignore", type: "file", ext: "git" },
      ],
    },
  ];

  const getFileIcon = (fileName: string): string => {
    if (fileName.endsWith(".tsx") || fileName.endsWith(".ts")) return "ts";
    if (fileName.endsWith(".json")) return "json";
    if (fileName.endsWith(".md")) return "md";
    if (fileName.endsWith(".css")) return "css";
    if (fileName.endsWith(".html")) return "html";
    if (fileName.endsWith(".js")) return "js";
    return "txt";
  };

  const tabs = openTabs.map((tabName) => ({
    name: tabName,
    icon: getFileIcon(tabName),
    active: activeTab === tabName,
  }));

  const toggleFolder = (folderName: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} style={{ marginLeft: `${level * 16}px` }}>
        <div
          className={`file-item ${activeTab === item.name ? "active" : ""}`}
          onClick={() => {
            if (item.type === "folder") {
              toggleFolder(item.name);
            } else {
              openTab(item.name);
            }
          }}
        >
          {item.type === "folder" ? (
            <>
              {expandedFolders[item.name] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              <Folder className="file-icon folder-icon" />
            </>
          ) : (
            <>
              <div className="w-4 h-4" />
              <FileText className={`file-icon ${item.ext}`} />
            </>
          )}
          <span>{item.name}</span>
        </div>
        {item.children && item.type === "folder" && expandedFolders[item.name] && <div>{renderFileTree(item.children, level + 1)}</div>}
      </div>
    ));
  };

  const getFileContent = () => {
    // If no tabs are open, show welcome message
    if (openTabs.length === 0) {
      return `# Welcome to Alex Developer's Portfolio

## 🚀 Getting Started
Click on any file in the explorer to view its contents.

## 📂 Available Files
- **README.md** - Portfolio overview and navigation
- **bio.tsx** - Personal information and skills
- **featured.tsx** - Featured projects showcase
- **info.tsx** - Contact information and form
- **skills.json** - Technical skills and certifications

## 💡 Pro Tips
- Use the search feature to find specific content
- Tabs can be closed by clicking the X button
- Multiple files can be open at once

Happy exploring! 🎉`;
    }

    switch (activeTab) {
      case "README.md":
        return `# 🚀 Alex Developer - Full Stack Developer Portfolio

Welcome to my interactive code-style portfolio! 

## 👨‍💻 About Me
I'm a passionate Full Stack Developer with 5+ years of experience building 
scalable web applications and beautiful user interfaces.

## 🛠️ Tech Stack
- **Frontend**: React, Next.js, TypeScript, TailwindCSS
- **Backend**: Node.js, Python, PostgreSQL, MongoDB
- **Cloud**: AWS, Docker, Kubernetes
- **Tools**: Git, VS Code, Figma, Jira

## 📊 Portfolio Stats
- ✅ 120+ Projects Completed
- 🎯 50+ Happy Clients  
- ⭐ 1.2K GitHub Stars
- ☕ Infinite Coffee Consumed

## 🗂️ Portfolio Structure
\`\`\`
portfolio/
├── src/
│   ├── about/          # Personal info & skills
│   ├── projects/       # Featured work & gallery
│   └── contact/        # Get in touch
├── README.md           # You are here!
└── package.json        # Dependencies
\`\`\`

## 🎯 Quick Navigation
Click on the files in the explorer to browse different sections:
- **about/bio.tsx** - Personal background & story
- **projects/featured.tsx** - Featured projects & demos
- **contact/info.tsx** - Contact information & form

---
*Built with ❤️ and lots of ☕ by Alex Developer*`;

      case "bio.tsx":
        return `import React from 'react';
import { User, MapPin, Calendar, Code, Database, Palette } from 'lucide-react';

interface DeveloperProfile {
  name: string;
  role: string;
  location: string;
  experience: string;
  bio: string;
  skills: Skill[];
  achievements: Achievement[];
}

interface Skill {
  category: string;
  technologies: string[];
  level: number;
}

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
}

const developerProfile: DeveloperProfile = {
  name: "Alex Developer",
  role: "Full Stack Developer & UI/UX Designer",
  location: "San Francisco, CA",
  experience: "5+ years",
  bio: \`I'm a passionate developer who loves creating beautiful, 
        functional applications that solve real-world problems. 
        Started coding at age 16 and never looked back!\`,
  
  skills: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue.js"],
      level: 95
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      level: 90
    },
    {
      category: "DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      level: 85
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      level: 80
    }
  ],

  achievements: [
    {
      title: "AWS Certified Solutions Architect",
      description: "Professional level AWS certification",
      date: "2023",
      icon: "🏆"
    },
    {
      title: "Top 1% Developer on GitHub",
      description: "Ranked in top 1% of developers globally",
      date: "2023", 
      icon: "⭐"
    },
    {
      title: "Tech Lead at StartupXYZ",
      description: "Led team of 8 developers, 300% growth",
      date: "2022-2024",
      icon: "🚀"
    }
  ]
};

const AboutSection: React.FC = () => {
  return (
    <div className="developer-profile">
      <header className="profile-header">
        <div className="avatar-section">
          <div className="avatar">AD</div>
          <div className="status-indicator online" />
        </div>
        
        <div className="profile-info">
          <h1 className="name">{developerProfile.name}</h1>
          <p className="role">{developerProfile.role}</p>
          
          <div className="meta-info">
            <span><MapPin size={16} /> {developerProfile.location}</span>
            <span><Calendar size={16} /> {developerProfile.experience}</span>
            <span className="status">🟢 Available for hire</span>
          </div>
        </div>
      </header>

      <section className="bio-section">
        <h3>💫 About Me</h3>
        <p>{developerProfile.bio}</p>
      </section>

      <section className="skills-section">
        <h3>🛠️ Technical Skills</h3>
        {developerProfile.skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <div className="skill-header">
              <span className="category-name">{skill.category}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-progress">
              <div 
                className="progress-bar" 
                style={{ width: \`\${skill.level}%\` }}
              />
            </div>
            <div className="technologies">
              {skill.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="achievements-section">
        <h3>🏆 Achievements</h3>
        {developerProfile.achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <span className="achievement-icon">{achievement.icon}</span>
            <div className="achievement-content">
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
              <span className="achievement-date">{achievement.date}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutSection;`;

      case "featured.tsx":
        return `import React from 'react';
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planning';
  stats: {
    stars?: number;
    forks?: number;
    users?: number;
  };
  images: string[];
  startDate: string;
  endDate?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "🛒 EcoShop - Sustainable E-commerce Platform",
    description: "Modern e-commerce platform focused on sustainable products",
    longDescription: \`Full-stack e-commerce solution built with Next.js and Node.js.
                     Features include real-time inventory, AI-powered recommendations,
                     and carbon footprint tracking for products.\`,
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    githubUrl: "https://github.com/alexdev/ecoshop",
    liveUrl: "https://ecoshop-demo.vercel.app",
    featured: true,
    status: "completed",
    stats: { stars: 234, forks: 45, users: 1200 },
    images: ["dashboard.png", "product-page.png", "checkout.png"],
    startDate: "2023-08",
    endDate: "2024-01"
  },
  {
    id: 2, 
    title: "📋 DevTask - Project Management for Developers",
    description: "Collaborative project management tool with Git integration",
    longDescription: \`Built specifically for development teams with features like
                     Git branch tracking, code review integration, and automated
                     deployment tracking.\`,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker", "AWS"],
    githubUrl: "https://github.com/alexdev/devtask", 
    liveUrl: "https://devtask.alexdev.com",
    featured: true,
    status: "completed",
    stats: { stars: 189, forks: 32, users: 850 },
    images: ["kanban.png", "timeline.png", "analytics.png"],
    startDate: "2023-03",
    endDate: "2023-07"
  },
  {
    id: 3,
    title: "🤖 AI Code Assistant",
    description: "VS Code extension with AI-powered code suggestions",
    longDescription: \`Intelligent code completion and refactoring suggestions
                     powered by custom-trained language models. Supports 10+
                     programming languages.\`,
    technologies: ["TypeScript", "Python", "OpenAI API", "VS Code API", "TensorFlow"],
    githubUrl: "https://github.com/alexdev/ai-assistant",
    featured: true,
    status: "in-progress", 
    stats: { stars: 456, forks: 67 },
    images: ["autocomplete.png", "refactor.png"],
    startDate: "2024-01"
  },
  {
    id: 4,
    title: "🎨 DesignSync - Designer-Developer Bridge",
    description: "Tool for seamless handoff between design and development",
    longDescription: \`Automatically converts Figma designs to production-ready
                     React components with proper TypeScript interfaces and
                     responsive CSS.\`,
    technologies: ["React", "Figma API", "AST Parsing", "CSS-in-JS", "Playwright"],
    githubUrl: "https://github.com/alexdev/designsync",
    liveUrl: "https://designsync.io",
    featured: true,
    status: "completed",
    stats: { stars: 312, forks: 28, users: 600 },
    images: ["figma-import.png", "code-output.png"],
    startDate: "2022-11",
    endDate: "2023-02"
  }
];

const ProjectsSection: React.FC = () => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '#4ade80';
      case 'in-progress': return '#fbbf24'; 
      case 'planning': return '#60a5fa';
    }
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🚧';
      case 'planning': return '📋';
    }
  };

  return (
    <div className="projects-showcase">
      <header className="section-header">
        <h2>🚀 Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my best work and technical expertise
        </p>
        
        <div className="project-stats">
          <div className="stat-item">
            <span className="stat-number">120+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1.2K</span>
            <span className="stat-label">GitHub Stars</span>
          </div>
        </div>
      </header>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-status">
                <span 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                />
                <span className="status-text">
                  {getStatusIcon(project.status)} {project.status}
                </span>
              </div>
            </div>

            <p className="project-description">{project.description}</p>
            <p className="project-long-description">{project.longDescription}</p>

            <div className="technology-stack">
              <h4>🛠️ Tech Stack</h4>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-stats">
              {project.stats.stars && (
                <div className="stat">
                  <Star size={16} />
                  <span>{project.stats.stars}</span>
                </div>
              )}
              {project.stats.forks && (
                <div className="stat">
                  <Github size={16} />
                  <span>{project.stats.forks}</span>
                </div>
              )}
              {project.stats.users && (
                <div className="stat">
                  <Users size={16} />
                  <span>{project.stats.users}</span>
                </div>
              )}
            </div>

            <div className="project-timeline">
              <Calendar size={16} />
              <span>
                {project.startDate} - {project.endDate || 'Present'}
              </span>
            </div>

            <div className="project-actions">
              {project.githubUrl && (
                <a href={project.githubUrl} className="action-button github">
                  <Github size={16} />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="action-button live">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <footer className="projects-footer">
        <p>🔍 Want to see more projects?</p>
        <a href="https://github.com/alexdev" className="github-link">
          <Github size={20} />
          Visit my GitHub for 50+ more repositories
        </a>
      </footer>
    </div>
  );
};

export default ProjectsSection;`;

      case "info.tsx":
        return `import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter,
  Send, CheckCircle, Coffee, MessageSquare, Calendar
} from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  website: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    nextAvailable: string;
    timezone: string;
  };
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  budget: string;
}

const contactInfo: ContactInfo = {
  email: "alex@alexdev.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "https://alexdev.com",
  social: {
    github: "https://github.com/alexdev",
    linkedin: "https://linkedin.com/in/alexdev",
    twitter: "https://twitter.com/alexdev"
  },
  availability: {
    status: 'available',
    nextAvailable: '2024-02-15',
    timezone: 'PST (UTC-8)'
  }
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', email: '', subject: '', message: '', 
        projectType: '', budget: ''
      });
    }, 3000);
  };

  const getAvailabilityStatus = () => {
    switch (contactInfo.availability.status) {
      case 'available':
        return { color: '#4ade80', text: '🟢 Available for new projects' };
      case 'busy': 
        return { color: '#fbbf24', text: '🟡 Limited availability' };
      case 'unavailable':
        return { color: '#ef4444', text: '🔴 Currently unavailable' };
    }
  };

  const status = getAvailabilityStatus();

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h2>📬 Let's Build Something Amazing Together</h2>
        <p className="contact-subtitle">
          Ready to bring your ideas to life? Let's chat about your next project!
        </p>
        
        <div className="availability-banner">
          <div 
            className="availability-indicator"
            style={{ backgroundColor: status.color }}
          />
          <span>{status.text}</span>
          <span className="next-available">
            Next available: {contactInfo.availability.nextAvailable}
          </span>
        </div>
      </header>

      <div className="contact-content">
        <div className="contact-info-panel">
          <h3>📞 Contact Information</h3>
          
          <div className="contact-methods">
            <div className="contact-method">
              <Mail className="contact-icon" />
              <div>
                <label>Email</label>
                <a href={\`mailto:\${contactInfo.email}\`}>
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <Phone className="contact-icon" />
              <div>
                <label>Phone</label>
                <a href={\`tel:\${contactInfo.phone}\`}>
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="contact-method">
              <MapPin className="contact-icon" />
              <div>
                <label>Location</label>
                <span>{contactInfo.location}</span>
              </div>
            </div>

            <div className="contact-method">
              <Globe className="contact-icon" />
              <div>
                <label>Website</label>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>🌐 Find me online</h4>
            <div className="social-grid">
              <a href={contactInfo.social.github} className="social-link github">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={contactInfo.social.linkedin} className="social-link linkedin">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={contactInfo.social.twitter} className="social-link twitter">
                <Twitter size={20} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <div className="quick-facts">
            <h4>⚡ Quick Facts</h4>
            <ul>
              <li>🕐 Timezone: {contactInfo.availability.timezone}</li>
              <li>💬 Response time: Usually within 24 hours</li>
              <li>☕ Best time to call: 9 AM - 6 PM PST</li>
              <li>🎯 Available for: Full-time, Contract, Consulting</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3>✉️ Send me a message</h3>
            
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h4>Message sent successfully! 🎉</h4>
                <p>Thanks for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select project type</option>
                      <option value="web-app">Web Application</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k+">$50K+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-section">
            <Coffee size={20} />
            <p>Prefer to meet in person? Let's grab coffee in SF!</p>
          </div>
          <div className="footer-section">
            <MessageSquare size={20} />
            <p>For quick questions, feel free to DM me on social media</p>
          </div>
          <div className="footer-section">
            <Calendar size={20} />
            <p>Want to schedule a call? 
              <a href="https://calendly.com/alexdev" target="_blank" rel="noopener noreferrer">
                Book a meeting
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;`;

      case "skills.json":
        return `{
  "technicalSkills": {
    "frontend": {
      "frameworks": ["React", "Next.js", "Vue.js", "Angular"],
      "languages": ["TypeScript", "JavaScript", "HTML5", "CSS3"],
      "styling": ["TailwindCSS", "Styled Components", "SASS", "CSS Modules"],
      "stateManagement": ["Redux", "Zustand", "Context API", "MobX"],
      "proficiency": 95
    },
    "backend": {
      "languages": ["Node.js", "Python", "Go", "Java"],
      "frameworks": ["Express.js", "Fastify", "Django", "FastAPI"],
      "databases": ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
      "orm": ["Prisma", "TypeORM", "Mongoose", "Sequelize"],
      "proficiency": 90
    },
    "devops": {
      "cloud": ["AWS", "Google Cloud", "Azure", "Vercel"],
      "containers": ["Docker", "Kubernetes", "Docker Compose"],
      "cicd": ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
      "monitoring": ["Datadog", "New Relic", "Sentry", "LogRocket"],
      "proficiency": 85
    },
    "mobile": {
      "frameworks": ["React Native", "Expo", "Flutter"],
      "platforms": ["iOS", "Android", "PWA"],
      "tools": ["Xcode", "Android Studio", "TestFlight"],
      "proficiency": 75
    }
  },
  "softSkills": [
    {
      "skill": "Team Leadership",
      "description": "Led teams of 5-10 developers",
      "level": 90
    },
    {
      "skill": "Project Management", 
      "description": "Agile, Scrum, Kanban methodologies",
      "level": 85
    },
    {
      "skill": "Communication",
      "description": "Technical writing, presentations, client relations",
      "level": 95
    },
    {
      "skill": "Problem Solving",
      "description": "Complex debugging, architecture design",
      "level": 92
    }
  ],
  "certifications": [
    {
      "name": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "date": "2023-08",
      "credentialId": "AWS-SA-12345"
    },
    {
      "name": "Google Cloud Professional Developer",
      "issuer": "Google Cloud",
      "date": "2023-05",
      "credentialId": "GCP-PD-67890"
    },
    {
      "name": "Meta React Developer Professional",
      "issuer": "Meta",
      "date": "2022-12",
      "credentialId": "META-RD-54321"
    }
  ],
  "languages": [
    { "language": "English", "fluency": "Native" },
    { "language": "Spanish", "fluency": "Conversational" },
    { "language": "Mandarin", "fluency": "Basic" }
  ],
  "interests": [
    "Open Source Contributions",
    "Tech Blogging",
    "Mentoring Developers", 
    "AI/ML Research",
    "Photography",
    "Rock Climbing"
  ]
}`;

      default:
        return "// Select a file from the explorer to view its contents";
    }
  };

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results: Array<{
      file: string;
      line: number;
      content: string;
      match: string;
    }> = [];

    const searchableFiles = [
      { name: "README.md", content: getFileContentByName("README.md") },
      { name: "bio.tsx", content: getFileContentByName("bio.tsx") },
      { name: "featured.tsx", content: getFileContentByName("featured.tsx") },
      { name: "info.tsx", content: getFileContentByName("info.tsx") },
      { name: "skills.json", content: getFileContentByName("skills.json") },
    ];

    searchableFiles.forEach((file) => {
      const lines = file.content.split("\n");
      lines.forEach((line, index) => {
        if (line.toLowerCase().includes(query.toLowerCase())) {
          const matchIndex = line.toLowerCase().indexOf(query.toLowerCase());
          const beforeMatch = line.substring(0, matchIndex);
          const match = line.substring(matchIndex, matchIndex + query.length);
          const afterMatch = line.substring(matchIndex + query.length);

          results.push({
            file: file.name,
            line: index + 1,
            content: line,
            match: beforeMatch + "**" + match + "**" + afterMatch,
          });
        }
      });
    });

    setSearchResults(results);
  };

  const getFileContentByName = (fileName: string): string => {
    switch (fileName) {
      case "README.md":
        return `# 🚀 Alex Developer - Full Stack Developer Portfolio

Welcome to my interactive code-style portfolio! 

## 👨‍💻 About Me
I'm a passionate Full Stack Developer with 5+ years of experience building 
scalable web applications and beautiful user interfaces.

## 🛠️ Tech Stack
- **Frontend**: React, Next.js, TypeScript, TailwindCSS
- **Backend**: Node.js, Python, PostgreSQL, MongoDB
- **Cloud**: AWS, Docker, Kubernetes
- **Tools**: Git, VS Code, Figma, Jira

## 📊 Portfolio Stats
- ✅ 120+ Projects Completed
- 🎯 50+ Happy Clients  
- ⭐ 1.2K GitHub Stars
- ☕ Infinite Coffee Consumed

## 🗂️ Portfolio Structure
\`\`\`
portfolio/
├── src/
│   ├── about/          # Personal info & skills
│   ├── projects/       # Featured work & gallery
│   └── contact/        # Get in touch
├── README.md           # You are here!
└── package.json        # Dependencies
\`\`\`

## 🎯 Quick Navigation
Click on the files in the explorer to browse different sections:
- **about/bio.tsx** - Personal background & story
- **projects/featured.tsx** - Featured projects & demos
- **contact/info.tsx** - Contact information & form

---
*Built with ❤️ and lots of ☕ by Alex Developer*`;

      case "bio.tsx":
        return `import React from 'react';
import { User, MapPin, Calendar, Code, Database, Palette } from 'lucide-react';

interface DeveloperProfile {
  name: string;
  role: string;
  location: string;
  experience: string;
  bio: string;
  skills: Skill[];
  achievements: Achievement[];
}

const developerProfile: DeveloperProfile = {
  name: "Alex Developer",
  role: "Full Stack Developer & UI/UX Designer",
  location: "San Francisco, CA",
  experience: "5+ years",
  bio: "I'm a passionate developer who loves creating beautiful, functional applications that solve real-world problems.",
  
  skills: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vue.js"],
      level: 95
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      level: 90
    }
  ]
};`;

      case "featured.tsx":
        return `import React from 'react';
import { ExternalLink, Github, Star, Users, Calendar } from 'lucide-react';

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "🛒 EcoShop - Sustainable E-commerce Platform",
    description: "Modern e-commerce platform focused on sustainable products",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    githubUrl: "https://github.com/alexdev/ecoshop",
    liveUrl: "https://ecoshop-demo.vercel.app",
    featured: true,
    status: "completed"
  },
  {
    id: 2, 
    title: "📋 DevTask - Project Management for Developers",
    description: "Collaborative project management tool with Git integration",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Docker", "AWS"],
    githubUrl: "https://github.com/alexdev/devtask", 
    liveUrl: "https://devtask.alexdev.com",
    featured: true,
    status: "completed"
  }
];`;

      case "info.tsx":
        return `import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter,
  Send, CheckCircle, Coffee, MessageSquare, Calendar
} from 'lucide-react';

const contactInfo: ContactInfo = {
  email: "alex@alexdev.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  website: "https://alexdev.com",
  social: {
    github: "https://github.com/alexdev",
    linkedin: "https://linkedin.com/in/alexdev",
    twitter: "https://twitter.com/alexdev"
  }
};`;

      case "skills.json":
        return `{
  "technicalSkills": {
    "frontend": {
      "frameworks": ["React", "Next.js", "Vue.js", "Angular"],
      "languages": ["TypeScript", "JavaScript", "HTML5", "CSS3"],
      "styling": ["TailwindCSS", "Styled Components", "SASS", "CSS Modules"],
      "proficiency": 95
    },
    "backend": {
      "languages": ["Node.js", "Python", "Go", "Java"],
      "frameworks": ["Express.js", "Fastify", "Django", "FastAPI"],
      "databases": ["PostgreSQL", "MongoDB", "Redis", "SQLite"],
      "proficiency": 90
    }
  }
}`;

      default:
        return "";
    }
  };

  const handleSearchResultClick = (result: any) => {
    openTab(result.file);
    setActivePanel("explorer");
    setCurrentLine(result.line);
  };

  const openTab = (fileName: string) => {
    if (!openTabs.includes(fileName)) {
      setOpenTabs([...openTabs, fileName]);
    }
    setActiveTab(fileName);
  };

  const closeTab = (fileName: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    const newTabs = openTabs.filter((tab) => tab !== fileName);
    setOpenTabs(newTabs);

    // If we closed the active tab, switch to another tab
    if (activeTab === fileName) {
      const currentIndex = openTabs.indexOf(fileName);
      if (newTabs.length > 0) {
        // Switch to the tab to the right, or left if we're at the end
        const nextIndex = currentIndex < newTabs.length ? currentIndex : currentIndex - 1;
        setActiveTab(newTabs[nextIndex]);
      } else {
        // If no tabs left, set activeTab to empty string to show welcome
        setActiveTab("");
      }
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case "w":
            e.preventDefault();
            if (openTabs.length > 0 && activeTab) {
              closeTab(activeTab);
            }
            break;
          case "Tab":
            e.preventDefault();
            if (openTabs.length > 1) {
              const currentIndex = openTabs.indexOf(activeTab);
              const nextIndex = e.shiftKey ? (currentIndex - 1 + openTabs.length) % openTabs.length : (currentIndex + 1) % openTabs.length;
              setActiveTab(openTabs[nextIndex]);
            }
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openTabs, activeTab]);

  if (!mounted) return null;

  return (
    <div className="editor-layout">
      {/* Activity Bar */}
      <div className="activity-bar">
        <div className={`activity-bar-item ${activePanel === "explorer" ? "active" : ""}`} onClick={() => setActivePanel("explorer")}>
          <Files className="w-5 h-5" />
        </div>
        <div className={`activity-bar-item ${activePanel === "search" ? "active" : ""}`} onClick={() => setActivePanel("search")}>
          <Search className="w-5 h-5" />
        </div>
        <div className={`activity-bar-item ${activePanel === "git" ? "active" : ""}`} onClick={() => setActivePanel("git")}>
          <GitBranch className="w-5 h-5" />
        </div>
        <div className={`activity-bar-item ${activePanel === "extensions" ? "active" : ""}`} onClick={() => setActivePanel("extensions")}>
          <Package className="w-5 h-5" />
        </div>
        <div className="mt-auto">
          <div className="activity-bar-item">
            <User className="w-5 h-5" />
          </div>
          <div className="activity-bar-item">
            <Settings className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          {activePanel === "explorer" && "🗂️ PORTFOLIO EXPLORER"}
          {activePanel === "search" && "🔍 SEARCH"}
          {activePanel === "git" && "📋 SOURCE CONTROL"}
          {activePanel === "extensions" && "🧩 EXTENSIONS"}
        </div>

        <div className="sidebar-content">
          {activePanel === "explorer" && (
            <div>
              <div className="text-xs font-semibold text-gray-400 mb-2 px-2">ALEX DEVELOPER</div>
              {renderFileTree(fileStructure)}
            </div>
          )}

          {activePanel === "search" && (
            <div>
              <div className="search-panel">
                <input
                  type="text"
                  placeholder="Search portfolio..."
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    performSearch(e.target.value);
                  }}
                />
              </div>

              {searchQuery ? (
                <div className="search-results">
                  <div className="p-3 border-b border-gray-600">
                    <span className="text-xs text-gray-400">
                      {searchResults.length} results in {new Set(searchResults.map((r) => r.file)).size} files
                    </span>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="search-results-list">
                      {searchResults.map((result, index) => (
                        <div key={index} className="search-result-item" onClick={() => handleSearchResultClick(result)}>
                          <div className="search-result-header">
                            <span className="search-result-file">{result.file}</span>
                            <span className="search-result-line">:{result.line}</span>
                          </div>
                          <div className="search-result-content">{result.content.trim()}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-sm text-gray-400">
                      <p>No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 text-sm text-gray-400">
                  <p>🔍 Search across all portfolio sections</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Projects and technologies</li>
                    <li>• Skills and experience</li>
                    <li>• Contact information</li>
                    <li>• Code examples</li>
                  </ul>
                  <div className="mt-4 text-xs">
                    <p>
                      <strong>Tips:</strong>
                    </p>
                    <ul className="mt-1 space-y-1">
                      <li>• Search is case-insensitive</li>
                      <li>• Click results to jump to file</li>
                      <li>• Search across all file types</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {activePanel === "git" && (
            <div className="p-4">
              <div className="text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4" />
                  <span>main</span>
                </div>
                <div className="text-green-400">✓ Portfolio is up to date</div>
              </div>
              <div className="text-xs">
                <p className="mb-2">📝 Recent updates:</p>
                <div className="space-y-1">
                  <div>• Added new featured projects</div>
                  <div>• Updated contact information</div>
                  <div>• Enhanced about section</div>
                  <div>• Improved mobile responsiveness</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Editor */}
      <div className="editor-main">
        {/* Tab Bar */}
        <div className="tab-bar">
          {openTabs.length === 0 ? (
            <div className="tab active">
              <FileText className="w-4 h-4 file-icon md" />
              <span>Welcome</span>
            </div>
          ) : (
            tabs.map((tab) => (
              <div key={tab.name} className={`tab ${tab.active ? "active" : ""}`} onClick={() => setActiveTab(tab.name)}>
                <FileText className={`w-4 h-4 file-icon ${tab.icon}`} />
                <span>{tab.name}</span>
                <div className="tab-close" onClick={(e) => closeTab(tab.name, e)}>
                  <X className="w-3 h-3" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <Folder className="w-3 h-3" />
            <span>portfolio</span>
          </div>
          {openTabs.length > 0 && (
            <>
              <div className="breadcrumb-separator">›</div>
              <div className="breadcrumb-item">
                <span>{activeTab}</span>
              </div>
            </>
          )}
        </div>

        {/* Editor Content */}
        <div className="editor-content">
          <div className="line-numbers">
            {getFileContent()
              .split("\n")
              .map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
          </div>
          <div className="code-content">
            <pre className="font-mono text-sm leading-6">
              <code
                dangerouslySetInnerHTML={{
                  __html: getFileContent()
                    .replace(
                      /\b(import|export|from|interface|const|let|var|function|class|extends|implements)\b/g,
                      '<span class="syntax-keyword">$1</span>'
                    )
                    .replace(/\b(React|useState|useEffect|string|number|boolean)\b/g, '<span class="syntax-class">$1</span>')
                    .replace(/"([^"]+)"/g, '<span class="syntax-string">"$1"</span>')
                    .replace(/'([^']+)'/g, "<span class=\"syntax-string\">'$1'</span>")
                    .replace(/\`([^`]+)\`/g, '<span class="syntax-string">`$1`</span>')
                    .replace(/\b(\d+)\b/g, '<span class="syntax-number">$1</span>')
                    .replace(/\/\*[\s\S]*?\*\//g, '<span class="syntax-comment">$&</span>')
                    .replace(/\/\/.*$/gm, '<span class="syntax-comment">$&</span>')
                    .replace(/^(#{1,6})\s(.+)$/gm, '<span class="syntax-keyword">$1</span> <span class="syntax-class">$2</span>')
                    .replace(/\*\*([^*]+)\*\*/g, '<span class="syntax-function">**$1**</span>')
                    .replace(/\*([^*]+)\*/g, '<span class="syntax-variable">*$1*</span>')
                    .replace(/\b(map|filter|reduce|forEach|onClick|onChange|onSubmit)\b/g, '<span class="syntax-function">$1</span>'),
                }}
              />
            </pre>
          </div>
        </div>

        {/* Terminal */}
        <div className="terminal">
          <div className="terminal-header">
            <Terminal className="w-4 h-4 mr-2" />
            <span>Terminal - Portfolio Server</span>
            <div className="ml-auto flex gap-2">
              <Play className="w-3 h-3 cursor-pointer hover:text-white" />
              <X className="w-3 h-3 cursor-pointer hover:text-white" />
            </div>
          </div>
          <div className="terminal-content">
            <div className="code-terminal-output">
              {terminalOutput.map((line, index) => (
                <div key={index} className="terminal-line">
                  {line && typeof line === "string" && line.startsWith("$") ? (
                    <>
                      <span className="terminal-prompt">alexdev@portfolio:~</span>
                      <span className="terminal-command">{line.substring(1).trim()}</span>
                    </>
                  ) : (
                    <span
                      className={`terminal-text ${
                        line && line.includes("✓") ? "terminal-success" : line && line.includes("error") ? "terminal-error" : ""
                      }`}
                    >
                      {line || ""}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="terminal-line">
              <span className="terminal-prompt">alexdev@portfolio:~</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <div className="flex items-center gap-4">
          <div className="status-item">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>
          <div className="status-item">
            <span>
              {openTabs.length === 0
                ? "Welcome"
                : activeTab.endsWith(".tsx")
                ? "TypeScript React"
                : activeTab.endsWith(".json")
                ? "JSON"
                : activeTab.endsWith(".md")
                ? "Markdown"
                : "Text"}
            </span>
          </div>
          <div className="status-item">
            <span>UTF-8</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="status-item">
            <span>Ln {currentLine}, Col 1</span>
          </div>
          <div className="status-item">
            <span>100%</span>
          </div>
          <div className="status-item">
            <Zap className="w-3 h-3" />
            <span>Live Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
}
