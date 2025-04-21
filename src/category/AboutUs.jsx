import React from "react";
import '../src/AboutUs.css';
function AboutUs(){



    return(<div>
       <div>


    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <header
        className="bg-cover bg-center h-96 flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('sinhagad.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Apla Pune</h1>
          <p className="text-2xl">Your Gateway to the Soul of Maharashtra!</p>
        </div>
      </header>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-6">
            At <strong className="font-semibold">Apla Pune</strong>, we are passionate about showcasing the vibrant culture, history, and natural wonders of Pune and its surrounding regions. Born and bred in this beautiful city, we understand its heartbeat and are dedicated to providing unforgettable travel experiences for locals and tourists alike.
          </p>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Whether you're a history buff, a nature lover, or a foodie, Apla Pune is your one-stop destination for curated tours, travel tips, and insider insights into the best that Pune has to offer.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-6">
            Our mission is to promote sustainable and responsible tourism while celebrating Pune’s rich heritage and natural beauty. We aim to create meaningful connections between travelers and the local community, ensuring every journey is enriching and memorable.
          </p>
          <blockquote className="text-center italic text-gray-600">
            "Travel is the only thing you buy that makes you richer."
          </blockquote>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Apla Pune?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Local Expertise</h3>
              <p className="text-gray-700">Our team consists of Pune natives who know the city inside out.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Customized Experiences</h3>
              <p className="text-gray-700">Tailored tours to suit your interests, whether it’s history, adventure, or relaxation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Sustainable Tourism</h3>
              <p className="text-gray-700">We prioritize eco-friendly practices and support local businesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Unbeatable Hospitality</h3>
              <p className="text-gray-700">From start to finish, we ensure a seamless and enjoyable experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            Apla Pune was founded in <strong className="font-semibold">2025</strong> by a group of travel enthusiasts who wanted to share their love for Pune with the world. What started as a small initiative has now grown into a trusted name in the tourism industry, known for its authentic and immersive travel experiences.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="team1.jpg"
                alt="Darshan Yeole - Founder & CEO"
                className="w-48 h-48 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">Darshan Yeole</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="team2.jpg"
                alt="Mohit Namde - Travel Guide"
                className="w-48 h-48 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">Mohit Namde</h3>
              <p className="text-gray-600">Travel Guide</p>
            </div>
            <div className="text-center">
              <img
                src="team3.jpg"
                alt="Prajwal Nawale - Marketing Head"
                className="w-48 h-48 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">Prajwal Nawale</h3>
              <p className="text-gray-600">Marketing Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Us on Our Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We invite you to explore Pune with us and create memories that will last a lifetime. Follow us on social media, subscribe to our newsletter, and stay updated on the latest tours and travel tips.
          </p>
          <form className="flex justify-center mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 rounded-l-lg focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 px-6 py-2 rounded-r-lg hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-400 transition-colors">YouTube</a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Tours</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Blog</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a>
          </div>
          <div className="mb-6">
            <p>Email: info@aplapune.com</p>
            <p>Phone: +91 9579357304</p>
            <p>Address: Department of Computer Science, Fergusson College, Pune</p>
          </div>
          <p className="text-sm text-gray-400">&copy; 2025 Apla Pune. All rights reserved.</p>
        </div>
      </footer>
    </div>
  

</div>
    </div>)
}

export default AboutUs;