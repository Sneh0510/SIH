import React from 'react';
import { featuresData } from '../../assets/assets';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  // Animation variants for the container to stagger the children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for each individual feature card
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className='py-20 lg:py-32 bg-slate-50 dark:bg-slate-900'>
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <motion.p 
          className='inline-block text-center font-medium text-indigo-600 dark:text-indigo-400 px-6 py-2 rounded-full bg-indigo-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.p>
        
        {/* Title */}
        <motion.h3 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mx-auto mt-4 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Built for the modern intern
        </motion.h3>
        
        {/* Subtitle */}
        <motion.p 
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 text-center mt-2 max-w-lg mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Discover how our platform empowers you with AI-driven tools to find the perfect internship.
        </motion.p>

        {/* Feature Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 px-6 md:px-16 lg:px-24 xl:px-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-8 rounded-2xl space-y-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-sm md:max-w-none transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl cursor-pointer"
              variants={itemVariants}
            >
              <div className="p-3 w-max rounded-xl bg-indigo-100 dark:bg-indigo-900/30">
                <feature.icon className="text-indigo-600 dark:text-indigo-400 size-10" strokeWidth={1.3} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default FeatureSection;