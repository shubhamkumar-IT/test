import { motion } from "framer-motion";

export default function CourseBooking() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center text-black justify-between">
        {/* Left side: Course Information */}
        <div className="w-full md:w-1/2">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Driver Safety On The Road
          </motion.h2>

          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Your Choice by Dreevex is the Revolutionary Car Ownership Experience
            you have been waiting for – Simple, Convenient & Flexible.
          </motion.p>

          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <li className="flex items-center text-gray-700 gap-2">
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
              Tailored driving lessons for beginners and advanced learners.
            </li>
            <li className="flex items-center text-gray-700 gap-2">
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
              Comprehensive education for first-time drivers to ensure safety on
              the road.
            </li>
            <li className="flex items-center text-gray-700 gap-2">
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
              Real-world driving experience with our certified instructors.
            </li>
            <li className="flex items-center text-gray-700 gap-2">
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
              Intensive preparation for passing your driving test with
              confidence.
            </li>
            <li className="flex items-center text-gray-700 gap-2">
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
              Specialized lessons for driving manual cars.
            </li>
          </motion.ul>
        </div>

        {/* Right side: Booking Form */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl text-[#bc3677] font-bold mb-4 text-center">
              Contact Us Today to Book Your Lesson!
            </h3>
            <p className="text-lg text-black text-center mb-6">
              Ready to get behind the wheel? Contact STEP IN DRIVING SCHOOL
              today.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="youremail@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                  placeholder="123-456-7890"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#bc3677] text-white py-3 rounded-lg mt-4"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
