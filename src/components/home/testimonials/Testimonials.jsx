import style from './Testimonials.module.css';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonialsData = [
  {
    name: "Sakchyam",
    img: "images/testimonials/sakchyam.webp",
    title: "Bhaktapur, Nepal",
    rating: 5,
    description: "The eco-friendly design and sustainable practices at Sudarshan Agro Resort impressed me immensely. A perfect blend of comfort and nature."
  },
  {
    name: "Aashma",
    img: "images/testimonials/aashma.webp",
    title: "Lalitpur, Nepal",
    rating: 5,
    description: "Sudarsan Agro Resort provided a wonderful escape from the hectic pace of daily life. Peaceful, clean, and beautifully designed."
  },
  {
    name: "Bitisha",
    img: "images/testimonials/bitisha.webp",
    title: "Biratnagar, Nepal",
    rating: 5,
    description: "The resort is a perfect blend of comfort and nature. The atmosphere is calm and refreshing, highly recommended!"
  }
];

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className={style.section}>

      {/* HEADER */}
      <div className={style.header}>
        <span>TESTIMONIALS</span>
        <h2>What Our Guests Say</h2>
        <p>Real experiences from our valued guests</p>
      </div>

      {/* CARDS */}
      <div className={style.grid}>
        {testimonialsData.map((item, index) => (
          <div key={index} className={style.card}>

            <div className={style.avatarWrapper}>
              <img src={item.img} alt={item.name} />
            </div>

            <h3>{item.name}</h3>
            <span className={style.location}>{item.title}</span>

            <div className={style.rating}>
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#c19b76" color="#c19b76" />
              ))}
            </div>

            <p className={`${style.text} ${expandedIndex === index ? style.expanded : ''}`}>
              {item.description}
            </p>

            

          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;