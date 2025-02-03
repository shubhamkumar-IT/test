"use client";
import React from "react";
import CourseBooking from "@/components/CourseBooking/CourseBooking";
import WelcomeSection from "@/components/Welcome/WelcomeSection ";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AdvancedLearning from "@/components/AdvancedLearning/AdvancedLearning";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import DrivingPackages from "@/components/DrivingPackages/DrivingPackages";
import Footer from "@/components/Footer/footer";

export default function HeroSection() {
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
    <>
      {/* Header */}
      <header
        className={`w-full text-white fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
          <div className="text-2xl font-semibold">
            <a href="/" className={`text-${scrolled ? "black" : "white"}`}>
             <img src="/logo.png" alt="" className="h-16"/>
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={toggleMenu}
          >
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
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-[#bc3677]">
              Home
            </a>
            <a href="#about" className="hover:text-[#bc3677]">
              About
            </a>
            <a href="#courses" className="hover:text-[#bc3677]">
              Courses
            </a>
            <a href="#contact" className="hover:text-[#bc3677]">
              Contact
            </a>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-0 right-0 w-64 bg-gray-800 text-white py-4 px-6 md:hidden">
              <a href="#home" className="block py-2">
                Home
              </a>
              <a href="#about" className="block py-2">
                About
              </a>
              <a href="#courses" className="block py-2">
                Courses
              </a>
              <a href="#contact" className="block py-2">
                Contact
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Video Background */}
      <section className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/sds2.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
  <div className="text-center text-white px-6 md:px-12">
    {/* Heading */}
    <motion.h1
      className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to <br /> STEP IN DRIVING SCHOOL
    </motion.h1>

    {/* Subheading */}
    <motion.p
      className="text-xl mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Looking for a reliable driving school in Brampton?
      <br /> STEP IN DRIVING SCHOOL offers affordable driving lessons, driving test preparation, and specialized manual driving lessons.
    </motion.p>

    {/* Mouse Scroll Icon */}
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
        <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
      </div>
      <span className="text-white mt-2 text-sm">Scroll Down</span>
    </motion.div>
  </div>
</div>

      </section>
      <WelcomeSection />
      <DrivingPackages/>
<WhyChooseUs/>
      {/* Other Sections */}
      
      <CourseBooking />
      <AdvancedLearning/>
      <section className="bg-[#bc3677] text-white py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row w-full items-center justify-between">
        {/* Left side: Text */}
        <motion.div
          className="flex flex-col w-full md:w-[65%] mb-4 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Contact Us Today to Book Your Lesson!
          </h2>
          <p className="text-lg md:text-xl">
            Ready to get behind the wheel? Contact STEP IN DRIVING SCHOOL today to schedule your driving lessons. Whether you're in need of drivers ed or preparing for the driving test, we are here to help. Let's get you on the road!
          </p>
        </motion.div>

        {/* Right side: Phone number with icon */}
        <motion.div
          className="flex items-center justify-start md:justify-end space-x-3 w-full md:w-[35%]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0-5.523-4.477-10-10-10S1 6.477 1 12s4.477 10 10 10 10-4.477 10-10z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8V4m0 16v-4m4.293-9.707l2.121 2.121M6.707 18.707l-2.121-2.121"
            ></path>
          </svg>
          <a href="tel:+19003333333" className="text-lg font-semibold">
            +1-900-333-333
          </a>
        </motion.div>
      </div>
      </section>
      <Footer />
    </>
  );
}
