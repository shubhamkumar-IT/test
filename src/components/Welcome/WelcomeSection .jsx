import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-[#bc3677]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to StepIn Driving School
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Helps you to find your next car easily
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Feature 1 */}
          <motion.div
            className="hover:bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <img src="/ot.png" alt="Icon 1" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Training
            </h3>
            <p className="text-gray-600 text-sm">
              Join STEP IN DRIVING SCHOOL for personalized, beginner-friendly
              driving lessons. We offer expert training for teens and adults to
              build confidence on the road.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="hover:bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <img src="/hs.png" alt="Icon 2" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Highway Safety
            </h3>
            <p className="text-gray-600 text-sm">
              Learn essential highway driving skills, including speed limits and
              safe driving practices. Our training ensures you're prepared for
              any challenge on the highway.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="hover:bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <img src="/cp.png" alt="Icon 3" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customized Programs
            </h3>
            <p className="text-gray-600 text-sm">
              We offer tailored driving programs designed to match your skills
              and pace. Benefit from flexible schedules and expert guidance for
              a personalized learning experience.
            </p>
          </motion.div>
          <motion.div
            className="hover:bg-gray-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <img src="/tt.png" alt="Icon 3" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Traffic Rules Test
            </h3>
            <p className="text-gray-600 text-sm">
              Prepare for your driving test with expert instructors who ensure
              you’re well-versed in traffic rules. Get the knowledge and tips
              needed to pass your test with confidence.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="/car.png" alt="Car Image" className=" h-64 object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
