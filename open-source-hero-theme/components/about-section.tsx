import { Code, Users, Star, GitBranch, Award, Calendar, MapPin, Link } from "lucide-react";

export function AboutSection() {
  const stats = [
    { label: "Public Repos", value: "47", icon: Code },
    { label: "Followers", value: "2.3K", icon: Users },
    { label: "Stars Earned", value: "8.7K", icon: Star },
    { label: "Commits", value: "1.2K", icon: GitBranch },
  ];

  const achievements = [
    {
      title: "Arctic Code Vault Contributor",
      description: "Contributed code to repositories in the 2020 GitHub Archive Program",
      icon: "🏔️",
      date: "2020",
    },
    {
      title: "Pull Shark",
      description: "Opened pull requests that have been merged",
      icon: "🦈",
      date: "2023",
    },
    {
      title: "YOLO",
      description: "Merged a pull request without reviewing it first",
      icon: "🎲",
      date: "2023",
    },
    {
      title: "Quickdraw",
      description: "Closed an issue or pull request within 5 minutes of it being opened",
      icon: "⚡",
      date: "2023",
    },
  ];

  const languages = [
    { name: "TypeScript", percentage: 65, color: "#3178c6" },
    { name: "JavaScript", percentage: 20, color: "#f1e05a" },
    { name: "Python", percentage: 10, color: "#3572A5" },
    { name: "CSS", percentage: 5, color: "#1572B6" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="text-lg">
                I&apos;m a passionate full-stack developer and open-source enthusiast with over 5 years of experience building modern web
                applications. I love contributing to the open-source community and sharing knowledge through code.
              </p>
              <p>
                My expertise spans across frontend frameworks like React and Vue.js, backend technologies including Node.js and Python, and
                cloud platforms like AWS and Google Cloud. I believe in writing clean, maintainable code and following best practices.
              </p>
              <p>
                When I&apos;m not coding, you can find me mentoring junior developers, writing technical blog posts, or exploring new
                technologies. I&apos;m always excited to collaborate on interesting projects and contribute to meaningful open-source
                initiatives.
              </p>
            </div>

            {/* Personal Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Link className="w-5 h-5" />
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  alexrodriguez.dev
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>Joined GitHub in 2019</span>
              </div>
            </div>
          </div>

          {/* Stats and Achievements */}
          <div className="space-y-8">
            {/* GitHub Stats */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">GitHub Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Languages */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Most Used Languages</h3>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                        <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{achievement.title}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
