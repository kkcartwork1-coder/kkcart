import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Clock,
  Plus,
  Heart,
} from "lucide-react";
import toast from "react-hot-toast";
import API from "../api";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const res = await API.get(`/products/${id}`);
      setProduct(res.data);

      const all = await API.get("/products");
      const relatedProducts = all.data
        .filter(
          (p) =>
            p._id !== res.data._id &&
            p.category === res.data.category
        )
        .slice(0, 5);

      setRelated(relatedProducts);
    } catch (err) {
      toast.error("Product loading failed");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
        <div className="text-orange-500 font-black text-xl">
          Loading product...
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-8 shadow text-center">
          <h1 className="text-2xl font-black mb-3">Product not found</h1>
          <Link
            to="/"
            className="text-orange-500 font-bold"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const imageSrc =
    product.image && product.image.trim() !== ""
      ? product.image
      : "/products/default.jpg";

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-bold text-gray-700 mb-5 hover:text-orange-500"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image */}
          <div className="bg-white rounded-[30px] border shadow-sm p-6">
            <div className="bg-orange-50 rounded-[26px] p-6 flex items-center justify-center min-h-[420px]">
              <img
                src={imageSrc}
                alt={product.name}
                className="max-h-[380px] w-full object-contain hover:scale-105 transition"
                onError={(e) => {
                  e.currentTarget.src = "/products/default.jpg";
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="bg-white rounded-[30px] border shadow-sm p-6">
            <div className="flex justify-between gap-4">
              <div>
                <p className="text-orange-500 font-black text-sm uppercase tracking-wider">
                  {product.category}
                </p>

                <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-2 leading-tight">
                  {product.name}
                </h1>
              </div>

              <button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-orange-50">
                <Heart className="text-orange-500" />
              </button>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-black">
                4.3
                <Star size={14} fill="white" />
              </div>

              <p className="text-gray-500 text-sm">
                2.4k ratings • 120 reviews
              </p>
            </div>

            <div className="mt-6">
              <p className="text-4xl font-black text-gray-900">
                ₹{product.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Inclusive of all taxes
              </p>
            </div>

            <div className="mt-6 bg-orange-50 border border-orange-100 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Clock className="text-orange-500" />
                <div>
                  <h3 className="font-black">Delivery in 10 minutes</h3>
                  <p className="text-sm text-gray-500">
                    Fresh products delivered quickly by KKCart.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mt-6">
              {product.description ||
                "Fresh and high-quality product curated by KKCart for your daily needs."}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold">
                Stock: {product.stock}
              </span>

              <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                Available
              </span>
            </div>

            <button
              onClick={handleAdd}
              className="w-full mt-8 bg-orange-500 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-600 shadow-lg shadow-orange-200"
            >
              <ShoppingBag size={21} />
              Add to Cart
            </button>

            <div className="grid grid-cols-2 gap-4 mt-8 border-t pt-6">
              <Trust
                icon={<Truck />}
                title="Fast Delivery"
                desc="10 minute delivery"
              />

              <Trust
                icon={<ShieldCheck />}
                title="Secure"
                desc="Safe checkout"
              />
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-black mb-5">
              Similar products
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {related.map((item) => {
                const relImage =
                  item.image && item.image.trim() !== ""
                    ? item.image
                    : "/products/default.jpg";

                return (
                  <div
                    key={item._id}
                    className="bg-white rounded-[24px] border shadow-sm overflow-hidden hover:shadow-lg transition"
                  >
                    <div
                      onClick={() => navigate(`/product/${item._id}`)}
                      className="bg-orange-50 p-3 cursor-pointer"
                    >
                      <img
                        src={relImage}
                        alt={item.name}
                        className="h-28 w-full object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.src = "/products/default.jpg";
                        }}
                      />
                    </div>

                    <div className="p-3">
                      <div className="flex items-center gap-1 text-[11px] text-gray-500 font-bold mb-2">
                        <Clock size={13} />
                        10 MINS
                      </div>

                      <h3
                        onClick={() => navigate(`/product/${item._id}`)}
                        className="font-black text-sm line-clamp-2 min-h-[40px] cursor-pointer hover:text-orange-500"
                      >
                        {item.name}
                      </h3>

                      <div className="flex items-center justify-between mt-3">
                        <p className="font-black">₹{item.price}</p>

                        <button
                          onClick={() => {
                            const token = localStorage.getItem("token");

                            if (!token) {
                              toast.error("Please login first");
                              navigate("/login");
                              return;
                            }

                            addToCart(item);
                            toast.success(`${item.name} added`);
                          }}
                          className="border border-orange-500 text-orange-600 font-black px-3 py-2 rounded-lg hover:bg-orange-500 hover:text-white flex items-center gap-1"
                        >
                          <Plus size={14} />
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function Trust({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-orange-500">{icon}</div>
      <div>
        <h4 className="font-black text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}