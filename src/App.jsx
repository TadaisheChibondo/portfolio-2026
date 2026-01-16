import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] selection:bg-green-500 selection:text-black">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* 3. Main Content */}
      <div className="relative z-10 flex flex-col gap-0">
        {/* Sections with IDs for scrolling */}
        <HeroSection /> {/* Contains id="home" */}
        <div id="skills">
          <SkillsSection />
        </div>
        <ProjectsSection /> {/* Contains id="projects" */}
        <div id="services">
          <ServicesSection />
        </div>
        <ContactSection /> {/* Contains id="contact" */}
      </div>
    </div>
  );
}

export default App;
