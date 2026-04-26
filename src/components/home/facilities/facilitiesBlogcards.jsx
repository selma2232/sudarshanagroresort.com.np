
import style from "./facilitiesBlogcards.module.css";

const Facilities_blogcards = () => {
  const facilities = [
    {
      img: "/images/home/facilities/barbecue.webp",
      title: "Barbecue Experience",
      desc: "Enjoy outdoor dining with fresh grilled meals under nature",
    },
    {
      img: "/images/home/facilities/powerBackup.webp",
      title: "24/7 Power Backup",
      desc: "Reliable electricity ensuring uninterrupted comfort",
    },
    {
      img: "/images/home/facilities/parking.webp",
      title: "Private Parking",
      desc: "Safe and secure parking space for all guests",
    },
    {
      img: "/images/home/facilities/resturant.webp",
      title: "Riverside Dining",
      desc: "Relax with peaceful river views and premium cuisine",
    },
  ];

  return (
    <section className={style.section}>

      {/* HEADER */}
      <div className={style.header}>
        <span>OUR FACILITIES</span>
        <h2>Experience Comfort & Nature</h2>
        <p>Premium amenities designed for relaxation and luxury living</p>
      </div>

      {/* GRID */}
      <div className={style.grid}>
        {facilities.map((item, index) => (
          <div key={index} className={style.card}>
            <div className={style.iconWrapper}>
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Facilities_blogcards;