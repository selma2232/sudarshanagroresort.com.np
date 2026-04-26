import style from '../smallCards/smallCards.module.css';
import { useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const Nature_cards = () => {
  const images = [
    { id: 1, img: "/images/gallery/1.webp" },
    { id: 2, img: "/images/gallery/2.webp" },
    { id: 3, img: "/images/gallery/3.webp" },
    { id: 4, img: "/images/gallery/4.webp" },
    { id: 4, img: "/images/gallery/5.webp" },
    { id: 4, img: "/images/gallery/6.webp" },
    { id: 4, img: "/images/gallery/7.webp" },
    { id: 4, img: "/images/gallery/8.webp" },
    { id: 4, img: "/images/gallery/9.webp" },
    { id: 4, img: "/images/gallery/10.webp" },
    { id: 4, img: "/images/gallery/11.webp" },
    { id: 4, img: "/images/gallery/12.webp" },
    { id: 4, img: "/images/gallery/13.webp" },
    { id: 4, img: "/images/gallery/14.webp" },
     { id: 4, img: "/images/gallery/15.webp" },
      { id: 4, img: "/images/gallery/16.webp" },
       { id: 4, img: "/images/gallery/17.webp" },
        { id: 4, img: "/images/gallery/18.webp" },
         { id: 4, img: "/images/gallery/19.webp" },
          { id: 4, img: "/images/gallery/20.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className={style.container}>
      {images.map((item, index) => (
        <div key={item.id} className={style.imgcontainer}>
          <img src={item.img} alt="Nature view" />

          <div className={style.overlay}>
            <SquareArrowOutUpRight
              className={style.icon}
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nature_cards;