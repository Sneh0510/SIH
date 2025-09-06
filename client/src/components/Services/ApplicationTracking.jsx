import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaRegBookmark, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const ApplicationTracking = () => {
    // Animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const textItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };
    
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, x: -20 },
        visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="bg-gray-50 dark:bg-slate-900 py-20 md:py-28 border-t border-gray-200 dark:border-slate-800">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-slate-700 p-10 md:p-16 flex flex-col-reverse md:flex-row items-center gap-12">
                    
                    {/* Left Illustration */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <img
                            src={assets.application_tracking}
                            alt="Application Tracking Dashboard"
                            className="w-full max-w-lg h-auto object-contain drop-shadow-lg"
                        />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div 
                        className="flex-1 text-center md:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <motion.h2 variants={textItemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Track Every Step of Your Applications
                        </motion.h2>
                        <motion.p variants={textItemVariants} className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
                            Stay on top of your internship journey with a simple dashboard that keeps you updated in real-time.
                        </motion.p>

                        {/* Feature list */}
                        <motion.ul variants={containerVariants} className="mt-6 space-y-4 text-gray-700 dark:text-gray-300">
                            <motion.li variants={textItemVariants} className="flex items-center gap-2">
                                <FaCheckCircle className="text-purple-600 dark:text-purple-400 text-xl" /> Real-time status updates (Applied → Interview → Selected)
                            </motion.li>
                            <motion.li variants={textItemVariants} className="flex items-center gap-2">
                                <FaRegBookmark className="text-blue-600 dark:text-blue-400 text-xl" /> Save and manage your favorite internships
                            </motion.li>
                            <motion.li variants={textItemVariants} className="flex items-center gap-2">
                                <FaBell className="text-green-600 dark:text-green-400 text-xl" /> Get instant notifications on updates
                            </motion.li>
                        </motion.ul>

                        {/* CTA */}
                        <motion.div variants={textItemVariants}>
                            <Link
                                to="/tracking"
                                className="inline-block mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md transform hover:-translate-y-1 transition duration-300"
                            >
                                Track My Applications →
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ApplicationTracking;