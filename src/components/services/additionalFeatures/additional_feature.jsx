import style from './Additional_feature.module.css';
import { motion } from "framer-motion";

const Additional_feature = () => {
  const services = [
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Photography Experience",
      description:
        "Capture unforgettable moments with professional photography in our scenic natural surroundings.",
    },
    {
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      title: "Private Transport",
      description:
        "Enjoy stress-free travel with experienced drivers guiding you through nearby destinations.",
    },
    {
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      title: "Laundry Service",
      description:
        "Stay fresh and comfortable with premium laundry services throughout your stay.",
    },
    {
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      title: "In-Room Coffee",
      description:
        "Relax anytime with freshly brewed coffee available right in your room.",
    },
  ];

  return (
    <section className={style.container}>

      {/* HEADER */}
      <div className={style.header}>
        <span>EXPERIENCES</span>
        <h2>Additional Services</h2>
        <p>Designed to elevate every moment of your stay</p>
      </div>

      {services.map((item, index) => (
        <motion.div
          key={item.title}
          className={style.sectionBlock}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* BACKGROUND IMAGE */}
          <div
            className={style.bg}
            style={{ backgroundImage: `url(${item.img})` }}
          />

          {/* CONTENT */}
          <div className={style.content}>
            <span>Premium Experience</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

           
          </div>

        </motion.div>
      ))}

    </section>
  );
};

export default Additional_feature;