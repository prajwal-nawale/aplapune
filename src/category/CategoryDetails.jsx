import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import categories from "./categoriesData";

const CategoryDetails = () => {
  const { categoryName } = useParams();
  const category = categories.find(
    (cat) => cat.name.toLowerCase().replace(/ /g, "-") === categoryName
  );

  if (!category) {
    return <h2 className="text-center text-red-500 text-2xl">Category not found!</h2>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-900">{category.name}</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {category.items?.map((item, index) => (
          <div key={index} className="w-60 h-80 bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
            <motion.div className="w-full h-3/4 overflow-hidden" whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="h-1/4 flex items-center justify-center font-bold text-lg text-purple-900 bg-gradient-to-r from-purple-100 to-blue-100">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
