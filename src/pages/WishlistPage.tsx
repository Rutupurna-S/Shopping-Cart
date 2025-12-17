import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-[#F8F7F3] min-h-screen pt-32 pb-20 px-6 md:px-16">
      <h2 className="text-2xl font-semibold mb-8">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
