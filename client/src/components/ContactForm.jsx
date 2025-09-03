import React from "react";
import { assets } from "../assets/assets";

const ContactForm = () => {
  return (
    <div className="mt-23 w-full min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">

        {/* Left Section */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-indigo-50 to-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Complete the form to send us any query or feedback on the website.
              Your opinion, suggestions, and feedback will be very much appreciated.
            </p>
            <p className="font-semibold text-indigo-600 mb-2">
              Contact Number: XXXXXXXXXX
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-semibold">Address -</span> LDRP-ITR, sector 15,
              Gandhinagar, Gujarat
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <img src={assets.logo} alt="contact" className="w-32 sm:w-40 md:w-48" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Submit Query</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Mobile"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
                required
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State <span className="text-red-500">*</span>
              </label>
              <select
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
                required
              >
                <option value="" disabled selected>
                  Select your state
                </option>
                <option>Arunachal Pradesh</option>
                <option>Delhi</option>
                <option>Gujarat</option>
                <option>Maharashtra</option>
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
              >
                <option value="" disabled selected>
                  Select your District
                </option>
                <option>District 1</option>
                <option>District 2</option>
              </select>
            </div>

            {/* Feedback/Query */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Feedback/Query <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows="4"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
                placeholder="Write your query here..."
              />
            </div>

            {/* Comments */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Comments/Suggestion
              </label>
              <textarea
                rows="4"
                placeholder="Message"
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:ring-1 focus:ring-gray-800 outline-none"
              />
            </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-orange-400 text-white font-semibold px-6 sm:px-8 py-2 rounded-full hover:bg-orange-500 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
