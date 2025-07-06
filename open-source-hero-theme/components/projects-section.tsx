import { Star, GitFork, Eye, Clock, Circle } from "lucide-react";

export function ProjectsSection() {
  const repositories = [
    {
      name: "next-portfolio-template",
      description:
        "A modern, responsive portfolio template built with Next.js and Tailwind CSS. Features dark mode, animations, and mobile-first design.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 1234,
      forks: 89,
      watchers: 45,
      lastUpdated: "2 hours ago",
      topics: ["nextjs", "tailwind", "portfolio", "template", "responsive"],
      isPrivate: false,
      license: "MIT",
    },
    {
      name: "react-component-library",
      description: "A collection of reusable React components with TypeScript support, Storybook documentation, and comprehensive testing.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 892,
      forks: 156,
      watchers: 78,
      lastUpdated: "1 day ago",
      topics: ["react", "components", "typescript", "storybook", "testing"],
      isPrivate: false,
      license: "MIT",
    },
    {
      name: "node-api-boilerplate",
      description:
        "Express.js API boilerplate with JWT authentication, input validation, error handling, and comprehensive API documentation.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 567,
      forks: 78,
      watchers: 34,
      lastUpdated: "3 days ago",
      topics: ["nodejs", "express", "api", "jwt", "boilerplate"],
      isPrivate: false,
      license: "MIT",
    },
    {
      name: "python-data-toolkit",
      description:
        "A comprehensive toolkit for data analysis and visualization with pandas, numpy, and matplotlib. Includes Jupyter notebooks.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 445,
      forks: 67,
      watchers: 23,
      lastUpdated: "5 days ago",
      topics: ["python", "data-science", "pandas", "visualization", "jupyter"],
      isPrivate: false,
      license: "Apache-2.0",
    },
    {
      name: "vue-dashboard-admin",
      description: "Modern admin dashboard built with Vue 3, Composition API, and Pinia. Features charts, tables, and real-time updates.",
      language: "Vue",
      languageColor: "#4FC08D",
      stars: 321,
      forks: 45,
      watchers: 19,
      lastUpdated: "1 week ago",
      topics: ["vue", "dashboard", "admin", "pinia", "charts"],
      isPrivate: false,
      license: "MIT",
    },
    {
      name: "ml-image-classifier",
      description:
        "Machine learning image classifier using TensorFlow and Python. Includes training scripts and web interface for predictions.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 234,
      forks: 32,
      watchers: 12,
      lastUpdated: "2 weeks ago",
      topics: ["machine-learning", "tensorflow", "image-classification", "python"],
      isPrivate: false,
      license: "MIT",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Repositories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of open-source projects showcasing modern web development, data science, and machine learning implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200 p-6"
            >
              {/* Repository Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">{repo.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{repo.description}</p>
                </div>
                <div className="ml-2">
                  {repo.isPrivate ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Private
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Public
                    </span>
                  )}
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-1 mb-4">
                {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                  <span
                    key={topicIndex}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
                {repo.topics.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    +{repo.topics.length - 3}
                  </span>
                )}
              </div>

              {/* Repository Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-1">
                    <Circle className="w-3 h-3 fill-current" style={{ color: repo.languageColor }} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{repo.lastUpdated}</span>
                </div>
              </div>

              {/* License */}
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>License: {repo.license}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{repo.watchers}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            View All Repositories
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
