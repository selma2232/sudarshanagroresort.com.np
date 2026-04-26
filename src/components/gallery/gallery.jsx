
// import Top from '../top.jsx'
import Navbar from '../Nav_Bar.jsx'
import Herosection from '../herosection.jsx'
import Allcards from './cardWrapper/allCards.jsx'
import Footer from '../Footer.jsx'
import SeoHelmet from '../seoHelmet.jsx'
import style from './gallery.module.css'
 
const Gallery = () => {
  
  return (
    <div className={style.gallery}>
         <SeoHelmet
        title="Gallery | Sudarshan Resort"
        description="Explore the gallery of Sudarshan Resort showcasing luxurious rooms, beautiful surroundings, modern facilities, and memorable experiences."
        image="/images/gallery/1.jpg"
        url="https://sudarshanresort.com/gallery"
      />
      
      {/* <Top/> */}
      <Navbar/>
     <Herosection 
  h1="Gallery" 
  tab="Service" 
  p="Gallery"
  bg="images/about/SudarshanAbout.webp"
/>
      <Allcards/>
      <Footer/>
      
    </div>
  )
}

export default Gallery
