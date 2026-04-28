import { useState } from "react";
import emailjs from "@emailjs/browser";

import Nav_Bar from "../Nav_Bar.jsx";
import Footer from "../Footer.jsx";
import style from "./contact.module.css";

import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const res = await fetch("https://formspree.io/f/mlgayoog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message
        })
      });

      if (!res.ok) throw new Error("Formspree failed");

      
      await emailjs.send(
        "service_p6wew6c",
        "template_gymvjgc",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        },
        "SKEFxKyTwxXWSPjqX"
      );

      setSuccess(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    }
  };

  return (
    <div className={style.page}>

      <Nav_Bar />

      {/* HERO */}
      <section className={style.hero}>
        <div className={style.overlay}>
          <h1>Contact Us</h1>
          <p>
            We’re here to make your stay peaceful and unforgettable.
            Reach out anytime.
          </p>
        </div>
      </section>

      {/* CARD */}
      <section className={style.cardWrapper}>
        <div className={style.card}>

          {/* LEFT */}
          <div className={style.left}>
            <h2>Get in touch</h2>
            <p className="text-black">
              Let us help you plan your perfect stay.
            </p>

            <div className={style.info}>
              <MapPin size={20} />
              <div>
                <h4>Location</h4>
                <p>Belbari-2, Morang, Nepal</p>
              </div>
            </div>

            <div className={style.info}>
              <Mail size={20} />
              <div>
                <h4>Email</h4>
                <p>booking@sudarshanagroresort.com</p>
              </div>
            </div>

            <div className={style.info}>
              <Phone size={20} />
              <div>
                <h4>Call Us</h4>
                <p>+977-9852020058</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={style.right}>
            <h2>Send a message</h2>

            {success ? (
              <p className="text-green-600">
                Message sent successfully 
              </p>
            ) : (
              <form className={style.form} onSubmit={handleSubmit}>

                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <div className={style.row}>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                />

                <textarea
                  placeholder="Message"
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />

                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Send Message
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className={style.map}>
        <iframe
          src="https://maps.google.com/maps?q=biratnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;