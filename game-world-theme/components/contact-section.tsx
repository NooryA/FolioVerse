"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
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

const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    playerName: "",
    email: "",
    questType: "",
    guildRank: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questComplete, setQuestComplete] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState("Online");

  const questTypes = [
    { id: "collaboration", name: "Collaboration Quest", reward: "Epic Partnership", difficulty: "Legendary" },
    { id: "freelance", name: "Freelance Mission", reward: "Gold Coins", difficulty: "Epic" },
    { id: "consultation", name: "Strategy Consultation", reward: "Wisdom Points", difficulty: "Rare" },
    { id: "mentoring", name: "Training Quest", reward: "Knowledge Orb", difficulty: "Common" },
    { id: "speaking", name: "Guild Presentation", reward: "Fame Points", difficulty: "Epic" },
  ];

  const guildInfo = [
    {
      icon: MailIcon,
      title: "Direct Message",
      value: "gamedev@questmail.com",
      description: "Best for quick communications",
      status: "Online",
    },
    {
      icon: MapPinIcon,
      title: "Guild Location",
      value: "Digital Realm, Cloud City",
      description: "Remote adventures worldwide",
      status: "Active",
    },
    {
      icon: ClockIcon,
      title: "Response Time",
      value: "< 24 hours",
      description: "Usually much faster!",
      status: "Fast",
    },
    {
      icon: TrophyIcon,
      title: "Success Rate",
      value: "98% Quest Completion",
      description: "High-quality delivery guaranteed",
      status: "Legendary",
    },
  ];

  const socialGuilds = [
    { name: "Twitter Guild", icon: "🐦", handle: "@gamedevpro", members: "5.2K" },
    { name: "LinkedIn Alliance", icon: "💼", handle: "/in/gamedevpro", members: "12.8K" },
    { name: "GitHub Codebase", icon: "🐙", handle: "@gamedevpro", members: "3.1K" },
    { name: "Discord Server", icon: "🎮", handle: "GameDev#1337", members: "8.7K" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quest submission
    setTimeout(() => {
      setIsSubmitting(false);
      setQuestComplete(true);
      setFormData({
        playerName: "",
        email: "",
        questType: "",
        guildRank: "",
        message: "",
      });
    }, 2000);
  };

  useEffect(() => {
    const statuses = ["Online", "In Battle", "Coding", "Available"];
    const interval = setInterval(() => {
      setOnlineStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getQuestDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Legendary":
        return "text-yellow-400 border-yellow-400";
      case "Epic":
        return "text-purple-400 border-purple-400";
      case "Rare":
        return "text-blue-400 border-blue-400";
      case "Common":
        return "text-green-400 border-green-400";
      default:
        return "text-gray-400 border-gray-400";
    }
  };

  return (
    <section className="game-section game-bg-pattern bg-gradient-to-b from-indigo-900/50 to-purple-900/50">
      <div className="game-container">
        {/* Section Header */}
        <div className="game-text-center mb-16">
          <div className="game-badge game-badge-online mb-6">
            <MessageIcon className="w-5 h-5" />
            Quest Board
          </div>
          <h2 className="game-heading text-5xl md:text-7xl mb-6 game-text-gradient">JOIN MY GUILD</h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Ready to embark on an epic development quest? Send me a message and let's create something legendary together!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Quest Form */}
          <div className="lg:col-span-2">
            <div className="game-card game-card-neon">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <SendIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="game-heading text-2xl game-text-neon">New Quest Request</h3>
                  <p className="text-purple-300">Fill out the form to start your adventure</p>
                </div>
              </div>

              {questComplete ? (
                <div className="game-text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 game-hover-glow">
                    <CheckIcon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="game-heading text-2xl text-white mb-4">Quest Accepted!</h4>
                  <p className="text-purple-300 mb-6">
                    🎉 Your quest has been successfully submitted to the guild master. Expect a response within 24 hours!
                  </p>
                  <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-4 mb-6">
                    <p className="text-green-400 font-semibold">+500 XP gained for quest submission!</p>
                  </div>
                  <button onClick={() => setQuestComplete(false)} className="game-btn game-btn-secondary">
                    Submit Another Quest
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="game-form-group">
                      <label className="game-form-label">Player Name *</label>
                      <input
                        type="text"
                        name="playerName"
                        value={formData.playerName}
                        onChange={handleInputChange}
                        className="game-form-input"
                        placeholder="Enter your player name"
                        required
                      />
                    </div>
                    <div className="game-form-group">
                      <label className="game-form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="game-form-input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="game-form-group">
                      <label className="game-form-label">Quest Type *</label>
                      <select name="questType" value={formData.questType} onChange={handleInputChange} className="game-form-input" required>
                        <option value="">Select your quest</option>
                        {questTypes.map((quest) => (
                          <option key={quest.id} value={quest.id}>
                            {quest.name} - {quest.difficulty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="game-form-group">
                      <label className="game-form-label">Guild Rank</label>
                      <select name="guildRank" value={formData.guildRank} onChange={handleInputChange} className="game-form-input">
                        <option value="">Select your rank</option>
                        <option value="novice">Novice Developer</option>
                        <option value="apprentice">Apprentice Coder</option>
                        <option value="journeyman">Journeyman Engineer</option>
                        <option value="expert">Expert Architect</option>
                        <option value="master">Master Developer</option>
                        <option value="grandmaster">Grandmaster</option>
                      </select>
                    </div>
                  </div>

                  <div className="game-form-group">
                    <label className="game-form-label">Quest Details *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="game-form-input min-h-[120px] resize-none"
                      placeholder="Describe your quest objectives, requirements, timeline, and any special challenges you're facing..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Quest Preview */}
                  {formData.questType && (
                    <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-4">
                      {(() => {
                        const selectedQuest = questTypes.find((q) => q.id === formData.questType);
                        return selectedQuest ? (
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-purple-400 font-semibold">Selected Quest:</h4>
                              <p className="text-white">{selectedQuest.name}</p>
                            </div>
                            <div className="text-right">
                              <div
                                className={`px-3 py-1 rounded border text-xs font-bold ${getQuestDifficultyColor(
                                  selectedQuest.difficulty
                                )}`}
                              >
                                {selectedQuest.difficulty}
                              </div>
                              <p className="text-purple-300 text-sm mt-1">Reward: {selectedQuest.reward}</p>
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full game-btn game-btn-primary py-4 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Quest...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <SendIcon className="w-5 h-5" />
                        Submit Quest
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Guild Information */}
          <div className="space-y-8">
            {/* Player Status */}
            <div className="game-card game-card-pink">
              <div className="game-text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  GM
                </div>
                <h3 className="game-heading text-xl game-text-neon mb-2">Guild Master</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">{onlineStatus}</span>
                </div>
                <p className="text-purple-300 text-sm">Ready to lead epic development quests and create legendary digital experiences!</p>
              </div>
            </div>

            {/* Guild Contact Info */}
            <div className="game-card">
              <h3 className="game-heading text-xl game-text-neon mb-6">Guild Information</h3>
              <div className="space-y-4">
                {guildInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 bg-black/40 rounded-lg border border-purple-500/30">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-purple-300 font-medium">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Guilds */}
            <div className="game-card game-card-cyan">
              <h3 className="game-heading text-xl game-text-neon mb-6">Allied Guilds</h3>
              <div className="space-y-3">
                {socialGuilds.map((guild, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/10 transition-all game-hover-scale"
                  >
                    <span className="text-2xl">{guild.icon}</span>
                    <div className="flex-1 text-left">
                      <div className="text-white font-semibold">{guild.name}</div>
                      <div className="text-cyan-300 text-sm">{guild.handle}</div>
                    </div>
                    <div className="text-cyan-400 text-sm">{guild.members}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quest Rewards */}
        <div className="mb-16">
          <h3 className="game-heading text-3xl game-text-center game-text-neon mb-12">Quest Rewards</h3>
          <div className="game-grid md:grid-cols-5 gap-6">
            {questTypes.map((quest, index) => (
              <div key={index} className="game-card game-text-center game-hover-glow">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center border-2 ${getQuestDifficultyColor(
                    quest.difficulty
                  )}`}
                >
                  <TrophyIcon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{quest.name}</h4>
                <div className={`px-2 py-1 rounded text-xs font-bold border ${getQuestDifficultyColor(quest.difficulty)} mb-2`}>
                  {quest.difficulty}
                </div>
                <p className="text-purple-300 text-xs">{quest.reward}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="game-text-center">
          <div className="game-card game-card-neon max-w-2xl mx-auto">
            <ZapIcon className="w-16 h-16 mx-auto mb-6 text-purple-400 game-hover-float" />
            <h3 className="game-heading text-3xl mb-4 game-text-gradient">Ready to Start Your Epic Quest?</h3>
            <p className="text-xl text-purple-200 mb-8">
              Join the guild of legendary developers and let's create digital magic that will be remembered for ages!
            </p>
            <div className="flex items-center justify-center gap-2 text-green-400 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Guild Master is Online - Ready for Adventure!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
