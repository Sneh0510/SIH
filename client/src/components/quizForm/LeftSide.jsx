import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const LeftSide = () => {
    return (
        <div className="flex flex-col items-center text-center pt-12 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight max-w-3xl"
            >
                Let <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">AI</span> work for you
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            >
                Fill the details below to get your personalized internship recommendations now.
            </motion.p>
            <motion.img
                src={assets.ai}
                alt="AI-powered system illustration"
                width={330}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="mt-8 md:mt-8 w-full max-w-xs md:max-w-sm h-auto drop-shadow-xl"
            />
        </div>
    )
}

export default LeftSide
