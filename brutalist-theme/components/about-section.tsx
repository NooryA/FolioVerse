"use client";

import { useState } from "react";

export function AboutSection() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    { name: "HTML/CSS", level: 95, color: "#FF0000" },
    { name: "JAVASCRIPT", level: 90, color: "#FFFF00" },
    { name: "REACT", level: 85, color: "#00FF00" },
    { name: "NODE.JS", level: 80, color: "#0000FF" },
    { name: "TYPESCRIPT", level: 88, color: "#FF00FF" },
    { name: "BRUTALISM", level: 100, color: "#000000" },
  ];

  const experiences = [
    { year: "2024", role: "SENIOR DESTROYER", company: "TECH CORP" },
    { year: "2022", role: "CODE WARRIOR", company: "STARTUP INC" },
    { year: "2020", role: "PIXEL PUSHER", company: "AGENCY X" },
    { year: "2018", role: "JUNIOR BREAKER", company: "WEB CO" },
  ];

  return (
    <section id="about" className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced BRUTAL TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-black text-6xl md:text-8xl lg:text-9xl text-black uppercase mb-8 leading-none">ABOUT ME</h2>
          <div className="w-64 h-6 bg-red-500 mx-auto border-8 border-black shadow-2xl"></div>
        </div>

        {/* Enhanced BRUTAL BIO */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="bg-yellow-400 border-8 border-black p-8 shadow-2xl transform hover:rotate-1 transition-transform">
              <h3 className="font-black text-3xl md:text-4xl mb-6 uppercase">I BREAK THINGS</h3>
              <p className="font-bold text-black text-lg md:text-xl mb-6 leading-relaxed">
                I'M A DEVELOPER WHO DOESN'T BELIEVE IN SUBTLETY. MY CODE IS LOUD, MY DESIGNS ARE LOUDER, AND MY COMMITS ARE THE LOUDEST.
              </p>
              <p className="font-bold text-black text-lg md:text-xl leading-relaxed">
                SPECIALIZING IN CREATING WEB EXPERIENCES THAT PUNCH YOU IN THE FACE WITH THEIR BOLDNESS. NO GRADIENTS. NO SHADOWS. JUST RAW
                POWER.
              </p>

              {/* Decorative elements - hidden on mobile */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black hidden lg:block transform rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-500 hidden lg:block"></div>
            </div>
          </div>

          {/* Enhanced BRUTAL STATS */}
          <div className="space-y-6">
            <div className="bg-white border-8 border-black p-6 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-black text-xl md:text-2xl uppercase">PROJECTS DESTROYED</span>
                <span className="font-black text-4xl md:text-5xl text-red-500">999+</span>
              </div>
            </div>
            <div className="bg-blue-500 border-8 border-black p-6 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-black text-xl md:text-2xl text-white uppercase">BUGS CREATED</span>
                <span className="font-black text-4xl md:text-5xl text-yellow-400">∞</span>
              </div>
            </div>
            <div className="bg-red-500 border-8 border-black p-6 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-black text-xl md:text-2xl text-white uppercase">COFFEE CONSUMED</span>
                <span className="font-black text-4xl md:text-5xl text-white">▓▓▓▓▓</span>
              </div>
            </div>
          </div>
        </div>

        {/* FIXED BRUTAL SKILLS with better visibility */}
        <div className="mb-20">
          <h3 className="font-black text-4xl md:text-6xl mb-12 text-center uppercase">
            <span className="bg-black text-white px-8 py-4 inline-block border-8 border-red-500 shadow-2xl">SKILLS</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-white border-8 border-black p-6 shadow-2xl transform transition-all hover:scale-105 hover:rotate-2 ${
                  activeSkill === index ? "bg-red-500" : ""
                }`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* FIXED SKILL NAME with better contrast */}
                <div className="bg-black text-white px-4 py-2 mb-6 border-4 border-white">
                  <h4 className="font-black text-xl md:text-2xl uppercase text-center">{skill.name}</h4>
                </div>

                {/* FIXED PROGRESS BAR with better contrast */}
                <div className="relative h-12 bg-gray-300 border-8 border-black">
                  <div
                    className="absolute h-full border-r-8 border-black transition-all duration-1000"
                    style={{
                      backgroundColor: skill.color,
                      width: `${skill.level}%`,
                    }}
                  />
                  {/* FIXED PERCENTAGE with high contrast background */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-4 border-black px-2 py-1">
                    <span className="font-black text-lg text-black">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced BRUTAL EXPERIENCE */}
        <div className="mb-16">
          <h3 className="font-black text-4xl md:text-6xl mb-12 text-center uppercase">
            <span className="bg-yellow-400 px-8 py-4 inline-block border-8 border-black shadow-2xl transform rotate-1">EXPERIENCE</span>
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.year} className="relative">
                <div
                  className={`border-8 border-black p-8 shadow-2xl transform hover:scale-105 transition-all ${
                    index % 2 === 0 ? "bg-red-500 text-white" : "bg-yellow-400 text-black"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
                    <div>
                      <div className="font-black text-5xl md:text-6xl lg:text-7xl mb-4">{exp.year}</div>
                      <h4 className="font-black text-2xl md:text-3xl uppercase mb-2">{exp.role}</h4>
                      <p className="font-mono text-xl md:text-2xl font-bold">{exp.company}</p>
                    </div>
                    <button className="bg-white text-black border-8 border-black px-8 py-4 font-black text-lg uppercase shadow-lg hover:shadow-none hover:bg-black hover:text-white transition-all transform hover:scale-105">
                      VIEW MORE
                    </button>
                  </div>
                </div>

                {/* Connecting line */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-2 h-12 bg-black"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced ASCII art decoration */}
        <div className="text-center bg-black text-white p-8 border-8 border-red-500 shadow-2xl">
          <pre className="font-mono text-sm md:text-base font-bold overflow-x-auto">
            {`
 ███████████████████████████████████████
 █                                     █
 █  BRUTALIST DEVELOPMENT CERTIFIED    █
 █                                     █
 ███████████████████████████████████████
            `}
          </pre>
        </div>
      </div>
    </section>
  );
}
