import React from "react";
import { FaHeart, FaDownload } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Output = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 text-center">
        <Navbar/>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        AI Analysis Completed!
      </h1>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto">
        Here is your AI-powered health analysis based on your uploaded report.
      </p>

      <div className="flex flex-col items-center justify-center gap-6">        <div className="bg-[#52469E] text-white rounded-2xl p-8 max-w-lg w-full shadow-md text-center">
          <div className="flex justify-center mb-4">
            <FaHeart className="text-3xl text-green-400" />
          </div>
          <h2 className="text-xl font-bold mb-1">Disease Type 3</h2>
          <p className="text-sm mb-1">
            Blood Glucose Test – Uploaded on
          </p>
          <p className="text-sm mb-4">May 29, 2025</p>
          <p className="text-sm font-semibold">
            AI Analysis Confidence: <span className="text-red-400">95%</span>
          </p>
        </div>

        <button className="bg-red-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-red-700 transition">
          Download Report <FaDownload />
        </button>
      </div>
    </div>
  );
};

export default Output;
