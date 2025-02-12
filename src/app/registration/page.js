"use client";

import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/Header";
import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/203454403669053";
    script.async = true;
    document.getElementById("jotform-container").appendChild(script);
  }, []);

    return (
        <>
            <Header />
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold text-center mb-4">Fill the Form</h2>
        <div id="jotform-container" className="w-full"></div>
      </div>
            </div>
            <Footer />
            </>
  );
}
