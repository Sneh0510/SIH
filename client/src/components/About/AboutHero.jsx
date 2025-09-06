import { useClerk, useUser } from "@clerk/clerk-react"; 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from '@/assets/assets'

const AboutHero = () => {
  const { isSignedIn } = useUser(); 
  const { openSignIn } = useClerk(); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-white dark:bg-slate-900 py-20 md:py-28 border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12 text-gray-900 dark:text-gray-200">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">We Are</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-xl"
          >
            Internexus is built to simplify internship hunting. Our AI-powered
            recommendation system connects students with the right
            opportunities based on their skills, interests, and career goals.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div 
          className="flex-1 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={assets.about_hero}
            alt="Who We Are Illustration"
            className="w-full max-w-lg h-auto object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;