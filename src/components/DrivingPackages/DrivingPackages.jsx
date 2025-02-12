"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const packages = [
  {
    title: "MINISTRY APPROVED BEGINNER DRIVER EDUCATION PROGRAM PKG-1",
    price: "$575+ HST (MTO Fee Included)",
    description:
      "20 hours in-class (Online), 10 hours in-car driving lessons, 10 hours home-links, Reduces waiting period by 4 months, BDE students graduate with a certificate and may be eligible for an insurance discount, One on one training",
    link: "/registration",
  },
  {
    title: "MINISTRY APPROVED BEGINNER DRIVER EDUCATION PROGRAM PKG-2",
    price: "$725+ HST (MTO Fee Included)",
    description:
      "20 hours in-class (Online), 11 hours in-car driving lessons, 10 hours home-links, Use of our car for the G2 road test (Nearest Location), Booking of the road test, Reduces waiting period by 4 months, BDE students graduate with a certificate and may be eligible for an insurance discount, One on one training",
    link: "/registration",
  },
  {
    title: "G2 Preparation Packages - PKG-3",
    price: "$240 + HST",
    description:
      "2 lessons and road test (Nearest location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
    link: "/registration",
  },
  {
    title: "G2 Preparation Packages - PKG-4",
    price: "$280 + HST",
    description:
      "3 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
    link: "/registration",
  },
  {
    title: "G2 Preparation Packages - PKG-5",
    price: "$360 + HST",
    description:
      "5 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
    link: "/registration",
  },
  {
    title: "G2 Preparation Packages - PKG-6",
    price: "$440 + HST",
    description:
      "7 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
    link: "/registration",
  },
  // {
  //   title: "G2 Preparation Packages - PKG-7",
  //   price: "$560 + HST",
  //   description:
  //     "10 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
  //   link: "/registration",
  // },
  // {
  //   title: "G Preparation Packages - PKG-8",
  //   price: "$295 + HST",
  //   description:
  //     "3 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
  //   link: "/registration",
  // },
  // {
  //   title: "G Preparation Packages - PKG-9",
  //   price: "$385 + HST",
  //   description:
  //     "5 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
  //   link: "/registration",
  // },
  // {
  //   title: "G Preparation Packages - PKG-10",
  //   price: "$475 + HST",
  //   description:
  //     "7 lessons and road test (Nearest Location), One on one lessons, Male and female instructors available, Each lesson is 45 mins long, Free pick-up and drop-off in Brampton",
  //   link: "/registration",
  // },
];

export default function DrivingPackages() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Driving Packages
        </motion.h2>
        <motion.p
          className="text-black mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose from our carefully designed driving courses to suit your needs
          and skill level.
        </motion.p>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-black">{pkg.title}</h3>
              <p className="text-black my-2">{pkg.description}</p>
              <span className="text-lg font-bold text-[#bc3677]">
                {pkg.price}
              </span>
              <div className="mt-4">
                <Link
                  href={pkg.link}
                  className="text-[#bc3677] font-semibold hover:underline"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <a href="/our-courses">
          <button className="mt-4 bg-[#bc3677] text-white py-2 px-4 rounded-lg  transition">
            View More
          </button>
        </a>
      </div>
    </section>
  );
}
