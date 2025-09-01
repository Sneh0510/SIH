import React from 'react'
import Marquee from "react-fast-marquee";
import { assets } from '@/assets/assets'
import { useThemeContext } from '../../context/ThemeContext';
import { companiesLogo } from '../../assets/assets';

const HeroSection = () => {
  const { theme } = useThemeContext();

  return (
    <div className='flex flex-col items-center justify-center gap-5 relative'>
      <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-50 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
        <div className="flex items-center -space-x-3">
          <img className="size-7 rounded-full" height={50} width={50}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="userImage1" />
          <img className="size-7 rounded-full" height={50} width={50}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="userImage2" />
          <img className="size-7 rounded-full" height={50} width={50}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
            alt="userImage3" />
        </div>
        <p className="text-xs">Join community of 1m+ founders </p>
      </div>

      <h1 className="mt-2 text-5xl/15 md:text-[64px]/19 font-semibold max-w-2xl text-center">
        Find the{" "}
        <span className="bg-gradient-to-r from-[#923FEF] to-[#C35DE8] bg-clip-text text-transparent">
          Right Internship
        </span>{" "}
        for you
      </h1>

      <p className="text-base dark:text-slate-300 max-w-lg mt-2 text-center">
        AI-powered recommendations based on your skills 💻, interests 💡, and education 🎓.
      </p>

      <div className="flex items-center gap-4 mt-8">
        <button className='flex items-center justify-center gap-2 rounded-full px-5 py-2 text-2xl font-semibold border-[2px] bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none hover:scale-125 transition-all duration-500'>
          Get Started <img src={assets.star_group} alt="" width={20} />
        </button>
      </div>


      <h3 className="text-base text-center text-slate-400 mt-5 pb-14 font-medium">
        Trusting by leading brands, including —
      </h3>

      <Marquee
        className="max-w-5xl mx-auto"
        gradient={true}
        speed={25}
        gradientColor={theme === "dark" ? "#000" : "#fff"}
      >
        <div className="flex items-center justify-center">
          {[...companiesLogo, ...companiesLogo].map((company, index) => (
            <img key={index} className="mx-11" src={company.logo} alt={company.name} width={100} height={100} />
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default HeroSection
