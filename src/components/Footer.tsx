import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

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
                <FaFacebook className="w-4 h-4" fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 hover:text-[#00BFA5] hover:border-[#00BFA5] transition-all shadow-sm"
              >
                <FaTwitter className="w-4 h-4" fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 hover:text-[#00BFA5] hover:border-[#00BFA5] transition-all shadow-sm"
              >
                <AiFillInstagram className="w-4 h-4" fill="currentColor" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-100 hover:text-[#00BFA5] hover:border-[#00BFA5] transition-all shadow-sm"
              >
                <AiFillYoutube className="w-4 h-4" fill="currentColor" />
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
