import { motion } from "framer-motion";
import { FaUserPlus, FaRobot, FaPaperPlane, FaBriefcase } from "react-icons/fa";

const SmartMatching = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-purple-600 text-3xl" />,
      title: "Sign Up",
      desc: "Create your free account in minutes using Clerk’s secure login system.",
    },
    {
      icon: <FaRobot className="text-blue-500 text-3xl" />,
      title: "AI Recommendations",
      desc: "Get personalized internship matches powered by our smart AI engine.",
    },
    {
      icon: <FaPaperPlane className="text-indigo-500 text-3xl" />,
      title: "Apply",
      desc: "Send applications with just one click and impress recruiters easily.",
    },
    {
      icon: <FaBriefcase className="text-green-500 text-3xl" />,
      title: "Get Hired",
      desc: "Track progress and land internships that help build your career path.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Smart{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Matching Process
          </span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A simple, streamlined journey from sign-up to landing your dream internship.
        </p>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Connector line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 hidden md:block"></div>

          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200">
                  {step.icon}
                </div>
                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartMatching;
