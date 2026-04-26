import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav_Bar = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Rooms", "Services", "Gallery", "Contact"];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1000]
        flex items-center justify-between px-[8%] py-[18px]
        transition-all duration-300
        
        ${
          scroll
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <Link to="/">
          <img
            src="/favicon/logo.png"
            alt="logo"
            className="h-[70px] w-[70px] object-cover rounded-full"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-[35px] items-center">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-[16px] font-medium tracking-wide
                transition duration-300
                
                ${
                  scroll
                    ? "text-[#1e1e1e] hover:text-[#c19b76]"
                    : "text-white hover:text-[#c19b76]"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

         
          {/* MOBILE ICON */}
          <div className="md:hidden">
            {menu ? (
              <X
                size={30}
                onClick={() => setMenu(false)}
                className={`${scroll ? "text-black" : "text-white"}`}
              />
            ) : (
              <Menu
                size={30}
                onClick={() => setMenu(true)}
                className={`${scroll ? "text-black" : "text-white"}`}
              />
            )}
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[999]
        bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center
        transition-all duration-500
        
        ${
          menu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setMenu(false)}
            className="text-white text-[28px] mb-6 font-light
            hover:text-[#c19b76] transition"
          >
            {item}
          </Link>
        ))}

        {/* MOBILE BOOK BUTTON */}
        <Link
          to="https://d.sriyog.com/sudarshanresort"
          target="_blank"
          className="mt-6"
        >
          <button className="px-6 py-3 rounded-full
            bg-[#c19b76] text-white text-lg
            hover:bg-[#a8825f] transition">
            Book Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Nav_Bar;