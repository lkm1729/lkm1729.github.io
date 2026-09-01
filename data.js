// ============================================================
// ★ 你的个人网站内容都集中在这个文件里！
// 以后想改任何文字，只需要编辑本文件，保存后刷新网页即可。
// 只需修改引号 "..." 里的内容，其他符号请不要改动。
// 图片文件请放进 assets/ 文件夹，然后在下面填文件名。
// ============================================================

const siteData = {

  // ---------- 基本信息 ----------
  name: "Davis Lau",
  role: "Physics Graduate · AI-Augmented Researcher · Data Analytics",
  tagline: "Where physics meets data intelligence.", // Hero 首屏标语
  statusBadge: "2026 Fresh Graduate · Open to Opportunities", // Hero 求职状态徽章（留空则不显示）
  avatar: "assets/avatar.jpg", // 头像图片，如 "assets/avatar.jpg"；留空则自动显示姓名首字母
  location: "Yuen Long, N.T., Hong Kong",

  // ---------- 个人简介（首页和 About 板块都会显示）----------
  summary: "Hello! I am Davis Lau, a Physics graduate from the City University of Hong Kong passionate about bridging the gap between rigorous quantitative analysis, modern data analytics, and applied Generative AI. My academic and professional journey revolves around solving complex computational problems and turning messy, unstructured data into structured, actionable insights.\n\nThrough my degree in Physics, I built a deep foundation in computational physics, data modeling, and experimental instrumentation. As a Research Assistant Intern at CityU, I processed three-dimensional momentum-space electronic structures using Angle-Resolved Photoemission Spectroscopy (ARPES) data. By applying analytical and numerical methods in MATLAB and IGOR, I modeled complex real-space lattice structures into reciprocal-space Brillouin zones — honing my analytical rigor, mathematical intuition, and capacity for handling high-dimensional dataset workflows.\n\nParallel to fundamental science, I am deeply driven by practical applications of Large Language Models (LLMs) and deep learning. During my time with The Hong Kong Jockey Club, I worked on a quantitative database encoding project covering 2,600+ questionnaires and 50 hours of qualitative interview transcripts. By implementing LLM tools for sentiment analysis, I cut review times per transcript by 50–67% — from nearly an hour down to 20–30 minutes. My Final-Year Project further applied LLM-assisted programming and computer vision techniques to MRI/CT image colorization and registration workflows.\n\nAs an active, continuous learner, I constantly expand my toolkit across modern AI tech stacks — Python, MATLAB, Prompt Engineering, RAG concepts, LLM API configurations, and modern AI agents (Claude Code, Codex, ChatGPT). I believe the future of engineering and data analysis lies in augmenting deep domain logic with intelligent automation.\n\nI am currently seeking entry-level opportunities in Data Analytics, R&D, and Engineering where I can apply my quantitative problem-solving skills and GenAI implementation experience.",

  // ---------- 数据亮点（About 下方的统计条）----------
  stats: [
    { value: "2,600+", label: "Questionnaires processed" },
    { value: "400,000+", label: "Chinese characters transcribed" },
    { value: "50–67%", label: "Review time cut with LLM" },
    { value: "3", label: "AI projects shipped in ~28h" },
  ],

  // ---------- 联系方式（留空 "" 则对应按钮不显示）----------
  contact: {
    email: "kmlau82@outlook.com",
    linkedin: "https://www.linkedin.com/in/davislau02/",
    github: "https://github.com/lkm1729",
  },

  // ---------- 教育背景 ----------
  education: [
    {
      school: "City University of Hong Kong",
      degree: "Bachelor of Science in Physics",
      period: "Sep 2021 — Feb 2026",
      location: "Hong Kong",
      details: [
        "Selected Coursework: Intro to Computational Physics, Exploring Generative AI in Practice, The Art and Science of Data, Advanced Measurement and Instrumentation, Modern Physics.",
        "Academic Project Leadership: Led 3+ multidisciplinary team projects (3–5 members each) in computational data analysis and experimental modeling, coordinating task delegation and final technical presentations.",
      ],
    },
  ],

  // ---------- 工作 / 实习经历 ----------
  experience: [
    {
      company: "City University of Hong Kong",
      title: "Research Assistant Intern (Physics Dept.)",
      period: "Sep 2025 — Jan 2026",
      location: "Hong Kong",
      details: [
        "Collaborated with 2 PhD researchers to process and analyze 3D momentum-space electronic structures of crystalline materials using Angle-Resolved Photoemission Spectroscopy (ARPES) data.",
        "Applied analytical and numerical algorithms in MATLAB and IGOR to convert real-space lattice structures into reciprocal-space Brillouin zones (BZs) and fit complex electronic band structures.",
        "Generated 15+ publication-quality technical figures and 3D Fermi surface visualizations, directly supporting ongoing departmental research papers.",
        "Conducted weekly data fitting and error verification workflows, accelerating data modeling timelines for senior researchers.",
      ],
    },
    {
      company: "The Hong Kong Jockey Club",
      title: "Administrative Assistant",
      period: "Nov 2024 — Jan 2026",
      location: "Hong Kong",
      details: [
        "Collaborated within a cross-functional research team to process 2,600+ school-submitted questionnaires, systematically encoding qualitative responses across 100 analytical dimensions into a structured database.",
        "Transcribed approximately 50 hours of audio interview recordings into 400,000+ Chinese characters of analysis-ready text with high precision.",
        "Engineered LLM-driven sentiment analysis prompts and workflows, reducing review time per transcript from 60 minutes to 20–30 minutes — achieving a 50–67% efficiency increase over manual methods.",
      ],
    },
    {
      company: "Buymarket Limited",
      title: "E-Commerce Assistant",
      period: "Apr 2024 — Jul 2024",
      location: "Hong Kong",
      details: [
        "Managed the uploading of product information to the eBay platform, ensuring clarity and accuracy.",
        "Conducted image processing for product photos, enhancing visual appeal through Photoshop.",
        "Collaborated with team members to streamline e-commerce operations.",
      ],
    },
    {
      company: "City University of Hong Kong",
      title: "Administrative Assistant (Office)",
      period: "Apr 2024 — May 2024",
      location: "Hong Kong",
      details: [
        "Entered and organized information into university systems, ensuring accuracy and traceability of records.",
        "Maintained and secured digital and paper files, including invoices and reports, upholding confidentiality.",
        "Developed efficient filing systems to streamline access to important documents.",
      ],
    },
    {
      company: "City University of Hong Kong",
      title: "Administrative Assistant (School Office)",
      period: "Sep 2023 — Jan 2024",
      location: "Hong Kong",
      details: [
        "Supported daily operations of the school office, ensuring smooth data entry and document management.",
        "Facilitated efficient communication by handling inquiries and requests from students and staff.",
        "Assisted in preparing and organizing various events and activities.",
      ],
    },
    {
      company: "Top One A+ Education Center",
      title: "Education Tutor",
      period: "Sep 2022 — Dec 2022",
      location: "Hong Kong",
      details: [
        "Designed and implemented engaging curriculum plans to enhance students' academic performance.",
        "Utilised diverse teaching approaches, including interactive activities and discussions, to foster a dynamic learning environment.",
        "Tracked student progress meticulously and provided constructive feedback to parents.",
      ],
    },
  ],

  // ---------- 项目展示（link 留空则不显示链接按钮；lang 为技术栈彩色标签）----------
  projects: [
    {
      title: "Generative AI for Medical Image Registration",
      fullTitle: "Generative AI for Medical Image Registration & Colorization",
      tag: "Final-Year Project · 2025",
      lang: "Python",
      desc: "End-to-end AI workflow for MRI/CT alignment & colorization, benchmarked on 30+ paired 16K images (OpenCV, PyTorch).",
      link: "",
    },
    {
      title: "Nano-Banana Playground",
      tag: "2026 · Desktop Client",
      lang: "TypeScript",
      desc: "Local-first image-generation client for Gemini/OpenAI APIs with references, history, and secure settings.",
      link: "https://github.com/lkm1729/Nano-Banana-Playground",
    },
    {
      title: "Weather Card",
      tag: "2026 · Tauri 2",
      lang: "Rust",
      desc: "Windows weather client with liquid-glass UI, global search, Open-Meteo forecasts, flip clock, and Canvas animations.",
      link: "https://github.com/lkm1729/windows-weather-card",
    },
    {
      title: "Lightweight Chatbox",
      tag: "2026 · FastAPI",
      lang: "Python",
      desc: "Portable local AI chat client with Anthropic/OpenAI/Gemini, provider management, SQLite history, SSE, and FastAPI.",
      link: "https://github.com/lkm1729/lightweight-chatbot",
    },
  ],

  // ---------- 技能（按分类展示）----------
  skills: [
    {
      category: "AI & Analytics",
      items: [
        "Artificial Intelligence (AI)",
        "Generative AI",
        "Generative AI Tools",
        "AI Productivity",
        "Applied Artificial Intelligence",
        "Large Language Models (LLMs)",
        "Prompt Engineering",
        "RAG Concepts",
        "LLM API Configuration",
        "AI Agents",
        "TensorFlow",
        "PyTorch",
        "Deep Learning Concepts",
        "Sentiment Analysis",
        "Productivity Management",
      ],
    },
    {
      category: "Programming & Tools",
      items: [
        "Python (NumPy, OpenCV)",
        "MATLAB",
        "IGOR Pro",
        "Data Analysis",
        "Data Processing",
        "Data Entry",
        "Statistics",
        "Mathematics",
        "Matplotlib Data Visualization",
        "Troubleshooting",
        "Computer Systems",
        "Analysis",
        "Research & Development",
        "Research Projects",
        "Researching",
        "Report Writing",
        "MS Office (Excel, Word, PowerPoint)",
        "Canva",
        "Adobe Photoshop & Premiere Pro",
      ],
    },
    {
      category: "Physics & Science",
      items: [
        "Physics",
        "Applied Physics",
        "Physical Science",
        "Applied Science",
        "Materials Science",
        "Physical Computing",
        "Physics for Technology",
        "Instrumentation",
        "Instrumental Analysis",
        "Laboratory Testing",
        "Testing Science",
        "Scientific Research",
        "Academic Practice",
      ],
    },
    {
      category: "Interpersonal & Management",
      items: [
        "Cross-functional Teamwork",
        "Project Leadership (3–5 members)",
        "Technical Documentation",
        "Structured Problem Solving",
      ],
    },
  ],

  // ---------- 语言能力（level 会显示在语言标签旁）----------
  languages: [
    { name: "Cantonese", level: "Native" },
    { name: "Mandarin", level: "Native" },
    { name: "English", level: "Fluent" },
  ],

  // ---------- 页脚名言 ----------
  quote: {
    text: "The important thing is not to stop questioning.",
    author: "Albert Einstein",
  },

  // ---------- 证书（org 为颁发机构，date 为颁发时间）----------
  certifications: [
    { name: "Copilot in Outlook: Maximize Your Workday Efficiency", org: "LinkedIn", date: "Aug 2026" },
    { name: "Copilot in Teams: AI-Powered Collaboration (2024)", org: "LinkedIn", date: "Aug 2026" },
    { name: "Microsoft Copilot: The Art of Prompt Writing", org: "LinkedIn", date: "Aug 2026" },
    { name: "Learning Microsoft 365 Copilot for Work", org: "LinkedIn", date: "Aug 2026" },
    { name: "Prep, Plan, and Power Your 2026 Job Search", org: "LinkedIn", date: "Jul 2026" },
    { name: "Resume Rules for 2026 with Jenny Foss", org: "LinkedIn", date: "Jul 2026" },
    { name: "OpenAI Codex 101: From Idea to Deployed App", org: "LinkedIn", date: "Jul 2026" },
    { name: "Communication Foundations", org: "LinkedIn", date: "Jun 2026" },
    { name: "Expert Tips for Answering Common Interview Questions", org: "LinkedIn", date: "Jun 2026" },
    { name: "AI Case Studies in Different Business Industries", org: "LinkedIn", date: "Nov 2025" },
    { name: "Top Ten AI Prompts", org: "LinkedIn", date: "Oct 2025" },
    { name: "Writing Emails for Non-Native English Speakers", org: "LinkedIn", date: "Sep 2025" },
    { name: "AI 数据分析课：增强决策支持", org: "LinkedIn", date: "Sep 2025" },
    { name: "Career Essentials in Generative AI by Microsoft and LinkedIn", org: "Microsoft & LinkedIn", date: "Jun 2025" },
    { name: "Introduction to Artificial Intelligence", org: "LinkedIn", date: "Jun 2025" },
    { name: "Ethics in the Age of Generative AI", org: "LinkedIn", date: "May 2025" },
    { name: "Learning Microsoft 365 and Business Chat", org: "LinkedIn", date: "Mar 2025" },
    { name: "Generative AI: The Evolution of Thoughtful Online Search", org: "LinkedIn", date: "Mar 2025" },
    { name: "Streamlining Your Work with Microsoft Copilot", org: "LinkedIn", date: "Mar 2025" },
    { name: "What Is Generative AI?", org: "LinkedIn", date: "Feb 2025" },
    { name: "Build Your Generative AI Productivity Skills", org: "Microsoft & LinkedIn", date: "Jan 2025" },
    { name: "Copilot in PowerPoint: From Prompt to Presentation", org: "LinkedIn", date: "Jan 2025" },
    { name: "Generative AI Skills for Creative Content", org: "LinkedIn", date: "Dec 2024" },
    { name: "AI Productivity Hacks to Reimagine Your Workday", org: "LinkedIn", date: "Dec 2024" },
    { name: "Introduction to Prompt Engineering for Generative AI", org: "LinkedIn", date: "Dec 2024" },
  ],
};
