import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <div className="bg-[#F8F7F3] min-h-screen pt-32 pb-20 px-6 md:px-16">
      <h2 className="text-3xl font-serif tracking-tight text-center mb-12 text-gray-900">
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-[2.5rem] shadow-sm max-w-2xl mx-auto border border-gray-50">
          <p className="text-gray-400 text-lg italic mb-6">
            Your cart feels a bit light...
          </p>
          <Link
            to="/"
            className="inline-block bg-[#00BFA5] text-white px-8 py-3 rounded-xl font-medium hover:brightness-95 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-gray-50 p-6 md:p-10">
          <div className="space-y-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
              >
                <div className="w-32 h-32 shrink-0 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800 tracking-wide uppercase">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 font-light">
                    Unit Price: ${item.price}
                  </p>
                  <p className="text-[#00BFA5] font-medium">
                    Item Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-6 bg-gray-50 rounded-full px-2 py-1">
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        removeFromCart(item.id);
                      } else {
                        updateQuantity(item.id, item.quantity - 1);
                      }
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-xl text-gray-600 hover:bg-gray-100 shadow-sm transition-colors"
                  >
                    -
                  </button>

                  <span className="min-w-4 text-center font-medium text-lg text-gray-700">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-xl text-gray-600 hover:bg-gray-100 shadow-sm transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 hover:text-red-400 transition-colors p-2"
                  title="Remove item"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-1">
                  Estimated Total
                </p>
                <h3 className="text-3xl font-serif text-gray-900">
                  ${totalPrice.toFixed(2)}
                </h3>
              </div>

              <button
                onClick={() => alert("Proceeding to checkout...")}
                className="w-full sm:w-auto bg-[#00BFA5] text-white px-16 py-4 rounded-xl font-medium text-lg hover:brightness-95 transition-all shadow-lg shadow-teal-100"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
