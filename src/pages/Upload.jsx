import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";


const UploadReport = () => {
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate("/payment"); 
  };
  

  return (
    
    <div className="min-h-screen bg-gray-100 px-4">
      <Navbar/>
      <div className="mt-20 text-center">
        <h1 className="font-bold text-3xl md:text-4xl mb-4">
          Upload & Analyze Your Medical Report
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Powered by GPT-4.5 for accurate, instant insights
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 my-10">
        <hr className="w-1/6 border-gray-400" />
        <p className="text-sm text-gray-600">Upload Your Lab Results or Medical Scan</p>
        <hr className="w-1/6 border-gray-400" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full max-w-xl border border-purple-500 rounded-full overflow-hidden">
          <input
            type=""
            className="w-full px-4 py-2 text-gray-600 placeholder:text-sm focus:outline-none"
            placeholder="Drag & drop file here"
          />
          <button className="bg-red-500 text-white px-6 rounded-r-full hover:bg-red-600 transition">
            Upload
          </button>
        </div>

        <div className="w-full max-w-xl text-left">
          <label className="block font-medium text-gray-700 mb-1">
            Tell me about your disease?
          </label>
          <input
            type="text"
            placeholder="write here"
            className="w-full border border-gray-500 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="mt-4 bg-[#52469E] text-white font-semibold px-10 py-3 rounded-lg shadow hover:bg-[#42379b] transition"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default UploadReport;
