import React from 'react';
import { motion } from "framer-motion";
import { Sparkles, Target, Rocket } from 'lucide-react'; // Using Lucide React for modern icons

const MissionVision = () => {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section 
      className="bg-gray-50 dark:bg-slate-900 py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Mission & Vision</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At Internexus, we are redefining how students discover and apply for internships by combining innovation with opportunity.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div 
            className="p-8 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Target className="text-purple-600 dark:text-purple-400" size={24} /> Mission
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              To make internships accessible, personalized, and relevant for every student by
              leveraging AI-powered recommendations and verified opportunities.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            className="p-8 rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Rocket className="text-blue-500 dark:text-blue-400" size={24} /> Vision
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              To create a future where every graduate has meaningful work experience, bridging
              the gap between education and industry through smart technology.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default MissionVision;