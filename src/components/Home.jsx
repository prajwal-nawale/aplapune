import React from 'react'
import { Link } from 'react-router-dom';

// Featured events data
const featuredEvents = [
  {
    name: "Pune International Film Festival",
    location: "Various Venues",
    date: "January 15-22, 2024",
    image: "https://placehold.co/1200x800/e63946/ffffff?text=Pune+International+Film+Festival",
  },
  {
    name: "NH7 Weekender",
    location: "Mahalakshmi Lawns",
    date: "December 2-4, 2024",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=NH7+Weekender",
  },
  {
    name: "Pune Food Festival",
    location: "JW Marriott",
    date: "October 15-17, 2024",
    image: "https://placehold.co/1200x800/f4a261/000000?text=Pune+Food+Festival",
  }
];

const Home = () => {
  return (
    <div className="pt-32 px-4">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Pune</h1>
          <p className="text-xl mb-6">Your guide to the best events, places, and experiences in Pune</p>
          <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition-colors duration-200">
            Explore Now
          </button>
        </div>
      </section>
      
      {/* Featured Events Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event, index) => (
            <Link 
              to={`/event/${encodeURIComponent(event.name)}`} 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.name}</h3>
                <p className="text-gray-600 mb-1">📍 {event.location}</p>
                <p className="text-gray-600">📅 {event.date}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="#" 
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            View All Events →
          </Link>
        </div>
      </section>
      
      {/* About Pune Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Pune</h2>
          <p className="text-gray-600 mb-4">
            Pune, the cultural capital of Maharashtra, is a vibrant city known for its educational institutions, thriving IT industry, and rich historical heritage. From ancient temples and forts to modern shopping malls and entertainment venues, Pune offers a perfect blend of tradition and modernity.
          </p>
          <p className="text-gray-600">
            The city hosts numerous cultural events, festivals, and exhibitions throughout the year, making it a hub for arts, music, and literature. With its pleasant climate, diverse cuisine, and friendly locals, Pune is a must-visit destination for travelers exploring western India.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
