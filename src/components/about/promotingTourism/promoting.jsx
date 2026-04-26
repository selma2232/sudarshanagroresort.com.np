import style from './promoting.module.css';

const Promoting = () => {
  return (
    <section className={style.container}>

      {/* 🌿 HERO IMAGE */}
      <div className={style.hero}>
        <img src="images/about/promoting/1.webp" alt="Tourism" />

        <div className={style.hero_overlay}>
          <span>Our Vision</span>
          <h2>Promoting Tourism</h2>

          <p>
            Connecting people with nature, culture, and authentic experiences
            through meaningful travel.
          </p>
        </div>
      </div>

      {/* 🌿 IMAGE GRID */}
       <div className={style.grid}>

        <div className={style.card_large}>
          <img src="images/about/promoting/2.webp" alt="Nature" />
          <div className={style.card_overlay}>
            <h3>Nature</h3>
          </div>
        </div>

        <div className={style.card_small}>
          <img src="images/about/promoting/3.webp" alt="Culture" />
          <div className={style.card_overlay}>
            <h3>Culture</h3>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Promoting;