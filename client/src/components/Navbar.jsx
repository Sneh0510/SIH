import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { assets } from '@/assets/assets'
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const [selectedLang, setSelectedLang] = useState("Language ▾");
    const dropdownRef = useRef(null);
    const moreDropdownRef = useRef(null);

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
        <nav
            className={`flex flex-col items-center shadow-md fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${openMobileMenu ? '' : 'backdrop-blur'
                }`}
        >
            {/* Top Navbar */}
            <div className="flex items-center justify-evenly gap-80 border-b pb-2 border-gray-500">
                <Link to="/" className="right-0">
                    <img src={assets.logo} alt="" width={80} />
                </Link>
                <div className="relative w-80">
                    <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="font-semibold flex items-center justify-center gap-3">
                    <ThemeToggle />
                    <button className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white px-5 py-2 hover:scale-105 transition-all duration-300">
                        Login/Signup
                    </button>
                </div>
            </div>

            {/* Bottom Menu */}
            <div className="mt-2">
                <div className="text-xl">
                    <li className="flex items-center justify-center gap-6 font-semibold">
                        <ul>
                            <Link
                                to="/"
                                className="border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300"
                            >
                                Home
                            </Link>
                        </ul>
                        <ul>
                            <Link
                                to="/about"
                                className="border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300"
                            >
                                About
                            </Link>
                        </ul>
                        
                        <ul>
                            <Link
                                to="/services"
                                className="border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300"
                            >
                                Services
                            </Link>
                        </ul>
                        

                        {/* Language Dropdown */}
                        <div ref={dropdownRef} className="relative">
                            <button
                                onClick={() => setOpenLang(!openLang)}
                                className="cursor-pointer border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300"
                            >
                                {selectedLang}
                            </button>
                            {openLang && (
                                <div className="absolute bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-md mt-2 w-32">
                                    <ul className="flex flex-col text-left">
                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                            onClick={() => handleSelect("English")}
                                        >
                                            English
                                        </li>
                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                            onClick={() => handleSelect("Hindi")}
                                        >
                                            Hindi
                                        </li>
                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                            onClick={() => handleSelect("Gujarati")}
                                        >
                                            Gujarati
                                        </li>
                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                            onClick={() => handleSelect("Marathi")}
                                        >
                                            Marathi
                                        </li>
                                        
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* More Dropdown */}
                        <div ref={moreDropdownRef} className="relative">
                            <button
                                onClick={() => setOpenMore(!openMore)}
                                className="cursor-pointer border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300"
                            >
                                More ▾
                            </button>
                            {openMore && (
                                <div className="absolute bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded shadow-md mt-2 w-40">
                                    <ul className="flex flex-col text-left">

                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                        >
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                        >
                                            <Link to="/careers">Careers</Link>
                                        </li>
                                        <li
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                        >
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
