import React from "react";

const colleges = [
  {
    name: "Fergusson College",
    image: "https://tse1.mm.bing.net/th?id=OIP.kWq9vR3urVTxhBbpZxL6-AHaE8&pid=Api",
    description: "Established in 1885, Fergusson College is one of Pune's oldest and most prestigious institutions offering various science programs.",
    website: "https://www.fergusson.edu/"
  },
  {
    name: "St. Mira's College for Girls",
    image: "https://tse2.mm.bing.net/th?id=OIP.HGAW9PnvOHz2X3-tOg2C5gHaD2&pid=Api",
    description: "Founded in 1962, St. Mira's College is known for its holistic approach to education and excellence in science programs.",
    website: "https://www.stmirascollegepune.edu.in/"
  },
  {
    name: "Modern College of Arts, Science, and Commerce",
    image: "https://tse4.mm.bing.net/th?id=OIP.SfAJMT0TR_MF1MDIEzKyWgHaD7&pid=Api",
    description: "Established in 1970, Modern College offers diverse science programs and is recognized for its academic rigor.",
    website: "https://www.moderncollegepune.edu.in/"
  },
  {
    name: "Nowrosjee Wadia College",
    image: "https://tse1.mm.bing.net/th?id=OIP.Z0Ku8lnENaxbLs-qoKjX-QHaFx&pid=Api",
    description: "Founded in 1932, Nowrosjee Wadia College is known for its vibrant campus life and strong science department.",
    website: "https://www.nowrosjeewadia.mespune.org/"
  },
  {
    name: "Abasaheb Garware College",
    image: "https://www.garwarecollege.mespune.org/",
    description: "Established in 1945, Abasaheb Garware College offers quality education in science disciplines.",
    website: "https://www.garwarecollege.mespune.org/"
  }
];

const Sci_College_list = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 z-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Top Science Colleges in Pune</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {colleges.map((college, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden p-4">
            <img src={college.image} alt={college.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold mt-4">{college.name}</h2>
            <p className="text-gray-600 mt-2">{college.description}</p>
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sci_College_list;
