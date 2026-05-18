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

import { useEffect, useState } from "react";
import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import API from "../api";

export default function GroceryHome() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchGroceryProducts();
  }, []);

  const fetchGroceryProducts = async () => {
    const res = await API.get("/products");

    const groceryProducts = res.data.filter(
      (item) => item.type === "grocery"
    );

    setProducts(groceryProducts);
  };

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <Header />

      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 text-[180px] opacity-10">
            🛒
          </div>

          <div className="relative z-10">
            <div className="bg-white/20 inline-flex px-4 py-2 rounded-full text-sm font-bold">
              KKCart Grocery
            </div>

            <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight">
              Groceries
              <br />
              delivered
              <br />
              in 10 mins
            </h1>

            <p className="mt-5 text-lg text-white/90 max-w-2xl">
              Fruits, vegetables, dairy, bakery and daily essentials delivered super fast.
            </p>
          </div>
        </div>
      </section>

      <CategoryCard
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProductCard
        products={products}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}