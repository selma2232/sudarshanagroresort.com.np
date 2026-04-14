import { useEffect, useState, useMemo } from "react";
import style from "./homeHero.module.css";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  const texts = useMemo(() => ["Luxury Resort", "Deluxe Rooms", "King Beds"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const start = setTimeout(() => setBlink(true), 1500);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    const speed = deleting ? 60 : 120;
    const timeout = setTimeout(() => {
      const text = texts[index];

      if (!deleting) {
        setSubIndex((prev) => prev + 1);
        if (subIndex === text.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setSubIndex((prev) => prev - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  return (
    <section className={style.sudarshan_main_container} aria-labelledby="hero-heading">
      {/* LCP IMAGE */}
      <img
        src="/images/home/SudarshanHome.webp"
        alt="Sudarshan Resort luxury stay surrounded by nature"
        className={style.heroImg}
        fetchpriority="high"
        decoding="async"
        width="1920"
        height="1080"
      />

      <div className={style.overlay} aria-hidden="true"></div>

      <div className={style.topcontainer}>
        <p className={style.top}>Luxury hotel & Resort Lifestyle</p>

      

        <div className={style.typing_container} aria-hidden="true">
          <h1 className={style.comfort}>Comfort</h1>
          <span className={style.typing_text}>
            {texts[index].substring(0, subIndex)}
          </span>
          <span className={`${style.cursor} ${blink ? style.blink : ""}`}>|</span>
        </div>

        <div className={style.h1_Link_btn_wrapper}>
          <h2 className={style.for_your_vacation}>for your Vacation</h2>
          <Link
            to="/book"
            className={style.book_now_btn}
            aria-label="Book a room at Sudarshan Resort"
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderContent;
