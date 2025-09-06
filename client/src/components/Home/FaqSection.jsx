import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqsData } from "../../assets/assets";

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
    // Variants for the section's intro
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Variants for the FAQ list to stagger children
    const listVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    // Variants for each FAQ item
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Variants for the accordion content (the new, fixed part)
    const contentVariants = {
        hidden: { opacity: 0, scaleY: 0 },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: { opacity: 0, scaleY: 0, transition: { duration: 0.3, ease: "easeInOut" } }
    };

    return (
        <div className="py-20 bg-white dark:bg-slate-950">
            <div className="relative max-w-3xl mx-auto px-4 md:px-0 flex flex-col items-center">
                {/* Section Header */}
                <motion.p
                    className="text-center font-medium text-indigo-600 dark:text-indigo-400 px-6 py-2 rounded-full bg-indigo-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 w-max"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    FAQs
                </motion.p>
                <motion.h3 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white text-center mx-auto mt-4 mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Frequently asked questions
                </motion.h3>

                <motion.div 
                    className="w-full"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {faqsData.map((faq, index) => (
                        <motion.div 
                            className="border-b border-slate-200 dark:border-slate-800 py-6 cursor-pointer" 
                            key={index} 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            variants={itemVariants}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                                </motion.div>
                            </div>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="text-base text-slate-600 dark:text-slate-400 pt-4 pr-10 origin-top overflow-hidden"
                                        variants={contentVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};