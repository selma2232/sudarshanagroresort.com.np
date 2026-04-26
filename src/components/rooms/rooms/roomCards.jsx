import style from "./roomCards.module.css";
import { Link } from "react-router-dom";

const Roomblogcards = () => {
  const roomcontent = [
     {img:"images/rooms/room1.webp",title:"Mercury",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Venus",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.webp",title:"Earth",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Mars",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.webp",title:"Jupiter",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Saturn",price:"2500", per:"/ per night" },
     {img:"images/rooms/room1.webp",title:"Uranus",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Neptune",price:"2500", per:"/ per night" },
    {img:"images/rooms/room2.webp",title:"Pluto",price:"2500", per:"/ per night" },
  ];

  return (
    <div className={style.container}>

      <div className={style.grid}>
        {roomcontent.map((room, id) => (
          <div className={style.card} key={id}>

            {/* IMAGE */}
            <div className={style.imageWrapper}>
              <img src={room.img} alt={room.title} />

              <div className={style.overlay}>
                <Link to="/book" className={style.bookBtn}>
                  Book Now
                </Link>
              </div>
            </div>

            {/* CONTENT */}
            <div className={style.content}>
              <h3>{room.title}</h3>

              <div className={style.price}>
                <span className={style.amount}>NPR {room.price}</span>
                <span className={style.per}>/ night</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Roomblogcards;