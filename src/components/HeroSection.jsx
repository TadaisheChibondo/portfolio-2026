import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20"
    >
      {/* 0. Profile Picture (Pulled from GitHub) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 p-1 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
      >
        <img
          src="https://github.com/TadaisheChibondo.png"
          alt="Tadaishe Chibondo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-black object-cover"
        />
      </motion.div>

      {/* 1. The Glitchy Name */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter cursor-default glitch-hover"
      >
        TADAISHE CHIBONDO
      </motion.h1>

      {/* 2. The Typing Animation */}
      <div className="text-lg md:text-2xl text-green-400 font-mono mb-10 h-10">
        <span>I build </span>
        <TypeAnimation
          sequence={[
            "Algorithmic Trading Bots",
            2000,
            "Secure Backend Systems",
            2000,
            "Full Stack Applications",
            2000,
            "Digital Experiences",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block", fontWeight: "bold" }}
          repeat={Infinity}
        />
      </div>

      {/* 3. Call to Action */}
      <div className="flex flex-col sm:flex-row gap-6 mt-12">
        {/* Primary CTA (Existing, Stacked on Mobile) */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="px-8 py-3 border border-green-500 text-green-500 font-mono text-lg hover:bg-green-500 hover:text-black transition-all duration-300 rounded-sm"
        >
          VIEW_PROJECTS()
        </motion.a>

        {/* Secondary CTA (Resume, Grey Styling) */}
        <motion.a
          href="/TC_Resume_2026.pdf" // Direct link to your file in 'public'
          download="Tadaishe_Chibondo_Resume.pdf" // Triggers download with this filename
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }} // Slight stagger delay
          className="px-8 py-3 border border-gray-500 text-gray-300 font-mono text-lg hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
        >
          DOWNLOAD_CV()
        </motion.a>
      </div>
    </div>
  );
};

export default HeroSection;
