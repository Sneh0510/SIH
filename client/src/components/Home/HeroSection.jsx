import React from 'react'
import Marquee from "react-fast-marquee";
import { assets, companiesLogo } from '@/assets/assets'
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react'

const HeroSection = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate('/quizform')
    } else {
      openSignIn({
        afterSignInUrl: "/quizform",
        afterSignUpUrl: "/quizform",
      });
    }
  }

  return (
    <div className="mt-[60px] lg:mt-[67px] sm:mt-[92px] md:mt-[79px]  bg-gradient-to-b from-blue-800 to-blue-600 pt-16 sm:pt-20 relative text-white overflow-hidden">

      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row items-center px-4 sm:px-10 md:px-14 lg:px-28 gap-10 md:gap-20">

        {/* Left Side */}
        <div className="text-center md:text-left flex-1">
          {/* Community Banner */}
          <div className="w-fit mx-auto md:mx-0 mb-4 px-4 flex items-center gap-2 p-1.5 rounded-full border border-slate-300 dark:border-slate-600 dark:bg-slate-600/20">
            <div className="flex items-center -space-x-3">
              <img className="size-7 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                alt="user1" />
              <img className="size-7 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                alt="user2" />
              <img className="size-7 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                alt="user3" />
            </div>
            <p className="text-xs sm:text-sm">Join community of 1m+ founders</p>
          </div>

          {/* Heading */}
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold leading-tight max-w-xl">
            Find the{" "}
            <span className="bg-yellow-300 bg-clip-text text-transparent">
              Right Internship
            </span>{" "}
            for you
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base dark:text-slate-300 max-w-lg mt-4">
            AI-powered recommendations based on your skills, interests, and education.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center md:justify-start gap-4 my-8">
            <button
              onClick={handleGetStarted}
              className="flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl font-bold bg-white text-black hover:scale-110 transition-all duration-500"
            >
              Get Started
              <img src={assets.star_group} alt="stars" width={18} />
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.user_image}
            alt="hero"
            className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[600px] object-contain"
          />
        </div>
      </div>

      {/* Company logos section */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-b from-blue-900 to-blue-950 py-2">
        {/* Stats Section */}
        <div className="flex flex-col items-center lg:items-start px-4 sm:px-10 md:px-14 lg:pl-28 mb-6 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl font-medium">10000+   </h3>
          <h5 className="text-sm sm:font-extralight font-extralight">openings daily</h5>
        </div>

        {/* Marquee Section */}
        <Marquee gradient={false} speed={80} className="w-full">
          <div className="flex items-center">
            {[...companiesLogo, ...companiesLogo].map((company, index) => (
              <img
                key={index}
                className="mx-8 sm:mx-12 opacity-80 hover:opacity-100 transition duration-300"
                src={company.logo}
                alt={company.name}
                width={80}
                height={80}
              />
            ))}
          </div>
        </Marquee>
      </div>


    </div>
  )
}

export default HeroSection
