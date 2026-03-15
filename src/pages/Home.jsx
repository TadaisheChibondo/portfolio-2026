import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] selection:bg-green-500 selection:text-black">
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 flex flex-col gap-0">
        <HeroSection />
        <div id="skills">
          <SkillsSection />
        </div>
        <ProjectsSection />
        <div id="services">
          <ServicesSection />
        </div>
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
