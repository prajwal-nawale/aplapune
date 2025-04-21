import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Detailed facts data with descriptions
const factsData = {
  "Pune is known as the 'Oxford of the East'": {
    title: "Pune is known as the 'Oxford of the East'",
    description: "Pune has earned this prestigious nickname due to its rich educational heritage and the presence of numerous renowned educational institutions. The city hosts over 100 educational institutes and nine universities, making it a major educational hub in India. This concentration of quality education has attracted students from all over India and abroad, similar to how Oxford attracts global talent.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Educational+Hub",
    keyPoints: [
      "Home to prestigious institutions like IUCAA, IISER, and NCL",
      "Over 100 educational institutes and 9 universities",
      "Large international student population",
      "Rich history of academic excellence",
      "Major research and development center"
    ]
  },
  "Pune was once the center of power of the Maratha Empire": {
    title: "Pune was once the center of power of the Maratha Empire",
    description: "During the 18th century, Pune served as the political center of the Maratha Empire under the Peshwa rulers. The city's most iconic symbol of this era is the Shaniwar Wada, a massive palace-fort built in 1732. The Maratha Empire's influence spread across much of India from Pune, making it one of the most significant political and cultural centers of its time.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Maratha+Empire",
    keyPoints: [
      "Capital of Peshwa rule from 1713 to 1818",
      "Home to the historic Shaniwar Wada",
      "Center of Maratha culture and traditions",
      "Important role in Indian independence movement",
      "Preserved many historical artifacts and structures"
    ]
  },
  "Pune has the highest number of two-wheelers in India": {
    title: "Pune has the highest number of two-wheelers in India",
    description: "Pune holds the record for having the highest number of two-wheelers per capita in India. This phenomenon is attributed to the city's large student population, growing IT sector, and the practicality of two-wheelers in navigating Pune's streets. The city's roads and infrastructure have evolved to accommodate this unique aspect of urban mobility.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Two+Wheelers",
    keyPoints: [
      "Over 3 million registered two-wheelers",
      "Major two-wheeler manufacturing hub",
      "Extensive network of two-wheeler friendly roads",
      "Popular among students and young professionals",
      "Significant impact on local transportation culture"
    ]
  },
  "Aga Khan Palace in Pune is a historical landmark": {
    title: "Aga Khan Palace in Pune is a historical landmark",
    description: "The Aga Khan Palace is a significant historical landmark in Pune that played a vital role during India's freedom struggle. Built in 1892, it served as a prison for Mahatma Gandhi, his wife Kasturba Gandhi, and his secretary Mahadev Desai during the Quit India Movement. Today, it houses a memorial on Gandhi's life and houses some of his personal belongings.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Aga+Khan+Palace",
    keyPoints: [
      "Built in 1892 by Sultan Muhammad Shah Aga Khan III",
      "Served as a prison for Mahatma Gandhi during 1942-44",
      "Kasturba Gandhi and Mahadev Desai passed away here",
      "Declared as a monument of national importance",
      "Houses a comprehensive Gandhi memorial"
    ]
  },
  "Pune is home to the National Defence Academy": {
    title: "Pune is home to the National Defence Academy",
    description: "Pune hosts the prestigious National Defence Academy (NDA), the joint services academy of the Indian Armed Forces. Located at Khadakwasla, it is the first tri-service academy in the world where cadets of all three services - Army, Navy, and Air Force - train together before going for specialized training. The sprawling campus spans over 7,000 acres and has trained generations of military leaders.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=National+Defence+Academy",
    keyPoints: [
      "Established in 1954 as the first tri-service academy in the world",
      "Sprawling 7,000-acre campus at Khadakwasla",
      "3-year training program for cadets",
      "Sudan Block is the iconic main building of NDA",
      "Rigorous training in academics, sports, and military tactics"
    ]
  },
  "Shaniwar Wada was once the seat of the Peshwas": {
    title: "Shaniwar Wada was once the seat of the Peshwas",
    description: "Shaniwar Wada, constructed in 1732, served as the seat of the Peshwas of the Maratha Empire until 1818. This magnificent fortress was built by Bajirao I and became the center of Indian politics in the 18th century. Though most of the structure was destroyed in an 1828 fire, the remaining fortification walls, gates, and the foundation of the original building still stand as a testament to Maratha architecture and power.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Shaniwar+Wada",
    keyPoints: [
      "Built in 1732 by Bajirao I, the first Peshwa",
      "Famous for its architectural excellence and defensive design",
      "The Delhi Darwaza is the main gate facing north",
      "Subject of many local legends and ghost stories",
      "Major tourist attraction and cultural heritage site"
    ]
  },
  "Pune is the 9th most populous city in India": {
    title: "Pune is the 9th most populous city in India",
    description: "Pune ranks as the 9th most populous city in India and the second largest in Maharashtra after Mumbai. With a population of over 7 million in its metropolitan area, the city has experienced rapid growth due to industrialization, education, and employment opportunities. This growth has transformed Pune from a quiet retirement town to a bustling metropolitan city with a diverse population from across India.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Populous+City",
    keyPoints: [
      "Population of over 7 million in the metropolitan area",
      "Known as 'Pensioners' Paradise' historically",
      "Major migration hub for employment seekers",
      "Cosmopolitan population with diverse cultural backgrounds",
      "Rapid urban expansion in recent decades"
    ]
  },
  "Pune's Dagdusheth Halwai Ganpati Temple is over 100 years old": {
    title: "Pune's Dagdusheth Halwai Ganpati Temple is over 100 years old",
    description: "The Dagdusheth Halwai Ganpati Temple, established in 1893, is one of the most famous Ganpati temples in Maharashtra. Founded by Dagdusheth Halwai, a sweet vendor, the temple has become a significant cultural and religious landmark. The main attraction is the 7.5-foot-tall Ganesh idol, adorned with gold ornaments. During Ganesh Chaturthi, the temple sees thousands of devotees and is a central part of Pune's celebrations.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Dagdusheth+Temple",
    keyPoints: [
      "Founded in 1893 by Dagdusheth Halwai",
      "Features a 7.5-foot Ganesh idol adorned with gold",
      "Major pilgrimage site during Ganesh Chaturthi",
      "Temple trust engages in various social and charitable activities",
      "Significant cultural and religious landmark in Maharashtra"
    ]
  },
  "Pune has one of India's oldest universities - Savitribai Phule Pune University": {
    title: "Pune has one of India's oldest universities - Savitribai Phule Pune University",
    description: "Savitribai Phule Pune University, established in 1949, is one of the premier educational institutions in India. Named after the pioneering social reformer Savitribai Phule, the university was earlier known as the University of Poona. It has a sprawling 411-acre campus and houses 46 academic departments. The university is known for its research contributions and has been ranked among the top universities in India.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Pune+University",
    keyPoints: [
      "Established in 1949 and renamed in 2014 to honor Savitribai Phule",
      "Sprawling 411-acre campus with historic buildings",
      "Houses 46 academic departments and numerous research centers",
      "Affiliated with over 800 colleges",
      "Known for strong programs in sciences, humanities, and engineering"
    ]
  },
  "The first women's university in India was established in Pune": {
    title: "The first women's university in India was established in Pune",
    description: "SNDT Women's University, the first women's university in India and South-East Asia, was founded in Pune in 1916 by Maharshi Dhondo Keshav Karve. The university was established with the aim of providing higher education opportunities to women during a time when female education was not prioritized. Though it later moved its headquarters to Mumbai, its origin in Pune highlights the city's progressive stance on education and women's empowerment.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Women+University",
    keyPoints: [
      "Founded in 1916 by social reformer Maharshi Dhondo Keshav Karve",
      "Started with just five students and has grown to serve thousands",
      "Named after Shrimati Nathibai Damodar Thackersey, a major donor",
      "Pioneered women's education during pre-independence India",
      "Offers diverse programs from undergraduate to doctoral levels"
    ]
  },
  "Pune is known for its pleasant climate throughout the year": {
    title: "Pune is known for its pleasant climate throughout the year",
    description: "Pune enjoys a pleasant climate throughout the year, earning it the reputation of a hill station on the Deccan plateau. The city's elevation of about 560 meters above sea level contributes to its moderate temperatures. Summers are warm but not extreme, monsoons are moderate, and winters are mild and pleasant. This favorable climate has historically made Pune a preferred retirement destination and contributes to its quality of life.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Pleasant+Climate",
    keyPoints: [
      "Elevation of 560 meters above sea level moderates temperatures",
      "Temperatures typically range from 15-38°C throughout the year",
      "Moderate rainfall during monsoon season (June-September)",
      "Cool winters with minimum temperatures rarely below 8°C",
      "Historically known as a retirement haven due to its climate"
    ]
  },
  "Sinhagad Fort near Pune has historical significance from the Maratha era": {
    title: "Sinhagad Fort near Pune has historical significance from the Maratha era",
    description: "Sinhagad Fort, located about 25 km southwest of Pune, is a historical fortress with significant importance in Maratha history. Previously known as 'Kondhana', the fort witnessed the Battle of Sinhagad in 1670, where Tanaji Malusare, a Maratha warrior, sacrificed his life capturing the fort for Shivaji Maharaj. The fort sits at an elevation of 1,312 meters and offers panoramic views of the surrounding landscape.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Sinhagad+Fort",
    keyPoints: [
      "Site of the famous Battle of Sinhagad in 1670",
      "Renamed from 'Kondhana' to 'Sinhagad' (Lion's Fort) by Shivaji",
      "Strategically important fort controlling a major trade route",
      "Features ancient temples, a memorial to Tanaji Malusare",
      "Popular trekking destination with historical significance"
    ]
  },
  "Pune is a major IT and automobile manufacturing hub": {
    title: "Pune is a major IT and automobile manufacturing hub",
    description: "Pune has emerged as a significant IT and automobile manufacturing hub, often called the 'Detroit of India'. The city hosts numerous IT parks including Hinjewadi IT Park, one of India's largest. Major automobile manufacturers like Bajaj Auto, Tata Motors, and Mahindra & Mahindra have established manufacturing facilities in the region. This industrial growth has transformed Pune's economy and created numerous employment opportunities.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=IT+and+Auto+Hub",
    keyPoints: [
      "Home to Hinjewadi IT Park, one of India's largest IT parks",
      "Major presence of IT companies like Infosys, TCS, and Wipro",
      "Manufacturing facilities of Bajaj, Tata Motors, and Mercedes-Benz",
      "Over 4,000 active manufacturing units in and around the city",
      "Growing startup ecosystem and technology innovation centers"
    ]
  },
  "The German Bakery in Koregaon Park is a popular landmark": {
    title: "The German Bakery in Koregaon Park is a popular landmark",
    description: "The German Bakery in Koregaon Park is an iconic culinary landmark in Pune that has been serving international cuisine since the 1980s. Popular among locals, tourists, and expatriates, the bakery is known for its European breads, pastries, and multicultural menu. Though it faced a setback after the 2010 bombing, it was rebuilt and continues to be a significant part of Pune's food culture and a gathering place for diverse communities.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=German+Bakery",
    keyPoints: [
      "Established in the 1980s as one of Pune's first international bakeries",
      "Located near the Osho International Meditation Resort",
      "Reconstructed and reopened after the 2010 terrorist attack",
      "Known for its diverse menu featuring global cuisines",
      "Popular meeting spot for locals, tourists, and expatriates"
    ]
  },
  "Pune hosts the prestigious Pune International Marathon annually": {
    title: "Pune hosts the prestigious Pune International Marathon annually",
    description: "The Pune International Marathon, established in 1983, is one of India's oldest marathon events. Held annually in December, the marathon attracts participants from around the world, including elite runners from African nations known for their marathon prowess. The event includes various categories like the full marathon, half marathon, and smaller runs for different age groups, making it accessible to both professional athletes and amateur runners.",
    image: "https://placehold.co/1200x800/1d3557/ffffff?text=Pune+Marathon",
    keyPoints: [
      "Established in 1983 as one of India's first international marathons",
      "Usually held on the first Sunday of December",
      "Attracts elite runners from Kenya, Ethiopia, and other countries",
      "Route showcases Pune's landmarks and scenic areas",
      "Promotes fitness and sports culture in the city"
    ]
  }
};

export default function RandomFactDetails() {
  const { factId } = useParams();
  const navigate = useNavigate();
  
  // Decode the URL-encoded fact ID
  const decodedFactId = decodeURIComponent(factId);
  
  // Get fact details
  const fact = factsData[decodedFactId];
  
  // If fact not found
  if (!fact) {
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
          <h1 className="text-2xl font-bold text-center text-red-600">Fact Not Found</h1>
          <p className="text-center mt-4">Sorry, the fact you're looking for doesn't exist or has been removed.</p>
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
            Back
          </button>
        </div>
        
        {/* Fact image */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img 
            src={fact.image} 
            alt={fact.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Fact details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{fact.title}</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">About this Fact</h2>
            <p className="text-gray-600 leading-relaxed">{fact.description}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Key Points</h2>
            <ul className="list-disc list-inside space-y-2">
              {fact.keyPoints.map((point, index) => (
                <li key={index} className="text-gray-600">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 