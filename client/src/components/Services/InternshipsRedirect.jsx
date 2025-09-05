import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaChartLine, FaPalette, FaUsers, FaBullhorn, FaFlask } from "react-icons/fa";

const categories = [
  { icon: <FaLaptopCode className="text-purple-600 text-3xl" />, title: "Tech", desc: "Software, Web Dev, Data Science" },
  { icon: <FaChartLine className="text-blue-600 text-3xl" />, title: "Business", desc: "Management, Finance, Operations" },
  { icon: <FaPalette className="text-pink-500 text-3xl" />, title: "Design", desc: "UI/UX, Graphics, Product Design" },
  { icon: <FaUsers className="text-green-600 text-3xl" />, title: "HR", desc: "Recruitment, Talent Management" },
  { icon: <FaBullhorn className="text-orange-500 text-3xl" />, title: "Marketing", desc: "Digital, SEO, Social Media" },
  { icon: <FaFlask className="text-indigo-500 text-3xl" />, title: "Research", desc: "Science, Engineering, Labs" },
];

const InternshipsRedirect = () => {
return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Internships</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Discover opportunities across domains and industries. Choose what suits your career path.
            </p>

            {/* Categories Grid */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition hover:-translate-y-1 bg-gray-50"
                    >
                        <div className="flex justify-center">{cat.icon}</div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">{cat.title}</h3>
                        <p className="mt-2 text-gray-600">{cat.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
                <Link
                    to="/internships"
                    className="inline-block px-8 py-4 rounded-lg text-white font-semibold shadow-lg transition-transform duration-300 transform-gpu hover:scale-105 bg-gradient-to-r from-purple-600 to-blue-500"
                >
                    Browse Internships →
                </Link>
            </div>
        </div>
    </section>
);
};

export default InternshipsRedirect;