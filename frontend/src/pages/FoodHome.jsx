// import { useEffect, useState } from "react";
// import { Star, Clock3, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";

// export default function FoodHome() {
//   const navigate = useNavigate();

//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   const fetchFoods = async () => {
//     try {
//       const res = await API.get("/products");

//       // only food items
//       const filtered = res.data.filter(
//         (item) =>
//           item.category?.toLowerCase().includes("food") ||
//           item.category?.toLowerCase().includes("pizza") ||
//           item.category?.toLowerCase().includes("burger") ||
//           item.category?.toLowerCase().includes("biryani") ||
//           item.category?.toLowerCase().includes("meal")
//       );

//       setFoods(filtered);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f6f6f6]">

//       {/* HERO */}
//       <section className="bg-[#ff5200] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-10">

//           <div className="grid md:grid-cols-2 items-center gap-10">

//             {/* LEFT */}
//             <div>

//               <div className="bg-white/20 inline-block px-4 py-2 rounded-full text-sm font-bold">
//                 KKCart Cloud Kitchen
//               </div>

//               <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
//                 Hot food
//                 <br />
//                 delivered
//                 <br />
//                 fast
//               </h1>

//               <p className="mt-5 text-white/90 text-lg max-w-xl">
//                 Fresh biryani, pizza, burgers, rolls and meals prepared in our own kitchen.
//               </p>

//               {/* SEARCH */}
//               <div className="mt-8 bg-white rounded-2xl p-2 flex items-center shadow-xl">
//                 <input
//                   type="text"
//                   placeholder="Search food items..."
//                   className="flex-1 px-5 py-4 rounded-2xl text-black outline-none"
//                 />

//                 <button className="bg-[#ff5200] text-white px-8 py-4 rounded-2xl font-black">
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="relative">

//               <img
//                 src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//                 alt="Food"
//                 className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
//               />

//               <div className="absolute bottom-5 left-5 bg-white rounded-3xl p-5 text-black shadow-xl">
//                 <p className="text-sm text-gray-500">
//                   Delivery in
//                 </p>

//                 <h2 className="text-4xl font-black text-[#ff5200]">
//                   30 mins
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="max-w-7xl mx-auto px-4 py-8">

//         <h2 className="text-3xl font-black mb-6">
//           Popular Categories
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

//           <Category emoji="🍕" title="Pizza" />
//           <Category emoji="🍔" title="Burger" />
//           <Category emoji="🍛" title="Biryani" />
//           <Category emoji="🌯" title="Rolls" />
//           <Category emoji="🍟" title="Snacks" />
//           <Category emoji="🥤" title="Drinks" />

//         </div>
//       </section>

//       {/* FOOD ITEMS */}
//       <section className="max-w-7xl mx-auto px-4 pb-10">

//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-black">
//             Popular Food Items
//           </h2>

//           <button className="text-[#ff5200] font-black">
//             See All
//           </button>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

//           {foods.map((food) => (
//             <div
//               key={food._id}
//               className="bg-white rounded-[28px] overflow-hidden shadow hover:shadow-2xl transition cursor-pointer"
//             >

//               <div className="relative">
//                 <img
//                   src={food.image}
//                   alt={food.name}
//                   className="w-full h-44 object-cover"
//                 />

//                 <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">
//                   <Star size={12} fill="black" />
//                   4.4
//                 </div>
//               </div>

//               <div className="p-4">

//                 <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                   <Clock3 size={15} />
//                   25 mins
//                 </div>

//                 <h3 className="font-black text-lg line-clamp-1">
//                   {food.name}
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-1">
//                   {food.category}
//                 </p>

//                 <div className="flex items-center justify-between mt-5">

//                   <div>
//                     <p className="font-black text-xl">
//                       ₹{food.price}
//                     </p>
//                   </div>

//                   <button
//                     onClick={() =>
//                       navigate(`/product/${food._id}`)
//                     }
//                     className="bg-[#ff5200] text-white px-4 py-3 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition"
//                   >
//                     <ShoppingBag size={18} />
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {foods.length === 0 && (
//           <div className="bg-white rounded-3xl p-10 text-center mt-10 shadow">
//             <h2 className="text-2xl font-black">
//               No food items found
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Add food products from admin panel.
//             </p>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// function Category({ emoji, title }) {
//   return (
//     <div className="bg-white rounded-3xl p-5 shadow flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer">
//       <div className="text-5xl">
//         {emoji}
//       </div>

//       <h3 className="font-black mt-3">
//         {title}
//       </h3>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { Star, Clock3, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";
// import Header from "../components/Header";

// export default function FoodHome() {
//   const navigate = useNavigate();

//   const [foods, setFoods] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   const fetchFoods = async () => {
//     try {
//       const res = await API.get("/products");

//       const filtered = res.data.filter(
//         (item) => item.type === "food"
//       );

//       setFoods(filtered);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const filteredFoods =
//     selectedCategory === "All"
//       ? foods
//       : foods.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-[#f6f6f6]">
//       <Header />

//       <section className="bg-[#ff5200] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-10">
//           <div className="grid md:grid-cols-2 items-center gap-10">
//             <div>
//               <div className="bg-white/20 inline-block px-4 py-2 rounded-full text-sm font-bold">
//                 KKCart Cloud Kitchen
//               </div>

//               <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
//                 Hot food
//                 <br />
//                 delivered
//                 <br />
//                 fast
//               </h1>

//               <p className="mt-5 text-white/90 text-lg max-w-xl">
//                 Fresh biryani, pizza, burgers, rolls and meals prepared in our own kitchen.
//               </p>
//             </div>

//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//                 alt="Food"
//                 className="w-full h-[420px] object-cover rounded-[40px] shadow-2xl"
//               />

//               <div className="absolute bottom-5 left-5 bg-white rounded-3xl p-5 text-black shadow-xl">
//                 <p className="text-sm text-gray-500">Delivery in</p>
//                 <h2 className="text-4xl font-black text-[#ff5200]">
//                   30 mins
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-black mb-6">
//           Popular Categories
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//           {["All", "Pizza", "Burger", "Biryani", "Meals", "Rolls", "Chinese", "Drinks"].map(
//             (cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`rounded-3xl p-5 shadow flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer ${
//                   selectedCategory === cat
//                     ? "bg-[#ff5200] text-white"
//                     : "bg-white text-black"
//                 }`}
//               >
//                 <div className="text-5xl">{getEmoji(cat)}</div>
//                 <h3 className="font-black mt-3">{cat}</h3>
//               </button>
//             )
//           )}
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 pb-10">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-black">
//             {selectedCategory === "All"
//               ? "Popular Food Items"
//               : selectedCategory}
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {filteredFoods.map((food) => (
//             <div
//               key={food._id}
//               onClick={() => navigate(`/product/${food._id}`)}
//               className="bg-white rounded-[28px] overflow-hidden shadow hover:shadow-2xl transition cursor-pointer"
//             >
//               <div className="relative">
//                 <img
//                   src={food.image}
//                   alt={food.name}
//                   className="w-full h-44 object-cover"
//                 />

//                 <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">
//                   <Star size={12} fill="black" />
//                   4.4
//                 </div>
//               </div>

//               <div className="p-4">
//                 <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                   <Clock3 size={15} />
//                   25 mins
//                 </div>

//                 <h3 className="font-black text-lg line-clamp-1">
//                   {food.name}
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-1">
//                   {food.category}
//                 </p>

//                 <div className="flex items-center justify-between mt-5">
//                   <p className="font-black text-xl">₹{food.price}</p>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigate(`/product/${food._id}`);
//                     }}
//                     className="bg-[#ff5200] text-white px-4 py-3 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition"
//                   >
//                     <ShoppingBag size={18} />
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredFoods.length === 0 && (
//           <div className="bg-white rounded-3xl p-10 text-center mt-10 shadow">
//             <h2 className="text-2xl font-black">No food items found</h2>
//             <p className="text-gray-500 mt-2">
//               Add food products from admin panel with type Food.
//             </p>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// function getEmoji(cat) {
//   const map = {
//     All: "🍽️",
//     Pizza: "🍕",
//     Burger: "🍔",
//     Biryani: "🍛",
//     Meals: "🍱",
//     Rolls: "🌯",
//     Chinese: "🍜",
//     Drinks: "🥤",
//   };

//   return map[cat] || "🍽️";
// }
// import { CartContext } from "../context/CartContext";
// import { Plus } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Star, Clock3, ShoppingBag, Flame, ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";
// import Header from "../components/Header";

// import { SearchContext } from "../context/SearchContext";
// import { useContext } from "react";

// export default function FoodHome() {
//   const navigate = useNavigate();

//   const { search } = useContext(SearchContext);

//   const [foods, setFoods] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     fetchFoods();
//   }, []);

//   const {
//   cart,
//   addToCart,
//   decreaseQty,
// } = useContext(CartContext);

//   const fetchFoods = async () => {
//     try {
//       const res = await API.get("/products");

//       const filtered = res.data.filter(
//         (item) => item.type === "food"
//       );

//       setFoods(filtered);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const filteredFoods =
//     selectedCategory === "All"
//       ? foods
//       : foods.filter(
//           (item) => item.category === selectedCategory
//         );

 
//   return (
//     <div className="min-h-screen bg-[#f6f6f6]">
//       <Header />

//       {/* HERO SECTION  */}
      
// <section className="max-w-7xl mx-auto px-4 pt-6 select-none">
//       {/* OUTER CARD CONTAINER WITH PREMIUM DARK CHARCOAL & ORANGE GRADIENT */}
//       <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#140B05] to-[#080402] text-white border border-orange-500/10 shadow-xl overflow-hidden group">
        
//         {/* Ambient Glows */}
//         <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

//         {/* FORCED HORIZONTAL SIDE-BY-SIDE FLEX LAYOUT FOR ALL SCREENS */}
//         <div className="flex flex-row items-center h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
          
//           {/* LEFT SIDE: TEXT DETAILS (FIXED WIDTH PERCENTAGE) */}
//           <div className="w-[58%] sm:w-[55%] p-4 sm:p-8 md:p-10 space-y-3 sm:space-y-4 text-left z-20 shrink-0">
            
//             {/* Cloud Kitchen Pill Badge */}
//             <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl shadow-sm">
//               <Flame size={12} className="text-orange-500 animate-pulse shrink-0" />
//               <span className="text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider text-orange-400">
//                 KKCart Cloud Kitchen
//               </span>
//             </div>

//             {/* Typography Header Block */}
//             <div className="space-y-1">
//               <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
//                 Hot food <br />
//                 delivered <br />
//                 <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   flash fast.
//                 </span>
//               </h1>
              
//               <p className="text-gray-400 text-[9px] sm:text-xs md:text-sm font-semibold max-w-xl leading-normal line-clamp-2 sm:line-clamp-none">
//                 Freshly prepared Biryani, hand-tossed Pizza, smashed Burgers, and authentic smoky Rolls.
//               </p>
//             </div>

//             {/* Premium Action Button */}
//             {/* <div className="pt-1">
//               <button
//                 type="button"
//                 onClick={() => navigate("/food")}
//                 className="h-8 sm:h-10 bg-orange-500 hover:bg-orange-600 text-white font-black text-[9px] sm:text-xs uppercase tracking-wider px-3 sm:px-5 rounded-lg sm:rounded-xl flex items-center gap-1 sm:gap-1.5 shadow-md transition-all active:scale-[0.98] duration-200 group/btn"
//               >
//                 <span>Order Now</span>
//                 <ArrowRight size={12} className="stroke-[3] transition-transform duration-200 group-hover/btn:translate-x-0.5 shrink-0" />
//               </button>
//             </div> */}

//           </div>

//           {/* RIGHT SIDE: PICTURE FRAME (FIXED REMAINING WIDTH PERCENTAGE) */}
//           <div className="w-[42%] sm:w-[45%] h-full absolute right-0 top-0 bottom-0 overflow-hidden z-10">
//             <img
//               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
//               alt="Premium Culinary Cloud Kitchen Food Presentation"
//               className="w-full h-full object-cover rounded-tl-[40px] sm:rounded-tl-[80px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
//             />
//             {/* Smooth Edge Linear Mask Layer to blend with dark background */}
//             <div className="absolute inset-0 bg-gradient-to-r from-[#080402] via-[#080402]/30 to-transparent z-10 pointer-events-none" />
//           </div>

//         </div>
//       </div>
//     </section>

//       {/* CATEGORIES */}
//       <section className="max-w-7xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-black mb-6">
//           Popular Categories
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
//           {[
//             "All",
//             "Pizza",
//             "Burger",
//             "Biryani",
//             "Meals",
//             "Rolls",
//             "Chinese",
//             "Drinks",
//           ].map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`rounded-[28px] p-5 shadow flex flex-col items-center justify-center hover:shadow-xl transition ${
//                 selectedCategory === cat
//                   ? "bg-[#ff5200] text-white"
//                   : "bg-white text-black"
//               }`}
//             >
//               <div className="text-4xl">{getEmoji(cat)}</div>
//               <h3 className="font-black mt-3">{cat}</h3>
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* FOOD LIST */}
//       <section className="max-w-7xl mx-auto px-4 pb-10">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-black">
//             {selectedCategory === "All"
//               ? "Popular Food Items"
//               : selectedCategory}
//           </h2>
//         </div>

//         {filteredFoods.length === 0 ? (
//           <div className="bg-white rounded-3xl p-10 text-center shadow">
//             <h2 className="text-2xl font-black">
//               No food items found
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Add food products from admin panel with type Food.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {filteredFoods.map((food) => {
//               const cartItem = cart.find((item) => item._id === food._id);

//               return (
//                 <div
//                   key={food._id}
//                   onClick={() =>
//                     navigate(`/product/${food._id}`)
//                 }
//                 className="
//                   group
//                   bg-white
//                   rounded-[36px]
//                   overflow-hidden
//                   border
//                   border-orange-100
//                   hover:border-orange-300
//                   hover:-translate-y-2
//                   hover:shadow-2xl
//                   transition-all
//                   duration-300
//                 "
//               >
//                 {/* IMAGE */}
//                 <div className="relative p-3 bg-gradient-to-b from-orange-50 to-white">
//                   <img
//                     src={food.image}
//                     alt={food.name}
//                     className="
//                       w-full
//                       h-44
//                       object-cover
//                       rounded-[24px]
//                       group-hover:scale-105
//                       transition
//                       duration-500
//                     "
//                   />

//                   {/* RATING */}
//                   {/* <div className="absolute top-5 left-5 bg-white rounded-full px-3 py-1 text-xs font-black flex items-center gap-1 shadow">
//                     <Star size={12} fill="#000" />
//                     4.4
//                   </div> */}
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-4">
//                   <div className="flex items-center gap-2 text-xs text-green-600 font-bold">
//                     <Clock3 size={14} />
//                     25 mins delivery
//                   </div>

//                   <h3 className="font-black text-lg mt-2 line-clamp-1">
//                     {food.name}
//                   </h3>

//                   {/* <span className="inline-block bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-full font-semibold">
//                     {food.category}
//                   </span> */}

//                   <div className="flex items-center justify-between ">
//                     <p className="text-xl font-black text-gray-900">
//                       ₹{food.price}
//                     </p>

//                     {/* <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         navigate(`/product/${food._id}`);
//                       }}
//                       className="
//                         bg-gradient-to-r
//                         from-orange-500
//                         to-red-500
//                         text-white
//                         px-5
//                         py-2.5
//                         rounded-full
//                         font-bold
//                         flex
//                         items-center
//                         gap-2
//                         shadow-lg
//                         hover:scale-105
//                         transition
//                       "
//                     >
//                       <ShoppingBag size={16} />
//                       Add
//                     </button> */}
//                     {!cartItem ? (
//   <button
//     onClick={(e) => {
//       e.stopPropagation();
//       addToCart(food);
//     }}
//     className="
//       bg-gradient-to-r
//       from-orange-500
//       to-red-500
//       text-white
//       px-5
//       py-2.5
//       rounded-full
//       font-bold
//       flex
//       items-center
//       gap-2
//       shadow-lg
//       hover:scale-105
//       transition
//     "
//   >
//     <Plus size={16} />
//     ADD
//   </button>
// ) : (
//   <div
//     onClick={(e) => e.stopPropagation()}
//     className="
//       flex
//       items-center
//       bg-green-600
//       text-white
//       rounded-full
//       overflow-hidden
//       shadow-lg
//     "
//   >
//     <button
//       onClick={() => decreaseQty(food._id)}
//       className="px-4 py-2 font-bold text-lg"
//     >
//       -
//     </button>

//     <span className="px-4 font-bold">
//       {cartItem.qty}
//     </span>

//     <button
//       onClick={() => addToCart(food)}
//       className="px-4 py-2 font-bold text-lg"
//     >
//       +
//     </button>
//   </div>
// )}
//                   </div>
//                 </div>
//               </div>
//             );
//             })}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// function getEmoji(cat) {
//   const map = {
//     All: "🍽️",
//     Pizza: "🍕",
//     Burger: "🍔",
//     Biryani: "🍛",
//     Meals: "🍱",
//     Rolls: "🌯",
//     Chinese: "🍜",
//     Drinks: "🥤",
//   };

//   return map[cat] || "🍽️";
// }


import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Clock3, Flame, Star, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { SearchContext } from "../context/SearchContext";
import API from "../api";
import Header from "../components/Header";

export default function FoodHome() {
  const navigate = useNavigate();
  const { search } = useContext(SearchContext);
  const { cart, addToCart, decreaseQty } = useContext(CartContext);

  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await API.get("/products");
      // Matches both uppercase and lowercase DB entries safely
      const filtered = res.data.filter(
        (item) => item.type?.toLowerCase() === "food"
      );
      setFoods(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  // Combined Search and Category filtration pipeline
  const filteredFoods = foods.filter((food) => {
    const categoryMatch = selectedCategory === "All" || food.category === selectedCategory;
    const searchMatch = !search || food.name?.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-[#FFFDFB] font-sans antialiased pb-16 select-none">
      <Header />

      {/* HERO BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#140B05] to-[#080402] text-white border border-orange-500/10 shadow-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex flex-row items-center h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
            <div className="w-[58%] sm:w-[55%] p-4 sm:p-8 md:p-10 space-y-3 sm:space-y-4 text-left z-20 shrink-0">
              <div className="inline-flex items-center gap-1.5 bg-orange-500/10 backdrop-blur-md border border-orange-500/20 px-2.5 py-1 rounded-xl shadow-sm">
                <Flame size={12} className="text-orange-500 animate-pulse shrink-0" />
                <span className="text-[9px] sm:text-xs font-black uppercase tracking-wider text-orange-400">
                  KKCart Cloud Kitchen
                </span>
              </div>

              <div className="space-y-1">
                <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                  Hot food <br />
                  delivered <br />
                  <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                    flash fast.
                  </span>
                </h1>
                <p className="text-gray-400 text-[9px] sm:text-xs md:text-sm font-semibold max-w-xl leading-normal line-clamp-2 sm:line-clamp-none">
                  Freshly prepared Biryani, hand-tossed Pizza, smashed Burgers, and authentic smoky Rolls.
                </p>
              </div>
            </div>

            <div className="w-[42%] sm:w-[45%] h-full absolute right-0 top-0 bottom-0 overflow-hidden z-10">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Premium Culinary Cloud Kitchen"
                className="w-full h-full object-cover rounded-tl-[40px] sm:rounded-tl-[80px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080402] via-[#080402]/30 to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* HORIZONTAL SWIGGY-STYLE SLICK CATEGORIES TRACK */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-5 px-1">
          What's on your mind?
        </h2>

        {/* Smooth horizontal scroll container for quick thumbnail tapping */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none no-scrollbar snap-x scroll-smooth">
          {[
            "All",
            "Pizza",
            "Burger",
            "Biryani",
            "Meals",
            "Rolls",
            "Chinese",
            "Drinks",
          ].map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`flex-none snap-start flex flex-col items-center justify-center w-20 sm:w-24 p-3 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-orange-50 border-orange-200 text-[#FC8019] shadow-sm scale-95"
                    : "bg-white border-gray-100 text-gray-700 hover:border-gray-200 shadow-sm"
                }`}
              >
                <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110">
                  {getEmoji(cat)}
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold tracking-tight mt-2 text-center truncate w-full">
                  {cat}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* FOOD ITEMS LIST GRID CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-6 px-1">
          {selectedCategory === "All" ? "Popular Culinary Picks" : `Top ${selectedCategory} Creations`}
        </h2>

        {filteredFoods.length === 0 ? (
          <div className="bg-white rounded-[24px] border border-gray-100 p-12 text-center shadow-sm max-w-md mx-auto mt-6">
            <div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag size={24} />
            </div>
            <h3 className="text-base font-black text-gray-900 tracking-tight">No Items Available</h3>
            <p className="text-gray-400 text-xs font-semibold mt-1">
              Try searching another culinary option or update filters.
            </p>
          </div>
        ) : (
          
          /* FIXED SQUIRCLE IMAGE-DOMINANT RESPONSIVE MATRIX GRID */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredFoods.map((food) => {
              const cartItem = cart.find((item) => item._id === food._id);

              return (
                <div
                  key={food._id}
                  onClick={() => navigate(`/product/${food._id}`)}
                  className="group bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* UPPER TIER: ASPECT SQUARE THUMBNAIL WITH FLOATING DATA TAGS */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-square bg-gray-50/50 overflow-hidden flex items-center justify-center">
                    <img
                      src={food.image || "/products/default.jpg"}
                      alt={food.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Left Top Float Meta Badge Container */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
                      <div className="bg-white/80 backdrop-blur-md text-[#60B246] text-[9px] font-black px-1.5 py-0.5 rounded-lg border border-green-500/10 flex items-center gap-0.5 shadow-sm">
                        <Star size={10} className="fill-[#60B246] stroke-none" />
                        <span>4.3</span>
                      </div>
                    </div>

                    {/* Right Bottom Delivery ETA Tag */}
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] font-black px-2 py-0.5 rounded-lg flex items-center gap-0.5 tracking-wide shadow-sm">
                      <Clock3 size={10} className="stroke-[2.5]" />
                      <span>25 MIN</span>
                    </div>
                  </div>

                  {/* LOWER TIER: MINIMALIST SPECIFICATION DATA BOX */}
                  <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2 text-left">
                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-extrabold text-gray-800 line-clamp-1 group-hover:text-[#FC8019] transition-colors leading-tight">
                        {food.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-gray-400 font-bold tracking-wide uppercase">
                        {food.category || "Cloud Kitchen"}
                      </p>
                    </div>

                    {/* PRICE FIELD AND INTERACTION BUTTON ACTION CONTAINER */}
                    <div className="flex items-center justify-between mt-1">
                      <div>
                        <p className="text-sm sm:text-base font-black text-gray-900 leading-none">
                          ₹{food.price}
                        </p>
                      </div>

                      {/* SWIGGY TYPE WHITE FLUID INCREMENT ACTION BOXES */}
                      {!cartItem ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation(); // Stops routing to detail page when pressing button
                            addToCart(food);
                          }}
                          className="h-8 bg-white border border-gray-200 hover:border-[#60B246] text-[#60B246] px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all active:scale-95 shadow-sm hover:bg-green-50/10"
                        >
                          Add
                        </button>
                      ) : (
                        <div
                          onClick={(e) => e.stopPropagation()} // Prevents event bubbling parameters execution
                          className="flex items-center bg-[#60B246] text-white rounded-xl overflow-hidden shadow-sm h-8"
                        >
                          <button
                            type="button"
                            onClick={() => decreaseQty(food._id)}
                            className="px-2.5 h-full font-black text-sm hover:bg-green-700 transition"
                          >
                            −
                          </button>
                          <span className="px-1 font-black text-xs min-w-[12px] text-center select-none">
                            {cartItem.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => addToCart(food)}
                            className="px-2.5 h-full font-black text-sm hover:bg-green-700 transition"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

function getEmoji(cat) {
  const map = {
    All: "🍽️",
    Pizza: "🍕",
    Burger: "🍔",
    Biryani: "🍛",
    Meals: "Bento",
    Rolls: "🌯",
    Chinese: "🍜",
    Drinks: "🥤",
  };
  return map[cat] || "🍽️";
}