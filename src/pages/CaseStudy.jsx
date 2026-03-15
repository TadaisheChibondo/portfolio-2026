import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Server,
  Activity,
  ShieldAlert,
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { projectsData } from "../data/projects";

const CaseStudy = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  // 1. Tailwind Fix: We explicitly write out the full class names so Tailwind doesn't delete them.
  const colorMap = {
    "text-purple-500": { bg: "bg-purple-500", text: "text-purple-500" },
    "text-green-500": { bg: "bg-green-500", text: "text-green-500" },
    "text-green-400": { bg: "bg-green-400", text: "text-green-400" },
    "text-pink-500": { bg: "bg-pink-500", text: "text-pink-500" },
    "text-orange-500": { bg: "bg-orange-500", text: "text-orange-500" },
    "text-yellow-400": { bg: "bg-yellow-400", text: "text-yellow-400" },
  };

  // Default to green if something goes wrong
  const theme = colorMap[project.themeColor] || {
    bg: "bg-green-500",
    text: "text-green-500",
  };

  // 2. Title Fix: Automatically split the last word to give it the "pop" color
  const titleWords = project.title.split(" ");
  const lastWord = titleWords.pop();
  const firstPart = titleWords.join(" ");

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black pb-20">
      {/* Navigation Bar */}
      <nav className="w-full p-6 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors font-mono text-sm"
          >
            <ArrowLeft size={16} /> RETURN_TO_SYSTEM
          </Link>

          {/* Restored the globally green deployed badge */}
          <span className="font-mono text-xs border border-green-500/30 text-green-500 px-2 py-1 rounded bg-green-500/10">
            STATUS: DEPLOYED
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-12">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          {/* Automatically styled dual-color title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            {firstPart} <span className={theme.text}>{lastWord}</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                // Using the exact mapped background color
                className={`flex items-center gap-2 px-4 py-2 text-black font-bold transition-colors ${theme.bg} hover:opacity-80 rounded-sm`}
              >
                <ExternalLink size={16} /> LIVE_DEPLOYMENT
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white transition-colors rounded-sm"
            >
              <Github size={16} /> VIEW_SOURCE
            </a>
          </div>
        </motion.header>

        {/* Dynamic Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{ boxShadow: `0 0 30px ${project.shadowColor}` }}
          className="w-full rounded-xl mb-16 overflow-hidden border border-white/10 group bg-gray-900 aspect-video flex items-center justify-center"
        >
          <img
            src={project.image}
            alt={`${project.title} Dashboard`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <span className="hidden font-mono text-gray-500">
            [ SCREENSHOT PENDING: ADD {project.image} TO PUBLIC FOLDER ]
          </span>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Server className={theme.text} /> The Objective
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {project.details.objective}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Activity className={theme.text} /> The Architecture
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {project.details.architecture}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className={theme.text} /> The Challenge
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {project.details.challenge}
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-white">Tech Stack</h3>
              <div className="flex flex-col gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-black border border-white/10 text-gray-300 text-sm font-mono rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseStudy;
