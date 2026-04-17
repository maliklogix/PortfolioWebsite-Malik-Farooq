import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Muhammad Farooq",
  initials: "MF",
  url: "https://maliklogix.com",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/Lahore,+Pakistan",
  description:
    "Digital Marketing & AI Automation Expert. I build intelligent systems and data-driven marketing strategies that scale business growth.",
  summary:
    "I specialize in bridging the gap between **Digital Marketing and AI Automation**. With a focus on building autonomous marketing pipelines, AI-powered lead generation, and agentic workflows, I help brands scale with precision. As the Founder of [MalikLogix](https://maliklogix.com), I ship production-ready AI solutions tailored for e-commerce and digital business growth.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Digital Marketing", icon: undefined },
    { name: "SEO", icon: undefined },
    { name: "GEO (Generative Engine Optimization)", icon: undefined },
    { name: "Content Strategy", icon: undefined },
    { name: "Performance Marketing", icon: undefined },
    { name: "AI Marketing Automation", icon: undefined },
    { name: "Social Media Automation", icon: undefined },
    { name: "AI Lead Scoring", icon: undefined },
    { name: "n8n Workflows", icon: undefined },
    { name: "Agentic AI", icon: undefined },
    { name: "LLM Orchestration", icon: undefined },
    { name: "RAG Systems", icon: undefined },
    { name: "ML Pipelines", icon: undefined },
    { name: "Predictive Analytics", icon: undefined },
    { name: "Customer Analytics", icon: undefined },
    { name: "Product Recommendation", icon: undefined },
    { name: "Inventory Intelligence", icon: undefined },
    { name: "Prompt Engineering", icon: undefined },
    { name: "Python", icon: Python },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Supabase", icon: undefined },
    { name: "GitHub", icon: Icons.github },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@malikfarooq.com",
    tel: "+923158304046",
    social: {
      GitHub: {
        name: "@maliklogix",
        url: "https://github.com/maliklogix",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/malik-farooq-1332b637a",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatsApp: {
        name: "+92 315 8304046",
        url: "https://wa.me/923158304046",
        icon: Icons.whatsapp,
        navbar: false,
      },
      email: {
        name: "hello@malikfarooq.com",
        url: "mailto:hello@malikfarooq.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MalikLogix",
      href: "https://maliklogix.com",
      badges: ["Founder"],
      location: "Lahore, Pakistan (Remote-first)",
      title: "Founder & Digital Marketing Automation Expert",
      logoUrl: "/maliklogix.png",
      start: "Mar 2026",
      end: "Present",
      description:
        "Founded and operate an AI-powered digital marketing and automation agency serving global e-commerce brands. Deliver services across AI Marketing, SEO & Content, AI Automation, GEO (Generative Engine Optimization), and the OpenClaw Platform. Manage client acquisition via Fiverr, Upwork, and direct outreach while building proprietary AI-driven products.",
    },
    {
      company: "NASK Group | NASKSOFT",
      href: "https://nasksoft.com",
      badges: [],
      location: "Lahore, DHA Phase 8, PK (Onsite)",
      title: "AI Specialist — Marketing & E-commerce Automation",
      logoUrl: "/nasksoft.png",
      start: "Nov 2025",
      end: "Feb 2026",
      description:
        "Designed and deployed agentic AI systems to automate social media monitoring and engagement (Social Watchdog project). Built AI-powered automation for Amazon wholesale ASIN analysis and Shopify product management — streamlining product sourcing, pricing intelligence, and inventory workflows. Built a RAG pipeline within a scalable agentic AI architecture for intelligent content and product search. Researched and implemented 8 AI modules for pakistanproperty.com improving property discovery and customer targeting. Developed the AI Studio framework powering NASKSOFT client-facing AI solutions. Automated Discord-based attendance and engagement with n8n workflows.",
    },
    {
      company: "HitroTech",
      href: "#",
      badges: [],
      location: "Khushab, PK (Onsite)",
      title: "Marketing Dashboard developer, US/UK Property Digital Markeitng",
      logoUrl: "/hitrotech.png",
      start: "Nov 2024",
      end: "Oct 2025",
      description:
        "Built ML-powered analytics dashboards for US/UK property markets delivering predictive pricing and market trend insights. Developed an AI lead scoring system to rank and prioritize client prospects, improving sales conversion for real estate teams. Cleaned and processed large-scale real estate Excel datasets, building automated data pipelines for ongoing analysis. Generated actionable predictive insights from property market data to support client decision-making.",
    },
  ],

  education: [
    {
      school: "University of Sargodha",
      href: "https://uos.edu.pk",
      degree: "Bachelor of Science — Computer Science (BS CS)",
      logoUrl: "/uos.png",
      start: "Sep 2019",
      end: "Sep 2023",
    },
    {
      school: "Govt. Post Graduate College, Bhakkar",
      href: "#",
      degree: "Faculty of Science (Pre-Engineering) — Mathematics & Physics",
      logoUrl: "/college.png",
      start: "Aug 2017",
      end: "Sep 2019",
    },
  ],
  certificates: [
    {
      title: "Digital Marketing Specialization",
      issuer: "Coursera / Meta",
      href: "https://www.coursera.org/",
      dates: "2024",
      logoUrl: "/coursera.png", 
    },
    {
      title: "Digital Marketing Mastery",
      issuer: "WsCube Tech",
      href: "https://www.wscubetech.com/",
      dates: "2024",
      logoUrl: "/wscubetech.png",
    },
    {
      title: "Agentic AI & LLMs Course",
      issuer: "Simplilearn",
      href: "https://www.simplilearn.com/",
      dates: "2025",
      logoUrl: "/simplilearn.png",
    },
    {
      title: "Math for Machine Learning Engineers",
      issuer: "ATOMIC",
      href: "#",
      dates: "2025",
      logoUrl: "/atomic.png",
    },
  ],
  projects: [
    {
      title: "Social Watchdog — Agentic Social AI",
      href: "https://github.com/maliklogix",
      dates: "Nov 2025 – Dec 2025",
      active: false,
      description:
        "Designed and deployed an agentic AI system that autonomously monitors brand mentions, competitor activity, and engagement signals across social media platforms. Built with n8n orchestration and LLM-powered classification to trigger real-time engagement workflows — reducing manual monitoring overhead by 90%.",
      technologies: ["n8n", "LLM", "Python", "Agentic AI", "Social APIs"],
      links: [],
      image: "/projectthumbnail/SocialWatchDog.webp",
      video: "",
    },
    {
      title: "N8N Workflow Template Collection",
      href: "https://github.com/maliklogix",
      dates: "2024 – 2025",
      active: true,
      description:
        "A curated collection of production-ready n8n workflow templates in JSON format covering AI automation, social media pipelines, lead generation, Discord bots, and e-commerce integrations. Used internally at MalikLogix and shared open-source for the automation community.",
      technologies: ["n8n", "JSON", "AI APIs", "Webhooks", "Automation"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/n8nTemplateCollection.webp",
      video: "",
    },
    {
      title: "AI Fashion Influencer Pipeline",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: false,
      description:
        "Built an end-to-end n8n automation pipeline for an AI fashion influencer — handling hook generation, video scripting, AI voiceover synthesis, and automated TikTok/Instagram posting. Reduced content production time from hours to minutes per post.",
      technologies: ["n8n", "LLM", "TTS AI", "TikTok API", "Instagram API"],
      links: [],
      image: "/projectthumbnail/Viral-Content-Daily-Ideas-Automation-n8n-Workflow-Report.webp",
      video: "",
    },
    {
      title: "Discord Attendance & Engagement Bot",
      href: "https://github.com/maliklogix",
      dates: "Nov 2025 – Dec 2025",
      active: false,
      description:
        "Automated a Discord-based attendance tracking and team engagement system for NASKSOFT using n8n workflows. Integrates with internal HR data, sends automated reminders, logs attendance in real-time, and generates weekly reports — eliminating manual tracking entirely.",
      technologies: ["n8n", "Discord API", "Node.js", "Webhooks"],
      links: [],
      image: "/projectthumbnail/Wifi_Attendence_System.webp",
      video: "",
    },
    {
      title: "Amazon Wholesale ASIN Analyzer",
      href: "https://github.com/maliklogix",
      dates: "Nov 2025 – Dec 2025",
      active: true,
      description:
        "An AI-powered tool that matches wholesale supplier catalogs with Amazon listings, analyzes Keepa price history, and scores products by profitability — helping FBA sellers identify the best wholesale opportunities. Integrates automated Shopify product management for seamless sourcing-to-listing workflows.",
      technologies: ["Python", "Keepa API", "Amazon SP-API", "AI Scoring", "Shopify API"],
      links: [
        {
          type: "Website",
          href: "https://github.com/maliklogix",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projectthumbnail/Amazon-WholeSale-Calculator.webp",
      video: "",
    },
    {
      title: "NexaShoppify — Shopify Automation Dashboard",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "A full-featured Next.js 14 Shopify automation dashboard with 11 pages covering product management, order tracking, analytics, and AI-assisted operations. Deployed on Vercel with server-side rendering for optimal performance and SEO.",
      technologies: ["Next.js 14", "TypeScript", "Shopify API", "Tailwind CSS", "Vercel"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/NexaShoppify.webp",
      video: "",
    },
    {
      title: "ShopDesk — Full-Stack Shopify Dashboard",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "A full-stack Shopify CSR dashboard built with Node.js/Express and PostgreSQL, featuring role-based authentication, product analytics, and real-time inventory management. Designed for multi-user e-commerce operations teams.",
      technologies: ["Node.js", "Express", "PostgreSQL", "React", "Role-based Auth"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/AIAutomationSiteNextJSComplete.webp",
      video: "",
    },
    {
      title: "SellerOpsAI — Amazon FBA Profit Calculator",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "A clean TypeScript React application for Amazon FBA sellers to calculate real profit margins, factoring in Amazon fees, COGS, shipping, and ROI targets. Built with a focus on accuracy, fast UX, and mobile responsiveness.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/NexaShoppify.webp",
      video: "",
    },
    {
      title: "AI Digital Marketing Platform",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "A React 18 + Tailwind CSS + JavaScript project for AI-assisted digital marketing workflows — including automation pipelines, chatbot integration for lead generation, and a contact form with CRM connectivity. Designed as a client-facing marketing hub.",
      technologies: ["React 18", "Tailwind CSS", "JavaScript", "AI APIs", "Chatbot"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://github.com/maliklogix",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projectthumbnail/DigitalMarketingAIAutomation.webp",
      video: "",
    },
    {
      title: "API Key Validator — 15+ Providers",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "A self-hosted Node.js + Express web tool that instantly validates API keys for 15+ providers (OpenAI, Claude, Gemini, Stripe, etc.) with real-time results, zero key storage, and a clean dark/light UI. Widely useful for developers and agencies managing multiple AI service accounts.",
      technologies: ["Node.js", "Express", "JavaScript", "REST APIs", "Dark/Light UI"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/APIKeyTester.webp",
      video: "",
    },
    {
      title: "PromptsForAITools — Open-Source Prompt Library",
      href: "https://github.com/maliklogix",
      dates: "2024 – 2025",
      active: true,
      description:
        "An open-source library of expert-crafted prompts for 28+ AI tools including Midjourney, Cursor, Claude, ChatGPT, and other popular LLMs. Curated for practitioners who want immediately usable, high-quality prompts across design, dev, marketing, and research workflows.",
      technologies: ["Prompt Engineering", "Midjourney", "Cursor", "LLMs", "Open Source"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/PromptsForAITools-Comprehensive.webp",
      video: "",
    },
    {
      title: "CreativeAIStudio",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "An HTML-based creative studio interface for generating and experimenting with AI-powered content. Provides a visual workspace for prompt iteration, output comparison, and content export — designed for non-technical marketers and creatives.",
      technologies: ["HTML", "CSS", "JavaScript", "AI APIs"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/CreativeAIStudio.webp",
      video: "",
    },
    {
      title: "Pakistan Property AI Platform — 8 AI Modules",
      href: "https://github.com/maliklogix",
      dates: "Nov 2025 – Dec 2025",
      active: false,
      description:
        "Researched, designed, and implemented 8 AI modules for the pakistanproperty.com real estate platform covering Urdu NLP, computer vision property matching, AI lead scoring, intelligent recommendation engine, and a hybrid local/cloud LLM strategy — improving property discovery and customer targeting at scale.",
      technologies: ["Python", "NLP", "Computer Vision", "LLM", "RAG", "Recommendation AI"],
      links: [],
      image: "/projectthumbnail/US-UK-Property-Compaign-Builder.webp",
      video: "",
    },
    {
      title: "UK/US Property Analytics & Price Prediction",
      href: "https://github.com/maliklogix",
      dates: "Nov 2024 – Oct 2025",
      active: false,
      description:
        "ML-powered analytics dashboards for US/UK property markets delivering predictive pricing, market trend insights, and smart house price prediction tools. Includes a list-building engine for land data sourcing and an AI lead scoring system that improved real estate sales team conversion rates.",
      technologies: ["Python", "ML", "Pandas", "Excel", "Dashboard", "Predictive Analytics"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/US-UK-Property-Compaign-Builder.webp",
      video: "",
    },
    {
      title: "RAG Chatbot — Multi-LLM Provider UI",
      href: "https://github.com/maliklogix",
      dates: "2024",
      active: true,
      description:
        "A redesigned RAG chatbot UI with a 3D dark aesthetic supporting five LLM providers (OpenAI, Claude, Gemini, Mistral, and more). Features context-aware document retrieval, provider switching, conversation history, and a polished dark-mode interface built for power users.",
      technologies: ["React", "LangChain", "RAG", "Three.js", "GSAP", "Framer Motion"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/maliklogix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectthumbnail/AICompanyPolicyRAG.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Agentic AI Automation Challenge",
      dates: "January 2026",
      location: "Remote / International",
      description:
        "Developed an autonomous multi-agent orchestration system for marketing lead qualification and CRM follow-up using n8n and OpenAI Swarm patterns.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      links: [],
    },
    {
      title: "Global AI Marketing Hackathon",
      dates: "November 2025",
      location: "San Francisco / Remote",
      description:
        "Built a GEO (Generative Engine Optimization) analyzer that predicts and optimizes brand visibility in AI-powered search results (Perplexity, SearchGPT).",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      links: [],
    },
    {
      title: "n8n Workflow Mastery Cup",
      dates: "August 2024",
      location: "Virtual",
      description:
        "Engineered a complex multi-platform automation bridging Shopify inventory with real-time social media ad-spend adjustment based on stock levels.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "April 2024",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. This project recieved 1st place prize and was invited to demo at NextAI Canada.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "2024",
      location: "Montreal, Quebec",
      description: "Developed realtime facial microexpression analyzer using AI.",
      image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
  ],
} as const;
