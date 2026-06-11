// import { useEffect, useState } from "react";
// import API from "../api";
// import toast from "react-hot-toast";

// export default function AdminProducts() {
//   const [products, setProducts] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     image: null,
//     category: "",
//     stock: "",
//     description: "",
//   });

//   const [preview, setPreview] = useState("");

//   const fetchProducts = async () => {
//     try {
//       const res = await API.get("/products");
//       setProducts(res.data);
//     } catch (err) {
//       toast.error("Failed to load products");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const addProduct = async () => {
//     try {
//       const data = new FormData();

//       data.append("name", form.name);
//       data.append("price", form.price);
//       data.append("category", form.category);
//       data.append("stock", form.stock);
//       data.append("description", form.description);
//       data.append("image", form.image);

//       await API.post("/products", data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       toast.success("Product Added");

//       setForm({
//         name: "",
//         price: "",
//         image: null,
//         category: "",
//         stock: "",
//         description: "",
//       });

//       setPreview("");
//       fetchProducts();
//     } catch (err) {
//       toast.error("Product add failed");
//     }
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await API.delete(`/products/${id}`);
//       toast.success("Deleted");
//       fetchProducts();
//     } catch (err) {
//       toast.error("Delete failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <h1 className="text-3xl font-extrabold mb-5 text-orange-500">
//         Admin Products
//       </h1>

//       <div className="bg-white p-5 rounded-2xl shadow mb-8 grid gap-3">
//         <input
//           className="border p-3 rounded"
//           placeholder="Product name"
//           value={form.name}
//           onChange={(e) =>
//             setForm({ ...form, name: e.target.value })
//           }
//         />

//         <input
//           className="border p-3 rounded"
//           placeholder="Price"
//           value={form.price}
//           onChange={(e) =>
//             setForm({ ...form, price: e.target.value })
//           }
//         />

//         <input
//           className="border p-3 rounded"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) =>
//             setForm({ ...form, category: e.target.value })
//           }
//         />

//         <input
//           className="border p-3 rounded"
//           placeholder="Stock"
//           value={form.stock}
//           onChange={(e) =>
//             setForm({ ...form, stock: e.target.value })
//           }
//         />

//         <textarea
//           className="border p-3 rounded"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               description: e.target.value,
//             })
//           }
//         />

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             const file = e.target.files[0];

//             setForm({ ...form, image: file });

//             if (file) {
//               setPreview(URL.createObjectURL(file));
//             }
//           }}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="preview"
//             className="w-32 h-32 object-cover rounded-xl border"
//           />
//         )}

//         <button
//           onClick={addProduct}
//           className="bg-green-600 text-white py-3 rounded-xl font-bold"
//         >
//           Add Product
//         </button>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {products.map((p) => (
//           <div
//             key={p._id}
//             className="bg-white rounded-2xl shadow p-3"
//           >
//             <img
//               src={p.image}
//               alt={p.name}
//               className="h-32 w-full object-cover rounded-xl"
//             />

//             <h3 className="font-bold mt-3">{p.name}</h3>

//             <p className="text-orange-500 font-bold">
//               ₹{p.price}
//             </p>

//             <p className="text-sm text-gray-500">
//               Stock: {p.stock}
//             </p>

//             <button
//               onClick={() => deleteProduct(p._id)}
//               className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg text-sm"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import API from "../api";

// export default function AdminProducts() {
//   const [products, setProducts] = useState([]);

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     image: null,
//     category: "",
//     stock: "",
//     description: "",
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const res = await API.get("/products");

//     setProducts(res.data);
//   };

//   const addProduct = async () => {
//     try {
//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("image", form.image);
//       formData.append("category", form.category);
//       formData.append("stock", form.stock);
//       formData.append(
//         "description",
//         form.description
//       );

//       await API.post("/products", formData);

//       alert("Product Added");

//       fetchProducts();

//       setForm({
//         name: "",
//         price: "",
//         image: null,
//         category: "",
//         stock: "",
//         description: "",
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-5">

//       <h1 className="text-3xl font-black mb-5">
//         Admin Products
//       </h1>

//       <div className="bg-white p-5 rounded-3xl shadow grid gap-4 mb-8">

//         <input
//           placeholder="Product Name"
//           className="border p-3 rounded-xl"
//           value={form.name}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               name: e.target.value,
//             })
//           }
//         />

//         <input
//           placeholder="Price"
//           className="border p-3 rounded-xl"
//           value={form.price}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               price: e.target.value,
//             })
//           }
//         />

//         <input
//           placeholder="Category"
//           className="border p-3 rounded-xl"
//           value={form.category}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               category: e.target.value,
//             })
//           }
//         />

//         <input
//           placeholder="Stock"
//           className="border p-3 rounded-xl"
//           value={form.stock}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               stock: e.target.value,
//             })
//           }
//         />

//         <textarea
//           placeholder="Description"
//           className="border p-3 rounded-xl"
//           value={form.description}
//           onChange={(e) =>
//             setForm({
//               ...form,
//               description: e.target.value,
//             })
//           }
//         />

//         <input
//           type="file"
//           onChange={(e) =>
//             setForm({
//               ...form,
//               image: e.target.files[0],
//             })
//           }
//         />

//         <button
//           onClick={addProduct}
//           className="bg-orange-500 text-white py-4 rounded-2xl font-black"
//         >
//           Add Product
//         </button>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

//         {products.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white rounded-3xl shadow p-4"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="h-40 w-full object-cover rounded-2xl"
//             />

//             <h2 className="font-black mt-3">
//               {item.name}
//             </h2>

//             <p className="text-orange-500 font-bold">
//               ₹{item.price}
//             </p>

//             <p className="text-sm text-gray-500">
//               {item.category}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import API from "../api";
// import toast from "react-hot-toast";

// const groceryCategories = [
//   "Grocery",
//   "Vegetables",
//   "Fruits",
//   "Dairy",
//   "Snacks",
//   "Beverages",
//   "Bakery",
//   "Meat & Fish",
//   "Sweets",
// ];

// const foodCategories = [
//   "Rolls",
//   "Chowmein",
//   "Biryani",
//   "Meals",
//   "Chinese",
//   "Drinks",
// ];

// export default function AdminProducts() {
//   const [products, setProducts] = useState([]);
//   const [preview, setPreview] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     type: "grocery",
//     image: null,
//     category: "",
//     stock: "",
//     description: "",
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await API.get("/products");
//       setProducts(res.data);
//     } catch {
//       toast.error("Failed to load products");
//     }
//   };

//   const addProduct = async () => {
//     if (!form.name || !form.price || !form.type || !form.category || !form.stock || !form.image) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("type", form.type);
//       formData.append("image", form.image);
//       formData.append("category", form.category);
//       formData.append("stock", form.stock);
//       formData.append("description", form.description);

//       await API.post("/products", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Product Added");

//       setForm({
//         name: "",
//         price: "",
//         type: "grocery",
//         image: null,
//         category: "",
//         stock: "",
//         description: "",
//       });

//       setPreview("");
//       fetchProducts();
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Product add failed");
//     }
//   };

//   const editProduct = (item) => {
//   setEditingId(item._id);

//   setForm({
//     name: item.name || "",
//     price: item.price || "",
//     type: item.type || "grocery",
//     image: null,
//     category: item.category || "",
//     stock: item.stock || "",
//     description: item.description || "",
//   });

//   setPreview(item.image || "");

//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

//   const deleteProduct = async (id) => {
//     try {
//       await API.delete(`/products/${id}`);
//       toast.success("Product deleted");
//       fetchProducts();
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   const updateProduct = async () => {
//     if (!form.name || !form.price || !form.type || !form.category || !form.stock) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("type", form.type);
//       formData.append("category", form.category);
//       formData.append("stock", form.stock);
//       formData.append("description", form.description);

//       if (form.image) {
//         formData.append("image", form.image);
//       }

//       await API.put(`/products/${editingId}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Product Updated");
//       resetForm();
//       fetchProducts();
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Product update failed");
//     }
//   };

//   const resetForm = () => {
//     setEditingId(null);
//     setForm({
//       name: "",
//       price: "",
//       type: "grocery",
//       image: null,
//       category: "",
//       stock: "",
//       description: "",
//     });
//     setPreview("");
//   };

//   const categories =
//     form.type === "food" ? foodCategories : groceryCategories;

//   return (
//     <div className="min-h-screen bg-gray-100 p-5">
//       <h1 className="text-3xl font-black mb-5 text-orange-500">
//         Admin Products
//       </h1>

//       <div className="bg-white p-4 md:p-6 rounded-3xl shadow mb-8">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//     <input
//       placeholder="Product Name"
//       className="border p-3 rounded-xl w-full"
//       value={form.name}
//       onChange={(e) => setForm({ ...form, name: e.target.value })}
//     />

//     <input
//       placeholder="Price"
//       // type="text"
//       className="border p-3 rounded-xl w-full"
//       value={form.price}
//       onChange={(e) => setForm({ ...form, price: e.target.value })}
//     />

//     <select
//       className="border p-3 rounded-xl w-full"
//       value={form.type}
//       onChange={(e) =>
//         setForm({
//           ...form,
//           type: e.target.value,
//           category: "",
//         })
//       }
//     >
//       <option value="grocery">Grocery</option>
//       <option value="food">Food</option>
//     </select>

//     <select
//       className="border p-3 rounded-xl w-full"
//       value={form.category}
//       onChange={(e) =>
//         setForm({ ...form, category: e.target.value })
//       }
//     >
//       <option value="">Select Category</option>
//       {categories.map((cat) => (
//         <option key={cat} value={cat}>
//           {cat}
//         </option>
//       ))}
//     </select>

//     <input
//       placeholder="Stock"
//       // type="text"
//       className="border p-3 rounded-xl w-full"
//       value={form.stock}
//       onChange={(e) =>
//         setForm({ ...form, stock: e.target.value })
//       }
//     />

//     <input
//       type="file"
//       accept="image/*"
//       className="border p-3 rounded-xl w-full"
//       onChange={(e) => {
//         const file = e.target.files[0];
//         setForm({ ...form, image: file });

//         if (file) {
//           setPreview(URL.createObjectURL(file));
//         }
//       }}
//     />
//   </div>

//   <textarea
//     placeholder="Description"
//     className="border p-3 rounded-xl w-full mt-4"
//     rows={4}
//     value={form.description}
//     onChange={(e) =>
//       setForm({ ...form, description: e.target.value })
//     }
//   />

//   {preview && (
//     <div className="mt-4 flex justify-center">
//       <img
//         src={preview}
//         alt="preview"
//         className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border"
//       />
//     </div>
//   )}

//   <div className="flex flex-col md:flex-row gap-3 mt-5">
//     <button
//       type="button"
//       onClick={editingId ? updateProduct : addProduct}
//       className={`flex-1 text-white py-4 rounded-2xl font-black ${
//         editingId ? "bg-blue-600" : "bg-orange-500"
//       }`}
//     >
//       {editingId ? "Update Product" : "Add Product"}
//     </button>

//     {editingId && (
//       <button
//         type="button"
//         onClick={resetForm}
//         className="md:w-auto w-full px-6 bg-gray-200 text-gray-700 py-4 rounded-2xl font-black"
//       >
//         Cancel
//       </button>
//     )}
//   </div>
// </div>

//       {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-5"> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
//         {products.map((item) => (
//           // <div key={item._id} className="bg-white rounded-3xl shadow p-4">
//           <div
//   key={item._id}
//   className="bg-white rounded-3xl shadow p-4 hover:shadow-xl transition"
// >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="h-40 w-full object-cover rounded-2xl"
//             />

//             <h2 className="font-black mt-3">{item.name}</h2>

//             <p className="text-orange-500 font-bold">₹{item.price}</p>

//             <p className="text-sm text-gray-500">{item.category}</p>

//             <p className="text-xs mt-1 font-bold uppercase text-gray-400">
//               {item.type || "grocery"}
//             </p>
//             <div className="flex gap-2 mt-3">

//               <button
//                 onClick={() => editProduct(item)}
//                 className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-bold hover:scale-105 transition"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() => deleteProduct(item._id)}
//                 className="flex-1 bg-red-500 text-white py-2 rounded-xl font-bold hover:scale-105 transition"
//               >
//                 Delete
//               </button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // 1. IMPORT NAVIGATE HOOK
// import API from "../api";
// import toast from "react-hot-toast";
// import { ChevronLeft } from "lucide-react"; // 2. IMPORT CHEVRONLEFT ICON

// const groceryCategories = [
//   "Grocery",
//   "Vegetables",
//   "Fruits",
//   "Dairy",
//   "Snacks",
//   "Beverages",
//   "Bakery",
//   "Meat & Fish",
//   "Sweets",
// ];

// const foodCategories = [
//   "Rolls",
//   "Chowmein",
//   "Biryani",
//   "Meals",
//   "Chinese",
//   "Drinks",
// ];

// export default function AdminProducts() {
//   const navigate = useNavigate(); // 3. INITIALIZE NAVIGATE HOOK
//   const [products, setProducts] = useState([]);
//   const [preview, setPreview] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     type: "grocery",
//     image: null,
//     category: "",
//     // stock: "",
//     // description: "",
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await API.get("/products");
//       setProducts(res.data);
//     } catch {
//       toast.error("Failed to load products");
//     }
//   };

//   const addProduct = async () => {
//     if (!form.name || !form.price || !form.type || !form.category || !form.image) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("type", form.type);
//       formData.append("image", form.image);
//       formData.append("category", form.category);
//       // formData.append("stock", form.stock);
//       // formData.append("description", form.description);

//       await API.post("/products", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Product Added");

//       setForm({
//         name: "",
//         price: "",
//         type: "grocery",
//         image: null,
//         category: "",
//         // stock: "",
//         // description: "",
//       });

//       setPreview("");
//       fetchProducts();
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Product add failed");
//     }
//   };

//   const editProduct = (item) => {
//     setEditingId(item._id);

//     setForm({
//       name: item.name || "",
//       price: item.price || "",
//       type: item.type || "grocery",
//       image: null,
//       category: item.category || "",
//       // stock: item.stock || "",
//       // description: item.description || "",
//     });

//     setPreview(item.image || "");

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const deleteProduct = async (id) => {
//     try {
//       await API.delete(`/products/${id}`);
//       toast.success("Product deleted");
//       fetchProducts();
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   const updateProduct = async () => {
//     if (!form.name || !form.price || !form.type || !form.category) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     try {
//       const formData = new FormData();

//       formData.append("name", form.name);
//       formData.append("price", form.price);
//       formData.append("type", form.type);
//       formData.append("category", form.category);
//       // formData.append("stock", form.stock);
//       // formData.append("description", form.description);

//       if (form.image) {
//         formData.append("image", form.image);
//       }

//       await API.put(`/products/${editingId}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Product Updated");
//       resetForm();
//       fetchProducts();
//     } catch (err) {
//       toast.error(err.response?.data?.msg || "Product update failed");
//     }
//   };

//   const resetForm = () => {
//     setEditingId(null);
//     setForm({
//       name: "",
//       price: "",
//       type: "grocery",
//       image: null,
//       category: "",
//       // stock: "",
//       // description: "",
//     });
//     setPreview("");
//   };

//   const categories = form.type === "food" ? foodCategories : groceryCategories;

//   return (
//     <div className="min-h-screen bg-gray-100 p-5">
      
//       {/* ========================================================================= */}
//       {/* HEADER SECTION WITH COMPACT BACK BUTTON                                   */}
//       {/* ========================================================================= */}
//       <div className="flex items-center gap-3 mb-5">
//         <button
//           type="button"
//           onClick={() => navigate(-1)} // Dynamically drop back one state level in history
//           className="p-2 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-500 rounded-2xl border border-gray-100 shadow-sm transition-all shrink-0"
//           title="Go Back"
//         >
//           <ChevronLeft size={24} className="stroke-[3]" />
//         </button>
        
//         <h1 className="text-3xl font-black text-orange-500 select-none">
//           Admin Products
//         </h1>
//       </div>
//       {/* ========================================================================= */}

//       {/* FORM INTERFACE */}
//       <div className="bg-white p-4 md:p-6 rounded-3xl shadow mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             placeholder="Product Name"
//             className="border p-3 rounded-xl w-full outline-none focus:border-orange-400"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />

//           <input
//             placeholder="Price"
//             className="border p-3 rounded-xl w-full outline-none focus:border-orange-400"
//             value={form.price}
//             onChange={(e) => setForm({ ...form, price: e.target.value })}
//           />

//           <select
//             className="border p-3 rounded-xl w-full bg-white outline-none focus:border-orange-400"
//             value={form.type}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 type: e.target.value,
//                 category: "",
//               })
//             }
//           >
//             <option value="grocery">Grocery</option>
//             <option value="food">Food</option>
//           </select>

//           <select
//             className="border p-3 rounded-xl w-full bg-white outline-none focus:border-orange-400"
//             value={form.category}
//             onChange={(e) => setForm({ ...form, category: e.target.value })}
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>

//           {/* <input
//             placeholder="Stock"
//             className="border p-3 rounded-xl w-full outline-none focus:border-orange-400"
//             value={form.stock}
//             onChange={(e) => setForm({ ...form, stock: e.target.value })}
//           /> */}

//           <input
//             type="file"
//             accept="image/*"
//             className="border p-3 rounded-xl w-full bg-white outline-none focus:border-orange-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-orange-50 file:text-orange-500 hover:file:bg-orange-100"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               setForm({ ...form, image: file });

//               if (file) {
//                 setPreview(URL.createObjectURL(file));
//               }
//             }}
//           />
//         </div>

//         {/* <textarea
//           placeholder="Description"
//           className="border p-3 rounded-xl w-full mt-4 outline-none focus:border-orange-400"
//           rows={4}
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         /> */}

//         {preview && (
//           <div className="mt-4 flex justify-center">
//             <img
//               src={preview}
//               alt="preview"
//               className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border bg-gray-50"
//             />
//           </div>
//         )}

//         <div className="flex flex-col md:flex-row gap-3 mt-5">
//           <button
//             type="button"
//             onClick={editingId ? updateProduct : addProduct}
//             className={`flex-1 text-white py-4 rounded-2xl font-black transition active:scale-[0.99] ${
//               editingId ? "bg-blue-600 hover:bg-blue-700" : "bg-orange-500 hover:bg-orange-600"
//             }`}
//           >
//             {editingId ? "Update Product" : "Add Product"}
//           </button>

//           {editingId && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="md:w-auto w-full px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-2xl font-black transition"
//             >
//               Cancel
//             </button>
//           )}
//         </div>
//       </div>

//       {/* PRODUCTS DISPLAY GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
//         {products.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white rounded-3xl shadow p-4 hover:shadow-xl transition flex flex-col justify-between"
//           >
//             <div>
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-40 w-full object-cover rounded-2xl bg-gray-50"
//               />
//               <h2 className="font-black mt-3 text-gray-800 line-clamp-1">{item.name}</h2>
//               <p className="text-orange-500 font-bold mt-0.5">₹{item.price}</p>
//               <p className="text-sm text-gray-500 mt-0.5">{item.category}</p>
//               <p className="text-xs mt-1 font-bold uppercase text-gray-400 tracking-wide">
//                 {item.type || "grocery"}
//               </p>
//             </div>
            
//             <div className="flex gap-2 mt-4">
//               <button
//                 type="button"
//                 onClick={() => editProduct(item)}
//                 className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-bold hover:bg-blue-600 transition active:scale-95 text-sm"
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 onClick={() => deleteProduct(item._id)}
//                 className="flex-1 bg-red-500 text-white py-2 rounded-xl font-bold hover:bg-red-600 transition active:scale-95 text-sm"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import API from "../api";
import toast from "react-hot-toast";
import { ChevronLeft, Plus, Image as ImageIcon, Trash2, Edit2 } from "lucide-react"; 

// FIXED: Standardized values to match your database architecture capitalization
const groceryCategories = [
  "Grocery",
  "Vegetables",
  "Fruits",
  "Dairy",
  "Snacks",
  "Beverages",
  "Bakery",
  "Meat & Fish",
  "Sweets",
  "Stationery", // Added sector link
  "Babycare"    // Added sector link
];

const foodCategories = [
  "Rolls",
  "Chowmein",
  "Biryani",
  "Meals",
  "Chinese",
  "Drinks",
  "Fast Food"
];

export default function AdminProducts() {
  const navigate = useNavigate(); 
  const [products, setProducts] = useState([]);
  const [preview, setPreview] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    type: "Grocery", // FIXED: Changed default from "grocery" to "Grocery"
    image: null,
    category: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch {
      toast.error("Failed to load products");
    }
  };

  const addProduct = async () => {
    if (!form.name || !form.price || !form.type || !form.category || !form.image) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price); // Sends your clean "100 (1 kg)" string securely
      formData.append("type", form.type);
      formData.append("image", form.image);
      formData.append("category", form.category);

      await API.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product Added Successfully");
      resetForm();
      fetchProducts();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Product add failed");
    }
  };

  const editProduct = (item) => {
    setEditingId(item._id);

    setForm({
      name: item.name || "",
      price: item.price || "",
      type: item.type || "Grocery", // Automatically falls back to standard key matching 
      image: null,
      category: item.category || "",
    });

    setPreview(item.image || "");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await API.delete(`/products/${id}`);
      toast.success("Product deleted");
      fetchProducts();
    } catch {
      toast.error("Delete failed");
    }
  };

  const updateProduct = async () => {
    if (!form.name || !form.price || !form.type || !form.category) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("type", form.type);
      formData.append("category", form.category);

      if (form.image) {
        formData.append("image", form.image);
      }

      await API.put(`/products/${editingId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product Updated Successfully");
      resetForm();
      fetchProducts();
    } catch (err) {
      toast.error(err.response?.data?.msg || "Product update failed");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      name: "",
      price: "",
      type: "Grocery",
      image: null,
      category: "",
    });
    setPreview("");
  };

  // FIXED: Syncs conditionally based on standardized values ("Grocery" vs "Food")
  const categories = form.type === "Food" ? foodCategories : groceryCategories;

  return (
    <div className="min-h-screen bg-[#f7f7f7] p-4 sm:p-6 font-sans antialiased select-none">
      
      {/* HEADER SECTION WITH BACK BUTTON HUB */}
      <div className="max-w-7xl mx-auto flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)} 
          className="p-2.5 bg-white hover:bg-orange-50 text-gray-700 hover:text-orange-500 rounded-2xl border border-gray-100 shadow-sm transition active:scale-95 shrink-0"
          title="Go Back"
        >
          <ChevronLeft size={22} className="stroke-[3]" />
        </button>
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Inventory Hub
          </h1>
          <p className="text-xs text-gray-400 font-semibold tracking-wide">
            Manage your store catalog listings and update active parameters.
          </p>
        </div>
      </div>

      {/* CORE APPLICATION CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* MANAGEMENT CONTROL INTERFACE INPUT FORM CARD */}
        <div className="bg-white p-5 sm:p-6 rounded-[28px] border border-gray-100 shadow-sm">
          <h2 className="text-sm font-black uppercase text-gray-400 tracking-widest mb-4">
            {editingId ? "⚡ Edit Product Configuration" : "✨ Create New Catalog Node"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Input Name */}
            <input
              placeholder="Product Name (e.g., Fresh Amul Butter)"
              className="border border-gray-200 p-3.5 rounded-xl w-full outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#FC8019] transition font-semibold text-gray-800 text-sm"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            {/* Input Price */}
            <input
              placeholder="Price & Unit Parameter (e.g., 100 (1 kg) or 45 (1 pc))"
              className="border border-gray-200 p-3.5 rounded-xl w-full outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#FC8019] transition font-black text-gray-800 text-sm"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            {/* Selector Type */}
            <select
              className="border border-gray-200 p-3.5 rounded-xl w-full bg-white outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#FC8019] transition font-bold text-gray-700 text-sm cursor-pointer"
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value,
                  category: "", // Reset subcategory array map pointers on switch
                })
              }
            >
              <option value="Grocery">Grocery Section</option>
              <option value="Food">Cloud Kitchen (Food)</option>
            </select>

            {/* Selector Category */}
            <select
              className="border border-gray-200 p-3.5 rounded-xl w-full bg-white outline-none focus:ring-2 focus:ring-orange-100 focus:border-[#FC8019] transition font-bold text-gray-700 text-sm cursor-pointer"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select Sub-Category Tag</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Image Upload Input Box */}
            <div className="md:col-span-2 border border-dashed border-gray-200 bg-gray-50/50 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400">
                <ImageIcon size={18} />
                <span className="text-xs font-semibold">Choose Thumbnail Image</span>
              </div>
              <input
                type="file"
                accept="image/*"
                className="text-xs text-gray-500 cursor-pointer file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-black file:bg-orange-50 file:text-[#FC8019] hover:file:bg-orange-100 transition"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setForm({ ...form, image: file });
                  if (file) setPreview(URL.createObjectURL(file));
                }}
              />
            </div>
          </div>

          {/* Asset Image Preview Indicator Layer */}
          {preview && (
            <div className="mt-4 flex justify-center">
              <div className="relative border p-1 rounded-2xl bg-white shadow-sm">
                <img
                  src={preview}
                  alt="preview"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-xl bg-gray-50"
                />
              </div>
            </div>
          )}

          {/* Form Action Controls Section Footer */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button
              type="button"
              onClick={editingId ? updateProduct : addProduct}
              className={`flex-1 text-white py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition active:scale-[0.99] shadow-sm ${
                editingId ? "bg-blue-600 hover:bg-blue-700 shadow-blue-100" : "bg-[#FC8019] hover:bg-[#e06f14] shadow-orange-100"
              }`}
            >
              {editingId ? "Update Product Listing" : "Publish Product Line"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-6 bg-gray-100 hover:bg-gray-200 text-gray-600 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* ACTIVE STORES LIVE PRODUCTS VIEWPORT STREAMS GRID */}
        <div>
          <h3 className="text-xs font-black uppercase text-gray-400 tracking-widest mb-4 px-1">
            Active Catalog Listings ({products.length})
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-[20px] border border-gray-100 p-3 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden p-2 flex items-center justify-center">
                    <img
                      src={item.image || "/products/default.jpg"}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="mt-2 space-y-0.5 text-left">
                    <h4 className="font-extrabold text-gray-800 text-sm truncate" title={item.name}>
                      {item.name}
                    </h4>
                    <p className="text-[#FC8019] font-black text-sm">₹{item.price}</p>
                    <p className="text-[10px] font-bold text-gray-400 tracking-wide">{item.category}</p>
                  </div>
                </div>
                
                {/* Micro Mutations Action Links */}
                <div className="flex gap-2 mt-3 pt-2 border-t border-gray-50">
                  <button
                    type="button"
                    onClick={() => editProduct(item)}
                    className="flex-1 bg-blue-50 text-blue-600 p-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition active:scale-95 text-xs flex items-center justify-center gap-1"
                    title="Edit Item"
                  >
                    <Edit2 size={12} />
                    <span>Edit</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => deleteProduct(item._id)}
                    className="flex-1 bg-red-50 text-red-600 p-2 rounded-lg font-bold hover:bg-red-600 hover:text-white transition active:scale-95 text-xs flex items-center justify-center gap-1"
                    title="Delete Item"
                  >
                    <Trash2 size={12} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}