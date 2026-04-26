import style from './allCards.module.css';
import { useState } from 'react';

import All from '../smallCards/smallCards.jsx';
import Twin_bed from '../twinBedCards/twinBedCards.jsx';
import Doublebed_cards from '../doubleBedCards/doubleBedCard.jsx';
import Nature_cards from '../naturecard/nature.jsx';
const Allcards = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className={style.gallery}>

      {/* HEADER */}
      <div className={style.header}>
      <h2>Our Gallery</h2>
<p>Discover the beauty and serenity of our resort</p>
        <p>Explore the beauty of our resort</p>
      </div>

      {/* FILTER BUTTONS */}
      <div className={style.filters}>
        <button
          className={activeTab === "all" ? style.active : ""}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>

        <button
          className={activeTab === "twin" ? style.active : ""}
          onClick={() => setActiveTab("twin")}
        >
          Twin Rooms
        </button>

        <button
          className={activeTab === "double" ? style.active : ""}
          onClick={() => setActiveTab("double")}
        >
          Double Rooms
        </button>
         
        <button
  className={activeTab === "nature" ? style.active : ""}
  onClick={() => setActiveTab("nature")}
>
  Experience the Resort
</button>
      </div>

      {/* IMAGES */}
      <div className={style.grid}>

        {activeTab === "all" && (
          <>
            <All />
            <Twin_bed />
            <Doublebed_cards />
          </>
        )}

        {activeTab === "twin" && <Twin_bed />}
        {activeTab === "double" && <Doublebed_cards />}
        {activeTab === "nature" && <Nature_cards />}
      </div>

    </section>
  );
};

export default Allcards;