import { motion } from "framer-motion";
import { Zap, Lock, BarChart3, ArrowRight, Workflow } from "lucide-react"; // Added Workflow icon

const services = [
  {
    title: "Algorithmic Trading Solutions",
    price: "Custom Quotes",
    description:
      "I build and backtest custom trading bots for Forex and Synthetic Indices. Includes risk management logic and MT5 integration.",
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    features: [
      "Strategy Automation",
      "Backtesting Reports",
      "Risk Parameters",
      "Source Code Included",
    ],
    message:
      "Hi Tadaishe, I am interested in your Algorithmic Trading Solutions. I have a strategy I want to automate.",
  },
  {
    title: "Python Automation & Scripting", // NEW SERVICE
    price: "Starting at $40",
    description:
      "Stop doing repetitive tasks. I write custom scripts to scrape data, organize files, and automate your daily workflows.",
    icon: <Workflow className="w-8 h-8 text-yellow-400" />,
    features: [
      "Web Scraping (Data Extraction)",
      "Excel/PDF Automation",
      "Scheduled Email Bots",
      "File System Organization",
    ],
    message:
      "Hi Tadaishe, I need a Python script to automate a repetitive task.",
  },
  {
    title: "Full Stack Web Development",
    price: "Starting at $500",
    description:
      "Modern, high-performance web applications built with React and Django. Perfect for SaaS ideas, dashboards, or business tools.",
    icon: <Zap className="w-8 h-8 text-blue-400" />,
    features: [
      "Responsive Design",
      "Secure Database",
      "Admin Dashboard",
      "API Integration",
    ],
    message:
      "Hi Tadaishe, I am looking for a Full Stack Developer to build a web application.",
  },
  {
    title: "Cybersecurity Audits",
    price: "Hourly Rates",
    description:
      "Vulnerability assessment for your local networks and web applications. I identify weak points before attackers do.",
    icon: <Lock className="w-8 h-8 text-red-400" />,
    features: [
      "Penetration Testing",
      "Network Scanning",
      "Security Report",
      "Patching Advice",
    ],
    message:
      "Hi Tadaishe, I need a Cybersecurity Audit for my network/application.",
  },
];

const ServicesSection = () => {
  return (
    <div id="services" className="relative z-10 w-full py-20 px-4 md:px-20">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold text-white mb-16 text-center md:text-right"
      >
        AVAILABLE <span className="text-green-500">SERVICES</span>
      </motion.h2>

      {/* Changed to grid-cols-2 to balance the 4 services perfectly */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-green-500/50 transition-all group"
          >
            <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-green-500/20 transition-colors">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-green-400 font-mono text-sm mb-6">
              {service.price}
            </p>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              {service.description}
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <span className="text-green-500">✓</span> {feature}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/263789956550?text=${encodeURIComponent(
                service.message,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center gap-2 border border-white/20 rounded text-white text-sm font-bold hover:bg-green-500 hover:text-black hover:border-green-500 transition-all group-hover:scale-105"
            >
              REQUEST ACCESS <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
