import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F8F7F3] border-t border-gray-100 text-gray-600 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-serif tracking-widest text-gray-900">
              YOUR SHOPPING
            </h3>
            <p className="text-sm leading-relaxed font-light">
              Your curated destination for timeless style, cutting-edge
              electronics, and premium accessories.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-6">
              Shop
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li>
                <Link to="/" className="hover:text-[#00BFA5] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="hover:text-[#00BFA5] transition-colors"
                >
                  Explore All
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-[#00BFA5] transition-colors"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="hover:text-[#00BFA5] transition-colors"
                >
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="hover:text-[#00BFA5] cursor-pointer transition-colors">
                Shipping & Delivery
              </li>
              <li className="hover:text-[#00BFA5] cursor-pointer transition-colors">
                Returns & Exchanges
              </li>
              <li className="hover:text-[#00BFA5] cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-[#00BFA5] cursor-pointer transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 mb-6">
              Let's Connect
            </h4>
            <div className="flex gap-5 mb-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 hover:text-[#00BFA5] hover:border-[#00BFA5] transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 hover:text-[#00BFA5] hover:border-[#00BFA5] transition-all shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-400 font-light">
              Subscribe to get special offers and style updates.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 md:flex-row justify-center items-center gap-4 text-xs font-light text-gray-400 uppercase tracking-widest text-center">
          <div className="w-full h-px bg-gray-300 mb-8"></div>
          <p>
            &copy; {new Date().getFullYear()} YOUR SHOPPING. Inspired by Your
            Style. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
