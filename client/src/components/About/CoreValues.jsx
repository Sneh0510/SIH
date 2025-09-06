import React from "react";
import { FaUserGraduate, FaHandshake, FaLightbulb, FaGlobe, FaShieldAlt, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

const CoreValues = () => {
    const values = [
        {
            icon: FaUserGraduate,
            title: "Student-First",
            desc: "We prioritize students’ needs and ensure every feature benefits their career journey.",
            iconClass: "text-purple-600 dark:text-purple-400",
        },
        {
            icon: FaHandshake,
            title: "Transparency",
            desc: "No hidden terms or spam — only clear, verified, and authentic opportunities.",
            iconClass: "text-blue-500 dark:text-blue-400",
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            desc: "We harness AI to deliver smarter internship matches and a seamless experience.",
            iconClass: "text-yellow-500 dark:text-yellow-400", // Corrected icon class
        },
        {
            icon: FaBalanceScale,
            title: "Equal Opportunities",
            desc: "We believe every student deserves access to the same quality of opportunities.",
            iconClass: "text-green-500 dark:text-green-400",
        },
        {
            icon: FaShieldAlt,
            title: "Privacy & Security",
            desc: "Your personal data stays safe, private, and in your control at all times.",
            iconClass: "text-red-500 dark:text-red-400", // Corrected icon class
        },
        {
            icon: FaGlobe,
            title: "Global Reach",
            desc: "We aim to connect students and companies across borders and industries.",
            iconClass: "text-indigo-500 dark:text-indigo-400",
        },
    ];

    // Animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section className="bg-white dark:bg-slate-900 py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                <motion.h2 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Core Values</span>
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    The principles that guide everything we do at Internexus.
                </motion.p>

                {/* Values Grid */}
                <motion.div 
                    className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {values.map((val, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-2xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex justify-center">
                                {React.createElement(val.icon, {
                                    className: `text-3xl ${val.iconClass}`
                                })}
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{val.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{val.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoreValues;