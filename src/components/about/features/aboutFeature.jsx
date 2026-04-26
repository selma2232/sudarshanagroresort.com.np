import style from './aboutFeature.module.css';
import { Wifi, Car, Utensils, PawPrint, Clock, Accessibility } from 'lucide-react';

const AboutFeature = () => {

  const features = [
    {
      icon: <Wifi size={28} />,
      title: "Free WiFi",
      desc: "Stay connected with high-speed internet access"
    },
    {
      icon: <Utensils size={28} />,
      title: "Restaurant",
      desc: "Enjoy fresh and authentic local cuisine"
    },
    {
      icon: <Car size={28} />,
      title: "Free Parking",
      desc: "Safe and convenient parking available"
    },
    {
      icon: <PawPrint size={28} />,
      title: "Pet Friendly",
      desc: "Bring your pets along for a relaxing stay"
    },
    {
      icon: <Accessibility size={28} />,
      title: "Accessible",
      desc: "Facilities designed for all guests"
    },
    {
      icon: <Clock size={28} />,
      title: "Flexible Stay",
      desc: "Check-in 1PM • Check-out 11AM"
    }
  ];

  return (
    <section className={style.container}>

      <div className={style.header}>
        <span>Our Amenities</span>
        <h2>Comfort & Convenience</h2>
        <p>Everything you need for a relaxing and memorable stay</p>
      </div>

      <div className={style.grid}>
        {features.map((item, index) => (
          <div key={index} className={style.card}>
            <div className={style.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutFeature;