import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Full page gradient overlay for seamless blending */}
      <div className="page-gradient-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with custom gradient background */}
      <div className="hero-gradient-bg relative">
        <HeroSection />
      </div>

      {/* About Section with blending and custom background */}
      <div className="about-gradient-bg section-blend-top relative">
        <AboutSection />
      </div>

      {/* Projects Section with blending and custom background */}
      <div className="projects-gradient-bg section-blend-middle relative">
        <ProjectsSection />
      </div>

      {/* Contact Section with blending and custom background */}
      <div className="contact-gradient-bg section-blend-bottom relative">
        <ContactSection />
      </div>

      {/* Additional gradient transition layer */}
      <div className="gradient-section-transition fixed inset-0 pointer-events-none z-0" />
    </main>
  );
}
