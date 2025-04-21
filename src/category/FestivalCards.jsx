import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const festivals = [
  {
    name: "Ganesh Chaturthi",
    img: "https://images.pexels.com/photos/28288478/pexels-photo-28288478/free-photo-of-hindu-lord-ganesha-on-ganesh-chaturthi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A 10-day festival celebrating the birth of Lord Ganesha.",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Jayanti",
    img: "https://source.unsplash.com/featured/?shivaji-maharaj",
    description: "Celebrating the birth of the great warrior king Shivaji Maharaj.",
  },
  {
    name: "Diwali",
    img: "/ganpati.jpg", // Use public folder for local images
    description: "The festival of lights, celebrating victory of good over evil.",
  },
  {
    name: "Gokulashtami",
    img: "https://source.unsplash.com/featured/?krishna",
    description: "Celebrates the birth of Lord Krishna with Dahi Handi celebrations.",
  },
];

const FestivalCards = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-8 bg-gradient-to-br from-purple-50 to-blue-50">
      {festivals.map((festival, index) => (
        <Link
          to={`/festival/${festival.name.toLowerCase().replace(/ /g, "-")}`}
          key={index}
          className="w-72 h-96 bg-white shadow-2xl rounded-2xl overflow-hidden cursor-pointer"
        >
          <motion.div
            className="w-full h-3/4 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={festival.img}
              alt={festival.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="h-1/4 flex flex-col items-center justify-center font-bold text-xl text-purple-900 bg-gradient-to-r from-purple-100 to-blue-100">
            {festival.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FestivalCards;
