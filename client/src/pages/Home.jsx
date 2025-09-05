import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import { FaqSection } from '../components/Home/FaqSection';
import Testimonial from '../components/Home/Testimonial';
import GetStarted from '../components/Home/GetStarted';
import FeatureSection from '../components/Home/FeatureSection';
import Internship from '../components/Home/Internship';

const Home = () => {

  return (
    <div className=" min-h-screen bg-no-repeat bg-cover bg-gradient-to-bl from-blue-50 to-white/80">
      <HeroSection />
      <FeatureSection />
      <Internship />
      <Testimonial />
      <FaqSection />
      <GetStarted />
    </div>
  )
}

export default Home

// px-2 sm:px-10 lg:px-28 md:px-14