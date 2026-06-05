// import { useEffect, useState, useContext } from "react";
// import { Plus, Timer, Search, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";
// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// export default function ProductCard({ selectedCategory }) {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     API.get("/products")
//       .then((res) => setProducts(res.data))
//       .catch(() => toast.error("Products loading failed"));
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const categoryMatch =
//       selectedCategory === "All" || product.category === selectedCategory;

//     const searchMatch =
//       product.name?.toLowerCase().includes(search.toLowerCase()) ||
//       product.category?.toLowerCase().includes(search.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   const handleAdd = (product) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       toast.error("Please login first");
//       navigate("/login");
//       return;
//     }

//     addToCart(product);
//     toast.success(`${product.name} added`);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 pb-12">
//       <div className="bg-white rounded-[24px] border shadow-sm p-4 mb-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-black">
//               {selectedCategory === "All"
//                 ? "Recommended for you"
//                 : selectedCategory}
//             </h2>
//             <p className="text-gray-500 text-sm">
//               Fresh products delivered quickly
//             </p>
//           </div>

//           <div className="relative w-full md:w-96">
//             <Search className="absolute left-3 top-3 text-gray-400" size={18} />
//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search groceries..."
//               className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//             />
//           </div>
//         </div>
//       </div>

//       {filteredProducts.length === 0 ? (
//         <div className="bg-white rounded-3xl border p-10 text-center shadow-sm">
//           <ShoppingBag className="mx-auto text-orange-500 mb-3" size={54} />
//           <h3 className="font-black text-xl">No products found</h3>
//           <p className="text-gray-500 text-sm mt-1">
//             Add products from admin panel.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {filteredProducts.map((product) => {
//             const imageSrc =
//               product.image && product.image.trim() !== ""
//                 ? product.image
//                 : "/products/default.jpg";

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-[22px] border shadow-sm hover:shadow-xl transition overflow-hidden"
//               >
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="bg-orange-50 p-3 cursor-pointer"
//                 >
//                   <img
//                     src={imageSrc}
//                     alt={product.name}
//                     className="w-full h-32 object-cover rounded-xl hover:scale-105 transition"
//                     onError={(e) => {
//                       e.currentTarget.src = "/products/default.jpg";
//                     }}
//                   />
//                 </div>

//                 <div className="p-3">
//                   <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 mb-2">
//                     <Timer size={13} />
//                     10 MINS
//                   </div>

//                   <h3
//                     onClick={() => navigate(`/product/${product._id}`)}
//                     className="font-black text-sm min-h-[40px] line-clamp-2 cursor-pointer hover:text-orange-500"
//                   >
//                     {product.name}
//                   </h3>

//                   <p className="text-xs text-gray-500 mt-1">
//                     {product.category}
//                   </p>

//                   <div className="flex justify-between items-center mt-4">
//                     <div>
//                       <p className="font-black text-gray-900">₹{product.price}</p>
//                       <p className="text-[11px] text-gray-400">
//                         Stock {product.stock}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => handleAdd(product)}
//                       className="border border-orange-500 text-orange-600 font-black px-3 py-2 rounded-lg hover:bg-orange-500 hover:text-white flex items-center gap-1"
//                     >
//                       <Plus size={14} />
//                       ADD
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// }


// import { useEffect, useState, useContext } from "react";
// import { Plus, Timer, Search, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import API from "../api";
// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// export default function ProductCard({ selectedCategory }) {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     API.get("/products")
//       .then((res) => setProducts(res.data))
//       .catch(() => toast.error("Products loading failed"));
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     const categoryMatch =
//       selectedCategory === "All" || product.category === selectedCategory;

//     const searchMatch =
//       product.name?.toLowerCase().includes(search.toLowerCase()) ||
//       product.category?.toLowerCase().includes(search.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   const handleAdd = (product) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       toast.error("Please login first");
//       navigate("/login");
//       return;
//     }

//     addToCart(product);
//     toast.success(`${product.name} added`);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 pb-12">
//       <div className="bg-white rounded-[24px] border shadow-sm p-4 mb-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-black">
//               {selectedCategory === "All"
//                 ? "Recommended for you"
//                 : selectedCategory}
//             </h2>

//             <p className="text-gray-500 text-sm">
//               Fresh products delivered quickly
//             </p>
//           </div>

//           <div className="relative w-full md:w-96">
//             <Search
//               className="absolute left-3 top-3 text-gray-400"
//               size={18}
//             />

//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search groceries..."
//               className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//             />
//           </div>
//         </div>
//       </div>

//       {filteredProducts.length === 0 ? (
//         <div className="bg-white rounded-3xl border p-10 text-center shadow-sm">
//           <ShoppingBag
//             className="mx-auto text-orange-500 mb-3"
//             size={54}
//           />

//           <h3 className="font-black text-xl">
//             No products found
//           </h3>

//           <p className="text-gray-500 text-sm mt-1">
//             Add products from admin panel.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {filteredProducts.map((product) => {
//             const imageSrc =
//               product.image && product.image.trim() !== ""
//                 ? product.image
//                 : "/products/default.jpg";

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-[22px] border shadow-sm hover:shadow-xl transition overflow-hidden"
//               >
//                 <div
//                   onClick={() =>
//                     navigate(`/product/${product._id}`)
//                   }
//                   className="bg-orange-50 p-3 cursor-pointer"
//                 >
//                   <img
//                     src={imageSrc}
//                     alt={product.name}
//                     className="w-full h-32 object-cover rounded-xl hover:scale-105 transition"
//                     onError={(e) => {
//                       e.currentTarget.src =
//                         "/products/default.jpg";
//                     }}
//                   />
//                 </div>

//                 <div className="p-3">
//                   <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 mb-2">
//                     <Timer size={13} />
//                     10 MINS
//                   </div>

//                   <h3
//                     onClick={() =>
//                       navigate(`/product/${product._id}`)
//                     }
//                     className="font-black text-sm min-h-[40px] line-clamp-2 cursor-pointer hover:text-orange-500"
//                   >
//                     {product.name}
//                   </h3>

//                   <p className="text-xs text-gray-500 mt-1">
//                     {product.category}
//                   </p>

//                   <div className="flex justify-between items-center mt-4">
//                     <div>
//                       <p className="font-black text-gray-900">
//                         ₹{product.price}
//                       </p>

//                       <p className="text-[11px] text-gray-400">
//                         Stock {product.stock}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => handleAdd(product)}
//                       className="border border-orange-500 text-orange-600 font-black px-3 py-2 rounded-lg hover:bg-orange-500 hover:text-white flex items-center gap-1"
//                     >
//                       <Plus size={14} />
//                       ADD
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// }

// import { useState, useContext } from "react";
// import { Plus, Timer, Search, ShoppingBag } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// export default function ProductCard({
//   products = [],
//   selectedCategory,
// }) {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");
//   const { addToCart } = useContext(CartContext);

//   const filteredProducts = products.filter((product) => {
//     const categoryMatch =
//       selectedCategory === "All" ||
//       product.category === selectedCategory;

//     const searchMatch =
//       product.name?.toLowerCase().includes(search.toLowerCase()) ||
//       product.category?.toLowerCase().includes(search.toLowerCase());

//     return categoryMatch && searchMatch;
//   });

//   const handleAdd = (product) => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       toast.error("Please login first");
//       navigate("/login");
//       return;
//     }

//     addToCart(product);
//     toast.success(`${product.name} added`);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 pb-12">
//       {/* SEARCH HEADER */}
//       <div className="bg-white rounded-[24px] border shadow-sm p-4 mb-6">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-black">
//               {selectedCategory === "All"
//                 ? "Recommended for you"
//                 : selectedCategory}
//             </h2>

//             <p className="text-gray-500 text-sm">
//               Fresh products delivered quickly
//             </p>
//           </div>

//           <div className="relative w-full md:w-96">
//             <Search
//               className="absolute left-3 top-3 text-gray-400"
//               size={18}
//             />

//             <input
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search products..."
//               className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
//             />
//           </div>
//         </div>
//       </div>

//       {/* NO PRODUCTS */}
//       {filteredProducts.length === 0 ? (
//         <div className="bg-white rounded-3xl border p-10 text-center shadow-sm">
//           <ShoppingBag
//             className="mx-auto text-orange-500 mb-3"
//             size={54}
//           />

//           <h3 className="font-black text-xl">
//             No products found
//           </h3>

//           <p className="text-gray-500 text-sm mt-1">
//             No products available in this category.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
//           {filteredProducts.map((product) => {
//             const imageSrc =
//               product.image && product.image.trim() !== ""
//                 ? product.image
//                 : "/products/default.jpg";

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-[22px] border shadow-sm hover:shadow-xl transition overflow-hidden"
//               >
//                 <div
//                   onClick={() =>
//                     navigate(`/product/${product._id}`)
//                   }
//                   className="bg-orange-50 p-3 cursor-pointer"
//                 >
//                   <img
//                     src={imageSrc}
//                     alt={product.name}
//                     className="w-full h-32 object-cover rounded-xl hover:scale-105 transition"
//                     onError={(e) => {
//                       e.currentTarget.src =
//                         "/products/default.jpg";
//                     }}
//                   />
//                 </div>

//                 <div className="p-3">
//                   <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500 mb-2">
//                     <Timer size={13} />
//                     10 MINS
//                   </div>

//                   <h3
//                     onClick={() =>
//                       navigate(`/product/${product._id}`)
//                     }
//                     className="font-black text-sm min-h-[40px] line-clamp-2 cursor-pointer hover:text-orange-500"
//                   >
//                     {product.name}
//                   </h3>

//                   <p className="text-xs text-gray-500 mt-1">
//                     {product.category}
//                   </p>

//                   <div className="flex justify-between items-center mt-4">
//                     <div>
//                       <p className="font-black text-gray-900">
//                         ₹{product.price}
//                       </p>

//                       <p className="text-[11px] text-gray-400">
//                         Stock {product.stock}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => handleAdd(product)}
//                       className="border border-orange-500 text-orange-600 font-black px-3 py-2 rounded-lg hover:bg-orange-500 hover:text-white flex items-center gap-1"
//                     >
//                       <Plus size={14} />
//                       ADD
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// }

import { useState, useContext } from "react";
import {
  Plus,
  Timer,
  Search,
  ShoppingBag,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({
  products = [],
  selectedCategory,
}) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name?.toLowerCase().includes(search.toLowerCase()) ||
      product.category?.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const handleAdd = (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">
      {/* HEADER */}
      <div className="bg-white rounded-[28px] border border-orange-100 shadow-lg p-5 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-3xl font-black text-gray-900">
              {selectedCategory === "All"
                ? "Recommended For You"
                : selectedCategory}
            </h2>

            <p className="text-gray-500 mt-1">
              Fresh products delivered in minutes 🚀
            </p>
          </div>

          <div className="relative w-full lg:w-[400px]">
            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-gray-100 rounded-2xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>
      </div>

      {/* NO PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl border p-10 text-center shadow-lg">
          <ShoppingBag
            className="mx-auto text-orange-500 mb-4"
            size={60}
          />

          <h3 className="text-2xl font-black">
            No Products Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try searching another product.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => {
            const imageSrc =
              product.image && product.image.trim() !== ""
                ? product.image
                : "/products/default.jpg";

            return (
              <div
                key={product._id}
                className="
                  group
                  bg-white
                  rounded-[48px]
                  overflow-hidden
                  border
                  border-orange-100
                  hover:border-orange-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                {/* BADGES */}
                <div className="absolute z-10 m-3">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
                    BESTSELLER
                  </div>
                </div>

                {/* IMAGE */}
                <div
                  onClick={() =>
                    navigate(`/product/${product._id}`)
                  }
                  className="
                    cursor-pointer
                    bg-gradient-to-br
                    from-orange-50
                    via-white
                    to-orange-100
                    p-4
                  "
                >
                  <img
                    src={imageSrc}
                    alt={product.name}
                    className="
                      w-full
                      h-40
                      object-contain
                      group-hover:scale-110
                      transition
                      duration-500
                    "
                    onError={(e) => {
                      e.currentTarget.src =
                        "/products/default.jpg";
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  {/* DELIVERY */}
                  <div className="flex items-center gap-1 text-green-600 text-[11px] font-bold">
                    <Timer size={12} />
                    10 MIN DELIVERY
                  </div>

                  {/* PRODUCT NAME */}
                  <h3
                    onClick={() =>
                      navigate(`/product/${product._id}`)
                    }
                    className="
                      mt-1
                      text-[15px]
                      font-black
                      line-clamp-2
                      min-h-[44px]
                      cursor-pointer
                      hover:text-orange-500
                    "
                  >
                    {product.name}
                  </h3>

                  {/* PRICE + BUTTON */}
                  <div className="flex items-center justify-between ">
                    <div>
                      <p className="text-lg font-black text-gray-900">
                        ₹{product.price}
                      </p>

                      <p className="text-xs text-gray-400 line-through">
                        ₹
                        {Math.round(
                          product.price * 1.15
                        )}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className="
                        bg-gradient-to-r
                        from-orange-500
                        to-red-500
                        text-white
                        px-4
                        py-2
                        rounded-xl
                        font-bold
                        flex
                        items-center
                        gap-1
                        shadow-lg
                        hover:scale-105
                        transition
                      "
                    >
                      <Plus size={15} />
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}