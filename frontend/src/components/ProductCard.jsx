// import { useContext } from "react";
// import {
//   Plus,
//   Timer,
//   Search,
//   ShoppingBag,
//   Star,
// } from "lucide-react";
// import { SearchContext } from "../context/SearchContext";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// export default function ProductCard({
//   products = [],
//   selectedCategory,
// }) {


//   // import { CartContext } from "../context/CartContext";

//   // const { addToCart } = useContext(CartContext);

//   const navigate = useNavigate();
//   const { search } = useContext(SearchContext);
//   // const { addToCart } = useContext(CartContext);
//   const {
//     cart,
//     addToCart,
//     decreaseQty,
//   } = useContext(CartContext);

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
//     toast.success(`${product.name} added to cart`);
//   };

//   return (
//     <section className="max-w-7xl mx-auto px-4 pb-12">
//       {/* HEADER */}
//       <div className="bg-white rounded-[28px] border border-orange-100 shadow-lg p-5 mb-8">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
//           <div>
//             <h2 className="text-3xl font-black text-gray-900">
//               {selectedCategory === "All"
//                 ? "Recommended For You"
//                 : selectedCategory}
//             </h2>

//             <p className="text-gray-500 mt-1">
//               Fresh products delivered in minutes
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* NO PRODUCTS */}

//       {filteredProducts.length === 0 && (
//         <div className="text-center py-10">
//           <h2 className="text-xl font-bold text-gray-500">
//             No products found
//           </h2>
//         </div>
//       )}

//       {filteredProducts.length === 0 ? (
//         <div className="bg-white rounded-3xl border p-10 text-center shadow-lg">
//           <ShoppingBag
//             className="mx-auto text-orange-500 mb-4"
//             size={60}
//           />

//           <h3 className="text-2xl font-black">
//             No Products Found
//           </h3>

//           <p className="text-gray-500 mt-2">
//             Try searching another product.
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {/* {filteredProducts.map((product) => {
//             const imageSrc =
//               product.image && product.image.trim() !== ""
//                 ? product.image
//                 : "/products/default.jpg"; */}

//           {filteredProducts.map((product) => {
//             const imageSrc =
//               product.image && product.image.trim() !== ""
//                 ? product.image
//                 : "/products/default.jpg";

//             const cartItem = cart.find(
//               (item) => item._id === product._id
//             );


//             return (
//               <div
//                 key={product._id}
//                 className="
//                   group
//                   bg-white
//                   rounded-[48px]
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
//                 {/* BADGES */}
//                 {/* <div className="absolute z-10 m-3">
//                   <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
//                     BESTSELLER
//                   </div>
//                 </div> */}

//                 {/* IMAGE */}
//                 <div
//                   onClick={() =>
//                     navigate(`/product/${product._id}`)
//                   }
//                   className="
//                     cursor-pointer
//                     bg-gradient-to-br
//                     from-orange-50
//                     via-white
//                     to-orange-100
//                     p-4
//                   "
//                 >
//                   <img
//                     src={imageSrc}
//                     alt={product.name}
//                     className="
//                       w-full
//                       h-40
//                       object-contain
//                       group-hover:scale-110
//                       transition
//                       duration-500
//                     "
//                     onError={(e) => {
//                       e.currentTarget.src =
//                         "/products/default.jpg";
//                     }}
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-4">
//                   {/* DELIVERY */}
//                   <div className="flex items-center gap-1 text-green-600 text-[11px] font-bold">
//                     <Timer size={12} />
//                     20-30 MIN DELIVERY
//                   </div>

//                   {/* PRODUCT NAME */}
//                   <h3
//                     onClick={() =>
//                       navigate(`/product/${product._id}`)
//                     }
//                     className="
//                       mt-1
//                       text-[15px]
//                       font-black
//                       line-clamp-2
//                       min-h-[44px]
//                       cursor-pointer
//                       hover:text-orange-500
//                     "
//                   >
//                     {product.name}
//                   </h3>

//                   {/* PRICE + BUTTON */}
//                   <div className="flex items-center justify-between ">
//                     <div>
//                       <p className="text-lg font-black text-gray-900">
//                         ₹{product.price}
//                       </p>

//                       <p className="text-xs text-gray-400 line-through">
//                         ₹
//                         {Math.round(
//                           product.price * 1.15
//                         )}
//                       </p>
//                     </div>



//                     {!cartItem ? (
//                       <button
//                         onClick={() => handleAdd(product)}
//                         className="
//       bg-gradient-to-r
//       from-orange-500
//       to-red-500
//       text-white
//       px-4
//       py-2
//       rounded-xl
//       font-bold
//       flex
//       items-center
//       gap-1
//       shadow-lg
//       hover:scale-105
//       transition
//     "
//                       >
//                         <Plus size={15} />
//                         ADD
//                       </button>
//                     ) : (
//                       <div
//                         className="
//       flex
//       items-center
//       bg-green-600
//       text-white
//       rounded-xl
//       overflow-hidden
//       shadow-lg
//     "
//                       >
//                         <button
//                           onClick={() => decreaseQty(product._id)}
//                           className="px-3 py-2 text-lg font-bold"
//                         >
//                           −
//                         </button>

//                         <span className="px-3 font-bold">
//                           {cartItem.qty}
//                         </span>

//                         <button
//                           onClick={() => addToCart(product)}
//                           className="px-3 py-2 text-lg font-bold"
//                         >
//                           +
//                         </button>
//                       </div>
//                     )}
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
import { useContext } from "react";
import { Plus, Timer, ShoppingBag, Star } from "lucide-react";
import { SearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ products = [], selectedCategory }) {
  const navigate = useNavigate();
  const { search } = useContext(SearchContext);
  const { cart, addToCart, decreaseQty } = useContext(CartContext);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

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
    <section className="max-w-7xl mx-auto px-4 pb-16 select-none">
      
      {/* 1. MINIMAL PREMIUM ROW HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-8 px-1">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            {selectedCategory === "All" ? "Recommended For You" : selectedCategory}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wide mt-0.5">
            Fresh products delivered straight from dark stores in minutes.
          </p>
        </div>
      </div>

      {/* 2. DYNAMIC SEARCH EMPTY STATE STATE CONTROLLER */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-[32px] border border-gray-100 p-12 text-center shadow-sm max-w-md mx-auto mt-6">
          <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag size={28} />
          </div>
          <h3 className="text-lg font-black text-gray-900 tracking-tight">
            No Products Found
          </h3>
          <p className="text-gray-400 text-xs font-semibold mt-1.5">
            We couldn't find matches for "{search}". Try searching another item.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const imageSrc =
              product.image && product.image.trim() !== ""
                ? product.image
                : "/products/default.jpg";

            const cartItem = cart.find((item) => item._id === product._id);

            return (
              <div
                key={product._id}
                className="group bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* PRODUCT THUMBNAIL WRAPPER */}
                <div
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="relative w-full aspect-square bg-gray-50/50 flex items-center justify-center p-4 cursor-pointer overflow-hidden shrink-0"
                >
                  <img
                    src={imageSrc}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/products/default.jpg";
                    }}
                  />
                  
                  {/* Floating Micro ETA Tag */}
                  {/* <div className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-md text-emerald-700 text-[9px] font-black px-2 py-1 rounded-lg border border-emerald-500/10 flex items-center gap-0.5 tracking-wide">
                    <Timer size={10} className="stroke-[2.5]" />
                    <span>10 MINS</span>
                  </div> */}
                </div>

                {/* SPECIFICATION CARD CONTENT */}
                <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between">
                  <div className="space-y-1">
                    <h3
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="text-xs sm:text-sm font-extrabold text-gray-800 line-clamp-2 min-h-[32px] sm:min-h-[40px] cursor-pointer hover:text-orange-500 transition-colors leading-tight"
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* BOTTOM ACTION INTERACTION CONTROLS BAR */}
                  <div className="flex items-center justify-between mt-1">
                    <div>
                      <p className="text-sm sm:text-base font-black text-gray-900 leading-none">
                        ₹{product.price}
                      </p>
                      <p className="text-[10px] text-gray-400 line-through font-semibold mt-1">
                        ₹{Math.round(product.price * 1.15)}
                      </p>
                    </div>

                    {/* DYNAMIC CART STATE TRIGGER BUTTONS */}
                    {!cartItem ? (
                      <button
                        type="button"
                        onClick={() => handleAdd(product)}
                        className="h-8 bg-white border border-gray-200 hover:border-[#60B246] text-[#60B246] px-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition active:scale-95 shadow-sm hover:bg-green-50/20"
                      >
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center bg-[#60B246] text-white rounded-xl overflow-hidden shadow-sm h-8">
                        <button
                          type="button"
                          onClick={() => decreaseQty(product._id)}
                          className="px-2.5 h-full font-black text-sm hover:bg-green-700 transition active:scale-95"
                        >
                          −
                        </button>
                        <span className="px-1 font-black text-xs min-w-[12px] text-center select-none">
                          {cartItem.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => addToCart(product)}
                          className="px-2.5 h-full font-black text-sm hover:bg-green-700 transition active:scale-95"
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
  );
}