import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import { useThemeContext } from '../context/ThemeContext';
import { FaqSection } from '../components/Home/FaqSection';
import Testimonial from '../components/Home/Testimonial';
import GetStarted from '../components/Home/GetStarted';
import FeatureSection from '../components/Home/FeatureSection';

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <div className="px-2 sm:px-10 lg:px-28 md:px-14 min-h-screen bg-no-repeat bg-cover" style={{
      backgroundImage: `url(${theme === "dark" ? "/assets/dark-hero-gradient.svg" : "/assets/light-hero-gradient.svg"})`,
    }}>
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <FaqSection />
      <GetStarted />
    </div>
  )
}

export default Home
