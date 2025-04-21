import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Cards_bg.png"; // Import the same background image

const CollegeFinder = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="w-full h-screen flex justify-center items-center relative bg-cover bg-center z-1 "
      // style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="flex gap-10 w-3/4 relative z-10">
        {/* Find Colleges Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white shadow-2xl rounded-2xl w-1/2 h-96 flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-xl"
          onClick={() => navigate("/college-info")}
        >
          <h2 className="text-4xl font-bold text-gray-800">Find Colleges</h2>
        </motion.div>

        {/* Find Schools Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white shadow-2xl rounded-2xl w-1/2 h-96 flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-xl"
          onClick={() => navigate("/school-info")}
        >
          <h2 className="text-4xl font-bold text-gray-800">Find Schools</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default CollegeFinder;

