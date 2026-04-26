import Nav_Bar from '../Nav_Bar.jsx';
import Footer from '../Footer.jsx';
import style from './contact.module.css';

import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className={style.page}>

      <Nav_Bar />

      {/* 🌿 HERO */}
      <section className={style.hero}>
        <div className={style.overlay}>
          <h1>Contact Us</h1>
          <p>
            We’re here to make your stay peaceful and unforgettable.  
            Reach out anytime.
          </p>
        </div>
      </section>

      {/* 🌿 FLOATING CARD */}
      <section className={style.cardWrapper}>

        <div className={style.card}>

          {/* LEFT SIDE */}
          <div className={style.left}>
            <h2>Get in touch</h2>
            <p className={style.subtitle}>
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

          {/* RIGHT SIDE */}
          <div className={style.right}>
            <h2>Send a message</h2>

            <form className={style.form}>
              <div className={style.row}>
                <input placeholder="Name" />
              
              </div>

              <div className={style.row}>
                <input placeholder="Phone" />
                <input placeholder="Email" />
              </div>

              <input placeholder="Subject" />

              <textarea placeholder="Message" />

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* 🌿 MAP */}
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