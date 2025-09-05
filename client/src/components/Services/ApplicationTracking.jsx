import { Link } from "react-router-dom";
import { FaCheckCircle, FaRegBookmark, FaBell } from "react-icons/fa";
import {assets} from "@/assets/assets";

const ApplicationTracking = () => {
  return (
    <section className="bg-gray-50 py-20 md:py-28 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Illustration */}
          <div className="flex-1 flex justify-center">
            <img
              src={assets.application_tracking}
              alt="Application Tracking Dashboard"
              className="w-96 h-auto object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Track Every Step of Your Applications
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Stay on top of your internship journey with a simple dashboard that keeps you updated in real-time.
            </p>

            {/* Feature list */}
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-purple-600 text-xl" /> Real-time status updates (Applied → Interview → Selected)
              </li>
              <li className="flex items-center gap-2">
                <FaRegBookmark className="text-blue-600 text-xl" /> Save and manage your favorite internships
              </li>
              <li className="flex items-center gap-2">
                <FaBell className="text-green-600 text-xl" /> Get instant notifications on updates
              </li>
            </ul>

            {/* CTA */}
            <Link
              to="/tracking"
              className="inline-block mt-8 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow hover:scale-105 transition"
            >
              Track My Applications →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTracking;
