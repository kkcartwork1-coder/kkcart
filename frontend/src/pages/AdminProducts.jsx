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

import { useEffect, useState } from "react";
import API from "../api";
import toast from "react-hot-toast";

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
];

const foodCategories = [
  "Rolls",
  "Chowmein",
  "Biryani",
  "Meals",
  "Chinese",
  "Drinks",
];

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [preview, setPreview] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    type: "grocery",
    image: null,
    category: "",
    stock: "",
    description: "",
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
    if (!form.name || !form.price || !form.type || !form.category || !form.stock || !form.image) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("type", form.type);
      formData.append("image", form.image);
      formData.append("category", form.category);
      formData.append("stock", form.stock);
      formData.append("description", form.description);

      await API.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product Added");

      setForm({
        name: "",
        price: "",
        type: "grocery",
        image: null,
        category: "",
        stock: "",
        description: "",
      });

      setPreview("");
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
    type: item.type || "grocery",
    image: null,
    category: item.category || "",
    stock: item.stock || "",
    description: item.description || "",
  });

  setPreview(item.image || "");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      toast.success("Product deleted");
      fetchProducts();
    } catch {
      toast.error("Delete failed");
    }
  };

  const updateProduct = async () => {
    if (!form.name || !form.price || !form.type || !form.category || !form.stock) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("price", form.price);
      formData.append("type", form.type);
      formData.append("category", form.category);
      formData.append("stock", form.stock);
      formData.append("description", form.description);

      if (form.image) {
        formData.append("image", form.image);
      }

      await API.put(`/products/${editingId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Product Updated");
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
      type: "grocery",
      image: null,
      category: "",
      stock: "",
      description: "",
    });
    setPreview("");
  };

  const categories =
    form.type === "food" ? foodCategories : groceryCategories;

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-black mb-5 text-orange-500">
        Admin Products
      </h1>

      <div className="bg-white p-4 md:p-6 rounded-3xl shadow mb-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input
      placeholder="Product Name"
      className="border p-3 rounded-xl w-full"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
    />

    <input
      placeholder="Price"
      // type="text"
      className="border p-3 rounded-xl w-full"
      value={form.price}
      onChange={(e) => setForm({ ...form, price: e.target.value })}
    />

    <select
      className="border p-3 rounded-xl w-full"
      value={form.type}
      onChange={(e) =>
        setForm({
          ...form,
          type: e.target.value,
          category: "",
        })
      }
    >
      <option value="grocery">Grocery</option>
      <option value="food">Food</option>
    </select>

    <select
      className="border p-3 rounded-xl w-full"
      value={form.category}
      onChange={(e) =>
        setForm({ ...form, category: e.target.value })
      }
    >
      <option value="">Select Category</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>

    <input
      placeholder="Stock"
      // type="text"
      className="border p-3 rounded-xl w-full"
      value={form.stock}
      onChange={(e) =>
        setForm({ ...form, stock: e.target.value })
      }
    />

    <input
      type="file"
      accept="image/*"
      className="border p-3 rounded-xl w-full"
      onChange={(e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });

        if (file) {
          setPreview(URL.createObjectURL(file));
        }
      }}
    />
  </div>

  <textarea
    placeholder="Description"
    className="border p-3 rounded-xl w-full mt-4"
    rows={4}
    value={form.description}
    onChange={(e) =>
      setForm({ ...form, description: e.target.value })
    }
  />

  {preview && (
    <div className="mt-4 flex justify-center">
      <img
        src={preview}
        alt="preview"
        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border"
      />
    </div>
  )}

  <div className="flex flex-col md:flex-row gap-3 mt-5">
    <button
      type="button"
      onClick={editingId ? updateProduct : addProduct}
      className={`flex-1 text-white py-4 rounded-2xl font-black ${
        editingId ? "bg-blue-600" : "bg-orange-500"
      }`}
    >
      {editingId ? "Update Product" : "Add Product"}
    </button>

    {editingId && (
      <button
        type="button"
        onClick={resetForm}
        className="md:w-auto w-full px-6 bg-gray-200 text-gray-700 py-4 rounded-2xl font-black"
      >
        Cancel
      </button>
    )}
  </div>
</div>

      {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-5"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map((item) => (
          // <div key={item._id} className="bg-white rounded-3xl shadow p-4">
          <div
  key={item._id}
  className="bg-white rounded-3xl shadow p-4 hover:shadow-xl transition"
>
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded-2xl"
            />

            <h2 className="font-black mt-3">{item.name}</h2>

            <p className="text-orange-500 font-bold">₹{item.price}</p>

            <p className="text-sm text-gray-500">{item.category}</p>

            <p className="text-xs mt-1 font-bold uppercase text-gray-400">
              {item.type || "grocery"}
            </p>
            <div className="flex gap-2 mt-3">

              <button
                onClick={() => editProduct(item)}
                className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-bold hover:scale-105 transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(item._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-xl font-bold hover:scale-105 transition"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}