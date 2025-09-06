import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { cardsData } from "../../assets/assets";

const Testimonial = () => {

  const cardItemVariants = {
    whileHover: { y: -5, transition: { duration: 0.2 } }
  };

  return (
    <div className="py-20 bg-slate-100 dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.p 
          className='inline-block text-center font-medium text-indigo-600 dark:text-indigo-400 px-6 py-2 rounded-full bg-indigo-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.p>
        
        {/* Main Heading */}
        <motion.h3 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mx-auto mt-4 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          See what our community has to say
        </motion.h3>

        {/* Marquee Row 1 */}
        <Marquee 
          gradient={true} 
          gradientColor={["#f1f5f9", "#f1f5f9", "#f1f5f9"]} // White gradient for light mode
          gradientWidth={100} 
          speed={30}
          className="my-4"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl mx-4 shadow-lg w-72 shrink-0 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
              variants={cardItemVariants}
              whileHover="whileHover"
            >
              <div className="flex gap-3 items-center mb-4">
                <img className="size-12 rounded-full object-cover" src={card.image} alt={card.name} />
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1">
                    <p className="text-gray-900 dark:text-gray-100 font-semibold">{card.name}</p>
                    {/* Verified checkmark SVG */}
                    <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{card.handle}</span>
                </div>
              </div>
              <p className="text-sm py-4 text-gray-800 dark:text-gray-200">{card.quote}</p>
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mt-auto">
                <div className="flex items-center gap-1">
                  <span>Posted on</span>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-sky-500">
                    {/* X logo SVG */}
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
                <p>{card.date}</p>
              </div>
            </motion.div>
          ))}
        </Marquee>

        {/* Marquee Row 2 (reverse) */}
        <Marquee 
          gradient={true} 
          gradientColor={["#f1f5f9", "#f1f5f9", "#f1f5f9"]} // White gradient for light mode
          gradientWidth={100} 
          speed={30} 
          direction="right" 
          className="my-4"
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl mx-4 shadow-lg w-72 shrink-0 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
              variants={cardItemVariants}
              whileHover="whileHover"
            >
              <div className="flex gap-3 items-center mb-4">
                <img className="size-12 rounded-full object-cover" src={card.image} alt={card.name} />
                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1">
                    <p className="text-gray-900 dark:text-gray-100 font-semibold">{card.name}</p>
                    <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{card.handle}</span>
                </div>
              </div>
              <p className="text-sm py-4 text-gray-800 dark:text-gray-200">{card.quote}</p>
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mt-auto">
                <div className="flex items-center gap-1">
                  <span>Posted on</span>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-sky-500">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
                <p>{card.date}</p>
              </div>
            </motion.div>
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default Testimonial;