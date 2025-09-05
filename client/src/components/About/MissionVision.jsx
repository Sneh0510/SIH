import React from 'react'

const MissionVision = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Mission & Vision</span>
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          At Internexus, we are redefining how students discover and apply for internships by combining innovation with opportunity.
        </p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              🎯 Mission
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To make internships accessible, personalized, and relevant for every student by
              leveraging AI-powered recommendations and verified opportunities.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition transform hover:scale-105 duration-300">
            <h3 className="text-xl font-semibold text-gray-900">
              🚀 Vision
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To create a future where every graduate has meaningful work experience, bridging
              the gap between education and industry through smart technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
