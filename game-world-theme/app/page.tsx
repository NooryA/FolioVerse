import AboutSection from "../components/about-section";
import ProjectsSection from "../components/projects-section";
import ContactSection from "../components/contact-section";
import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
