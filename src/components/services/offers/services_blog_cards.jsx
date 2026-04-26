import style from './services_blog_cards.module.css';

const Offer_blog_cards = () => {

  const services = [
    { id:1, icon:"images/services/barbecue.webp", name:"Barbecue" },
    { id:2, icon:"images/services/wifi.webp", name:"Free WiFi" },
    { id:3, icon:"images/services/kings-bed.webp", name:"King Beds" },
    { id:4, icon:"images/services/laundry.webp", name:"Laundry" },
    { id:5, icon:"images/services/drink.webp", name:"Drinks" },
    { id:6, icon:"images/services/farm-to-table.webp", name:"Farm Dining" },
    { id:7, icon:"images/services/riverside.webp", name:"Riverside" },
    { id:8, icon:"images/services/fishing1.webp", name:"Fishing" }
  ];

  return (
    <section className={style.container}>

      {/* HEADER */}
      <div className={style.header}>
        <h2>Our Services</h2>
        <p>Everything you need for a comfortable stay</p>
      </div>

      {/* GRID */}
      <div className={style.grid}>
        {services.map((item) => (
          <div key={item.id} className={style.card}>
            <img src={item.icon} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Offer_blog_cards;