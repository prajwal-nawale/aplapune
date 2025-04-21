import { motion } from "framer-motion";

const foodItems = [
  { name: "Bhakarwadi", img: "https://www.sangeetasweets.com/cdn/shop/products/2_d041a3c4-7a2b-4b1b-bb4e-d9ba026effab.jpg?v=1661464765&width=990" },
  { name: "Puran Poli", img: "https://source.unsplash.com/featured/?sweet" },
  { name: "Misal Pav", img: "https://source.unsplash.com/featured/?spicy" },
  { name: "Vada Pav", img: "https://source.unsplash.com/featured/?burger" },
];

const FoodCards = () => {
  return (
    <div className="flex gap-6 justify-center z-4">
      {foodItems.map((food, index) => (
        <div key={index} className="w-40 h-70 bg-white shadow-lg rounded-lg overflow-hidden">
          <motion.div
            className="w-full h-3/4 overflow-hidden"
            whileHover={{ scale: 1.1 }} // Subtle zoom effect on image
            transition={{ duration: 0.4 }}
          >
            <img src={food.img} alt={food.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="h-1/4 flex items-center justify-center font-semibold text-lg">
            {food.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;