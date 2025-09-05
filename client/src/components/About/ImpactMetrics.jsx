import { motion } from "framer-motion";
import CountUp from "react-countup";

const ImpactMetrics = () => {
  const metrics = [
    { number: 10000, label: "Internships Listed", color: "from-purple-600 to-blue-500" },
    { number: 5000, label: "Students Placed", color: "from-blue-500 to-green-500" },
    { number: 200, label: "Partner Companies", color: "from-pink-500 to-purple-500" },
    { number: 98, label: "Satisfaction Rate (%)", color: "from-indigo-500 to-blue-500" },
  ];

return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Impact</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Discover how Internexus is making a difference in the world of internships.
            </p>

            {/* Stats Grid */}
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="relative rounded-2xl p-8 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition"
                    >
                        {/* Gradient border glow effect */}
                        <div
                            className={`absolute inset-0 rounded-2xl opacity-20 blur-lg bg-gradient-to-r ${metric.color}`}
                        ></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-extrabold text-gray-900">
                                <CountUp end={metric.number} duration={2} separator="," />
                                {metric.label.includes("%") && "%"}
                            </h3>
                            <p className="mt-2 text-gray-600 font-medium">{metric.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
};

export default ImpactMetrics;
