import style from './homeAbout.module.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className={style.container} aria-labelledby="about-heading">

      {/* LEFT CONTENT */}
      <div className={style.content}>

        <span className={style.tag}>Welcome to</span>

        <h1 id="about-heading">
          Sudarshan <span>Agro Resort</span>
        </h1>

        <p className={style.subtitle}>
          A peaceful agro tourism retreat near Biratnagar
        </p>

        <p className={style.description}>
          Escape into nature where comfort meets Nepali tradition.  
          Surrounded by lush greenery, Sudarshan Agro Resort offers a calm and 
          meaningful experience — from authentic cuisine to serene stays and 
          unforgettable moments.
        </p>

        <Link to="/about" className={style.about_btn}>
          Discover More
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className={style.image_container}>
        <div className={style.image_wrapper}>
          <img
            src="images/home/SudarshanAbout.webp"
            alt="Sudarshan Agro Resort surrounded by lush greenery"
          />
        </div>
      </div>

    </section>
  );
};

export default About;