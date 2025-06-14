const Howitworks = () => {
  return (
    <section className="pt-10 pb-20  text-center bg-white px-4">
      <h2 className="text-3xl font-bold mb-5">How does it Work?</h2>
      <p className="mb-12 text-gray-600">
        How Our AI Transforms Your Medical Documents Into <br />
        Actionable Health Insights in Just 3 Simple Steps
      </p>

      <div className="max-w-6xl mx-auto relative">
        {/* Step Circles Row */}
        <div className="flex justify-between items-center relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
              1
            </div>
            <h3 className="mt-4 font-semibold text-lg">Login or Sign Up</h3>
            <p className="text-sm text-gray-600 mt-1">
              Securely login with Google <br />or Apple to get started
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
              2
            </div>
            <h3 className="mt-4 font-semibold text-lg">Upload Your Documents</h3>
            <p className="text-sm text-gray-600 mt-1">
              Drag and drop your PDF exam <br /> results or medical reports
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/3">
            <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10">
              3
            </div>
            <h3 className="mt-4 font-semibold text-lg">Get AI-Powered Analysis</h3>
            <p className="text-sm text-gray-600 mt-1">
              Our GPT-4.5 powered system <br /> analyzes your documents and <br />provides plain-language
            </p>
          </div>
        </div>

        {/* Dashed Lines Between Circles */}
        <div className="absolute top-8 left-[22%] w-[56%] h-0 border-t-2 border-dashed border-gray-300 z-0"></div>
      </div>
    </section>
  );
};

export default Howitworks;
