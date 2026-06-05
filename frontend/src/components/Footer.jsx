import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl font-black text-orange-500">KK<span  className="text-4xl font-black text-green-600">Cart</span></h2>
          <p className="text-gray-400 mt-4">
            Grocery and food delivery from your trusted local store.
          </p>

          <div className="flex gap-3 mt-5">
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <FaFacebookF size={18} />
            </span>
            <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <FaInstagram size={18} />
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-black text-lg mb-4">Company</h3>
          <p className="text-gray-400 mb-2">About Us</p>
          <p className="text-gray-400 mb-2">Contact Us</p>
          <p className="text-gray-400 mb-2">Privacy Policy</p>
          <p className="text-gray-400">Terms & Conditions</p>
        </div>

        <div>
          <h3 className="font-black text-lg mb-4">Categories</h3>
          <p className="text-gray-400 mb-2">Grocery</p>
          <p className="text-gray-400 mb-2">Food</p>
          <p className="text-gray-400 mb-2">Meat & Fish</p>
          <p className="text-gray-400">Sweets</p>
        </div>

        <div>
          <h3 className="font-black text-lg mb-4">Support</h3>

          <div className="flex gap-3 text-gray-400 mb-3">
            <MapPin size={18} />
            <p>Kania, Kakatput, Odisha</p>
          </div>

          <div className="flex gap-3 text-gray-400 mb-3">
            <Phone size={18} />
            <p>+91 97777 02735</p>
          </div>

          <div className="flex gap-3 text-gray-400">
            <Mail size={18} />
            <p>kkcart.work1@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-500 text-sm">
        © 2026 KKCart. All rights reserved.
      </div>
    </footer>
  );
}