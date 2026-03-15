import {
  TrendingUp,
  Bot,
  Shield,
  ShoppingBag,
  Home,
  Command,
  LineChart,
  Terminal,
} from "lucide-react";

export const projectsData = [
  {
    id: "bot-fleet",
    title: "Bot Fleet Commander",
    category: "High-Frequency Trading",
    description:
      "Real-time telemetry dashboard for managing distributed trading bots. Features WebSocket updates via Pusher, remote 'Kill Switch', and profit tracking.",
    icon: <Command className="w-10 h-10 text-purple-400" />,
    tech: ["Next.js", "Redis", "Pusher", "Python"],
    liveLink: "https://fleet-commander-woad.vercel.app/",
    githubLink: "https://github.com/TadaisheChibondo",
    isInternal: true,
    themeColor: "text-purple-500",
    shadowColor: "rgba(168,85,247,0.15)",
    image: "/bot-fleet.png", // Add this image to your public folder
    details: {
      objective:
        "Managing multiple MetaTrader 5 (MT5) bots running on different virtual private servers (VPS) was becoming a logistical nightmare. I needed a centralized 'Command Center' to monitor live equity, active positions, and systemic health across the entire fleet without having to manually log into each server.",
      architecture:
        "The system relies on a decoupled architecture. The trading bots (written in Python) act as independent agents. They push state updates to a centralized Upstash Redis database. To achieve sub-second latency for the frontend dashboard, I implemented WebSockets using Pusher. When a bot executes a trade, the Next.js dashboard updates instantly.",
      challenge:
        "The most critical feature was the Remote Kill Switch. If market volatility spikes unexpectedly, I needed a way to halt all bots simultaneously. The challenge was ensuring the command reached the Python agents securely and instantly. I solved this by establishing a persistent listener on the agents that subscribes to a high-priority Redis pub/sub channel.",
    },
  },
  {
    id: "ares-pro",
    title: "Ares Terminal Pro",
    category: "Algo Trading / Quant Finance",
    description:
      "Production-grade desktop trading platform. Features a multithreaded execution engine, Monte Carlo risk simulations, and real-time equity charting.",
    icon: <TrendingUp className="w-10 h-10 text-green-400" />,
    tech: ["Python", "Flet", "MetaTrader 5", "Pandas"],
    liveLink: "",
    githubLink: "https://github.com/TadaisheChibondo/AresTradingBot",
    isInternal: true,
    themeColor: "text-green-500",
    shadowColor: "rgba(34,197,94,0.15)",
    image: "/ares-pro.png",
    details: {
      objective:
        "While MT5 is powerful, its native GUI lacks advanced risk modeling and custom analytics. I built Ares Terminal Pro to serve as a standalone, professional-grade desktop interface that interfaces directly with the MT5 terminal via Python, offering deeper insights into strategy performance.",
      architecture:
        "Built entirely in Python using the Flet UI framework (based on Flutter). The backend heavily utilizes Pandas for data manipulation and the MT5 Python integration for execution. The application uses multithreading to ensure the UI remains highly responsive while complex Monte Carlo simulations run in the background.",
      challenge:
        "The primary challenge was managing asynchronous data streams and thread-blocking. Live tick data was freezing the UI during high market activity. I refactored the data ingestion pipeline to use background worker threads and thread-safe queues, ensuring real-time chart updates without UI lag.",
    },
  },
  {
    id: "campus-acc",
    title: "Campus Accommodate",
    category: "Real Estate Tech",
    description:
      "Housing finder for university students. Features distance calculators, landlord verification, and review systems.",
    icon: <Home className="w-10 h-10 text-pink-400" />,
    tech: ["React", "Django", "Google Maps API"],
    liveLink: "https://campus-accomodation.vercel.app/",
    githubLink: "https://github.com/TadaisheChibondo",
    isInternal: true,
    themeColor: "text-pink-500",
    shadowColor: "rgba(236,72,153,0.15)",
    image: "/campus-acc.png",
    details: {
      objective:
        "University students in Zimbabwe face massive difficulties finding secure, verified off-campus housing. I built Campus Accommodate to bridge the gap between students and landlords, eliminating predatory agents and providing transparent reviews and location data.",
      architecture:
        "A decoupled full-stack application. The backend is powered by Django and PostgreSQL, exposing a secure REST API. The frontend is a React application that consumes this API. I integrated the Google Maps API to visually display property locations and calculate walking distances to the university campus.",
      challenge:
        "Handling complex geolocation querying was difficult. I needed a way to filter properties based on radius (e.g., 'show houses within 5km of campus'). I implemented PostGIS with PostgreSQL to handle spatial data, allowing the Django backend to run highly efficient location-based queries.",
    },
  },
  {
    id: "campus-market",
    title: "Campus Marketplace",
    category: "E-Commerce",
    description:
      "Student-to-student marketplace for buying/selling gear. Features secure auth, WhatsApp integration for direct sales, and category filtering.",
    icon: <ShoppingBag className="w-10 h-10 text-orange-400" />,
    tech: ["Django DRF", "React", "PostgreSQL"],
    liveLink: "https://campus-market-psi.vercel.app/",
    githubLink: "https://github.com/TadaisheChibondo",
    isInternal: true,
    themeColor: "text-orange-500",
    shadowColor: "rgba(249,115,22,0.15)",
    image: "/campus-market.png",
    details: {
      objective:
        "To create a localized, secure marketplace exclusively for university students to buy and sell textbooks, electronics, and dorm supplies, reducing the friction of standard classifieds platforms.",
      architecture:
        "The core is built on the Django REST Framework (DRF) handling user authentication via JWTs and managing the PostgreSQL database. The React frontend provides a snappy, SPA experience with dynamic search and category filtering.",
      challenge:
        "Because in-app messaging requires heavy infrastructure, I opted for a seamless WhatsApp integration. The challenge was securely passing product context to WhatsApp without exposing user phone numbers unnecessarily. I built a dynamic link generator that pre-fills messages with the exact item ID and title, creating a smooth transaction pipeline.",
    },
  },
  {
    id: "crypto-analyzer",
    title: "Real-Time Crypto Analyzer",
    category: "FinTech / Data Visualization",
    description:
      "Live financial dashboard tracking crypto prices (BTC/ETH) with automated SMA technical analysis and Bullish/Bearish trend flagging.",
    icon: <LineChart className="w-10 h-10 text-green-400" />,
    tech: ["Python", "Streamlit", "Plotly", "CoinGecko API"],
    liveLink: "https://crypto-dashboard-by-tadaishe.streamlit.app/",
    githubLink: "https://github.com/TadaisheChibondo",
    isInternal: true,
    themeColor: "text-green-400",
    shadowColor: "rgba(74,222,128,0.15)",
    image: "/crypto-analyzer.png",
    details: {
      objective:
        "I wanted to build a lightweight, accessible dashboard that could rapidly analyze market trends and calculate Simple Moving Averages (SMA) on the fly, without the bloat of standard exchange interfaces.",
      architecture:
        "The app is built entirely in Python using Streamlit for rapid UI development. It pulls live market data via the CoinGecko API. The data is processed using Pandas, and interactive, zoomable charts are rendered using the Plotly library.",
      challenge:
        "Handling API rate limits. CoinGecko strictly throttles free API requests. I implemented a caching mechanism using Streamlit's `@st.cache_data` decorator with a Time-To-Live (TTL) parameter. This ensured the app only fetched fresh data every few minutes, preventing IP bans while keeping the dashboard fast.",
    },
  },
  {
    id: "ops-cli",
    title: "Ops Automation CLI",
    category: "DevTools / System Engineering",
    description:
      "A modular CLI tool for developer productivity. Features include automated file system organization, secure project backups (Vault), and a generic web scraper.",
    icon: <Terminal className="w-10 h-10 text-yellow-400" />,
    tech: ["Python", "Typer", "Rich", "BeautifulSoup"],
    liveLink: "",
    githubLink: "https://github.com/TadaisheChibondo/ops-cli-tool",
    isInternal: true,
    themeColor: "text-yellow-400",
    shadowColor: "rgba(250,204,21,0.15)",
    image: "/ops-cli.png",
    details: {
      objective:
        "To automate my own repetitive daily workflows. I needed a terminal-based utility to handle folder organization, quick data scraping, and secure project backups without leaving my coding environment.",
      architecture:
        "Built in Python using the 'Typer' library for elegant CLI argument parsing and 'Rich' for beautiful terminal output (colors, tables, and progress bars). It interfaces directly with the host OS file system.",
      challenge:
        "Ensuring cross-platform compatibility (Windows vs Linux). File path structures differ greatly between operating systems. I heavily utilized Python's built-in `pathlib` module to ensure directory manipulations and backups worked flawlessly regardless of the underlying OS.",
    },
  },
  // Adding the two external-only projects so they still show up in the grid
  {
    id: "nhimbe-ai",
    title: "Nhimbe AI",
    category: "AgriTech AI",
    description:
      "An AI-powered chatbot designed to support smallholder farmers in Zimbabwe with real-time agricultural advice.",
    icon: <Bot className="w-10 h-10 text-blue-400" />,
    tech: ["Python", "TensorFlow", "NLP"],
    liveLink: "https://github.com/TadaisheChibondo/NAI",
    githubLink: "https://github.com/TadaisheChibondo/NAI",
    isInternal: false,
  },
  {
    id: "algo-trading",
    title: "Algo Trading Bot",
    category: "FinTech / Python",
    description:
      "Automated trading system for Synthetic Indices. Features custom indicators (RSI/EMA), backtesting engine, and real-time execution.",
    icon: <TrendingUp className="w-10 h-10 text-green-400" />,
    tech: ["Python", "Pandas", "MetaTrader 5"],
    liveLink: "https://tadaishechibondo.github.io/quant-portfolio",
    githubLink: "https://github.com/TadaisheChibondo",
    isInternal: false,
  },
];
