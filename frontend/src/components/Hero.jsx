// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Clock3,
//   Clock,
//   ShieldCheck,
//   Star,
//   Truck,
//   Wallet,
// } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// import "swiper/css";
// import "swiper/css/pagination";

// import { Home, User, ChevronDown } from "lucide-react";
// import { useState } from "react";

// import { useEffect } from "react";
// import API from "../api"; // your API instance



// export default function Hero() {
//   const navigate = useNavigate();

//   const [activeTab, setActiveTab] = useState("kitchen");
//   const { cart, addToCart, decreaseQty } =
//     useContext(CartContext);



//   const [fastFoods, setFastFoods] = useState([]);
//   useEffect(() => {
//     fetchFastFoods();
//   }, []);

//   const fetchFastFoods = async () => {
//     try {
//       const res = await API.get("/products");

//       const foods = res.data.filter(
//         (item) =>
//           item.type === "food" ||
//           item.category === "Fast Food" ||
//           item.section === "food"
//       );

//       setFastFoods(foods);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const offers = [
//     {
//       id: 1,
//       title: "FLAT ₹125 OFF",
//       subtitle: "On food orders above ₹299",
//       emoji: "🍔",
//       bg: "from-orange-500 to-red-500",
//     },
//     {
//       id: 2,
//       title: "10 MIN DELIVERY",
//       subtitle: "Fresh groceries from KKMart",
//       emoji: "🛒",
//       bg: "from-green-500 to-emerald-600",
//     },
//     {
//       id: 3,
//       title: "BUY 1 GET 1",
//       subtitle: "Selected fast food items",
//       emoji: "🍕",
//       bg: "from-purple-500 to-indigo-600",
//     },
//   ];


//   return (

//     <section className="bg-[#fff8f1] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-5 py- md:py-14">
//         <div className="flex gap-4 overflow-x-auto scrollbar-hide py-3 px-4">

//           {/* KKKitchen */}
//           <button
//             onClick={() => navigate("/food")}
//             className="
//       relative
//       min-w-[160px]
//       h-[120px]
//       rounded-[32px]
//       bg-gradient-to-br from-orange-500 via-orange-600 to-red-500
//       text-white
//       shadow-xl
//       flex flex-col items-center justify-center
//       overflow-hidden
//       hover:scale-105
//       transition-all duration-300
//     "
//           >
//             <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-bold">
//               HOT FOOD
//             </div>

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/5787/5787016.png"
//               alt="KKKitchen"
//               className="w-16 h-16 object-contain drop-shadow-lg"
//             />

//             <h3 className="mt-2 text-lg font-black">
//               KKKitchen
//             </h3>

//             <p className="text-xs text-white/80">
//               Fresh & Fast
//             </p>

//             <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/10 rounded-full" />
//           </button>

//           {/* KKMart */}
//           <button
//             onClick={() => navigate("/grocery")}
//             className="
//       relative
//       min-w-[160px]
//       h-[120px]
//       rounded-[32px]
//       bg-gradient-to-br from-green-500 via-emerald-500 to-green-700
//       text-white
//       shadow-xl
//       flex flex-col items-center justify-center
//       overflow-hidden
//       hover:scale-105
//       transition-all duration-300
//     "
//           >
//             <div className="absolute top-3 left-3 bg-white text-green-700 px-3 py-1 rounded-full text-[11px] font-black">
//               10 MIN
//             </div>

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
//               alt="KKMart"
//               className="w-16 h-16 object-contain drop-shadow-lg"
//             />

//             <h3 className="mt-2 text-lg font-black">
//               KKMart
//             </h3>

//             <p className="text-xs text-white/80">
//               Grocery Delivery
//             </p>

//             <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/10 rounded-full" />
//           </button>

//         </div>

//         <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={15}
//         slidesPerView={1}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 5000,
//           disableOnInteraction: false,
//         }}
//         className="rounded-[32px] overflow-hidden"
//       >

//         {/* SLIDE 1: FOOD SPECIAL */}
//         <SwiperSlide>
//           <div className="h-[220px] bg-gradient-to-r from-orange-500 to-red-500 p-6 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group">
//             {/* Left Side: Text Details */}
//             <div className="space-y-2 z-10 max-w-[60%] sm:max-w-xl">
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//                 Limited Offer
//               </span>
//               <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mt-1">
//                 FLAT ₹125 OFF
//               </h2>
//               <p className="text-white/90 text-xs sm:text-base font-medium">
//                 On delicious hot food orders above ₹299
//               </p>
//             </div>

//             {/* Right Side: Professional Food Image */}
//             <div className="absolute right-0 bottom-0 h-full w-[45%] md:w-[40%] flex items-end justify-end pointer-events-none select-none">
//               <img
//                 src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=80"
//                 alt="Delicious Pizza"
//                 className="h-[110%] w-full object-cover rounded-tl-[100px] transition-transform duration-700 group-hover:scale-105"
//               />
//               {/* Subtle overlay gradient to blend image into the slide color background */}
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 via-transparent to-transparent"></div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* SLIDE 2: INSTANT GROCERIES */}
//         <SwiperSlide>
//           <div className="h-[220px] bg-gradient-to-r from-green-500 to-emerald-600 p-6 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group">
//             {/* Left Side: Text Details */}
//             <div className="space-y-2 z-10 max-w-[60%] sm:max-w-xl">
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//                 Super Fast
//               </span>
//               <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mt-1">
//                 10 MIN DELIVERY
//               </h2>
//               <p className="text-white/90 text-xs sm:text-base font-medium">
//                 Fresh groceries brought directly from KKMart dark stores
//               </p>
//             </div>

//             {/* Right Side: Professional Groceries Image */}
//             <div className="absolute right-0 bottom-0 h-full w-[45%] md:w-[40%] flex items-end justify-end pointer-events-none select-none">
//               <img
//                 src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"
//                 alt="Fresh Groceries"
//                 className="h-[110%] w-full object-cover rounded-tl-[100px] transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 via-transparent to-transparent"></div>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* SLIDE 3: BUY 1 GET 1 FAST FOOD */}
//         <SwiperSlide>
//           <div className="h-[220px] bg-gradient-to-r from-purple-500 to-indigo-600 p-6 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group">
//             {/* Left Side: Text Details */}
//             <div className="space-y-2 z-10 max-w-[60%] sm:max-w-xl">
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
//                 Mega Deal
//               </span>
//               <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mt-1">
//                 BUY 1 GET 1
//               </h2>
//               <p className="text-white/90 text-xs sm:text-base font-medium">
//                 Double the flavor on selected trending items
//               </p>
//             </div>

//             {/* Right Side: Professional Fast Food Burger Image */}
//             <div className="absolute right-0 bottom-0 h-full w-[45%] md:w-[40%] flex items-end justify-end pointer-events-none select-none">
//               <img
//                 src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
//                 alt="Premium Burger"
//                 className="h-[110%] w-full object-cover rounded-tl-[100px] transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/80 via-transparent to-transparent"></div>
//             </div>
//           </div>
//         </SwiperSlide>

//       </Swiper>

//       <style>{`
//         .swiper-pagination-bullet-active {
//           background: #FC8019 !important;
//           width: 20px !important;
//           border-radius: 4px !important;
//           transition: all 0.3s ease;
//         }
//       `}</style>




//         <div className="mt-12 pb-4 select-none">

//     {/* HEADER ACTIONS BLOCK */}
//     <div className="flex justify-between items-baseline mb-5 px-1">
//       <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
//         🍔 Fast Food Near You
//       </h2>
//       <button
//         onClick={() => navigate("/food")}
//         className="text-orange-500 font-extrabold text-sm sm:text-base hover:text-orange-600 transition active:scale-95"
//       >
//         See All
//       </button>
//     </div>

//     {/* HORIZONTAL STREAM DISPLAY GRID */}
//     <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-1 snap-x">

//       {fastFoods.length > 0 ? (
//         fastFoods.map((item) => (
//           <div
//             key={item._id}
//             onClick={() => navigate(`/product/${item._id}`)}
//             className="min-w-[200px] max-w-[200px] bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 snap-start flex flex-col justify-between group"
//           >
//             {/* CARD THUMBNAIL WRAPPER */}
//             <div className="relative overflow-hidden aspect-[4/3] w-full bg-gray-50 shrink-0">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />

//               {/* STYLISH FLOATING ETA PILL CONTAINER */}
//               <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-1.5 rounded-xl flex items-center gap-1 shadow-sm tracking-wide border border-white/10">
//                 <Clock size={12} className="text-orange-400 stroke-[3]" />
//                 <span>20-30 MINS</span>
//               </div>
//             </div>

//             {/* PRODUCT SPECIFICATION CONTAINER */}
//             <div className="p-3.5 flex flex-col flex-1 justify-between gap-3">
//               <div className="space-y-0.5">
//                 <h3 className="font-extrabold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-orange-500 transition-colors">
//                   {item.name}
//                 </h3>
//                 <p className="text-gray-400 text-xs font-semibold line-clamp-1 tracking-wide">
//                   {item.category}
//                 </p>
//               </div>

//               {/* ACTION FOOTER BAR */}
//               <div className="flex justify-between items-center mt-1">
//                 <div>
//                   <span className="font-black text-gray-900 text-base">
//                     ₹{item.price}
//                   </span>
//                 </div>

//                 {/* CONTAINERIZED QUANTITY MUTATION LOOP LAYER */}
//                 {cart.find((i) => i._id === item._id) ? (
//                   <div
//                     onClick={(e) => e.stopPropagation()}
//                     className="flex items-center bg-[#60B246] text-white rounded-xl overflow-hidden shadow-sm shadow-green-100 h-8 h-min"
//                   >
//                     <button
//                       type="button"
//                       onClick={() => decreaseQty(item._id)}
//                       className="px-3 py-1 font-black text-sm hover:bg-green-700 transition active:scale-95"
//                     >
//                       -
//                     </button>

//                     <span className="px-1 font-black text-xs select-none min-w-[12px] text-center">
//                       {cart.find((i) => i._id === item._id)?.qty}
//                     </span>

//                     <button
//                       type="button"
//                       onClick={() => addToCart(item)}
//                       className="px-3 py-1 font-black text-sm hover:bg-green-700 transition active:scale-95"
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       addToCart(item);
//                     }}
//                     className="bg-white border border-gray-200 hover:border-[#60B246] text-[#60B246] px-4 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider transition active:scale-95 shadow-sm shadow-gray-50 hover:bg-green-50/30"
//                   >
//                     Add
//                   </button>
//                 )}
//               </div>
//             </div>

//           </div>
//         ))
//       ) : (
//         <>
//           <FoodSkeleton />
//           <FoodSkeleton />
//           <FoodSkeleton />
//         </>
//       )}

//     </div>
//   </div>

//         {/* CATEGORY PILLS */}
//         <div className="grid grid-cols-3 md:grid-cols-8 gap-4 mt-8">
//           <Category emoji="🛒" title="Grocery" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
//           <Category emoji="🥦" title="Vegitable" onClick={() => navigate("/grocery")} />
//           <Category emoji="👶" title="Babycare" onClick={() => navigate("/grocery")} />
//           <Category emoji="📏" title="Stationery" onClick={() => navigate("/grocery")} />


//           <Category emoji="🍰" title="Sweets" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍗" title="Meat" onClick={() => navigate("/grocery")} />

//           <Category emoji="🍛" title="Biryani" onClick={() => navigate("/food")} />
//           <Category emoji="🌯" title="Rolls" onClick={() => navigate("/food")} />


//         </div>

//         {/* WHY */}
//         <div className="mt-12">
//           <div className="flex items-end justify-between mb-5">
//             <div>
//               <p className="text-orange-500 font-black uppercase tracking-widest text-sm">
//                 Why KKCart
//               </p>
//               <h2 className="text-3xl md:text-4xl font-black text-gray-900">
//                 Built for fast local delivery
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Why icon={<Truck />} title="Quick Delivery" desc="10–30 mins" />
//             <Why icon={<ShieldCheck />} title="Fresh Quality" desc="Checked items" />
//             <Why icon={<Wallet />} title="Best Price" desc="Local pricing" />
//             <Why icon={<Star />} title="Trusted Store" desc="Loved locally" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SmallHero({ title, desc, emoji, color, onClick }) {
//   const green = color === "green";

//   return (
//     <div
//       onClick={onClick}
//       className={`min-h-[220px] rounded-[38px] p-7 text-white relative overflow-hidden cursor-pointer shadow-xl hover:-translate-y-1 transition ${green
//         ? "bg-gradient-to-br from-green-500 to-green-700"
//         : "bg-gradient-to-br from-orange-500 to-red-600"
//         }`}
//     >
//       <h2 className="text-3xl font-black max-w-xs">{title}</h2>
//       <p className="text-white/90 mt-3 max-w-xs">{desc}</p>

//       <button className="mt-6 bg-white text-gray-900 px-5 py-3 rounded-2xl font-black">
//         Explore
//       </button>

//       <div className="absolute right-4 bottom-0 text-[120px] opacity-20">
//         {emoji}
//       </div>
//     </div>
//   );
// }

// function Category({ emoji, title, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-white rounded-[28px] p-5 shadow border hover:shadow-xl hover:-translate-y-1 transition"
//     >
//       <div className="text-4xl">{emoji}</div>
//       <p className="font-black mt-2 text-sm text-gray-800">{title}</p>
//     </button>
//   );
// }

// function Offer({ emoji, title, desc }) {
//   return (
//     <div className="bg-white rounded-[30px] p-6 shadow border flex items-center justify-between">
//       <div>
//         <h3 className="font-black text-xl">{title}</h3>
//         <p className="text-gray-500 text-sm mt-1">{desc}</p>
//       </div>
//       <div className="text-5xl">{emoji}</div>
//     </div>
//   );
// }

// function FeatureBanner({ title, desc, button, emoji, color, onClick }) {
//   const green = color === "green";

//   return (
//     <div
//       className={`relative rounded-[40px] p-8 overflow-hidden text-white shadow-xl ${green
//         ? "bg-gradient-to-br from-emerald-500 to-green-700"
//         : "bg-gradient-to-br from-orange-500 to-red-600"
//         }`}
//     >
//       <div className="relative z-10 max-w-md">
//         <h2 className="text-4xl font-black">{title}</h2>
//         <p className="text-white/90 mt-3">{desc}</p>

//         <button
//           onClick={onClick}
//           className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-2xl font-black"
//         >
//           {button}
//         </button>
//       </div>

//       <div className="absolute right-5 bottom-0 text-[140px] opacity-20">
//         {emoji}
//       </div>
//     </div>
//   );
// }

// function Why({ icon, title, desc }) {
//   return (
//     <div className="bg-white rounded-3xl p-5 border shadow">
//       <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
//         {icon}
//       </div>
//       <h3 className="font-black mt-4">{title}</h3>
//       <p className="text-gray-500 text-sm mt-1">{desc}</p>
//     </div>
//   );
// }

// function FoodSkeleton() {
//   return (
//     <div className="min-w-[190px] bg-white rounded-3xl overflow-hidden shadow animate-pulse">
//       <div className="h-[140px] bg-gray-200"></div>

//       <div className="p-3">
//         <div className="h-4 bg-gray-200 rounded mb-2"></div>
//         <div className="h-3 bg-gray-200 rounded w-2/3"></div>
//       </div>
//     </div>
//   );
// }



// import { useNavigate } from "react-router-dom";
// import {
//   Clock,
//   ShieldCheck,
//   Wallet,
//   Star,
//   Truck,
//   ChevronRight,
// } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import { useContext, useState, useEffect } from "react";
// import { CartContext } from "../context/CartContext";

// import "swiper/css";
// import "swiper/css/pagination";

// import API from "../api";

// export default function Hero() {
//   const navigate = useNavigate();
//   const { cart, addToCart, decreaseQty } = useContext(CartContext);
//   const [fastFoods, setFastFoods] = useState([]);

//   useEffect(() => {
//     fetchFastFoods();
//   }, []);

//   const fetchFastFoods = async () => {
//     try {
//       const res = await API.get("/products");
//       const foods = res.data.filter(
//         (item) =>
//           item.type === "food" ||
//           item.category === "Fast Food" ||
//           item.section === "food"
//       );
//       setFastFoods(foods);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="bg-[#fff8f1] overflow-hidden min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 py-4 md:py-10 space-y-8">

//         {/* ========================================================================= */}
//         {/* 1. DESKTOP ONLY: PREMIUM BANNER HERO AND LINK CARDS                       */}
//         {/* ========================================================================= */}
//         <div className="hidden md:block w-full space-y-6">
//           <div className="bg-[#FC8019] rounded-[32px] p-10 text-white relative overflow-hidden shadow-md flex flex-col justify-center min-h-[240px]">
//             <div className="max-w-xl space-y-3 z-10">
//               <h1 className="text-4xl font-black tracking-tight leading-tight">
//                 Order Food & Groceries. <br />
//                 <span className="text-yellow-300">Discover Best Restaurants Near You.</span>
//               </h1>
//               <p className="text-white/90 text-sm font-medium">
//                 Instant delivery straight from your trusted local dark stores to your doorstep.
//               </p>
//             </div>
//             <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
//             <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
//           </div>

//           <div className="grid grid-cols-3 gap-6">
//             {/* Card 1: Food Delivery */}
//             <div
//               onClick={() => navigate("/food")}
//               className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[200px] group relative overflow-hidden"
//             >
//               <div className="space-y-1 max-w-[65%]">
//                 <h3 className="text-xl font-black text-gray-900 tracking-tight">FOOD DELIVERY</h3>
//                 <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">From Our Cloud Kitchen</p>
//                 {/* <div className="inline-block bg-orange-50 text-orange-600 font-black text-[10px] px-2.5 py-1 rounded-lg mt-2 border border-orange-100">
//                   UPTO 60% OFF
//                 </div> */}
//               </div>
//               <div className="flex justify-between items-end mt-4">
//                 <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center transition-transform group-hover:scale-110">
//                   <ChevronRight size={18} className="stroke-[3]" />
//                 </div>
//                 <img
//                   src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=150&q=80"
//                   alt="Food Service"
//                   className="w-28 h-28 object-cover rounded-2xl absolute -right-3 -bottom-3 rotate-[-12deg] group-hover:rotate-[-6deg] transition-all duration-500"
//                 />
//               </div>
//             </div>

//             {/* Card 2: Instamart */}
//             <div
//               onClick={() => navigate("/grocery")}
//               className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[200px] group relative overflow-hidden"
//             >
//               <div className="space-y-1 max-w-[65%]">
//                 <h3 className="text-xl font-black text-gray-900 tracking-tight">KKMART</h3>
//                 <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Instant Grocery</p>
//                 {/* <div className="inline-block bg-emerald-50 text-emerald-600 font-black text-[10px] px-2.5 py-1 rounded-lg mt-2 border border-emerald-100">
//                   UPTO 60% OFF
//                 </div> */}
//               </div>
//               <div className="flex justify-between items-end mt-4">
//                 <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center transition-transform group-hover:scale-110">
//                   <ChevronRight size={18} className="stroke-[3]" />
//                 </div>
//                 <img
//                   src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80"
//                   alt="Grocery Service"
//                   className="w-28 h-28 object-cover rounded-2xl absolute -right-3 -bottom-3 rotate-[-12deg] group-hover:rotate-[-6deg] transition-all duration-500"
//                 />
//               </div>
//             </div>

//             {/* Card 3: FIXED - Changed from Dineout to Sweets & Bakery */}
//             <div
//               onClick={() => navigate("/grocery")}
//               className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[200px] group relative overflow-hidden"
//             >
//               <div className="space-y-1 max-w-[65%]">
//                 <h3 className="text-xl font-black text-gray-900 tracking-tight">SWEETS & CAKES</h3>
//                 <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Local Bakeries</p>
//                 {/* <div className="inline-block bg-pink-50 text-pink-600 font-black text-[10px] px-2.5 py-1 rounded-lg mt-2 border border-pink-100">
//                   FLAT 20% OFF
//                 </div> */}
//               </div>
//               <div className="flex justify-between items-end mt-4">
//                 <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center transition-transform group-hover:scale-110">
//                   <ChevronRight size={18} className="stroke-[3]" />
//                 </div>
//                 <img
//                   src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=150&q=80"
//                   alt="Sweets Service"
//                   className="w-28 h-28 object-cover rounded-2xl absolute -right-3 -bottom-3 rotate-[-12deg] group-hover:rotate-[-6deg] transition-all duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 2. MOBILE ONLY: QUICK CHIP CARDS                                         */}
//         {/* ========================================================================= */}
//         <div className="flex md:hidden gap-3 overflow-x-fit px-auto snap-x ">

//           {/* 🍳 1. THE KK-KITCHEN SLICK SPLIT-PANEL */}
//           <button
//             type="button"
//             onClick={() => navigate("/food")}
//             className="relative min-w-[180px] h-[105px] rounded-[24px] bg-[#0E0B08] text-white border border-[#2D1B10] shadow-xl overflow-hidden active:scale-[0.97] transition-all duration-300 shrink-0 snap-start flex group text-left"
//           >
//             {/* Micro Neon Accent Strip */}
//             <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#FC8019] to-transparent" />

//             {/* Left Info Column */}
//             <div className="w-[58%] p-3.5 flex flex-col justify-between z-20 h-full">
//               <span className="text-[8px] font-black uppercase tracking-widest text-[#FC8019]/80">
//                 Cloud Kitchen
//               </span>
//               <div>
//                 <h3 className="text-sm font-black tracking-tight text-white leading-tight">
//                   KKKitchen
//                 </h3>
//                 <p className="text-[10px] text-gray-400 font-medium mt-0.5 tracking-tight">
//                   Fresh Meals
//                 </p>
//               </div>
//             </div>

//             {/* Right Image Frame with Angled Geometric Split Cut */}
//             <div className="w-[42%] h-full absolute right-0 top-0 bottom-0 overflow-hidden select-none pointer-events-none">
//               <img
//                 src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80"
//                 alt="KKKitchen Premium Food"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               {/* High-end smooth internal alpha-fade shroud */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B08] via-[#0E0B08]/40 to-transparent" />
//             </div>
//           </button>

//           {/* 🍏 2. THE KK-MART SLICK SPLIT-PANEL */}
//           <button
//             type="button"
//             onClick={() => navigate("/grocery")}
//             className="relative min-w-[180px] h-[105px] rounded-[24px] bg-[#070A08] text-white border border-[#122317] shadow-xl overflow-hidden active:scale-[0.97] transition-all duration-300 shrink-0 snap-start flex group text-left"
//           >
//             {/* Micro Neon Accent Strip */}
//             <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#10B981] to-transparent" />

//             {/* Left Info Column */}
//             <div className="w-[58%] p-3.5 flex flex-col justify-between z-20 h-full">
//               <span className="text-[8px] font-black uppercase tracking-widest text-[#10B981]/80">
//                 Flash Drop
//               </span>
//               <div>
//                 <h3 className="text-sm font-black tracking-tight text-white leading-tight">
//                   KKMart
//                 </h3>
//                 <p className="text-[10px] text-gray-400 font-medium mt-0.5 tracking-tight">
//                   10 Min Groceries
//                 </p>
//               </div>
//             </div>

//             {/* Right Image Frame with Angled Geometric Split Cut */}
//             <div className="w-[42%] h-full absolute right-0 top-0 bottom-0 overflow-hidden select-none pointer-events-none">
//               <img
//                 src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=300&q=80"
//                 alt="KKMart Fresh Groceries"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               {/* High-end smooth internal alpha-fade shroud */}
//               <div className="absolute inset-0 bg-gradient-to-r from-[#070A08] via-[#070A08]/40 to-transparent" />
//             </div>
//           </button>

//         </div>


//         {/* ========================================================================= */}
//         {/* 3. CORE PROMOTIONAL BANNER SWIPER SYSTEM                                  */}
//         {/* ========================================================================= */}
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={15}
//           slidesPerView={1}
//           loop={true}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           className="rounded-[32px] overflow-hidden shadow-sm border border-gray-100"
//         >
//           <SwiperSlide>
//             <div className="h-[220px] bg-gradient-to-br from-[#1C0A02] to-[#0A0401] p-6 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group border border-orange-500/10 rounded-[32px]">
//               {/* Ambient premium orange glow circle */}
//               <div className="absolute top-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

//               {/* LEFT SIDE DETAILS */}
//               <div className="space-y-2 z-10 max-w-[60%] sm:max-w-xl text-left">
//                 <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
//                   Welcome Reward
//                 </span>
//                 <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mt-1 text-white">
//                   FLAT ₹50 OFF<br />
//                   <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//                     FIRST ORDER
//                   </span>
//                 </h2>
//                 <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm line-clamp-2 sm:line-clamp-none">
//                   Claim your special welcome savings on food or grocery bundles above ₹299.
//                 </p>
//               </div>

//               {/* RIGHT SIDE PIC BACKGROUND */}
//               <div className="absolute right-0 bottom-0 top-0 h-full w-[42%] sm:w-[45%] flex items-center justify-end pointer-events-none select-none overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
//                   alt="Premium Wood-Fired Gourmet Pizza"
//                   className="h-full w-full object-cover rounded-tl-[60px] sm:rounded-tl-[100px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
//                 />
//                 {/* Cinematic dark linear gradient blend to seamlessly merge the gourmet pizza with the luxury card background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#0A0401] via-[#0A0401]/30 to-transparent z-10"></div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="h-[220px] bg-gradient-to-br from-[#091E14] to-[#030A07] p-6 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group border border-emerald-500/10 rounded-[32px]">
//               {/* Ambient green decoration light circle */}
//               <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

//               {/* LEFT SIDE DETAILS */}
//               <div className="space-y-2 z-10 max-w-[60%] sm:max-w-xl text-left">
//                 <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
//                   Farm Fresh Picked
//                 </span>
//                 <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mt-1 text-white">
//                   FRESH ITEMS <br />
//                   <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//                     DAILY HANDOVER
//                   </span>
//                 </h2>
//                 <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm line-clamp-2 sm:line-clamp-none">
//                   Crisp vegetables, organic fruits, and premium kitchen essentials straight from your nearest KKMart dark store.
//                 </p>
//               </div>

//               {/* RIGHT SIDE PIC BACKGROUND */}
//               <div className="absolute right-0 bottom-0 top-0 h-full w-[42%] sm:w-[45%] flex items-center justify-end pointer-events-none select-none overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80"
//                   alt="Premium Fresh Produce and Green Groceries Selection"
//                   className="h-full w-full object-cover rounded-tl-[60px] sm:rounded-tl-[100px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
//                 />
//                 {/* High-end linear fade mask to seamlessly blend the fresh produce artwork into your new dark store scheme */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#030A07] via-[#030A07]/40 to-transparent z-10"></div>
//               </div>
//             </div>
//           </SwiperSlide>

//           <SwiperSlide>
//             <div className="h-[220px] bg-gradient-to-br from-[#140B05] to-[#0A0604] p-6 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group border border-orange-500/10 rounded-[32px]">
//               {/* Ambient background accent glow */}
//               <div className="absolute top-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />

//               {/* LEFT SIDE DETAILS */}
//               <div className="space-y-2 z-10 max-w-[60%] sm:max-w-xl text-left">
//                 <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider">
//                   KKCart Originals
//                 </span>
//                 <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mt-1 text-white">
//                   CRAFTED IN OUR <br />
//                   <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
//                     CLOUD KITCHEN
//                   </span>
//                 </h2>
//                 <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm line-clamp-2 sm:line-clamp-none">
//                   Hygiene certified, freshly prepared premium meals delivered flash fast.
//                 </p>
//               </div>

//               {/* RIGHT SIDE PIC BACKGROUND */}
//               <div className="absolute right-0 bottom-0 top-0 h-full w-[42%] sm:w-[45%] flex items-center justify-end pointer-events-none select-none overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
//                   alt="Premium Culinary Cloud Kitchen Crafting"
//                   className="h-full w-full object-cover rounded-tl-[60px] sm:rounded-tl-[100px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
//                 />
//                 {/* Dynamic Linear Mask Overlay to smoothly fade food image into the dark card background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#0A0604] via-[#0A0604]/40 to-transparent z-10"></div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>

//         {/* ========================================================================= */}
//         {/* 4. FAST FOOD STREAM SCROLL TRACK                                          */}
//         {/* ========================================================================= */}
//         <div className="pb-2 select-none">
//           <div className="flex justify-between items-baseline mb-5 px-1">
//             <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
//               🍔 Fast Food Near You
//             </h2>
//             <button
//               onClick={() => navigate("/food")}
//               className="text-orange-500 font-extrabold text-sm sm:text-base hover:text-orange-600 transition"
//             >
//               See All
//             </button>
//           </div>

//           <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 px-1 snap-x">
//             {fastFoods.length > 0 ? (
//               fastFoods.map((item) => (
//                 <div
//                   key={item._id}
//                   onClick={() => navigate(`/product/${item._id}`)}
//                   className="min-w-[200px] max-w-[200px] bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 snap-start flex flex-col justify-between group"
//                 >
//                   <div className="relative overflow-hidden aspect-[4/3] w-full bg-gray-50 shrink-0">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute bottom-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-1.5 rounded-xl flex items-center gap-1 shadow-sm tracking-wide border border-white/10">
//                       <Clock size={12} className="text-orange-400 stroke-[3]" />
//                       <span>20-30 MINS</span>
//                     </div>
//                   </div>

//                   <div className="p-3.5 flex flex-col flex-1 justify-between gap-3">
//                     <div className="space-y-0.5">
//                       <h3 className="font-extrabold text-gray-800 text-sm sm:text-base line-clamp-1 group-hover:text-orange-500 transition-colors">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-400 text-xs font-semibold line-clamp-1 tracking-wide">
//                         {item.category}
//                       </p>
//                     </div>

//                     <div className="flex justify-between items-center mt-1">
//                       <div>
//                         <span className="font-black text-gray-900 text-base">
//                           ₹{item.price}
//                         </span>
//                       </div>

//                       {cart.find((i) => i._id === item._id) ? (
//                         <div
//                           onClick={(e) => e.stopPropagation()}
//                           className="flex items-center bg-[#60B246] text-white rounded-xl overflow-hidden shadow-sm h-8"
//                         >
//                           <button
//                             type="button"
//                             onClick={() => decreaseQty(item._id)}
//                             className="px-3 py-1 font-black text-sm hover:bg-green-700 transition"
//                           >
//                             -
//                           </button>
//                           <span className="px-1 font-black text-xs min-w-[12px] text-center">
//                             {cart.find((i) => i._id === item._id)?.qty}
//                           </span>
//                           <button
//                             type="button"
//                             onClick={() => addToCart(item)}
//                             className="px-3 py-1 font-black text-sm hover:bg-green-700 transition"
//                           >
//                             +
//                           </button>
//                         </div>
//                       ) : (
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             addToCart(item);
//                           }}
//                           className="bg-white border border-gray-200 hover:border-[#60B246] text-[#60B246] px-4 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider transition hover:bg-green-50/30"
//                         >
//                           Add
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <>
//                 <FoodSkeleton />
//                 <FoodSkeleton />
//                 <FoodSkeleton />
//               </>
//             )}
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 5. CATEGORIES GRID                                                        */}
//         {/* ========================================================================= */}
//         <div className="grid grid-cols-3 md:grid-cols-7 gap-4 mt-4">
//           <Category emoji="🛒" title="Grocery" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
//           <Category emoji="🥦" title="Vegetables" onClick={() => navigate("/grocery")} />
//           <Category emoji="👜" title="Stationery" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍼" title="Baby Care" onClick={() => navigate("/grocery")} />

//           <Category emoji="🍰" title="Sweets" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍗" title="Meat" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍛" title="Biryani" onClick={() => navigate("/food")} />
//           <Category emoji="🌯" title="Rolls" onClick={() => navigate("/food")} />
//         </div>

//         {/* ========================================================================= */}
//         {/* 6. INFRASTRUCTURE TRUST PERKS                                             */}
//         {/* ========================================================================= */}
//         <div className="mt-8">
//           <div className="flex items-end justify-between mb-5">
//             <div>
//               <p className="text-orange-500 font-black uppercase tracking-widest text-xs">
//                 Why KKCart
//               </p>
//               <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-0.5">
//                 Built for fast local delivery
//               </h2>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Why icon={<Truck />} title="Quick Delivery" desc="10–30 mins" />
//             <Why icon={<ShieldCheck />} title="Fresh Quality" desc="Checked items" />
//             <Why icon={<Wallet />} title="Best Price" desc="Local pricing" />
//             <Why icon={<Star />} title="Trusted Store" desc="Loved locally" />
//           </div>
//         </div>

//       </div>

//       <style>{`
//         .swiper-pagination-bullet-active {
//           background: #FC8019 !important;
//           width: 20px !important;
//           border-radius: 4px !important;
//           transition: all 0.3s ease;
//         }
//       `}</style>
//     </section>
//   );
// }

// function Category({ emoji, title, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition flex flex-col items-center text-center"
//     >
//       <div className="text-3xl sm:text-4xl">{emoji}</div>
//       <p className="font-black mt-2 text-xs sm:text-sm text-gray-800">{title}</p>
//     </button>
//   );
// }

// function Why({ icon, title, desc }) {
//   return (
//     <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm">
//       <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
//         {icon}
//       </div>
//       <h3 className="font-black text-sm sm:text-base mt-4 text-gray-900">{title}</h3>
//       <p className="text-gray-400 text-xs font-semibold mt-1">{desc}</p>
//     </div>
//   );
// }

// function FoodSkeleton() {
//   return (
//     <div className="min-w-[200px] bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm animate-pulse">
//       <div className="aspect-[4/3] bg-gray-200"></div>
//       <div className="p-4 space-y-2">
//         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import {
  Clock,
  ShieldCheck,
  Wallet,
  Star,
  Truck,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

import "swiper/css";
import "swiper/css/pagination";

import API from "../api";

export default function Hero() {
  const navigate = useNavigate();
  const { cart, addToCart, decreaseQty } = useContext(CartContext);
  const [fastFoods, setFastFoods] = useState([]);

  useEffect(() => {
    fetchFastFoods();
  }, []);

  const fetchFastFoods = async () => {
    try {
      const res = await API.get("/products");
      const foods = res.data.filter(
        (item) =>
          item.type === "Food" ||
          item.type === "food" ||
          item.category === "Fast Food" ||
          item.section === "food"
      );
      setFastFoods(foods);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-[#FFF8F1] overflow-x-hidden min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8 space-y-6 md:space-y-10">

        {/* ========================================================================= */}
        {/* 1. DESKTOP ONLY: PREMIUM BANNER HERO AND LINK CARDS                       */}
        {/* ========================================================================= */}
        <div className="hidden md:block w-full space-y-6">
          <div className="bg-[#FC8019] rounded-[32px] p-8 lg:p-12 text-white relative overflow-hidden shadow-sm flex flex-col justify-center min-h-[220px]">
            <div className="max-w-xl space-y-3 z-10 text-left">
              <h1 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Order Food & Groceries. <br />
                <span className="text-yellow-300">Discover Best Restaurants Near You.</span>
              </h1>
              <p className="text-white/90 text-xs lg:text-sm font-medium">
                Instant delivery straight from your trusted local dark stores to your doorstep.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Card 1: Food Delivery */}
            <div
              onClick={() => navigate("/food")}
              className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[180px] group relative overflow-hidden text-left"
            >
              <div className="space-y-1 max-w-[65%]">
                <h3 className="text-lg font-black text-gray-900 tracking-tight">FOOD DELIVERY</h3>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">From Our Cloud Kitchen</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <ChevronRight size={16} className="stroke-[3]" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=150&q=80"
                  alt="Food Service"
                  className="w-24 h-24 object-cover rounded-2xl absolute -right-2 -bottom-2 rotate-[-12deg] group-hover:rotate-[-6deg] transition-all duration-500"
                />
              </div>
            </div>

            {/* Card 2: Instamart */}
            <div
              onClick={() => navigate("/grocery")}
              className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[180px] group relative overflow-hidden text-left"
            >
              <div className="space-y-1 max-w-[65%]">
                <h3 className="text-lg font-black text-gray-900 tracking-tight">KKMART</h3>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">Instant Grocery</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <ChevronRight size={16} className="stroke-[3]" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80"
                  alt="Grocery Service"
                  className="w-24 h-24 object-cover rounded-2xl absolute -right-2 -bottom-2 rotate-[-12deg] group-hover:rotate-[-6deg] transition-all duration-500"
                />
              </div>
            </div>

            {/* Card 3: Sweets & Bakery */}
            <div
              onClick={() => navigate("/grocery")}
              className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[180px] group relative overflow-hidden text-left"
            >
              <div className="space-y-1 max-w-[65%]">
                <h3 className="text-lg font-black text-gray-900 tracking-tight">SWEETS & CAKES</h3>
                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">Local Bakeries</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <ChevronRight size={16} className="stroke-[3]" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=150&q=80"
                  alt="Sweets Service"
                  className="w-24 h-24 object-cover rounded-2xl absolute -right-2 -bottom-2 rotate-[-12deg] group-hover:rotate-[-6deg] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MOBILE ONLY: QUICK CHIP CARDS (CRASH-PROOF GRID FOR ALL DEVICES)       */}
        {/* ========================================================================= */}
        <div className="block md:hidden w-full px-0.5">
          <div className="grid grid-cols-2 gap-3 w-full">

            {/* 🍳 1. THE KK-KITCHEN SLICK SPLIT-PANEL */}
            <button
              type="button"
              onClick={() => navigate("/food")}
              className="relative w-full h-[105px] rounded-[24px] bg-[#0E0B08] text-white border border-[#2D1B10] shadow-md overflow-hidden active:scale-[0.97] transition-all duration-300 flex group text-left"
            >
              {/* Micro Neon Accent Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#FC8019] to-transparent" />

              {/* Left Info Column */}
              <div className="w-[58%] p-3.5 flex flex-col justify-between z-20 h-full">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#FC8019]/80">
                  Cloud Kitchen
                </span>
                <div>
                  <h3 className="text-xs font-black tracking-tight text-white leading-tight">
                    KKKitchen
                  </h3>
                  <p className="text-[9px] text-gray-400 font-bold mt-0.5 tracking-tight">
                    Fresh Meals
                  </p>
                </div>
              </div>

              {/* Right Image Frame with Angled Geometric Split Cut */}
              <div className="w-[42%] h-full absolute right-0 top-0 bottom-0 overflow-hidden select-none pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80"
                  alt="KKKitchen Premium Food"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* High-end smooth internal alpha-fade shroud */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B08] via-[#0E0B08]/40 to-transparent" />
              </div>
            </button>

            {/* 🍏 2. THE KK-MART SLICK SPLIT-PANEL */}
            <button
              type="button"
              onClick={() => navigate("/grocery")}
              className="relative w-full h-[105px] rounded-[24px] bg-[#070A08] text-white border border-[#122317] shadow-md overflow-hidden active:scale-[0.97] transition-all duration-300 flex group text-left"
            >
              {/* Micro Neon Accent Strip */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#10B981] to-transparent" />

              {/* Left Info Column */}
              <div className="w-[58%] p-3.5 flex flex-col justify-between z-20 h-full">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#10B981]/80">
                  Flash Drop
                </span>
                <div>
                  <h3 className="text-xs font-black tracking-tight text-white leading-tight">
                    KKMart
                  </h3>
                  <p className="text-[9px] text-gray-400 font-bold mt-0.5 tracking-tight">
                    10 Min Drop
                  </p>
                </div>
              </div>

              {/* Right Image Frame with Angled Geometric Split Cut */}
              <div className="w-[42%] h-full absolute right-0 top-0 bottom-0 overflow-hidden select-none pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=200&q=80"
                  alt="KKMart Fresh Groceries"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* High-end smooth internal alpha-fade shroud */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#070A08] via-[#070A08]/40 to-transparent" />
              </div>
            </button>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CORE PROMOTIONAL BANNER SWIPER SYSTEM                                  */}
        {/* ========================================================================= */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="rounded-[28px] md:rounded-[32px] overflow-hidden shadow-sm border border-gray-100 w-full"
        >
          <SwiperSlide>
            <div className="h-[180px] sm:h-[220px] bg-gradient-to-br from-[#1C0A02] to-[#0A0401] p-5 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group rounded-[28px] md:rounded-[32px]">
              <div className="absolute top-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="space-y-1.5 sm:space-y-2 z-10 max-w-[62%] sm:max-w-xl text-left">
                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-0.5 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-wider">
                  Welcome Reward
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                  FLAT ₹50 OFF<br />
                  <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                    FIRST ORDER
                  </span>
                </h2>
                <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-relaxed max-w-xs line-clamp-2 sm:line-clamp-none">
                  Claim your special welcome savings on food or grocery bundles above ₹299.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 top-0 h-full w-[40%] sm:w-[45%] flex items-center justify-end pointer-events-none select-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80"
                  alt="Premium Wood-Fired Gourmet Pizza"
                  className="h-full w-full object-cover rounded-tl-[40px] sm:rounded-tl-[100px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0401] via-[#0A0401]/30 to-transparent z-10"></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[180px] sm:h-[220px] bg-gradient-to-br from-[#091E14] to-[#030A07] p-5 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group rounded-[28px] md:rounded-[32px]">
              <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="space-y-1.5 sm:space-y-2 z-10 max-w-[62%] sm:max-w-xl text-left">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-wider">
                  Farm Fresh Picked
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                  FRESH ITEMS <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                    DAILY HANDOVER
                  </span>
                </h2>
                <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-relaxed max-w-xs line-clamp-2 sm:line-clamp-none">
                  Crisp vegetables, organic fruits, and premium essentials straight from your KKMart store.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 top-0 h-full w-[40%] sm:w-[45%] flex items-center justify-end pointer-events-none select-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=400&q=80"
                  alt="Premium Fresh Produce"
                  className="h-full w-full object-cover rounded-tl-[40px] sm:rounded-tl-[100px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030A07] via-[#030A07]/40 to-transparent z-10"></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="h-[180px] sm:h-[220px] bg-gradient-to-br from-[#140B05] to-[#0A0604] p-5 sm:p-8 text-white flex items-center justify-between overflow-hidden relative group rounded-[28px] md:rounded-[32px]">
              <div className="absolute top-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="space-y-1.5 sm:space-y-2 z-10 max-w-[62%] sm:max-w-xl text-left">
                <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-0.5 rounded-full text-[9px] sm:text-xs font-black uppercase tracking-wider">
                  KKCart Originals
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
                  CRAFTED IN OUR <br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                    CLOUD KITCHEN
                  </span>
                </h2>
                <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-relaxed max-w-xs line-clamp-2 sm:line-clamp-none">
                  Hygiene certified, freshly prepared premium meals delivered flash fast.
                </p>
              </div>
              <div className="absolute right-0 bottom-0 top-0 h-full w-[40%] sm:w-[45%] flex items-center justify-end pointer-events-none select-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80"
                  alt="Premium Culinary Cloud Kitchen"
                  className="h-full w-full object-cover rounded-tl-[40px] sm:rounded-tl-[100px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0604] via-[#0A0604]/40 to-transparent z-10"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* ========================================================================= */}
        {/* 4. FAST FOOD STREAM SCROLL TRACK                                          */}
        {/* ========================================================================= */}
        <div className="pb-2 select-none w-full">
          <div className="flex justify-between items-baseline mb-4 px-1">
            <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight">
              🍔 Fast Food Near You
            </h2>
            <button
              onClick={() => navigate("/food")}
              className="text-orange-500 font-extrabold text-xs sm:text-base hover:text-orange-600 transition"
            >
              See All
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 px-1 snap-x scrollbar-none no-scrollbar w-full">
            {fastFoods.length > 0 ? (
              fastFoods.map((item) => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/product/${item._id}`)}
                  className="min-w-[170px] max-w-[170px] sm:min-w-[200px] sm:max-w-[200px] bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300 snap-start flex flex-col justify-between group"
                >
                  <div className="relative overflow-hidden aspect-[4/3] w-full bg-gray-50 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-md text-white text-[9px] sm:text-[11px] font-black px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl flex items-center gap-1 shadow-sm tracking-wide border border-white/10">
                      <Clock size={11} className="text-orange-400 stroke-[3]" />
                      <span>20 MINS</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between gap-2">
                    <div className="space-y-0.5 text-left">
                      <h3 className="font-extrabold text-gray-800 text-xs sm:text-base truncate group-hover:text-orange-500 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-[10px] sm:text-xs font-semibold truncate tracking-wide">
                        {item.category}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-1">
                      <span className="font-black text-gray-900 text-xs sm:text-base">
                        ₹{item.price?.toString().split(" ")[0]}
                      </span>

                      {cart.find((i) => i._id === item._id) ? (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center bg-[#60B246] text-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm h-7 sm:h-8"
                        >
                          <button
                            type="button"
                            onClick={() => decreaseQty(item._id)}
                            className="px-2 sm:px-3 py-1 font-black text-xs sm:text-sm hover:bg-green-700 transition"
                          >
                            -
                          </button>
                          <span className="px-0.5 font-black text-[10px] sm:text-xs min-w-[12px] text-center">
                            {cart.find((i) => i._id === item._id)?.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => addToCart(item)}
                            className="px-2 sm:px-3 py-1 font-black text-xs sm:text-sm hover:bg-green-700 transition"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(item);
                          }}
                          className="bg-white border border-gray-200 hover:border-[#60B246] text-[#60B246] px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-wider transition hover:bg-green-50/30"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <FoodSkeleton />
                <FoodSkeleton />
                <FoodSkeleton />
              </>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. CATEGORIES GRID                                                        */}
        {/* ========================================================================= */}
        <div className="w-full">
          <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 sm:gap-4 mt-2">
            <Category emoji="🛒" title="Grocery" onClick={() => navigate("/grocery")} />
            <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
            <Category emoji="🥦" title="Vegetables" onClick={() => navigate("/grocery")} />
            <Category emoji="👜" title="Stationery" onClick={() => navigate("/grocery")} />
            <Category emoji="🍼" title="Baby Care" onClick={() => navigate("/grocery")} />
            <Category emoji="🍰" title="Sweets" onClick={() => navigate("/grocery")} />
            <Category emoji="🍗" title="Meat" onClick={() => navigate("/grocery")} />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. INFRASTRUCTURE TRUST PERKS                                             */}
        {/* ========================================================================= */}
        <div className="mt-4 text-left w-full">
          <div className="mb-4 px-1">
            <p className="text-orange-500 font-black uppercase tracking-widest text-[10px] sm:text-xs">
              Why KKCart
            </p>
            <h2 className="text-xl md:text-3xl font-black text-gray-900 mt-0.5">
              Built for fast local delivery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <Why icon={<Truck size={18} />} title="Quick Delivery" desc="10–30 mins" />
            <Why icon={<ShieldCheck size={18} />} title="Fresh Quality" desc="Checked items" />
            <Why icon={<Wallet size={18} />} title="Best Price" desc="Local pricing" />
            <Why icon={<Star size={18} />} title="Trusted Store" desc="Loved locally" />
          </div>
        </div>

      </div>

      <style>{`
        .swiper-pagination-bullet-active {
          background: #FC8019 !important;
          width: 18px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function Category({ emoji, title, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white rounded-[20px] sm:rounded-[24px] p-3 sm:p-4 shadow-sm border border-gray-100/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center justify-center min-w-0"
    >
      <div className="text-2xl sm:text-3xl lg:text-4xl">{emoji}</div>
      <p className="font-black mt-1.5 text-[11px] sm:text-xs lg:text-sm text-gray-800 truncate w-full">{title}</p>
    </button>
  );
}

function Why({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-[24px] md:rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-sm flex flex-col items-start text-left">
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="font-black text-xs sm:text-base mt-3 sm:mt-4 text-gray-900">{title}</h3>
      <p className="text-gray-400 text-[10px] sm:text-xs font-semibold mt-0.5">{desc}</p>
    </div>
  );
}

function FoodSkeleton() {
  return (
    <div className="min-w-[170px] max-w-[170px] sm:min-w-[200px] sm:max-w-[200px] bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-gray-200"></div>
      <div className="p-3 space-y-2">
        <div className="h-3.5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-2.5 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );
}