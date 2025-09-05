import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ServicesHero = () => {
  const [audience, setAudience] = useState("employer");
  const navigate = useNavigate();
  const { isSignedIn } = useUser(); // Check if the user is signed in
  const { openSignIn } = useClerk(); // Clerk's sign-in function

  const handleGetStarted = () => {
    if (isSignedIn) {
      // If the user is signed in, navigate to the quiz form
      navigate("/quizform");
    } else {
      // If the user is not signed in, open the sign-in modal
      openSignIn({
        afterSignInUrl: "/quizform", // Redirect after signing in
        afterSignUpUrl: "/quizform", // Redirect after signing up
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
    <section className="bg-white py-20 md:py-28 border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          {/* Audience toggle */}
          <div className="inline-flex rounded-full border border-gray-300 bg-gray-100 p-1 mb-6">
            {["employer", "university", "student"].map((type) => (
              <button
                key={type}
                onClick={() => setAudience(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  audience === type
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Animated text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                {content[audience].title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                  Internexus
                </span>
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl mx-auto md:mx-0">
                {content[audience].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={handleGetStarted}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow hover:scale-105 transition"
            >
              Get Started Free
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={audience + "-img"}
              src={content[audience].image.src}
              alt={content[audience].image.alt}
              className="max-h-74 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
