const categories = [
  "All Products",
  "Dresses",
  "Apparel",
  "Footwear",
  "Electronics",
  "Accessories",
];

export default function Categories({
  active,
  setActive,
}: {
  active: string;
  setActive: (c: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border
            ${
              active === cat
                ? "bg-teal-500 text-white border-teal-500"
                : "bg-white text-gray-700 border-gray-100 hover:bg-gray-50"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
