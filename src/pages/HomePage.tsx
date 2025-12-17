const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Highwaisted Jeans",
    price: 50,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
  },
  {
    id: 2,
    name: "Floral Dress",
    price: 50,
    img: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 3,
    name: "Crossbody Bag",
    price: 50,
    img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
  },
];

export function HomePage() {
  return (
    <div className="bg-[#F8F7F3] min-h-screen pt-32 px-6 md:px-16">
      <div className="relative rounded-4xl bg-[#F6EFE6] px-6 py-12 md:px-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#B7E4DA,transparent_60%),radial-gradient(circle_at_bottom_right,#B7E4DA,transparent_60%)] opacity-70" />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide text-gray-900">
            YOUR SHOPPING
          </h1>
          <div className="mt-4 inline-block bg-teal-300 text-white px-8 py-2 rounded-full font-medium">
            Your Style
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3 shadow">
              <span className="text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="relative mt-14 flex items-center justify-center">
            <button className="hidden md:flex absolute -left-6 w-12 h-12 rounded-full bg-black text-white items-center justify-center text-2xl hover:scale-110 transition-transform">
              ‹
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
              {FEATURED_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-4 w-64 shadow mx-auto hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-60 w-full object-cover rounded-2xl"
                  />
                  <h3 className="mt-4 font-semibold uppercase text-sm text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Starting From ${product.price}
                  </p>
                </div>
              ))}
            </div>

            <button className="hidden md:flex absolute -right-6 w-12 h-12 rounded-full bg-black text-white items-center justify-center text-2xl hover:scale-110 transition-transform">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
