import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Historical Forts",
    img: "../category/ganapati.jpg",
    description: "Explore ancient forts that stand as a testament to India's rich history.",
  },
  {
    name: "Historical Sites",
    img: "https://source.unsplash.com/featured/?historical-site",
    description: "Discover remnants of India's glorious past through its landmarks.",
  },
  {
    name: "Temples",
    img: "https://source.unsplash.com/featured/?temple",
    description: "Visit sacred temples that showcase stunning architecture and spiritual significance.",
  },
  {
    name: "Hill Stations",
    img: "https://source.unsplash.com/featured/?hill-station",
    description: "Escape to serene hill stations with breathtaking views and tranquility.",
  },
];

const CategoryList = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex flex-wrap gap-8 justify-center p-8 bg-gradient-to-br from-purple-50 to-blue-50">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => navigate(`/category/${category.name.toLowerCase().replace(/ /g, "-")}`)}
          className="w-72 h-96 bg-white shadow-2xl rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
        >
          <motion.div
            className="w-full h-3/4 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={category.img} alt={category.name} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <div className="h-1/4 flex items-center justify-center font-bold text-xl text-purple-900 bg-gradient-to-r from-purple-100 to-blue-100">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
