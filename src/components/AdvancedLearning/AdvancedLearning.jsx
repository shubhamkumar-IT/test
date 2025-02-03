"use client";
import { motion } from "framer-motion";

export default function AdvancedLearning() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          className="text-4xl text-black md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart Learning with Advance Learning Programs
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-center text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          At Ultimate Drivers, we like to ensure that our students get the best
          quality road training during their driving sessions. Their safety on
          the road is of utmost importance to us.
        </motion.p>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Feature 1: Shoulder Drop off */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              {/* <img
                src="/path-to-your-icon1.png" 
                alt="Shoulder Drop off"
                className="w-16 h-16 text-orange-500"
              /> */}
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">
              Shoulder Drop off
            </h3>
            <p className="text-black">
              Students will learn how to recover and control vehicle if it
              drifts or drops onto a gravel shoulder.
            </p>
          </motion.div>

          {/* Feature 2: Head-On Collision Avoidance */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              {/* <img
                src="/path-to-your-icon2.png" 
                alt="Head-On Collision Avoidance"
                className="w-16 h-16 text-blue-500"
              /> */}
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">
              Head-On Collision Avoidance
            </h3>
            <p className="text-black">
              We teach students how to control during Head-On Collision and get
              out of the way from it.
            </p>
          </motion.div>

          {/* Feature 3: Emergency Escape Route */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              {/* <img
                src="/path-to-your-icon3.png" 
                alt="Emergency Escape Route"
                className="w-16 h-16 text-purple-500"
              /> */}
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">
              Emergency Escape Route
            </h3>
            <p className="text-black">
              We effectively teach students to look properly and to prepare for
              their drive ahead which is essential on the road to good driving
              skills.
            </p>
          </motion.div>

          {/* Feature 4: Brake and Avoid (Threshold Braking) */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              {/* <img
                src="/path-to-your-icon4.png" 
                alt="Brake and Avoid"
                className="w-16 h-16 text-red-500"
              /> */}
            </div>
            <h3 className="text-xl text-black font-semibold mb-2">
              Brake and Avoid (Threshold Braking)
            </h3>
            <p className="text-black">
              Learn how Threshold Braking should bring you to a reasonably quick
              controlled stop in your own lane, even in slippery conditions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
