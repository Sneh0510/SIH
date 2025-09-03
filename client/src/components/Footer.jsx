import { Link } from "react-router-dom";
import { assets, navLinks } from "../assets/assets";
import { useThemeContext } from "../context/ThemeContext";

export default function Footer() {
    const { theme } = useThemeContext();
    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 w-full dark:text-slate-50 bg-blue-950 text-white pt-4 bottom-0">
            {/* <img className="absolute max-w-4xl w-full h-auto -mt-30 max-md:px-4 right-0 md:right-16 lg:right-24 xl:right-32 top-0 pointer-events-none" src={theme === "dark" ? "/assets/landing-text-dark.svg" : "/assets/landing-text-light.svg"} alt="landing" width={930} height={340} priority fetchPriority="high" /> */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <div className="md:max-w-114">
                    <img className="h-15 md:h-18 w-auto shrink-0" src={assets.logo_dark} alt="Logo" width={123} priority fetchPriority="high" />
                    <p className="mt-6 leading-6 font-extralight text-[15px]">
                        Discover internships tailored to your skills and career goals. Our intelligent platform helps you save time and land opportunities that matter.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-purple-600 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="space-y-2">
                            <p>+91 9825921720</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                Copyright 2024 © InternNexus. All Right Reserved.
            </p>
        </footer>
    );
};