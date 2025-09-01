import React from 'react'
import { featuresData } from '../../assets/assets'

const FeatureSection = () => {
    return (
        <div>
            <p className='text-center font-medium text-indigo-600 dark:text-indigo-400 mt-35 px-10 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 w-max mx-auto'>Features</p>
            <h3 className="text-3xl font-semibold text-center mx-auto mt-4">Built for Interns</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center mt-2 max-w-lg mx-auto">Get your relevant internship now</p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-4 px-6 md:px-16 lg:px-24 xl:px-32">
                {featuresData.map((feature, index) => (
                    <div key={index} className="px-6 py-4 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
                        <feature.icon className="text-purple-500 size-8 mt-4" strokeWidth={1.3} />
                        <h3 className="text-base font-medium">{feature.title}</h3>
                        <p className="text-slate-400 line-clamp-2">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection
