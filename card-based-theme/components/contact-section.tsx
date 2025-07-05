"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Shuffle,
  RotateCcw,
  Star,
  Crown,
  Zap,
  Trophy,
  Heart,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedContactHand, setSelectedContactHand] = useState<number[]>([]);
  const [dealingCards, setDealingCards] = useState(false);
  const [gameMode, setGameMode] = useState<"draw" | "play" | "win">("draw");
  const [messageCards, setMessageCards] = useState<any[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Contact Invitation Cards
  const contactInvitations = [
    {
      id: 1,
      type: "Email Quest",
      rarity: "Legendary",
      power: 95,
      title: "Digital Message Portal",
      description: "Send a mystical email through the digital realm",
      effect: "Instant response within 24 hours",
      contact: "alex@example.com",
      icon: <Mail className="w-8 h-8" />,
      element: "⚡",
      cardColor: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-400",
      cost: 0,
    },
    {
      id: 2,
      type: "Voice Call Summon",
      rarity: "Epic",
      power: 88,
      title: "Telephonic Communication Spell",
      description: "Direct voice connection across the network",
      effect: "Immediate conversation if available",
      contact: "+1 (555) 123-4567",
      icon: <Phone className="w-8 h-8" />,
      element: "📞",
      cardColor: "from-green-500 to-emerald-600",
      borderColor: "border-green-400",
      cost: 1,
    },
    {
      id: 3,
      type: "Location Beacon",
      rarity: "Rare",
      power: 75,
      title: "Physical Realm Coordinates",
      description: "Geographical meeting point in the material world",
      effect: "Coffee meetup available by appointment",
      contact: "San Francisco, CA",
      icon: <MapPin className="w-8 h-8" />,
      element: "🗺️",
      cardColor: "from-purple-500 to-indigo-600",
      borderColor: "border-purple-400",
      cost: 2,
    },
    {
      id: 4,
      type: "GitHub Alliance",
      rarity: "Epic",
      power: 90,
      title: "Code Repository Connection",
      description: "Join forces in the realm of code collaboration",
      effect: "Instant code sharing and collaboration",
      contact: "github.com/alexdev",
      icon: <Github className="w-8 h-8" />,
      element: "💻",
      cardColor: "from-gray-700 to-gray-900",
      borderColor: "border-gray-600",
      cost: 1,
    },
    {
      id: 5,
      type: "LinkedIn Network",
      rarity: "Rare",
      power: 82,
      title: "Professional Network Gateway",
      description: "Connect through professional networking portal",
      effect: "Business opportunities and partnerships",
      contact: "linkedin.com/in/alexdev",
      icon: <Linkedin className="w-8 h-8" />,
      element: "🤝",
      cardColor: "from-blue-600 to-blue-800",
      borderColor: "border-blue-500",
      cost: 1,
    },
    {
      id: 6,
      type: "Twitter Stream",
      rarity: "Common",
      power: 65,
      title: "Social Media Broadcasting",
      description: "Quick messages through the twitter-verse",
      effect: "Public conversation and updates",
      contact: "@alexdev",
      icon: <Twitter className="w-8 h-8" />,
      element: "🐦",
      cardColor: "from-sky-400 to-sky-600",
      borderColor: "border-sky-400",
      cost: 0,
    },
  ];

  // Message Template Cards
  const messageTemplates = [
    {
      id: 1,
      title: "Project Collaboration",
      message: "I have an exciting project idea and would love to collaborate...",
      type: "Business",
      rarity: "Epic",
      element: "💼",
    },
    {
      id: 2,
      title: "Freelance Inquiry",
      message: "I'm looking for a developer for a freelance project...",
      type: "Freelance",
      rarity: "Rare",
      element: "💰",
    },
    {
      id: 3,
      title: "Technical Question",
      message: "I have a technical question about...",
      type: "Support",
      rarity: "Common",
      element: "❓",
    },
    {
      id: 4,
      title: "Job Opportunity",
      message: "We have an exciting position that might interest you...",
      type: "Career",
      rarity: "Legendary",
      element: "🚀",
    },
    {
      id: 5,
      title: "Coffee Chat",
      message: "Would you be interested in grabbing coffee to discuss...",
      type: "Social",
      rarity: "Rare",
      element: "☕",
    },
  ];

  const shuffleCards = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false);
      setFlippedCards([]);
      setSelectedContactHand([]);
    }, 1000);
  };

  const drawContactCard = (cardId: number) => {
    if (selectedContactHand.includes(cardId)) {
      setSelectedContactHand((prev) => prev.filter((id) => id !== cardId));
    } else if (selectedContactHand.length < 3) {
      setSelectedContactHand((prev) => [...prev, cardId]);
    }
  };

  const dealMessageCards = () => {
    setDealingCards(true);
    setGameMode("play");

    // Simulate dealing cards
    messageTemplates.forEach((_, index) => {
      setTimeout(() => {
        setMessageCards((prev) => [...prev, messageTemplates[index]]);
      }, index * 300);
    });

    setTimeout(() => {
      setDealingCards(false);
    }, messageTemplates.length * 300);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "from-yellow-400 via-orange-500 to-red-600";
      case "Epic":
        return "from-purple-500 via-blue-600 to-cyan-600";
      case "Rare":
        return "from-blue-500 to-purple-600";
      case "Common":
        return "from-gray-400 to-gray-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const playContactCombo = () => {
    if (selectedContactHand.length > 0) {
      setGameMode("win");
      // Simulate successful contact
      setTimeout(() => {
        alert("🎉 Contact combo successful! Message sent to selected channels!");
        setGameMode("draw");
        setSelectedContactHand([]);
        setMessageCards([]);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Card Table Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px), radial-gradient(circle at 75% 75%, #06b6d4 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Game Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6 bg-black/50 backdrop-blur-lg rounded-2xl px-8 py-4 border border-cyan-500/50">
            <div className="text-4xl">🃏</div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Contact Card Game
            </h2>
            <div className="text-4xl">📧</div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Draw your contact cards, build your communication hand, and play your connection combo!
          </p>
        </div>

        {/* Game Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={shuffleCards}
            disabled={isShuffling}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Shuffle className={`w-5 h-5 ${isShuffling ? "animate-spin" : ""}`} />
            {isShuffling ? "Shuffling..." : "Shuffle Deck"}
          </button>

          <button
            onClick={dealMessageCards}
            disabled={dealingCards || gameMode !== "draw"}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {dealingCards ? "Dealing..." : "Deal Message Cards"}
          </button>

          <button
            onClick={playContactCombo}
            disabled={selectedContactHand.length === 0 || gameMode === "win"}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
          >
            <Trophy className="w-5 h-5" />
            Play Combo ({selectedContactHand.length}/3)
          </button>
        </div>

        {/* Contact Hand Display */}
        {selectedContactHand.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-6">🎯 Your Contact Hand</h3>
            <div className="flex justify-center gap-4">
              {selectedContactHand.map((cardId, index) => {
                const card = contactInvitations.find((c) => c.id === cardId)!;
                return (
                  <div
                    key={cardId}
                    className="w-48 h-64 transform hover:scale-110 transition-all duration-300"
                    style={{
                      transform: `rotate(${(index - 1) * 5}deg) translateY(-${index * 10}px)`,
                      zIndex: 10 + index,
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${card.cardColor} rounded-2xl border-4 ${card.borderColor} shadow-2xl p-4 text-white relative`}
                    >
                      <div className="absolute top-2 right-2 text-2xl animate-pulse">{card.element}</div>
                      <div className="text-center">
                        <div className="mb-2">{card.icon}</div>
                        <h4 className="font-bold text-sm mb-1">{card.type}</h4>
                        <div className="text-xs opacity-75 mb-2">{card.rarity}</div>
                        <div className="bg-white/20 rounded-lg p-2">
                          <div className="text-xl font-bold">PWR {card.power}</div>
                          <div className="text-xs">Cost: {card.cost}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Contact Invitation Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">🎴 Draw Your Contact Cards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInvitations.map((card, index) => (
              <div
                key={card.id}
                className={`relative cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                  selectedContactHand.includes(card.id) ? "ring-4 ring-yellow-400 scale-110" : ""
                } ${isShuffling ? "animate-bounce" : ""}`}
                onClick={() => drawContactCard(card.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-full h-80 bg-gradient-to-br ${card.cardColor} rounded-2xl border-4 ${card.borderColor} shadow-2xl overflow-hidden relative`}
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-start p-4">
                    <div className="text-3xl animate-pulse">{card.element}</div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getRarityColor(
                        card.rarity
                      )} text-white shadow-lg`}
                    >
                      {card.rarity}
                    </div>
                  </div>

                  {/* Card Icon */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-3">{card.icon}</div>
                  </div>

                  {/* Card Info */}
                  <div className="px-4 text-white">
                    <h3 className="text-lg font-bold mb-2 text-center">{card.type}</h3>
                    <h4 className="text-sm font-semibold mb-2 text-center opacity-90">{card.title}</h4>
                    <p className="text-xs opacity-75 text-center mb-4 line-clamp-2">{card.description}</p>

                    {/* Card Stats */}
                    <div className="bg-white/20 rounded-lg p-3 mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs">Power:</span>
                        <span className="font-bold">{card.power}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Cost:</span>
                        <span className="font-bold">{card.cost} mana</span>
                      </div>
                    </div>

                    {/* Effect */}
                    <div className="text-center">
                      <div className="text-xs bg-black/30 rounded-lg p-2">
                        <strong>Effect:</strong> {card.effect}
                      </div>
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedContactHand.includes(card.id) && (
                    <div className="absolute inset-0 bg-yellow-400/20 flex items-center justify-center">
                      <div className="bg-yellow-400 text-black rounded-full p-3">
                        <Star className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Template Cards */}
        {gameMode === "play" && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">💌 Choose Your Message Card</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {messageCards.map((template, index) => (
                <div
                  key={template.id}
                  className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-full h-64 bg-gradient-to-br ${getRarityColor(
                      template.rarity
                    )} rounded-2xl border-4 border-white/20 shadow-xl p-4 text-white relative overflow-hidden`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-3">{template.element}</div>
                      <h4 className="font-bold text-sm mb-2">{template.title}</h4>
                      <div className="text-xs opacity-75 mb-3">{template.type}</div>
                      <p className="text-xs leading-relaxed opacity-90 line-clamp-4">{template.message}</p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm">Use Template</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Victory Screen */}
        {gameMode === "win" && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-8 text-center text-white shadow-2xl border-4 border-yellow-400">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-3xl font-bold mb-4">Perfect Contact Combo!</h3>
              <p className="text-xl mb-6">Your message has been sent successfully across all selected channels!</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setGameMode("draw");
                    setSelectedContactHand([]);
                    setMessageCards([]);
                  }}
                  className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">⚡ Quick Connect</h3>
            <div className="space-y-4">
              <a
                href="mailto:alex@example.com"
                className="block bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Email Portal</div>
                    <div className="text-sm opacity-90">alex@example.com</div>
                  </div>
                </div>
              </a>

              <a
                href="tel:+15551234567"
                className="block bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Voice Channel</div>
                    <div className="text-sm opacity-90">+1 (555) 123-4567</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">📊 Connection Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">24h</div>
                <div className="text-xs opacity-90">Response Time</div>
                <Zap className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="text-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">98%</div>
                <div className="text-xs opacity-90">Success Rate</div>
                <Crown className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="text-center bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">100+</div>
                <div className="text-xs opacity-90">Connections</div>
                <Trophy className="w-4 h-4 mx-auto mt-2" />
              </div>

              <div className="text-center bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-4 text-white">
                <div className="text-2xl font-bold mb-1">∞</div>
                <div className="text-xs opacity-90">Coffee</div>
                <Heart className="w-4 h-4 mx-auto mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
