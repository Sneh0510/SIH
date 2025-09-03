import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { assets } from "@/assets/assets";
import { IoSearchSharp } from "react-icons/io5";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import { MdOutlineQuestionMark } from "react-icons/md";

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const [selectedLang, setSelectedLang] = useState("Language ▾");
    const dropdownRef = useRef(null);
    const moreDropdownRef = useRef(null);
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenLang(false);
            }
            if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target)) {
                setOpenMore(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (lang) => {
        setSelectedLang(lang);
        setOpenLang(false);
    };

    return (
        <nav className="w-full fixed top-0 z-50 bg-white/80 shadow-md backdrop-blur overflow-x-hidden overflow-y-hidden">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-2 border-b border-gray-200">
                <div className="flex items-center justify-center">

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    >
                        {openMobileMenu ? <X size={26} /> : <Menu size={26} />}
                    </button>
                    {/* Logo */}
                    <Link to="/">
                        <img src={assets.logo} alt="Logo" className="w-24 sm:w-28 md:w-32" />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center justify-center gap-6 text-[15px] font-medium">
                    <Link
                        to="/"
                        className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-all duration-300"
                    >
                        Services
                    </Link>

                    {/* Language Dropdown */}
                    <div ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setOpenLang(!openLang)}
                            className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            {selectedLang}
                        </button>
                        {openLang && (
                            <div className="absolute bg-white border border-gray-300 rounded shadow-md mt-2 w-32 z-50">
                                <ul className="flex flex-col text-left">
                                    {["English", "Hindi", "Gujarati", "Marathi"].map((lang) => (
                                        <li
                                            key={lang}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleSelect(lang)}
                                        >
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* More Dropdown */}
                    <div ref={moreDropdownRef} className="relative">
                        <button
                            onClick={() => setOpenMore(!openMore)}
                            className="px-3 py-1 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            More ▾
                        </button>
                        {openMore && (
                            <div className="absolute bg-white border border-gray-300 rounded shadow-md mt-2 w-40 z-50">
                                <ul className="flex flex-col text-left">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link to="/careers">Careers</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Search Bar (hidden on mobile) */}
                <div className="hidden lg:block relative max-w-xs xl:max-w-sm w-full">
                    <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-gray-800"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative group inline-block">
                        <MdOutlineQuestionMark
                            onClick={() => navigate("/contact")}
                            className="rounded-full bg-gray-300 text-xl sm:text-2xl p-1 text-black cursor-pointer"
                        />
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                            Any query or want to ask question?
                        </span>
                    </div>
                    {user ? (
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: { width: "38px", height: "38px" },
                                },
                            }}
                        />
                    ) : (
                        <button
                            onClick={() => openSignIn()}
                            className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 hover:scale-105 transition-all duration-300"
                        >
                            Login/Signup
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {openMobileMenu && (
                <div className="md:hidden flex flex-col items-start px-6 py-4 gap-4 text-base font-medium bg-white border-t border-gray-300">
                    <Link to="/" onClick={() => setOpenMobileMenu(false)}>Home</Link>
                    <Link to="/about" onClick={() => setOpenMobileMenu(false)}>About</Link>
                    <Link to="/services" onClick={() => setOpenMobileMenu(false)}>Services</Link>
                    <button onClick={() => setOpenLang(!openLang)}>{selectedLang}</button>
                    <button onClick={() => setOpenMore(!openMore)}>More ▾</button>
                    {openMore && (
                        <div className="flex flex-col gap-2 pl-4">
                            <Link to="/blog" onClick={() => setOpenMobileMenu(false)}>Blog</Link>
                            <Link to="/careers" onClick={() => setOpenMobileMenu(false)}>Careers</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
