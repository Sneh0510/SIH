import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { assets } from "@/assets/assets";

const ResumeBuilderPromo = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              No resume? No problem.
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Let us help you create one or improve the one you’ve got — completely free.
            </p>

            {/* Feature list */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-purple-600" /> AI-powered resume builder
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" /> Smart feedback engine
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" /> Optimized for freshers
              </li>
            </ul>

            {/* CTA */}
            <Link
              to="/resume-builder"
              className="inline-block mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow hover:scale-105 transition"
            >
              Build My Resume →
            </Link>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex justify-center">
            <img
              src={assets.resume}
              alt="Resume Builder Illustration"
              className="w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilderPromo;
