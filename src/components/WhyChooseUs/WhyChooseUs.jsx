"use client";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose STEP IN DRIVING SCHOOL?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos.
        </motion.p>

        {/* Features and Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 flex gap-2">
                  <svg
                    className="w-6 h-6 text-[#bc3677] border-[#bc3677] border-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l5 5L20 7"
                    ></path>
                  </svg>
                  Experienced Instructors
                </h3>
                <p className="text-gray-600">
                  Our team of professional, certified instructors is committed
                  to providing personalized driving lessons that cater to your
                  needs. We ensure that each lesson is designed to build your
                  skills progressively and safely.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 flex gap-2">
                  <svg
                    className="w-6 h-6 text-[#bc3677] border-[#bc3677] border-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l5 5L20 7"
                    ></path>
                  </svg>
                  Affordable Driving School in Brampton
                </h3>
                <p className="text-gray-600">
                  We believe that quality driving education should be accessible
                  to everyone. STEP IN DRIVING SCHOOL offers affordable driving
                  lessons without compromising on quality. Choose us for
                  affordable driving school Brampton and get value for your
                  money.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 flex gap-2">
                  {" "}
                  <svg
                    className="w-6 h-6 text-[#bc3677] border-[#bc3677] border-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l5 5L20 7"
                    ></path>
                  </svg>
                  Comprehensive Driving Test Preparation
                </h3>
                <p className="text-gray-600">
                  If you're preparing for your driving test, our driving test
                  preparation services will ensure you're fully equipped to pass
                  with ease. We cover everything from theoretical knowledge to
                  practical driving techniques, focusing on the areas that
                  matter most for your success.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 flex gap-2">
                  <svg
                    className="w-6 h-6 text-[#bc3677] border-[#bc3677] border-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l5 5L20 7"
                    ></path>
                  </svg>
                  Manual Driving Lessons
                </h3>
                <p className="text-gray-600">
                  Interested in learning to drive a manual car? We offer
                  specialized manual driving school Brampton programs for those
                  who prefer the challenge and control of a manual transmission.
                  Gain full confidence in your driving skills with our expert
                  instructors.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="font-semibold text-xl text-gray-900 flex gap-2">
                  <svg
                    className="w-6 h-6 text-[#bc3677] border-[#bc3677] border-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l5 5L20 7"
                    ></path>
                  </svg>
                  Convenient Location
                </h3>
                <p className="text-gray-600">
                  We are located in the heart of Brampton, making it easy for
                  you to access quality driving lessons near you. No need to
                  search for "best driving school near me" – STEP IN DRIVING
                  SCHOOL is here!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/stepin4.jpg" // Replace with actual image path
              alt="Driver Training"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
