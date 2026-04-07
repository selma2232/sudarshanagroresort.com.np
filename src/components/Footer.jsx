import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a7a0a] to-[#034d03] font-sans text-white">

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ABOUT */} 
     <div> 
       <h1 className="text-2xl font-semibold mb-4"> 
         Sudarshan Agro Resort 
       </h1> 
 
       <p className="text-sm leading-6 text-green-100"> 
         Enjoy your recreational time with Sudarshan Park and Resort in a Nepali style. 
         We offer you the best hospitality for your golden memories. 
       </p> 


              {/* SOCIALS */} 
       <div className="flex gap-5 mt-6"> 
         <a href="https://facebook.com" target="_blank"> 
           <Facebook size={20} className="hover:opacity-70 transition" /> 
         </a> 
         <a href="https://instagram.com" target="_blank"> 
           <Instagram size={20} className="hover:opacity-70 transition" /> 
         </a> 
         <a href="https://linkedin.com" target="_blank"> 
           <Linkedin size={20} className="hover:opacity-70 transition" /> 
         </a> 
       </div> 
     </div> 


          {/* QUICK LINKS */} 
     <div> 
       <h2 className="text-lg font-semibold mb-4">Quick Links</h2> 
 
       <ul className="space-y-3 text-sm text-green-100"> 
         <li><Link to="/gallery" className="hover:text-white transition hover:pl-1">Gallery</Link></li> 
         <li><Link to="/contact" className="hover:text-white transition hover:pl-1">Contact</Link></li> 
         <li><Link to="/services" className="hover:text-white transition hover:pl-1">Services</Link></li> 
         <li><Link to="/rooms" className="hover:text-white transition hover:pl-1">Rooms</Link></li> 
       </ul> 
     </div> 


         {/* CONTACT */} 
     <div> 
       <h2 className="text-lg font-semibold mb-4">Get in Touch</h2> 
 
       <div className="space-y-4 text-sm text-green-100"> 
 
         <div className="flex items-start gap-3"> 
           <MapPin size={18} className="mt-1" /> 
           <a href="#" className="hover:text-white transition"> 
             Lalbhitti, Belbari-2, Morang, Nepal 
           </a> 
         </div> 
 
         <div className="flex items-center gap-3"> 
           <PhoneCall size={18} /> 
           <a href="tel:+9779852020058" className="hover:text-white transition"> 
             +977-9852020058 
           </a> 
         </div> 
 
         <div className="flex items-center gap-3"> 
           <Mail size={18} /> 
           <a 
             href="mailto:booking@sudarshanagroresort.com.np" 
             className="hover:text-white transition" 
           > 
             booking@sudarshanagroresort.com.np 
           </a> 
         </div> 
 
       </div> 
     </div> 


{/* NEWSLETTER */} 
     <div>
  <h2 className="text-lg font-semibold mb-4">Stay Updated</h2>

  <p className="text-sm text-green-100 mb-4">
    Subscribe to get offers, updates and resort news.
  </p>

  {/* Newsletter */}
 
  
<div className="flex w-full max-w-[260px] mb-5 bg-white rounded-lg overflow-hidden shadow-sm">
  <input
    type="email"
    placeholder="Your email"
    className="flex-1 px-3 py-3 text-black text-sm outline-none"
  />
  <button className="bg-[#f0c419] px-6 text-sm font-semibold text-black hover:opacity-90 transition">
    Subscribe
  </button>
</div>
  
  </div>
  </div>
  
 </div>

  
  
  
  
 
 
 {/* BOTTOM */} 
 <div className="bg-[#141414]"> 
   <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300"> 
 
     <p> 
       © 2025 Sudarshan Agro Resort. All rights reserved. 
     </p> 
 
     <p> 
       Technology Partner: 
       <a 
         href="https://sriyog.com/" 
         target="_blank" 
         className="ml-1 text-white hover:underline" 
       > 
         SRIYOG 
       </a> 
     </p> 
 
   </div> 
 
  </div> 

    </footer>
  );
};

export default Footer;