import { Product } from "../types";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity ?? 0;
  const { toggleWishlist, isWishlisted } = useWishlist();
  const liked = isWishlisted(product.id);
  const addToCartAlert = () => {
    alert(`The product is added to cart`);
  };

  return (
    <div className="bg-white rounded-4xl p-5 shadow-sm hover:shadow-md transition-shadow relative border border-gray-50">
      <button
        onClick={() => toggleWishlist(product)}
        className={`absolute top-8 right-8 z-10 bg-white p-2 rounded-full shadow-sm transition-colors
    ${liked ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
        aria-label="Add to wishlist"
      >
        <svg
          className="w-5 h-5"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      <div className="overflow-hidden rounded-3xl h-64 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center mt-5 space-y-1">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4">
          Starting From ${product.price}
        </p>
      </div>
      <div className="mt-4">
        {quantity === 0 ? (
          <button
            onClick={addToCartAlert}
            className="w-full bg-[#00BFA5] text-white py-3 rounded-xl font-medium hover:brightness-95 transition-all shadow-sm"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center gap-6 py-1">
            <button
              onClick={() => {
                if (quantity === 1) {
                  removeFromCart(product.id);
                } else {
                  updateQuantity(product.id, quantity - 1);
                }
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-xl font-light hover:bg-gray-200 transition-colors"
            >
              -
            </button>

            <span className="text-lg font-medium min-w-3 text-center">
              {quantity}
            </span>

            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-xl font-light hover:bg-gray-200 transition-colors"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
