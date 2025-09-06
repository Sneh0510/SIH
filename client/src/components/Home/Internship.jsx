import React from 'react';
import { internships } from '../../assets/assets';
import InternshipCard from './InternshipCard';
import { motion } from 'framer-motion';

const Internship = () => {
    // Animation variants for the filters
    const filterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    // Animation variants for each individual filter button
    const filterItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    // Animation variants for the internship cards container
    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
            },
        },
    };
    
    // Animation variants for each individual internship card
    const cardItemVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-4 sm:px-6 md:px-12 lg:px-24 dark:from-slate-900 dark:to-slate-800">
            {/* Section Title */}
            <motion.h2 
                className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-slate-800 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Latest Internships
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                className="text-center md:text-left text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Explore a curated list of top internships and find the perfect role for you.
            </motion.p>

            {/* Filters with animation */}
            <motion.div
                className="mb-7"
                variants={filterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <ul className="flex overflow-x-auto gap-3 sm:flex-wrap sm:overflow-visible scrollbar-hide">
                    {[
                        'Big Brands', 'Work from home', 'Part-time', 'MBA', 'Engineering',
                        'Media', 'Design', 'Data Science', 'Marketing', 'Content Writing'
                    ].map((filter, idx) => (
                        <motion.li
                            key={idx}
                            className="whitespace-nowrap text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-700 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-300 border border-gray-200 dark:border-slate-600 hover:shadow-lg"
                            variants={filterItemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            {filter}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Internship cards with animation */}
            <motion.div
                className="flex overflow-x-auto space-x-6 px-3 scrollbar-hide mt-8"
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {internships.map((internship, idx) => (
                    <motion.div
                        key={idx}
                        className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] flex-shrink-0"
                        variants={cardItemVariants}
                    >
                        <InternshipCard {...internship} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Internship;