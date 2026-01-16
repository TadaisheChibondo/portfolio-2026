import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="relative z-10 w-full py-32 px-4 md:px-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-white mb-8">
          READY TO <span className="text-green-500">COLLABORATE?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Whether you need a custom trading bot, a secure web platform, or just
          want to talk tech—my terminal is open.
        </p>

        {/* Primary Call to Action */}
        <a
          href="mailto:tadaishechibondo@gmail.com"
          className="inline-block px-10 py-4 bg-green-500 text-black font-bold text-xl rounded-sm hover:bg-green-400 hover:scale-105 transition-all mb-16"
        >
          INITIALIZE_HANDSHAKE()
        </a>

        {/* Social Links Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/TadaisheChibondo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-green-500 hover:text-green-500 transition-all text-white"
          >
            <Github size={20} /> <span className="font-mono">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tadaishe-chibondo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-blue-500 hover:text-blue-500 transition-all text-white"
          >
            <Linkedin size={20} /> <span className="font-mono">LinkedIn</span>
          </a>

          <a
            href="https://wa.me/263789956550"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-green-400 hover:text-green-400 transition-all text-white"
          >
            <Phone size={20} /> <span className="font-mono">WhatsApp</span>
          </a>

          <a
            href="mailto:tadaishechibondo@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-red-400 hover:text-red-400 transition-all text-white"
          >
            <Mail size={20} /> <span className="font-mono">Email</span>
          </a>
        </div>

        <footer className="mt-32 text-gray-600 text-sm font-mono">
          © 2026 TADAISHE CHIBONDO. SYSTEM STATUS: ONLINE.
        </footer>
      </motion.div>
    </div>
  );
};

export default ContactSection;
