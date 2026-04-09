import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");

 
  useEffect(() => {
    emailjs.init("4ufjEe2FuYXd9ArD0"); 
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_z40lehq",   
        "template_0waivfi",  
        { email }
      );

      alert("Subscribed successfully ");
      setEmail("");
   }
   catch (error) {
  console.error("FULL ERROR:", error);
  console.log("STATUS:", error.status);
  console.log("TEXT:", error.text);
  alert("Failed to send ");

}

  };  

  return (
    <footer className="bg-gradient-to-r from-[#033a03] via-[#055d05] to-[#022802] text-gray-200">
      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* ABOUT */}
          <div className="max-w-[320px]">
            <h2 className="text-white text-lg font-semibold mb-5">
              Sudarshan Agro Resort
            </h2>

            <p className="text-sm text-gray-300 leading-7">
             Enjoy your recreational time with Sudarshan Park and Resort in a Nepali style.
              We offer you the best hospitality for your golden memories.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Contact</h3>

            <p className="text-sm text-gray-300 leading-7">
              Lalbhitti, Belbari-2, Morang, Nepal<br />
              +977-9852020058<br />
              booking@sudarshanagroresort.com.np
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Rooms</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="max-w-[260px]">
            <h3 className="text-white text-sm font-semibold mb-5">Newsletter</h3>

            <form
              onSubmit={handleSubmit}
              className="flex items-center border-b border-gray-400 pb-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 text-sm outline-none placeholder-gray-400"
                required
              />
              <button type="submit" className="text-white text-lg ml-2">
                →
              </button>
            </form>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#f0c419] transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10"></div>

      <div className="bg-[#062e06]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© 2025 Sudarshan Agro Resort. All rights reserved.</p>

          <p>
            Technology Partner:
            <a
              href="https://sriyog.com/"
              target="_blank"
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