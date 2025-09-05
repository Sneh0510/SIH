import React from 'react'
import { FaUserGraduate, FaHandshake, FaLightbulb, FaGlobe, FaShieldAlt, FaBalanceScale } from "react-icons/fa";

const CoreValues = () => {
    const values = [
        {
            icon: <FaUserGraduate className="text-purple-600 text-3xl" />,
            title: "Student-First",
            desc: "We prioritize students’ needs and ensure every feature benefits their career journey.",
        },
        {
            icon: <FaHandshake className="text-blue-500 text-3xl" />,
            title: "Transparency",
            desc: "No hidden terms or spam — only clear, verified, and authentic opportunities.",
        },
        {
            icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
            title: "Innovation",
            desc: "We harness AI to deliver smarter internship matches and a seamless experience.",
        },
        {
            icon: <FaBalanceScale className="text-green-500 text-3xl" />,
            title: "Equal Opportunities",
            desc: "We believe every student deserves access to the same quality of opportunities.",
        },
        {
            icon: <FaShieldAlt className="text-red-500 text-3xl" />,
            title: "Privacy & Security",
            desc: "Your personal data stays safe, private, and in your control at all times.",
        },
        {
            icon: <FaGlobe className="text-indigo-500 text-3xl" />,
            title: "Global Reach",
            desc: "We aim to connect students and companies across borders and industries.",
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Core Values</span>
                </h2>
                <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                    The principles that guide everything we do at Internexus.
                </p>

                {/* Values Grid */}
                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition transform hover:scale-105 duration-300 text-center"
                        >
                            <div className="flex justify-center">{val.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold text-gray-900">{val.title}</h3>
                            <p className="mt-2 text-gray-600">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValues;
