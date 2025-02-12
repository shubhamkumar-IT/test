"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gray-800 text-white  left-0 z-50">
      <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
        <div className="text-2xl font-semibold">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="h-16" />
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
          <a href="/" className="hover:text-[#bc3677]">
            Home
          </a>
          <a href="/about-us" className="hover:text-[#bc3677]">
            About
          </a>
          <a href="/our-courses" className="hover:text-[#bc3677]">
            Courses
          </a>
          <a href="/contact-us" className="hover:text-[#bc3677]">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 w-64 bg-gray-800 text-white py-4 px-6 md:hidden">
            <a href="/" className="block py-2">
              Home
            </a>
            <a href="/about-us" className="block py-2">
              About
            </a>
            <a href="/our-courses" className="block py-2">
              Courses
            </a>
            <a href="/contact-us" className="block py-2">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
