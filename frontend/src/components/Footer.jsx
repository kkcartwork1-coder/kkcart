import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaCode } from "react-icons/fa";
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
          
          {/* COLUMN 1: BRAND PLATFORM */}
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
                href="https://www.instagram.com/kkcart.store/"
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

          {/* COLUMN 2: CORPORATE ADVISORY NODES */}
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-semibold text-gray-600 tracking-wide select-none">
          <div className="space-y-3 text-center sm:text-left">
            <div>
              © 2026 KKCart Operational Suite. All Rights Reserved.
            </div>
            
            {/* DEVELOPER BADGE */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 font-bold">
              <FaCode size={12} className="text-orange-500 animate-pulse" />
              <span>Architected & Developed by</span>
              <a 
                href="https://www.instagram.com/_.__abhijit__._/" 
                target="_blank" 
                rel="noreferrer"
                className="font-black text-white tracking-wider flex items-center gap-1.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 px-3 py-1 rounded-xl hover:border-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] group"
              >
                <span>Abhijit Nayak</span>
                <FaInstagram size={12} className="text-orange-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* ⚡ UPDATED: LINK REDIRECTION PADS FOR LAUNCH ROUTING */}
          <div className="flex gap-6 text-gray-500">
            <Link 
              to="/TermAndConditions" 
              className="hover:text-gray-400 transition cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/TermAndConditions" 
              className="hover:text-gray-400 transition cursor-pointer"
            >
              Terms of Delivery
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}