  import SeoHelmet from '../seoHelmet.jsx'
  import Herosection from '../herosection.jsx'
  import Nav_Bar from '../Nav_Bar.jsx'
  import Roomcards from './rooms/roomCards.jsx'
  import Footer from '../Footer.jsx'
  import style from './room.module.css'
  const Room = () => {
   
    return (
      <div className={style.room}>
     <SeoHelmet
        title="Rooms | Sudarshan Resort"
        description="Discover luxurious rooms at Sudarshan Resort. Enjoy modern amenities, cozy interiors, and peaceful stays surrounded by nature. Book your stay now!"
        image="/images/rooms/room1.jpg"
        url="https://sudarshanresort.com/rooms"
      />
        
        <Nav_Bar />
        
        <Herosection h1="Rooms" tab="Home" p="Rooms" bg="images/background/1.webp"/>
        <Roomcards />
        <Footer />
      </div>
    )
  }

  export default Room
