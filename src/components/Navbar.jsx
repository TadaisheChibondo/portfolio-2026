import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to add background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Start", target: "#home" },
    { name: "Skills", target: "#skills" },
    { name: "Projects", target: "#projects" },
    { name: "Services", target: "#services" },
    { name: "Contact", target: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold font-mono text-white tracking-tighter hover:text-green-500 transition-colors"
        >
          TC<span className="text-green-500">_DEV</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.target}
              className="text-sm font-mono text-gray-400 hover:text-green-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (Simple version) */}
        <a
          href="#contact"
          className="px-4 py-2 border border-green-500/50 text-green-500 text-xs font-bold rounded hover:bg-green-500 hover:text-black transition-all"
        >
          HIRE_ME
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
