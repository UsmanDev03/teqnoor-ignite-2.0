# Teqnoor Ignite

COMPLETE TEQNOOR WEBSITE – NEXT.JS WITH COMPONENT-WISE STRUCTURE
Project Title:
Teqnoor Website Clone – Next.js with Component Architecture

Project Overview:
Create a complete, multi-page brand website for Teqnoor by precisely replicating the entire structure, layout, design elements, navigation, page architecture, animations, and interactive features of the MiQ (wearemiq.com) website.

Technology Stack:

Framework: Next.js (React)

Styling: Tailwind CSS (or CSS Modules)

Animations: Framer Motion / AOS / GSAP

Carousel: Swiper.js

Icons: Font Awesome / React Icons

Component Structure:

Har section ka alag component banana hai. Yeh raha component-wise breakdown:

📁 COMPONENT STRUCTURE (NEXT.JS)
text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky navbar with hamburger menu
│   │   ├── Footer.jsx          # Multi-column footer
│   │   └── Layout.jsx          # Wrapper component
│   │
│   ├── home/
│   │   ├── HeroSection.jsx     # Full-width hero with CTA
│   │   ├── StatsSection.jsx    # Stats with count-up animation
│   │   ├── ProductSection.jsx  # "Teqnoor IQ" product
│   │   ├── Testimonials.jsx    # Carousel slider
│   │   ├── ServicesSection.jsx # Grid of service cards
│   │   ├── ExpertsSection.jsx  # Team stats
│   │   └── AwardsSection.jsx   # Recognition logos
│   │
│   ├── about/
│   │   ├── AboutHero.jsx
│   │   ├── CompanyStory.jsx
│   │   ├── TeamSection.jsx     # Team member cards
│   │   ├── ValuesSection.jsx
│   │   └── LocationsSection.jsx
│   │
│   ├── services/
│   │   ├── ServicesHero.jsx
│   │   ├── ServiceGrid.jsx     # Service cards
│   │   └── ServiceCTA.jsx
│   │
│   ├── portfolio/
│   │   ├── PortfolioHero.jsx
│   │   ├── FilterBar.jsx       # Category filters
│   │   └── ProjectGrid.jsx     # Project cards
│   │
│   ├── insights/
│   │   ├── InsightsHero.jsx
│   │   ├── FeaturedArticle.jsx
│   │   └── BlogGrid.jsx        # Blog post cards
│   │
│   ├── careers/
│   │   ├── CareersHero.jsx
│   │   ├── CultureSection.jsx
│   │   ├── JobListings.jsx
│   │   └── BenefitsSection.jsx
│   │
│   ├── contact/
│   │   ├── ContactHero.jsx
│   │   ├── ContactForm.jsx
│   │   └── OfficeLocations.jsx
│   │
│   └── common/
│       ├── Button.jsx          # Reusable CTA button
│       ├── Card.jsx            # Reusable card component
│       ├── SectionTitle.jsx    # Section title + subtitle
│       └── CookieBanner.jsx    # Cookie consent banner
│
├── pages/
│   ├── index.jsx               # Homepage (assembles all home components)
│   ├── about.jsx               # About Us page
│   ├── services.jsx            # Services page
│   ├── portfolio.jsx           # Portfolio page
│   ├── insights.jsx            # Blog/Insights page
│   ├── careers.jsx             # Careers page
│   ├── contact.jsx             # Contact Us page
│   ├── privacy-policy.jsx      # Privacy Policy
│   ├── cookie-policy.jsx       # Cookie Policy
│   └── _app.jsx                # Global styles, providers
│
├── styles/
│   └── globals.css             # Global styles + Tailwind
│
├── public/
│   ├── images/                 # Dummy images (REPLACE LATER)
│   └── videos/                 # Dummy videos (REPLACE LATER)
│
└── utils/
    ├── constants.js            # Global data (colors, content)
    └── animations.js           # Animation variants
🔧 NEXT.JS SPECIFIC REQUIREMENTS
1. Framework Setup:
bash
# Use Next.js 13+ (App Router or Pages Router)
npx create-next-app@latest teqnoor-website
2. Dependencies to Install:
json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "latest",
    "framer-motion": "latest",
    "swiper": "latest",
    "react-icons": "latest",
    "aos": "latest"
  }
}
3. Styling:
Use Tailwind CSS for utility-first styling

OR use CSS Modules for component-scoped styles

Global styles in globals.css

4. Animations:
Framer Motion for page transitions and scroll animations

Swiper.js for carousels

AOS for scroll-triggered animations (alternative)

5. Data Management:
All content (text, stats, testimonials, services) in constants.js

Easy to update content later

6. Routing:
Pages: index.jsx, about.jsx, services.jsx, portfolio.jsx, insights.jsx, careers.jsx, contact.jsx, privacy-policy.jsx, cookie-policy.jsx

📄 PAGE STRUCTURE & COMPONENT MAPPING
🏠 HOMEPAGE (pages/index.jsx)
jsx
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ProductSection from '@/components/home/ProductSection';
import Testimonials from '@/components/home/Testimonials';
import ServicesSection from '@/components/home/ServicesSection';
import ExpertsSection from '@/components/home/ExpertsSection';
import AwardsSection from '@/components/home/AwardsSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProductSection />
      <Testimonials />
      <ServicesSection />
      <ExpertsSection />
      <AwardsSection />
    </Layout>
  );
}
📄 ABOUT US (pages/about.jsx)
jsx
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';
import LocationsSection from '@/components/about/LocationsSection';

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <ValuesSection />
      <LocationsSection />
    </Layout>
  );
}
💼 SERVICES (pages/services.jsx)
jsx
import Layout from '@/components/layout/Layout';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceGrid from '@/components/services/ServiceGrid';
import ServiceCTA from '@/components/services/ServiceCTA';

export default function Services() {
  return (
    <Layout>
      <ServicesHero />
      <ServiceGrid />
      <ServiceCTA />
    </Layout>
  );
}
📂 PORTFOLIO (pages/portfolio.jsx)
jsx
import Layout from '@/components/layout/Layout';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FilterBar from '@/components/portfolio/FilterBar';
import ProjectGrid from '@/components/portfolio/ProjectGrid';

export default function Portfolio() {
  return (
    <Layout>
      <PortfolioHero />
      <FilterBar />
      <ProjectGrid />
    </Layout>
  );
}
📝 INSIGHTS (pages/insights.jsx)
jsx
import Layout from '@/components/layout/Layout';
import InsightsHero from '@/components/insights/InsightsHero';
import FeaturedArticle from '@/components/insights/FeaturedArticle';
import BlogGrid from '@/components/insights/BlogGrid';

export default function Insights() {
  return (
    <Layout>
      <InsightsHero />
      <FeaturedArticle />
      <BlogGrid />
    </Layout>
  );
}
💼 CAREERS (pages/careers.jsx)
jsx
import Layout from '@/components/layout/Layout';
import CareersHero from '@/components/careers/CareersHero';
import CultureSection from '@/components/careers/CultureSection';
import JobListings from '@/components/careers/JobListings';
import BenefitsSection from '@/components/careers/BenefitsSection';

export default function Careers() {
  return (
    <Layout>
      <CareersHero />
      <CultureSection />
      <JobListings />
      <BenefitsSection />
    </Layout>
  );
}
📞 CONTACT (pages/contact.jsx)
jsx
import Layout from '@/components/layout/Layout';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import OfficeLocations from '@/components/contact/OfficeLocations';

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
    </Layout>
  );
}
🎨 DESIGN SPECIFICATIONS
Colors (Vibrant Teqnoor + IQ Mix):
Element	Color
Primary	Teqnoor's brand color (extract from teqnoor.com)
Secondary	Teqnoor's secondary color
Accent 1	#6C63FF (Vibrant Purple – IQ style)
Accent 2	#FF2D78 (Hot Pink – IQ style)
Accent 3	#00D2FF (Cyan – IQ style)
Accent 4	#FF6B35 (Coral Orange – IQ style)
Accent 5	#FFB800 (Golden Yellow – IQ style)
Gradients (IQ Style):
css
.gradient-blue-purple {
  background: linear-gradient(135deg, #0066FF, #6C63FF);
}
.gradient-pink-orange {
  background: linear-gradient(135deg, #FF2D78, #FF6B35);
}
.gradient-purple-pink {
  background: linear-gradient(135deg, #6C63FF, #FF2D78);
}
Typography:
Font: Inter or Poppins (Google Fonts)

Headings: Bold, large, vibrant colors

Body: Clean, readable

Media (Dummy/Placeholder):
jsx
// Use these placeholder services
<img src="https://picsum.photos/seed/teqnoor1/800/600" alt="REPLACE LATER" />
<video src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" controls />
✨ ANIMATIONS REQUIREMENT
Per Component Animations:
Component	Animation
HeroSection	Fade-in, typing effect (optional)
StatsSection	Count-up numbers
ProductSection	Fade-in on scroll
Testimonials	Auto-sliding carousel
ServicesSection	Staggered slide-up on scroll
ExpertsSection	Count-up numbers
TeamSection	Staggered fade-in
ProjectGrid	Staggered fade-in on scroll
BlogGrid	Staggered fade-in on scroll
Navbar	Sticky, color transition on scroll
Buttons	Hover scale + glow + gradient shift
Framer Motion Setup:
jsx
// In each component
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeIn}
>
  {/* Content */}
</motion.div>
📋 CONTENT (Teqnoor)
🏷️ Brand Name: Teqnoor
📝 Tagline:
"Your Technology & Innovation Partner"

📊 Stats (Placeholder – Replace Later):
jsx
const stats = [
  { number: 15, label: "Years of Excellence", color: "#0066FF" },
  { number: 500, label: "Projects Delivered", color: "#6C63FF" },
  { number: 200, label: "Happy Clients", color: "#FF2D78" },
  { number: 50, label: "Team Members", color: "#00D2FF" },
];
🛠️ Services:
jsx
const services = [
  { title: "Web Development", icon: "🌐", description: "...", color: "#0066FF" },
  { title: "App Development", icon: "📱", description: "...", color: "#6C63FF" },
  { title: "Digital Marketing", icon: "📈", description: "...", color: "#FF2D78" },
  { title: "IT Consulting", icon: "💡", description: "...", color: "#00D2FF" },
  { title: "UI/UX Design", icon: "🎨", description: "...", color: "#FF6B35" },
  { title: "Cloud Solutions", icon: "☁️", description: "...", color: "#FFB800" },
];
🗣️ Testimonials (Placeholder):
jsx
const testimonials = [
  { quote: "Teqnoor delivered exceptional value...", name: "John Doe", title: "CTO, ABC Corp" },
  // Add 4-5 more
];
👥 Team (Placeholder):
jsx
const team = [
  { name: "Jane Smith", title: "CEO & Founder", image: "https://picsum.photos/seed/team1/400/400" },
  // Add 6-8 members
];
💼 Projects (Placeholder):
jsx
const projects = [
  { title: "E-Commerce Platform", category: "Web Development", image: "https://picsum.photos/seed/project1/600/400" },
  // Add 6-8 projects
];
📝 Blog Posts (Placeholder):
jsx
const blogPosts = [
  { title: "The Future of Web Development", date: "Jan 15, 2025", excerpt: "...", image: "https://picsum.photos/seed/blog1/600/400" },
  // Add 6-8 posts
];
✅ COMPLETE CHECKLIST
Structure (100% Match)
□ Navbar (sticky, dropdowns, hamburger)
□ Homepage (all sections)
□ About Us
□ Services
□ Portfolio
□ Insights/Blog
□ Careers
□ Contact Us
□ Privacy Policy
□ Cookie Policy
□ Cookie Consent Banner
□ Footer
Components
□ Each section is a separate component
□ Reusable components (Button, Card, SectionTitle)
□ Components organized in folders
Colors (Vibrant Mix)
□ Teqnoor colors + IQ vibrant accents
□ Gradients on buttons, sections
□ Stats numbers in different colors
Animations (Framer Motion)
□ Fade-in on scroll
□ Staggered slide-up
□ Count-up numbers
□ Carousel
□ Hover effects
□ Sticky navbar
□ Smooth menu toggle
Media
□ All images from picsum.photos
□ All videos from sample-videos.com
□ "REPLACE LATER" comments
Next.js Specific
□ Pages router OR App router
□ Tailwind CSS setup
□ All dependencies installed
□ constants.js with all data
□ Responsive (desktop, tablet, mobile)
🎯 FINAL INSTRUCTION (Summary)
"MiQ ki poori website (wearemiq.com) ko visit karo aur har page ka structure analyze karo. Sirf Homepage ka 1 screenshot mere paas hai, baqi sab pages aap khud visit kar ke dekhen.

Next.js mein complete website banao – har section ka ALAG COMPONENT ho. Components folder mein organize karo.

Colors mein Teqnoor + IQ ka vibrant mix use karo. Animations ke liye Framer Motion use karo.

Abhi ke liye sab images/videos dummy/placeholder use karo (picsum.photos, sample-videos.com). Har jagah 'REPLACE LATER' comment lagao.

Har page ka content Teqnoor ke hisaab se likho. Final output ek complete, responsive Next.js website ho."

📎 ATTACHMENTS
□ 1 x Screenshot of MiQ Homepage (provided by me)
□ Teqnoor logo (if available)
⏱️ EXPECTED DELIVERY
Complete Next.js project with all components

All 9+ pages working

Responsive design

Animations included

Dummy media with "REPLACE LATER" comments

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/83c746bb-6400-4049-b8b5-b94bdd93c777).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
