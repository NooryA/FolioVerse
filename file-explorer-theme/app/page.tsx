"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Folder,
  File,
  Home as HomeIcon,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Search,
  Grid3X3,
  List,
  Info,
  Settings,
  User,
  Briefcase,
  Mail,
  Star,
  Download,
  FileText,
  Image,
  Video,
  Code,
  Database,
  Globe,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import FileViewer from "../components/file-viewer";

interface FileSystemItem {
  id: string;
  name: string;
  type: "folder" | "file";
  icon?: React.ReactNode;
  size?: string;
  dateModified?: string;
  content?: string;
  extension?: string;
}

// Define file system data as a constant to prevent re-creation
const FILE_SYSTEM_DATA: { [key: string]: FileSystemItem[] } = {
  Desktop: [
    {
      id: "portfolio-folder",
      name: "Portfolio",
      type: "folder",
      icon: <Briefcase className="w-8 h-8" />,
      dateModified: "2024-01-15",
    },
    {
      id: "documents-folder",
      name: "Documents",
      type: "folder",
      icon: <Folder className="w-8 h-8" />,
      dateModified: "2024-01-10",
    },
    {
      id: "downloads-folder",
      name: "Downloads",
      type: "folder",
      icon: <Folder className="w-8 h-8" />,
      dateModified: "2024-01-08",
    },
    {
      id: "quick-resume",
      name: "Alex_Johnson_Resume.pdf",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "2.4 MB",
      dateModified: "2024-01-15",
      extension: "pdf",
      content: "Alex Johnson - Senior Full-Stack Developer Resume",
    },
  ],
  "Desktop/Portfolio": [
    { id: "1", name: "About Me", type: "folder", icon: <User className="w-8 h-8" />, dateModified: "2024-01-15" },
    { id: "2", name: "Projects", type: "folder", icon: <Briefcase className="w-8 h-8" />, dateModified: "2024-01-14" },
    { id: "3", name: "Skills & Tools", type: "folder", icon: <Settings className="w-8 h-8" />, dateModified: "2024-01-13" },
    { id: "4", name: "Contact Info", type: "folder", icon: <Mail className="w-8 h-8" />, dateModified: "2024-01-12" },
    {
      id: "5",
      name: "Resume.pdf",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "2.4 MB",
      dateModified: "2024-01-10",
      extension: "pdf",
      content: "Alex Johnson - Senior Full-Stack Developer Resume",
    },
    {
      id: "6",
      name: "Portfolio-Demo.mp4",
      type: "file",
      icon: <Video className="w-8 h-8" />,
      size: "45.2 MB",
      dateModified: "2024-01-08",
      extension: "mp4",
      content: "Portfolio demonstration video showcasing various projects and skills",
    },
  ],
  "Desktop/Portfolio/About Me": [
    {
      id: "7",
      name: "Personal-Bio.txt",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.2 KB",
      dateModified: "2024-01-15",
      extension: "txt",
      content:
        "Hi! I'm Alex Johnson, a passionate full-stack developer with 5+ years of experience creating amazing web applications.\n\nI specialize in:\n• React & Next.js\n• Node.js & Express\n• PostgreSQL & MongoDB\n• AWS & Docker\n• TypeScript & JavaScript\n\nI love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or mentoring junior developers.\n\nMy approach to development is always user-first, focusing on creating experiences that are both functional and delightful.",
    },
    {
      id: "8",
      name: "Profile-Photo.jpg",
      type: "file",
      icon: <Image className="w-8 h-8" />,
      size: "856 KB",
      dateModified: "2024-01-14",
      extension: "jpg",
      content: "Professional headshot photo",
    },
    { id: "9", name: "Experience", type: "folder", icon: <Briefcase className="w-8 h-8" />, dateModified: "2024-01-13" },
    { id: "10", name: "Education", type: "folder", icon: <Calendar className="w-8 h-8" />, dateModified: "2024-01-12" },
    {
      id: "11",
      name: "Achievements.xlsx",
      type: "file",
      icon: <Star className="w-8 h-8" />,
      size: "890 KB",
      dateModified: "2024-01-11",
      extension: "xlsx",
      content: "Professional achievements and certifications spreadsheet",
    },
  ],
  "Desktop/Portfolio/About Me/Experience": [
    {
      id: "12",
      name: "Senior-Developer-TechCorp.docx",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.8 KB",
      dateModified: "2024-01-13",
      extension: "docx",
      content:
        "SENIOR FRONTEND DEVELOPER\nTechCorp Inc. | March 2022 - Present\n\nKey Responsibilities:\n• Lead development of enterprise React applications serving 100,000+ users\n• Architect scalable frontend solutions using React, TypeScript, and modern development practices\n• Mentor team of 5 junior developers and establish coding standards\n• Collaborate with product managers and designers to deliver user-centric features\n• Implement automated testing strategies reducing bugs by 45%\n\nKey Achievements:\n• Reduced application load time by 40% through code splitting and optimization\n• Implemented modern CI/CD pipelines reducing deployment time by 60%\n• Led migration from legacy JavaScript to TypeScript across 15+ components\n• Spearheaded adoption of micro-frontend architecture\n• Improved code coverage from 35% to 85%\n\nTechnologies: React, TypeScript, Next.js, GraphQL, Jest, Cypress, AWS, Docker",
    },
    {
      id: "13",
      name: "Fullstack-Developer-StartupHub.docx",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.5 KB",
      dateModified: "2024-01-12",
      extension: "docx",
      content:
        "FULL STACK DEVELOPER\nStartupHub | June 2020 - March 2022\n\nKey Responsibilities:\n• Built scalable MERN stack applications from conception to deployment\n• Designed and implemented RESTful APIs serving both mobile and web clients\n• Collaborated closely with design team to create intuitive user experiences\n• Managed database schema design and optimization\n• Implemented real-time features using WebSockets\n\nKey Achievements:\n• Launched 5 major product features that increased user engagement by 35%\n• Reduced API response time by 50% through database optimization\n• Built real-time chat system handling 10,000+ concurrent users\n• Implemented automated deployment pipeline reducing release time by 70%\n• Mentored 2 junior developers and conducted code reviews\n\nTechnologies: React, Node.js, Express, MongoDB, Redis, Socket.io, AWS, Docker",
    },
    {
      id: "14",
      name: "Frontend-Developer-WebAgency.docx",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.3 KB",
      dateModified: "2024-01-11",
      extension: "docx",
      content:
        "FRONTEND DEVELOPER\nWebAgency | January 2019 - June 2020\n\nKey Responsibilities:\n• Created responsive websites for 20+ clients across various industries\n• Implemented pixel-perfect designs with attention to accessibility standards\n• Optimized websites for performance and SEO\n• Maintained and updated existing client websites\n• Collaborated with backend developers to integrate APIs\n\nKey Achievements:\n• Improved average website loading speed by 25% across all projects\n• Achieved 95%+ accessibility scores on all delivered projects\n• Increased client website traffic by 30% through SEO optimization\n• Built custom CMS solutions for 5 major clients\n• Trained team on modern CSS techniques and responsive design\n\nTechnologies: HTML5, CSS3, JavaScript, jQuery, Bootstrap, Sass, WordPress, PHP",
    },
  ],
  "Desktop/Portfolio/About Me/Education": [
    {
      id: "34",
      name: "CS-Degree-UCBerkeley.pdf",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "2.1 MB",
      dateModified: "2024-01-12",
      extension: "pdf",
      content: "Bachelor of Science in Computer Science - University of California, Berkeley (2019)",
    },
    {
      id: "35",
      name: "Certifications.txt",
      type: "file",
      icon: <Star className="w-8 h-8" />,
      size: "1.8 KB",
      dateModified: "2024-01-11",
      extension: "txt",
      content:
        "PROFESSIONAL CERTIFICATIONS\n\n• AWS Certified Developer - Associate (2023)\n• Google Cloud Professional Developer (2022)\n• MongoDB Certified Developer (2021)\n• React Developer Certification - Meta (2021)\n• Node.js Certified Developer (2020)\n• Certified ScrumMaster (CSM) (2020)\n\nONLINE COURSES COMPLETED:\n• Advanced React Patterns - Kent C. Dodds\n• Node.js: The Complete Guide - Maximilian Schwarzmüller\n• AWS Certified Developer Course - Stephane Maarek\n• TypeScript: The Complete Developer's Guide - Stephen Grider\n• Docker and Kubernetes: The Complete Guide - Stephen Grider",
    },
  ],
  "Desktop/Portfolio/Projects": [
    { id: "15", name: "E-Commerce Platform", type: "folder", icon: <Globe className="w-8 h-8" />, dateModified: "2024-01-14" },
    { id: "16", name: "AI Chat Assistant", type: "folder", icon: <Code className="w-8 h-8" />, dateModified: "2024-01-13" },
    { id: "17", name: "Mobile Banking App", type: "folder", icon: <Database className="w-8 h-8" />, dateModified: "2024-01-12" },
    { id: "18", name: "Data Visualization Dashboard", type: "folder", icon: <Globe className="w-8 h-8" />, dateModified: "2024-01-11" },
    { id: "19", name: "Task Management System", type: "folder", icon: <List className="w-8 h-8" />, dateModified: "2024-01-10" },
  ],
  "Desktop/Portfolio/Projects/E-Commerce Platform": [
    {
      id: "20",
      name: "README.md",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "4.2 KB",
      dateModified: "2024-01-14",
      extension: "md",
      content:
        "# E-Commerce Platform\n\nA modern, scalable e-commerce solution built with React, Node.js, and PostgreSQL.\n\n## 🚀 Features\n\n### Customer Features\n• User registration and authentication\n• Product browsing with advanced filtering\n• Shopping cart with real-time updates\n• Secure checkout process with Stripe integration\n• Order tracking and history\n• User reviews and ratings\n• Wishlist functionality\n• Mobile-responsive design\n\n### Admin Features\n• Product management (CRUD operations)\n• Order management and fulfillment\n• Customer management\n• Analytics dashboard with sales metrics\n• Inventory management with low-stock alerts\n• Promotional codes and discounts\n• Content management system\n\n## 🛠️ Tech Stack\n\n### Frontend\n• React 18 with TypeScript\n• Next.js 13 (App Router)\n• Tailwind CSS for styling\n• Zustand for state management\n• React Hook Form for form handling\n• Framer Motion for animations\n\n### Backend\n• Node.js with Express\n• PostgreSQL with Prisma ORM\n• Redis for caching\n• JWT for authentication\n• Stripe for payment processing\n• Cloudinary for image management\n\n### DevOps & Deployment\n• Docker containerization\n• AWS EC2 and RDS\n• GitHub Actions for CI/CD\n• Nginx for reverse proxy\n• PM2 for process management\n\n## 📊 Performance Metrics\n• 95+ Google Lighthouse score\n• <2s initial page load time\n• 99.9% uptime\n• Handles 10,000+ concurrent users\n• Mobile-first responsive design\n\n## 🔗 Links\n• Live Demo: https://ecommerce-demo.alexdev.com\n• GitHub Repository: https://github.com/alexdev/ecommerce-platform\n• API Documentation: https://api.ecommerce-demo.alexdev.com/docs",
    },
    { id: "21", name: "screenshots", type: "folder", icon: <Image className="w-8 h-8" />, dateModified: "2024-01-13" },
    {
      id: "22",
      name: "source-code.zip",
      type: "file",
      icon: <Code className="w-8 h-8" />,
      size: "25.4 MB",
      dateModified: "2024-01-12",
      extension: "zip",
      content: "Complete source code for the e-commerce platform including frontend, backend, and database migrations",
    },
    {
      id: "23",
      name: "demo-video.mp4",
      type: "file",
      icon: <Video className="w-8 h-8" />,
      size: "38.7 MB",
      dateModified: "2024-01-11",
      extension: "mp4",
      content: "Comprehensive demo video showing all features of the e-commerce platform",
    },
    {
      id: "24",
      name: "live-site-link.url",
      type: "file",
      icon: <Globe className="w-8 h-8" />,
      size: "125 B",
      dateModified: "2024-01-10",
      extension: "url",
      content: "https://ecommerce-demo.alexdev.com",
    },
  ],
  "Desktop/Portfolio/Projects/AI Chat Assistant": [
    {
      id: "36",
      name: "Project-Overview.md",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "3.8 KB",
      dateModified: "2024-01-13",
      extension: "md",
      content:
        "# AI Chat Assistant\n\nAn intelligent chat assistant built with OpenAI's GPT-4, featuring real-time conversations, context awareness, and multi-language support.\n\n## 🤖 Features\n\n• Real-time chat interface with typing indicators\n• Context-aware conversations with memory\n• Multi-language support (English, Spanish, French, German)\n• Voice input and text-to-speech output\n• File upload and analysis capabilities\n• Custom personality and tone settings\n• Conversation history and export\n• Mobile-responsive design\n\n## 🛠️ Technical Implementation\n\n### Frontend\n• React with TypeScript\n• Socket.io for real-time communication\n• Speech Recognition API\n• Web Speech API for TTS\n• Tailwind CSS for styling\n\n### Backend\n• Node.js with Express\n• OpenAI GPT-4 API integration\n• Redis for conversation caching\n• PostgreSQL for user data\n• WebSocket server for real-time updates\n\n### AI Features\n• Context window management\n• Token optimization\n• Response streaming\n• Conversation summarization\n• Intent recognition\n\n## 📊 Performance\n• Average response time: <2 seconds\n• 99.8% uptime\n• Supports 500+ concurrent users\n• Context retention across sessions\n\n## 🔗 Demo\n• Live Demo: https://ai-chat.alexdev.com\n• GitHub: https://github.com/alexdev/ai-chat-assistant",
    },
    {
      id: "37",
      name: "architecture-diagram.png",
      type: "file",
      icon: <Image className="w-8 h-8" />,
      size: "2.3 MB",
      dateModified: "2024-01-12",
      extension: "png",
      content: "System architecture diagram showing AI integration and data flow",
    },
  ],
  "Desktop/Portfolio/Skills & Tools": [
    { id: "25", name: "Programming Languages", type: "folder", icon: <Code className="w-8 h-8" />, dateModified: "2024-01-13" },
    { id: "26", name: "Frameworks & Libraries", type: "folder", icon: <Globe className="w-8 h-8" />, dateModified: "2024-01-12" },
    { id: "27", name: "Tools & Software", type: "folder", icon: <Settings className="w-8 h-8" />, dateModified: "2024-01-11" },
    { id: "28", name: "Databases", type: "folder", icon: <Database className="w-8 h-8" />, dateModified: "2024-01-10" },
    {
      id: "29",
      name: "skill-assessment.xlsx",
      type: "file",
      icon: <Star className="w-8 h-8" />,
      size: "1.2 MB",
      dateModified: "2024-01-09",
      extension: "xlsx",
      content: "Comprehensive skill assessment and proficiency ratings across all technologies",
    },
  ],
  "Desktop/Portfolio/Skills & Tools/Programming Languages": [
    {
      id: "38",
      name: "JavaScript-TypeScript.txt",
      type: "file",
      icon: <Code className="w-8 h-8" />,
      size: "2.1 KB",
      dateModified: "2024-01-13",
      extension: "txt",
      content:
        "JAVASCRIPT & TYPESCRIPT\n\nExperience: 5+ years\nProficiency: Expert (95%)\n\nKey Strengths:\n• ES6+ features and modern JavaScript\n• Async/await and Promise handling\n• TypeScript for type safety\n• Functional programming patterns\n• Object-oriented programming\n• Module systems (ES6, CommonJS)\n• Testing with Jest and Cypress\n\nProjects:\n• Built 15+ production applications\n• Migrated 10+ legacy JS projects to TypeScript\n• Mentored developers on best practices\n• Contributed to open-source TypeScript projects\n\nCertifications:\n• TypeScript Deep Dive Certification\n• JavaScript Algorithms and Data Structures (freeCodeCamp)",
    },
    {
      id: "39",
      name: "Python.txt",
      type: "file",
      icon: <Code className="w-8 h-8" />,
      size: "1.8 KB",
      dateModified: "2024-01-12",
      extension: "txt",
      content:
        "PYTHON\n\nExperience: 3+ years\nProficiency: Advanced (85%)\n\nKey Strengths:\n• Web development with Django and Flask\n• Data analysis with pandas and numpy\n• API development and integration\n• Automation and scripting\n• Database operations with SQLAlchemy\n• Unit testing with pytest\n\nProjects:\n• Built 5 Django web applications\n• Created data analysis pipelines\n• Automated deployment scripts\n• API integrations and web scraping\n\nLibraries & Frameworks:\n• Django, Flask, FastAPI\n• pandas, numpy, matplotlib\n• requests, BeautifulSoup\n• SQLAlchemy, psycopg2\n• pytest, unittest",
    },
  ],
  "Desktop/Portfolio/Contact Info": [
    {
      id: "30",
      name: "contact-details.txt",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "642 B",
      dateModified: "2024-01-12",
      extension: "txt",
      content:
        "CONTACT INFORMATION\n\nEmail: alex.johnson@example.com\nPhone: +1 (555) 123-4567\nLocation: San Francisco, CA, USA\nTimezone: PST (UTC-8)\n\nPROFESSIONAL LINKS\nLinkedIn: https://linkedin.com/in/alexjohnson-dev\nGitHub: https://github.com/alexjohnson-dev\nPersonal Website: https://alexjohnson.dev\nBlog: https://blog.alexjohnson.dev\n\nSOCIAL MEDIA\nTwitter: @alexjohnson_dev\nDev.to: @alexjohnson\nStack Overflow: alexjohnson-dev\n\nAVAILABILITY\nOpen to full-time opportunities\nAvailable for freelance projects\nOpen to speaking engagements\nMentoring junior developers\n\nPREFERRED CONTACT\nBest reached via email or LinkedIn\nResponse time: Within 24 hours\nAvailable for calls: Mon-Fri 9AM-6PM PST",
    },
    {
      id: "31",
      name: "social-links.html",
      type: "file",
      icon: <Globe className="w-8 h-8" />,
      size: "1.8 KB",
      dateModified: "2024-01-11",
      extension: "html",
      content: "HTML page with interactive social media links and contact form",
    },
    {
      id: "32",
      name: "business-card.png",
      type: "file",
      icon: <Image className="w-8 h-8" />,
      size: "425 KB",
      dateModified: "2024-01-10",
      extension: "png",
      content: "Professional business card design with contact information",
    },
    {
      id: "33",
      name: "availability.ics",
      type: "file",
      icon: <Calendar className="w-8 h-8" />,
      size: "1.1 KB",
      dateModified: "2024-01-09",
      extension: "ics",
      content: "Calendar file with available meeting times and consultation slots",
    },
  ],
  "Desktop/Documents": [
    {
      id: "doc-1",
      name: "Project_Notes.docx",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.2 MB",
      dateModified: "2024-01-12",
      extension: "docx",
      content: "Personal project notes and ideas for future development.",
    },
    {
      id: "doc-2",
      name: "Meeting_Minutes.txt",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "856 B",
      dateModified: "2024-01-10",
      extension: "txt",
      content: "Meeting minutes from client calls and team meetings.",
    },
    {
      id: "doc-3",
      name: "Tech_Research",
      type: "folder",
      icon: <Folder className="w-8 h-8" />,
      dateModified: "2024-01-08",
    },
  ],
  "Desktop/Downloads": [
    {
      id: "dl-1",
      name: "React_Course_Materials.zip",
      type: "file",
      icon: <Code className="w-8 h-8" />,
      size: "45.2 MB",
      dateModified: "2024-01-14",
      extension: "zip",
      content: "Downloaded course materials for advanced React patterns.",
    },
    {
      id: "dl-2",
      name: "Design_Assets.zip",
      type: "file",
      icon: <Image className="w-8 h-8" />,
      size: "12.8 MB",
      dateModified: "2024-01-12",
      extension: "zip",
      content: "UI design assets and icons for current projects.",
    },
    {
      id: "dl-3",
      name: "Node_Modules_Backup.tar.gz",
      type: "file",
      icon: <Database className="w-8 h-8" />,
      size: "128.5 MB",
      dateModified: "2024-01-10",
      extension: "tar.gz",
      content: "Backup of node modules for project deployment.",
    },
  ],
};

export default function Home() {
  const [currentPath, setCurrentPath] = useState<string[]>(["Desktop"]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"icons" | "list">("icons");
  const [showDetails, setShowDetails] = useState(false);
  const [history, setHistory] = useState<string[][]>([["Desktop"]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [openFile, setOpenFile] = useState<FileSystemItem | null>(null);

  // Effect to ensure currentPath is always valid
  useEffect(() => {
    if (!currentPath || currentPath.length === 0) {
      setCurrentPath(["Desktop"]);
    }
  }, [currentPath]);

  // Memoize getCurrentItems to prevent unnecessary re-renders
  const getCurrentItems = useCallback((): FileSystemItem[] => {
    const pathKey = currentPath.join("/");
    return FILE_SYSTEM_DATA[pathKey] || [];
  }, [currentPath]);

  const navigateToFolder = useCallback(
    (folderName: string) => {
      const newPath = [...currentPath, folderName];
      setCurrentPath(newPath);

      // Add to history
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newPath);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setSelectedItem(null);
    },
    [currentPath, history, historyIndex]
  );

  const goBack = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(history[historyIndex - 1]);
      setSelectedItem(null);
    }
  }, [historyIndex, history]);

  const goForward = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(history[historyIndex + 1]);
      setSelectedItem(null);
    }
  }, [historyIndex, history]);

  const navigateToBreadcrumb = useCallback(
    (index: number) => {
      if (index < currentPath.length - 1) {
        const newPath = currentPath.slice(0, index + 1);
        setCurrentPath(newPath);

        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newPath);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setSelectedItem(null);
      }
    },
    [currentPath, history, historyIndex]
  );

  const handleItemClick = useCallback(
    (item: FileSystemItem) => {
      if (item.type === "folder") {
        navigateToFolder(item.name);
      } else {
        setSelectedItem(item.id);
        setShowDetails(true);
      }
    },
    [navigateToFolder]
  );

  const handleItemDoubleClick = useCallback((item: FileSystemItem) => {
    if (item.type === "file") {
      setOpenFile(item);
    }
  }, []);

  const getFileIcon = useCallback((item: FileSystemItem) => {
    if (item.type === "folder") {
      return <Folder className="w-8 h-8 text-blue-500" />;
    }
    if (item.icon) {
      return <div className="text-gray-600">{item.icon}</div>;
    }
    return <File className="w-8 h-8 text-gray-600" />;
  }, []);

  const formatFileSize = useCallback((size: string | undefined) => {
    return size || "--";
  }, []);

  const formatDate = useCallback((date: string | undefined) => {
    if (!date) return "--";
    return new Date(date).toLocaleDateString();
  }, []);

  const currentItems = getCurrentItems();
  const selectedItemData = selectedItem ? currentItems.find((i) => i.id === selectedItem) : null;

  return (
    <div className="h-screen bg-gray-100 flex flex-col font-sans">
      {/* File Explorer Window */}
      <div className="flex-1 bg-white border border-gray-300 shadow-lg mx-2 my-2 flex flex-col">
        {/* Title Bar - Removed window control buttons */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 flex items-center">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5" />
            <span className="font-medium">Portfolio Explorer</span>
          </div>
        </div>

        {/* Toolbar - Enhanced navigation buttons */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button
              onClick={goBack}
              disabled={historyIndex === 0}
              className={`p-2 rounded transition-colors ${
                historyIndex === 0 ? "opacity-50 cursor-not-allowed text-gray-400" : "hover:bg-gray-200 text-gray-700 hover:text-gray-900"
              }`}
              title="Go Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goForward}
              disabled={historyIndex === history.length - 1}
              className={`p-2 rounded transition-colors ${
                historyIndex === history.length - 1
                  ? "opacity-50 cursor-not-allowed text-gray-400"
                  : "hover:bg-gray-200 text-gray-700 hover:text-gray-900"
              }`}
              title="Go Forward"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Address Bar - Enhanced Breadcrumbs */}
          <div className="flex-1 bg-white border border-gray-300 rounded px-3 py-1 flex items-center gap-1 min-h-[32px]">
            <HomeIcon className="w-4 h-4 text-gray-500 mr-1" />
            {currentPath && currentPath.length > 0 ? (
              currentPath.map((folder, index) => (
                <div key={index} className="flex items-center gap-1">
                  {index > 0 && <ChevronRight className="w-3 h-3 text-gray-400" />}
                  <button
                    onClick={() => navigateToBreadcrumb(index)}
                    className={`px-2 py-1 rounded text-sm transition-colors ${
                      index === currentPath.length - 1
                        ? "text-gray-900 font-medium cursor-default bg-gray-100"
                        : "text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    }`}
                    disabled={index === currentPath.length - 1}
                    title={index === currentPath.length - 1 ? "Current location" : `Go to ${folder}`}
                  >
                    {folder}
                  </button>
                </div>
              ))
            ) : (
              <span className="text-sm text-gray-500">Loading...</span>
            )}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("icons")}
              className={`p-2 rounded transition-colors ${
                viewMode === "icons" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200 text-gray-700"
              }`}
              title="Icon View"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200 text-gray-700"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`p-2 rounded transition-colors ${showDetails ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200 text-gray-700"}`}
              title="Show Details"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* File List */}
          <div className={`${showDetails ? "flex-1" : "w-full"} p-4 overflow-auto`}>
            {viewMode === "icons" ? (
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    onDoubleClick={() => handleItemDoubleClick(item)}
                    className={`cursor-pointer text-center p-3 rounded hover:bg-blue-50 select-none transition-colors ${
                      selectedItem === item.id ? "bg-blue-100 border border-blue-300" : ""
                    }`}
                  >
                    <div className="mb-2 flex justify-center">{getFileIcon(item)}</div>
                    <div className="text-xs text-gray-700 break-words">{item.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-100 border-b-2 border-gray-300 text-sm font-semibold text-gray-800 sticky top-0">
                  <div className="col-span-6">Name</div>
                  <div className="col-span-2">Date Modified</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Size</div>
                </div>
                {/* Items */}
                <div className="divide-y divide-gray-100">
                  {currentItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      onDoubleClick={() => handleItemDoubleClick(item)}
                      className={`grid grid-cols-12 gap-4 px-4 py-3 cursor-pointer hover:bg-blue-50 select-none text-sm transition-colors ${
                        selectedItem === item.id ? "bg-blue-100 border-l-4 border-l-blue-500" : "bg-white"
                      }`}
                    >
                      <div className="col-span-6 flex items-center gap-3">
                        <div className="w-5 h-5 flex-shrink-0">
                          {item.type === "folder" ? (
                            <Folder className="w-5 h-5 text-blue-500" />
                          ) : (
                            <File className="w-5 h-5 text-gray-600" />
                          )}
                        </div>
                        <span className="truncate text-gray-900 font-medium">{item.name}</span>
                      </div>
                      <div className="col-span-2 text-gray-700 font-normal">{formatDate(item.dateModified)}</div>
                      <div className="col-span-2 text-gray-700 font-normal">{item.type === "folder" ? "Folder" : "File"}</div>
                      <div className="col-span-2 text-gray-700 font-normal">{item.type === "file" ? formatFileSize(item.size) : "--"}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Details Panel */}
          {showDetails && selectedItemData && (
            <div className="w-80 border-l border-gray-200 bg-gray-50 p-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Properties</h3>
                <div className="space-y-3">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16">{getFileIcon(selectedItemData)}</div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500">Name</label>
                    <div className="text-sm text-gray-900">{selectedItemData.name}</div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500">Type</label>
                    <div className="text-sm text-gray-900">
                      {selectedItemData.type === "folder" ? "Folder" : `${selectedItemData.extension?.toUpperCase() || "File"} File`}
                    </div>
                  </div>
                  {selectedItemData.size && (
                    <div>
                      <label className="text-xs font-medium text-gray-500">Size</label>
                      <div className="text-sm text-gray-900">{selectedItemData.size}</div>
                    </div>
                  )}
                  <div>
                    <label className="text-xs font-medium text-gray-500">Date Modified</label>
                    <div className="text-sm text-gray-900">{formatDate(selectedItemData.dateModified)}</div>
                  </div>
                  {selectedItemData.content && (
                    <div>
                      <label className="text-xs font-medium text-gray-500">Preview</label>
                      <div className="text-sm text-gray-900 bg-white p-2 rounded border max-h-32 overflow-y-auto">
                        {selectedItemData.content.length > 200
                          ? selectedItemData.content.substring(0, 200) + "..."
                          : selectedItemData.content}
                      </div>
                    </div>
                  )}
                  {selectedItemData.type === "file" && (
                    <div className="mt-4">
                      <button
                        onClick={() => setOpenFile(selectedItemData)}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition-colors"
                      >
                        Open File
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* File Viewer Modal */}
      {openFile && <FileViewer file={openFile} onClose={() => setOpenFile(null)} />}
    </div>
  );
}
