import { Link } from "react-router-dom";
import { assets, navLinks } from "../assets/assets";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const socialLinks = [
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaFacebookF, href: "#", label: "Facebook" },
        { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
    ];

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    return (
        <motion.footer
            className="relative px-6 md:px-12 lg:px-24 w-full dark:text-slate-50 bg-slate-900 text-white pt-16"
            initial="hidden"
            whileInView="visible"
            variants={footerVariants}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 lg:gap-24 border-b border-gray-700 pb-12">
                {/* Brand and Description */}
                <div className="md:max-w-md">
                    <img className="h-18 w-auto shrink-0" src={assets.logo_dark} alt="InternNexus Logo" />
                    <p className="mt-6 leading-relaxed font-light text-base text-gray-300">
                        Discover internships tailored to your skills and career goals. Our intelligent platform helps you save time and land opportunities that matter.
                    </p>
                    <div className="flex gap-4 mt-6">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <social.icon size={22} />
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Links */}
                <div className="flex-1 flex flex-wrap gap-12 md:gap-20 justify-between md:justify-end">
                    {/* Company Links */}
                    <div>
                        <h2 className="font-semibold text-lg mb-4">Company</h2>
                        <ul className="space-y-3">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.href} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links (New Section) */}
                    <div>
                        <h2 className="font-semibold text-lg mb-4">Resources</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">FAQ</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">Guides</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="font-semibold text-lg mb-4">Get in touch</h2>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-300">+91 9825921720</p>
                            <a href="mailto:contact@example.com" className="text-sm text-gray-300 hover:text-purple-400 transition-colors duration-200">contact@example.com</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-6 text-sm font-light text-gray-500">
                <p className="text-center mb-2 md:mb-0">
                    &copy; 2025 InternNexus. All Rights Reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                </div>
            </div>
        </motion.footer>
    );
};