import { FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f9f9fb] text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Brand + Info */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-2">MediZen</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            AI insights are informational only—<br />
            not a substitute for professional<br />
            medical diagnosis
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
          <a href="#" className="hover:text-blue-600">How It Works</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-start md:justify-end gap-4 text-lg text-black">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2025, All right reserved <span className="font-medium text-black">MediZen</span></p>
        <div className="flex flex-wrap gap-2 items-center">
          <img src="/amex.png" alt="AmEx" className="h-6" />
          <img src="/paypal.png" alt="PayPal" className="h-6" />
          <img src="/meta.png" alt="Meta Pay" className="h-6" />
          <img src="/mastercard.png" alt="MasterCard" className="h-6" />
          <img src="/applepay.png" alt="Apple Pay" className="h-6" />
          <img src="/visa.png" alt="Visa" className="h-6" />
          <img src="/discover.png" alt="Discover" className="h-6" />
          <img src="/googlepay.png" alt="Google Pay" className="h-6" />
          <img src="/pay.png" alt="Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
