"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/footer";
export default function BeginnerPackage() {
    return (
        <>
            <Header />
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#1f2937] text-white py-16 text-center">
        <motion.h1 
          className="text-4xl font-bold mb-4" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Defensive Driving Lessons
        </motion.h1>
        <p className="text-lg max-w-2xl mx-auto">
          The perfect package for beginners to gain confidence and master the basics of driving safely.
        </p>
      </section>
<section className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">Package Details</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic driving lessons covering essential road skills</li>
            <li>Personalized guidance from certified instructors</li>
            <li>Includes traffic rules and parking techniques</li>
            <li>1-on-1 lessons tailored to your learning pace</li>
          </ul>
          <div className=" mt-6">
            <span className="text-3xl font-bold text-[#bc3677]">$199</span>
          </div>
      </div>
      
      {/* Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img 
          src="/stepin16.png" 
          alt="HubSpot Team" 
          className=" max-w-full h-auto"
        />
      </motion.div>
          </section>
      {/* Package Details */}
     

      {/* Benefits Section */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Why Choose This Package?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="p-4 bg-white shadow rounded-lg" 
              whileHover={{ scale: 1.05 }}>
              <h3 className="font-semibold">Confidence Building</h3>
              <p>Learn step-by-step and build confidence behind the wheel.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white shadow rounded-lg" 
              whileHover={{ scale: 1.05 }}>
              <h3 className="font-semibold">Experienced Instructors</h3>
              <p>Get trained by certified and patient instructors.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white shadow rounded-lg" 
              whileHover={{ scale: 1.05 }}>
              <h3 className="font-semibold">Flexible Scheduling</h3>
              <p>Choose lesson times that fit your schedule.</p>
            </motion.div>
            <motion.div 
              className="p-4 bg-white shadow rounded-lg" 
              whileHover={{ scale: 1.05 }}>
              <h3 className="font-semibold">Safety First</h3>
              <p>Focus on safety and defensive driving techniques.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <motion.a 
          href="/contact" 
          className="bg-[#1f2937] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md  transition"
          whileHover={{ scale: 1.1 }}
        >
          Book Your Lesson Now
        </motion.a>
      </section>
            </div>
            <Footer />
            </>
  );
}
