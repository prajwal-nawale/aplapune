import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section - About */}
          <div>
            <h2 className="text-lg font-semibold">About aplaPune</h2>
            <p className="text-gray-400 text-sm mt-2">
              Explore the best historical places, forts, temples, and food experiences in Pune. Discover hidden gems and local culture.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="text-gray-400 text-sm mt-2 space-y-2">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/tourism" className="hover:text-gray-200">Tourism</a></li>
              <li><a href="/events" className="hover:text-gray-200">Events</a></li>
              <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
              <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} aplaPune. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
