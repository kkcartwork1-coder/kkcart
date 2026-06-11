// import {
//   ArrowLeft,
//   ChevronRight,
//   ShoppingBag,
//   MapPin,
//   Heart,
//   Phone,
//   FileText,
//   LogOut,
// } from "lucide-react";

// import { Link, useNavigate } from "react-router-dom";

// export default function Profile() {
//   const navigate = useNavigate();

//   const savedUser = localStorage.getItem("user");
//   const user = savedUser ? JSON.parse(savedUser) : {};

//   const userName =
//     user.name || localStorage.getItem("userName") || "Guest User";

//   const userEmail =
//     user.email ||
//     localStorage.getItem("userEmail") ||
//     "Please login to continue";

//   const userPhoto =
//     user.photo || localStorage.getItem("userPhoto") || "";

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userPhoto");
//     localStorage.removeItem("isAdmin");

//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="bg-orange-500 text-white rounded-b-[30px] px-5 pt-6 pb-8">
//         <div className="flex items-center gap-4">
//           <Link to="/">
//             <ArrowLeft size={28} />
//           </Link>

//           <h2 className="text-xl font-bold">Profile</h2>
//         </div>

//         <div className="flex items-center gap-4 mt-6">
//           {userPhoto ? (
//             <img
//               src={userPhoto}
//               alt={userName}
//               className="w-20 h-20 rounded-full object-cover border-4 border-white"
//             />
//           ) : (
//             <div className="w-20 h-20 rounded-full bg-white text-orange-500 flex items-center justify-center text-3xl font-bold border-4 border-white">
//               {userName.charAt(0).toUpperCase()}
//             </div>
//           )}

//           <div>
//             <h1 className="text-2xl font-bold">{userName}</h1>
//             <p className="text-white/90">{userEmail}</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-4">
       
//         <div className="bg-white rounded-3xl overflow-hidden border shadow-sm">

//   <Item
//     icon={<ShoppingBag size={20} />}
//     text="My Orders"
//     onClick={() => navigate("/orders")}
//   />

//   <Item
//     icon={<MapPin size={20} />}
//     text="Saved Addresses"
//     onClick={() => navigate("/addresses")}
//   />



//   <Item
//     icon={<Phone size={20} />}
//     text="Contact Us"
//     onClick={() => window.open("https://wa.me/919777702735")}
//   />



//   <Item
//     icon={<FileText size={20} />}
//     text="Terms & Conditions"
//     onClick={() => navigate("/terms")}
//   />
// </div>

//         {/* Admin */}
//         {localStorage.getItem("isAdmin") === "true" && (
//           <button
//             onClick={() => navigate("/admin")}
//             className="w-full mt-5 bg-black text-white py-3 rounded-2xl font-semibold"
//           >
//             Admin Dashboard
//           </button>
//         )}

//         {/* Logout */}
//         <button
//           onClick={logout}
//           className="w-full mt-3 bg-red-500 text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>

//         {/* Version */}
//         <p className="text-center text-gray-500 text-sm mt-6">
//           KKCart v1.0.0
//         </p>
//       </div>
//     </div>
//   );
// }



// function Item({ icon, text, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="w-full flex items-center justify-between px-5 py-4 border-b last:border-none hover:bg-gray-50 active:scale-[0.99] transition"
//     >
//       <div className="flex items-center gap-4 text-gray-700">
//         {icon}
//         <span>{text}</span>
//       </div>

//       <ChevronRight size={18} className="text-gray-400" />
//     </button>
//   );
// }


// import { useState, useEffect } from "react";
// import {
//   ArrowLeft,
//   ChevronRight,
//   ShoppingBag,
//   MapPin,
//   Phone,
//   FileText,
//   LogOut,
//   ChevronDown,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Profile() {
//   const navigate = useNavigate();
//   const [showAddresses, setShowAddresses] = useState(false);
//   const [addresses, setAddresses] = useState([]);

//   useEffect(() => {
//     const savedList = JSON.parse(localStorage.getItem("savedAddressesList") || "[]");
//     setAddresses(savedList);
//   }, [showAddresses]);

//   const savedUser = localStorage.getItem("user");
//   const user = savedUser ? JSON.parse(savedUser) : {};

//   const userName = user.name || localStorage.getItem("userName") || "Guest User";
//   const userEmail = user.email || localStorage.getItem("userEmail") || "Please login to continue";
//   const userPhoto = user.photo || localStorage.getItem("userPhoto") || "";

//   const logout = () => {
//     localStorage.clear(); // Clears all auth keys uniformly
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans antialiased pb-12">
      
//       {/* Responsive Top Profile Banner block */}
//       <div className="bg-gradient-to-r from-orange-500 to-[#FC8019] text-white rounded-b-[36px] px-4 sm:px-6 pt-6 pb-8 shadow-md">
//         <div className="max-w-md mx-auto">
//           <div className="flex items-center gap-3">
//             <Link to="/" className="p-1 hover:bg-white/10 rounded-full transition-colors">
//               <ArrowLeft size={26} strokeWidth={2.5} />
//             </Link>
//             <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">Account Profile</h2>
//           </div>

//           <div className="flex items-center gap-4 mt-6">
//             {userPhoto ? (
//               <img
//                 src={userPhoto}
//                 alt={userName}
//                 className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white/30 shadow-sm"
//               />
//             ) : (
//               <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white text-[#FC8019] flex items-center justify-center text-2xl sm:text-3xl font-black shadow-sm shrink-0">
//                 {userName.charAt(0).toUpperCase()}
//               </div>
//             )}

//             <div className="min-w-0">
//               <h1 className="text-xl sm:text-2xl font-black tracking-tight truncate">{userName}</h1>
//               <p className="text-xs sm:text-sm text-orange-50 font-medium truncate mt-0.5">{userEmail}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Settings Body */}
//       <div className="p-4 max-w-md mx-auto mt-4">
//         <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-100">
          
//           <Item
//             icon={<ShoppingBag size={19} className="text-gray-500" />}
//             text="My Orders"
//             onClick={() => navigate("/orders")}
//           />

//           {/* Dynamic Accordion Address Sheet */}
//           <div className="w-full">
//             <button
//               onClick={() => setShowAddresses(!showAddresses)}
//               className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50/60 active:bg-gray-50 transition-all text-left"
//             >
//               <div className="flex items-center gap-4 text-gray-700">
//                 <MapPin size={19} className="text-[#FC8019]" />
//                 <span className="font-bold text-sm sm:text-base text-gray-800">Saved Addresses</span>
//               </div>
//               {showAddresses ? (
//                 <ChevronDown size={18} className="text-gray-400" />
//               ) : (
//                 <ChevronRight size={18} className="text-gray-400" />
//               )}
//             </button>

//             {showAddresses && (
//               <div className="bg-gray-50/50 px-5 py-3.5 space-y-3.5 border-t border-gray-100 animate-slide-down">
//                 {addresses.length > 0 ? (
//                   addresses.map((addr, index) => (
//                     <div key={index} className="flex gap-2.5 items-start text-xs sm:text-sm">
//                       <MapPin size={15} className="text-gray-400 mt-0.5 shrink-0" />
//                       <div className="min-w-0">
//                         <p className="font-black text-[10px] tracking-wider text-orange-600 uppercase">Saved Location #{index + 1}</p>
//                         <p className="text-gray-600 font-medium mt-0.5 leading-relaxed break-words">{addr}</p>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="py-2 text-center">
//                     <p className="text-xs text-gray-400 font-medium italic">No dynamic addresses registered yet.</p>
//                     <p className="text-[11px] text-gray-400 mt-0.5">Use your live location module during checkout!</p>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           <Item
//             icon={<Phone size={19} className="text-gray-500" />}
//             text="Contact Us Support"
//             onClick={() => window.open("https://wa.me/919777702735", "_blank")}
//           />

//           <Item
//             icon={<FileText size={19} className="text-gray-500" />}
//             text="Terms & Conditions"
//             onClick={() => navigate("/terms")}
//           />
//         </div>

//         {/* Admin Dashboard Entry */}
//         {localStorage.getItem("isAdmin") === "true" && (
//           <button
//             onClick={() => navigate("/admin")}
//             className="w-full mt-5 bg-gray-900 hover:bg-black text-white py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wide transition shadow-sm active:scale-[0.99]"
//           >
//             Admin Dashboard
//           </button>
//         )}

//         {/* Logout Control Trigger */}
//         <button
//           onClick={logout}
//           className="w-full mt-3 bg-red-50 text-red-600 hover:bg-red-100 border border-red-100 py-3.5 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 transition active:scale-[0.99]"
//         >
//           <LogOut size={16} strokeWidth={2.5} />
//           Logout Account
//         </button>

//         {/* Footer Meta */}
//         <p className="text-center text-gray-400 font-medium text-xs mt-8 tracking-wide">
//           KKCart Platform • v1.0.0
//         </p>
//       </div>
//     </div>
//   );
// }

// function Item({ icon, text, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50/60 active:bg-gray-50 text-left transition-all group"
//     >
//       <div className="flex items-center gap-4 text-gray-700">
//         <div className="group-hover:scale-105 transition-transform">{icon}</div>
//         <span className="font-bold text-sm sm:text-base text-gray-800">{text}</span>
//       </div>
//       <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
//     </button>
//   );
// }

// import { useState, useEffect } from "react";
// import {
//   ArrowLeft,
//   ChevronRight,
//   ShoppingBag,
//   MapPin,
//   Phone,
//   FileText,
//   LogOut,
//   ChevronDown,
//   ShieldCheck,
//   Sparkles
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Profile() {
//   const navigate = useNavigate();
//   const [showAddresses, setShowAddresses] = useState(false);
//   const [addresses, setAddresses] = useState([]);

//   useEffect(() => {
//     const savedList = JSON.parse(localStorage.getItem("savedAddressesList") || "[]");
//     setAddresses(savedList);
//   }, [showAddresses]);

//   const savedUser = localStorage.getItem("user");
//   const user = savedUser ? JSON.parse(savedUser) : {};

//   const userName = user.name || localStorage.getItem("userName") || "Guest User";
//   const userEmail = user.email || localStorage.getItem("userEmail") || "Please login to continue";
//   const userPhoto = user.photo || localStorage.getItem("userPhoto") || "";

//   const logout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-[#F8F9FA] font-sans antialiased pb-16 select-none">
      
//       {/* 1. TOP RESPONSIVE HEADER BAR NAVIGATION */}
//       <div className="bg-[#1A1A1A] text-white px-4 sm:px-8 py-5 border-b border-white/5 shadow-md">
//         <div className="max-w-6xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <Link to="/" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors">
//               <ArrowLeft size={18} className="stroke-[2.5]" />
//             </Link>
//             <h2 className="text-sm font-black uppercase tracking-widest text-gray-400">
//               Account Dashboard
//             </h2>
//           </div>
//           {/* <span className="text-xs font-black uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-xl border border-orange-500/10">
//             KKCart Premium
//           </span> */}
//         </div>
//       </div>

//       {/* 2. RESPONSIVE MASTER FRAME WORKGRID CORE HOUSING CONTAINER */}
//       <div className="max-w-6xl mx-auto px-4 mt-8">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
//           {/* ========================================================================= */}
//           {/* LEFT CONTAINER LAYER: CINEMATIC IDENTITY USER BIO CARD (SPANS 4 COLS)     */}
//           {/* ========================================================================= */}
//           <div className="md:col-span-4 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] text-white p-6 rounded-[32px] shadow-lg relative overflow-hidden text-center md:text-left flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6 md:min-h-[280px]">
//             {/* Ambient decoration light circles */}
//             <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

//             {userPhoto ? (
//               <img
//                 src={userPhoto}
//                 alt={userName}
//                 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-orange-500 shadow-md z-10 shrink-0"
//               />
//             ) : (
//               <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-500 text-white flex items-center justify-center text-xl sm:text-3xl font-black shadow-md shrink-0 z-10">
//                 {userName.charAt(0).toUpperCase()}
//               </div>
//             )}

//             <div className="min-w-0 flex-1 z-10">
//               <div className="flex items-center justify-center md:justify-start gap-1.5">
//                 <h1 className="text-lg sm:text-xl font-black tracking-tight truncate text-white">
//                   {userName}
//                 </h1>
//                 <Sparkles size={14} className="text-yellow-400 shrink-0" />
//               </div>
//               <p className="text-xs text-gray-400 font-semibold truncate mt-1">
//                 {userEmail}
//               </p>
//             </div>
//           </div>

//           {/* ========================================================================= */}
//           {/* RIGHT CONTAINER LAYER: DYNAMIC SETTINGS CONTEXT MANAGER (SPANS 8 COLS)     */}
//           {/* ========================================================================= */}
//           <div className="md:col-span-8 space-y-4">
            
//             {/* LINKS ACCOUNT SETTINGS CARD CONTAINER HOUSING */}
//             <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
//               <Item
//                 icon={<ShoppingBag size={18} className="text-orange-500" />}
//                 text="My Orders"
//                 subtext="Track active shipments and account purchase history records"
//                 onClick={() => navigate("/orders")}
//               />

//               {/* ACCORDION SAVED LOCATIONS ROW DROPDOWN */}
//               <div className="w-full bg-white">
//                 <button
//                   onClick={() => setShowAddresses(!showAddresses)}
//                   className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/40 active:bg-gray-50/80 transition-all text-left group"
//                 >
//                   <div className="flex items-center gap-4 text-gray-700">
//                     <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
//                       <MapPin size={18} className="stroke-[2.5]" />
//                     </div>
//                     <div>
//                       <span className="font-extrabold text-sm sm:text-base text-gray-800 block">
//                         Saved Locations Addresses
//                       </span>
//                       <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
//                         Manage your house and office delivery coordinates
//                       </span>
//                     </div>
//                   </div>
//                   {showAddresses ? (
//                     <ChevronDown size={16} className="text-gray-400" />
//                   ) : (
//                     <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
//                   )}
//                 </button>

//                 {showAddresses && (
//                   <div className="bg-gray-50/50 px-6 py-4 space-y-3 border-t border-gray-100/50">
//                     {addresses.length > 0 ? (
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         {addresses.map((addr, index) => (
//                           <div key={index} className="flex gap-3 items-start bg-white border border-gray-100 p-3 rounded-2xl shadow-sm">
//                             <div className="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
//                               <MapPin size={12} className="text-orange-500" />
//                             </div>
//                             <div className="min-w-0">
//                               <p className="font-black text-[9px] tracking-widest text-orange-600 uppercase">
//                                 Location #{index + 1}
//                               </p>
//                               <p className="text-gray-600 font-semibold text-xs mt-0.5 leading-relaxed break-words">
//                                 {addr}
//                               </p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="py-4 text-center space-y-1">
//                         <p className="text-xs text-gray-400 font-extrabold italic">
//                           No addresses saved yet.
//                         </p>
//                         <p className="text-[10px] text-gray-400 font-medium">
//                           Your saved checkout locations will appear here automatically.
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <Item
//                 icon={<Phone size={18} className="text-emerald-500" />}
//                 text="Contact Us Support"
//                 subtext="24/7 continuous instant WhatsApp help desk support channels"
//                 onClick={() => window.open("https://wa.me/919777702735", "_blank")}
//               />

//               <Item
//                 icon={<FileText size={18} className="text-blue-500" />}
//                 text="Terms & Conditions"
//                 subtext="Read system legal usage documentation parameters guidelines"
//                 onClick={() => navigate("/terms")}
//               />
//             </div>

//             {/* ACTION TRIGGERS LOWER GRID */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
//               {/* ADMIN DASHBOARD SHORTCUT CARD BUTTON */}
//               {localStorage.getItem("isAdmin") === "true" ? (
//                 <button
//                   onClick={() => navigate("/admin")}
//                   className="w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition shadow-md active:scale-[0.99] flex items-center justify-center gap-2 border border-gray-800"
//                 >
//                   <ShieldCheck size={14} className="text-orange-400" />
//                   <span>Admin Dashboard</span>
//                 </button>
//               ) : (
//                 <div className="hidden sm:block" /> // Empty placeholder block to keep layout spacing balances clean
//               )}

//               {/* LOGOUT APP TRIGGER ACTION */}
//               <button
//                 onClick={logout}
//                 className="w-full bg-red-50 text-red-600 hover:bg-red-100 border border-red-100/50 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition active:scale-[0.99]"
//               >
//                 <LogOut size={14} className="stroke-[2.5]" />
//                 <span>Logout Account</span>
//               </button>
//             </div>

//             {/* PLATFORM METADATA PLATFORM DATA */}
//             <p className="text-center md:text-right text-gray-400 font-bold text-[9px] uppercase tracking-widest pt-6 px-1">
//               KKCart Platform • Version 1.0.0
//             </p>

//           </div>

//         </div>
//       </div>

//     </div>
//   );
// }

// function Item({ icon, text, subtext, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/40 active:bg-gray-50/80 text-left transition-all group"
//     >
//       <div className="flex items-center gap-4 text-gray-700">
//         <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
//           {icon}
//         </div>
//         <div>
//           <span className="font-extrabold text-sm sm:text-base text-gray-800 block">
//             {text}
//           </span>
//           <span className="text-[10px] sm:text-xs text-gray-400 font-medium block mt-0.5">
//             {subtext}
//           </span>
//         </div>
//       </div>
//       <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
//     </button>
//   );
// }

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronRight,
  ShoppingBag,
  MapPin,
  Phone,
  FileText,
  LogOut,
  ChevronDown,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [showAddresses, setShowAddresses] = useState(false);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("savedAddressesList") || "[]");
    setAddresses(savedList);
  }, [showAddresses]);

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : {};

  const userName = user.name || localStorage.getItem("userName") || "Guest User";
  const userEmail = user.email || localStorage.getItem("userEmail") || "Please login to continue";
  const userPhoto = user.photo || localStorage.getItem("userPhoto") || "";

  // FIXED: Check if the photo URL string is completely valid or a broken Google placeholder path
  const isPhotoValid = userPhoto && 
    userPhoto.trim() !== "" && 
    !userPhoto.includes("googleusercontent.com/profile/picture/0");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans antialiased pb-16 select-none">
      
      {/* 1. TOP RESPONSIVE HEADER BAR NAVIGATION */}
      <div className="bg-[#1A1A1A] text-white px-4 sm:px-8 py-5 border-b border-white/5 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 transition-colors">
              <ArrowLeft size={18} className="stroke-[2.5]" />
            </Link>
            <h2 className="text-sm font-black uppercase tracking-widest text-gray-400">
              Account Dashboard
            </h2>
          </div>
        </div>
      </div>

      {/* 2. RESPONSIVE MASTER FRAME WORKGRID CORE HOUSING CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT CONTAINER LAYER: CINEMATIC IDENTITY USER BIO CARD (SPANS 4 COLS)     */}
          {/* ========================================================================= */}
          <div className="md:col-span-4 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] text-white p-6 rounded-[32px] shadow-lg relative overflow-hidden text-center md:text-left flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6 md:min-h-[280px]">
            {/* Ambient decoration light circles */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

            {/* FIXED: Conditional Rendering protects layout from displaying broken cross-origin frames */}
            {isPhotoValid ? (
              <img
                src={userPhoto}
                alt={userName}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl object-cover border-2 border-orange-500 shadow-md z-10 shrink-0"
                onError={(e) => {
                  // Double protection fallback framework if the profile link fails runtime execution
                  e.currentTarget.style.display = 'none';
                  const fallbackAvatar = document.getElementById("avatar-letter-fallback");
                  if (fallbackAvatar) fallbackAvatar.classList.remove("hidden");
                }}
              />
            ) : null}

            {/* Text letter icon block container triggers if the photo is missing or invalid */}
            <div 
              id="avatar-letter-fallback"
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-500 text-white flex items-center justify-center text-xl sm:text-3xl font-black shadow-md shrink-0 z-10 ${isPhotoValid ? 'hidden' : ''}`}
            >
              {userName.charAt(0).toUpperCase()}
            </div>

            <div className="min-w-0 flex-1 z-10 text-left md:text-left">
              <div className="flex items-center gap-1.5 justify-start">
                <h1 className="text-lg sm:text-xl font-black tracking-tight truncate text-white">
                  {userName}
                </h1>
                <Sparkles size={14} className="text-yellow-400 shrink-0" />
              </div>
              <p className="text-xs text-gray-400 font-semibold truncate mt-1">
                {userEmail}
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT CONTAINER LAYER: DYNAMIC SETTINGS CONTEXT MANAGER (SPANS 8 COLS)     */}
          {/* ========================================================================= */}
          <div className="md:col-span-8 space-y-4">
            
            {/* LINKS ACCOUNT SETTINGS CARD CONTAINER HOUSING */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
              <Item
                icon={<ShoppingBag size={18} className="text-orange-500" />}
                text="My Orders"
                subtext="Track active shipments and account purchase history records"
                onClick={() => navigate("/orders")}
              />

              {/* ACCORDION SAVED LOCATIONS ROW DROPDOWN */}
              <div className="w-full bg-white">
                <button
                  type="button"
                  onClick={() => setShowAddresses(!showAddresses)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/40 active:bg-gray-50/80 transition-all text-left group"
                >
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                      <MapPin size={18} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-extrabold text-sm sm:text-base text-gray-800 block">
                        Saved Locations Addresses
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                        Manage your house and office delivery coordinates
                      </span>
                    </div>
                  </div>
                  {showAddresses ? (
                    <ChevronDown size={16} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  )}
                </button>

                {showAddresses && (
                  <div className="bg-gray-50/50 px-6 py-4 space-y-3 border-t border-gray-100/50">
                    {addresses.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {addresses.map((addr, index) => (
                          <div key={index} className="flex gap-3 items-start bg-white border border-gray-100 p-3 rounded-2xl shadow-sm">
                            <div className="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                              <MapPin size={12} className="text-orange-500" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-black text-[9px] tracking-widest text-orange-600 uppercase">
                                Location #{index + 1}
                              </p>
                              <p className="text-gray-600 font-semibold text-xs mt-0.5 leading-relaxed break-words">
                                {addr}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-4 text-center space-y-1">
                        <p className="text-xs text-gray-400 font-extrabold italic">
                          No addresses saved yet.
                        </p>
                        <p className="text-[10px] text-gray-400 font-medium">
                          Your saved checkout locations will appear here automatically.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Item
                icon={<Phone size={18} className="text-emerald-500" />}
                text="Contact Us Support"
                subtext="24/7 continuous instant WhatsApp help desk support channels"
                onClick={() => window.open("https://wa.me/919777702735", "_blank")}
              />

              <Item
                icon={<FileText size={18} className="text-blue-500" />}
                text="Terms & Conditions"
                subtext="Read system legal usage documentation parameters guidelines"
                onClick={() => navigate("/TermAndConditions")}
              />
            </div>

            {/* ACTION TRIGGERS LOWER GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* ADMIN DASHBOARD SHORTCUT CARD BUTTON */}
              {localStorage.getItem("isAdmin") === "true" ? (
                <button
                  type="button"
                  onClick={() => navigate("/admin")}
                  className="w-full bg-gray-900 hover:bg-black text-white py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition shadow-md active:scale-[0.99] flex items-center justify-center gap-2 border border-gray-800"
                >
                  <ShieldCheck size={14} className="text-orange-400" />
                  <span>Admin Dashboard</span>
                </button>
              ) : (
                <div className="hidden sm:block" /> 
              )}

              {/* LOGOUT APP TRIGGER ACTION */}
              <button
                type="button"
                onClick={logout}
                className="w-full bg-red-50 text-red-600 hover:bg-red-100 border border-red-100/50 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition active:scale-[0.99]"
              >
                <LogOut size={14} className="stroke-[2.5]" />
                <span>Logout Account</span>
              </button>
            </div>

            {/* PLATFORM METADATA PLATFORM DATA */}
            <p className="text-center md:text-right text-gray-400 font-bold text-[9px] uppercase tracking-widest pt-6 px-1">
              KKCart Platform • Version 1.0.0
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}

function Item({ icon, text, subtext, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50/40 active:bg-gray-50/80 text-left transition-all group"
    >
      <div className="flex items-center gap-4 text-gray-700">
        <div className="w-9 h-9 rounded-xl bg-gray-50 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
          {icon}
        </div>
        <div>
          <span className="font-extrabold text-sm sm:text-base text-gray-800 block">
            {text}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-400 font-medium block mt-0.5">
            {subtext}
          </span>
        </div>
      </div>
      <ChevronRight size={16} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
    </button>
  );
}