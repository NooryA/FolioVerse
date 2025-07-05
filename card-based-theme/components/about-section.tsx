"use client";

import { useState, useEffect } from "react";
import { Shuffle, RotateCcw, Star, Zap, Crown, Sword, Shield, Gem, Trophy, Heart, Diamond, Club, Spade } from "lucide-react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [currentHand, setCurrentHand] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [selectedDeck, setSelectedDeck] = useState("skills");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Trading Card Collection - Skills as Pokemon-style cards
  const skillCards = [
    {
      id: 1,
      name: "JavaScript Master",
      rarity: "Legendary",
      type: "Frontend",
      level: 95,
      attack: 180,
      defense: 165,
      speed: 190,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=400&fit=crop",
      description: "A powerful card that dominates the frontend battlefield",
      element: "⚡",
      cardColor: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-400",
    },
    {
      id: 2,
      name: "React Wizard",
      rarity: "Epic",
      type: "Frontend",
      level: 92,
      attack: 175,
      defense: 150,
      speed: 185,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=400&fit=crop",
      description: "Casts powerful component spells with hooks",
      element: "🔮",
      cardColor: "from-blue-400 to-cyan-500",
      borderColor: "border-blue-400",
    },
    {
      id: 3,
      name: "Node.js Guardian",
      rarity: "Epic",
      type: "Backend",
      level: 88,
      attack: 160,
      defense: 180,
      speed: 145,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=400&fit=crop",
      description: "Protects servers with asynchronous magic",
      element: "🛡️",
      cardColor: "from-green-400 to-emerald-500",
      borderColor: "border-green-400",
    },
    {
      id: 4,
      name: "Python Sage",
      rarity: "Rare",
      type: "Backend",
      level: 85,
      attack: 155,
      defense: 170,
      speed: 160,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=400&fit=crop",
      description: "Ancient wisdom in clean, readable code",
      element: "🐍",
      cardColor: "from-purple-400 to-indigo-500",
      borderColor: "border-purple-400",
    },
    {
      id: 5,
      name: "UI/UX Enchanter",
      rarity: "Rare",
      type: "Design",
      level: 80,
      attack: 140,
      defense: 130,
      speed: 200,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=400&fit=crop",
      description: "Enchants users with beautiful experiences",
      element: "✨",
      cardColor: "from-pink-400 to-rose-500",
      borderColor: "border-pink-400",
    },
    {
      id: 6,
      name: "Database Oracle",
      rarity: "Uncommon",
      type: "Backend",
      level: 75,
      attack: 130,
      defense: 190,
      speed: 120,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=400&fit=crop",
      description: "Sees through data with SQL vision",
      element: "🔍",
      cardColor: "from-gray-400 to-slate-500",
      borderColor: "border-gray-400",
    },
  ];

  // Playing Card Hands - Different aspects of personality
  const playingCardHands = [
    {
      name: "Personality Hand",
      cards: [
        { suit: "♠️", value: "A", title: "Adaptable", desc: "Ace of problem-solving" },
        { suit: "♥️", value: "K", title: "Kind", desc: "King of collaboration" },
        { suit: "♦️", value: "Q", title: "Quality", desc: "Queen of clean code" },
        { suit: "♣️", value: "J", title: "Jovial", desc: "Jack of all trades" },
        { suit: "♠️", value: "10", title: "Tenacious", desc: "Never gives up" },
      ],
    },
    {
      name: "Work Style Hand",
      cards: [
        { suit: "♥️", value: "A", title: "Agile", desc: "Ace of methodologies" },
        { suit: "♦️", value: "K", title: "Keen", desc: "King of attention to detail" },
        { suit: "♣️", value: "Q", title: "Quick", desc: "Queen of rapid delivery" },
        { suit: "♠️", value: "J", title: "Just", desc: "Jack of fair solutions" },
        { suit: "♥️", value: "9", title: "Noble", desc: "Nine of integrity" },
      ],
    },
    {
      name: "Achievement Hand",
      cards: [
        { suit: "♦️", value: "A", title: "Award Winner", desc: "Ace of recognition" },
        { suit: "♠️", value: "K", title: "Knowledge", desc: "King of learning" },
        { suit: "♣️", value: "Q", title: "Quality Code", desc: "Queen of standards" },
        { suit: "♥️", value: "J", title: "Joy in Work", desc: "Jack of passion" },
        { suit: "♦️", value: "8", title: "8 Years Exp", desc: "Eight of experience" },
      ],
    },
  ];

  // Business Card Collection
  const businessCards = [
    {
      title: "Frontend Developer",
      company: "Tech Innovators Inc.",
      speciality: "React & Vue Specialist",
      years: "3 Years",
      color: "from-blue-500 to-purple-600",
      icon: <Crown className="w-6 h-6" />,
    },
    {
      title: "Full-Stack Engineer",
      company: "Digital Solutions Co.",
      speciality: "MERN Stack Expert",
      years: "2 Years",
      color: "from-green-500 to-teal-600",
      icon: <Sword className="w-6 h-6" />,
    },
    {
      title: "UI/UX Designer",
      company: "Creative Studio Ltd.",
      speciality: "User Experience Design",
      years: "3 Years",
      color: "from-pink-500 to-rose-600",
      icon: <Gem className="w-6 h-6" />,
    },
  ];

  const shuffleDeck = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false);
      setFlippedCards([]);
    }, 1000);
  };

  const flipCard = (cardId: number) => {
    setFlippedCards((prev) => (prev.includes(cardId) ? prev.filter((id) => id !== cardId) : [...prev, cardId]));
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "from-yellow-400 via-orange-500 to-red-500";
      case "Epic":
        return "from-purple-400 via-blue-500 to-cyan-500";
      case "Rare":
        return "from-blue-400 to-purple-500";
      case "Uncommon":
        return "from-green-400 to-blue-500";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Card Table Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.3) 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Card Game Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6 bg-white rounded-2xl px-8 py-4 shadow-xl border-2 border-gray-200">
            <div className="text-4xl">🃏</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Me: The Card Collection</h2>
            <div className="text-4xl">🂡</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover my skills, experience, and personality through an interactive card game experience
          </p>
        </div>

        {/* Card Deck Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border-2 border-gray-200 flex gap-2">
            {["skills", "personality", "experience"].map((deck) => (
              <button
                key={deck}
                onClick={() => setSelectedDeck(deck)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedDeck === deck
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {deck === "skills" && "🎯 Skill Cards"}
                {deck === "personality" && "🂠 Playing Cards"}
                {deck === "experience" && "💼 Business Cards"}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Trading Cards */}
        {selectedDeck === "skills" && (
          <div className="mb-16">
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={shuffleDeck}
                disabled={isShuffling}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Shuffle className={`w-5 h-5 ${isShuffling ? "animate-spin" : ""}`} />
                {isShuffling ? "Shuffling..." : "Shuffle Deck"}
              </button>
              <button
                onClick={() => setFlippedCards([])}
                className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 transition-all duration-300 flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Reset Cards
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
              {skillCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`relative w-full h-96 cursor-pointer transform-style-preserve-3d transition-all duration-700 hover:scale-105 ${
                    flippedCards.includes(card.id) ? "rotate-y-180" : ""
                  } ${isShuffling ? "animate-bounce" : ""}`}
                  onClick={() => flipCard(card.id)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Front */}
                  <div
                    className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl border-4 ${card.borderColor} shadow-xl bg-gradient-to-br ${card.cardColor} p-6 text-white`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-3xl">{card.element}</div>
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getRarityColor(
                          card.rarity
                        )} text-white shadow-lg`}
                      >
                        {card.rarity}
                      </div>
                    </div>

                    <div className="text-center">
                      <img src={card.image} alt={card.name} className="w-32 h-40 mx-auto rounded-lg object-cover shadow-lg mb-4" />
                      <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                      <p className="text-sm opacity-90 mb-4">{card.description}</p>

                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">LVL {card.level}</div>
                        <div className="text-xs opacity-75">{card.type} Type</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Back - Stats */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl border-4 border-gray-300 shadow-xl bg-white p-6">
                    <div className="h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{card.name}</h3>
                        <div className="text-gray-600">Battle Stats</div>
                      </div>

                      <div className="space-y-4 flex-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Sword className="w-5 h-5 text-red-500" />
                            <span className="font-semibold">Attack</span>
                          </div>
                          <div className="font-bold text-red-500">{card.attack}</div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-500" />
                            <span className="font-semibold">Defense</span>
                          </div>
                          <div className="font-bold text-blue-500">{card.defense}</div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <span className="font-semibold">Speed</span>
                          </div>
                          <div className="font-bold text-yellow-500">{card.speed}</div>
                        </div>
                      </div>

                      <div className="text-center text-sm text-gray-500 mt-4">Click to flip back</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Playing Card Hands */}
        {selectedDeck === "personality" && (
          <div className="mb-16">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl p-2 shadow-lg border-2 border-gray-200 flex gap-2">
                {playingCardHands.map((hand, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHand(index)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      currentHand === index ? "bg-gradient-to-r from-red-500 to-red-600 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {hand.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Current Hand: {playingCardHands[currentHand].name}</h3>

              <div className="flex justify-center items-center gap-4 flex-wrap">
                {playingCardHands[currentHand].cards.map((card, index) => (
                  <div
                    key={index}
                    className="w-28 h-40 bg-white rounded-xl shadow-lg transform hover:scale-110 hover:-translate-y-4 transition-all duration-300 cursor-pointer border-2 border-gray-200"
                    style={{
                      transform: `rotate(${(index - 2) * 8}deg) translateY(${Math.abs(index - 2) * 10}px)`,
                      zIndex: 5 - Math.abs(index - 2),
                    }}
                  >
                    <div className="h-full p-3 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="text-2xl font-bold text-gray-800">{card.value}</div>
                        <div className="text-2xl">{card.suit}</div>
                      </div>

                      <div className="text-center">
                        <div className="text-4xl mb-2">{card.suit}</div>
                      </div>

                      <div className="flex justify-between items-end rotate-180">
                        <div className="text-2xl font-bold text-gray-800">{card.value}</div>
                        <div className="text-2xl">{card.suit}</div>
                      </div>
                    </div>

                    {/* Card Info Tooltip */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="font-bold">{card.title}</div>
                      <div>{card.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Business Card Collection */}
        {selectedDeck === "experience" && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Professional Business Card Collection</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {businessCards.map((card, index) => (
                <div key={index} className="group relative">
                  {/* Card Stack Effect */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200 transform translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-gray-50 rounded-2xl shadow-md border border-gray-100 transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

                  {/* Main Card */}
                  <div
                    className={`relative bg-gradient-to-br ${card.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-white/20 p-3 rounded-lg">{card.icon}</div>
                      <div className="text-right">
                        <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">{card.years}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-white/90 font-medium mb-2">{card.company}</p>
                      <p className="text-white/75 text-sm">{card.speciality}</p>
                    </div>

                    {/* Business Card Details */}
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/75">Card #{index + 1}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-white/60 text-white/60" />
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

        {/* Card Game Stats */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">🏆 Card Collection Stats</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">74</div>
              <div className="text-sm opacity-90">Total Cards</div>
              <Trophy className="w-6 h-6 mx-auto mt-2" />
            </div>

            <div className="text-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">Legendary</div>
              <Star className="w-6 h-6 mx-auto mt-2" />
            </div>

            <div className="text-center bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Win Rate</div>
              <Crown className="w-6 h-6 mx-auto mt-2" />
            </div>

            <div className="text-center bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-3xl font-bold mb-2">5y</div>
              <div className="text-sm opacity-90">Playing</div>
              <Heart className="w-6 h-6 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
