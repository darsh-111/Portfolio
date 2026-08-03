export const profile = {
  name: "YOUSSEF ANWAR DARWISH",
  shortName: "Youssef",
  role: "Front-End Developer",
  tagline:
    "I build fast, modern and responsive web applications using React.js & Next.js — turning ideas into clean, pixel-perfect products that users love.",
  about:
    "I'm a front-end developer passionate about crafting beautiful and high-performance web experiences. I started with HTML, CSS and JavaScript, then leveled up to ES6+, React.js and Next.js. I love clean code, smooth animations, responsive layouts and the details that make a product feel professional. My focus is simple: deliver quality, on time, every time.",
  available: true,
  contact: {
    email: "yuosefdarwish@gmail.com",
    phone: "01026274589",
    phoneFull: "+201026274589",
    whatsapp: "201026274589",
    location: "Egypt",
    // To activate the real contact form, create a free form at https://formspree.io
    // and paste your endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
    // Leave empty ("") to keep the current behavior: the form opens the email app.
    formEndpoint: "",
  },
  cvUrl: "cv.pdf",
  socials: {
    github: "https://github.com/darsh-111",
    linkedin: "https://www.linkedin.com/in/yuossef-darwish-67aa4231b/",
  },
  info: [
    { label: "Name", value: "Youssef Anwar Darwish" },
    { label: "Email", value: "yuosefdarwish@gmail.com" },
    { label: "Phone", value: "+20 102 627 4589" },
    { label: "Location", value: "Egypt" },
    { label: "Availability", value: "Open to work" },
  ],
  skills: [
    { name: "HTML5", icon: "html", level: 95 },
    { name: "CSS3", icon: "css", level: 92 },
    { name: "JavaScript (ES6+)", icon: "js", level: 88 },
    { name: "React.js", icon: "react", level: 90 },
    { name: "Next.js", icon: "next", level: 82 },
    { name: "Responsive Design", icon: "responsive", level: 90 },
    { name: "Git & GitHub", icon: "git", level: 80 },
    { name: "REST APIs", icon: "api", level: 75 },
  ],
  services: [
    {
      title: "Responsive Websites",
      description:
        "Fast, SEO-friendly and pixel-perfect websites that look stunning on every screen — mobile, tablet and desktop.",
      icon: "globe",
    },
    {
      title: "Web Applications",
      description:
        "Modern interactive apps built with React and Next.js — reusable components, clean state management and smooth UX.",
      icon: "code",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Storefronts and online shops with a professional shopping experience — just like the Amazon-style store I built.",
      icon: "cart",
    },
  ],
  projects: [
    {
      title: "Social App",
      subtitle: "Social Media Application",
      description:
        "A full-featured social media application where users can create profiles, post updates and interact. Built with a component-driven React architecture, state management and a fully responsive UI.",
      stack: ["React", "JavaScript (ES6)", "CSS3"],
      live: "https://social-app-ashen-gamma.vercel.app",
      repo: "https://github.com/darsh-111/social-app",
      accent: "#6366f1",
      icon: "chat",
      image: "projects/social-app.jpeg",
    },
    {
      title: "ShopVerse",
      subtitle: "Amazon-style E-Commerce Website",
      description:
        "A complete e-commerce platform inspired by Amazon — product catalog, cart, checkout flow and a clean storefront experience. Built with Next.js for fast pages and great SEO.",
      stack: ["Next.js", "React", "CSS3"],
      live: "https://final-project-ybx5.vercel.app/",
      repo: "https://github.com/darsh-111/final_project",
      accent: "#8b5cf6",
      icon: "cart",
      image: "projects/shopverse.jpeg",
    },
  ],
};
