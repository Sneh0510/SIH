import { useClerk, useUser } from "@clerk/clerk-react"; 
import { Link } from "react-router-dom";

import { assets } from '@/assets/assets'

const AboutHero = () => {
  const { isSignedIn } = useUser(); 
  const { openSignIn } = useClerk(); 

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">We Are</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Internexus is built to simplify internship hunting. Our AI-powered
            recommendation system connects students with the right
            opportunities based on their skills, interests, and career goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            {/* Redesigned Contact Us Button */}
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src={assets.about_hero}
            alt="Who We Are"
            className="w-80 md:w-[26rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
