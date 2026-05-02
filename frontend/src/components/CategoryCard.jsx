const categories = [
  { name: "All", emoji: "🛒", color: "bg-orange-50" },
  { name: "Fruits", emoji: "🍎", color: "bg-red-50" },
  { name: "Vegetables", emoji: "🥦", color: "bg-green-50" },
  { name: "Dairy", emoji: "🥛", color: "bg-blue-50" },
  { name: "Snacks", emoji: "🍪", color: "bg-yellow-50" },
  { name: "Beverages", emoji: "🥤", color: "bg-purple-50" },
  { name: "Bakery", emoji: "🍞", color: "bg-orange-50" },
  { name: "Rice & Atta", emoji: "🌾", color: "bg-lime-50" },
  { name: "Cleaning", emoji: "🧽", color: "bg-cyan-50" },
  { name: "Personal Care", emoji: "🧴", color: "bg-pink-50" },
];

export default function CategoryCard({ selectedCategory, setSelectedCategory }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-7">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-black">Shop by category</h2>
        <button
          onClick={() => setSelectedCategory("All")}
          className="text-orange-500 font-bold"
        >
          See all
        </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`${cat.color} rounded-2xl p-3 border shadow-sm hover:shadow-md transition ${
              selectedCategory === cat.name ? "ring-2 ring-orange-500" : ""
            }`}
          >
            <div className="text-3xl mb-2">{cat.emoji}</div>
            <p className="text-[11px] font-extrabold leading-tight">
              {cat.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}