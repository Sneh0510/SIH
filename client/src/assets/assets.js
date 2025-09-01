import logo from './logo.png';
import choose from './choose.svg'
import star_group from './star_group.png'
import framer from "../assets/companies-logo/framer.svg";
import huawei from "../assets/companies-logo/huawei.svg";
import instagram from "../assets/companies-logo/instagram.svg";
import microsoft from "../assets/companies-logo/microsoft.svg";
import walmart from "../assets/companies-logo/walmart.svg";
import { Brain, Send, BadgeCheck, Smartphone } from "lucide-react";

export const companiesLogo = [
  { name: "Framer", logo: framer },
  { name: "Huawei", logo: huawei },
  { name: "Instagram", logo: instagram },
  { name: "Microsoft", logo: microsoft },
  { name: "Walmart", logo: walmart },
];

export const assets = {
    logo,
    choose,
    star_group
}

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
