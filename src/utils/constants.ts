// Central content store for the Teqnoor site.
// REPLACE LATER: all copy, stats and media below are placeholders.

export const BRAND = {
  name: "Teqnoor",
  tagline: "Your Technology & Innovation Partner",
  email: "hello@teqnoor.com",
  phone: "+1 (555) 014-2200",
};

export const NAV_LINKS = [
  { label: "About us", to: "/about" },
  { label: "Solutions", to: "/services" },
  { label: "Sigma", to: "/portfolio" },
  { label: "Life at Teqnoor", to: "/careers" },
  { label: "Resources", to: "/insights" },
] as const;

// Mega dropdown content - Teqnoor + MiQ style
export const NAV_DROPDOWNS: Record<
  string,
  {
    image: string;
    links: { label: string; to: string; description?: string }[];
  }
> = {
  "About us": {
    image: "https://picsum.photos/seed/about-main/600/400",
    links: [
      {
        label: "Meet our people",
        to: "/about",
        description: "The engineers, data scientists and strategists behind every Teqnoor build. 200+ experts across 4 global offices.",
      },
      {
        label: "Our leadership",
        to: "/about/leaders",
        description: "Senior practitioners with 15+ years of experience. Leaders who ship code, design products and mentor teams.",
      },
      {
        label: "Where we work",
        to: "/about/locations",
        description: "Dubai, Karachi, London and New York. One delivery culture across time zones, turning complexity into clarity.",
      },
      {
        label: "Spark24",
        to: "/about/spark24",
        description: "Teqnoor's flagship 24-hour innovation event. Building, breaking and solving real challenges with clients and partners.",
      },
      {
        label: "Trust & values",
        to: "/about/trust",
        description: "Transparency, integrity and delivery. When you work with Teqnoor, you work with a partner who owns the outcome.",
      },
      {
        label: "Inclusion & ESG",
        to: "/about/inclusion",
        description: "Diversity drives our innovation. Committed to sustainable practices, ethical AI and building a better industry.",
      },
    ],
  },
  Solutions: {
    image: "https://picsum.photos/seed/solutions-main/600/400",
    links: [
      {
        label: "Web Development",
        to: "/services/web",
        description: "High-performance web platforms built on modern foundations. React, Next.js, TypeScript and edge-first architectures.",
      },
      {
        label: "App Development",
        to: "/services/app",
        description: "Native and cross-platform apps your customers keep on screen. iOS, Android and React Native with pixel-perfect design.",
      },
      {
        label: "Cloud Solutions",
        to: "/services/cloud",
        description: "Cloud native infrastructure, migrations and cost engineering. AWS, Azure and GCP experts who cut cloud bills by a third.",
      },
      {
        label: "Digital Marketing",
        to: "/services/marketing",
        description: "Full funnel programmatic campaigns driven by real data. Creative excellence meets performance marketing that scales.",
      },
      {
        label: "IT Consulting",
        to: "/services/consulting",
        description: "Strategy, architecture and delivery guidance from senior practitioners. Navigate complex technology decisions with confidence.",
      },
      {
        label: "UI/UX Design",
        to: "/services/design",
        description: "Research led product design that turns complexity into clarity. Beautiful, functional interfaces that make technology accessible.",
      },
    ],
  },
  Sigma: {
    image: "https://picsum.photos/seed/sigma-main/600/400",
    links: [
      {
        label: "Platform overview",
        to: "/portfolio",
        description: "Sigma is Teqnoor's AI-powered intelligence platform. One unified layer connecting your product, data and decision-making.",
      },
      {
        label: "Case studies",
        to: "/portfolio/case-studies",
        description: "How leading brands use Sigma to transform operations. Real results from retail, finance, healthcare and logistics.",
      },
      {
        label: "How it works",
        to: "/portfolio/how-it-works",
        description: "Plan, build and optimise in a single workflow. Predictive analytics, real-time insights and automated execution.",
      },
      {
        label: "Pricing",
        to: "/portfolio/pricing",
        description: "Flexible plans for startups to enterprises. Pay for what you use, scale when you grow. No hidden fees, no lock-in.",
      },
      {
        label: "Integrations",
        to: "/portfolio/integrations",
        description: "Connect Sigma with your CRM, analytics and business systems. One unified ecosystem that works with your existing tools.",
      },
    ],
  },
  "Life at Teqnoor": {
    image: "https://picsum.photos/seed/careers-main/600/400",
    links: [
      {
        label: "Open roles",
        to: "/careers",
        description: "Join 200+ Teqnoor engineers, designers and data scientists. Frontend, backend, cloud, AI and product roles across all offices.",
      },
      {
        label: "Benefits",
        to: "/careers/benefits",
        description: "Hybrid work, $2,000 learning budget, full health cover, paid sabbatical, home office setup and profit share.",
      },
      {
        label: "Our culture",
        to: "/careers/culture",
        description: "Small teams, high trust, work you can point at. Ship fast, learn faster. Great things happen when great people collaborate.",
      },
      {
        label: "Learning & growth",
        to: "/careers/learning",
        description: "Courses, conferences and mentorship programs. We invest in your growth so you stay at the forefront of your field.",
      },
    ],
  },
  Resources: {
    image: "https://picsum.photos/seed/resources-main/600/400",
    links: [
      {
        label: "Insights",
        to: "/insights",
        description: "Field notes from Teqnoor's engineers, designers and strategists. Real stories from real projects, no fluff.",
      },
      {
        label: "Reports",
        to: "/insights/reports",
        description: "Deep dives on technology, data and product trends. Research backed by 15+ years of Teqnoor experience.",
      },
      {
        label: "Guides",
        to: "/insights/guides",
        description: "Practical playbooks you can use this quarter. From cloud migrations to design systems, we share what works.",
      },
      {
        label: "Webinars",
        to: "/insights/webinars",
        description: "Live sessions featuring Teqnoor experts. Learn about AI, product development, cloud engineering and digital transformation.",
      },
      {
        label: "Podcasts",
        to: "/insights/podcasts",
        description: "Conversations with industry leaders and Teqnoor innovators. Big ideas and emerging trends shaping technology.",
      },
    ],
  },
};

export const REGIONS = ["Global", "EMEA", "APAC", "North America"] as const;

export const HERO_STATS = [
  { value: "15+", label: "Years" },
  { value: "500+", label: "Projects" },
  { value: "200+", label: "Clients" },
];

// REPLACE WITH REAL VIDEO LATER
export const HERO_VIDEO_URL =
  "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";
// REPLACE LATER: placeholder thumbnail
export const HERO_VIDEO_POSTER = "https://picsum.photos/seed/teqnoor-hero/960/640";

export const STATS = [
  { number: 15, suffix: "", label: "Years of excellence", tone: "brand-blue" },
  { number: 500, suffix: "+", label: "Projects delivered", tone: "brand-purple" },
  { number: 200, suffix: "+", label: "Happy clients", tone: "brand-pink" },
  { number: 50, suffix: "+", label: "Team members", tone: "brand-cyan" },
];

export const PRODUCT_STEPS = [
  { title: "PLAN", subtitle: "with Teqnoor IQ", image: "https://picsum.photos/seed/iq-plan/320/200" },
  {
    title: "BUILD",
    subtitle: "with Teqnoor IQ",
    image: "https://picsum.photos/seed/iq-build/320/200",
  },
  {
    title: "OPTIMIZE",
    subtitle: "with Teqnoor IQ",
    image: "https://picsum.photos/seed/iq-opt/320/200",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Teqnoor delivered exceptional value from day one. Their engineers embedded with our team and shipped faster than we thought possible.",
    name: "John Doe",
    title: "CTO, ABC Corp",
    company: "ABC Corp",
  },
  {
    quote:
      "We definitely recommend the Teqnoor IQ platform. It gave our product team clarity we simply did not have before.",
    name: "Amara Lewis",
    title: "Head of Product, Northwind",
    company: "Northwind",
  },
  {
    quote:
      "Working with Teqnoor was fantastic. Seeing both of our teams working as one made an outstanding result feel inevitable.",
    name: "Kumar Pathak",
    title: "Digital Lead, Finserv",
    company: "Finserv",
  },
  {
    quote:
      "A trusted partner for our tech and data roadmap. They activate ideas quickly and measure everything that matters.",
    name: "Elena Ruiz",
    title: "CMO, Mile Marker",
    company: "Mile Marker",
  },
  {
    quote:
      "The cloud migration was seamless and our infrastructure bill dropped by a third in the first quarter.",
    name: "Tom Becker",
    title: "VP Engineering, Wavemaker",
    company: "Wavemaker",
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    icon: "🌐",
    description: "High performance web platforms built on modern, scalable foundations.",
    gradient: "gradient-blue-purple",
  },
  {
    title: "App Development",
    icon: "📱",
    description: "Native and cross-platform apps your customers actually keep on screen one.",
    gradient: "gradient-purple-pink",
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    description: "Full funnel programmatic and performance campaigns driven by real data.",
    gradient: "gradient-pink-orange",
  },
  {
    title: "IT Consulting",
    icon: "💡",
    description: "Strategy, architecture and delivery guidance from senior practitioners.",
    gradient: "gradient-blue-purple",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    description: "Research led product design that turns complexity into clarity.",
    gradient: "gradient-warm",
  },
  {
    title: "Cloud Solutions",
    icon: "☁️",
    description: "Cloud native infrastructure, migrations and cost engineering that lasts.",
    gradient: "gradient-purple-pink",
  },
];

export const EXPERT_STATS = [
  { number: 127, suffix: "+", label: "Certified engineers" },
  { number: 212, suffix: "+", label: "Data & tech experts" },
  { number: 113, suffix: "+", label: "Client success specialists" },
];

export const AWARDS = [
  "Tech Excellence Awards",
  "Digital Innovation Europe",
  "Global Achievers",
  "Reed Awards",
  "Campaign Tech",
  "Top Women in Tech",
];

export const TEAM = [
  { name: "Jane Smith", title: "CEO & Founder", image: "https://picsum.photos/seed/team1/400/400" },
  { name: "Omar Haddad", title: "CTO", image: "https://picsum.photos/seed/team2/400/400" },
  {
    name: "Priya Nair",
    title: "VP Engineering",
    image: "https://picsum.photos/seed/team3/400/400",
  },
  {
    name: "Lucas Moretti",
    title: "Head of Design",
    image: "https://picsum.photos/seed/team4/400/400",
  },
  { name: "Sara Lindqvist", title: "Head of Data", image: "https://picsum.photos/seed/team5/400/400" },
  {
    name: "Daniel Okafor",
    title: "Director of Delivery",
    image: "https://picsum.photos/seed/team6/400/400",
  },
  {
    name: "Mei Chen",
    title: "Head of Cloud",
    image: "https://picsum.photos/seed/team7/400/400",
  },
  {
    name: "Ahmed Raza",
    title: "Client Partner",
    image: "https://picsum.photos/seed/team8/400/400",
  },
];

export const VALUES = [
  { title: "Curiosity first", description: "We ask better questions before we write a line of code." },
  { title: "Own the outcome", description: "We measure ourselves on the results our clients get." },
  { title: "Build in the open", description: "Transparent roadmaps, honest timelines, no surprises." },
  { title: "Craft matters", description: "Detail is not decoration — it is how trust is earned." },
];

export const LOCATIONS = [
  { city: "Dubai", country: "UAE", address: "Level 12, Innovation Tower, Business Bay" },
  { city: "Karachi", country: "Pakistan", address: "Ocean Business Park, Clifton" },
  { city: "London", country: "United Kingdom", address: "40 Featherstone Street, EC1Y" },
  { city: "New York", country: "USA", address: "228 Park Avenue South, NY 10003" },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Web Development",
  "App Development",
  "Cloud Solutions",
  "UI/UX Design",
];

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://picsum.photos/seed/project1/600/400",
  },
  {
    title: "Retail Loyalty App",
    category: "App Development",
    image: "https://picsum.photos/seed/project2/600/400",
  },
  {
    title: "Bank Data Lakehouse",
    category: "Cloud Solutions",
    image: "https://picsum.photos/seed/project3/600/400",
  },
  {
    title: "Logistics Control Tower",
    category: "Web Development",
    image: "https://picsum.photos/seed/project4/600/400",
  },
  {
    title: "Telehealth Design System",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/project5/600/400",
  },
  {
    title: "Fleet Tracking Mobile",
    category: "App Development",
    image: "https://picsum.photos/seed/project6/600/400",
  },
  {
    title: "Media Buying Console",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/project7/600/400",
  },
  {
    title: "Multi-region Migration",
    category: "Cloud Solutions",
    image: "https://picsum.photos/seed/project8/600/400",
  },
];

export const BLOG_POSTS = [
  {
    title: "The future of web development",
    date: "Jan 15, 2026",
    category: "Engineering",
    excerpt: "Edge rendering, typed RPC and the slow death of the monolithic frontend.",
    image: "https://picsum.photos/seed/blog1/600/400",
  },
  {
    title: "Designing for data density",
    date: "Feb 02, 2026",
    category: "Design",
    excerpt: "How to keep dashboards readable when every pixel is fighting for attention.",
    image: "https://picsum.photos/seed/blog2/600/400",
  },
  {
    title: "Cloud cost engineering in practice",
    date: "Feb 21, 2026",
    category: "Cloud",
    excerpt: "The five levers that cut our clients' infrastructure bills by a third.",
    image: "https://picsum.photos/seed/blog3/600/400",
  },
  {
    title: "AI copilots inside delivery teams",
    date: "Mar 08, 2026",
    category: "AI",
    excerpt: "What actually changed after a year of agents in our development workflow.",
    image: "https://picsum.photos/seed/blog4/600/400",
  },
  {
    title: "A pragmatic guide to design systems",
    date: "Mar 29, 2026",
    category: "Design",
    excerpt: "Start with tokens, not components. Everything else follows.",
    image: "https://picsum.photos/seed/blog5/600/400",
  },
  {
    title: "Measuring what marketing actually did",
    date: "Apr 14, 2026",
    category: "Data",
    excerpt: "Incrementality testing without a data science department.",
    image: "https://picsum.photos/seed/blog6/600/400",
  },
];

export const FEATURED_ARTICLE = {
  title: "The programmatic playbook for 2026",
  date: "Apr 30, 2026",
  category: "Report",
  excerpt:
    "A field guide to connected video, retail media and privacy-safe measurement — built from 500+ campaigns run across our client base.",
  image: "https://picsum.photos/seed/featured/1200/700",
};

export const JOBS = [
  { title: "Senior Frontend Engineer", location: "Dubai / Remote", type: "Full-time", team: "Engineering" },
  { title: "Cloud Platform Engineer", location: "London", type: "Full-time", team: "Cloud" },
  { title: "Product Designer", location: "Karachi", type: "Full-time", team: "Design" },
  { title: "Data Analyst", location: "New York", type: "Full-time", team: "Data" },
  { title: "Delivery Manager", location: "Remote", type: "Contract", team: "Delivery" },
  { title: "Marketing Executive", location: "Dubai", type: "Full-time", team: "Growth" },
];

export const BENEFITS = [
  { title: "Hybrid by default", description: "Work where you do your best thinking." },
  { title: "Learning budget", description: "$2,000 a year for courses, books and conferences." },
  { title: "Health cover", description: "Full family medical, dental and vision." },
  { title: "Paid sabbatical", description: "Four extra weeks after every four years." },
  { title: "Home office setup", description: "Everything you need on day one." },
  { title: "Profit share", description: "Everyone shares in what we build together." },
];