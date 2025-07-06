"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 5H3m4 6H3m4 6H3"
    />
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

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);

  const artworks = [
    {
      id: 1,
      title: "Digital Renaissance",
      artist: "Alessandro Rivera",
      year: "2024",
      medium: "React Components & CSS",
      dimensions: "1920x1080px",
      price: "Available for Commission",
      description:
        "A modern interpretation of classical web design principles, blending traditional aesthetics with contemporary functionality.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      likes: 342,
      views: 1205,
    },
    {
      id: 2,
      title: "Responsive Harmony",
      artist: "Alessandro Rivera",
      year: "2024",
      medium: "Next.js & TypeScript",
      dimensions: "Infinite Viewport",
      price: "Open Source",
      description: "An exploration of adaptive design that gracefully transforms across all devices and screen sizes.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=900&fit=crop",
      likes: 278,
      views: 892,
    },
    {
      id: 3,
      title: "Interactive Symphony",
      artist: "Alessandro Rivera",
      year: "2024",
      medium: "Animation & Micro-interactions",
      dimensions: "User Experience",
      price: "Portfolio Piece",
      description: "A choreographed dance of user interface elements that respond to human touch with elegant precision.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=700&fit=crop",
      likes: 456,
      views: 1567,
    },
    {
      id: 4,
      title: "Code Poetry",
      artist: "Alessandro Rivera",
      year: "2024",
      medium: "Clean Architecture",
      dimensions: "Maintainable Codebase",
      price: "Best Practices",
      description: "Where functionality meets beauty - an ode to well-structured, readable, and performant code.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      likes: 189,
      views: 743,
    },
    {
      id: 5,
      title: "User-Centered Vision",
      artist: "Alessandro Rivera",
      year: "2024",
      medium: "UX Research & Design",
      dimensions: "Human Psychology",
      price: "Consultation Available",
      description: "A deep dive into understanding user needs and translating them into intuitive digital experiences.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=800&fit=crop",
      likes: 321,
      views: 1098,
    },
    {
      id: 6,
      title: "Performance Masterpiece",
      artist: "Alessandro Rivera",
      year: "2024",
      medium: "Optimization Techniques",
      dimensions: "Sub-second Loading",
      price: "Speed Consulting",
      description: "The art of making web applications lightning-fast while maintaining rich functionality and visual appeal.",
      image: "https://images.unsplash.com/photo-1609440720952-15d4cfeaa89c?w=800&h=750&fit=crop",
      likes: 267,
      views: 934,
    },
  ];

  useEffect(() => {
    setMounted(true);

    // Auto-advance featured artwork
    const interval = setInterval(() => {
      setCurrentArtwork((prev) => (prev + 1) % artworks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [artworks.length]);

  if (!mounted) return null;

  const featuredArt = artworks[currentArtwork];

  return (
    <section id="home" className="min-h-screen gallery-section relative overflow-hidden">
      {/* Gallery Lighting Effect */}
      <div className="gallery-spotlight"></div>

      {/* Museum-style Track Lighting */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-30"></div>

      <div className="gallery-container">
        {/* Gallery Header */}
        <div className="text-center mb-16 pt-20">
          <div className="gallery-label mb-4">Currently Exhibiting</div>
          <h1 className="gallery-heading gallery-heading-xl mb-6">
            Digital Artistry
            <br />
            <span style={{ color: "var(--gallery-accent)" }}>Collection 2024</span>
          </h1>
          <p className="gallery-subtitle">A curated selection of web development masterpieces</p>
          <div className="gallery-text gallery-text-lg max-w-3xl mx-auto">
            Welcome to an immersive gallery experience where code becomes art, design meets functionality, and every pixel tells a story.
            Step into my digital atelier and explore the intersection of technology and creativity.
          </div>
        </div>

        {/* Featured Artwork Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="gallery-frame gallery-interactive">
              <img src={featuredArt.image} alt={featuredArt.title} className="gallery-image w-full h-80 object-cover" />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <EyeIcon className="w-4 h-4" />
                  {featuredArt.views}
                </div>
                <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <HeartIcon className="w-4 h-4 text-red-400" />
                  {featuredArt.likes}
                </div>
              </div>
            </div>

            {/* Artwork Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentArtwork(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentArtwork ? "bg-yellow-600 shadow-lg" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="gallery-card">
            <div className="gallery-caption p-0">
              <h2 className="gallery-title text-2xl mb-3">{featuredArt.title}</h2>
              <p className="gallery-artist text-lg mb-2">by {featuredArt.artist}</p>
              <p className="gallery-year mb-4">{featuredArt.year}</p>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="gallery-label">Medium:</span>
                  <span className="gallery-text ml-2">{featuredArt.medium}</span>
                </div>
                <div>
                  <span className="gallery-label">Dimensions:</span>
                  <span className="gallery-text ml-2">{featuredArt.dimensions}</span>
                </div>
                <div>
                  <span className="gallery-label">Availability:</span>
                  <span className="gallery-text ml-2">{featuredArt.price}</span>
                </div>
              </div>

              <p className="gallery-text mb-6">{featuredArt.description}</p>

              <div className="flex flex-wrap gap-4">
                <button className="gallery-btn gallery-btn-primary">
                  <EyeIcon className="w-5 h-5" />
                  View Details
                </button>
                <button className="gallery-btn gallery-btn-secondary">
                  <PaletteIcon className="w-5 h-5" />
                  Commission Similar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Gallery Wall */}
        <div className="mb-16">
          <h3 className="gallery-heading gallery-heading-md text-center mb-8">Recently Added to Collection</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {artworks.slice(0, 6).map((artwork, index) => (
              <div
                key={artwork.id}
                className="gallery-item gallery-interactive cursor-pointer"
                onMouseEnter={() => setHoveredPiece(index)}
                onMouseLeave={() => setHoveredPiece(null)}
                onClick={() => setIsViewerOpen(true)}
              >
                <div className="gallery-frame p-2">
                  <img src={artwork.image} alt={artwork.title} className="gallery-image w-full h-32 object-cover" />
                </div>

                {hoveredPiece === index && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-white p-4">
                      <h4 className="font-bold text-sm mb-1">{artwork.title}</h4>
                      <p className="text-xs opacity-80">{artwork.year}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Curator's Welcome */}
        <div className="gallery-exhibition">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              AR
            </div>
            <div className="flex-1">
              <h3 className="gallery-heading gallery-heading-md mb-4">Curator's Welcome</h3>
              <div className="gallery-curator-note">
                Each piece in this collection represents a journey of problem-solving, creativity, and technical mastery. As both artist and
                curator, I invite you to explore not just the visual elements, but the stories, challenges, and innovations behind each
                creation. Welcome to my digital gallery.
              </div>
              <p className="gallery-text mt-4">
                <strong>Alessandro Rivera</strong>
                <br />
                <em>Lead Developer & Digital Artist</em>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="gallery-card max-w-2xl mx-auto">
            <h3 className="gallery-heading gallery-heading-md mb-4">Experience the Full Collection</h3>
            <p className="gallery-text mb-8">
              Discover the complete portfolio, explore detailed case studies, and learn about the creative process behind each digital
              masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#gallery" className="gallery-btn gallery-btn-primary">
                <PaletteIcon className="w-5 h-5" />
                Explore Gallery
              </a>
              <a href="#contact" className="gallery-btn gallery-btn-secondary">
                Commission Artwork
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Gallery Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
