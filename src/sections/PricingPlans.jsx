import pricingPlans from '../data/Pricecard'
const Pricingplans = () => {
  return (
    <section className="py-20 bg-gray-100 text-center px-4">
      <h2 className="font-bold text-3xl mb-2">Choose Your Plan</h2>
      <p className="mb-10 text-gray-600">
        Affordable, Transparent Pricing for Exam Analysis
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
    </section>
  );
};

export default Pricingplans;
