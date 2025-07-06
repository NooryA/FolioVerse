"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Pencil, Eraser, Brush, Bookmark, Star, Heart, Sparkles } from "lucide-react";

export function HeroSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawnPaths, setDrawnPaths] = useState<string[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showDoodles, setShowDoodles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDoodles(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const pages = [
    {
      title: "Welcome to My Sketchbook",
      content: "Where ideas come to life through digital ink and creativity",
      doodles: ["✨", "🎨", "✏️", "💡"],
    },
    {
      title: "About the Artist",
      content: "Full-stack developer with a passion for creative design and intuitive user experiences",
      doodles: ["🖥️", "⚡", "🎯", "🚀"],
    },
    {
      title: "My Projects Gallery",
      content: "A collection of digital masterpieces and coding adventures",
      doodles: ["📱", "🌐", "⚙️", "🎪"],
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePageTurn = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const SketchLine = ({ delay = 0, duration = 2 }: { delay?: number; duration?: number }) => (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.path
        d="M50,100 Q150,50 250,100 T450,100"
        stroke="#dc2626"
        strokeWidth="2"
        fill="none"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        initial={{ strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration, delay, ease: "easeInOut" }}
      />
    </motion.svg>
  );

  const FloatingDoodle = ({ icon, x, y, delay = 0 }: { icon: string; x: number; y: number; delay?: number }) => (
    <motion.div
      className="absolute text-2xl"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, type: "spring", bounce: 0.6 }}
    >
      {icon}
    </motion.div>
  );

  return (
    <section className="min-h-screen paper-texture relative overflow-hidden">
      {/* Sketchbook Binding */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-red-600 to-red-800 shadow-lg">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-8 h-1 bg-gray-800 rounded-full opacity-30" />
          ))}
        </div>
      </div>

      {/* Spiral Binding Rings */}
      <div className="absolute left-8 top-0 bottom-0 w-8 flex flex-col justify-around items-center py-8">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-6 h-6 border-4 border-gray-400 rounded-full bg-gray-200 shadow-inner" />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="ml-24 notebook-lines margin-line min-h-screen relative">
        <div className="container mx-auto px-8 py-16">
          {/* Page Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="handwritten text-lg text-gray-600">
              Page {currentPage + 1} of {pages.length}
            </div>
            <div className="handwritten text-lg text-gray-600">{new Date().toLocaleDateString()}</div>
          </div>

          {/* Main Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* Title */}
              <motion.h1
                className="handwritten-bold text-6xl md:text-8xl mb-8 text-ink-black scribble-underline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {pages[currentPage].title}
              </motion.h1>

              {/* Content */}
              <motion.p
                className="handwritten text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {pages[currentPage].content}
              </motion.p>

              {/* Interactive Elements */}
              <div className="flex flex-wrap gap-6 mb-12">
                <motion.div
                  className="sticky-note p-6 sketch-hover cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: -2 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <div className="handwritten text-lg">💡 Click to explore my work</div>
                </motion.div>

                <motion.div
                  className="bg-paper sketch-border p-6 sketch-hover cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, rotate: 3 }}
                  animate={{ opacity: 1, rotate: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <div className="handwritten text-lg flex items-center gap-2">
                    <Palette className="w-6 h-6" />
                    See My Portfolio
                  </div>
                </motion.div>
              </div>

              {/* Floating Doodles */}
              {showDoodles && (
                <div className="absolute inset-0 pointer-events-none">
                  {pages[currentPage].doodles.map((doodle, i) => (
                    <FloatingDoodle key={i} icon={doodle} x={20 + i * 15} y={20 + i * 10} delay={1.5 + i * 0.3} />
                  ))}
                </div>
              )}

              {/* Sketch Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <SketchLine delay={2} duration={3} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Page Navigation */}
          <div className="fixed bottom-8 right-8 flex gap-4">
            <motion.button
              className="sketch-border p-4 bg-paper sketch-hover disabled:opacity-50"
              onClick={() => handlePageTurn("prev")}
              disabled={currentPage === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="handwritten text-xl">← Prev</span>
            </motion.button>
            <motion.button
              className="sketch-border p-4 bg-paper sketch-hover disabled:opacity-50"
              onClick={() => handlePageTurn("next")}
              disabled={currentPage === pages.length - 1}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="handwritten text-xl">Next →</span>
            </motion.button>
          </div>

          {/* Drawing Tools */}
          <div className="fixed left-24 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
            <motion.div
              className="bg-paper sketch-border p-3 sketch-hover cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Pencil className="w-6 h-6 text-gray-600" />
            </motion.div>
            <motion.div
              className="bg-paper sketch-border p-3 sketch-hover cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <Brush className="w-6 h-6 text-blue-600" />
            </motion.div>
            <motion.div
              className="bg-paper sketch-border p-3 sketch-hover cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              <Eraser className="w-6 h-6 text-pink-600" />
            </motion.div>
            <motion.div
              className="bg-paper sketch-border p-3 sketch-hover cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            >
              <Palette className="w-6 h-6 text-purple-600" />
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="fixed top-4 right-4 handwritten text-2xl text-gray-500 opacity-30">✏️ Draft</div>
          <div className="fixed bottom-4 left-32 handwritten text-lg text-gray-500 opacity-30">Made with ❤️ and lots of ☕</div>

          {/* Page Curl Effect */}
          <div className="fixed bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gray-200 to-transparent opacity-20 pointer-events-none" />
        </div>
      </div>

      {/* Ink Splatters */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-20 blur-sm" />
      <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-red-500 rounded-full opacity-30 blur-sm" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-green-500 rounded-full opacity-25 blur-sm" />
    </section>
  );
}
