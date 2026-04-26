

import style from './about.module.css';
import { Link } from "react-router-dom";
import Nav_Bar from '../Nav_Bar.jsx';
import Herosection from '../herosection.jsx';
import AboutUs from './aboutUs/aboutUs.jsx';
import Promoting from './promotingTourism/promoting.jsx';
import AboutFeature from './features/aboutFeature.jsx';
import EnjoyAgro from '../EnjoyAgro.jsx';
import Footer from '../Footer.jsx';
import SeoHelmet from '../seoHelmet.jsx';

const About = () => {
  return (
    <div className={style.about}>

      <SeoHelmet
        title="About | Sudarshan Resort"
        description="Learn about Sudarshan Resort, a peaceful agro resort offering comfort, nature, and authentic Nepali hospitality."
        image="/images/about/SudarshanAbout.jpg"
        url="https://sudarshanresort.com/about"
      />

      {/* NAV */}
      <Nav_Bar />

      {/* HERO */}
      <Herosection 
  h1="About Us" 
  tab="Home" 
  p="About"
  bg="images/about/SudarshanAbout.webp"
/>

      {/* STORY */}
      <section className={style.section}>
        <AboutUs />
      </section>

      {/* MISSION / PROMOTING */}
      <section className={style.section_alt}>
        <Promoting />
      </section>

      {/* FEATURES */}
      <section className={style.section}>
        <AboutFeature />
      </section>

      {/* EXPERIENCE */}
      <section className={style.section_alt}>
        <EnjoyAgro bg="images/about/transparentbg/1.webp" />
      </section>

      {/* FINAL CTA */}
      <section className={style.cta}>
  <h2>Experience Sudarshan Agro Resort</h2>
  <p>Book your stay and reconnect with nature</p>

  <Link to="/book" className={style.cta_btn}>
    Book Your Stay
  </Link>
</section>

      <Footer />
    </div>
  );
};

export default About;