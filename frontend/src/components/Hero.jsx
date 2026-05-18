// import { useNavigate } from "react-router-dom";

// export default function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#f7f7f7] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">

//         {/* TITLE */}
//         <div className="mb-10">
//           <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05]">
//             Order food &
//             <br />
//             groceries to your
//             <br />
//             doorstep
//           </h1>

//           <p className="text-gray-500 mt-5 text-xl">
//             Fast delivery from our kitchen & grocery store.
//           </p>
//         </div>

//         {/* MAIN CARDS */}
//         <div className="grid md:grid-cols-2 gap-7">

//           {/* GROCERY */}
//           <div className="group relative min-h-[580px] rounded-[42px] overflow-hidden bg-gradient-to-br from-green-500 to-green-700 p-8 shadow-2xl hover:scale-[1.02] transition duration-500">

//             <img
//               src="https://images.unsplash.com/photo-1542838132-92c53300491e"
//               alt="Grocery"
//               className="absolute bottom-0 right-0 w-[78%] h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
//             />

//             <div className="absolute inset-0 bg-black/10"></div>

//             <div className="relative z-10 flex flex-col justify-between h-full text-white">

//               <div>

//                 <div className="bg-white/20 backdrop-blur-md inline-flex px-4 py-2 rounded-full text-sm font-bold">
//                   KKCart Grocery
//                 </div>

//                 <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
//                   Groceries
//                   <br />
//                   in 10 mins
//                 </h2>

//                 <p className="mt-5 text-white/90 text-lg max-w-md">
//                   Fruits, vegetables, dairy, bakery and daily essentials.
//                 </p>

//                 <div className="grid grid-cols-3 gap-3 mt-8 max-w-sm">

//                   <Mini emoji="🥦" title="Vegetables" />
//                   <Mini emoji="🍎" title="Fruits" />
//                   <Mini emoji="🥛" title="Dairy" />

//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate("/grocery")}
//                 className="w-fit bg-white text-green-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition shadow-2xl"
//               >
//                 Shop Grocery
//               </button>
//             </div>
//           </div>

//           {/* FOOD */}
//           <div className="group relative min-h-[580px] rounded-[42px] overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 p-8 shadow-2xl hover:scale-[1.02] transition duration-500">

//             <img
//               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//               alt="Food"
//               className="absolute bottom-0 right-0 w-[78%] h-full object-cover group-hover:scale-105 transition duration-500 opacity-95"
//             />

//             <div className="absolute inset-0 bg-black/10"></div>

//             <div className="relative z-10 flex flex-col justify-between h-full text-white">

//               <div>

//                 <div className="bg-white/20 backdrop-blur-md inline-flex px-4 py-2 rounded-full text-sm font-bold">
//                   KKCart Cloud Kitchen
//                 </div>

//                 <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
//                   Hot food
//                   <br />
//                   from our
//                   <br />
//                   kitchen
//                 </h2>

//                 <p className="mt-5 text-white/90 text-lg max-w-md">
//                   Pizza, burgers, biryani, rolls and fresh meals delivered fast.
//                 </p>

//                 <div className="grid grid-cols-3 gap-3 mt-8 max-w-sm">

//                   <Mini emoji="🍕" title="Pizza" />
//                   <Mini emoji="🍔" title="Burger" />
//                   <Mini emoji="🍛" title="Biryani" />

//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate("/food")}
//                 className="w-fit bg-white text-[#ff5200] px-8 py-4 rounded-2xl font-black hover:scale-105 transition shadow-2xl"
//               >
//                 Order Food
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* CATEGORY ROW */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">

//           <Category
//             emoji="🥦"
//             title="Vegetables"
//             onClick={() => navigate("/grocery")}
//           />

//           <Category
//             emoji="🍎"
//             title="Fruits"
//             onClick={() => navigate("/grocery")}
//           />

//           <Category
//             emoji="🍕"
//             title="Pizza"
//             onClick={() => navigate("/food")}
//           />

//           <Category
//             emoji="🍔"
//             title="Burger"
//             onClick={() => navigate("/food")}
//           />

//           <Category
//             emoji="🍛"
//             title="Biryani"
//             onClick={() => navigate("/food")}
//           />

//           <Category
//             emoji="🥤"
//             title="Drinks"
//             onClick={() => navigate("/food")}
//           />

//         </div>
//       </div>
//     </section>
//   );
// }

// function Category({ emoji, title, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className="bg-white rounded-3xl p-5 shadow hover:shadow-2xl hover:-translate-y-1 transition flex flex-col items-center justify-center cursor-pointer"
//     >
//       <div className="text-5xl">
//         {emoji}
//       </div>

//       <h3 className="font-black mt-3 text-gray-800">
//         {title}
//       </h3>
//     </div>
//   );
// }

// function Mini({ emoji, title }) {
//   return (
//     <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 text-center">
//       <div className="text-3xl">
//         {emoji}
//       </div>

//       <p className="text-sm font-bold mt-2">
//         {title}
//       </p>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock, Flame, ShoppingBag } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fff7ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
        <div className="rounded-[44px] bg-white shadow-xl border overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}
            <div className="p-7 md:p-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-black text-sm">
                <Flame size={16} />
                KKCart Super Delivery
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] mt-6">
                Food & grocery
                <br />
                delivered fast.
              </h1>

              <p className="text-gray-500 text-lg mt-5 max-w-xl">
                Choose fresh grocery essentials or hot food from our own cloud kitchen.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <ActionCard
                  icon="🛒"
                  title="Grocery Delivery"
                  desc="Fruits, vegetables, dairy & essentials"
                  button="Shop Grocery"
                  color="green"
                  onClick={() => navigate("/grocery")}
                />

                <ActionCard
                  icon="🍔"
                  title="Cloud Kitchen"
                  desc="Biryani, pizza, burgers & meals"
                  button="Order Food"
                  color="orange"
                  onClick={() => navigate("/food")}
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-[520px] bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Food and Grocery"
                className="absolute inset-0 w-full h-full object-cover opacity-45"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Clock className="text-orange-500" />
                  <div>
                    <p className="text-xs text-gray-500 font-bold">
                      Delivery time
                    </p>
                    <h3 className="text-2xl font-black text-gray-900">
                      10–30 mins
                    </h3>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500 font-bold">
                      Today’s Special
                    </p>
                    <h3 className="text-2xl font-black text-gray-900">
                      Fresh food + daily needs
                    </h3>
                  </div>

                  <div className="text-5xl">⚡</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY STRIP */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          <Category emoji="🥦" title="Veggies" onClick={() => navigate("/grocery")} />
          <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
          <Category emoji="🥛" title="Dairy" onClick={() => navigate("/grocery")} />
          <Category emoji="🍕" title="Pizza" onClick={() => navigate("/food")} />
          <Category emoji="🍔" title="Burger" onClick={() => navigate("/food")} />
          <Category emoji="🍛" title="Biryani" onClick={() => navigate("/food")} />
        </div>
      </div>
    </section>
  );
}

function ActionCard({ icon, title, desc, button, color, onClick }) {
  const isGreen = color === "green";

  return (
    <div
      onClick={onClick}
      className={`rounded-[28px] p-5 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl ${
        isGreen ? "bg-green-50" : "bg-orange-50"
      }`}
    >
      <div className="text-5xl mb-4">{icon}</div>

      <h2 className="text-2xl font-black text-gray-900">{title}</h2>

      <p className="text-gray-500 text-sm mt-2 min-h-[42px]">{desc}</p>

      <button
        className={`mt-5 w-full py-3 rounded-2xl font-black text-white flex items-center justify-center gap-2 ${
          isGreen ? "bg-green-600" : "bg-orange-500"
        }`}
      >
        {button}
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

function Category({ emoji, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-3xl p-5 shadow border hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="text-4xl">{emoji}</div>
      <p className="font-black mt-2 text-gray-800">{title}</p>
    </button>
  );
}