"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Star,
  Heart,
  Moon,
  Sun,
  TreePine,
  Home as HomeIcon,
  Sparkles,
  Rainbow,
  Camera,
  Palette,
  Music,
  Wand2,
} from "lucide-react";

interface StoryPage {
  id: number;
  title: string;
  content: any;
  background: string;
  illustration: any;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showPageNumber, setShowPageNumber] = useState(true);

  const storyPages: StoryPage[] = [
    // Cover Page
    {
      id: 0,
      title: "The Adventures of Alex the Developer",
      background: "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400",
      illustration: (
        <div className="relative">
          <div className="text-9xl animate-bounce">📚</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-spin">⭐</div>
          <div className="absolute -bottom-2 -left-4 text-3xl animate-pulse">✨</div>
        </div>
      ),
      content: (
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 text-shadow-lg">The Adventures of</h1>
          <h2 className="text-7xl font-bold mb-6 text-yellow-300 text-shadow-lg">Alex the Developer</h2>
          <p className="text-2xl mb-8 text-purple-100">A Magical Journey Through Code and Creativity</p>
          <div className="flex justify-center gap-4 text-4xl animate-pulse">
            <span>🌟</span>
            <span>💻</span>
            <span>🚀</span>
          </div>
          <p className="text-lg mt-8 text-purple-200">Written and Illustrated by Alex Rodriguez</p>
        </div>
      ),
    },

    // Page 1: The Beginning
    {
      id: 1,
      title: "Once Upon a Time...",
      background: "bg-gradient-to-br from-blue-300 via-green-300 to-yellow-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">🏠</div>
          <div className="absolute -top-2 -right-2 text-3xl animate-bounce">☀️</div>
          <div className="absolute -bottom-4 left-4 text-2xl">🌸</div>
          <div className="absolute top-4 -left-6 text-2xl">🦋</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-blue-800">Once Upon a Time...</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              In a cozy little town called San Francisco, there lived a curious young developer named{" "}
              <span className="font-bold text-purple-600">Alex</span>.
            </p>
            <p>
              Alex had always been fascinated by the magical world of computers. Even as a little child, Alex would spend hours wondering:{" "}
              <em>"How do these magical boxes work?"</em>
            </p>
            <p>
              One day, at the age of 16, Alex discovered something extraordinary -
              <span className="font-bold text-green-600">the power of code!</span> ✨
            </p>
            <div className="bg-white/50 p-4 rounded-lg mt-6 border-2 border-blue-200">
              <p className="italic text-center text-blue-800">
                "With great code comes great responsibility!" - Alex's first programming motto
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Page 2: The Journey Begins
    {
      id: 2,
      title: "The Learning Adventure",
      background: "bg-gradient-to-br from-orange-300 via-yellow-300 to-green-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">🎓</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-spin">📚</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-pulse">💡</div>
          <div className="absolute top-2 left-8 text-2xl">🌟</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-orange-800">The Great Learning Adventure</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              Alex embarked on an incredible journey to <span className="font-bold text-orange-600">UC Berkeley</span>, a magical school
              where wizards learned the ancient arts of Computer Science! 🏰
            </p>
            <p>There, Alex met many fellow code-wizards and learned powerful spells like:</p>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-white/60 p-3 rounded-lg border-2 border-orange-200">
                <div className="text-2xl mb-2">🐍</div>
                <div className="font-bold">Python Magic</div>
              </div>
              <div className="bg-white/60 p-3 rounded-lg border-2 border-blue-200">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-bold">React Sorcery</div>
              </div>
              <div className="bg-white/60 p-3 rounded-lg border-2 border-green-200">
                <div className="text-2xl mb-2">🗄️</div>
                <div className="font-bold">Database Enchantments</div>
              </div>
              <div className="bg-white/60 p-3 rounded-lg border-2 border-purple-200">
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-bold">Web Wizardry</div>
              </div>
            </div>
            <p>After 4 years of study, Alex graduated with honors and was ready to change the world! 🎉</p>
          </div>
        </div>
      ),
    },

    // Page 3: The First Job
    {
      id: 3,
      title: "The First Quest",
      background: "bg-gradient-to-br from-emerald-300 via-teal-300 to-cyan-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">🏢</div>
          <div className="absolute -top-2 -right-6 text-4xl animate-bounce">🚀</div>
          <div className="absolute -bottom-4 left-2 text-3xl">💼</div>
          <div className="absolute top-6 -left-4 text-2xl animate-pulse">⭐</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-emerald-800">The First Quest Begins!</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              Alex's first adventure was at a place called <span className="font-bold text-emerald-600">WebAgency</span>, where web dreams
              came to life! ✨
            </p>
            <p>
              As a <em>Frontend Developer Knight</em>, Alex learned to:
            </p>
            <ul className="list-none space-y-3 my-6">
              <li className="flex items-center gap-3">
                <span className="text-2xl">🎨</span>
                <span>Paint beautiful websites with CSS magic</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span>Make websites work on phones and tablets</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Make websites super fast and smooth</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🤝</span>
                <span>Work with a team of other friendly developers</span>
              </li>
            </ul>
            <div className="bg-white/60 p-4 rounded-lg border-2 border-emerald-200 mt-6">
              <p className="text-center italic text-emerald-800">"In one year, Alex helped create 15 magical websites!" 🌟</p>
            </div>
          </div>
        </div>
      ),
    },

    // Page 4: Growing Stronger
    {
      id: 4,
      title: "The Power-Up Adventure",
      background: "bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">🦸‍♂️</div>
          <div className="absolute -top-4 -right-2 text-4xl animate-spin">💫</div>
          <div className="absolute -bottom-2 -left-4 text-3xl animate-bounce">🔥</div>
          <div className="absolute top-4 left-8 text-2xl">⚡</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-indigo-800">The Great Power-Up!</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              Next, Alex joined <span className="font-bold text-indigo-600">StartupHub</span>, a place where startups were born and dreams
              took flight! 🚀
            </p>
            <p>
              As a <em>Full-Stack Developer Hero</em>, Alex gained new superpowers:
            </p>
            <div className="grid grid-cols-1 gap-4 my-6">
              <div className="bg-white/60 p-4 rounded-lg border-2 border-indigo-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🔮</span>
                  <span className="font-bold text-lg">Backend Magic</span>
                </div>
                <p className="text-sm">Learning to create powerful server spells with Node.js!</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🗃️</span>
                  <span className="font-bold text-lg">Database Mastery</span>
                </div>
                <p className="text-sm">Taming wild databases and making them store information safely!</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-pink-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🎯</span>
                  <span className="font-bold text-lg">API Wizardry</span>
                </div>
                <p className="text-sm">Creating magical bridges between different applications!</p>
              </div>
            </div>
            <p>
              During this 2-year adventure, Alex helped build <span className="font-bold text-purple-600">5 amazing products</span>
              that thousands of people used every day! 🌟
            </p>
          </div>
        </div>
      ),
    },

    // Page 5: The Senior Developer
    {
      id: 5,
      title: "Becoming a Code Master",
      background: "bg-gradient-to-br from-red-300 via-orange-300 to-yellow-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">👑</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-pulse">🏆</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce">⭐</div>
          <div className="absolute top-2 left-8 text-2xl">💎</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-red-800">The Code Master Era</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              Now Alex works at <span className="font-bold text-red-600">TechCorp Inc.</span>
              as a <em>Senior Developer Master</em>! 👑
            </p>
            <p>With great power comes great responsibility. Alex now:</p>
            <div className="space-y-4 my-6">
              <div className="bg-white/60 p-4 rounded-lg border-2 border-red-200 flex items-center gap-4">
                <span className="text-4xl">👥</span>
                <div>
                  <div className="font-bold">Leads a Team of 8 Developers</div>
                  <div className="text-sm">Teaching other heroes the ways of code!</div>
                </div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-orange-200 flex items-center gap-4">
                <span className="text-4xl">🏗️</span>
                <div>
                  <div className="font-bold">Architects Big Solutions</div>
                  <div className="text-sm">Designing systems that serve 100,000+ users!</div>
                </div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-yellow-200 flex items-center gap-4">
                <span className="text-4xl">🌟</span>
                <div>
                  <div className="font-bold">Mentors Young Developers</div>
                  <div className="text-sm">Helping the next generation learn the magic!</div>
                </div>
              </div>
            </div>
            <p>Alex's code now powers amazing applications used by people all around the world! 🌍</p>
          </div>
        </div>
      ),
    },

    // Page 6: The Magic Projects
    {
      id: 6,
      title: "Alex's Magical Creations",
      background: "bg-gradient-to-br from-violet-300 via-fuchsia-300 to-pink-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">🎪</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-spin">🎠</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce">🎭</div>
          <div className="absolute top-4 left-6 text-2xl animate-pulse">✨</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-violet-800">Alex's Magical Creations</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>Over the years, Alex has created many wonderful digital magical creatures:</p>
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-white/60 p-4 rounded-lg border-2 border-violet-200">
                <div className="text-4xl mb-2">🛒</div>
                <div className="font-bold text-lg mb-1">The Shopping Dragon</div>
                <div className="text-sm">A magical marketplace where 10,000+ people shop safely!</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-fuchsia-200">
                <div className="text-4xl mb-2">🤖</div>
                <div className="font-bold text-lg mb-1">The Helpful Robot</div>
                <div className="text-sm">An AI assistant that helps 5,000+ customers every day!</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-pink-200">
                <div className="text-4xl mb-2">💳</div>
                <div className="font-bold text-lg mb-1">The Money Guardian</div>
                <div className="text-sm">A banking app that keeps 50,000+ people's money safe!</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-purple-200">
                <div className="text-4xl mb-2">📊</div>
                <div className="font-bold text-lg mb-1">The Crystal Ball</div>
                <div className="text-sm">A dashboard that shows the future with beautiful charts!</div>
              </div>
            </div>
            <p>Each creation helps make people's lives easier and more magical! ✨</p>
          </div>
        </div>
      ),
    },

    // Page 7: Contact & The End
    {
      id: 7,
      title: "Join Alex's Adventure!",
      background: "bg-gradient-to-br from-green-300 via-blue-300 to-purple-300",
      illustration: (
        <div className="relative">
          <div className="text-8xl">🌈</div>
          <div className="absolute -top-4 -right-4 text-4xl animate-bounce">💌</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-pulse">📞</div>
          <div className="absolute top-4 left-8 text-2xl">🤝</div>
        </div>
      ),
      content: (
        <div className="text-gray-800">
          <h2 className="text-4xl font-bold mb-6 text-green-800">Want to Join the Adventure?</h2>
          <div className="text-xl leading-relaxed space-y-4">
            <p>
              Alex is always looking for new friends and exciting projects to work on! If you have a magical idea that needs some code
              wizardry, reach out! 🪄
            </p>
            <div className="grid grid-cols-1 gap-4 my-6">
              <div className="bg-white/60 p-4 rounded-lg border-2 border-green-200 flex items-center gap-4">
                <span className="text-4xl">📧</span>
                <div>
                  <div className="font-bold">Send a Magic Message</div>
                  <div className="text-blue-600">alex@example.com</div>
                </div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-blue-200 flex items-center gap-4">
                <span className="text-4xl">📱</span>
                <div>
                  <div className="font-bold">Call the Code Wizard</div>
                  <div className="text-blue-600">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg border-2 border-purple-200 flex items-center gap-4">
                <span className="text-4xl">🌍</span>
                <div>
                  <div className="font-bold">Visit the Digital Castle</div>
                  <div className="text-blue-600">alexdev.com</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-6 rounded-lg border-2 border-pink-300 text-center mt-8">
              <p className="text-2xl font-bold text-purple-800 mb-4">The End... Or Is It Just the Beginning? 🌟</p>
              <p className="text-lg text-purple-700">Every great adventure starts with a single line of code!</p>
              <div className="flex justify-center gap-4 text-4xl mt-4 animate-pulse">
                <span>✨</span>
                <span>💻</span>
                <span>🚀</span>
                <span>💖</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextPage = () => {
    if (currentPage < storyPages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
        setShowPageNumber(true);
        setTimeout(() => setShowPageNumber(false), 2000);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
        setShowPageNumber(true);
        setTimeout(() => setShowPageNumber(false), 2000);
      }, 600);
    }
  };

  const currentStoryPage = storyPages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 p-4 md:p-8">
      {/* Book Container */}
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Book Shadow */}
          <div className="absolute inset-2 bg-black/20 rounded-2xl blur-lg transform rotate-1"></div>

          {/* Main Book */}
          <div
            className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${
              isFlipping ? "transform scale-105" : ""
            }`}
            style={{ aspectRatio: "3/4", minHeight: "600px" }}
          >
            {/* Page Content */}
            <div className={`h-full ${currentStoryPage.background} relative overflow-hidden`}>
              {/* Decorative Border */}
              <div className="absolute inset-4 border-4 border-white/30 rounded-xl"></div>

              {/* Page Content Grid */}
              <div className="h-full p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Illustration Side */}
                <div className="flex items-center justify-center">
                  <div className="text-center">{currentStoryPage.illustration}</div>
                </div>

                {/* Content Side */}
                <div className="flex items-center">
                  <div className="w-full">{currentStoryPage.content}</div>
                </div>
              </div>

              {/* Page Number */}
              {showPageNumber && (
                <div className="absolute bottom-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-bold text-gray-700 animate-fadeIn">
                  Page {currentPage + 1}
                </div>
              )}

              {/* Page Flip Effect */}
              {isFlipping && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slideRight"></div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
          >
            <ChevronLeft className="w-8 h-8 text-gray-700" />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === storyPages.length - 1 || isFlipping}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110"
          >
            <ChevronRight className="w-8 h-8 text-gray-700" />
          </button>
        </div>

        {/* Book Title & Progress */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{currentStoryPage.title}</h1>

          {/* Page Indicators */}
          <div className="flex justify-center gap-2 mb-4">
            {storyPages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping && index !== currentPage) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setIsFlipping(false);
                    }, 600);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index ? "bg-purple-500 scale-125" : "bg-white/60 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-600">
            Page {currentPage + 1} of {storyPages.length}
          </p>
        </div>

        {/* Reading Instructions */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p className="flex items-center justify-center gap-2">
            <BookOpen className="w-4 h-4" />
            Click the arrows or dots to turn pages
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }

        .animate-slideRight {
          animation: slideRight 0.6s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
            opacity: 0.8;
          }
          to {
            transform: translateX(100%);
            opacity: 0.8;
          }
        }

        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
