import { useState } from "react";

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#F8F7F3] min-h-screen pt-32 pb-20 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-sm p-10 border border-gray-50">
        <div className="flex bg-gray-100 p-1.5 rounded-full mb-10">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isLogin
                ? "bg-[#00BFA5] text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              !isLogin
                ? "bg-[#00BFA5] text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
          </button>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-gray-900 tracking-tight">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-light">
            {isLogin
              ? "Please enter your details to sign in"
              : "Join us and start your style journey"}
          </p>
        </div>
        <form className="space-y-4">
          {!isLogin && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00BFA5]/20 focus:bg-white transition-all outline-none text-gray-700"
              />
            </div>
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00BFA5]/20 focus:bg-white transition-all outline-none text-gray-700"
          />

          <div className="space-y-1">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00BFA5]/20 focus:bg-white transition-all outline-none text-gray-700"
            />
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs text-gray-400 hover:text-[#00BFA5]"
                >
                  Forgot password?
                </button>
              </div>
            )}
          </div>

          {!isLogin && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#00BFA5]/20 focus:bg-white transition-all outline-none text-gray-700"
              />
            </div>
          )}
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="w-full bg-[#00BFA5] text-white py-4 rounded-2xl font-medium text-lg hover:brightness-95 transition-all shadow-lg shadow-teal-100 mt-4"
          >
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-8 font-light">
          {isLogin ? (
            <>
              New to our store?
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#00BFA5] font-semibold hover:underline"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Have an account already?
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#00BFA5] font-semibold hover:underline"
              >
                Sign in here
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
