"use client";

import { useState, useEffect } from "react";
import { Shuffle, Code, Database, Palette, Globe, Server, Smartphone, Trophy, Star, Award, Zap } from "lucide-react";

// Developer Skill Cards - Relevant to portfolio
const initialSkillCards = [
  {
    id: 1,
    name: "React Expert",
    category: "Frontend",
    level: 95,
    experience: "5+ years",
    projects: 45,
    description: "Building modern, interactive user interfaces with React ecosystem",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-400",
    technologies: ["React", "Redux", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    name: "Node.js Specialist",
    category: "Backend",
    level: 90,
    experience: "4+ years",
    projects: 35,
    description: "Server-side development with scalable Node.js applications",
    icon: <Server className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-400",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Database Architect",
    category: "Backend",
    level: 85,
    experience: "4+ years",
    projects: 30,
    description: "Designing efficient database structures and optimizations",
    icon: <Database className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-400",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    id: 4,
    name: "UI/UX Designer",
    category: "Design",
    level: 80,
    experience: "3+ years",
    projects: 25,
    description: "Creating beautiful and intuitive user experiences",
    icon: <Palette className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-400",
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
  },
  {
    id: 5,
    name: "Mobile Developer",
    category: "Mobile",
    level: 75,
    experience: "2+ years",
    projects: 20,
    description: "Cross-platform mobile app development",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-400",
    technologies: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: 6,
    name: "DevOps Engineer",
    category: "Infrastructure",
    level: 70,
    experience: "2+ years",
    projects: 15,
    description: "Cloud deployment and infrastructure management",
    icon: <Globe className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-400",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState("skills");
  const [isShuffling, setIsShuffling] = useState(false);
  const [skillCards, setSkillCards] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    setSkillCards(initialSkillCards);
  }, []);

  if (!mounted) return null;

  // Experience Cards
  const experienceCards = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      achievements: ["Led team of 5 developers", "Improved performance by 40%", "Launched 3 major products"],
      color: "from-blue-500 to-blue-600",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      achievements: ["Built scalable APIs", "Mentored junior developers", "Reduced server costs by 30%"],
      color: "from-green-500 to-green-600",
      icon: <Award className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Studio Ltd.",
      period: "2019 - 2020",
      achievements: ["Developed responsive UIs", "Collaborated with designers", "Improved user engagement"],
      color: "from-purple-500 to-purple-600",
      icon: <Star className="w-6 h-6" />,
    },
  ];

  // Shuffle functionality
  const shuffleDeck = () => {
    setIsShuffling(true);

    setTimeout(() => {
      const shuffled = [...skillCards].sort(() => Math.random() - 0.5);
      setSkillCards(shuffled);
      setIsShuffling(false);
    }, 1000);
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-blue-500";
    if (level >= 70) return "text-yellow-500";
    return "text-gray-500";
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    return "Beginner";
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my skills, experience, and expertise through my developer portfolio collection
          </p>
        </div>

        {/* Deck Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
            {["skills", "experience", "achievements"].map((deck) => (
              <button
                key={deck}
                onClick={() => setSelectedDeck(deck)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDeck === deck
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {deck === "skills" && "💻 Technical Skills"}
                {deck === "experience" && "🏢 Work Experience"}
                {deck === "achievements" && "🏆 Achievements"}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards */}
        {selectedDeck === "skills" && (
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <button
                onClick={shuffleDeck}
                disabled={isShuffling}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <Shuffle className={`w-6 h-6 ${isShuffling ? "animate-spin" : ""}`} />
                <span className="text-lg">{isShuffling ? "Shuffling Cards..." : "Shuffle My Skills"}</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                    isShuffling ? "animate-bounce" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
                  >
                    {/* Card Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">{card.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{card.name}</h3>
                        <p className="text-white/80 text-sm">{card.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-sm mb-6 leading-relaxed">{card.description}</p>

                    {/* Level & Stats */}
                    <div className="bg-white/20 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white/80 text-sm font-medium">Skill Level</span>
                        <span className="text-white font-bold text-lg">{card.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div className="bg-white rounded-full h-3 transition-all duration-1000" style={{ width: `${card.level}%` }}></div>
                      </div>
                      <div className="flex justify-between mt-3 text-xs text-white/75">
                        <span>{card.experience} experience</span>
                        <span>{card.projects} projects</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {card.technologies.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Level Badge */}
                    <div className="absolute -top-2 -right-2">
                      <div
                        className={`bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getLevelColor(card.level)}`}
                      >
                        {getLevelLabel(card.level)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Cards */}
        {selectedDeck === "experience" && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Professional Journey</h3>
            <div className="space-y-6">
              {experienceCards.map((exp, index) => (
                <div key={exp.id} className="group">
                  <div
                    className={`bg-gradient-to-br ${exp.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">{exp.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-white/90 text-lg font-medium mb-2">{exp.company}</p>
                        <p className="text-white/75 text-sm mb-4">{exp.period}</p>

                        <div className="grid md:grid-cols-3 gap-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="bg-white/20 rounded-lg p-3">
                              <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-yellow-300" />
                                <span className="text-sm font-medium">{achievement}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {selectedDeck === "achievements" && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Key Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Projects Completed", value: "50+", icon: "🚀", color: "from-blue-500 to-blue-600" },
                { title: "Years Experience", value: "5+", icon: "⏰", color: "from-green-500 to-green-600" },
                { title: "Client Satisfaction", value: "99%", icon: "😊", color: "from-purple-500 to-purple-600" },
                { title: "Code Quality Score", value: "A+", icon: "⭐", color: "from-orange-500 to-orange-600" },
              ].map((achievement, index) => (
                <div key={index} className="group">
                  <div
                    className={`bg-gradient-to-br ${achievement.color} rounded-2xl p-6 text-white text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                    <div className="text-sm text-white/80">{achievement.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Summary */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Portfolio Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">50+</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">15</div>
              <div className="text-sm text-gray-600">Awards Won</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
