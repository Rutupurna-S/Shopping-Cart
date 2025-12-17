import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const itemCount = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F8F7F3]/90 backdrop-blur-md shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-serif tracking-widest text-gray-800 hover:opacity-70 transition-opacity"
        >
          YOUR SHOPPING
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-light tracking-wide text-gray-600">
          <Link to="/explore" className="hover:text-teal-600 transition-colors">
            Explore Products
          </Link>
          <Link
            to="/wishlist"
            className="hover:text-teal-600 transition-colors"
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="relative group hover:text-teal-600 transition-colors"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-3 -right-5 bg-[#99D6C4] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="hover:text-teal-600 transition-colors">
            Login / SignUp
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      <div
        className={`absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } md:hidden`}
      >
        <div className="flex flex-col px-8 py-6 gap-5 text-base font-light text-gray-700">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/explore" onClick={() => setOpen(false)}>
            Explore Products
          </Link>
          <Link to="/wishlist" onClick={() => setOpen(false)}>
            Wishlist
          </Link>
          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex justify-between uppercase tracking-wider"
          >
            Cart <span>({itemCount})</span>
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            Login / SignUp
          </Link>
        </div>
      </div>
    </header>
  );
}
