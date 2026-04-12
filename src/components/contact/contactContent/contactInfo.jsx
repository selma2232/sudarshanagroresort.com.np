
import style from './contactInfo.module.css'
import Map from '../map/map.jsx'
import { Mail, MapPin, PhoneCall } from 'lucide-react'

const Contacts = () => {
  return (
    <div className={style.containerallwrap}>
        <div className={style.mapWrapper}>
          <Map/>
        </div>
     <div className={style.contentWrapper}>
        <div className={style.sudarshanresort_header_line_wrapper}>
        <h2 className={style.h2}>Sudarshan Agro Resort</h2>
        <div className={style.line}></div>
        </div>
        
        <div>
            <h2 className={style.h2}>Location</h2>
            <div className={style.icon_and_p_wrapper}>
            <MapPin className={style.icon} />
            <p>Lalbhitti, Belbari-2, Morang, Nepal</p>
            </div>
             <div className={style.line}></div>
        </div>
        
         <div>
            <h2 className={style.h2}>Email</h2>
            <div className={style.icon_and_p_wrapper}>
            <Mail className={style.icon} />
            <p>booking@sudarshanagroresort.com.np</p>
            </div>
             <div className={style.line}></div>
        </div>
        
         <div>
            <h2 className={style.h2}>Phone No.</h2>
            <div className={style.icon_and_p_wrapper}>
            <PhoneCall className={style.icon}  />
            <p>+977-9852020058</p>
            </div>
             <div className={style.line}></div>
        </div>
        
        
     </div>
     
    </div>
  )
}

export default Contacts
