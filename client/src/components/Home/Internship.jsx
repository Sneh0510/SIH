import React from 'react'
import { internships } from '../../assets/assets'
import InternshipCard from './InternshipCard'

const Internship = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-10 px-2 sm:px-6 md:px-12 lg:px-40">
            <h2 className="ml-3 text-3xl font-bold mb-6">Internships</h2>

            {/* Filters */}
            <div className="mb-7">
                <ul className="ml-3 flex overflow-x-auto gap-3 sm:flex-wrap  sm:overflow-visible scrollbar-hide">
                    {[
                        'Big Brands',
                        'Work from home',
                        'Part-time',
                        'MBA',
                        'Engineering',
                        'Media',
                        'Design',
                        'Data Science',
                    ].map((filter, idx) => (
                        <li
                            key={idx}
                            className="whitespace-nowrap text-sm sm:text-base text-black bg-white rounded-full px-4 py-[6px] hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 border border-gray-200 hover:shadow-md"
                        >
                            {filter}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Internship cards */}
            <div className="flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-1 lg:space-x-[1px] px-3 scrollbar-hide">
                {internships.map((internship, idx) => (
                    <div
                        key={idx}
                        className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[300px] flex-shrink-0"
                    >
                        <InternshipCard {...internship} />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Internship
