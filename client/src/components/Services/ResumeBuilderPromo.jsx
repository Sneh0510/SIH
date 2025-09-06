import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const ResumeBuilderPromo = () => {
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
    <section className="bg-gray-50 dark:bg-slate-900 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl border border-gray-200 dark:border-slate-700 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              No resume? No problem.
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl">
              Let us help you create one or improve the one you’ve got — completely free.
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={containerVariants} className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <motion.li variants={itemVariants} className="flex items-center gap-2">
                <FaCheckCircle className="text-purple-600 dark:text-purple-400" /> AI-powered resume builder
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600 dark:text-blue-400" /> Smart feedback engine
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600 dark:text-green-400" /> Optimized for freshers
              </motion.li>
            </motion.ul>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Link
                to="/resume-builder"
                className="inline-block mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md transform hover:-translate-y-1 transition duration-300"
              >
                Build My Resume →
              </Link>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex justify-center">
            <motion.img
              src={assets.resume}
              alt="Resume Builder Illustration"
              className="w-full max-w-[320px] h-auto object-contain drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeBuilderPromo;