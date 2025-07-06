"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const GamepadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 9h2v2H6zm6 0h2v2h-2zM7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h10v16H7V4z" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2v6h3v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8h3V2H6zm14 2v2c0 1.1-.9 2-2 2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const gameProjects = [
    {
      id: 1,
      title: "Cyber Quest RPG",
      category: "rpg",
      difficulty: "Legendary",
      players: "12.5K",
      rating: 4.9,
      image: "🏰",
      description: "An immersive cyberpunk RPG with deep character customization and branching storylines.",
      technologies: ["Unity", "C#", "Blender", "Photon"],
      features: ["Multiplayer", "Character Customization", "Open World", "Epic Storyline"],
      status: "Live",
      year: "2024",
      achievements: ["Best Indie Game 2024", "Player's Choice Award"],
      stats: { downloads: "50K+", revenue: "$125K", rating: "4.9★" },
    },
    {
      id: 2,
      title: "Pixel Warriors Arena",
      category: "action",
      difficulty: "Epic",
      players: "8.3K",
      rating: 4.7,
      image: "⚔️",
      description: "Fast-paced pixel art fighting game with online multiplayer battles and tournaments.",
      technologies: ["React", "Phaser.js", "Socket.io", "Node.js"],
      features: ["Real-time PvP", "Tournament Mode", "Pixel Art Style", "Leaderboards"],
      status: "Live",
      year: "2023",
      achievements: ["Most Addictive Game", "Best Multiplayer"],
      stats: { downloads: "75K+", revenue: "$89K", rating: "4.7★" },
    },
    {
      id: 3,
      title: "Space Colony Builder",
      category: "strategy",
      difficulty: "Epic",
      players: "15.2K",
      rating: 4.8,
      image: "🚀",
      description: "Build and manage your space colony across multiple planets with resource management.",
      technologies: ["WebGL", "Three.js", "TypeScript", "WebAssembly"],
      features: ["Colony Management", "Resource Trading", "Space Exploration", "Research Trees"],
      status: "Beta",
      year: "2024",
      achievements: ["Innovation Award", "Best Strategy Game"],
      stats: { downloads: "35K+", revenue: "$67K", rating: "4.8★" },
    },
    {
      id: 4,
      title: "Mystic Card Legends",
      category: "card",
      difficulty: "Rare",
      players: "22.8K",
      rating: 4.6,
      image: "🃏",
      description: "Collectible card game with strategic deck building and magical creature battles.",
      technologies: ["Vue.js", "Firebase", "WebGL", "Netlify"],
      features: ["Deck Building", "Card Collection", "PvP Battles", "Daily Quests"],
      status: "Live",
      year: "2023",
      achievements: ["Best Card Game", "Community Favorite"],
      stats: { downloads: "120K+", revenue: "$156K", rating: "4.6★" },
    },
    {
      id: 5,
      title: "Neon Racing Circuit",
      category: "racing",
      difficulty: "Epic",
      players: "18.7K",
      rating: 4.9,
      image: "🏎️",
      description: "High-speed neon-themed racing game with customizable vehicles and dynamic tracks.",
      technologies: ["Unreal Engine", "C++", "Substance Painter"],
      features: ["Vehicle Customization", "Dynamic Tracks", "Time Trials", "Split-screen"],
      status: "Live",
      year: "2024",
      achievements: ["Best Racing Game", "Technical Excellence"],
      stats: { downloads: "95K+", revenue: "$234K", rating: "4.9★" },
    },
    {
      id: 6,
      title: "Dungeon Master VR",
      category: "vr",
      difficulty: "Legendary",
      players: "5.4K",
      rating: 4.8,
      image: "🥽",
      description: "Virtual reality dungeon crawler with immersive combat and spell casting.",
      technologies: ["Unity VR", "Oculus SDK", "SteamVR", "C#"],
      features: ["VR Combat", "Spell Casting", "Procedural Dungeons", "Co-op Mode"],
      status: "Development",
      year: "2024",
      achievements: ["VR Innovation Award"],
      stats: { downloads: "15K+", revenue: "$78K", rating: "4.8★" },
    },
  ];

  const categories = [
    { id: "all", label: "All Games", icon: GamepadIcon, count: gameProjects.length },
    { id: "rpg", label: "RPG", icon: TrophyIcon, count: gameProjects.filter((p) => p.category === "rpg").length },
    { id: "action", label: "Action", icon: ZapIcon, count: gameProjects.filter((p) => p.category === "action").length },
    { id: "strategy", label: "Strategy", icon: StarIcon, count: gameProjects.filter((p) => p.category === "strategy").length },
    { id: "card", label: "Card Games", icon: PlayIcon, count: gameProjects.filter((p) => p.category === "card").length },
    { id: "racing", label: "Racing", icon: ZapIcon, count: gameProjects.filter((p) => p.category === "racing").length },
    { id: "vr", label: "VR", icon: EyeIcon, count: gameProjects.filter((p) => p.category === "vr").length },
  ];

  const filteredProjects = activeFilter === "all" ? gameProjects : gameProjects.filter((project) => project.category === activeFilter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Legendary":
        return "text-yellow-400 border-yellow-400 bg-yellow-400/10";
      case "Epic":
        return "text-purple-400 border-purple-400 bg-purple-400/10";
      case "Rare":
        return "text-blue-400 border-blue-400 bg-blue-400/10";
      default:
        return "text-gray-400 border-gray-400 bg-gray-400/10";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/20 border-green-400";
      case "Beta":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400";
      case "Development":
        return "text-purple-400 bg-purple-400/20 border-purple-400";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400";
    }
  };

  return (
    <section className="game-section game-bg-grid bg-gradient-to-b from-purple-900/50 to-indigo-900/50">
      <div className="game-container">
        {/* Section Header */}
        <div className="game-text-center mb-16">
          <div className="game-badge game-badge-epic mb-6">
            <GamepadIcon className="w-5 h-5" />
            Game Portfolio
          </div>
          <h2 className="game-heading text-5xl md:text-7xl mb-6 game-text-gradient">GAME LIBRARY</h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Explore my collection of epic games, from indie masterpieces to AAA-quality experiences. Each project represents a unique
            adventure in game development.
          </p>
        </div>

        {/* Game Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`game-btn px-6 py-3 flex items-center gap-2 ${
                activeFilter === category.id ? "game-btn-primary" : "game-btn-secondary"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="game-grid game-grid-3 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="game-card game-hover-scale transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Game Screenshot/Icon */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">{project.image}</div>

                {/* Game Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                      <PlayIcon className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                      <ExternalLinkIcon className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-cyan-500 hover:bg-cyan-600 rounded-full flex items-center justify-center transition-colors">
                      <CodeIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Game Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="game-heading text-xl game-text-neon">{project.title}</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-bold">{project.rating}</span>
                  </div>
                </div>

                <p className="text-purple-200 text-sm leading-relaxed">{project.description}</p>

                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-black/40 rounded-lg p-2 border border-purple-500/30">
                    <div className="text-purple-400 font-bold text-sm">{project.stats.downloads}</div>
                    <div className="text-gray-400 text-xs">Downloads</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-2 border border-green-500/30">
                    <div className="text-green-400 font-bold text-sm">{project.stats.revenue}</div>
                    <div className="text-gray-400 text-xs">Revenue</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-2 border border-yellow-500/30">
                    <div className="text-yellow-400 font-bold text-sm">{project.stats.rating}</div>
                    <div className="text-gray-400 text-xs">Rating</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/30 text-gray-300 rounded text-xs">+{project.technologies.length - 3}</span>
                  )}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm game-heading">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-xs text-purple-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {project.achievements.length > 0 && (
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                    <h4 className="text-yellow-400 font-semibold text-sm mb-2 flex items-center gap-1">
                      <TrophyIcon className="w-4 h-4" />
                      Achievements
                    </h4>
                    <div className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-xs text-yellow-300">
                          🏆 {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Play Button */}
                <button className="w-full game-btn game-btn-primary py-3">
                  <PlayIcon className="w-5 h-5" />
                  Launch Game
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Game Development Stats */}
        <div className="game-grid md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Games Developed", value: "15+", icon: GamepadIcon, description: "Published titles" },
            { label: "Total Players", value: "250K+", icon: StarIcon, description: "Active players" },
            { label: "Revenue Generated", value: "$890K", icon: TrophyIcon, description: "Total earnings" },
            { label: "Average Rating", value: "4.8★", icon: ZapIcon, description: "Player reviews" },
          ].map((stat, index) => (
            <div key={index} className="game-card game-text-center game-hover-glow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="game-heading text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-purple-300 font-semibold">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="game-text-center">
          <div className="game-card game-card-neon max-w-2xl mx-auto">
            <GamepadIcon className="w-16 h-16 mx-auto mb-6 text-purple-400 game-hover-float" />
            <h3 className="game-heading text-3xl mb-4 game-text-gradient">Ready to Build the Next Hit Game?</h3>
            <p className="text-xl text-purple-200 mb-8">
              Let's collaborate on creating an epic gaming experience that players will love and remember!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="game-btn game-btn-primary">
                <ZapIcon className="w-5 h-5" />
                Start New Quest
              </button>
              <button className="game-btn game-btn-secondary">
                <TrophyIcon className="w-5 h-5" />
                Join My Guild
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
