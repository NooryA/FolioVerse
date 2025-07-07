"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Feather, Flame, Scroll, PenTool, Quote, GraduationCap, Coffee, Crown, Star, Zap } from "lucide-react";

export function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  const quotes = [
    "The only true wisdom is in knowing you know nothing.",
    "I think, therefore I am.",
    "Knowledge is power.",
    "The unexamined life is not worth living.",
  ];

  const authors = ["Socrates", "René Descartes", "Francis Bacon", "Socrates"];

  const fullText = "Scholar • Researcher • Digital Humanist";

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);

    // Generate elegant floating elements
    const elements = [
      { left: 8, top: 15, delay: 0, duration: 8 },
      { left: 92, top: 20, delay: 1.2, duration: 7 },
      { left: 5, top: 60, delay: 2.4, duration: 6 },
      { left: 88, top: 70, delay: 3.6, duration: 9 },
      { left: 15, top: 85, delay: 4.8, duration: 7 },
      { left: 85, top: 10, delay: 6, duration: 8 },
    ];
    setFloatingElements(elements);

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 120);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-academia-bg via-academia-surface to-academia-bg relative overflow-hidden">
      {/* Grand Library Background */}
      <div className="absolute inset-0 bg-vintage-gradient opacity-30"></div>

      {/* Ornate Border Frame */}
      <div className="absolute inset-4 border-2 border-academia-gold border-opacity-20 rounded-lg"></div>
      <div className="absolute inset-8 border border-academia-gold border-opacity-10 rounded-lg"></div>

      {/* Floating Scholarly Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted &&
          floatingElements.map((element, i) => (
            <div
              key={i}
              className="absolute opacity-20 animate-float"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            >
              {i % 3 === 0 && <Scroll className="w-8 h-8 text-academia-gold transform rotate-12" />}
              {i % 3 === 1 && <Feather className="w-6 h-6 text-academia-burgundy transform -rotate-45" />}
              {i % 3 === 2 && <BookOpen className="w-7 h-7 text-academia-sepia transform rotate-12" />}
            </div>
          ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {/* Majestic Header */}
            <div className="text-center mb-16">
              {/* Academic Institution Banner */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="w-16 h-0.5 bg-academia-gold mr-6"></div>
                  <Crown className="w-8 h-8 text-academia-gold" />
                  <div className="w-16 h-0.5 bg-academia-gold ml-6"></div>
                </div>
                <p className="text-sm font-display tracking-widest text-academia-gold uppercase opacity-80">
                  University of Classical Studies
                </p>
              </div>

              {/* Grand Title */}
              <div className="relative mb-8">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-academia-gold leading-none">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">Dr. Alexander</span>
                  <br />
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300 text-academia-gold">
                    Thornfield
                  </span>
                </h1>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-academia-gold opacity-50"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-academia-gold opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-academia-gold opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-academia-gold opacity-50"></div>
              </div>

              {/* Typewriter Subtitle */}
              <div className="h-12 mb-8">
                <p className="text-2xl md:text-3xl font-serif text-academia-gold relative">
                  <span className="border-r-2 border-academia-gold animate-pulse">{typewriterText}</span>
                </p>
              </div>

              {/* Elegant Separator */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-0.5 bg-academia-gold"></div>
                <Star className="w-4 h-4 text-academia-gold mx-4" />
                <div className="w-20 h-0.5 bg-academia-gold"></div>
              </div>
            </div>

            {/* Scholarly Manuscript Layout */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Left Manuscript - Academic Profile */}
              <div className="lg:col-span-1">
                <div className="bg-academia-surface shadow-manuscript rounded-manuscript p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-glow-gold">
                  <div className="bg-academia-paper bg-paper-texture rounded-page p-6 h-full border border-academia-gold border-opacity-20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-academia-burgundy rounded-full flex items-center justify-center mr-4">
                        <GraduationCap className="w-6 h-6 text-academia-paper" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-academia-gold">Academic Profile</h3>
                        <p className="text-sm text-academia-sepia">Distinguished Scholar</p>
                      </div>
                    </div>

                    <div className="space-y-4 font-body text-academia-gold">
                      <div className="border-l-4 border-academia-gold pl-4">
                        <p className="text-sm font-bold text-academia-burgundy">Ph.D. Philosophy</p>
                        <p className="text-xs text-academia-sepia">Oxford University, 2010</p>
                      </div>

                      <div className="border-l-4 border-academia-forest pl-4">
                        <p className="text-sm font-bold text-academia-burgundy">M.A. Classical Studies</p>
                        <p className="text-xs text-academia-sepia">Cambridge University, 2007</p>
                      </div>

                      <div className="border-l-4 border-academia-navy pl-4">
                        <p className="text-sm font-bold text-academia-burgundy">B.A. Liberal Arts</p>
                        <p className="text-xs text-academia-sepia">Harvard University, 2005</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-academia-gold border-opacity-30">
                      <p className="text-xs italic text-academia-sepia text-center">"Wisdom begins in wonder"</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Manuscript - Current Research */}
              <div className="lg:col-span-2">
                <div className="bg-academia-surface shadow-manuscript rounded-manuscript p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-glow-gold">
                  <div className="bg-academia-paper bg-paper-texture rounded-page p-6 h-full border border-academia-gold border-opacity-20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-academia-forest rounded-full flex items-center justify-center mr-4">
                        <Scroll className="w-6 h-6 text-academia-paper" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-academia-gold">Current Research</h3>
                        <p className="text-sm text-academia-sepia">Digital Humanities & Classical Philosophy</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-academia-cream rounded-lg p-4 border-l-4 border-academia-burgundy">
                          <h4 className="font-bold text-academia-ink mb-2">Ancient Wisdom, Modern Applications</h4>
                          <p className="text-sm text-academia-sepia">
                            Exploring how Stoic philosophy can address contemporary challenges in ethics and personal development.
                          </p>
                        </div>

                        <div className="bg-academia-cream rounded-lg p-4 border-l-4 border-academia-navy">
                          <h4 className="font-bold text-academia-ink mb-2">Digital Manuscript Analysis</h4>
                          <p className="text-sm text-academia-sepia">
                            Using AI to decode and preserve ancient texts for future generations.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-academia-cream rounded-lg p-4 border-l-4 border-academia-forest">
                          <h4 className="font-bold text-academia-ink mb-2">Philosophy of Technology</h4>
                          <p className="text-sm text-academia-sepia">
                            Examining the ethical implications of artificial intelligence through classical philosophical frameworks.
                          </p>
                        </div>

                        <div className="bg-academia-cream rounded-lg p-4 border-l-4 border-academia-gold">
                          <h4 className="font-bold text-academia-ink mb-2">Cross-Cultural Philosophy</h4>
                          <p className="text-sm text-academia-sepia">
                            Comparative analysis of Eastern and Western philosophical traditions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wisdom Quote Section */}
            <div className="mb-16">
              <div className="bg-academia-surface shadow-manuscript rounded-manuscript p-8 border border-academia-gold border-opacity-20">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="flex justify-center mb-6">
                    <Quote className="w-16 h-16 text-academia-gold opacity-60" />
                  </div>

                  <blockquote className="text-3xl md:text-4xl font-serif text-academia-gold italic leading-relaxed mb-6">
                    "{quotes[currentQuote]}"
                  </blockquote>

                  <div className="flex items-center justify-center">
                    <div className="w-12 h-0.5 bg-academia-gold mr-4"></div>
                    <cite className="text-lg font-display text-academia-gold">{authors[currentQuote]}</cite>
                    <div className="w-12 h-0.5 bg-academia-gold ml-4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-academia-surface rounded-manuscript p-6 text-center shadow-manuscript hover:shadow-glow-gold transition-all duration-300 border border-academia-gold border-opacity-20">
                <div className="w-16 h-16 bg-gradient-to-br from-academia-burgundy to-academia-burgundyLight rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scroll className="w-8 h-8 text-academia-paper" />
                </div>
                <h4 className="text-lg font-display font-bold text-academia-gold mb-2">Publications</h4>
                <p className="text-4xl font-bold text-academia-gold mb-1">47</p>
                <p className="text-sm text-academia-sepia">Academic Papers</p>
              </div>

              <div className="bg-academia-surface rounded-manuscript p-6 text-center shadow-manuscript hover:shadow-glow-gold transition-all duration-300 border border-academia-gold border-opacity-20">
                <div className="w-16 h-16 bg-gradient-to-br from-academia-forest to-academia-forestLight rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-academia-paper" />
                </div>
                <h4 className="text-lg font-display font-bold text-academia-gold mb-2">Citations</h4>
                <p className="text-4xl font-bold text-academia-gold mb-1">1,247</p>
                <p className="text-sm text-academia-sepia">Total Citations</p>
              </div>

              <div className="bg-academia-surface rounded-manuscript p-6 text-center shadow-manuscript hover:shadow-glow-gold transition-all duration-300 border border-academia-gold border-opacity-20">
                <div className="w-16 h-16 bg-gradient-to-br from-academia-navy to-academia-navyLight rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-academia-paper" />
                </div>
                <h4 className="text-lg font-display font-bold text-academia-gold mb-2">Teaching</h4>
                <p className="text-4xl font-bold text-academia-gold mb-1">15+</p>
                <p className="text-sm text-academia-sepia">Years Experience</p>
              </div>

              <div className="bg-academia-surface rounded-manuscript p-6 text-center shadow-manuscript hover:shadow-glow-gold transition-all duration-300 border border-academia-gold border-opacity-20">
                <div className="w-16 h-16 bg-gradient-to-br from-academia-bronze to-academia-bronzeLight rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-academia-paper" />
                </div>
                <h4 className="text-lg font-display font-bold text-academia-gold mb-2">Inspiration</h4>
                <p className="text-4xl font-bold text-academia-gold mb-1">∞</p>
                <p className="text-sm text-academia-sepia">Cups of Coffee</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-6">
                <button className="group bg-gradient-to-r from-academia-burgundy to-academia-burgundyLight hover:from-academia-burgundyLight hover:to-academia-burgundy text-academia-paper px-10 py-4 rounded-manuscript font-display font-bold shadow-manuscript transition-all duration-300 hover:shadow-glow-burgundy transform hover:scale-105">
                  <Feather className="w-5 h-5 inline-block mr-3 group-hover:animate-pulse" />
                  Explore My Research
                </button>

                <button className="group border-2 border-academia-gold text-academia-gold hover:bg-academia-gold hover:text-academia-bg px-10 py-4 rounded-manuscript font-display font-bold transition-all duration-300 hover:shadow-glow-gold transform hover:scale-105">
                  <BookOpen className="w-5 h-5 inline-block mr-3 group-hover:animate-pulse" />
                  Read Publications
                </button>
              </div>

              <p className="mt-6 text-sm text-academia-sepia italic">"In the pursuit of knowledge, every question leads to wisdom"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Candlelight Effects */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-academia-gold rounded-full blur-sm opacity-60 animate-candle-flicker"></div>
      <div
        className="absolute top-32 right-24 w-3 h-3 bg-academia-gold rounded-full blur-sm opacity-40 animate-candle-flicker"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-16 w-2 h-2 bg-academia-gold rounded-full blur-sm opacity-50 animate-candle-flicker"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-4 h-4 bg-academia-gold rounded-full blur-sm opacity-30 animate-candle-flicker"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </section>
  );
}
