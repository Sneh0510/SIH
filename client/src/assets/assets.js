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
import bg_ai from "./BG_AI.png"
import about_hero from "./about_hero.png"
import employer from "./employer.png";
import university from "./university.png";
import student from "./student.png";
import resume from "./resume.png"
import application_tracking from "./application_tracking.png"
import { Brain, Send, BadgeCheck, Smartphone } from "lucide-react";


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
      date: 'April 20, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Avery Johnson',
      handle: '@averywrites',
      date: 'May 10, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      handle: '@jordantalks',
      date: 'June 5, 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Avery Johnson',
      handle: '@averywrites',
      date: 'May 10, 2025'
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
  {
    role: "Graphic Designer",
    company: "Byju's",
    location: "Bengaluru",
    stipend: "₹6,000 - 8,000 /month",
    duration: "2 Months",
    activelyHiring: false,
  },
  {
    role: "Data Analyst Intern",
    company: "Paytm",
    location: "Noida",
    stipend: "₹15,000 - 18,000 /month",
    duration: "5 Months",
    activelyHiring: true,
  },
  {
    role: "Sales Intern",
    company: "Urban Company",
    location: "Gurgaon",
    stipend: "₹8,000 - 10,000 /month",
    duration: "3 Months",
    activelyHiring: true,
  },
  {
    role: "Content Writing Intern",
    company: "YourStory",
    location: "Bengaluru",
    stipend: "₹5,000 - 7,000 /month",
    duration: "2 Months",
    activelyHiring: false,
  },
  {
    role: "Operations Intern",
    company: "Swiggy",
    location: "Hyderabad",
    stipend: "₹12,000 - 14,000 /month",
    duration: "4 Months",
    activelyHiring: true,
  },
  {
    role: "UI/UX Designer",
    company: "OYO Rooms",
    location: "Gurgaon",
    stipend: "₹10,000 - 12,000 /month",
    duration: "3 Months",
    activelyHiring: true,
  },
  {
    role: "Customer Support",
    company: "Meesho",
    location: "Bengaluru",
    stipend: "₹7,000 - 9,000 /month",
    duration: "3 Months",
    activelyHiring: false,
  },
  {
    role: "Business Development Intern",
    company: "Unacademy",
    location: "Pune",
    stipend: "₹9,000 - 11,000 /month",
    duration: "3 Months",
    activelyHiring: true,
  },
  {
    role: "Finance Intern",
    company: "HDFC Bank",
    location: "Mumbai",
    stipend: "₹14,000 - 16,000 /month",
    duration: "6 Months",
    activelyHiring: true,
  },
  {
    role: "Digital Marketing Intern",
    company: "Nykaa",
    location: "Delhi",
    stipend: "₹10,000 - 13,000 /month",
    duration: "4 Months",
    activelyHiring: true,
  },
];

export const steps = [
    "Education",
    "Skills",
    "Fields of Interest",
    "Availability",
];

export const skillSuggestions = [
    "React.js",
    "Node.js",
    "Python",
    "Django",
    "Machine Learning",
    "Data Analysis",
    "SQL",
    "MongoDB",
    "Java",
    "C++",
    "Communication",
    "Problem Solving",
];

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