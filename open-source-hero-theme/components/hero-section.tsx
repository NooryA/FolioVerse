"use client";

import { useState, useEffect } from "react";
import { Star, GitFork, Eye, Users, Activity, Calendar, Code, BookOpen } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Mock contribution data for the past year
  const generateContributions = () => {
    const contributions = [];
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);

    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
      contributions.push({
        date: date.toISOString().split("T")[0],
        level,
        count: level === 0 ? 0 : Math.floor(Math.random() * 20) + 1,
      });
    }
    return contributions;
  };

  const contributions = generateContributions();
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* GitHub-like Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Rodriguez</h1>
              <p className="text-gray-600 dark:text-gray-400">@alex-dev-hero</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors">
              Follow
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Sponsor
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white dark:border-gray-700 shadow-lg"
                />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alex Rodriguez</h2>
                <p className="text-gray-600 dark:text-gray-400">Open Source Enthusiast & Full Stack Developer</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>2.3k</strong> followers · <strong>1.2k</strong> following
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>{totalContributions}</strong> contributions in the last year
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>47</strong> public repositories
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Organizations</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "TypeScript", "Next.js"].map((org) => (
                    <span
                      key={org}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {org}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
              <nav className="flex space-x-8">
                {[
                  { id: "overview", label: "Overview", icon: Activity },
                  { id: "repositories", label: "Repositories", icon: BookOpen },
                  { id: "projects", label: "Projects", icon: Code },
                  { id: "packages", label: "Packages", icon: Star },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600 dark:text-blue-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Popular Repositories */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Popular repositories</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        name: "next-portfolio-template",
                        description: "A modern, responsive portfolio template built with Next.js and Tailwind CSS",
                        language: "TypeScript",
                        stars: 1234,
                        forks: 89,
                        languageColor: "#3178c6",
                      },
                      {
                        name: "react-component-library",
                        description: "A collection of reusable React components with TypeScript support",
                        language: "JavaScript",
                        stars: 892,
                        forks: 156,
                        languageColor: "#f1e05a",
                      },
                      {
                        name: "node-api-boilerplate",
                        description: "Express.js API boilerplate with authentication, validation, and documentation",
                        language: "JavaScript",
                        stars: 567,
                        forks: 78,
                        languageColor: "#f1e05a",
                      },
                      {
                        name: "python-data-toolkit",
                        description: "A comprehensive toolkit for data analysis and visualization",
                        language: "Python",
                        stars: 445,
                        forks: 67,
                        languageColor: "#3572A5",
                      },
                    ].map((repo) => (
                      <div
                        key={repo.name}
                        className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">{repo.name}</h4>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300">
                            Public
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{repo.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                            {repo.language}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {repo.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {repo.forks}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contribution Graph */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {totalContributions} contributions in the last year
                  </h3>
                  <div className="overflow-x-auto">
                    <div className="grid grid-cols-53 gap-1 mb-4" style={{ minWidth: "700px" }}>
                      {contributions.map((day, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-sm ${
                            day.level === 0
                              ? "bg-gray-100 dark:bg-gray-700"
                              : day.level === 1
                              ? "bg-green-200 dark:bg-green-900"
                              : day.level === 2
                              ? "bg-green-300 dark:bg-green-800"
                              : day.level === 3
                              ? "bg-green-400 dark:bg-green-700"
                              : "bg-green-500 dark:bg-green-600"
                          }`}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Less</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-gray-100 dark:bg-gray-700 rounded-sm" />
                        <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm" />
                        <div className="w-3 h-3 bg-green-300 dark:bg-green-800 rounded-sm" />
                        <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm" />
                        <div className="w-3 h-3 bg-green-500 dark:bg-green-600 rounded-sm" />
                      </div>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs content */}
            {activeTab !== "overview" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Content for {activeTab} tab will be displayed here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
