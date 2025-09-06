import logo from './logo.png';
import logo_dark from './logo_dark.png';
import choose from './choose.svg'
import star_group from './star_group.png'
import framer from "./companies-logo/framer.svg";
import huawei from "./companies-logo/huawei.svg";
import instagram from "./companies-logo/instagram.svg";
import microsoft from "./companies-logo/microsoft.svg";
import walmart from "./companies-logo/walmart.svg";
import user_image from "./user_image.png";
import bg_ai from "./BG_AI.jpg"
import about_hero from "./about_hero.png"
import employer from "./employer.png";
import university from "./university.png";
import student from "./student.png";
import resume from "./resume.png"
import application_tracking from "./application_tracking.png"
import get_started_image from "./get_started_image.jpg";
import contact_us from "./contact_us.png"
import ai from "./ai.png"
import { Brain, Send, BadgeCheck, Smartphone,Users, Bell } from "lucide-react";

export const assets = {
  logo,
  logo_dark,
  choose,
  star_group,
  user_image,
  bg_ai,
  about_hero,
  employer,
  university,
  student,
  resume,
  application_tracking,
  get_started_image,
  contact_us,
  ai
}

export const companiesLogo = [
  { name: "Framer", logo: framer },
  { name: "Huawei", logo: huawei },
  { name: "Instagram", logo: instagram },
  { name: "Microsoft", logo: microsoft },
  { name: "Walmart", logo: walmart },
];

export const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Briar Martin',
      handle: '@neilstellar',
      quote: "Using this platform was a game-changer. I landed my dream internship in weeks!",
      date: 'April 20, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Avery Johnson',
      handle: '@averywrites',
      quote: "The AI matching is incredibly accurate. It saved me so much time sifting through irrelevant jobs.",
      date: 'May 10, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      handle: '@jordantalks',
      quote: "I love how easy it is to apply for multiple internships with just a few clicks.",
      date: 'June 5, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Alex Chen',
      handle: '@alex_dev',
      quote: "The real-time alerts were a lifesaver. I was able to apply to a new opening before anyone else.",
      date: 'June 25, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=200&auto=format&fit=crop&q=60',
        name: 'Samantha Ray',
        handle: '@samantharay',
        quote: "The peer community helped me get valuable insights and advice from others in my field. Highly recommended!",
        date: 'July 1, 2025'
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
        name: 'Chris Evans',
        handle: '@cevans_design',
        quote: "A must-have for any student looking for internships. The platform is sleek, modern, and very user-friendly.",
        date: 'July 15, 2025'
    },
];

export const faqsData = [
  {
    question: "What is this platform used for?",
    answer: "Our system helps students and job seekers find internships by recommending opportunities based on their skills, education, and interests.",
  },
  {
    question: "Do I need to pay to use this service?",
    answer: "No, the platform is completely free to use for students. You can explore and apply for internships without any charges.",
  },
  {
    question: "How does the recommendation system work?",
    answer: "We use a rule-based and ML-light model that analyzes your profile, skills, and preferences to suggest the most relevant internships.",
  },
  {
    question: "Can I apply to internships directly?",
    answer: "Yes! You can apply to internships directly from the platform with just one click, saving time and effort.",
  },
  {
    question: "Is my personal information safe?",
    answer: "Absolutely. We take your privacy seriously and ensure that your data is secure and only used for matching you with the best opportunities.",
  },
  {
    question: "Do you offer support if I face issues?",
    answer: "Yes, you can reach out to our support team via email or the help section. We also provide FAQs and guides to assist you along the way.",
  },
];


export const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Features",
        href: "/features",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
    {
        name: "Docs",
        href: "/docs",
    }
];

export const featuresData = [
  {
    icon: Brain,
    title: "Smart Recommendations",
    description: "Get personalized internship suggestions based on your skills, education, and interests.",
  },
  {
    icon: Send,
    title: "One-Click Apply",
    description: "Save time by applying to multiple internships directly from the platform.",
  },
  {
    icon: BadgeCheck,
    title: "Skill Matching",
    description: "Our system analyzes your profile to match you with the most relevant opportunities.",
  },
  {
    icon: Smartphone,
    title: "Accessible Anywhere",
    description: "Mobile-friendly design so you can explore internships anytime, anywhere.",
  },
  {
    icon: Users, // This icon needs to be imported, e.g., from 'lucide-react'
    title: "Connect with Peers",
    description: "Join our community to network with other interns and professionals in your field.",
  },
  {
    icon: Bell, // This icon also needs to be imported
    title: "Real-time Alerts",
    description: "Receive instant notifications for new job postings that match your preferences.",
  },
];

export const internships = [
  {
    role: "Product Operations",
    company: "Times Internet",
    location: "Gurgaon",
    stipend: "₹14,000 - 15,000 /month",
    duration: "6 Months",
    activelyHiring: true,
  },
  {
    role: "Warehouse",
    company: "Agarwal Packers & Movers",
    location: "Mumbai",
    stipend: "₹6,000 - 10,000 /month",
    duration: "6 Months",
    activelyHiring: true,
  },
  {
    role: "Video Editing/Making",
    company: "Viacom India LLP",
    location: "Gurgaon",
    stipend: "₹5,000 - 8,000 /month",
    duration: "3 Months",
    activelyHiring: false,
  },
  {
    role: "Human Resources (HR)",
    company: "Flipspaces",
    location: "Mumbai",
    stipend: "₹8,000 - 10,000 /month",
    duration: "3 Months",
    activelyHiring: true,
  },
  {
    role: "Software Development Intern",
    company: "Infosys",
    location: "Bengaluru",
    stipend: "₹18,000 - 20,000 /month",
    duration: "6 Months",
    activelyHiring: true,
  },
  {
    role: "Marketing Intern",
    company: "Zomato",
    location: "Delhi",
    stipend: "₹10,000 - 12,000 /month",
    duration: "3 Months",
    activelyHiring: true,
  },
];

export const steps = [
    "Education",
    "Skills",
    "Fields of Interest",
    "Availability",
];

// export const skillSuggestions = [
//     "React.js",
//     "Node.js",
//     "Python",
//     "Django",
//     "Machine Learning",
//     "Data Analysis",
//     "SQL",
//     "MongoDB",
//     "Java",
//     "C++",
//     "Communication",
//     "Problem Solving",
// ];

export const fieldSuggestions = [
    "Web Development",
    "Mobile Development",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Cloud Computing",
    "UI/UX Design",
    "Software Engineering",
];

export const educationSuggestions = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
];

export const sectorSuggestions = [
  { name: "Technology", icon: "💻" },
  { name: "Design", icon: "🎨" },
  { name: "Marketing", icon: "📈" },
  { name: "Healthcare", icon: "⚕️" },
  { name: "Finance", icon: "💰" },
  { name: "Social Impact", icon: "🤝" },
  { name: "Public Administration", icon: "🏛️" },
  { name: "Education", icon: "🏫" },
];

export const skillSuggestions = [
  "Python",
  "JavaScript",
  "Data Analysis",
  "UI/UX Design",
  "Content Writing",
  "Social Media Marketing",
  "Project Management",
  "Public Speaking",
  "Research",
];

export const motivationSuggestions = [
  "Learn New Skills",
  "Earn a Stipend",
  "Gain Experience",
  "Make a Social Impact",
  "Build a Network",
];