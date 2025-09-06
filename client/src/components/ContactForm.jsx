import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const ContactForm = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Animation variants for the left section
  const leftSectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }
  };

  // Animation variants for the right form
  const rightSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="mt-24 w-full min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white dark:bg-slate-800 shadow-2xl rounded-3xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Left Section (Contact Info and Image) */}
        <motion.div
          className="w-full md:w-1/3 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-slate-900 dark:to-slate-800 text-white p-6 sm:p-8 flex flex-col justify-between"
          variants={leftSectionVariants}
        >
          <div>
            <div className="mt-8 flex justify-center items-end">
              <img
                src={assets.contact_us}
                alt="Illustration of person sending message"
                className="w-full h-auto max-w-sm"
              />
            </div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-200 mb-6 text-sm sm:text-base">
              Complete the form to send us any query or feedback. Your opinion, suggestions, and feedback are highly appreciated.
            </p>
            <p className="font-semibold mb-2">
              Contact Number: +91 9825921720
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="font-semibold">Address -</span> LDRP-ITR, Sector 15, Gandhinagar, Gujarat
            </p>
          </div>

          <div className="mt-8 flex justify-center items-end">

          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          className="w-full md:w-2/3 p-6 sm:p-8 dark:text-gray-200"
          variants={rightSectionVariants}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Submit a Query</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* Input fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="First Name" className="mt-1 w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Last Name" className="mt-1 w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email <span className="text-red-500">*</span></label>
              <input type="email" placeholder="Email" className="mt-1 w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mobile <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="Mobile" className="mt-1 w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200" required />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <input type="text" placeholder="E.g., Internship related, Technical issue, etc." className="mt-1 w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200" />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Feedback/Query <span className="text-red-500">*</span></label>
              <textarea rows="4" required className="mt-1 w-full border border-gray-300 dark:border-slate-600 dark:bg-slate-700 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200" placeholder="Write your query here..." />
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;