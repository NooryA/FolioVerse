"use client";

import { useState, useEffect } from "react";

// Guild Hall Icons
const TavernIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 2l1.5 4h5L16 2h1l-1.5 4h2.5c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2.5L7 2h1zm3 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </svg>
);

const QuestIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const MessageIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 16L3 5l4.5 4L12 4l4.5 5L21 5l-2 11H5z" />
  </svg>
);

const LinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function ContactSection() {
  const [selectedNPC, setSelectedNPC] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    questType: "collaboration",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questSubmitted, setQuestSubmitted] = useState(false);
  const [tavernActivity, setTavernActivity] = useState("bustling");

  // Tavern NPCs & Quest Givers
  const tavernNPCs = [
    {
      id: "guild-master",
      name: "Alex the Guild Master",
      title: "Legendary Full-Stack Archmage",
      avatar: "🧙‍♂️",
      status: "active",
      specialty: "Epic Development Quests",
      description:
        "The legendary guild master who has conquered countless digital realms. Seeks worthy allies for epic development adventures.",
      questTypes: ["Full-Stack Development", "Technical Leadership", "System Architecture", "Mentoring"],
      dialogue: "Greetings, brave adventurer! I sense great potential in you. What epic quest shall we embark upon together?",
      availability: "Always ready for new adventures",
      experience: "8+ Years",
      completedQuests: 150,
      rating: 5.0,
    },
    {
      id: "project-coordinator",
      name: "Sarah the Quest Coordinator",
      title: "Project Management Sage",
      avatar: "📋",
      status: "active",
      specialty: "Project Organization & Strategy",
      description:
        "A wise coordinator who ensures all quests run smoothly and efficiently. Expert in organizing complex multi-party adventures.",
      questTypes: ["Project Management", "Team Coordination", "Strategic Planning", "Agile Development"],
      dialogue: "Welcome to our guild! I can help organize your quest requirements and ensure a successful adventure.",
      availability: "Available for strategic planning",
      experience: "6+ Years",
      completedQuests: 89,
      rating: 4.9,
    },
    {
      id: "mentor-sage",
      name: "Marcus the Mentor Sage",
      title: "Knowledge Guardian",
      avatar: "🎓",
      status: "active",
      specialty: "Teaching & Knowledge Transfer",
      description:
        "A patient teacher who guides newcomers through their first quests. Specializes in knowledge sharing and skill development.",
      questTypes: ["Code Reviews", "Technical Mentoring", "Best Practices", "Skill Development"],
      dialogue: "Ah, a new seeker of knowledge! I'd be honored to guide you on your learning journey.",
      availability: "Open for mentoring sessions",
      experience: "5+ Years Teaching",
      completedQuests: 200,
      rating: 5.0,
    },
  ];

  // Available Quests/Services
  const availableQuests = [
    {
      id: "epic-development",
      title: "Epic Development Quest",
      difficulty: "legendary",
      description: "Full-scale application development with modern technologies",
      duration: "3-6 months",
      reward: "Legendary Application + Ongoing Support",
      requirements: ["Clear vision", "Dedicated timeline", "Collaborative spirit"],
      icon: "⚔️",
    },
    {
      id: "consultation-mission",
      title: "Technical Consultation Mission",
      difficulty: "epic",
      description: "Strategic technical guidance and architecture planning",
      duration: "1-2 weeks",
      reward: "Comprehensive Technical Roadmap",
      requirements: ["Technical challenges", "Open to recommendations", "Implementation goals"],
      icon: "🧠",
    },
    {
      id: "mentoring-journey",
      title: "Developer Mentoring Journey",
      difficulty: "rare",
      description: "Personalized guidance for skill development and career growth",
      duration: "Ongoing",
      reward: "Enhanced Skills + Career Advancement",
      requirements: ["Learning commitment", "Regular sessions", "Growth mindset"],
      icon: "🎓",
    },
    {
      id: "code-review-service",
      title: "Code Review & Optimization",
      difficulty: "uncommon",
      description: "Expert code analysis and performance improvements",
      duration: "1 week",
      reward: "Optimized Codebase + Best Practices Guide",
      requirements: ["Existing codebase", "Improvement goals", "Technical documentation"],
      icon: "🔍",
    },
  ];

  // Social Guild Connections
  const guildConnections = [
    { name: "GitHub Guild", icon: "💻", url: "#", description: "Code repositories and open source contributions" },
    { name: "LinkedIn Alliance", icon: "💼", url: "#", description: "Professional network and career updates" },
    { name: "Twitter Fellowship", icon: "🐦", url: "#", description: "Daily insights and tech discussions" },
    { name: "Discord Server", icon: "🎮", url: "#", description: "Real-time chat and community discussions" },
  ];

  // Tavern atmosphere updates
  useEffect(() => {
    const activities = ["bustling", "lively", "peaceful", "mysterious"];
    const interval = setInterval(() => {
      setTavernActivity(activities[Math.floor(Math.random() * activities.length)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleQuestSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quest submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setQuestSubmitted(true);

    // Reset form after a delay
    setTimeout(() => {
      setQuestSubmitted(false);
      setFormData({ name: "", email: "", questType: "collaboration", message: "" });
    }, 5000);
  };

  const getRarityColor = (difficulty: string) => {
    switch (difficulty) {
      case "legendary":
        return "border-yellow-500 bg-yellow-500/20 text-yellow-400";
      case "epic":
        return "border-purple-500 bg-purple-500/20 text-purple-400";
      case "rare":
        return "border-blue-500 bg-blue-500/20 text-blue-400";
      default:
        return "border-gray-500 bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 bg-gradient-to-br from-amber-900/20 via-orange-900/30 to-red-900/20">
      {/* Tavern Atmosphere Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating candles and mystical elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          >
            <div className="text-2xl">{["🕯️", "🍺", "📜", "⚔️", "🛡️", "💰", "🔮", "📚"][Math.floor(Math.random() * 8)]}</div>
          </div>
        ))}

        {/* Tavern ambiance particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-1 bg-yellow-400 rounded-full" />
          </div>
        ))}
      </div>

      <div className="game-container relative z-10">
        {/* Guild Hall Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full mb-8">
            <TavernIcon className="w-6 h-6 text-amber-500" />
            <span className="text-amber-400 font-bold">THE GUILD HALL & TAVERN</span>
          </div>

          <h2 className="game-title text-5xl md:text-7xl mb-6">Recruit Your Party</h2>

          <p className="text-xl text-amber-300 max-w-3xl mx-auto mb-8">
            Welcome to the legendary Guild Hall! Here, brave adventurers gather to form parties, share quests, and embark on epic
            development journeys. The tavern is {tavernActivity} tonight - perfect for recruiting new allies and starting grand adventures.
          </p>

          {/* Tavern Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-bold">Tavern Open - NPCs Available</span>
          </div>
        </div>

        {/* Tavern NPCs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">🏰 Meet the Guild Members</h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {tavernNPCs.map((npc) => (
              <div
                key={npc.id}
                className={`group cursor-pointer transition-all duration-500 ${selectedNPC === npc.id ? "scale-105" : "hover:scale-102"}`}
                onClick={() => setSelectedNPC(selectedNPC === npc.id ? null : npc.id)}
              >
                <div
                  className={`game-window p-6 h-full border-2 ${
                    selectedNPC === npc.id
                      ? "border-amber-500/50 shadow-2xl shadow-amber-500/30"
                      : "border-amber-500/30 hover:border-amber-500/50"
                  }`}
                >
                  {/* NPC Portrait */}
                  <div className="text-center mb-6">
                    <div className="character-portrait w-20 h-20 mx-auto mb-4 animate-float">
                      <span className="text-5xl">{npc.avatar}</span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1">{npc.name}</h4>
                    <p className="text-amber-400 mb-2">{npc.title}</p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm font-bold">{npc.status.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* NPC Details */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-lg font-bold text-amber-400 mb-2">Specialty</h5>
                      <p className="text-gray-300 text-sm">{npc.specialty}</p>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold text-amber-400 mb-2">Services Offered</h5>
                      <div className="flex flex-wrap gap-1">
                        {npc.questTypes.slice(0, 2).map((type, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                            {type}
                          </span>
                        ))}
                        {npc.questTypes.length > 2 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">+{npc.questTypes.length - 2} more</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="game-stat">
                        <div className="game-stat-label text-xs">Quests</div>
                        <div className="game-stat-value text-sm text-green-500">{npc.completedQuests}</div>
                      </div>
                      <div className="game-stat">
                        <div className="game-stat-label text-xs">Rating</div>
                        <div className="game-stat-value text-sm text-yellow-500">⭐ {npc.rating}</div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded NPC Info */}
                  {selectedNPC === npc.id && (
                    <div className="mt-6 pt-6 border-t border-amber-500/30 animate-level-up">
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-lg font-bold text-amber-400 mb-2">💬 Dialogue</h5>
                          <p className="text-gray-300 italic text-sm leading-relaxed">"{npc.dialogue}"</p>
                        </div>

                        <div>
                          <h5 className="text-lg font-bold text-amber-400 mb-2">🎯 All Services</h5>
                          <div className="grid grid-cols-1 gap-2">
                            {npc.questTypes.map((type, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 bg-blue-500/20 border border-blue-500/30 rounded">
                                <StarIcon className="w-4 h-4 text-yellow-500" />
                                <span className="text-blue-300 text-sm">{type}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-sm text-green-400 font-bold">{npc.availability}</div>
                          <div className="text-xs text-gray-400">{npc.experience} Experience</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quest Board */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">📋 Available Quests</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableQuests.map((quest) => (
              <div key={quest.id} className="game-panel p-6 text-center">
                <div className="text-4xl mb-4">{quest.icon}</div>

                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${getRarityColor(quest.difficulty)}`}>
                  {quest.difficulty.toUpperCase()}
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{quest.title}</h4>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{quest.description}</p>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-amber-400">{quest.duration}</span>
                  </div>
                  <div className="text-green-400 font-bold">🎁 {quest.reward}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quest Submission Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quest Request Form */}
          <div className="game-window p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🗡️ Submit Your Quest Request</h3>

            {questSubmitted ? (
              <div className="text-center py-12 animate-quest-complete">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-green-400 mb-4">Quest Registered!</h4>
                <p className="text-green-300 mb-6">
                  Your quest has been added to the guild registry. A guild member will review your request and reach out within 24 hours to
                  discuss the adventure details.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-bold">Quest Pending Review</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleQuestSubmission} className="space-y-6">
                <div>
                  <label className="block text-amber-400 font-bold mb-2">Adventurer Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="game-input w-full"
                    placeholder="Enter your name, brave adventurer..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-amber-400 font-bold mb-2">Communication Crystal *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="game-input w-full"
                    placeholder="your.email@domain.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-amber-400 font-bold mb-2">Quest Type *</label>
                  <select name="questType" value={formData.questType} onChange={handleInputChange} className="game-input w-full" required>
                    <option value="collaboration">Epic Development Quest</option>
                    <option value="consultation">Technical Consultation</option>
                    <option value="mentoring">Mentoring Journey</option>
                    <option value="code-review">Code Review Mission</option>
                    <option value="other">Custom Adventure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-amber-400 font-bold mb-2">Quest Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="game-input w-full resize-none"
                    placeholder="Describe your quest, the challenges you face, your goals, and what kind of party member you're seeking..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full game-btn game-btn-gold py-4 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Submitting Quest...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <QuestIcon className="w-5 h-5" />
                      Submit Quest Request
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Guild Connections & Alternative Contact */}
          <div className="space-y-8">
            {/* Direct Communication */}
            <div className="game-window p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">💬 Direct Communication</h3>

              <div className="space-y-4">
                <a href="mailto:contact@alexdev.com" className="game-btn game-btn-primary w-full flex items-center justify-center gap-2">
                  <MailIcon className="w-5 h-5" />
                  Send Magical Message
                </a>

                <button className="game-btn w-full flex items-center justify-center gap-2">
                  <MessageIcon className="w-5 h-5" />
                  Schedule Strategy Meeting
                </button>

                <div className="text-center py-4">
                  <div className="text-amber-400 font-bold mb-2">⏰ Guild Hours</div>
                  <div className="text-gray-300 text-sm">Monday - Friday: 9 AM - 6 PM PST</div>
                  <div className="text-gray-300 text-sm">Response Time: Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Guild Network */}
            <div className="game-window p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🌐 Guild Network</h3>

              <div className="space-y-4">
                {guildConnections.map((connection, index) => (
                  <a
                    key={index}
                    href={connection.url}
                    className="flex items-center gap-4 p-4 bg-gray-500/20 border border-gray-500/30 rounded-lg hover:border-gray-500/50 transition-all group"
                  >
                    <div className="text-3xl">{connection.icon}</div>
                    <div>
                      <div className="font-bold text-white group-hover:text-amber-400 transition-colors">{connection.name}</div>
                      <div className="text-sm text-gray-400">{connection.description}</div>
                    </div>
                    <LinkIcon className="w-5 h-5 text-gray-400 ml-auto group-hover:text-amber-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tavern Keeper's Message */}
        <div className="text-center">
          <div className="game-window max-w-3xl mx-auto p-8">
            <div className="character-portrait w-24 h-24 mx-auto mb-6 animate-float">
              <span className="text-6xl">🧙‍♂️</span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">Message from the Guild Master</h3>
            <p className="text-lg text-amber-300 mb-8 leading-relaxed">
              "Welcome, brave soul! Whether you seek to embark on a grand development quest, need strategic guidance for your current
              adventure, or wish to learn the ancient arts of code, our guild stands ready to assist. Together, we shall forge legendary
              digital experiences and conquer the most challenging technical realms!"
            </p>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="game-stat">
                <div className="game-stat-label">Guild Level</div>
                <div className="game-stat-value text-amber-500">Master</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Success Rate</div>
                <div className="game-stat-value text-green-500">98%</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Response Time</div>
                <div className="game-stat-value text-blue-500">&lt; 24h</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full">
              <CrownIcon className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-bold">Ready to Begin Your Adventure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
