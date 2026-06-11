// import { Mail, MapPin, Phone } from "lucide-react";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-[#111] text-white mt-10">
//       <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
//         <div>
//           <h2 className="text-4xl font-black text-orange-500">KK<span  className="text-4xl font-black text-green-600">Cart</span></h2>
//           <p className="text-gray-400 mt-4">
//             Grocery and food delivery from your trusted local store.
//           </p>

//           <div className="flex gap-3 mt-5">
//             <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
//               <FaFacebookF size={18} />
//             </span>
//             <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
//               <FaInstagram size={18} />
//             </span>
//           </div>
//         </div>

//         <div>
//           <h3 className="font-black text-lg mb-4">Company</h3>
//           <p className="text-gray-400 mb-2">About Us</p>
//           <p className="text-gray-400 mb-2">Contact Us</p>
//           <p className="text-gray-400 mb-2">Privacy Policy</p>
//           <p className="text-gray-400">Terms & Conditions</p>
//         </div>

//         <div>
//           <h3 className="font-black text-lg mb-4">Categories</h3>
//           <p className="text-gray-400 mb-2">Grocery</p>
//           <p className="text-gray-400 mb-2">Food</p>
//           <p className="text-gray-400 mb-2">Meat & Fish</p>
//           <p className="text-gray-400">Sweets</p>
//         </div>

//         <div>
//           <h3 className="font-black text-lg mb-4">Support</h3>

//           <div className="flex gap-3 text-gray-400 mb-3">
//             <MapPin size={18} />
//             <p>Kania, Kakatput, Odisha</p>
//           </div>

//           <div className="flex gap-3 text-gray-400 mb-3">
//             <Phone size={18} />
//             <p>+91 97777 02735</p>
//           </div>

//           <div className="flex gap-3 text-gray-400">
//             <Mail size={18} />
//             <p>kkcart.work1@gmail.com</p>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10 py-5 text-center text-gray-500 text-sm">
//         © 2026 KKCart. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0B] text-[#E0E0E0] mt-16 border-t border-white/[0.04] font-sans antialiased relative">
      
      {/* SCROLL TO TOP FLOATING ACTION BUTTON */}
      <div className="absolute -top-6 right-8">
        <button
          onClick={scrollToTop}
          type="button"
          className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform active:scale-95 group"
          title="Scroll to Top"
        >
          <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5 stroke-[3]" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12 border-b border-white/[0.04]">
          
          {/* COLUMN 1: BRAND PLATFORM (SPANS 5 COLUMNS) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-1">
              <h2 className="text-3xl font-black text-orange-500 tracking-tight select-none">
                KK<span className="text-3xl font-black text-green-600">Cart</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 font-medium max-w-sm leading-relaxed">
              Experience the future of hyper-local grocery and micro-delivery operations. Built for instant freshness, tracked in real-time, and dropping straight to your doorstep in minutes.
            </p>
            
            {/* SOCIAL INTERACTIONS CONTAINER */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 bg-white/[0.03] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] text-gray-400 hover:text-white rounded-xl flex items-center justify-center border border-white/[0.06] hover:border-transparent transition-all duration-300 shadow-sm active:scale-95 group"
                title="Follow us on Instagram"
              >
                <FaInstagram size={20} className="transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href="https://wa.me/919777702735"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 bg-white/[0.03] hover:bg-emerald-600 text-gray-400 hover:text-white rounded-xl flex items-center justify-center border border-white/[0.06] hover:border-transparent transition-all duration-300 shadow-sm active:scale-95 group"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp size={20} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          
          {/* COLUMN 2: CORPORATE ADVISORY NODES (SPANS 4 COLUMNS) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest border-l-2 border-orange-500 pl-2.5">
              Support Terminal
            </h3>
            <div className="space-y-3.5 text-sm font-medium text-gray-400">
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">Kania, Bangurigaon, Odisha.</p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone size={18} className="text-orange-500 shrink-0" />
                <a href="tel:+919777702735" className="hover:text-white transition">+91 97777 02735</a>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} className="text-orange-500 shrink-0" />
                <a href="mailto:kkcart.work1@gmail.com" className="hover:text-white transition">kkcart.work1@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA CLOSURE BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-600 tracking-wide select-none">
          <div>
            © 2026 KKCart Operational Suite. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-gray-500">
            <span className="hover:text-gray-400 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer transition">Terms of Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}