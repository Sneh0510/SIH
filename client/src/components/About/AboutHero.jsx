import { useClerk, useUser } from "@clerk/clerk-react"; 
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";


const AboutHero = () => {
  const { isSignedIn } = useUser(); 
  const { openSignIn } = useClerk(); 

  const handleExploreClick = () => {
    if (isSignedIn) {
      // If the user is signed in, navigate to internships
      window.location.href = "/internships";
    } else {
      // If the user is not signed in, open the sign-in page
      openSignIn({
        afterSignInUrl: "/internships",
        afterSignUpUrl: "/internships",
      });
    }
  };

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
            {/* Explore Internships Button */}
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-500 shadow hover:shadow-lg transition"
            >
              Explore Internships
            </button>
            {/* Contact Us Button */}
            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600 transition"
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
