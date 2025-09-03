import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col items-center text-center justify-center mt-20 pb-40">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Join thousands of satisfied customers and transform your business today.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button onClick={() => navigate('/quizform')} className='flex items-center justify-center gap-2 rounded-full px-5 py-2 text-2xl font-semibold border-[2px] bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none hover:scale-125 transition-all duration-500'>
                        Get Started <img src={assets.star_group} alt="" width={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
