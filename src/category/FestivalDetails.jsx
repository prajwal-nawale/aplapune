import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const festivalData = {
  "ganesh-chaturthi": {
    name: "Ganesh Chaturthi",
    history: "Ganesh Chaturthi celebrates the birth of Lord Ganesha. It was popularized by Lokmanya Tilak during the independence movement.",
    importance: "People bring Ganesha idols home, perform prayers, and immerse them in water.",
    month: "August - September",
    img: "https://images.pexels.com/photos/28288478/pexels-photo-28288478/free-photo-of-hindu-lord-ganesha-on-ganesh-chaturthi.jpeg",
  },
  "chhatrapati-shivaji-maharaj-jayanti": {
    name: "Chhatrapati Shivaji Maharaj Jayanti",
    history: "Started by Mahatma Phule and later continued by other leaders to honor Shivaji Maharaj.",
    importance: "Parades, speeches, and cultural programs are held across Maharashtra.",
    month: "February 19",
    img: "https://source.unsplash.com/featured/?shivaji-maharaj",
  },
  "diwali": {
    name: "Diwali",
    history: "Diwali marks Lord Rama's return to Ayodhya after defeating Ravana, symbolizing the triumph of good over evil.",
    importance: "People light lamps, burst crackers, and worship Goddess Lakshmi.",
    month: "October - November",
    img: "/ganpati.jpg",
  },
  "gokulashtami": {
    name: "Gokulashtami",
    history: "This festival marks the birth of Lord Krishna, one of the most loved deities in Hinduism.",
    importance: "People fast, sing bhajans, and participate in Dahi Handi celebrations.",
    month: "August",
    img: "https://source.unsplash.com/featured/?krishna",
  },
};

const FestivalDetails = () => {
  const { festivalName } = useParams();
  const festival = festivalData[festivalName];

  if (!festival) {
    return <h2 className="text-center text-2xl text-red-500">Festival Not Found</h2>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-gradient-to-br from-orange-50 to-yellow-100">
      {/* Title Animation */}
      <motion.h1
        className="text-4xl font-extrabold text-purple-800 font-serif mt-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {festival.name}
      </motion.h1>

      {/* Image with Zoom Effect */}
      <motion.img
        src={festival.img}
        alt={festival.name}
        className="w-96 h-64 object-cover rounded-xl shadow-lg mt-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Description Box */}
      <motion.div
        className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-2xl text-gray-700 text-lg font-medium space-y-4 border-l-4 border-purple-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p><strong className="text-purple-900">📜 History:</strong> {festival.history}</p>
        <p><strong className="text-purple-900">🌟 Importance:</strong> {festival.importance}</p>
        <p><strong className="text-purple-900">📅 Celebrated In:</strong> {festival.month}</p>
      </motion.div>

      {/* Back Button */}
      <motion.a
        href="/"
        className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-lg shadow-md text-lg font-semibold transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
      >
        ⬅ Back to Festivals
      </motion.a>
    </div>
  );
};

export default FestivalDetails;
