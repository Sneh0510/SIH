import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { assets } from '@/assets/assets'
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <nav className={`flex flex-col items-center shadow-md fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${openMobileMenu ? '' : 'backdrop-blur'}`}>
            <div className='flex items-center justify-evenly gap-80 border-b pb-2 border-gray-500'>
                <Link to='/' className='right-0'>
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
                <div className='font-semibold flex items-center justify-center gap-3'>
                    <ThemeToggle />
                    <button className='bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white px-5 py-2 hover:scale-105 transition-all duration-300'>Login/Signup</button>
                </div>
            </div>
            <div className='mt-2'>
                <div className='text-xl'>
                    <li className='flex items-center justify-center gap-6 font-semibold'>
                        <ul><Link to='/' className='border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300'>Home</Link></ul>
                        <ul><Link to='/about' className='border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300'>About</Link></ul>
                        <ul><Link to='/how-it-works' className='border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300'>How it works</Link></ul>
                        <div className="relative group border-none rounded-lg px-3 py-[5px] border-gray-400 hover:bg-purple-500 transition-all duration-300">
                            <button className="cursor-pointer">Language ▾</button>
                            <div className="absolute hidden group-hover:block bg-white border rounded shadow-md mt-2 w-32">
                                <ul className="flex flex-col text-left">
                                    <li className="px-4 py-2 cursor-pointer">English</li>
                                    <li className="px-4 py-2 cursor-pointer">Hindi</li>
                                    <li className="px-4 py-2 cursor-pointer">Gujarati</li>
                                    <li className="px-4 py-2 cursor-pointer">Marathi</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
