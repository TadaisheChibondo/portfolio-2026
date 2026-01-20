import { motion } from "framer-motion";
import {
  TrendingUp,
  Bot,
  Shield,
  ExternalLink,
  ShoppingBag,
  Home,
  Command,
  LineChart,
  Terminal, // <--- 1. Added Terminal Icon for the CLI
} from "lucide-react";

const projects = [
  {
    id: 5,
    title: "Campus Accommodate",
    category: "Real Estate Tech",
    description:
      "Housing finder for university students. Features distance calculators, landlord verification, and review systems.",
    icon: <Home className="w-10 h-10 text-pink-400" />,
    tech: ["React", "Django", "Google Maps API"],
    link: "https://campus-accomodation.vercel.app/",
  },
  {
    id: 3,
    title: "Campus Marketplace",
    category: "E-Commerce",
    description:
      "Student-to-student marketplace for buying/selling gear. Features secure auth, WhatsApp integration for direct sales, and category filtering.",
    icon: <ShoppingBag className="w-10 h-10 text-orange-400" />,
    tech: ["Django DRF", "React", "PostgreSQL"],
    link: "https://campus-market-psi.vercel.app/",
  },
  {
    id: 0,
    title: "Real-Time Crypto Analyzer",
    category: "FinTech / Data Visualization",
    description:
      "Live financial dashboard tracking crypto prices (BTC/ETH) with automated SMA technical analysis and Bullish/Bearish trend flagging.",
    icon: <LineChart className="w-10 h-10 text-green-400" />,
    tech: ["Python", "Streamlit", "Plotly", "CoinGecko API"],
    link: "https://crypto-dashboard-by-tadaishe.streamlit.app/",
  },
  {
    id: 6, // Newest Project
    title: "Ops Automation CLI",
    category: "DevTools / System Engineering",
    description:
      "A modular CLI tool for developer productivity. Features include automated file system organization, secure project backups (Vault), and a generic web scraper.",
    icon: <Terminal className="w-10 h-10 text-yellow-400" />,
    tech: ["Python", "Typer", "Rich", "BeautifulSoup"],
    link: "https://github.com/TadaisheChibondo/ops-cli-tool",
  },
  {
    id: 1,
    title: "Bot Fleet Commander",
    category: "High-Frequency Trading",
    description:
      "Real-time telemetry dashboard for managing distributed trading bots. Features WebSocket updates via Pusher, remote 'Kill Switch', and profit tracking.",
    icon: <Command className="w-10 h-10 text-purple-400" />,
    tech: ["Next.js", "Redis", "Pusher", "Python"],
    link: "https://fleet-commander-woad.vercel.app/",
  },
  {
    id: 4,
    title: "Algo Trading Bot",
    category: "FinTech / Python",
    description:
      "Automated trading system for Synthetic Indices. Features custom indicators (RSI/EMA), backtesting engine, and real-time execution.",
    icon: <TrendingUp className="w-10 h-10 text-green-400" />,
    tech: ["Python", "Pandas", "MetaTrader 5"],
    link: "https://tadaishechibondo.github.io/quant-portfolio",
  },
  {
    id: 2,
    title: "Nhimbe AI",
    category: "AgriTech AI",
    description:
      "An AI-powered chatbot designed to support smallholder farmers in Zimbabwe with real-time agricultural advice.",
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    tech: ["Python", "TensorFlow", "NLP"],
    link: "https://github.com/TadaisheChibondo/NAI",
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="relative z-10 w-full py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold text-white mb-12 text-center md:text-left"
      >
        ACTIVE <span className="text-green-500">PROJECTS</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group block relative p-6 rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-md overflow-hidden hover:border-green-500/50 transition-colors cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-green-500/30 transition-colors">
                {project.icon}
              </div>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-green-400 text-sm mb-4 font-mono">
              {project.category}
            </p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
