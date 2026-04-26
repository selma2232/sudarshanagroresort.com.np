
import NavBar from '../Nav_Bar.jsx';
import Herosection from '../herosection.jsx';
import Offer from '../services/offers/services_blog_cards.jsx';
import Footer from '../Footer.jsx';
import EnjoyAgro from '../EnjoyAgro.jsx';
import Additional_Features from '../services/additionalFeatures/additional_feature.jsx';
import SeoHelmet from '../seoHelmet.jsx';
import { Link } from 'react-router-dom';

import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>

      <SeoHelmet
        title="Services | Sudarshan Resort"
        description="Explore services at Sudarshan Resort including stays, agro experiences, and premium amenities."
        image="/images/services/transparentbg/bg.jpg"
        url="https://sudarshanresort.com/services"
      />

      {/* NAV */}
      <NavBar />

      {/* HERO */}
      <Herosection 
  h1="Services" 
  tab="Rooms" 
  p="service"
  bg="images/about/SudarshanAbout.webp"
/>
      {/* MAIN SERVICES */}
      <section className={styles.section}>
        <Offer />
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section_alt}>
        <EnjoyAgro bg="images/services/transparentbg/bg.webp" />
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className={styles.section}>
        <Additional_Features />
      </section>
<section className={styles.cta}>
        <h2></h2>
        <p></p>

        <Link to="/rooms" className={styles.cta_btn}>
          Book Now
        </Link>
      </section>

      <Footer />

    </div>
  );
};

export default Services;