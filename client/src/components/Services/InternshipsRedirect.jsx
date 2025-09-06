import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaChartLine, FaPalette, FaUsers, FaBullhorn, FaFlask } from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
    { 
      icon: FaLaptopCode, 
      title: "Tech", 
      desc: "Software, Web Dev, Data Science", 
      iconClass: "text-purple-600 dark:text-purple-400" 
    },
    { 
      icon: FaChartLine, 
      title: "Business", 
      desc: "Management, Finance, Operations", 
      iconClass: "text-blue-600 dark:text-blue-400" 
    },
    { 
      icon: FaPalette, 
      title: "Design", 
      desc: "UI/UX, Graphics, Product Design", 
      iconClass: "text-pink-500 dark:text-pink-400" 
    },
    { 
      icon: FaUsers, 
      title: "HR", 
      desc: "Recruitment, Talent Management", 
      iconClass: "text-green-600 dark:text-green-400" 
    },
    { 
      icon: FaBullhorn, 
      title: "Marketing", 
      desc: "Digital, SEO, Social Media", 
      iconClass: "text-orange-500 dark:text-orange-400" 
    },
    { 
      icon: FaFlask, 
      title: "Research", 
      desc: "Science, Engineering, Labs", 
      iconClass: "text-indigo-500 dark:text-indigo-400" 
    },
];

const InternshipsRedirect = () => {
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
        <motion.section
            className="bg-white dark:bg-slate-900 py-20 md:py-28 border-t border-gray-200 dark:border-slate-800"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
                {/* Heading */}
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Internships</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Discover opportunities across domains and industries. Choose what suits your career path.
                </motion.p>

                {/* Categories Grid */}
                <motion.div variants={containerVariants} className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            className="p-8 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-slate-800 hover:-translate-y-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex justify-center">
                                {React.createElement(cat.icon, {
                                    className: `text-3xl ${cat.iconClass}` // Use the pre-defined iconClass
                                })}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{cat.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{cat.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={itemVariants} className="mt-12">
                    <Link
                        to="/internships"
                        className="inline-block px-8 py-4 rounded-lg text-white font-semibold shadow-lg transition-all duration-300 transform-gpu hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-500"
                    >
                        Browse Internships →
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default InternshipsRedirect;