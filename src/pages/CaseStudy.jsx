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
import { Link } from "react-router-dom";

const CaseStudy = () => {
  // This ensures the page loads at the very top when you navigate to it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black pb-20">
      {/* Navigation Bar for Case Study */}
      <nav className="w-full p-6 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors font-mono text-sm"
          >
            <ArrowLeft size={16} /> RETURN_TO_SYSTEM
          </Link>
          <span className="font-mono text-xs text-green-500 border border-green-500/30 px-2 py-1 rounded bg-green-500/10">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            Bot Fleet <span className="text-purple-500">Commander</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            A real-time telemetry dashboard for managing distributed algorithmic
            trading bots. Built to monitor high-frequency trades and execute
            emergency remote overrides.
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="https://fleet-commander-woad.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-black font-bold hover:bg-purple-400 transition-colors"
            >
              <ExternalLink size={16} /> LIVE_DASHBOARD
            </a>
            <a
              href="https://github.com/TadaisheChibondo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white transition-colors"
            >
              <Github size={16} /> VIEW_SOURCE
            </a>
          </div>
        </motion.header>

        {/* Image / Video Placeholder */}
        {/* The Actual Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full rounded-xl mb-16 overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)] group"
        >
          <img
            src="/bot-fleet.png"
            alt="Bot Fleet Commander Dashboard"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column (Main Text) */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Server className="text-purple-500" /> The Objective
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Managing multiple MetaTrader 5 (MT5) bots running on different
                virtual private servers (VPS) was becoming a logistical
                nightmare. I needed a centralized "Command Center" to monitor
                live equity, active positions, and systemic health across the
                entire fleet without having to manually log into each server.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Activity className="text-purple-500" /> The Architecture
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The system relies on a decoupled architecture. The trading bots
                (written in Python) act as independent agents. They push state
                updates to a centralized Upstash Redis database.
              </p>
              <p className="text-gray-400 leading-relaxed">
                To achieve sub-second latency for the frontend dashboard, I
                implemented WebSockets using Pusher. When a bot executes a
                trade, the Next.js dashboard updates instantly without requiring
                a page refresh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="text-purple-500" /> The "Kill Switch"
                Challenge
              </h2>
              <p className="text-gray-400 leading-relaxed">
                The most critical feature was the Remote Kill Switch. If market
                volatility spikes unexpectedly, I needed a way to halt all bots
                simultaneously. The challenge was ensuring the command reached
                the Python agents securely and instantly. I solved this by
                establishing a persistent listener on the agents that subscribes
                to a high-priority Redis pub/sub channel.
              </p>
            </section>
          </div>

          {/* Right Column (Sidebar Tech Stack) */}
          <div className="space-y-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-bold text-lg mb-4 text-white">Tech Stack</h3>
              <div className="flex flex-col gap-3">
                {[
                  "Next.js (Frontend)",
                  "Python (Agent/Bots)",
                  "Upstash Redis",
                  "Pusher (WebSockets)",
                  "MetaTrader 5 API",
                ].map((tech) => (
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
