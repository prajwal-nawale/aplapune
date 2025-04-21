import { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import newLogo from "../assets/logo2.svg";

// Import event images
import piffImage from "../assets/images/events/piff.svg";
import nh7Image from "../assets/images/events/nh7.svg";
import musicImage from "../assets/images/events/music.svg";
import foodImage from "../assets/images/events/food.svg";
import fashionImage from "../assets/images/events/fashion.svg";
import litImage from "../assets/images/events/lit.svg";
import marathonImage from "../assets/images/events/marathon.svg";
import designImage from "../assets/images/events/design.svg";

// Add event image mapping
const EVENT_IMAGES = {
  "Pune International Film Festival": piffImage,
  "NH7 Weekender": nh7Image,
  "Sawai Gandharva Music Festival": musicImage,
  "Pune Food Festival": foodImage,
  "Pune Fashion Week": fashionImage,
  "Pune Literature Festival": litImage,
  "Pune Marathon": marathonImage,
  "Pune Design Festival": designImage,
  // For other events, we'll use placeholder images until we create SVGs for them
  "Pune Heritage Festival": "https://placehold.co/120x120/8d99ae/ffffff?text=Heritage",
  "Pune Street Food Festival": "https://placehold.co/120x120/fb8500/ffffff?text=Street",
  "Pune Comic Con": "https://placehold.co/120x120/3a86ff/ffffff?text=Comic",
  "Pune Jazz Festival": "https://placehold.co/120x120/023047/ffffff?text=Jazz",
  "Pune Tech Summit": "https://placehold.co/120x120/0077b6/ffffff?text=Tech",
  "Pune Art Exhibition": "https://placehold.co/120x120/9d4edd/ffffff?text=Art",
  "Pune Yoga Festival": "https://placehold.co/120x120/06d6a0/000000?text=Yoga"
};

export default function Navbar() {
  const [hoverColor, setHoverColor] = useState("border-orange-300");
  const navigate = useNavigate();
  const colors = [
    "border-orange-500",
    "border-g-500",
    "border-blue-500",
    "border-gray-500",
    "border-violet-500",
    "border-yellow-500",
  ];

  // College Finder options
  const collegeOptions = [
    { name: "Engineering Colleges", count: "42 colleges" },
    { name: "Medical Colleges", count: "15 colleges" },
    { name: "Arts & Science", count: "28 colleges" },
    { name: "Management Institutes", count: "35 colleges" },
    { name: "Law Colleges", count: "12 colleges" },
    { name: "Pharmacy Colleges", count: "8 colleges" },
    { name: "Design Institutes", count: "6 colleges" },
    { name: "Architecture Colleges", count: "5 colleges" },
    { name: "Hotel Management", count: "4 colleges" },
    { name: "Mass Communication", count: "7 colleges" },
    { name: "Computer Application", count: "22 colleges" },
    { name: "Dental Colleges", count: "9 colleges" },
  ];

  // Tourism places
  const tourismPlaces = [
    { name: "Shaniwar Wada", type: "Historical" },
    { name: "Aga Khan Palace", type: "Historical" },
    { name: "Sinhagad Fort", type: "Fort" },
    { name: "Osho Ashram", type: "Spiritual" },
    { name: "Dagdusheth Halwai Ganpati Temple", type: "Religious" },
    { name: "Pataleshwar Cave Temple", type: "Religious" },
    { name: "Rajiv Gandhi Zoological Park", type: "Wildlife" },
    { name: "Parvati Hill", type: "Nature" },
    { name: "Pune-Okayama Friendship Garden", type: "Garden" },
    { name: "Bund Garden", type: "Garden" },
    { name: "Saras Baug", type: "Garden" },
    { name: "Katraj Snake Park", type: "Wildlife" },
  ];

  // Top Places
  const topPlaces = [
    { name: "FC Road", category: "Food & Shopping" },
    { name: "MG Road", category: "Shopping" },
    { name: "Koregaon Park", category: "Nightlife" },
    { name: "Baner", category: "Residential & Food" },
    { name: "Viman Nagar", category: "Lifestyle" },
    { name: "Kothrud", category: "Residential" },
    { name: "Aundh", category: "Lifestyle & Food" },
    { name: "Hinjewadi", category: "IT Hub" },
    { name: "Kalyani Nagar", category: "Upscale Living" },
    { name: "Shivaji Nagar", category: "Commercial" },
    { name: "Kharadi", category: "IT Hub" },
    { name: "Camp Area", category: "Heritage & Shopping" },
  ];

  // Live events in Pune
  const puneEvents = [
    { name: "Pune International Film Festival", location: "Various Venues" },
    { name: "NH7 Weekender", location: "Mahalakshmi Lawns" },
    { name: "Sawai Gandharva Music Festival", location: "Ramanbag" },
    { name: "Pune Food Festival", location: "JW Marriott" },
    { name: "Pune Fashion Week", location: "The Westin" },
    { name: "Pune Literature Festival", location: "Yashwantrao Chavan Center" },
    { name: "Pune Marathon", location: "Sinhagad Road" },
    { name: "Pune Design Festival", location: "Hyatt Regency" },
    { name: "Pune Heritage Festival", location: "Shaniwar Wada" },
    { name: "Pune Street Food Festival", location: "FC Road" },
    { name: "Pune Comic Con", location: "Phoenix Marketcity" },
    { name: "Pune Jazz Festival", location: "Royal Palms" },
    { name: "Pune Tech Summit", location: "Hinjewadi IT Park" },
    { name: "Pune Art Exhibition", location: "Balgandharva Rangmandir" },
    { name: "Pune Yoga Festival", location: "Osho Ashram" },
  ];

  // Random facts about Pune
  const puneFacts = [
    "Pune is known as the 'Oxford of the East'",
    "Pune was once the center of power of the Maratha Empire",
    "Pune has the highest number of two-wheelers in India",
    "Aga Khan Palace in Pune is a historical landmark",
    "Pune is home to the National Defence Academy",
    "Shaniwar Wada was once the seat of the Peshwas",
    "Pune is the 9th most populous city in India",
    "Pune's Dagdusheth Halwai Ganpati Temple is over 100 years old",
    "Pune has one of India's oldest universities - Savitribai Phule Pune University",
    "The first women's university in India was established in Pune",
    "Pune is known for its pleasant climate throughout the year",
    "Sinhagad Fort near Pune has historical significance from the Maratha era",
    "Pune is a major IT and automobile manufacturing hub",
    "The German Bakery in Koregaon Park is a popular landmark",
    "Pune hosts the prestigious Pune International Marathon annually"
  ];

  // About Us sections
  const aboutSections = [
    "Our Mission",
    "Our Team",
    "Our Story",
    "Careers",
    "Contact Us",
    "Support",
    "Privacy Policy",
    "Terms of Service",
    "FAQ",
    "Partnerships",
    "Investor Relations",
    "Media Kit",
    "Community Guidelines",
    "Accessibility Statement",
    "Sustainability Initiatives"
  ];

  // Function to get dropdown content based on item name
  const getDropdownContent = (itemName) => {
    switch (itemName) {
      case "College Finder":
        return collegeOptions.map((college, idx) => (
          <li key={idx} className="py-1 px-3 hover:bg-gray-400/40 rounded-md cursor-pointer transition-colors duration-150">
            <div className="font-medium">{college.name}</div>
            <div className="text-xs text-gray-600">{college.count}</div>
          </li>
        ));
      case "Tourism":
        return tourismPlaces.map((place, idx) => (
          <li key={idx} className="py-1 px-3 hover:bg-gray-400/40 rounded-md cursor-pointer transition-colors duration-150">
            <div className="font-medium">{place.name}</div>
            <div className="text-xs text-gray-600">{place.type}</div>
          </li>
        ));
      case "Top Places":
        return topPlaces.map((place, idx) => (
          <li key={idx} className="py-1 px-3 hover:bg-gray-400/40 rounded-md cursor-pointer transition-colors duration-150">
            <div className="font-medium">{place.name}</div>
            <div className="text-xs text-gray-600">{place.category}</div>
          </li>
        ));
      case "Events":
        return puneEvents.map((event, idx) => (
          <li 
            key={idx} 
            className="py-2 px-3 hover:bg-gray-400/40 rounded-md cursor-pointer transition-colors duration-150 flex items-center gap-3"
            onClick={() => {
              navigate(`/event/${encodeURIComponent(event.name)}`);
            }}
          >
            <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-gray-200">
              <img 
                src={EVENT_IMAGES[event.name] || "https://placehold.co/120x120/cccccc/ffffff?text=Event"}
                alt={event.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-grow">
              <div className="font-medium">{event.name}</div>
              <div className="text-xs text-gray-600">{event.location}</div>
            </div>
          </li>
        ));
      case "Random Facts":
        return puneFacts.map((fact, idx) => (
          <li 
            key={idx} 
            className="py-1 px-3 hover:bg-gray-400/40 rounded-md cursor-pointer transition-colors duration-150"
            onClick={() => {
              navigate(`/fact/${encodeURIComponent(fact)}`);
            }}
          >
            {fact}
          </li>
        ));
      case "About Us":
        return aboutSections.map((section, idx) => (
          <li key={idx} className="py-1 px-3 hover:bg-gray-400/40 rounded-md cursor-pointer transition-colors duration-150">
            {section}
          </li>
        ));
      default:
        return (
          <>
            <li className="py-1 px-3 hover:bg-gray-400/40 rounded-md">
              Subitem 1
            </li>
            <li className="py-1 px-3 hover:bg-gray-400/40 rounded-md">
              Subitem 2
            </li>
            <li className="py-1 px-3 hover:bg-gray-400/40 rounded-md">
              Subitem 3
            </li>
            <li className="py-1 px-3 hover:bg-gray-400/40 rounded-md">
              Subitem 4
            </li>
            <li className="py-1 px-3 hover:bg-gray-400/40 rounded-md">
              Subitem 5
            </li>
            <li className="py-1 px-3 hover:bg-gray-400/40 rounded-md">
              Subitem 6
            </li>
          </>
        );
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-3 shadow-md bg-white/40 backdrop-blur-lg transition-all duration-200 border-b-4 ${hoverColor}`}
    >
      {/* Narrower Container => max-w-4xl */}
      <div className="max-w-4xl mx-auto flex justify-between items-center relative">
        {/* Left Navigation */}
        <div className="flex space-x-4 items-center">
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-all">
            Home
          </Link>
          {["College Finder", "Tourism", "Top Places"].map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoverColor(colors[index % colors.length])}
              onMouseLeave={() => setHoverColor("border-pink-300")}
            >
              <button className="text-gray-700 hover:text-red-600 transition-all">
                {item}
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-gray-500/30 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="p-2 text-sm text-gray-800 max-h-80 overflow-y-auto custom-scrollbar">
                  {getDropdownContent(item)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <div className="relative flex flex-col items-center">
          <Link to="/">
            <img src={newLogo} alt="Logo" className="h-16 w-auto mb-2"  />
            <h1 className="text-xl font-bold text-gray-700 ">AplaPune</h1>
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex space-x-4 items-center">
          {["Events", "Random Facts", "About Us"].map((item, index) => (
            <div
              key={index + 3}
              className="relative group"
              onMouseEnter={() =>
                setHoverColor(colors[(index + 3) % colors.length])
              }
              onMouseLeave={() => setHoverColor("border-pink-300")}
            >
              <button className="text-gray-700 hover:text-red-600 transition-all">
                {item}
              </button>
              {/* Dropdown */}
              <div className={`absolute ${item === "Events" ? "left-[-50px] w-80" : "left-0 w-64"} mt-2 bg-gray-500/30 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50`}>
                <ul className="p-2 text-sm text-gray-800 max-h-80 overflow-y-auto custom-scrollbar">
                  {getDropdownContent(item)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-28 ml-[-20px]">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full pl-3 pr-8 py-1 text-sm focus:outline-none w-full"
          />
          <Search className="absolute right-2 top-2 text-gray-500" size={14} />
        </div>
      </div>
    </nav>
  );
}


