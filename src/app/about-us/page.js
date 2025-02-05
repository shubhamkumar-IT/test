"use client"
import React from 'react'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/Header'
import { FaBook, FaChartBar, FaCalendarCheck, FaHourglassHalf, FaRedo, FaCreditCard } from "react-icons/fa";


const services = [
  { id: 1, icon: <FaBook size={40} />, title: "Training Materials" },
  { id: 2, icon: <FaChartBar size={40} />, title: "Progress Reports" },
  { id: 3, icon: <FaCalendarCheck size={40} />, title: "Convenient Appointment System" },
  { id: 4, icon: <FaHourglassHalf size={40} />, title: "Flexible timings for in-class and in-car Courses" },
  { id: 5, icon: <FaRedo size={40} />, title: "Free Revision for in-class and online courses" },
  { id: 6, icon: <FaCreditCard size={40} />, title: "Easy Payment plans" },
];
const page = () => {

     const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      // Toggle mobile menu
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      // Detect scroll position
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true); // Change header style when scrolling
          } else {
            setScrolled(false); // Reset header style when at the top
          }
        };
    
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
    
        // Clean up the event listener
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
  return (
      <> <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="h-16" />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className={`md:hidden flex items-center ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // Close (X) icon when menu is open
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-[#bc3677]">
            Home
          </a>
          <a href="/about-us" className="hover:text-[#bc3677]">
            About
          </a>
          <a href="#courses" className="hover:text-[#bc3677]">
            Courses
          </a>
          <a href="#contact" className="hover:text-[#bc3677]">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-full left-0 w-full bg-gray-900 text-white py-4 transition-all duration-300"
        >
          <a href="/" className="block py-2 text-center">
            Home
          </a>
          <a href="/about-us" className="block py-2 text-center">
            About
          </a>
          <a href="#courses" className="block py-2 text-center">
            Courses
          </a>
          <a href="#contact" className="block py-2 text-center">
            Contact
          </a>
        </div>
      )}
    </header>
          <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/stepin11.jpg')" }}>
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
         
        </div>
      </section>
          <section className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to STEP IN DRIVING SCHOOL, the premier driving school in Brampton dedicated to helping you become a safe, confident, and skilled driver. Whether you're a beginner or looking for driving test preparation in Brampton, we offer personalized Brampton driving lessons tailored to your needs.At STEP IN DRIVING SCHOOL, we provide top-notch driving lessons in Brampton designed to make you a confident and safe driver. Whether you're looking to learn the basics, prepare for your driving test, or master the art of driving a manual transmission, we are here to help.
        </motion.p>
      </div>
      
      {/* Image */}
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img 
          src="/stepin1.jpg" 
          alt="HubSpot Team" 
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </motion.div>
          </section>
           <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/stepin3.jpg" alt="Mission Image" className="rounded-lg shadow-lg w-full" />
        </motion.div>
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
At STEP IN DRIVING SCHOOL, our mission is to empower individuals with the confidence and skills needed to drive safely and responsibly. We believe that learning to drive is more than just passing a test—it’s about developing lifelong safe driving habits. Our goal is to provide affordable driving lessons in Brampton while ensuring high-quality education through certified instructors, modern vehicles, and a learner-focused approach.

Whether you're a beginner or looking for driving test preparation in Brampton, our structured programs are designed to help you succeed. We are committed to making roads safer, one driver at a time.          </p>
        </motion.div>
      </div>
      
      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
Founded with a passion for road safety and driver education, STEP IN DRIVING SCHOOL started with a simple vision: to create the best driving school in Brampton that provides personalized, stress-free learning experiences. Over the years, we have helped thousands of students gain the confidence to drive independently.

Our journey began when we recognized the need for affordable driving lessons that combine practical training with real-world experience. With expert instructors and manual & automatic driving lessons, we have grown into a trusted driving school known for high pass rates and professional training.

</p>
          <p className="text-lg text-gray-700 mt-4">
Today, we continue to innovate by offering flexible schedules, customized learning plans, and top-tier instruction to help you achieve your driving goals. Whether you need in-car driving lessons, refresher courses, or manual driving school training, STEP IN DRIVING SCHOOL is here to guide you every step of the way.

🚗 Join us today and take the first step towards confident driving! 🚦                    </p>
        </motion.div>
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/stepin10.jpg" alt="Story Image" className="rounded-lg shadow-lg w-full" />
        </motion.div>
      </div>
          </section>
          <section className="py-16 bg-white text-center">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What We Provide
      </motion.h2>
      <motion.p 
        className="text-gray-600 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
We offer a comprehensive learning experience designed to help you succeed. From structured training materials to flexible scheduling and easy payment options, we ensure a smooth and convenient process.      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex flex-col items-center text-center p-6 rounded-xl  shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="text-[#bc3677] mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
          <Footer/>
      
      
      </>
  )
}

export default page