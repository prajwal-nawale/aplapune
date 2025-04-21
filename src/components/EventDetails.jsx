import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Event data - in a real app, this would come from an API or database
const eventData = {
  "Pune International Film Festival": {
    name: "Pune International Film Festival",
    location: "Various Venues",
    date: "Feb 13-20, 2025",
    description: "The Pune International Film Festival (PIFF) is an annual film festival held in Pune, Maharashtra. It showcases the best of world cinema and Indian films, with special focus on Marathi cinema. The festival includes screenings, workshops, and panel discussions with filmmakers.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Pune+International+Film+Festival",
    tickets: "Available online and at venue",
    contact: "+91 20 2567 8000",
    website: "www.piffindia.com"
  },
  "NH7 Weekender": {
    name: "NH7 Weekender",
    location: "Mahalakshmi Lawns",
    date: "December 2-4, 2024",
    description: "NH7 Weekender is one of India's biggest multi-genre music festivals. Held annually in Pune, it features performances by Indian and international artists across various genres including rock, electronic, folk, and more. The festival is known for its vibrant atmosphere and diverse lineup.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=NH7+Weekender",
    tickets: "Available on BookMyShow",
    contact: "+91 20 2613 3700",
    website: "www.nh7weekender.com"
  },
  "Sawai Gandharva Music Festival": {
    name: "Sawai Gandharva Music Festival",
    location: "Ramanbag",
    date: "December 8-12, 2024",
    description: "The Sawai Gandharva Bhimsen Mahotsav is an annual Indian classical music festival held in Pune. It is one of the most prestigious classical music festivals in India, featuring performances by renowned artists in Hindustani classical music. The festival honors the legacy of Pandit Bhimsen Joshi.",
    image: "https://placehold.co/1200x800/457b9d/ffffff?text=Sawai+Gandharva+Music+Festival",
    tickets: "Available at venue and online",
    contact: "+91 20 2553 1806",
    website: "www.sawaigandharvabhimsenmahotsav.com"
  },
  "Pune Food Festival": {
    name: "Pune Food Festival",
    location: "JW Marriott",
    date: "October 15-17, 2024",
    description: "The Pune Food Festival celebrates the diverse culinary traditions of the city and beyond. It features food stalls from popular restaurants, cooking demonstrations by renowned chefs, and various food-related activities. Visitors can sample a wide range of cuisines and participate in food competitions.",
    image: "https://placehold.co/1200x800/f4a261/000000?text=Pune+Food+Festival",
    tickets: "Entry by ticket only",
    contact: "+91 20 6683 3333",
    website: "www.punefoodfestival.com"
  },
  "Pune Fashion Week": {
    name: "Pune Fashion Week",
    location: "The Westin",
    date: "September 5-7, 2024",
    description: "Pune Fashion Week showcases the latest trends in fashion with runway shows featuring designs by established and emerging designers. The event attracts fashion enthusiasts, industry professionals, and celebrities. It provides a platform for local designers to showcase their collections.",
    image: "https://placehold.co/1200x800/2a9d8f/ffffff?text=Pune+Fashion+Week",
    tickets: "By invitation and limited public tickets",
    contact: "+91 20 6721 0000",
    website: "www.punefashionweek.com"
  },
  "Pune Literature Festival": {
    name: "Pune Literature Festival",
    location: "Yashwantrao Chavan Center",
    date: "November 10-12, 2024",
    description: "The Pune Literature Festival brings together authors, poets, and literary enthusiasts for discussions, book launches, and workshops. The festival celebrates literature in various languages and provides a platform for meaningful conversations on books, writing, and contemporary issues.",
    image: "https://placehold.co/1200x800/e9c46a/000000?text=Pune+Literature+Festival",
    tickets: "Free entry with registration",
    contact: "+91 20 2553 2969",
    website: "www.punelitfest.com"
  },
  "Pune Marathon": {
    name: "Pune Marathon",
    location: "Sinhagad Road",
    date: "November 27, 2024",
    description: "The Pune Marathon is one of the oldest marathons in India. It attracts professional runners and fitness enthusiasts from across the country. The event includes full marathon, half marathon, and shorter distance categories for different age groups. It promotes fitness and community spirit.",
    image: "https://placehold.co/1200x800/264653/ffffff?text=Pune+Marathon",
    tickets: "Registration required",
    contact: "+91 20 2612 5050",
    website: "www.punemarathon.com"
  },
  "Pune Design Festival": {
    name: "Pune Design Festival",
    location: "Hyatt Regency",
    date: "February 10-12, 2024",
    description: "The Pune Design Festival is an annual event that brings together designers, artists, and creative professionals. It features exhibitions, workshops, and talks by industry leaders. The festival covers various design disciplines including graphic design, product design, and architecture.",
    image: "https://placehold.co/1200x800/e76f51/ffffff?text=Pune+Design+Festival",
    tickets: "Paid entry",
    contact: "+91 20 6645 1234",
    website: "www.punedesignfestival.org"
  },
  "Pune Heritage Festival": {
    name: "Pune Heritage Festival",
    location: "Shaniwar Wada",
    date: "March 15-17, 2024",
    description: "The Pune Heritage Festival celebrates the rich cultural and historical heritage of the city. It includes heritage walks, exhibitions, performances, and talks about Pune's history. The festival aims to create awareness about the city's architectural and cultural landmarks.",
    image: "https://placehold.co/1200x800/8d99ae/ffffff?text=Pune+Heritage+Festival",
    tickets: "Free entry for most events",
    contact: "+91 20 2612 5425",
    website: "www.puneheritage.org"
  },
  "Pune Street Food Festival": {
    name: "Pune Street Food Festival",
    location: "FC Road",
    date: "August 20-22, 2024",
    description: "The Pune Street Food Festival is a celebration of the city's vibrant street food culture. It features stalls offering a variety of local and regional street foods. Visitors can enjoy dishes like misal pav, vada pav, and other Maharashtrian specialties, as well as street foods from across India.",
    image: "https://placehold.co/1200x800/fb8500/ffffff?text=Pune+Street+Food+Festival",
    tickets: "Entry fee with food coupons",
    contact: "+91 20 2567 1234",
    website: "www.punestreetfoodfest.com"
  },
  "Pune Comic Con": {
    name: "Pune Comic Con",
    location: "Phoenix Marketcity",
    date: "April 8-9, 2025",
    description: "Pune Comic Con is a celebration of comics, movies, TV shows, and pop culture. It features artist alleys, merchandise stalls, cosplay competitions, and panel discussions with creators. The event attracts fans of various fandoms and provides a platform for comic artists and creators.",
    image: "https://placehold.co/1200x800/3a86ff/ffffff?text=Pune+Comic+Con",
    tickets: "Paid entry",
    contact: "+91 20 3095 6000",
    website: "www.comicconindia.com/pune"
  },
  "Pune Jazz Festival": {
    name: "Pune Jazz Festival",
    location: "Royal Palms",
    date: "July 15-16, 2025",
    description: "The Pune Jazz Festival features performances by national and international jazz artists. It provides a platform for jazz enthusiasts to enjoy live music in a relaxed setting. The festival includes performances across different jazz styles and fusion music.",
    image: "https://placehold.co/1200x800/023047/ffffff?text=Pune+Jazz+Festival",
    tickets: "Available online",
    contact: "+91 20 2687 3000",
    website: "www.punejazzfestival.com"
  },
  "Pune Tech Summit": {
    name: "Pune Tech Summit",
    location: "Hinjewadi IT Park",
    date: "June 5-7, 2025",
    description: "The Pune Tech Summit brings together technology professionals, startups, and industry leaders. It features talks, workshops, and exhibitions on emerging technologies. The summit covers topics like artificial intelligence, blockchain, cybersecurity, and other tech trends.",
    image: "https://placehold.co/1200x800/0077b6/ffffff?text=Pune+Tech+Summit",
    tickets: "Registration required",
    contact: "+91 20 6612 4500",
    website: "www.punetechsummit.com"
  },
  "Pune Art Exhibition": {
    name: "Pune Art Exhibition",
    location: "Balgandharva Rangmandir",
    date: "May 12-15, 2025",
    description: "The Pune Art Exhibition showcases works by established and emerging artists. It includes paintings, sculptures, installations, and other art forms. The exhibition provides a platform for artists to display their work and engage with art enthusiasts and collectors.",
    image: "https://placehold.co/1200x800/9d4edd/ffffff?text=Pune+Art+Exhibition",
    tickets: "Entry fee",
    contact: "+91 20 2567 2007",
    website: "www.puneartexhibition.com"
  },
  "Pune Yoga Festival": {
    name: "Pune Yoga Festival",
    location: "Osho Ashram",
    date: "June 21, 2025",
    description: "The Pune Yoga Festival celebrates International Yoga Day with workshops, demonstrations, and talks by yoga experts. It promotes the practice of yoga and its benefits for physical and mental well-being. The festival attracts yoga practitioners of all levels, from beginners to advanced.",
    image: "https://placehold.co/1200x800/06d6a0/000000?text=Pune+Yoga+Festival",
    tickets: "Free entry with registration",
    contact: "+91 20 6601 9999",
    website: "www.puneyogafestival.org"
  }
};

export default function EventDetails() {
  const { eventName } = useParams();
  const navigate = useNavigate();
  
  // Decode the URL-encoded event name
  const decodedEventName = decodeURIComponent(eventName);
  
  // Get event details
  const event = eventData[decodedEventName];
  
  // If event not found
  if (!event) {
    return (
      <div className="pt-32 px-4 min-h-screen flex flex-col items-center">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 hover:text-red-600 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-center text-red-600">Event Not Found</h1>
          <p className="text-center mt-4">Sorry, the event you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-32 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Back button */}
        <div className="p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 hover:text-red-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Events
          </button>
        </div>
        
        {/* Event image */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Event details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{event.name}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              📍 {event.location}
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              📅 {event.date}
            </div>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
              🎟️ {event.tickets}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">About the Event</h2>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Contact</h2>
              <p className="text-gray-600">{event.contact}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Website</h2>
              <a 
                href={`https://${event.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {event.website}
              </a>
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={() => navigate(`/event/${encodeURIComponent(decodedEventName)}/register`)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200"
            >
              Register for Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 