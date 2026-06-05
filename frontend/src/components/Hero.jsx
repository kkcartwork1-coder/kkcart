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

// import { useNavigate } from "react-router-dom";
// import { ArrowRight, Clock, Flame, ShoppingBag } from "lucide-react";

// export default function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#fff7ed] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
//         <div className="rounded-[44px] bg-white shadow-xl border overflow-hidden">
//           <div className="grid lg:grid-cols-2">
//             {/* LEFT */}
//             <div className="p-7 md:p-12">
//               <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-black text-sm">
//                 <Flame size={16} />
//                 KKCart Super Delivery
//               </div>

//               <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] mt-6">
//                 Food & grocery
//                 <br />
//                 delivered fast.
//               </h1>

//               <p className="text-gray-500 text-lg mt-5 max-w-xl">
//                 Choose fresh grocery essentials or hot food from our own cloud kitchen.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4 mt-8">
//                 <ActionCard
//                   icon="🛒"
//                   title="Grocery Delivery"
//                   desc="Fruits, vegetables, dairy & essentials"
//                   button="Shop Grocery"
//                   color="green"
//                   onClick={() => navigate("/grocery")}
//                 />

//                 <ActionCard
//                   icon="🍔"
//                   title="Cloud Kitchen"
//                   desc="Biryani, pizza, burgers & meals"
//                   button="Order Food"
//                   color="orange"
//                   onClick={() => navigate("/food")}
//                 />
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="relative min-h-[520px] bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//                 alt="Food and Grocery"
//                 className="absolute inset-0 w-full h-full object-cover opacity-45"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

//               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
//                 <div className="flex items-center gap-3">
//                   <Clock className="text-orange-500" />
//                   <div>
//                     <p className="text-xs text-gray-500 font-bold">
//                       Delivery time
//                     </p>
//                     <h3 className="text-2xl font-black text-gray-900">
//                       10–30 mins
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
//                 <div className="flex items-center justify-between gap-4">
//                   <div>
//                     <p className="text-sm text-gray-500 font-bold">
//                       Today’s Special
//                     </p>
//                     <h3 className="text-2xl font-black text-gray-900">
//                       Fresh food + daily needs
//                     </h3>
//                   </div>

//                   <div className="text-5xl">⚡</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CATEGORY STRIP */}
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
//           <Category emoji="🥦" title="Veggies" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
//           <Category emoji="🥛" title="Dairy" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍕" title="Pizza" onClick={() => navigate("/food")} />
//           <Category emoji="🍔" title="Burger" onClick={() => navigate("/food")} />
//           <Category emoji="🍛" title="Biryani" onClick={() => navigate("/food")} />
//         </div>
//       </div>
//     </section>
//   );
// }

// function ActionCard({ icon, title, desc, button, color, onClick }) {
//   const isGreen = color === "green";

//   return (
//     <div
//       onClick={onClick}
//       className={`rounded-[28px] p-5 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl ${
//         isGreen ? "bg-green-50" : "bg-orange-50"
//       }`}
//     >
//       <div className="text-5xl mb-4">{icon}</div>

//       <h2 className="text-2xl font-black text-gray-900">{title}</h2>

//       <p className="text-gray-500 text-sm mt-2 min-h-[42px]">{desc}</p>

//       <button
//         className={`mt-5 w-full py-3 rounded-2xl font-black text-white flex items-center justify-center gap-2 ${
//           isGreen ? "bg-green-600" : "bg-orange-500"
//         }`}
//       >
//         {button}
//         <ArrowRight size={18} />
//       </button>
//     </div>
//   );
// }

// function Category({ emoji, title, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-white rounded-3xl p-5 shadow border hover:shadow-xl hover:-translate-y-1 transition"
//     >
//       <div className="text-4xl">{emoji}</div>
//       <p className="font-black mt-2 text-gray-800">{title}</p>
//     </button>
//   );
// }

// import { useNavigate } from "react-router-dom";
// import {
//   ArrowRight,
//   Clock,
//   Flame,
//   ShieldCheck,
//   Star,
//   Truck,
//   Wallet,
// } from "lucide-react";

// export default function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#fff7ed] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
//         {/* HERO */}
//         <div className="rounded-[44px] bg-white shadow-2xl border overflow-hidden">
//           <div className="grid lg:grid-cols-2">
//             <div className="p-7 md:p-12">
//               <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-black text-sm">
//                 <Flame size={16} />
//                 KKCart Super Delivery
//               </div>

//               <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] mt-6">
//                 Food & grocery
//                 <br />
//                 delivered fast.
//               </h1>

//               <p className="text-gray-500 text-lg mt-5 max-w-xl">
//                 Fresh groceries, meat, sweets and hot food from our own cloud kitchen delivered to your doorstep.
//               </p>

//               <div className="grid sm:grid-cols-2 gap-4 mt-8">
//                 <ActionCard
//                   icon="🛒"
//                   title="Grocery Delivery"
//                   desc="Fruits, vegetables, dairy, meat & sweets"
//                   button="Shop Grocery"
//                   color="green"
//                   onClick={() => navigate("/grocery")}
//                 />

//                 <ActionCard
//                   icon="🍔"
//                   title="Cloud Kitchen"
//                   desc="Biryani, pizza, burgers, rolls & meals"
//                   button="Order Food"
//                   color="orange"
//                   onClick={() => navigate("/food")}
//                 />
//               </div>
//             </div>

//             <div className="relative min-h-[520px] bg-gradient-to-br from-orange-500 to-red-600 overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//                 alt="Food and Grocery"
//                 className="absolute inset-0 w-full h-full object-cover opacity-50"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
//                 <div className="flex items-center gap-3">
//                   <Clock className="text-orange-500" />
//                   <div>
//                     <p className="text-xs text-gray-500 font-bold">
//                       Delivery time
//                     </p>
//                     <h3 className="text-2xl font-black text-gray-900">
//                       10–30 mins
//                     </h3>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl">
//                 <p className="text-sm text-gray-500 font-bold">
//                   Today’s Special
//                 </p>
//                 <h3 className="text-2xl font-black text-gray-900">
//                   Fresh food + daily needs ⚡
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CATEGORIES */}
//         <div className="grid grid-cols-3 md:grid-cols-8 gap-4 mt-8">
//           <Category emoji="🥦" title="Veggies" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
//           <Category emoji="🥛" title="Dairy" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍗" title="Meat" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍰" title="Sweets" onClick={() => navigate("/grocery")} />
//           <Category emoji="🍕" title="Pizza" onClick={() => navigate("/food")} />
//           <Category emoji="🍔" title="Burger" onClick={() => navigate("/food")} />
//           <Category emoji="🍛" title="Biryani" onClick={() => navigate("/food")} />
//         </div>

//         {/* OFFER BANNERS */}
//         <div className="grid md:grid-cols-3 gap-5 mt-10">
//           <Offer title="Flat ₹100 OFF" desc="On first order" emoji="🎁" />
//           <Offer title="Free Delivery" desc="Above ₹199" emoji="🛵" />
//           <Offer title="Fresh Daily" desc="Quality checked items" emoji="🥬" />
//         </div>

//         {/* GROCERY + FOOD */}
//         <div className="grid md:grid-cols-2 gap-6 mt-10">
//           <BigBanner
//             title="Fresh Grocery Store"
//             desc="Daily essentials, fruits, dairy, fish, chicken and sweets."
//             button="Shop Grocery"
//             emoji="🛒"
//             color="green"
//             onClick={() => navigate("/grocery")}
//           />

//           <BigBanner
//             title="Own Cloud Kitchen"
//             desc="Hot biryani, pizza, burger, rolls and meals made fresh."
//             button="Order Food"
//             emoji="🍔"
//             color="orange"
//             onClick={() => navigate("/food")}
//           />
//         </div>

//         {/* WHY */}
//         <div className="mt-12">
//           <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
//             Why choose KKCart?
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <Why icon={<Truck />} title="Fast Delivery" desc="10–30 mins" />
//             <Why icon={<ShieldCheck />} title="Fresh Items" desc="Quality checked" />
//             <Why icon={<Wallet />} title="Best Price" desc="Local pricing" />
//             <Why icon={<Star />} title="Trusted" desc="Happy customers" />
//           </div>
//         </div>

//         {/* REVIEWS */}
//         <div className="mt-12">
//           <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
//             Customer love us
//           </h2>

//           <div className="grid md:grid-cols-3 gap-5">
//             <Review text="Delivered in 15 minutes. Grocery quality was very good." />
//             <Review text="Food was fresh and hot. Best local delivery service." />
//             <Review text="Easy to order and prices are affordable." />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ActionCard({ icon, title, desc, button, color, onClick }) {
//   const isGreen = color === "green";

//   return (
//     <div
//       onClick={onClick}
//       className={`rounded-[28px] p-5 cursor-pointer transition hover:-translate-y-1 hover:shadow-xl ${
//         isGreen ? "bg-green-50" : "bg-orange-50"
//       }`}
//     >
//       <div className="text-5xl mb-4">{icon}</div>
//       <h2 className="text-2xl font-black text-gray-900">{title}</h2>
//       <p className="text-gray-500 text-sm mt-2 min-h-[42px]">{desc}</p>

//       <button
//         className={`mt-5 w-full py-3 rounded-2xl font-black text-white flex items-center justify-center gap-2 ${
//           isGreen ? "bg-green-600" : "bg-orange-500"
//         }`}
//       >
//         {button}
//         <ArrowRight size={18} />
//       </button>
//     </div>
//   );
// }

// function Category({ emoji, title, onClick }) {
//   return (
//     <button
//       onClick={onClick}
//       className="bg-white rounded-3xl p-5 shadow border hover:shadow-xl hover:-translate-y-1 transition"
//     >
//       <div className="text-4xl">{emoji}</div>
//       <p className="font-black mt-2 text-gray-800 text-sm">{title}</p>
//     </button>
//   );
// }

// function Offer({ title, desc, emoji }) {
//   return (
//     <div className="bg-white rounded-[30px] p-6 shadow border flex items-center justify-between">
//       <div>
//         <h3 className="text-xl font-black text-gray-900">{title}</h3>
//         <p className="text-gray-500 text-sm mt-1">{desc}</p>
//       </div>
//       <div className="text-5xl">{emoji}</div>
//     </div>
//   );
// }

// function BigBanner({ title, desc, button, emoji, color, onClick }) {
//   const isGreen = color === "green";

//   return (
//     <div
//       className={`relative overflow-hidden rounded-[38px] p-8 text-white shadow-xl ${
//         isGreen
//           ? "bg-gradient-to-br from-green-500 to-green-700"
//           : "bg-gradient-to-br from-orange-500 to-red-600"
//       }`}
//     >
//       <div className="relative z-10">
//         <h2 className="text-4xl font-black">{title}</h2>
//         <p className="mt-3 text-white/90 max-w-md">{desc}</p>

//         <button
//           onClick={onClick}
//           className={`mt-6 px-6 py-3 rounded-2xl font-black ${
//             isGreen ? "bg-white text-green-700" : "bg-white text-orange-600"
//           }`}
//         >
//           {button}
//         </button>
//       </div>

//       <div className="absolute right-4 bottom-0 text-[130px] opacity-20">
//         {emoji}
//       </div>
//     </div>
//   );
// }

// function Why({ icon, title, desc }) {
//   return (
//     <div className="bg-white rounded-3xl p-5 shadow border">
//       <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
//         {icon}
//       </div>
//       <h3 className="font-black mt-4">{title}</h3>
//       <p className="text-sm text-gray-500 mt-1">{desc}</p>
//     </div>
//   );
// }

// function Review({ text }) {
//   return (
//     <div className="bg-white rounded-3xl p-6 shadow border">
//       <p className="text-yellow-500 text-xl">★★★★★</p>
//       <p className="text-gray-600 mt-3">"{text}"</p>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  ShieldCheck,
  Star,
  Truck,
  Wallet,
} from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#fff8f1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-14">
        {/* TOP HERO */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* LEFT MAIN */}
          <div className="lg:col-span-7 bg-[#ff5200] rounded-[45px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-black">
                KKCart Grocery + Food
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.02] mt-6">
                Everything
                <br />
                delivered
                <br />
                in minutes.
              </h1>

              <p className="text-white/90 text-lg mt-5 max-w-xl">
                Fresh grocery, meat, sweets and hot meals from our own cloud
                kitchen.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => navigate("/grocery")}
                  className="bg-white text-[#ff5200] px-7 py-4 rounded-2xl font-black flex items-center gap-2"
                >
                  Shop Grocery <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => navigate("/food")}
                  className="bg-black text-white px-7 py-4 rounded-2xl font-black flex items-center gap-2"
                >
                  Order Food <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="absolute right-5 bottom-0 text-[180px] md:text-[240px] opacity-20">
              🛵
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="lg:col-span-5 grid gap-6">
            <SmallHero
              title="Groceries in 10 mins"
              desc="Fruits, dairy, bakery, chicken & fish"
              emoji="🛒"
              color="green"
              onClick={() => navigate("/grocery")}
            />

            <SmallHero
              title="Hot food from kitchen"
              desc="Biryani, pizza, burger and meals"
              emoji="🍔"
              color="orange"
              onClick={() => navigate("/food")}
            />
          </div>
        </div>

        {/* CATEGORY PILLS */}
        <div className="grid grid-cols-3 md:grid-cols-8 gap-4 mt-8">
        <Category emoji="🛒" title="Grocery" onClick={() => navigate("/grocery")} />
          <Category emoji="🍎" title="Fruits" onClick={() => navigate("/grocery")} />
          <Category emoji="🥦" title="Veggies" onClick={() => navigate("/grocery")} />
          <Category emoji="🥛" title="Dairy" onClick={() => navigate("/grocery")} />
          
          <Category emoji="🍰" title="Sweets" onClick={() => navigate("/grocery")} />
          <Category emoji="🍗" title="Meat" onClick={() => navigate("/grocery")} />
        
          <Category emoji="🍛" title="Biryani" onClick={() => navigate("/food")} />
        </div>

        {/* OFFERS */}
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <Offer emoji="🎁" title="Flat ₹50 OFF" desc="On your first order" />
          <Offer emoji="⚡" title="Fast Delivery" desc="10–30 min doorstep delivery" />
          <Offer emoji="🥬" title="Fresh Daily" desc="Quality checked products" />
        </div>

        {/* FEATURED SECTIONS */}
        {/* <div className="grid md:grid-cols-2 gap-6 mt-10">
          <FeatureBanner
            title="Daily grocery essentials"
            desc="Fresh vegetables, fruits, dairy, bakery, sweets, meat and fish."
            button="Explore Grocery"
            emoji="🥦"
            color="green"
            onClick={() => navigate("/grocery")}
          />

          <FeatureBanner
            title="Cloud kitchen specials"
            desc="Freshly cooked biryani, burgers, pizza, rolls and meals."
            button="Explore Food"
            emoji="🍛"
            color="orange"
            onClick={() => navigate("/food")}
          />
        </div> */}

        {/* WHY */}
        <div className="mt-12">
          <div className="flex items-end justify-between mb-5">
            <div>
              <p className="text-orange-500 font-black uppercase tracking-widest text-sm">
                Why KKCart
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Built for fast local delivery
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Why icon={<Truck />} title="Quick Delivery" desc="10–30 mins" />
            <Why icon={<ShieldCheck />} title="Fresh Quality" desc="Checked items" />
            <Why icon={<Wallet />} title="Best Price" desc="Local pricing" />
            <Why icon={<Star />} title="Trusted Store" desc="Loved locally" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallHero({ title, desc, emoji, color, onClick }) {
  const green = color === "green";

  return (
    <div
      onClick={onClick}
      className={`min-h-[220px] rounded-[38px] p-7 text-white relative overflow-hidden cursor-pointer shadow-xl hover:-translate-y-1 transition ${
        green
          ? "bg-gradient-to-br from-green-500 to-green-700"
          : "bg-gradient-to-br from-orange-500 to-red-600"
      }`}
    >
      <h2 className="text-3xl font-black max-w-xs">{title}</h2>
      <p className="text-white/90 mt-3 max-w-xs">{desc}</p>

      <button className="mt-6 bg-white text-gray-900 px-5 py-3 rounded-2xl font-black">
        Explore
      </button>

      <div className="absolute right-4 bottom-0 text-[120px] opacity-20">
        {emoji}
      </div>
    </div>
  );
}

function Category({ emoji, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-[28px] p-5 shadow border hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="text-4xl">{emoji}</div>
      <p className="font-black mt-2 text-sm text-gray-800">{title}</p>
    </button>
  );
}

function Offer({ emoji, title, desc }) {
  return (
    <div className="bg-white rounded-[30px] p-6 shadow border flex items-center justify-between">
      <div>
        <h3 className="font-black text-xl">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
      </div>
      <div className="text-5xl">{emoji}</div>
    </div>
  );
}

function FeatureBanner({ title, desc, button, emoji, color, onClick }) {
  const green = color === "green";

  return (
    <div
      className={`relative rounded-[40px] p-8 overflow-hidden text-white shadow-xl ${
        green
          ? "bg-gradient-to-br from-emerald-500 to-green-700"
          : "bg-gradient-to-br from-orange-500 to-red-600"
      }`}
    >
      <div className="relative z-10 max-w-md">
        <h2 className="text-4xl font-black">{title}</h2>
        <p className="text-white/90 mt-3">{desc}</p>

        <button
          onClick={onClick}
          className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-2xl font-black"
        >
          {button}
        </button>
      </div>

      <div className="absolute right-5 bottom-0 text-[140px] opacity-20">
        {emoji}
      </div>
    </div>
  );
}

function Why({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-3xl p-5 border shadow">
      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-black mt-4">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{desc}</p>
    </div>
  );
}



