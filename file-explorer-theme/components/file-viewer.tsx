"use client";

import React from "react";
import { X, Download, FileText, Image, Video, File, Globe, Database, Star, Calendar } from "lucide-react";

interface FileViewerProps {
  file: {
    id: string;
    name: string;
    type: "folder" | "file";
    extension?: string;
    size?: string;
    dateModified?: string;
    content?: string;
  };
  onClose: () => void;
}

export default function FileViewer({ file, onClose }: FileViewerProps) {
  const getFileContent = () => {
    if (file.name === "Resume.pdf") {
      return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
            <p className="text-lg text-gray-600 mb-4">Senior Full-Stack Developer</p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>📧 alex@example.com</span>
              <span>📱 +1 (555) 123-4567</span>
              <span>📍 San Francisco, CA</span>
            </div>
            <div className="flex justify-center gap-4 mt-2 text-sm text-blue-600">
              <span>🔗 linkedin.com/in/alexdev</span>
              <span>🐙 github.com/alexdev</span>
              <span>🌐 alexdev.com</span>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate full-stack developer with 5+ years of experience creating scalable web applications. Expertise in React, Node.js,
                and modern development practices. Proven track record of leading teams, mentoring junior developers, and delivering
                high-quality solutions that drive business growth.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Senior Frontend Developer</h3>
                  <p className="text-blue-600 font-medium">TechCorp Inc. | 2022 - Present</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Lead development of enterprise React applications serving 100k+ users</li>
                    <li>Mentored 5 junior developers and established coding standards</li>
                    <li>Implemented modern CI/CD pipelines reducing deployment time by 60%</li>
                    <li>Optimized application performance, reducing load times by 40%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Full Stack Developer</h3>
                  <p className="text-blue-600 font-medium">StartupHub | 2020 - 2022</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Built scalable MERN stack applications from conception to deployment</li>
                    <li>Designed and implemented RESTful APIs serving mobile and web clients</li>
                    <li>Collaborated with design team to create intuitive user experiences</li>
                    <li>Launched 5 major product features that increased user engagement by 35%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Frontend Developer</h3>
                  <p className="text-blue-600 font-medium">WebAgency | 2019 - 2020</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Created responsive websites for 20+ clients across various industries</li>
                    <li>Implemented pixel-perfect designs with attention to accessibility</li>
                    <li>Optimized sites for performance and SEO, improving rankings by 25%</li>
                    <li>Maintained and updated existing client websites</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                  <p className="text-gray-700">React, Next.js, TypeScript, Tailwind CSS, Vue.js, HTML5, CSS3</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                  <p className="text-gray-700">Node.js, Express, Python, PostgreSQL, MongoDB, Redis</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Tools & DevOps</h4>
                  <p className="text-gray-700">Git, Docker, AWS, CI/CD, Jest, Webpack</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Languages</h4>
                  <p className="text-gray-700">JavaScript, TypeScript, Python, SQL</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Education</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-600 font-medium">University of California, Berkeley | 2019</p>
                <p className="text-gray-700 mt-1">
                  Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Key Achievements</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Led migration of legacy system to modern architecture, reducing maintenance costs by 50%</li>
                <li>Architected and built real-time chat system handling 10k+ concurrent users</li>
                <li>Open source contributor with 1000+ GitHub stars across various projects</li>
                <li>Speaker at 3 tech conferences on React performance optimization</li>
              </ul>
            </section>
          </div>
        </div>
      );
    }

    if (file.extension === "txt" || file.extension === "md") {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm leading-relaxed">
            {file.content || `Content of ${file.name}`}
          </pre>
        </div>
      );
    }

    if (file.extension === "docx") {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{file.name}</h2>
          <div className="prose max-w-none text-gray-800">
            <pre className="whitespace-pre-wrap leading-relaxed">{file.content || `Content of ${file.name}`}</pre>
          </div>
        </div>
      );
    }

    if (file.extension === "jpg" || file.extension === "png") {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="bg-gray-100 rounded-lg p-8 mb-4">
            <Image className="w-24 h-24 mx-auto text-gray-400" />
            <p className="text-gray-600 mt-4">Image Preview</p>
            <p className="text-gray-500 text-sm">{file.name}</p>
          </div>
          <p className="text-gray-700">This would display the actual image in a real implementation.</p>
        </div>
      );
    }

    if (file.extension === "mp4") {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="bg-gray-100 rounded-lg p-8 mb-4">
            <Video className="w-24 h-24 mx-auto text-gray-400" />
            <p className="text-gray-600 mt-4">Video Preview</p>
            <p className="text-gray-500 text-sm">{file.name}</p>
          </div>
          <p className="text-gray-700">This would display the actual video player in a real implementation.</p>
        </div>
      );
    }

    if (file.extension === "url") {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Globe className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{file.name}</h2>
          <p className="text-gray-700 mb-4">This link will open:</p>
          <a href={file.content} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline text-lg">
            {file.content}
          </a>
          <div className="mt-6">
            <button
              onClick={() => window.open(file.content, "_blank")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Open Link
            </button>
          </div>
        </div>
      );
    }

    if (file.extension === "html") {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{file.name}</h2>
          <div className="bg-gray-100 rounded-lg p-4">
            <Globe className="w-8 h-8 text-blue-500 mb-2" />
            <p className="text-gray-700">HTML file content would be rendered here.</p>
            <p className="text-gray-500 text-sm mt-2">In a real implementation, this would show the rendered HTML.</p>
          </div>
        </div>
      );
    }

    // Default file content
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{file.name}</h2>
        <p className="text-gray-700 mb-4">{file.content || `This is the content of ${file.name}.`}</p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>Size: {file.size || "Unknown"}</p>
          <p>Modified: {file.dateModified || "Unknown"}</p>
          <p>Type: {file.extension?.toUpperCase() || "File"}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-gray-600" />
            <h1 className="text-lg font-semibold text-gray-900">{file.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                // Simulate download
                alert(`Downloading ${file.name}...`);
              }}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800"
              title="Download"
            >
              <Download className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 hover:text-gray-800" title="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">{getFileContent()}</div>
      </div>
    </div>
  );
}
