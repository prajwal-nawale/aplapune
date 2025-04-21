import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { image: "https://source.unsplash.com/featured/?nature", text: "Intro" },
  { image: "https://source.unsplash.com/featured/?water", text: "Live Events" },
  { image: "https://source.unsplash.com/featured/?mountain", text: "Pune Speciality" },
  { image: "https://source.unsplash.com/featured/?forest", text: "Walk in the Wild" },
  { image: "https://source.unsplash.com/featured/?sky", text: "Touch the Sky" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[80vw] h-[60vh] mx-auto overflow-hidden rounded-lg shadow-lg mt-10px z-4 ">
      <AnimatePresence custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full"
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: "0%" }} // Slide to the center
          exit={{ x: "-100%" }} // Slide out to the left
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `url(${slides[currentIndex].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-3xl font-bold">{slides[currentIndex].text}</h2>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md"
        onClick={() =>
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
          )
        }
      >
        ◀
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
