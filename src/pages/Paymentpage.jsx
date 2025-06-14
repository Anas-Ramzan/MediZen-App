import pricingPlans from "../data/Pricecard";
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import this

const Paymentpage = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleGenerate = () => {
    navigate("/output"); // ✅ Redirects to Output page
  };

  return (
    <>
      <section className="relative text-center min-h-screen pt-32 pb-32 bg-gradient-to-br from-indigo-100 via-purple-200 to-blue-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Secure Payment – Almost Done!
          </h1>
          <p className="text-gray-700 text-sm md:text-base mb-12">
            One Last Step to Understand Your Medical Report
          </p>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 shadow-md ${
                  plan.theme === "dark"
                    ? "bg-gradient-to-br from-[#1d1430] to-[#43358a] text-white"
                    : "bg-white text-black border"
                } relative`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                <div className="flex justify-center mb-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      plan.theme === "dark"
                        ? "bg-white text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    ⚡
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                <p className="text-sm mb-4">{plan.subText}</p>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-base font-medium ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-3 text-sm text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      ✅ <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    className={`w-full py-3 rounded-full text-sm font-semibold ${
                      plan.theme === "dark"
                        ? "bg-white text-blue-700"
                        : "border border-gray-400 text-blue-600"
                    }`}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,176C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* PAYMENT FORM SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Review your order details and choose a payment method below
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT: Payment Method Selection */}
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-lg font-medium mb-4">Payment Information</h3>
              <p className="text-sm text-gray-600 mb-2">
                Select Payment Method
              </p>
              <div className="space-y-4">
                <label className="flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-blue-600" defaultChecked />
                    <span className="font-medium">Visa</span>
                  </div>
                  <img src="/visa.png" alt="Visa" className="h-6" />
                </label>

                <label className="flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-blue-600" />
                    <span className="font-medium">Mastercard</span>
                  </div>
                  <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                </label>

                <label className="flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-blue-600" />
                    <span className="font-medium">PayPal</span>
                  </div>
                  <img src="/paypal.png" alt="PayPal" className="h-6" />
                </label>
              </div>
            </div>

            {/* RIGHT: Payment Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    Expiry Date
                  </label>
                  <div className="flex gap-2">
                    <select className="w-full border rounded-lg px-2 py-2">
                      <option>MM</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                    <select className="w-full border rounded-lg px-2 py-2">
                      <option>YY</option>
                      <option>24</option>
                      <option>25</option>
                      <option>26</option>
                    </select>
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">CVC/CVV</label>
                  <input
                    type="text"
                    placeholder="***"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="w-1/2 border rounded-lg px-4 py-2"
                />
                <select className="w-1/2 border rounded-lg px-4 py-2">
                  <option>United States</option>
                  <option>Pakistan</option>
                  <option>China</option>
                </select>
              </div>

              <button 
                onClick={handleGenerate}
                className="w-full bg-[#52469E] text-white py-3 rounded-lg font-semibold mt-4"
              >
                Continue to confirmation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paymentpage;
