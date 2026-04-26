import { useState, useEffect } from 'react';
import style from './doubleBedCard.module.css';

import {
  SquareArrowOutUpRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Doublebed_cards = () => {
  const images = [
    { id: 1, img: "images/gallery/double_bed/doublebed1.webp", size: "card1" },
    { id: 2, img: "images/gallery/double_bed/doublebed2.webp", size: "card2" },
    { id: 3, img: "images/gallery/double_bed/doublebed3.webp", size: "card3" },
    { id: 4, img: "images/gallery/double_bed/doublebed4.webp", size: "card4" },
    { id: 5, img: "images/gallery/double_bed/doublebed5.webp", size: "card5" },
    { id: 6, img: "images/gallery/double_bed/doublebed6.webp", size: "card6" }
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const openFullscreen = (index) => setCurrentIndex(index);
  const closeFullscreen = () => setCurrentIndex(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 🔥 Keyboard controls (premium feel)
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") closeFullscreen();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <>
      {/* GRID */}
      <div className={style.container}>
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`${style.imgcontainer} ${style[item.size]}`}
          >
            <img
              src={item.img}
              alt={`Double bedroom ${index + 1}`}
              loading="lazy"
            />

            <div className={style.overlay}>
              <SquareArrowOutUpRight
                className={style.bookbtn}
                onClick={() => openFullscreen(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN */}
      {currentIndex !== null && (
        <div
          className={style.fullscreenOverlay}
          onClick={closeFullscreen} // click outside to close
        >
          {/* CLOSE */}
          <X
            className={style.closeBtn}
            size={32}
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
          />

          {/* LEFT */}
          <ChevronLeft
            className={`${style.navBtn} ${style.leftNav}`}
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          />

          {/* IMAGE */}
          <img
            src={images[currentIndex].img}
            alt="Full view"
            className={style.fullscreenImg}
          />

          {/* RIGHT */}
          <ChevronRight
            className={`${style.navBtn} ${style.rightNav}`}
            size={40}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          />
        </div>
      )}
    </>
  );
};

export default Doublebed_cards;