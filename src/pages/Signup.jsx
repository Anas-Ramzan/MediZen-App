const Signup = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-white font-bold text-lg">Create Account</h2>
          <span className="text-white text-2xl font-bold">...</span>
        </div>

        <form className="p-8 px-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Username</label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Type here"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-500">
              Agree with{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#52469E] text-white rounded-xl px-8 py-3 text-base font-semibold shadow-md hover:bg-[#42379b] transition-all duration-200"
            >
              Sign Up
            </button>
                        <p className="mt-4 text-sm text-gray-600">
              Already user?{" "}
              <a
                href="/Login"
                className="text-purple-600 font-medium hover:underline"
              >
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
