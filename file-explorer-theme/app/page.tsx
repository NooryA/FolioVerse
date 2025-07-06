"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Folder,
  File,
  Home as HomeIcon,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
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
    },
    {
      id: "6",
      name: "Portfolio-Demo.mp4",
      type: "file",
      icon: <Video className="w-8 h-8" />,
      size: "45.2 MB",
      dateModified: "2024-01-08",
      extension: "mp4",
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
      content:
        "I'm Alex, a passionate full-stack developer with 5+ years of experience creating amazing web applications. I love turning complex problems into simple, beautiful designs.",
    },
    {
      id: "8",
      name: "Profile-Photo.jpg",
      type: "file",
      icon: <Image className="w-8 h-8" />,
      size: "856 KB",
      dateModified: "2024-01-14",
      extension: "jpg",
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
      content:
        "Senior Frontend Developer at TechCorp Inc. (2022-Present)\n\n• Lead development of enterprise React applications\n• Mentored junior developers\n• Implemented modern CI/CD pipelines\n• Reduced load times by 40% through optimization",
    },
    {
      id: "13",
      name: "Fullstack-Developer-StartupHub.docx",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.5 KB",
      dateModified: "2024-01-12",
      content:
        "Full Stack Developer at StartupHub (2020-2022)\n\n• Built scalable MERN stack applications\n• Designed RESTful APIs\n• Collaborated with design team on UX\n• Launched 5 major product features",
    },
    {
      id: "14",
      name: "Frontend-Developer-WebAgency.docx",
      type: "file",
      icon: <FileText className="w-8 h-8" />,
      size: "1.3 KB",
      dateModified: "2024-01-11",
      content:
        "Frontend Developer at WebAgency (2019-2020)\n\n• Created responsive websites\n• Implemented pixel-perfect designs\n• Optimized for performance and SEO\n• Worked with diverse client portfolio",
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
      content:
        "# E-Commerce Platform\n\nA modern e-commerce solution built with React, Node.js, and PostgreSQL.\n\n## Features\n• Shopping cart functionality\n• Payment integration (Stripe)\n• Inventory management\n• Analytics dashboard\n• Mobile responsive\n\n## Tech Stack\n• Frontend: React, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, PostgreSQL\n• Deployment: AWS, Docker",
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
    },
    {
      id: "23",
      name: "demo-video.mp4",
      type: "file",
      icon: <Video className="w-8 h-8" />,
      size: "38.7 MB",
      dateModified: "2024-01-11",
      extension: "mp4",
    },
    {
      id: "24",
      name: "live-site-link.url",
      type: "file",
      icon: <Globe className="w-8 h-8" />,
      size: "125 B",
      dateModified: "2024-01-10",
      content: "https://ecommerce-demo.alexdev.com",
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
      content:
        "Email: alex@example.com\nPhone: +1 (555) 123-4567\nLocation: San Francisco, CA\nLinkedIn: linkedin.com/in/alexdev\nGitHub: github.com/alexdev\nWebsite: alexdev.com",
    },
    {
      id: "31",
      name: "social-links.html",
      type: "file",
      icon: <Globe className="w-8 h-8" />,
      size: "1.8 KB",
      dateModified: "2024-01-11",
      extension: "html",
    },
    {
      id: "32",
      name: "business-card.png",
      type: "file",
      icon: <Image className="w-8 h-8" />,
      size: "425 KB",
      dateModified: "2024-01-10",
      extension: "png",
    },
    {
      id: "33",
      name: "availability.ics",
      type: "file",
      icon: <Calendar className="w-8 h-8" />,
      size: "1.1 KB",
      dateModified: "2024-01-09",
      extension: "ics",
    },
  ],
};

export default function Home() {
  const [currentPath, setCurrentPath] = useState<string[]>(["Desktop", "Portfolio"]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"icons" | "list">("icons");
  const [showDetails, setShowDetails] = useState(false);
  const [history, setHistory] = useState<string[][]>([["Desktop", "Portfolio"]]);
  const [historyIndex, setHistoryIndex] = useState(0);

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

  const goUp = useCallback(() => {
    if (currentPath.length > 1) {
      const newPath = currentPath.slice(0, -1);
      setCurrentPath(newPath);

      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newPath);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setSelectedItem(null);
    }
  }, [currentPath, history, historyIndex]);

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
      // Simulate opening file
      if (item.content) {
        alert(`Opening ${item.name}:\n\n${item.content}`);
      } else if (item.extension === "url") {
        if (item.content) {
          window.open(item.content, "_blank");
        }
      } else {
        alert(`Opening ${item.name}...`);
      }
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
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5" />
            <span className="font-medium">Portfolio Explorer</span>
          </div>
          <div className="flex gap-1">
            <button className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded text-sm">–</button>
            <button className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded text-sm">□</button>
            <button className="w-6 h-6 bg-red-500 hover:bg-red-600 rounded text-sm">×</button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={goBack}
              disabled={historyIndex === 0}
              className="p-2 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goForward}
              disabled={historyIndex === history.length - 1}
              className="p-2 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={goUp}
              disabled={currentPath.length <= 1}
              className="p-2 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Address Bar */}
          <div className="flex-1 bg-white border border-gray-300 rounded px-3 py-1 flex items-center gap-2">
            <HomeIcon className="w-4 h-4 text-gray-500" />
            {currentPath.map((folder, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-3 h-3 text-gray-400" />}
                <span className="text-sm">{folder}</span>
              </div>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("icons")}
              className={`p-2 rounded ${viewMode === "icons" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"}`}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={`p-2 rounded ${showDetails ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"}`}
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
                    className={`cursor-pointer text-center p-3 rounded hover:bg-blue-50 select-none ${
                      selectedItem === item.id ? "bg-blue-100 border border-blue-300" : ""
                    }`}
                  >
                    <div className="mb-2 flex justify-center">{getFileIcon(item)}</div>
                    <div className="text-xs text-gray-700 break-words">{item.name}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-1">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-gray-50 border-b text-sm font-medium text-gray-600">
                  <div className="col-span-6">Name</div>
                  <div className="col-span-2">Date Modified</div>
                  <div className="col-span-2">Type</div>
                  <div className="col-span-2">Size</div>
                </div>
                {/* Items */}
                {currentItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    onDoubleClick={() => handleItemDoubleClick(item)}
                    className={`grid grid-cols-12 gap-4 px-4 py-2 cursor-pointer hover:bg-blue-50 select-none text-sm ${
                      selectedItem === item.id ? "bg-blue-100 border border-blue-300" : ""
                    }`}
                  >
                    <div className="col-span-6 flex items-center gap-3">
                      <div className="w-5 h-5 flex-shrink-0">
                        {item.type === "folder" ? <Folder className="w-5 h-5 text-blue-500" /> : <File className="w-5 h-5 text-gray-600" />}
                      </div>
                      <span className="truncate">{item.name}</span>
                    </div>
                    <div className="col-span-2 text-gray-600">{formatDate(item.dateModified)}</div>
                    <div className="col-span-2 text-gray-600">{item.type === "folder" ? "Folder" : "File"}</div>
                    <div className="col-span-2 text-gray-600">{item.type === "file" ? formatFileSize(item.size) : "--"}</div>
                  </div>
                ))}
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
