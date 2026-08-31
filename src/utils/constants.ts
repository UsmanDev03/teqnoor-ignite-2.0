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

// Mega dropdown content - Cleaned & Focused (3-4 Key Items Per Section)
export const NAV_DROPDOWNS: Record<
  string,
  {
    image: string;
    links: { label: string; to: string; description?: string }[];
  }
> = {
  "About us": {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    links: [
      {
        label: "Meet our people",
        to: "/about",
        description: "The engineers, data scientists and strategists behind every Teqnoor build across global offices.",
      },
      {
        label: "Our leadership",
        to: "/about/leaders",
        description: "Senior practitioners with 15+ years of experience guiding innovation and execution.",
      },
      {
        label: "Where we work",
        to: "/about/locations",
        description: "Global delivery centers turning operational complexity into technological clarity.",
      },
      {
        label: "Trust & values",
        to: "/about/trust",
        description: "Transparency, integrity, and delivery excellence embedded in every project.",
      },
    ],
  },
  Solutions: {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    links: [
      {
        label: "Web Development",
        to: "/services/web",
        description: "High-performance web platforms built on modern React, Next.js, and edge architecture.",
      },
      {
        label: "App Development",
        to: "/services/app",
        description: "Native and cross-platform mobile apps for iOS and Android with pixel-perfect design.",
      },
      {
        label: "Cloud Solutions",
        to: "/services/cloud",
        description: "Cloud-native infrastructure, DevOps automation, and AWS/Azure/GCP cost optimization.",
      },
      {
        label: "UI/UX Design",
        to: "/services/design",
        description: "Research-led product design that turns complex requirements into intuitive user interfaces.",
      },
    ],
  },
  Sigma: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    links: [
      {
        label: "Platform overview",
        to: "/portfolio",
        description: "Sigma is Teqnoor's AI-powered intelligence platform connecting product and decision-making.",
      },
      {
        label: "Case studies",
        to: "/portfolio/case-studies",
        description: "Real-world transformation stories from industry leaders in finance, retail, and tech.",
      },
      {
        label: "Integrations",
        to: "/portfolio/integrations",
        description: "Seamlessly connect Sigma with your existing CRM, analytics, and enterprise tech stack.",
      },
    ],
  },
  "Life at Teqnoor": {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    links: [
      {
        label: "Open roles",
        to: "/careers",
        description: "Join our global engineering, design, and product teams building the future.",
      },
      {
        label: "Benefits & Perks",
        to: "/careers/benefits",
        description: "Hybrid flexibility, learning stipends, health cover, and home office setups.",
      },
      {
        label: "Our culture",
        to: "/careers/culture",
        description: "Small autonomous teams, high trust, rapid learning, and meaningful work.",
      },
    ],
  },
  Resources: {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    links: [
      {
        label: "Insights & Articles",
        to: "/insights",
        description: "Practical field notes from engineering leaders and product designers.",
      },
      {
        label: "Industry Reports",
        to: "/insights/reports",
        description: "Data-backed research and deep dives on digital transformation trends.",
      },
      {
        label: "Guides & Playbooks",
        to: "/insights/guides",
        description: "Step-by-step technical execution guides from cloud engineering to design systems.",
      },
    ],
  },
};

export const REGIONS = ["Global", "EMEA", "APAC", "North America"] as const;

export const HERO_STATS = [
  { value: "1,096", label: "B2B leads generated for JK Foods across 11 campaigns" },
  { value: "£6.43", label: "Average cost per lead on those campaigns" },
  { value: "1.61M", label: "Search impressions earned for one client" },
  { value: "5 Years", label: "Winning clients for UK B2B brands" },
];
export const HERO_VIDEO_URL =
  "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";
export const HERO_VIDEO_POSTER = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=960&h=640&fit=crop";

export const STATS = [
  { number: 1096, suffix: "", label: "B2B leads generated" },
  { number: 6.43, suffix: "", label: "Average cost per lead (£)" },
  { number: 1.61, suffix: "M", label: "Search impressions" },
  { number: 5, suffix: " Years", label: "Winning UK B2B clients" },
];

export const PRODUCT_STEPS = [
  {
    title: "PLAN WITH TEQNOOR IQ",
    subtitle: "Strategy & 90-Day Roadmap",
    description: "We map your buyers, your competitors and the searches worth winning, then agree a 90-day plan before any work starts.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=320&h=200&fit=crop",
  },
  {
    title: "BUILD WITH TEQNOOR IQ",
    subtitle: "High-Performance Execution",
    description: "We design and build the pages, apps and cloud setup, made to load fast and turn visitors into enquiries.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=320&h=200&fit=crop",
  },
  {
    title: "GROW WITH TEQNOOR IQ",
    subtitle: "Tracking & Optimization",
    description: "We track every lead and every rank, put more behind what works, and report it in plain English each month.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=200&fit=crop",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Teqnoor delivered exceptional value from day one. Their engineers embedded with our team and shipped faster than we thought possible.",
    name: "John Doe",
    title: "CTO, ABC Corp",
    company: "ABC Corp",
  },
  {
    quote: "We definitely recommend the Teqnoor IQ platform. It gave our product team clarity we simply did not have before.",
    name: "Amara Lewis",
    title: "Head of Product, Northwind",
    company: "Northwind",
  },
  {
    quote: "Working with Teqnoor was fantastic. Seeing both of our teams working as one made an outstanding result feel inevitable.",
    name: "Kumar Pathak",
    title: "Digital Lead, Finserv",
    company: "Finserv",
  },
  {
    quote: "A trusted partner for our tech and data roadmap. They activate ideas quickly and measure everything that matters.",
    name: "Elena Ruiz",
    title: "CMO, Mile Marker",
    company: "Mile Marker",
  },
  {
    quote: "The cloud migration was seamless and our infrastructure bill dropped by a third in the first quarter.",
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
  { name: "Jane Smith", title: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Omar Haddad", title: "CTO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Priya Nair", title: "VP Engineering", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Lucas Moretti", title: "Head of Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sara Lindqvist", title: "Head of Data", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop" },
  { name: "Daniel Okafor", title: "Director of Delivery", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
  { name: "Mei Chen", title: "Head of Cloud", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop" },
  { name: "Ahmed Raza", title: "Client Partner", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
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
  { title: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
  { title: "Retail Loyalty App", category: "App Development", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" },
  { title: "Bank Data Lakehouse", category: "Cloud Solutions", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" },
  { title: "Logistics Control Tower", category: "Web Development", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" },
  { title: "Telehealth Design System", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" },
  { title: "Fleet Tracking Mobile", category: "App Development", image: "https://images.unsplash.com/photo-1535268647677-3002f5e7c1d0?w=600&h=400&fit=crop" },
  { title: "Media Buying Console", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" },
  { title: "Multi-region Migration", category: "Cloud Solutions", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop" },
];

export const BLOG_POSTS = [
  { title: "The future of web development", date: "Jan 15, 2026", category: "Engineering", excerpt: "Edge rendering, typed RPC and the slow death of the monolithic frontend.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop" },
  { title: "Designing for data density", date: "Feb 02, 2026", category: "Design", excerpt: "How to keep dashboards readable when every pixel is fighting for attention.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop" },
  { title: "Cloud cost engineering in practice", date: "Feb 21, 2026", category: "Cloud", excerpt: "The five levers that cut our clients' infrastructure bills by a third.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" },
  { title: "AI copilots inside delivery teams", date: "Mar 08, 2026", category: "AI", excerpt: "What actually changed after a year of agents in our development workflow.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop" },
  { title: "A pragmatic guide to design systems", date: "Mar 29, 2026", category: "Design", excerpt: "Start with tokens, not components. Everything else follows.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" },
  { title: "Measuring what marketing actually did", date: "Apr 14, 2026", category: "Data", excerpt: "Incrementality testing without a data science department.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
];

export const FEATURED_ARTICLE = {
  title: "The programmatic playbook for 2026",
  date: "Apr 30, 2026",
  category: "Report",
  excerpt: "A field guide to connected video, retail media and privacy-safe measurement — built from 500+ campaigns run across our client base.",
  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=700&fit=crop",
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