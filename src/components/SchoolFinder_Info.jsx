import React from "react";
import { motion } from "framer-motion";

const SchoolFinder_Info = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 space-y-4 z-4">
      {["Board","RegionB", "Type", "Region"].map((text, index) => (
        <motion.h1
          key={index}
          className="text-3xl font-bold text-gray-800 cursor-pointer"
          whileHover={{ scale: 1.1, color: "#4F46E5" }} // Hover animation
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.h1>
      ))}
    </div>
  );
};

export default SchoolFinder_Info;
