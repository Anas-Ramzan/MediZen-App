const Hero = () => {
  return (
   <section
  className="relative text-center min-h-screen pt-20 pb-30 bg-no-repeat bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/Hero.png')" }}
>

      <div className="px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold leading-tight">
          AI–Powered{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Exam Result Interpretation
          </span>
          <br />
          <span className="block mt-2">In Minutes</span>
        </h1>

        <p className="mt-6 text-gray-700 text-lg">
          Our AI cross-references thousands of medical studies to give you a personalized health
          report so you can make informed decisions faster.
        </p>

        <button className="mt-8 bg-[#52469E] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:opacity-90 transition-all duration-200">
          Upload PDF
        </button>
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
  );
};

export default Hero;
