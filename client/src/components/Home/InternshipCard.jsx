import React from 'react';
import { MapPin, Calendar, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";

const InternshipCard = ({ role, company, location, stipend, duration, activelyHiring, logo }) => {
    return (
        <motion.div
            className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 h-full flex flex-col justify-between border border-gray-200 dark:border-slate-700 cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }} // Shadow only on hover
            transition={{ duration: 0.3 }}
        >
            {/* Actively hiring badge */}
            {activelyHiring && (
                <div className="absolute top-4 right-4 z-10"> {/* Adjusted top and right for better positioning, added z-10 */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        🚀 Actively hiring
                    </span>
                </div>
            )}

            {/* Main content */}
            <div className="flex-grow flex flex-col justify-start">
                {/* Logo and company info */}
                {logo && (
                    <div className="mb-4 mt-2"> {/* Added mt-2 to push logo down slightly if badge is present */}
                        <img src={logo} alt={company} className="h-12 w-12 object-contain rounded-lg shadow-sm" />
                    </div>
                )}
                
                {/* Role and company name */}
                {/* Adjusted top margin to prevent overlap, especially when badge is present */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 mt-4">{role}</h3> 
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{company}</p>

                {/* Internship details */}
                <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="text-gray-400 dark:text-gray-500" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <IndianRupee size={16} className="text-gray-400 dark:text-gray-500" />
                        <span>{stipend}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="text-gray-400 dark:text-gray-500" />
                        <span>{duration}</span>
                    </div>
                </div>
            </div>

            {/* "View details" link */}
            <div className="mt-6">
                <a href="#" className="flex items-center justify-end text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                    View details
                    <span className="ml-1 text-base">→</span>
                </a>
            </div>
        </motion.div>
    );
}

export default InternshipCard;