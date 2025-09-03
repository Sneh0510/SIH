import React from 'react'
import { MapPin, Calendar, IndianRupee } from "lucide-react";

const InternshipCard = ({ role, company, location, stipend, duration, activelyHiring, logo }) => {
    return (
        <div className="bg-white rounded-2xl p-5 w-[280px] h-[320px] flex flex-col justify-between hover:shadow-lg transition">

            <div className="flex flex-col gap-3">
                {activelyHiring && (
                    <span className="px-2 py-1 text-xs border rounded-md text-blue-600 border-blue-400 w-fit">
                        🚀 Actively hiring
                    </span>
                )}

                <h3 className="text-lg font-semibold">{role}</h3>
                <p className="text-gray-500 text-sm">{company}</p>

                {logo && (
                    <img src={logo} alt={company} className="h-10 w-10 object-contain" />
                )}

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} /> {location}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <IndianRupee size={16} /> {stipend}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} /> {duration}
                </div>
            </div>

            {/* Bottom section pinned */}
            <div className="flex justify-between items-center mt-3">
                <span className="px-2 py-1 text-xs bg-gray-100 rounded-md">Internship</span>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                    View details →
                </button>
            </div>
        </div>
    )
}

export default InternshipCard
