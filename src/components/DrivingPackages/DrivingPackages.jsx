"use client";

import { motion } from "framer-motion";

const packages = [
  {
    title: "Beginner Package",
    price: "$199",
    description: "Basic driving lessons for beginners.",
  },
  {
    title: "Intermediate Package",
    price: "$299",
    description: "Advanced driving skills and maneuvers.",
  },
  {
    title: "Highway Training",
    price: "$249",
    description: "Learn safe highway driving techniques.",
  },
  {
    title: "Defensive Driving",
    price: "$349",
    description: "Avoid accidents and drive safely.",
  },
  {
    title: "Parallel Parking Mastery",
    price: "$179",
    description: "Perfect your parking skills.",
  },
  {
    title: "Full Driving Course",
    price: "$499",
    description: "Complete driving training package.",
  },
];

export default function DrivingPackages() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Driving Packages
        </motion.h2>
        <motion.p
          className="text-black mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose from our carefully designed driving courses to suit your needs
          and skill level.
        </motion.p>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-black">{pkg.title}</h3>
              <p className="text-black my-2">{pkg.description}</p>
              <span className="text-lg font-bold text-[#bc3677]">
                {pkg.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
