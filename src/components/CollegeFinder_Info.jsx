import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CollegeFinder_Info = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const dropdownData = {
    Stream: ["Science", "Commerce", "Arts"],
    Degree: [
      "B.Tech (Engineering)", 
      "MBBS (Medical)", 
      "BBA (Management)", 
      "B.Com (Commerce)", 
      "B.A (Arts)", 
      "B.Sc (Science)"
    ],
    "Degree Name": [
      "Computer Science", 
      "Mechanical Engineering", 
      "Civil Engineering", 
      "Marketing", 
      "Finance", 
      "Psychology"
    ],
    Region: ["North", "South", "East", "West"],
    Type: ["Government", "Private", "Autonomous"],
    ID: ["National ID", "State ID", "University ID"]
  };

  const toggleDropdown = useCallback((index) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  const handleSelection = (category, option) => {
    if (category === "Stream" && option === "Science") {
      navigate("/science-colleges"); // Navigate to Science College List
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-6 z-4">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide">
        College <span className="text-orange-500">Finder</span>
      </h1>

      {/* Dropdown List */}
      <div className="space-y-4 w-80">
        {Object.keys(dropdownData).map((category, index) => (
          <div key={index} className="relative">
            {/* Dropdown Button */}
            <button
              className="w-full text-lg font-medium text-gray-800 flex justify-between items-center bg-white px-4 py-3 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => toggleDropdown(index)}
            >
              {category}
              <motion.span
                animate={{ rotate: openIndex === index ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                ▶
              </motion.span>
            </button>

            {/* Right-side Dropdown with Category-specific Options */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="absolute left-full top-0 ml-4 bg-white shadow-lg border border-gray-300 rounded-lg w-48 p-3 space-y-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {dropdownData[category].map((option, i) => (
                    <p
                      key={i}
                      className="text-gray-700 cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleSelection(category, option)}
                    >
                      {option}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeFinder_Info;
