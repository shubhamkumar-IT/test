"use client";

import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/Header";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const packages = [
  {
    title: "MINISTRY APPROVED BEGINNER DRIVER EDUCATION PROGRAM PKG-1",
    price: "$575+ HST (MTO Fee Included)",
    deposit: "Start the program with only $200",
    details: [
      "20 hours in-class (Online)",
      "10 hours in-car driving lessons",
      "10 hours home-links",
      "Reduces waiting period by 4 months",
      "BDE students graduate with a certificate and may be eligible for an insurance discount",
      "One on one training",
    ],
  },
  {
    title: "MINISTRY APPROVED BEGINNER DRIVER EDUCATION PROGRAM PKG-2",
    price: "$725+ HST (MTO Fee Included)",
    deposit: "Start the program with only $200",
    details: [
      "20 hours in-class (Online)",
      "11 hours in-car driving lessons",
      "10 hours home-links",
      "Use of our car for the G2 road test (Nearest Location)",
      "Booking of the road test",
      "Reduces waiting period by 4 months",
      "BDE students graduate with a certificate and may be eligible for an insurance discount",
      "One on one training",
    ],
  },
  {
    title: "G2 Preparation Packages",
    subPackages: [
      { name: "PKG-3: 2 lessons and road test", price: "$240 + HST" },
      { name: "PKG-4: 3 lessons and road test", price: "$280 + HST" },
      { name: "PKG-5: 5 lessons and road test", price: "$360 + HST" },
      { name: "PKG-6: 7 lessons and road test", price: "$440 + HST" },
      { name: "PKG-7: 10 lessons and road test", price: "$560 + HST" },
    ],
    details: [
      "One on one lessons",
      "Male and female instructors available",
      "Each lesson is 45 mins long",
      "Free pick-up and drop-off in Brampton",
    ],
  },
  {
    title: "G Preparation Packages",
    subPackages: [
      { name: "PKG-8: 3 lessons and road test", price: "$295 + HST" },
      { name: "PKG-9: 5 lessons and road test", price: "$385 + HST" },
      { name: "PKG-10: 7 lessons and road test", price: "$475 + HST" },
    ],
    details: [
      "One on one lessons",
      "Male and female instructors available",
      "Each lesson is 45 mins long",
      "Free pick-up and drop-off in Brampton",
    ],
  },
];

export default function PackagesPage() {
  const router = useRouter();

  return (
    <>
<Header />    <div className="p-6 max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Driving School Packages
      </motion.h1>
      {packages.map((pkg, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
          {pkg.price && <p className="text-lg font-bold text-red-500">{pkg.price}</p>}
          {pkg.deposit && <p className="text-sm text-gray-600">{pkg.deposit}</p>}
          {pkg.details && (
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {pkg.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
          {pkg.subPackages && (
            <div className="mt-4">
              {pkg.subPackages.map((sub, i) => (
                <p key={i} className="text-gray-700">{sub.name} - <span className="font-bold text-red-500">{sub.price}</span></p>
              ))}
            </div>
          )}
          <button
            onClick={() => router.push("/registration")}
            className="mt-4 bg-[#bc3677] text-white py-2 px-4 rounded-lg  transition"
          >
            Register Now
          </button>
        </motion.div>
      ))}
      </div>
      <Footer />
      </>
  );
}
