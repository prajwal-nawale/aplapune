import React from "react";
import Image from "../src/aplapune.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-md z-5 mb-100px">
      <div className="w-full bg-amber-100 h-20">
        <div className="container mx-auto max-w-screen-xl flex justify-between items-center px-8 h-full">
          
          {/* Left Navigation Links */}
          <div className="flex space-x-6 ml-40">
            <Link to='/CollegeFinder' className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              CollegeFinder
            </Link>
            <Link to='/Tourism' className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              Tourism
            </Link>
            <Link to='/TopPlaces' className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              TopPlaces
            </Link>
          </div>

          {/* Logo - Centered Properly */}
          <Link to="/#" className="flex-shrink-0  justify-center absolute top-[0px] bottom-[90px] left-[670px] ">
            <img src={Image} alt="Logo" className="w-[100px] h-[100px] z-5" />
          </Link>

          {/* Right Navigation Links */}
          <div className="flex space-x-6 mr-40">
            <Link to='/EventDetails' className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              Events
            </Link>
            <Link to='/RandomFacts' className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              RandomFacts
            </Link>
            <Link to='/AboutUs' className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              About Us
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-orange-500"></div>
    </div>
  );
}

export default Navbar;
