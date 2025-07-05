"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Feather, Flame, Scroll, PenTool, Quote, GraduationCap, Coffee } from "lucide-react";

export function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");

  const quotes = [
    "The only true wisdom is in knowing you know nothing. — Socrates",
    "I think, therefore I am. — René Descartes",
    "Knowledge is power. — Francis Bacon",
    "The unexamined life is not worth living. — Socrates",
  ];

  const fullText = "Scholar • Researcher • Thinker";

  useEffect(() => {
    setIsVisible(true);
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(typeInterval);
    };
  }, []);

  return (
    <section className="min-h-screen bg-academia-bg relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-vintage-gradient opacity-20"></div>

      {/* Floating book pages */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <Scroll className="w-12 h-12 text-academia-gold transform rotate-12" />
          </div>
        ))}
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Header with candle effect */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-8">
                <Flame className="w-8 h-8 text-academia-gold animate-candle-flicker mr-4" />
                <h1 className="text-5xl md:text-7xl font-display font-bold text-academia-text animate-candle-flicker">Academia</h1>
                <Flame className="w-8 h-8 text-academia-gold animate-candle-flicker ml-4" />
              </div>

              {/* Typewriter subtitle */}
              <div className="h-8 mb-12">
                <p className="text-2xl font-serif text-academia-gold border-r-2 border-academia-gold animate-pulse overflow-hidden whitespace-nowrap">
                  {typewriterText}
                </p>
              </div>

              {/* Decorative line */}
              <div className="w-32 h-0.5 bg-academia-gold mx-auto opacity-60"></div>
            </div>

            {/* Main content - Book style layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left page - About */}
              <div className="bg-academia-surface shadow-book rounded-vintage p-8 transform hover:scale-105 transition-transform duration-300 animate-book-open">
                <div className="bg-academia-paper bg-paper-texture rounded-page p-6 h-full">
                  <div className="flex items-center mb-6">
                    <BookOpen className="w-8 h-8 text-academia-burgundy mr-3" />
                    <h2 className="text-3xl font-display font-bold text-academia-textDark">Curriculum Vitae</h2>
                  </div>

                  <div className="space-y-4 font-body text-academia-textDark leading-loose">
                    <p className="text-lg">
                      <span className="font-bold text-academia-burgundy">Name:</span>
                      <span className="ml-2 font-script text-xl">Dr. Scholar McAcademia</span>
                    </p>

                    <p className="text-lg">
                      <span className="font-bold text-academia-burgundy">Institution:</span>
                      <span className="ml-2">University of Classical Studies</span>
                    </p>

                    <p className="text-lg">
                      <span className="font-bold text-academia-burgundy">Specialization:</span>
                      <span className="ml-2">Ancient Philosophy & Modern Applications</span>
                    </p>

                    <div className="border-t border-academia-burgundy pt-4 mt-6">
                      <p className="italic text-academia-sepia">
                        "Dedicated to the pursuit of knowledge through rigorous study, critical thinking, and the timeless wisdom of
                        classical scholarship."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right page - Current work */}
              <div
                className="bg-academia-surface shadow-book rounded-vintage p-8 transform hover:scale-105 transition-transform duration-300 animate-book-open"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="bg-academia-paper bg-paper-texture rounded-page p-6 h-full">
                  <div className="flex items-center mb-6">
                    <PenTool className="w-8 h-8 text-academia-forest mr-3" />
                    <h2 className="text-3xl font-display font-bold text-academia-textDark">Current Research</h2>
                  </div>

                  <div className="space-y-6 font-body text-academia-textDark">
                    <div className="border-l-4 border-academia-forest pl-4">
                      <h3 className="text-xl font-bold mb-2">The Digital Humanities Project</h3>
                      <p className="text-sm text-academia-sepia">
                        Exploring the intersection of classical philosophy and modern technology
                      </p>
                    </div>

                    <div className="border-l-4 border-academia-navy pl-4">
                      <h3 className="text-xl font-bold mb-2">Manuscript Analysis</h3>
                      <p className="text-sm text-academia-sepia">Digital preservation and analysis of medieval manuscripts</p>
                    </div>

                    <div className="border-l-4 border-academia-burgundy pl-4">
                      <h3 className="text-xl font-bold mb-2">Philosophical Discourse</h3>
                      <p className="text-sm text-academia-sepia">Contemporary applications of Stoic principles in modern life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote section */}
            <div className="mt-16 bg-academia-surface shadow-deep rounded-vintage p-8">
              <div className="text-center">
                <Quote className="w-12 h-12 text-academia-gold mx-auto mb-6 animate-ink-drop" />
                <blockquote className="text-2xl font-serif text-academia-text italic leading-extra-loose">
                  "{quotes[currentQuote]}"
                </blockquote>
                <div className="mt-6 w-20 h-0.5 bg-academia-gold mx-auto opacity-60"></div>
              </div>
            </div>

            {/* Academic achievements */}
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              {/* Publications */}
              <div className="bg-academia-surface rounded-vintage p-6 text-center shadow-book hover:shadow-glow-gold transition-shadow duration-300">
                <div className="w-16 h-16 bg-academia-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scroll className="w-8 h-8 text-academia-paper" />
                </div>
                <h3 className="text-xl font-display font-bold text-academia-text mb-2">Publications</h3>
                <p className="text-3xl font-bold text-academia-gold">47</p>
                <p className="text-sm text-academia-textMuted">Academic Papers</p>
              </div>

              {/* Citations */}
              <div className="bg-academia-surface rounded-vintage p-6 text-center shadow-book hover:shadow-glow-gold transition-shadow duration-300">
                <div className="w-16 h-16 bg-academia-forest rounded-full flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-academia-paper" />
                </div>
                <h3 className="text-xl font-display font-bold text-academia-text mb-2">Citations</h3>
                <p className="text-3xl font-bold text-academia-gold">1,247</p>
                <p className="text-sm text-academia-textMuted">Total Citations</p>
              </div>

              {/* Years Experience */}
              <div className="bg-academia-surface rounded-vintage p-6 text-center shadow-book hover:shadow-glow-gold transition-shadow duration-300">
                <div className="w-16 h-16 bg-academia-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-academia-paper" />
                </div>
                <h3 className="text-xl font-display font-bold text-academia-text mb-2">Experience</h3>
                <p className="text-3xl font-bold text-academia-gold">15+</p>
                <p className="text-sm text-academia-textMuted">Years Teaching</p>
              </div>

              {/* Coffee consumed */}
              <div className="bg-academia-surface rounded-vintage p-6 text-center shadow-book hover:shadow-glow-gold transition-shadow duration-300">
                <div className="w-16 h-16 bg-academia-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-academia-paper" />
                </div>
                <h3 className="text-xl font-display font-bold text-academia-text mb-2">Coffee</h3>
                <p className="text-3xl font-bold text-academia-gold">∞</p>
                <p className="text-sm text-academia-textMuted">Cups Consumed</p>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center space-x-6">
                <button className="bg-academia-burgundy hover:bg-academia-burgundyLight text-academia-paper px-8 py-4 rounded-vintage font-display font-bold shadow-vintage transition-all duration-300 hover:shadow-glow-burgundy">
                  <Feather className="w-5 h-5 inline-block mr-2" />
                  View Research
                </button>

                <button className="border-2 border-academia-gold text-academia-gold hover:bg-academia-gold hover:text-academia-bg px-8 py-4 rounded-vintage font-display font-bold transition-all duration-300">
                  <BookOpen className="w-5 h-5 inline-block mr-2" />
                  Read Publications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
