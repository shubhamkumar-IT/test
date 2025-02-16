"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              About Step In Driving SChool
            </h2>
            <p className="text-sm">
              Our mission is to provide customers with a trusted driving school
              that trains responsible and safe drivers. We focus on the highest
              quality instruction and technology-friendly learning.
            </p>
            

            {/* Social Icons */}
            <div className="flex items-center mt-4 space-x-4">
              <a
                href="https://www.facebook.com/Stepindriving/"
                className="text-white text-xl hover:text-blue-500 transition"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/stepindrivingschool/"
                target="_blank"
                className="text-white text-xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              
            </div>

            {/* App Store Buttons */}
          </div>

          {/* Programs Section */}
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-lg font-semibold text-white mb-4">Programs</h2>
            <ul className="text-sm space-y-1">
              <li><a href="/our-courses">Beginner Driver Education Program</a></li>
              <li><a href="/our-courses">Advanced Driver Education Program</a></li>
              <li><a href="/our-courses">G2 & G Road Test Packages</a></li>
              <li><a href="/our-courses">Complete Refresher Program</a></li>
              <li><a href="/our-courses">Defensive Driving Course</a></li>
              <li><a href="/our-courses">Winter Time Driving Program</a></li>
            </ul>
          </div>

          {/* Locations & Quick Links */}
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="text-sm space-y-1">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Locations</a></li>
              {/* <li>Blog</li> */}
              <li><a href="registration">Road Test Booking</a></li>
              
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          © 2025 <a href="/">StepIN Driving School</a>. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
