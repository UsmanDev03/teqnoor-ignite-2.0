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

// Mega dropdown content shown on hover (MiQ-style) — REPLACE LATER: placeholder images
export const NAV_DROPDOWNS: Record<
  string,
  { label: string; to: string; image: string; description: string }[]
> = {
  "About us": [
    {
      label: "Meet our people",
      to: "/about",
      image: "https://picsum.photos/seed/about1/480/320",
      description: "The engineers, designers and analysts behind every build.",
    },
    {
      label: "Our leaders",
      to: "/about",
      image: "https://picsum.photos/seed/about2/480/320",
      description: "Senior practitioners who stay close to the work.",
    },
    {
      label: "Where we work",
      to: "/about",
      image: "https://picsum.photos/seed/about3/480/320",
      description: "Four offices, one delivery culture across time zones.",
    },
  ],
  Solutions: [
    {
      label: "Web development",
      to: "/services",
      image: "https://picsum.photos/seed/sol1/480/320",
      description: "Fast, scalable platforms built on modern foundations.",
    },
    {
      label: "App development",
      to: "/services",
      image: "https://picsum.photos/seed/sol2/480/320",
      description: "Native and cross-platform apps people keep on screen one.",
    },
    {
      label: "Cloud solutions",
      to: "/services",
      image: "https://picsum.photos/seed/sol3/480/320",
      description: "Migrations, cloud native builds and cost engineering.",
    },
  ],
  Sigma: [
    {
      label: "Platform overview",
      to: "/portfolio",
      image: "https://picsum.photos/seed/sigma1/480/320",
      description: "One intelligence layer across your product and data.",
    },
    {
      label: "Case studies",
      to: "/portfolio",
      image: "https://picsum.photos/seed/sigma2/480/320",
      description: "Proof from retail, finance, health and logistics.",
    },
    {
      label: "How it works",
      to: "/portfolio",
      image: "https://picsum.photos/seed/sigma3/480/320",
      description: "Plan, build and optimise in a single workflow.",
    },
  ],
  "Life at Teqnoor": [
    {
      label: "Open roles",
      to: "/careers",
      image: "https://picsum.photos/seed/career1/480/320",
      description: "Engineering, design, cloud and data positions.",
    },
    {
      label: "Benefits",
      to: "/careers",
      image: "https://picsum.photos/seed/career2/480/320",
      description: "Flexible work, learning budget and real ownership.",
    },
    {
      label: "Our culture",
      to: "/careers",
      image: "https://picsum.photos/seed/career3/480/320",
      description: "Small teams, high trust, work you can point at.",
    },
  ],
  Resources: [
    {
      label: "Insights",
      to: "/insights",
      image: "https://picsum.photos/seed/res1/480/320",
      description: "Field notes from the people doing the work.",
    },
    {
      label: "Reports",
      to: "/insights",
      image: "https://picsum.photos/seed/res2/480/320",
      description: "Deep dives on tech, data and product trends.",
    },
    {
      label: "Guides",
      to: "/insights",
      image: "https://picsum.photos/seed/res3/480/320",
      description: "Practical playbooks you can use this quarter.",
    },
  ],
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
