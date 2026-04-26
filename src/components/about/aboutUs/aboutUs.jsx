import style from './aboutUs.module.css';

const Aboutus = () => {
  return (
    <section className={style.container}>

      {/* IMAGE */}
      <div className={style.image_side}>
        <img 
          src="images/about/SudarshanAbout.webp" 
          alt="Sudarshan Agro Resort"
        />
      </div>

      {/* TEXT */}
      <div className={style.text_side}>

        <span className={style.tag}>Our Story</span>

        <h2>
          Experience Nature <br /> Like Never Before
        </h2>

        <p className={style.main_text}>
          A peaceful retreat where nature, comfort, and culture come together.
        </p>

        <p>
          Sudarshan Agro Resort offers a calm escape surrounded by greenery,
          designed for relaxation and meaningful experiences.
        </p>

        <p>
          From authentic local cuisine to serene landscapes, every moment is
          crafted to feel natural, warm, and unforgettable.
        </p>

      </div>

    </section>
  );
};

export default Aboutus;