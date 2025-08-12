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
  const [activeExtensionTab, setActiveExtensionTab] = useState("Installed");
  const [extensionSearchQuery, setExtensionSearchQuery] = useState("");
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
        return getFileContentByName("README.md");

      case "bio.tsx":
        return getFileContentByName("bio.tsx");

      case "featured.tsx":
        return getFileContentByName("featured.tsx");

      case "info.tsx":
        return getFileContentByName("info.tsx");

      case "skills.json":
        return getFileContentByName("skills.json");

      case "gallery.tsx":
        return getFileContentByName("gallery.tsx");

      case "tech-stack.json":
        return getFileContentByName("tech-stack.json");

      case "form.tsx":
        return getFileContentByName("form.tsx");

      case "social.json":
        return getFileContentByName("social.json");

      case "package.json":
        return getFileContentByName("package.json");

      case ".gitignore":
        return getFileContentByName(".gitignore");

      case "experience.ts":
        return getFileContentByName("experience.ts");

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
      { name: "gallery.tsx", content: getFileContentByName("gallery.tsx") },
      { name: "tech-stack.json", content: getFileContentByName("tech-stack.json") },
      { name: "form.tsx", content: getFileContentByName("form.tsx") },
      { name: "social.json", content: getFileContentByName("social.json") },
      { name: "package.json", content: getFileContentByName("package.json") },
      { name: ".gitignore", content: getFileContentByName(".gitignore") },
      { name: "experience.ts", content: getFileContentByName("experience.ts") },
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

      case "gallery.tsx":
        return `import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Eye, Heart } from 'lucide-react';

interface GalleryProject {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  likes: number;
  views: number;
}

const galleryProjects: GalleryProject[] = [
  {
    id: 1,
    title: "🌟 Personal Blog Platform",
    description: "Custom CMS with markdown support and real-time comments",
    category: "Web Development",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    imageUrl: "/projects/blog-platform.png",
    githubUrl: "https://github.com/alexdev/blog-platform",
    liveUrl: "https://blog.alexdev.com",
    date: "2023-12",
    likes: 47,
    views: 892
  },
  {
    id: 2,
    title: "📱 Mobile Expense Tracker",
    description: "React Native app with offline sync and budget analytics",
    category: "Mobile App",
    technologies: ["React Native", "SQLite", "Redux", "Chart.js"],
    imageUrl: "/projects/expense-tracker.png",
    githubUrl: "https://github.com/alexdev/expense-tracker",
    date: "2023-11",
    likes: 34,
    views: 654
  },
  {
    id: 3,
    title: "🎮 Game Score API",
    description: "RESTful API for game leaderboards with real-time updates",
    category: "Backend",
    technologies: ["Node.js", "Express", "Socket.io", "MongoDB"],
    imageUrl: "/projects/game-api.png",
    githubUrl: "https://github.com/alexdev/game-score-api",
    liveUrl: "https://api.games.alexdev.com",
    date: "2023-10",
    likes: 28,
    views: 432
  },
  {
    id: 4,
    title: "🔐 Password Manager",
    description: "Secure password storage with encryption and 2FA",
    category: "Security",
    technologies: ["Vue.js", "Electron", "AES-256", "WebAuthn"],
    imageUrl: "/projects/password-manager.png",
    githubUrl: "https://github.com/alexdev/secure-vault",
    date: "2023-09",
    likes: 89,
    views: 1247
  },
  {
    id: 5,
    title: "☁️ Cloud Storage Dashboard",
    description: "Multi-provider cloud storage management interface",
    category: "Cloud Services",
    technologies: ["React", "AWS SDK", "Google Cloud", "Dropbox API"],
    imageUrl: "/projects/cloud-dashboard.png",
    githubUrl: "https://github.com/alexdev/cloud-manager",
    date: "2023-08",
    likes: 52,
    views: 723
  },
  {
    id: 6,
    title: "🤖 Chat Bot Framework",
    description: "Flexible chatbot framework with NLP integration",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "spaCy", "FastAPI"],
    imageUrl: "/projects/chatbot.png",
    githubUrl: "https://github.com/alexdev/chatbot-framework",
    date: "2023-07",
    likes: 76,
    views: 1089
  }
];

const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  
  const categories = ["All", "Web Development", "Mobile App", "Backend", "Security", "Cloud Services", "AI/ML"];
  
  const filteredProjects = galleryProjects
    .filter(project => selectedCategory === "All" || project.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "views") return b.views - a.views;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return (
    <div className="project-gallery">
      <header className="gallery-header">
        <h2>🎨 Project Gallery</h2>
        <p className="gallery-subtitle">
          Explore my diverse collection of projects and experiments
        </p>
        
        <div className="gallery-controls">
          <div className="category-filter">
            <label>Filter by category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="sort-control">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Latest</option>
              <option value="likes">Most Liked</option>
              <option value="views">Most Viewed</option>
            </select>
          </div>
        </div>
      </header>

      <div className="gallery-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="gallery-card">
            <div className="card-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="card-overlay">
                <div className="card-actions">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="action-btn github">
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="action-btn live">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <h3>{project.title}</h3>
                <span className="category-tag">
                  <Tag size={12} />
                  {project.category}
                </span>
              </div>
              
              <p className="card-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="card-footer">
                <div className="card-stats">
                  <span className="stat">
                    <Heart size={14} />
                    {project.likes}
                  </span>
                  <span className="stat">
                    <Eye size={14} />
                    {project.views}
                  </span>
                </div>
                <div className="card-date">
                  <Calendar size={12} />
                  {project.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="gallery-footer">
        <p>💡 These projects represent continuous learning and experimentation</p>
        <p>🚀 Each project taught me something new and pushed my boundaries</p>
      </div>
    </div>
  );
};

export default ProjectGallery;`;

      case "tech-stack.json":
        return `{
  "frontend": {
    "frameworks": {
      "React": {
        "version": "18.2.0",
        "experience": "3+ years",
        "proficiency": 95,
        "projects": ["EcoShop", "DevTask", "DesignSync"],
        "ecosystem": ["Next.js", "Gatsby", "Create React App"]
      },
      "Next.js": {
        "version": "14.0.0",
        "experience": "2+ years", 
        "proficiency": 90,
        "projects": ["EcoShop", "Blog Platform"],
        "features": ["App Router", "Server Components", "SSR", "ISR"]
      },
      "Vue.js": {
        "version": "3.3.0",
        "experience": "1+ year",
        "proficiency": 75,
        "projects": ["Password Manager", "Dashboard"],
        "ecosystem": ["Nuxt.js", "Vuex", "Vue Router"]
      }
    },
    "languages": {
      "TypeScript": {
        "version": "5.0.0",
        "experience": "2+ years",
        "proficiency": 88,
        "usage": "Primary language for all new projects"
      },
      "JavaScript": {
        "version": "ES2023",
        "experience": "5+ years",
        "proficiency": 95,
        "usage": "Legacy projects and rapid prototyping"
      }
    },
    "styling": {
      "TailwindCSS": {
        "version": "3.3.0",
        "experience": "2+ years",
        "proficiency": 92,
        "projects": ["EcoShop", "DevTask", "Portfolio"]
      },
      "Styled Components": {
        "version": "6.0.0",
        "experience": "1+ year",
        "proficiency": 80,
        "usage": "Component-scoped styling"
      },
      "SASS/SCSS": {
        "version": "1.69.0",
        "experience": "3+ years",
        "proficiency": 85,
        "usage": "Complex UI libraries"
      }
    }
  },
  "backend": {
    "runtime": {
      "Node.js": {
        "version": "20.10.0",
        "experience": "4+ years",
        "proficiency": 90,
        "projects": ["EcoShop API", "DevTask Backend", "Game Score API"]
      },
      "Python": {
        "version": "3.11.0",
        "experience": "3+ years",
        "proficiency": 85,
        "projects": ["AI Code Assistant", "Chat Bot Framework"]
      }
    },
    "frameworks": {
      "Express.js": {
        "version": "4.18.0",
        "experience": "4+ years",
        "proficiency": 92,
        "usage": "Primary Node.js framework"
      },
      "Fastify": {
        "version": "4.24.0",
        "experience": "1+ year",
        "proficiency": 78,
        "usage": "High-performance APIs"
      },
      "FastAPI": {
        "version": "0.104.0",
        "experience": "2+ years",
        "proficiency": 82,
        "usage": "Python REST APIs"
      }
    },
    "databases": {
      "PostgreSQL": {
        "version": "15.0",
        "experience": "3+ years",
        "proficiency": 88,
        "usage": "Primary relational database"
      },
      "MongoDB": {
        "version": "7.0.0",
        "experience": "2+ years",
        "proficiency": 82,
        "usage": "Document-based storage"
      },
      "Redis": {
        "version": "7.2.0",
        "experience": "2+ years",
        "proficiency": 80,
        "usage": "Caching and session storage"
      }
    }
  },
  "mobile": {
    "React Native": {
      "version": "0.72.0",
      "experience": "1+ year",
      "proficiency": 75,
      "projects": ["Expense Tracker", "Social Media App"]
    },
    "Expo": {
      "version": "49.0.0",
      "experience": "1+ year",
      "proficiency": 70,
      "usage": "Rapid mobile prototyping"
    }
  },
  "devops": {
    "containerization": {
      "Docker": {
        "version": "24.0.0",
        "experience": "2+ years",
        "proficiency": 85,
        "usage": "All production deployments"
      },
      "Kubernetes": {
        "version": "1.28.0",
        "experience": "1+ year",
        "proficiency": 70,
        "usage": "Container orchestration"
      }
    },
    "cloud": {
      "AWS": {
        "services": ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
        "experience": "2+ years",
        "proficiency": 82,
        "certifications": ["Solutions Architect Associate"]
      },
      "Vercel": {
        "experience": "2+ years",
        "proficiency": 90,
        "usage": "Frontend deployments"
      },
      "Railway": {
        "experience": "1+ year",
        "proficiency": 75,
        "usage": "Backend deployments"
      }
    }
  },
  "tools": {
    "version_control": {
      "Git": {
        "experience": "5+ years",
        "proficiency": 95,
        "workflow": "GitFlow, GitHub Flow"
      },
      "GitHub": {
        "experience": "5+ years",
        "proficiency": 90,
        "features": ["Actions", "Packages", "Codespaces"]
      }
    },
    "development": {
      "VS Code": {
        "experience": "5+ years",
        "proficiency": 95,
        "extensions": ["GitLens", "Prettier", "ESLint", "Thunder Client"]
      },
      "JetBrains": {
        "experience": "2+ years",
        "proficiency": 80,
        "IDEs": ["WebStorm", "PyCharm"]
      }
    },
    "design": {
      "Figma": {
        "experience": "2+ years",
        "proficiency": 85,
        "usage": "UI/UX design and prototyping"
      },
      "Adobe XD": {
        "experience": "1+ year",
        "proficiency": 70,
        "usage": "Design systems"
      }
    }
  },
  "testing": {
    "unit": ["Jest", "Vitest", "pytest"],
    "integration": ["Cypress", "Playwright"],
    "load": ["k6", "Artillery"]
  },
  "monitoring": {
    "error_tracking": ["Sentry", "Bugsnag"],
    "analytics": ["Google Analytics", "Mixpanel"],
    "performance": ["Lighthouse", "Web Vitals"]
  }
}`;

      case "form.tsx":
        return `import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Clock, User, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
  budget: string;
  timeline: string;
  hearAbout: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: '',
    hearAbout: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success/error for demo
      const success = Math.random() > 0.2; // 80% success rate
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: '',
          budget: '',
          timeline: '',
          hearAbout: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'backend-api', label: 'Backend/API' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select budget range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'discuss', label: 'Let\\'s discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select timeline' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h2>📝 Let's Work Together</h2>
        <p>Ready to bring your ideas to life? Fill out the form below and I'll get back to you within 24 hours.</p>
      </div>

      {submitStatus === 'success' && (
        <div className="success-banner">
          <CheckCircle className="success-icon" />
          <div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="error-banner">
          <AlertCircle className="error-icon" />
          <div>
            <h3>Something went wrong</h3>
            <p>Please try again or contact me directly at alex@alexdev.com</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              <User size={16} />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <Mail size={16} />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">
            <MessageSquare size={16} />
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={errors.subject ? 'error' : ''}
            placeholder="Brief description of your project"
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectType">Project Type *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className={errors.projectType ? 'error' : ''}
            >
              {projectTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
            {errors.projectType && <span className="error-message">{errors.projectType}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
            >
              {budgetRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="timeline">
              <Clock size={16} />
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
            >
              {timelineOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="hearAbout">How did you hear about me?</label>
            <select
              id="hearAbout"
              name="hearAbout"
              value={formData.hearAbout}
              onChange={handleInputChange}
            >
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="github">GitHub</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={errors.message ? 'error' : ''}
            placeholder="Tell me about your project, goals, and any specific requirements..."
            rows={6}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
          <div className="character-count">
            {formData.message.length}/1000 characters
          </div>
        </div>

        <div className="form-actions">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
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
        </div>
      </form>

      <div className="form-footer">
        <p>🔒 Your information is secure and will never be shared with third parties.</p>
        <p>⚡ Average response time: 4-6 hours during business days</p>
      </div>
    </div>
  );
};

export default ContactForm;`;

      case "social.json":
        return `{
  "platforms": {
    "github": {
      "url": "https://github.com/alexdev",
      "handle": "@alexdev",
      "followers": 1247,
      "following": 234,
      "publicRepos": 87,
      "gists": 23,
      "stars": 2134,
      "contributionStreak": 287,
      "topLanguages": ["TypeScript", "Python", "JavaScript"],
      "mostStarredRepo": "ecoshop",
      "verified": true,
      "proPlan": true
    },
    "linkedin": {
      "url": "https://linkedin.com/in/alexdev",
      "handle": "alexdev",
      "connections": 892,
      "followers": 1534,
      "posts": 47,
      "articles": 12,
      "recommendations": 23,
      "skills": ["React", "Node.js", "TypeScript", "AWS", "Python"],
      "endorsements": 234,
      "verified": true,
      "premiumMember": true
    },
    "twitter": {
      "url": "https://twitter.com/alexdev",
      "handle": "@alexdev",
      "followers": 2847,
      "following": 456,
      "tweets": 1247,
      "likes": 3421,
      "lists": 12,
      "moments": 5,
      "verified": true,
      "topics": ["WebDev", "React", "TypeScript", "StartupLife"]
    },
    "stackoverflow": {
      "url": "https://stackoverflow.com/users/123456/alexdev",
      "handle": "alexdev",
      "reputation": 8947,
      "badges": {
        "gold": 3,
        "silver": 12,
        "bronze": 47
      },
      "answers": 234,
      "questions": 67,
      "tags": ["reactjs", "nodejs", "typescript", "javascript"],
      "topAnswer": "How to optimize React performance",
      "yearlyStats": {
        "2023": {
          "reputation": 2847,
          "answers": 89,
          "questions": 23
        }
      }
    },
    "dribbble": {
      "url": "https://dribbble.com/alexdev",
      "handle": "alexdev",
      "followers": 567,
      "following": 234,
      "shots": 34,
      "likes": 1247,
      "collections": 12,
      "proPlan": true,
      "tags": ["UI", "UX", "Web Design", "Mobile Design"]
    },
    "behance": {
      "url": "https://behance.net/alexdev",
      "handle": "alexdev",
      "followers": 423,
      "following": 156,
      "projects": 18,
      "appreciations": 2341,
      "views": 45672,
      "featured": ["EcoShop UI", "DevTask Interface", "Mobile App Redesign"]
    },
    "medium": {
      "url": "https://medium.com/@alexdev",
      "handle": "@alexdev",
      "followers": 1834,
      "following": 267,
      "articles": 23,
      "responses": 89,
      "claps": 4567,
      "topStories": [
        "Building Scalable React Applications",
        "The Future of Web Development",
        "TypeScript Best Practices"
      ],
      "publications": ["JavaScript Weekly", "React Developers"]
    },
    "youtube": {
      "url": "https://youtube.com/c/alexdev",
      "handle": "AlexDev",
      "subscribers": 12400,
      "videos": 47,
      "views": 234567,
      "likes": 8945,
      "uploads": "Weekly coding tutorials",
      "playlists": ["React Masterclass", "TypeScript Fundamentals", "Project Builds"],
      "verified": true,
      "monetized": true
    },
    "twitch": {
      "url": "https://twitch.tv/alexdev",
      "handle": "alexdev",
      "followers": 3456,
      "following": 89,
      "totalViews": 156789,
      "schedule": "Tuesdays & Thursdays 7PM PST",
      "categories": ["Just Chatting", "Software Development"],
      "partner": true,
      "avgViewers": 234
    }
  },
  "analytics": {
    "totalFollowers": 25442,
    "totalEngagement": 67834,
    "growthRate": "+15.7%",
    "mostActiveHours": "2PM-6PM PST",
    "topPerformingContent": "Technical tutorials",
    "engagement": {
      "github": 8.7,
      "linkedin": 12.3,
      "twitter": 5.8,
      "medium": 9.2,
      "youtube": 15.4
    }
  },
  "content": {
    "blogging": {
      "frequency": "Weekly",
      "topics": ["React", "TypeScript", "Web Performance", "Career Advice"],
      "avgReadTime": "8 minutes",
      "engagement": "High"
    },
    "streaming": {
      "frequency": "Bi-weekly",
      "focus": "Live coding sessions",
      "avgDuration": "3 hours",
      "recurring": "Project builds and Q&A"
    },
    "tutorials": {
      "format": "Video + Written",
      "skill_level": "Beginner to Advanced",
      "completion_rate": "78%",
      "series": ["React Fundamentals", "Full Stack Development"]
    }
  },
  "community": {
    "discord": {
      "server": "AlexDev Community",
      "members": 2847,
      "channels": 12,
      "active": true,
      "moderated": true
    },
    "slack": {
      "workspaces": ["React Developers", "TypeScript Community", "Startup Founders"],
      "contributions": "Regular helper and mentor"
    },
    "reddit": {
      "karma": 8947,
      "subreddits": ["reactjs", "webdev", "typescript", "programming"],
      "contributions": "Weekly helpful posts and comments"
    }
  }
}`;

      case "package.json":
        return `{
  "name": "alex-developer-portfolio",
  "version": "2.1.0",
  "private": true,
  "description": "Interactive VS Code-style portfolio showcasing Alex Developer's work and skills",
  "author": {
    "name": "Alex Developer",
    "email": "alex@alexdev.com",
    "url": "https://alexdev.com"
  },
  "homepage": "https://portfolio.alexdev.com",
  "repository": {
    "type": "git",
    "url": "https://github.com/alexdev/portfolio.git"
  },
  "bugs": {
    "url": "https://github.com/alexdev/portfolio/issues"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "e2e": "cypress open",
    "e2e:headless": "cypress run",
    "analyze": "ANALYZE=true npm run build",
    "clean": "rm -rf .next out",
    "export": "next build && next export",
    "lighthouse": "lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html"
  },
  "dependencies": {
    "next": "14.0.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "lucide-react": "^0.294.0",
    "framer-motion": "^10.16.5",
    "clsx": "^2.0.0",
    "tailwindcss": "^3.3.6",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.42",
    "@types/react-dom": "^18.2.17",
    "@typescript-eslint/eslint-plugin": "^6.13.1",
    "@typescript-eslint/parser": "^6.13.1",
    "eslint": "^8.54.0",
    "eslint-config-next": "14.0.3",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.1",
    "typescript": "^5.3.2",
    "prettier": "^3.1.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "cypress": "^13.6.0",
    "@next/bundle-analyzer": "^14.0.3",
    "lighthouse": "^11.3.0"
  },
  "keywords": [
    "portfolio",
    "next.js",
    "react",
    "typescript",
    "tailwindcss",
    "developer",
    "full-stack",
    "web-development",
    "ui-ux"
  ],
  "license": "MIT",
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
    "moduleNameMapping": {
      "^@/(.*)$": "<rootDir>/$1"
    }
  },
  "prettier": {
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": false
  },
  "eslintConfig": {
    "extends": ["next/core-web-vitals", "prettier"],
    "rules": {
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-console": "warn"
    }
  },
  "config": {
    "port": 3000,
    "host": "localhost"
  },
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/alexdev"
  }
}`;

      case ".gitignore":
        return `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Next.js
.next/
out/
build/
dist/

# Production builds
*.tgz
*.tar.gz

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs
*.log

# Coverage directory used by tools like istanbul
coverage/
*.lcov
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Temporary folders
tmp/
temp/

# Local development
.local
.cache/

# Testing
/coverage
/test-results
/playwright-report

# Vercel
.vercel

# Lighthouse reports
lighthouse-report.html

# Bundle analyzer
.bundle-analyzer/

# Cypress
cypress/videos/
cypress/screenshots/

# Storybook
storybook-static/

# TypeScript
*.tsbuildinfo
.tscache/

# Prettier
.prettiercache

# ESLint
.eslintcache

# Husky
.husky/_

# Local database
*.db
*.sqlite

# Backup files
*.bak
*.backup

# Archives
*.zip
*.rar
*.7z

# Mac
.AppleDouble
.LSOverride

# Windows
*.cab
*.msi
*.msix
*.msm
*.msp

# Linux
*~

# Thumbnails
._*

# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent

# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk`;

      case "experience.ts":
        return `interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  description: string;
  achievements: string[];
  technologies: string[];
  teamSize?: number;
  website?: string;
}

const workExperience: WorkExperience[] = [
  {
    company: "TechFlow Solutions",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Leading development of next-generation SaaS platforms, architecting scalable microservices, and mentoring junior developers.",
    achievements: [
      "Reduced application load time by 65% through performance optimization",
      "Led migration to microservices architecture serving 100K+ users",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
      "Mentored 5 junior developers, 3 received promotions"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
    teamSize: 12,
    website: "https://techflowsolutions.com"
  },
  {
    company: "StartupXYZ",
    position: "Tech Lead & Co-founder",
    duration: "2020 - 2022",
    location: "Remote",
    type: "Full-time",
    description: "Co-founded and led technical development of an AI-powered project management platform from concept to 10K+ users.",
    achievements: [
      "Built MVP from scratch, acquired first 1000 users in 3 months",
      "Raised $500K seed funding with technical demo",
      "Scaled platform to handle 300% user growth",
      "Built and managed team of 8 developers"
    ],
    technologies: ["Next.js", "Python", "PostgreSQL", "Redis", "ML/AI", "Stripe"],
    teamSize: 8,
    website: "https://startupxyz.com"
  },
  {
    company: "InnovateCorp",
    position: "Full Stack Developer",
    duration: "2019 - 2020",
    location: "Seattle, WA",
    type: "Full-time",
    description: "Developed and maintained multiple client-facing web applications, collaborated with design and product teams.",
    achievements: [
      "Delivered 5+ client projects on time and under budget",
      "Improved code coverage from 45% to 85%",
      "Reduced bug reports by 60% through better testing practices",
      "Implemented automated deployment pipeline"
    ],
    technologies: ["React", "Django", "PostgreSQL", "AWS", "Jest", "Cypress"],
    teamSize: 6,
    website: "https://innovatecorp.com"
  },
  {
    company: "WebCraft Agency",
    position: "Frontend Developer",
    duration: "2018 - 2019",
    location: "Los Angeles, CA",
    type: "Full-time",
    description: "Created responsive, high-performance websites for diverse clients ranging from startups to Fortune 500 companies.",
    achievements: [
      "Completed 20+ client projects with 98% satisfaction rate",
      "Reduced average page load time by 40%",
      "Implemented design system used across 15+ projects",
      "Won 'Developer of the Year' award"
    ],
    technologies: ["Vue.js", "SASS", "Webpack", "Figma", "Adobe Creative Suite"],
    teamSize: 4,
    website: "https://webcraftagency.com"
  }
];

// Education
interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: number;
  achievements?: string[];
  relevantCourses?: string[];
}

const education: Education[] = [
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2014 - 2018",
    location: "Berkeley, CA",
    gpa: 3.8,
    achievements: [
      "Magna Cum Laude",
      "Dean's List for 6 semesters",
      "President of Computer Science Club",
      "Winner of Annual Hackathon 2017"
    ],
    relevantCourses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Machine Learning",
      "Computer Networks",
      "Web Development"
    ]
  }
];

// Certifications
interface Certification {
  name: string;
  issuer: string;
  dateEarned: string;
  expirationDate?: string;
  credentialId?: string;
  validationUrl?: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    dateEarned: "2023-06-15",
    expirationDate: "2026-06-15",
    credentialId: "AWS-ASA-123456789",
    validationUrl: "https://aws.amazon.com/verification"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    dateEarned: "2022-11-20",
    expirationDate: "2024-11-20",
    credentialId: "GCP-PCA-987654321"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    dateEarned: "2022-08-10",
    expirationDate: "2025-08-10",
    credentialId: "CKA-2022-543210"
  }
];

export { workExperience, education, certifications };
export type { WorkExperience, Education, Certification };`;

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

  // Extension data
  interface Extension {
    id: string;
    title: string;
    publisher: string;
    description: string;
    downloads: string;
    rating: string;
    icon: string;
    installed: boolean;
    hasUpdate: boolean;
  }

  const installedExtensions: Extension[] = [
    {
      id: "gitlens",
      title: "GitLens — Git supercharged",
      publisher: "Eric Amodio",
      description: "Supercharge Git within VS Code — Visualize code authorship",
      downloads: "40.8M downloads",
      rating: "⭐ 4.9 (12.5K)",
      icon: "🔗",
      installed: true,
      hasUpdate: false,
    },
    {
      id: "prettier",
      title: "Prettier - Code formatter",
      publisher: "Prettier",
      description: "Code formatter using prettier",
      downloads: "35.2M downloads",
      rating: "⭐ 4.8 (8.9K)",
      icon: "✨",
      installed: true,
      hasUpdate: true,
    },
    {
      id: "eslint",
      title: "ESLint",
      publisher: "Microsoft",
      description: "Integrates ESLint JavaScript into VS Code",
      downloads: "29.7M downloads",
      rating: "⭐ 4.7 (3.2K)",
      icon: "📋",
      installed: true,
      hasUpdate: false,
    },
    {
      id: "copilot",
      title: "GitHub Copilot",
      publisher: "GitHub",
      description: "Your AI pair programmer",
      downloads: "8.9M downloads",
      rating: "⭐ 4.5 (2.1K)",
      icon: "🤖",
      installed: true,
      hasUpdate: true,
    },
    {
      id: "thunder-client",
      title: "Thunder Client",
      publisher: "Ranga Vadhineni",
      description: "Lightweight Rest API Client for VS Code",
      downloads: "4.2M downloads",
      rating: "⭐ 4.9 (1.8K)",
      icon: "⚡",
      installed: true,
      hasUpdate: false,
    },
    {
      id: "auto-rename-tag",
      title: "Auto Rename Tag",
      publisher: "Jun Han",
      description: "Auto rename paired HTML/XML tag",
      downloads: "15.3M downloads",
      rating: "⭐ 4.6 (842)",
      icon: "🔄",
      installed: true,
      hasUpdate: false,
    },
    {
      id: "live-server",
      title: "Live Server",
      publisher: "Ritwick Dey",
      description: "Launch a development local Server",
      downloads: "23.1M downloads",
      rating: "⭐ 4.8 (3.9K)",
      icon: "🌐",
      installed: true,
      hasUpdate: false,
    },
    {
      id: "docker",
      title: "Docker",
      publisher: "Microsoft",
      description: "Makes it easy to create, manage containers",
      downloads: "18.7M downloads",
      rating: "⭐ 4.7 (2.1K)",
      icon: "🐳",
      installed: true,
      hasUpdate: true,
    },
  ];

  const popularExtensions = [
    ...installedExtensions,
    {
      id: "python",
      title: "Python",
      publisher: "Microsoft",
      description: "IntelliSense, linting, debugging, code navigation",
      downloads: "89.2M downloads",
      rating: "⭐ 4.5 (9.8K)",
      icon: "🐍",
      installed: false,
      hasUpdate: false,
    },
    {
      id: "jupyter",
      title: "Jupyter",
      publisher: "Microsoft",
      description: "Jupyter notebook support, interactive programming",
      downloads: "52.1M downloads",
      rating: "⭐ 4.4 (3.2K)",
      icon: "📓",
      installed: false,
      hasUpdate: false,
    },
    {
      id: "material-icon-theme",
      title: "Material Icon Theme",
      publisher: "Philipp Kief",
      description: "Material Design Icons for Visual Studio Code",
      downloads: "17.8M downloads",
      rating: "⭐ 4.9 (4.1K)",
      icon: "🎨",
      installed: false,
      hasUpdate: false,
    },
    {
      id: "vscode-icons",
      title: "vscode-icons",
      publisher: "VSCode Icons Team",
      description: "Icons for Visual Studio Code",
      downloads: "14.2M downloads",
      rating: "⭐ 4.8 (2.8K)",
      icon: "💎",
      installed: false,
      hasUpdate: false,
    },
    {
      id: "todo-highlight",
      title: "TODO Highlight",
      publisher: "Wayou Liu",
      description: "Highlight TODO, FIXME and other annotations",
      downloads: "3.8M downloads",
      rating: "⭐ 4.6 (892)",
      icon: "📝",
      installed: false,
      hasUpdate: false,
    },
    {
      id: "indent-rainbow",
      title: "Indent Rainbow",
      publisher: "oderwat",
      description: "Makes indentation easier to read",
      downloads: "5.2M downloads",
      rating: "⭐ 4.7 (1.5K)",
      icon: "🌈",
      installed: false,
      hasUpdate: false,
    },
  ];

  const getFilteredExtensions = (): Extension[] => {
    let extensions: Extension[] = [];

    if (activeExtensionTab === "Installed") {
      extensions = installedExtensions;
    } else if (activeExtensionTab === "Popular") {
      extensions = popularExtensions;
    } else if (activeExtensionTab === "Updates") {
      extensions = installedExtensions.filter((ext) => ext.hasUpdate);
    }

    if (extensionSearchQuery.trim()) {
      extensions = extensions.filter(
        (ext) =>
          ext.title.toLowerCase().includes(extensionSearchQuery.toLowerCase()) ||
          ext.publisher.toLowerCase().includes(extensionSearchQuery.toLowerCase()) ||
          ext.description.toLowerCase().includes(extensionSearchQuery.toLowerCase())
      );
    }

    return extensions;
  };

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
                      <p>No results found for &quot;{searchQuery}&quot;</p>
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

          {activePanel === "extensions" && (
            <div className="extensions-panel">
              <div className="extensions-header">
                <input
                  type="text"
                  placeholder="Search Extensions..."
                  className="extension-search"
                  value={extensionSearchQuery}
                  onChange={(e) => setExtensionSearchQuery(e.target.value)}
                />
              </div>

              <div className="extensions-tabs">
                <div
                  className={`extension-tab ${activeExtensionTab === "Installed" ? "active" : ""}`}
                  onClick={() => setActiveExtensionTab("Installed")}
                >
                  Installed
                </div>
                <div
                  className={`extension-tab ${activeExtensionTab === "Popular" ? "active" : ""}`}
                  onClick={() => setActiveExtensionTab("Popular")}
                >
                  Popular
                </div>
                <div
                  className={`extension-tab ${activeExtensionTab === "Updates" ? "active" : ""}`}
                  onClick={() => setActiveExtensionTab("Updates")}
                >
                  Updates ({installedExtensions.filter((ext) => ext.hasUpdate).length})
                </div>
              </div>

              <div className="extensions-list">
                {getFilteredExtensions().map((extension) => (
                  <div key={extension.id} className="extension-card">
                    <div className="extension-icon">{extension.icon}</div>
                    <div className="extension-details">
                      <div className="extension-title">{extension.title}</div>
                      <div className="extension-publisher">by {extension.publisher}</div>
                      <div className="extension-description">{extension.description}</div>
                      <div className="extension-stats">
                        <span className="downloads">{extension.downloads}</span>
                        <span className="rating">{extension.rating}</span>
                      </div>
                    </div>
                    <div className="extension-actions">
                      <button className={`extension-btn ${extension.installed ? "installed" : "install"}`}>
                        {extension.installed ? "Installed" : "Install"}
                      </button>
                      {extension.installed && <button className="extension-btn-icon">⚙️</button>}
                    </div>
                  </div>
                ))}
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
