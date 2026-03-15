import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
// Import our new centralized database
import { projectsData } from "../data/projects";

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
        {/* We map over projectsData instead of the old hardcoded array */}
        {projectsData.map((project, index) => {
          const CardContent = (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative p-6 rounded-xl border border-white/10 bg-gray-900/40 backdrop-blur-md overflow-hidden hover:border-green-500/50 transition-colors cursor-pointer h-full flex flex-col"
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

              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );

          // If internal, we dynamically route to /case-study/ID
          return project.isInternal ? (
            <Link
              to={`/case-study/${project.id}`}
              key={project.id}
              className="block h-full"
            >
              {CardContent}
            </Link>
          ) : (
            // If external, we use the liveLink (or fallback to githubLink)
            <a
              href={project.liveLink || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className="block h-full"
            >
              {CardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
