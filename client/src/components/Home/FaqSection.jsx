import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqsData } from "../../assets/assets";

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
    return (
        <div className="relative max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 mt-30">
            <p className="text-center font-medium text-indigo-600 dark:text-indigo-400 mt-28 px-10 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 w-max mx-auto">FAQ's</p>
            <h3 className="text-3xl font-semibold text-center mx-auto mt-4">Frequently asked questions</h3>
            <div className="mt-8">
                {faqsData.map((faq, index) => (
                    <div className="border-b border-slate-300 dark:border-purple-900 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-base font-medium">
                                {faq.question}
                            </h3>
                            <ChevronDown size={18} className={`${openIndex === index && "rotate-180"} transition-all duration-500 ease-in-out`} />
                        </div>
                        <p className={`text-sm text-slate-600 dark:text-slate-300 transition-all duration-500 ease-in-out max-w-xl ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};