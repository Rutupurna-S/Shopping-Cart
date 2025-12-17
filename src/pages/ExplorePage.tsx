import { useState, useEffect } from "react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const subCategoryMap: Record<string, string[]> = {
  Dresses: ["All", "Tops", "Buttons", "Dress", "Male", "Female"],
  Apparel: ["All", "T-shirts", "Shirts", "Hoodies", "Jackets"],
  Footwear: [
    "All",
    "Shoes",
    "Sandals",
    "Slippers",
    "Heels",
    "Sneakers",
    "Male",
    "Female",
  ],
  Electronics: ["All", "Phones", "Laptops", "Watches", "Earbuds"],
  Accessories: ["All", "Bags", "Wallets", "Sunglasses", "Jewelry"],
};

export function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  useEffect(() => {
    setActiveSubCategory("All");
  }, [activeCategory]);
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" || product.category === activeCategory;

    const matchesSub =
      activeSubCategory === "All" || product.subCategory === activeSubCategory;

    return matchesCategory && matchesSub;
  });

  return (
    <div className="bg-[#F8F7F3] min-h-screen pt-32 pb-20 px-6 md:px-16">
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Categories</h2>
      </div>
      <Categories active={activeCategory} setActive={setActiveCategory} />
      {subCategoryMap[activeCategory] && (
        <div className="mt-10 animate-in fade-in slide-in-from-top-1 duration-300">
          <h3 className="mb-4 text-lg font-medium text-gray-800">
            Subcategories
          </h3>

          <div className="flex flex-wrap gap-3 mb-12">
            {subCategoryMap[activeCategory].map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`px-6 py-2 rounded-full text-sm border transition-all duration-300
                  ${
                    activeSubCategory === sub
                      ? "bg-teal-500 text-white border-teal-500 shadow-sm"
                      : "bg-white text-gray-600 border-gray-100 hover:bg-gray-50 hover:border-teal-200"
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-gray-400 italic">
            No items found in this selection.
          </p>
        </div>
      )}
    </div>
  );
}
