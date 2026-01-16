import { motion } from "framer-motion";
import { Code, Server, Database, Terminal, Cpu, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: <Server className="w-6 h-6 text-green-400" />,
    skills: [
      "Python (Advanced)",
      "Django & DRF",
      "Java",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Frontend & UI",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Framer Motion",
      "Bootstrap",
    ],
  },
  {
    title: "Data & AI",
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    skills: [
      "Pandas & NumPy",
      "TensorFlow",
      "Scikit-Learn",
      "Matplotlib",
      "Jupyter",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux (Kali/Ubuntu)",
      "Wireshark",
      "Metasploit",
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="relative z-10 w-full py-20 px-4 md:px-20 bg-black/20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold text-white mb-16 text-center md:text-left"
      >
        MY <span className="text-green-500">SKILLS</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/5 rounded-lg">{category.icon}</div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="flex flex-col gap-3">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-gray-300 text-sm font-mono">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
