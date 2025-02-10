"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/Header";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.0225,
  lng: 72.5714,
};

export default function ContactUs() {
  const [captcha, setCaptcha] = useState("p s t 5 s");
    return (
        <>
            <Header/>
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Get In Touch With Us Now!</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Phone Number</p>
              <p>+1 905-805-1233</p>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p>stepindrivingschool@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Location</p>
              <p>Midvale Rd, Brampton, ON, Canada, Ontario</p>
            </div>
            <div>
              <p className="font-semibold">Working Hours</p>
              <p>Monday to Sunday</p>
              <p>09:00 AM to 06:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="First Name *" required />
              <input className="border p-2 rounded" placeholder="Last Name" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input className="border p-2 rounded" placeholder="Mobile No *" required />
              <input className="border p-2 rounded" placeholder="Email ID *" required />
            </div>
            <textarea className="border p-2 rounded w-full" placeholder="Message" rows="4"></textarea>
            <div>
              <p className="text-sm">Please type the characters *</p>
              <input className="border p-2 rounded w-full" defaultValue={captcha} />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      {/* Google Map Section */}
                <div className="mt-12 px-6">
                    <iframe
          title="Google Map"
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1622095142175!2d-79.82992092382031!3d43.70717797109963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b1408506bd6a7%3A0x42cb91548c6d3b09!2sMidvale%20Rd%2C%20Brampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1739188557203!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
            </div>
            <Footer/>
            </>
  );
}
