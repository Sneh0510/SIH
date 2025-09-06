import React from 'react';
import Marquee from "react-fast-marquee";
import { assets, companiesLogo } from '@/assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate('/quizform');
    } else {
      openSignIn({
        afterSignInUrl: "/quizform",
        afterSignUpUrl: "/quizform",
      });
    }
  };

  // Animation variants for the entire hero section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual text and button elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the floating user image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    float: {
      y: [0, -15, 0],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 min-h-screen flex flex-col justify-center text-white">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="0.2" d="M0,224L60,213.3C120,203,240,181,360,165.3C480,149,600,149,720,160C840,171,960,192,1080,197.3C1200,203,1320,192,1380,186.7L1440,181.3L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 lg:py-32 relative z-10"
        variants={heroVariants}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Side: Animated Text and CTA */}
          <div className="text-center md:text-left flex-1">
            {/* Community Banner */}
            <motion.div variants={itemVariants} className="w-fit mx-auto md:mx-0 mb-6 p-2 rounded-full border border-blue-400/30 bg-white/10 backdrop-blur-sm flex items-center gap-2">
              <div className="flex -space-x-3">
                <img className="size-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=64" alt="user1" />
                <img className="size-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=64" alt="user2" />
                <img className="size-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=64" alt="user3" />
              </div>
              <p className="text-sm font-light text-white/90">Join 1m+ founders and innovators</p>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight max-w-xl">
              Find the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                Right Internship
              </span>{" "}
              for you
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-white/80 max-w-lg mt-4">
              AI-powered recommendations based on your skills, interests, and education.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-8">
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 text-lg font-bold rounded-full bg-white text-blue-900 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Get Started
                <img src={assets.star_group} alt="stars" width={20} className="inline-block ml-2" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Animated Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={["show", "float"]}
            className="flex-1 flex justify-center mt-10 md:mt-0"
          >
            <img
              src={assets.user_image}
              alt="hero"
              className="w-full max-w-sm md:max-w-md lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Company logos and stats section */}
      <div className="bg-blue-950 py-4 relative z-10 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Stats Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-extrabold">10,000+</h3>
            <h5 className="text-sm text-white/70">openings daily</h5>
          </div>

          {/* Marquee Section */}
          <div className="flex-1 overflow-hidden">
            <Marquee gradient={false} speed={80}>
              <div className="flex items-center space-x-16">
                {[...companiesLogo, ...companiesLogo].map((company, index) => (
                  <img
                    key={index}
                    className="h-10 sm:h-12 opacity-80 hover:opacity-100 transition duration-300"
                    src={company.logo}
                    alt={company.name}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;