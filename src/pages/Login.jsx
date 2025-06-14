import { useNavigate } from "react-router-dom"; // 🟣 Step 1: Import hook

const Login = () => {
  const navigate = useNavigate(); // 🟣 Step 2: Initialize it

  // 🟣 Step 3: Create function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // prevent page reload
    // TODO: Add validation/auth here if needed
    navigate("/Upload"); // 🟣 Step 4: Navigate to Upload page
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-white font-bold text-lg">Login Account</h2>
          <span className="text-white text-2xl font-bold">...</span>
        </div>

        {/* 🟣 Step 5: Attach handleLogin to form onSubmit */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-center gap-4">
            <hr className="w-1/4 border-gray-300" />
            <span className="text-sm font-semibold text-gray-500">OR</span>
            <hr className="w-1/4 border-gray-300" />
          </div>

          {/* Social buttons */}
          <div className="flex justify-center gap-4">
            <button type="button" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
              <img src="/googlepay.png" alt="google" className="w-5 h-5" />
              with Google
            </button>
            <button type="button" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              <img src="/applepay.png" alt="apple" className="w-5 h-5" />
              with Apple
            </button>
          </div>

          {/* Login & register link */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-[#52469E] text-white rounded-xl px-8 py-3 text-base font-semibold shadow-md hover:bg-[#42379b] transition-all duration-200"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-gray-600">
              New user?{" "}
              <a
                href="/signup"
                className="text-purple-600 font-medium hover:underline"
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
