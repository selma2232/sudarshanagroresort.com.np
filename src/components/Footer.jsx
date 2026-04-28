import { Facebook, Instagram, Linkedin } from "lucide-react"; 
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      // ✅ 1. Save to Formspree
      await fetch("https://formspree.io/f/mgorjpyp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          email: email,
          type: "newsletter"
        })
      });

      // ✅ 2. Send welcome email (EmailJS)
      await emailjs.send(
        "service_jfkkf89",
        "template_hi03tnf",
        {
          email: email
        },
        "fn-kr1dma-v26TXtl"
      );

      setSuccess(true);
      setEmail("");

    } catch (error) {
      console.error(error);
      alert("Subscription failed");
    }
  };

  return (
    <footer className="bg-[#0f3d1f] text-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* 🔥 reduced gap from 10 → 6 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* BRAND */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-3">
              Sudarshan Agro Resort
            </h2>

            <p className="text-gray-300 text-[15px] leading-7">
              Experience peaceful living surrounded by nature.
              A perfect escape where comfort meets Nepali hospitality.
            </p>

            <div className="flex gap-[14px] mt-[5px]">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 border border-white/20 rounded-md hover:bg-white hover:text-black transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              {["Home", "Rooms", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              Contact
            </h3>

            <p className="text-sm text-gray-300 leading-6">
              Lalbhitti, Belbari-2<br />
              Morang, Nepal<br /><br />
              +977-9852020058<br />
              booking@sudarshanagroresort.com.np
            </p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              Stay Updated
            </h3>

            <p className="text-sm text-gray-300 mb-4">
              Get updates and offers.
            </p>

            {success ? (
              <p className="text-green-400 text-sm">
                Subscribed successfully ✅
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center bg-white rounded-md overflow-hidden max-w-[300px]"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-[16px] h-full bg-white text-black outline-none"
                />

                {/* 🔥 IMPROVED BUTTON */}
                <button
                  type="submit"
                  className="bg-[#7fbf42] px-4 py-2 text-white font-semibold hover:bg-[#6aa835] transition flex items-center justify-center"
                >
                  →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center text-xs py-4 text-gray-400">
        © 2025 Sudarshan Agro Resort · Technology Partner{" "}
        <a
          href="https://sriyog.com/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:underline"
        >
          SRIYOG
        </a>
      </div>

    </footer>
  );
};

export default Footer;