import style from './ourAccomodation.module.css';
import { Link } from 'react-router-dom';

const rooms = [
  {
    img: 'images/rooms/room1.webp',
    alt: 'Twin bedroom at Sudarshan Resort',
    name: 'Twin Bedroom',
    price: 'NPR 2500',
  },
  {
    img: 'images/rooms/room2.webp',
    alt: 'King bedroom at Sudarshan Resort',
    name: 'King Bedroom',
    price: 'NPR 2500',
  },
];

const Our_Accomodation = () => {
  return (
    <section className={style.section} aria-labelledby="accommodation-heading">

      {/* HEADER */}
      <div className={style.header}>
        <div>
          <span className={style.tag}>Stay With Us</span>
          <h2 id="accommodation-heading">Our Accommodation</h2>
          <p>Choose comfort, elegance, and nature in every stay</p>
        </div>

        <Link to="/rooms" className={style.view_btn}>
          View All Rooms
        </Link>
      </div>

      {/* ROOMS GRID */}
      <div className={style.grid}>
        {rooms.map((room, index) => (
          <div key={index} className={style.card}>

            <img src={room.img} alt={room.alt} />

            {/* OVERLAY */}
            <div className={style.overlay}>
              <h3>{room.name}</h3>
              <p className={style.price}>Starting from {room.price}</p>

              <Link to="/book" className={style.book_btn}>
                Book Now
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Our_Accomodation;