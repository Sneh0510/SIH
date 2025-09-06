import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const ServicesHero = () => {
  const [audience, setAudience] = useState("employer");
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate("/quizform");
    } else {
      openSignIn({
        afterSignInUrl: "/quizform",
        afterSignUpUrl: "/quizform",
      });
    }
  };

  const content = {
    employer: {
      title: "Hire Smarter, Faster",
      subtitle:
        "Internexus helps employers source vetted interns with AI-driven matching, saving time and effort.",
      image: { src: assets.employer, alt: "Employer Illustration" },
    },
    university: {
      title: "Empower Your Students",
      subtitle:
        "Partner with Internexus to connect your students with top internships and industry exposure.",
      image: { src: assets.university, alt: "University Illustration" },
    },
    student: {
      title: "Shape Your Future",
      subtitle:
        "Find internships tailored to your skills and goals, and start building your career with confidence.",
      image: { src: assets.student, alt: "Student Illustration" },
    },
  };

  return (
    <section className="bg-gray-50 dark:bg-slate-900 py-20 md:py-28 border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12 text-gray-900 dark:text-gray-200">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          {/* Audience toggle with animated background */}
          <div className="relative inline-flex rounded-full border-2 border-gray-200 dark:border-slate-700 p-1 mb-8">
            {["employer", "university", "student"].map((type) => (
              <motion.button
                key={type}
                onClick={() => setAudience(type)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                  audience === type
                    ? "text-white dark:text-gray-900"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {audience === type && (
                  <motion.span
                    layoutId="audience-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-md"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-20">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Animated text and content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {content[audience].title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  Internexus
                </span>
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                {content[audience].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <motion.button
              onClick={handleGetStarted}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md transform hover:-translate-y-1 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
            <motion.button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-full border-2 border-gray-300 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={audience + "-img"}
              src={content[audience].image.src}
              alt={content[audience].image.alt}
              className="max-h-80 w-auto mx-auto drop-shadow-xl"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;