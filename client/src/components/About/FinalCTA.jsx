import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from '@/assets/assets'
import { useUser, useClerk } from "@clerk/clerk-react";

const FinalCTA = () => {
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

  return (
    <section className="relative py-20 md:py-28 bg-gray-100 overflow-hidden">
      {/* Glow background shapes */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center"
      >
        {/* Gradient Background for the Card */}
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-2xl">
          {/* Glass Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-10 md:p-14 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Shape Your Future?
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Students, explore AI-powered opportunities. Employers, find the right talent faster.
            </p>

            {/* Get Started Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleGetStarted}
                className="flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl font-bold bg-white text-black hover:scale-110 transition-all duration-500"
              >
                Get Started
                <img src={assets.star_group} alt="stars" width={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
