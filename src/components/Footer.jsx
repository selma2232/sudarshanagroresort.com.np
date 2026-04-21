import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-gray-200">
      <div className="max-w-7xl mx-auto pl-4 pr-10 py-12">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16 items-start">

          {/* ABOUT */}
          <div className="flex flex-col gap-4 max-w-[320px]">

            <img
              src="/logo.png"
              alt="Sudarshan Agro Resort Logo"
              className="w-24 object-contain"
            />

            <h2 className="text-white text-lg font-semibold">
              Sudarshan Agro Resort
            </h2>

            <p className="text-gray-300 leading-7 text-[15px]">
              Enjoy your recreational time with Sudarshan Park and Resort in a Nepali style.
              We offer you the best hospitality for your golden memories.
            </p>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-sm font-semibold">Contact</h2>

            <p className="text-sm text-gray-300 leading-7">
              Lalbhitti, Belbari-2, Morang, Nepal<br />
              +977-9852020058<br />
              booking@sudarshanagroresort.com.np
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">

            {/* QUICK LINKS */}
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-sm font-semibold">Quick Links</h2>

              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link to="/gallery" className="hover:text-white transition">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/rooms" className="hover:text-white transition">
                    Rooms
                  </Link>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col gap-3">
              <h2 className="text-white text-sm font-semibold">Newsletter</h2>

              <form
                action="https://us4.list-manage.com/subscribe/post?u=8a3c0cb58d47468e054c0bd0b&id=f6fcb60e8c&f_id=00fa52e3f0"
                method="POST"
                target="_blank"
                className="flex items-center border-b border-gray-400 pb-2"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  className="bg-transparent flex-1 text-sm outline-none placeholder-gray-400"
                  required
                />
                <button type="submit" className="text-white text-lg ml-2">
                  {">"}
                </button>
              </form>

              {/* SOCIALS */}
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} className="hover:opacity-70 transition" />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} className="hover:opacity-70 transition" />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="hover:opacity-70 transition" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10"></div>

      {/* BOTTOM */}
      <div className="bg-[#062e06]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© 2025 Sudarshan Agro Resort. All rights reserved.</p>

          <p>
            Technology Partner:
            <a
              href="https://sriyog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-white hover:underline"
            >
              SRIYOG
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;