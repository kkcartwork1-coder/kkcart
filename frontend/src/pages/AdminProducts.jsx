import { useEffect, useState } from "react";
import API from "../api";
import toast from "react-hot-toast";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: null,
    category: "",
    stock: "",
    description: "",
  });

  const [preview, setPreview] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    try {
      const data = new FormData();

      data.append("name", form.name);
      data.append("price", form.price);
      data.append("category", form.category);
      data.append("stock", form.stock);
      data.append("description", form.description);
      data.append("image", form.image);

      await API.post("/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product Added");

      setForm({
        name: "",
        price: "",
        image: null,
        category: "",
        stock: "",
        description: "",
      });

      setPreview("");
      fetchProducts();
    } catch (err) {
      toast.error("Product add failed");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      toast.success("Deleted");
      fetchProducts();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-extrabold mb-5 text-orange-500">
        Admin Products
      </h1>

      <div className="bg-white p-5 rounded-2xl shadow mb-8 grid gap-3">
        <input
          className="border p-3 rounded"
          placeholder="Product name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="border p-3 rounded"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          className="border p-3 rounded"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          className="border p-3 rounded"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) =>
            setForm({ ...form, stock: e.target.value })
          }
        />

        <textarea
          className="border p-3 rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];

            setForm({ ...form, image: file });

            if (file) {
              setPreview(URL.createObjectURL(file));
            }
          }}
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-32 h-32 object-cover rounded-xl border"
          />
        )}

        <button
          onClick={addProduct}
          className="bg-green-600 text-white py-3 rounded-xl font-bold"
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow p-3"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-32 w-full object-cover rounded-xl"
            />

            <h3 className="font-bold mt-3">{p.name}</h3>

            <p className="text-orange-500 font-bold">
              ₹{p.price}
            </p>

            <p className="text-sm text-gray-500">
              Stock: {p.stock}
            </p>

            <button
              onClick={() => deleteProduct(p._id)}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}