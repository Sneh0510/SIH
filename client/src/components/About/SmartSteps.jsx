import { motion } from "framer-motion";

const SmartSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Log In",
      desc: "Create your account securely with Clerk and set up your profile in minutes.",
    },
    {
      number: "02",
      title: "Get Recommendations",
      desc: "Our AI matches you with internships that fit your skills, goals, and preferences.",
    },
    {
      number: "03",
      title: "Apply & Track",
      desc: "Submit applications with one click and keep track of your progress seamlessly.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Steps</span>
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          Getting started with Internexus is simple, smart, and tailored to you.
        </p>

        {/* Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
              }}
              className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Gradient Number */}
              <div className="absolute -top-6 left-6">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 opacity-20">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartSteps;
