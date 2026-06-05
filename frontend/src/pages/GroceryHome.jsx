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

import { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import API from "../api";
import toast from "react-hot-toast";

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

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <Header />

      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="overflow-hidden bg-white shadow-xl border rounded-tl-[90px] rounded-br-[90px] rounded-tr-[25px] rounded-bl-[25px]">

          <div className="grid lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 md:p-14 flex flex-col justify-center">

              <div className="inline-flex w-fit px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm font-bold">
                🛒 KKCart Grocery
              </div>

              <h1 className="text-5xl md:text-7xl font-black mt-6 leading-[1.05]">
                Fresh
                <br />
                Grocery
                <br />
                Delivered
              </h1>

              <p className="mt-6 text-lg text-white/90 max-w-lg">
                Fruits, vegetables, dairy, bakery, chicken, fish and all your daily essentials delivered quickly to your doorstep.
              </p>

              {/* <div className="flex gap-4 mt-8 flex-wrap">
                <button className="bg-white text-green-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                  Shop Now
                </button>

                <button className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-green-700 transition">
                  View Categories
                </button>
              </div> */}

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div>
                  <h3 className="text-3xl font-black">10min</h3>
                  <p className="text-white/80 text-sm">Delivery</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black">450+</h3>
                  <p className="text-white/80 text-sm">Products</p>
                </div>

                <div>
                  <h3 className="text-3xl font-black">100%</h3>
                  <p className="text-white/80 text-sm">Fresh</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[350px] md:h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                alt="Fresh Grocery"
                className="w-full h-full object-cover"
              />

              {/* OFFER CARD */}
              <div className="absolute top-6 right-6 bg-white p-5 rounded-3xl shadow-xl">
                <h3 className="text-3xl font-black text-green-600">
                  20% OFF
                </h3>

                <p className="text-gray-600 text-sm">
                  On your first grocery order
                </p>
              </div>

              {/* DELIVERY CARD */}
              <div className="absolute bottom-6 left-6 bg-white p-5 rounded-3xl shadow-xl">
                <p className="text-gray-500 text-sm">
                  Delivery Time
                </p>

                <h3 className="text-2xl font-black">
                  10 - 20 Min 🚚
                </h3>
              </div>
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
          products={products}
          selectedCategory={selectedCategory}
        />
      )}
    </main>
  );
}