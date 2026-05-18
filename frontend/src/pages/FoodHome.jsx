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

import { useEffect, useState } from "react";
import { Star, Clock3, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Header from "../components/Header";

export default function FoodHome() {
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const res = await API.get("/products");

      const filtered = res.data.filter(
        (item) => item.type === "food"
      );

      setFoods(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <Header />

      <section className="bg-[#ff5200] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <div className="bg-white/20 inline-block px-4 py-2 rounded-full text-sm font-bold">
                KKCart Cloud Kitchen
              </div>

              <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
                Hot food
                <br />
                delivered
                <br />
                fast
              </h1>

              <p className="mt-5 text-white/90 text-lg max-w-xl">
                Fresh biryani, pizza, burgers, rolls and meals prepared in our own kitchen.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Food"
                className="w-full h-[420px] object-cover rounded-[40px] shadow-2xl"
              />

              <div className="absolute bottom-5 left-5 bg-white rounded-3xl p-5 text-black shadow-xl">
                <p className="text-sm text-gray-500">Delivery in</p>
                <h2 className="text-4xl font-black text-[#ff5200]">
                  30 mins
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-black mb-6">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {["All", "Pizza", "Burger", "Biryani", "Meals", "Rolls", "Chinese", "Drinks"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-3xl p-5 shadow flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#ff5200] text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="text-5xl">{getEmoji(cat)}</div>
                <h3 className="font-black mt-3">{cat}</h3>
              </button>
            )
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">
            {selectedCategory === "All"
              ? "Popular Food Items"
              : selectedCategory}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredFoods.map((food) => (
            <div
              key={food._id}
              onClick={() => navigate(`/product/${food._id}`)}
              className="bg-white rounded-[28px] overflow-hidden shadow hover:shadow-2xl transition cursor-pointer"
            >
              <div className="relative">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-44 object-cover"
                />

                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">
                  <Star size={12} fill="black" />
                  4.4
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Clock3 size={15} />
                  25 mins
                </div>

                <h3 className="font-black text-lg line-clamp-1">
                  {food.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {food.category}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <p className="font-black text-xl">₹{food.price}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${food._id}`);
                    }}
                    className="bg-[#ff5200] text-white px-4 py-3 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition"
                  >
                    <ShoppingBag size={18} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="bg-white rounded-3xl p-10 text-center mt-10 shadow">
            <h2 className="text-2xl font-black">No food items found</h2>
            <p className="text-gray-500 mt-2">
              Add food products from admin panel with type Food.
            </p>
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
    Meals: "🍱",
    Rolls: "🌯",
    Chinese: "🍜",
    Drinks: "🥤",
  };

  return map[cat] || "🍽️";
}