import React from 'react'
import AboutHero from '../components/About/AboutHero'
import MissionVision from '../components/About/MissionVision'
import CoreValues from '../components/About/CoreValues'
import SmartSteps from '../components/About/SmartSteps'
import ImpactMetrics from '../components/About/ImpactMetrics'
import FinalCTA from '../components/About/FinalCTA'

const About = () => {
  return (
    <div className='mt-10'>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <SmartSteps />
      <ImpactMetrics />
      <FinalCTA />
    </div>
  )
}

export default About
