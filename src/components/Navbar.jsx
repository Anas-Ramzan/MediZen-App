import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-5 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-xl font-bold">Medzien</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9">
          <Link to="/">Home</Link>
          <Link to="/">How it Works</Link>
          <Link to="/">Pricing</Link>
          <p>Eng</p>
          <Link
            to="/login"
            className="bg-[#52469E] rounded-lg px-3 py-2 text-white font-semibold text-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-4 bg-white bg-opacity-95 shadow py-4 rounded-lg">
          <Link to="/">Home</Link>
          <Link to="/">How it Works</Link>
          <Link to="/">Pricing</Link>
          <p>Eng</p>
          <Link
            to="/login"
            className="bg-[#52469E] rounded-lg px-4 py-2 text-white font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
