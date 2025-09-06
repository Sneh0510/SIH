import React from 'react';
import { assets } from '../../assets/assets'; // Assuming assets.get_started_image is available
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const GetStarted = () => {

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

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3, // Delay image animation slightly
            },
        },
    };

    return (
        <div className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="relative flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-16 rounded-3xl text-center lg:text-left
                    bg-gradient-to-br from-indigo-500 to-purple-700 text-white shadow-2xl overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Content Section */}
                    <div className="relative z-10 lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Unlock Your Internship Journey
                        </h3>
                        <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto lg:mx-0 mb-8">
                            Join our platform, get smart recommendations, and land your dream internship today.
                        </p>
                        <button
                            onClick={handleGetStarted}
                            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xl font-bold
                            bg-white text-indigo-700 shadow-lg hover:bg-gray-100 transform hover:-translate-y-1
                            transition-all duration-300 ease-in-out group"
                        >
                            Get Started
                            <img src={assets.star_group} alt="stars" width={20} className="transform group-hover:rotate-12 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Image Section */}
                    <motion.div 
                        className="relative z-10 lg:w-1/2 flex justify-center lg:justify-end"
                        initial="hidden"
                        whileInView="visible"
                        variants={imageVariants}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {/* Replace with your actual image component or path */}
                        {assets.get_started_image ? (
                            <img 
                                src={assets.get_started_image} 
                                alt="Internship Success" 
                                className="max-w-[400px] md:max-w-md lg:max-w-full h-auto object-contain drop-shadow-2xl rounded-2xl hover:scale-105 duration-300 transition-all"
                                width={400}
                            />
                        ) : (
                            // Placeholder if the image asset is not yet defined
                            <div className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px] bg-indigo-400/20 rounded-xl flex items-center justify-center text-white text-lg font-medium">
                                Placeholder Image
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default GetStarted;