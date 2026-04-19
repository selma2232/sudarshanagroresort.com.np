import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from "./components/scrolltop.jsx";
import QRm from './components/qr/QRm.jsx';

const Starting_Page = React.lazy(() => import('./components/Starting_Page.jsx'));
const Home = React.lazy(() => import('./components/home/home.jsx'));
const About = React.lazy(() => import('./components/about/about.jsx'));
const Room = React.lazy(() => import('./components/rooms/room.jsx'));
const Services = React.lazy(() => import('./components/services/services.jsx'));
const Gallery = React.lazy(() => import('./components/gallery/gallery.jsx'));
const Contact = React.lazy(() => import('./components/contact/contact.jsx'));
const Book_Now = React.lazy(() => import('./components/bookNow/book_now.jsx'));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Splash */}
          <Route path="/homesplash" element={<Starting_Page />} />

          {}
          <Route path="/home" element={<Home />} />

         
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book_Now />} />
          <Route path="/qr" element={<QRm />} />

          {/* ✅ Only ONE wildcard */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App