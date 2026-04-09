const projectsData = [
  {
    id: 1,
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    subtitle:
      "An AI-powered resume evaluation platform built to improve ATS compatibility, keyword optimization, and professional resume quality.",
    description:
      "A professional AI tool that evaluates resumes using the Claude API, providing real-time feedback on ATS compatibility, keyword density, and formatting.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
    category: "AI Product",
    year: "2026",
    duration: "2 Weeks",
    role: "Full Stack Developer",
    live: "https://www.talenthireai.vercel.app",
    github: "https://www.github.com/archit1207",
    featured: true,

    tech: ["React", "TypeScript", "Vite", "Claude API", "Tailwind", "Vercel"],

    overview:
      "Talent Hire AI was built to help job seekers understand why resumes get rejected. By leveraging the Claude API, it provides structured feedback on scoring and keyword insights, ensuring resumes are ATS-ready through client-side PDF processing.",

    challenge:
      "The main challenge was turning technical resume analysis into a simple, user-friendly experience. The output had to feel intelligent and useful without overwhelming the user with raw data or complex scoring logic.",

    solution:
      "I implemented a premium dashboard experience with clean visual hierarchy, integrating real-time feedback loops and structured scoring sections that make AI insights immediately actionable for the user.",

    features: [
      "AI-powered resume scoring",
      "ATS compatibility insights",
      "Keyword density feedback",
      "Client-side PDF processing",
      "Formatting quality review",
      "Responsive UI with Tailwind CSS",
      "High-performance Vercel deployment",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?q=80&w=1600&auto=format&fit=crop",
    ],

    metrics: [
      { label: "Build Time", value: "2 Weeks" },
      { label: "Core Stack", value: "React + Claude" },
      { label: "Focus", value: "AI + Career Tech" },
    ],
  },

  {
    id: 2,
    slug: "saas-ai-tools-platform",
    title: "SaaS AI Tools Platform",
    subtitle:
      "A modern AI SaaS ecosystem for content generation, image tools, and community-driven creative workflows.",
    description:
      "A comprehensive AI dashboard for content and image generation, featuring secure Clerk authentication, a community gallery, and scalable middleware.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    category: "Full Stack SaaS",
    year: "2026",
    duration: "3 Weeks",
    role: "Full Stack Developer",
    live: "#",
    github: "https://www.github.com/archit1207",
    featured: true,

    tech: ["React", "Node.js", "PostgreSQL", "Clerk", "Tailwind", "Express"],

    overview:
      "This platform serves as a scalable hub for AI-powered creative tools. It features a complete user dashboard for content generation, secure session management via Clerk, and a public gallery for user engagement.",

    challenge:
      "Balancing multiple tool workflows (text vs. image generation) while maintaining a high-performance backend architecture capable of handling secure middleware and error-prone AI API calls.",

    solution:
      "I designed a modular dashboard-first structure using PostgreSQL for robust data handling and Clerk for enterprise-grade authentication, ensuring user access control remains simple yet secure.",

    features: [
      "AI content & image generation",
      "Secure Clerk authentication",
      "Public community gallery",
      "Middleware-protected user sessions",
      "Scalable PostgreSQL database architecture",
      "Comprehensive backend error handling",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    ],

    metrics: [
      { label: "Build Time", value: "3 Weeks" },
      { label: "Core Stack", value: "Node + Postgres" },
      { label: "Focus", value: "SaaS Architecture" },
    ],
  },

  {
    id: 3,
    slug: "master-edge-elearning",
    title: "Master Edge E-Learning",
    subtitle:
      "A full-featured EdTech platform with course access, secure payments, and role-based dashboard experiences.",
    description:
      "A complete EdTech platform with role-based access control, Razorpay payment integration, and a student/admin dashboard for seamless course management.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    category: "EdTech Platform",
    year: "2025",
    duration: "3 Weeks",
    role: "MERN Stack Developer",
    live: "https://www.masteredge.vercel.app",
    github: "https://www.github.com/archit1207",
    featured: true,

    tech: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "JWT"],

    overview:
      "Master Edge is a professional e-learning solution featuring secure content delivery and role-based access. I implemented JWT authentication and Razorpay integration to facilitate a complete student-to-course lifecycle.",

    challenge:
      "Managing complex user roles and ensuring that high-value lecture content remains secure and accessible only to authorized, paid users.",

    solution:
      "The solution was a role-based dashboard system using JWT for secure authorization and Razorpay for reliable transaction handling, all wrapped in a responsive MERN-based interface.",

    features: [
      "JWT-based role-based access control",
      "Secure student/admin dashboards",
      "Razorpay payment gateway integration",
      "High-security lecture content delivery",
      "Course management and tracking",
      "Scalable MERN stack architecture",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
    ],

    metrics: [
      { label: "Build Time", value: "3 Weeks" },
      { label: "Core Stack", value: "MERN + Razorpay" },
      { label: "Focus", value: "EdTech + UX" },
    ],
  },

  {
    id: 4,
    slug: "restaurant-management-api",
    title: "Restaurant Management API",
    subtitle:
      "A backend-first API system built for secure food ordering workflows and scalable restaurant operations.",
    description:
      "A robust RESTful backend system designed for high-concurrency food service operations, featuring secure order workflows and optimized MongoDB schemas.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    category: "Backend System",
    year: "2025",
    duration: "1 Week",
    role: "Backend Developer",
    live: "https://restaurant-food-apis.onrender.com",
    github: "https://www.github.com/archit1207",
    featured: false,

    tech: ["Node.js", "Express.js", "MongoDB", "Postman", "REST API", "Auth"],

    overview:
      "Developed as a scalable restaurant management core, this API handles restaurants, menus, categories, and orders. I focused on building optimized MongoDB schemas and implementing secure authorization for order management.",

    challenge:
      "Designing a clean, RESTful architecture that could handle multi-role authorization and complex menu relationships without compromising API performance.",

    solution:
      "I utilized Postman for rigorous endpoint validation and optimized the MongoDB schema for high-efficiency data handling, ensuring the backend is maintainable and scalable.",

    features: [
      "RESTful API system design",
      "Multi-role authentication & authorization",
      "Optimized MongoDB data schemas",
      "Secure order & menu management",
      "Extensive Postman testing & validation",
      "Deployed on Render for reliability",
    ],

    gallery: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop",
    ],

    metrics: [
      { label: "Build Time", value: "1 Week" },
      { label: "Core Stack", value: "Node + MongoDB" },
      { label: "Focus", value: "API Architecture" },
    ],
  },
];

export default projectsData;