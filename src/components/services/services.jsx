
// import Top from '../top.jsx'
import NavBar from '../Nav_Bar.jsx'
import Herosection from '../herosection.jsx'
import Offer from '../services/offers/services_blog_cards.jsx'
import Footer from '../Footer.jsx'
import EnjoyAgro from '../EnjoyAgro.jsx'
import Additional_Features from '../services/additionalFeatures/additional_feature.jsx'
import SeoHelmet from '../seoHelmet.jsx'
 import styles from "./services.module.css";
const Services = () => {
 
  return (
    <div className={styles.container}>
         <SeoHelmet
        title="Services | Sudarshan Resort"
        description="Explore the wide range of services at Sudarshan Resort including luxurious accommodations, agro experiences, modern amenities, and special offerings."
        image="/images/services/transparentbg/bg.jpg"
        url="https://sudarshanresort.com/services"
      />
      {/* <Top/> */}
      <NavBar />
      <Herosection h1="Services" tab="Home" p="Services" bg="images/background/1.webp"/>
      <Offer />
     <EnjoyAgro bg="images/services/transparentbg/bg.webp" />
     <Additional_Features />
      <Footer />
    </div>
  )
}

export default Services
