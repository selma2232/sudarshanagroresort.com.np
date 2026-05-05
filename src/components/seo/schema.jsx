import { useEffect } from "react";

const Schema = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Hotel",

      "name": "Sudarshan Agro Resort",
      "url": "https://sudarshanresort.com",

      "image": [
        "https://sudarshanresort.com/images/home/SudarshanHome.jpg",
        "https://sudarshanresort.com/images/rooms/room1.webp",
        "https://sudarshanresort.com/images/rooms/room2.webp"
      ],

      "description":
        "A peaceful agro resort offering luxury stays, nature experiences, and authentic Nepali hospitality.",

      "telephone": "+977-9852020058",
      "priceRange": "NPR 2000 - NPR 5000",

      /*  ADDRESS */
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lalbhitti, Belbari-2",
        "addressLocality": "Morang",
        "addressRegion": "Province 1",
        "addressCountry": "Nepal"
      },

      /*  GEO */
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.663,
        "longitude": 87.438
      },

      

      /*  AMENITIES */
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free WiFi" },
        { "@type": "LocationFeatureSpecification", "name": "Private Parking" },
        { "@type": "LocationFeatureSpecification", "name": "Restaurant" },
        { "@type": "LocationFeatureSpecification", "name": "Riverside Dining" }
      ],

      /* 🛏 ROOM OFFERS */
      "makesOffer": [
        {
          "@type": "Offer",
          "name": "King Bedroom",
          "price": "2500",
          "priceCurrency": "NPR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Twin Bedroom",
          "price": "2000",
          "priceCurrency": "NPR",
          "availability": "https://schema.org/InStock"
        }
      ],

      
      "sameAs": [
        "https://facebook.com/",
        "https://instagram.com/",
        "https://linkedin.com/"
      ]
    };

    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Schema;