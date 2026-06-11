// import { useState } from "react";
// import Header from "../components/Header";
// import CategoryCard from "../components/CategoryCard";
// import ProductCard from "../components/ProductCard";

// export default function GroceryHome() {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   return (
//     <main className="min-h-screen bg-[#f7f7f7]">

//       <Header />

//       {/* HERO */}
//       <section className="max-w-7xl mx-auto px-4 pt-6">
//         <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">

//           <div className="absolute right-0 bottom-0 text-[180px] opacity-10">
//             🛒
//           </div>

//           <div className="relative z-10">
//             <div className="bg-white/20 inline-flex px-4 py-2 rounded-full text-sm font-bold">
//               KKCart Grocery
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
//               Groceries
//               <br />
//               delivered
//               <br />
//               in 10 mins
//             </h1>

//             <p className="mt-5 text-lg text-white/90 max-w-2xl">
//               Fruits, vegetables, dairy, bakery and daily essentials delivered super fast.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CATEGORY */}
//       <CategoryCard
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />

//       {/* PRODUCTS */}
//       <ProductCard selectedCategory={selectedCategory} />
//     </main>
//   );
// }

// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import CategoryCard from "../components/CategoryCard";
// import ProductCard from "../components/ProductCard";
// import API from "../api";

// export default function GroceryHome() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchGroceryProducts();
//   }, []);

//   const fetchGroceryProducts = async () => {
//     const res = await API.get("/products");

//     const groceryProducts = res.data.filter(
//       (item) => item.type === "grocery"
//     );

//     setProducts(groceryProducts);
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f7f7]">
//       <Header />

//       <section className="max-w-7xl mx-auto px-4 pt-6">
//         <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
//           <div className="absolute right-0 bottom-0 text-[180px] opacity-10">
//             🛒
//           </div>

//           <div className="relative z-10">
//             <div className="bg-white/20 inline-flex px-4 py-2 rounded-full text-sm font-bold">
//               KKCart Grocery
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
//               Groceries
//               <br />
//               delivered
//               <br />
//               in 10 mins
//             </h1>

//             <p className="mt-5 text-lg text-white/90 max-w-2xl">
//               Fruits, vegetables, dairy, bakery and daily essentials delivered super fast.
//             </p>
//           </div>
//         </div>
//       </section>

//       <CategoryCard
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />

//       <ProductCard
//         products={products}
//         selectedCategory={selectedCategory}
//       />
//     </main>
//   );
// }


// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import CategoryCard from "../components/CategoryCard";
// import ProductCard from "../components/ProductCard";
// import API from "../api";
// import toast from "react-hot-toast";

// export default function GroceryHome() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchGroceryProducts();
//   }, []);

//   const fetchGroceryProducts = async () => {
//     try {
//       setLoading(true);

//       const res = await API.get("/products");

//       const groceryProducts = res.data.filter(
//         (item) => item.type === "grocery"
//       );

//       setProducts(groceryProducts);
//     } catch (err) {
//       console.log("GROCERY API ERROR:", err);
//       toast.error("Products not loading. Backend connection problem.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-[#f7f7f7]">
//       <Header />

//       <section className="max-w-7xl mx-auto px-4 pt-6">
//         <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
//           <div className="absolute right-0 bottom-0 text-[180px] opacity-10">
//             🛒
//           </div>

//           <div className="relative z-10">
//             <div className="bg-white/20 inline-flex px-4 py-2 rounded-full text-sm font-bold">
//               KKCart Grocery
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
//               Groceries
//               <br />
//               delivered
//               <br />
//               in 10 mins
//             </h1>

//             <p className="mt-5 text-lg text-white/90 max-w-2xl">
//               Fruits, vegetables, dairy, bakery and daily essentials delivered super fast.
//             </p>
//           </div>
//         </div>
//       </section>

//       <CategoryCard
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />

//       {loading ? (
//         <div className="max-w-7xl mx-auto px-4 py-10">
//           <div className="bg-white rounded-3xl p-10 text-center font-black text-orange-500">
//             Loading grocery products...
//           </div>
//         </div>
//       ) : (
//         <ProductCard
//           products={products}
//           selectedCategory={selectedCategory}
//         />
//       )}
//     </main>
//   );
// }

import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import API from "../api";
import toast from "react-hot-toast";
import { SearchContext } from "../context/SearchContext";
import { Truck, ArrowRight } from "lucide-react";

export default function GroceryHome() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroceryProducts();
  }, []);

  const fetchGroceryProducts = async () => {
    try {
      setLoading(true);

      const res = await API.get("/products");

      const groceryProducts = res.data.filter(
        (item) => item.type === "grocery"
      );

      setProducts(groceryProducts);
    } catch (err) {
      console.log("GROCERY API ERROR:", err);
      toast.error("Products not loading");
    } finally {
      setLoading(false);
    }
  };

  const { search } = useContext(SearchContext);

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <Header />
{/* <section className="max-w-7xl mx-auto px-4 pt-5">
  <div className="bg-green-600 rounded-3xl p-6 md:p-10 text-white">

    <p className="text-sm font-semibold opacity-90">
      🚚 Delivery in 20-30 mins
    </p>

    <h1 className="text-3xl md:text-6xl font-black mt-2">
      Grocery at your
      <br />
      doorstep.
    </h1>

    <p className="mt-3 opacity-90 max-w-lg">
      Fresh fruits, vegetables, dairy, bakery and daily essentials.
    </p>

  </div>
</section> */}
<section className="max-w-7xl mx-auto px-4 pt-6 select-none">
      {/* OUTER CARD CONTAINER */}
      <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#06170E] to-[#030B07] text-white border border-emerald-500/10 shadow-xl overflow-hidden group">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* FORCED HORIZONTAL SIDE-BY-SIDE FLEX LAYOUT FOR ALL SCREENS */}
        <div className="flex flex-row items-center h-full min-h-[180px] sm:min-h-[220px] md:min-h-[260px]">
          
          {/* LEFT SIDE: TEXT DETAILS (FIXED WIDTH PERCENTAGE) */}
          <div className="w-[58%] sm:w-[55%] p-4 sm:p-8 md:p-10 space-y-3 sm:space-y-4 text-left z-20 shrink-0">
            
            {/* Delivery Time Pill Badge */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl shadow-sm">
              <Truck size={12} className="text-emerald-400 animate-pulse shrink-0" />
              <span className="text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-wider text-emerald-400">
                Delivery in 30-40 mins
              </span>
            </div>

            {/* Typography Header Block */}
            <div className="space-y-1">
              <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Grocery at your <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  doorstep.
                </span>
              </h1>
              
              <p className="text-gray-400 text-[9px] sm:text-xs md:text-sm font-semibold max-w-xl leading-normal line-clamp-2 sm:line-clamp-none">
                Handpicked farm-fresh fruits, organic vegetables, dairy, and your daily household essentials.
              </p>
            </div>

            {/* Premium Action Button */}
            {/* <div className="pt-1">
              <button
                type="button"
                onClick={() => navigate("/grocery")}
                className="h-8 sm:h-10 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-[9px] sm:text-xs uppercase tracking-wider px-3 sm:px-5 rounded-lg sm:rounded-xl flex items-center gap-1 sm:gap-1.5 shadow-md transition-all active:scale-[0.98] duration-200 group/btn"
              >
                <span>Explore Marketplace</span>
                <ArrowRight size={12} className="stroke-[3] transition-transform duration-200 group-hover/btn:translate-x-0.5 shrink-0" />
              </button>
            </div> */}

          </div>

          {/* RIGHT SIDE: PICTURE FRAME (FIXED REMAINING WIDTH PERCENTAGE) */}
          <div className="w-[42%] sm:w-[45%] h-full absolute right-0 top-0 bottom-0 overflow-hidden z-10">
            <img
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80"
              alt="Premium Quality Fresh Produce Marketplace"
              className="w-full h-full object-cover rounded-tl-[40px] sm:rounded-tl-[80px] scale-[1.01] transition-transform duration-700 group-hover:scale-105"
            />
            {/* Smooth Edge Linear Mask Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06170E] via-[#06170E]/30 to-transparent z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>


      {/* CATEGORY */}
      <CategoryCard
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* PRODUCTS */}
      {loading ? (
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="bg-white rounded-3xl p-10 text-center font-black text-green-600 shadow">
            Loading grocery products...
          </div>
        </div>
      ) : (
  <ProductCard
  products={products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )}
  selectedCategory={selectedCategory}
/>



      )}
    </main>
  );
}