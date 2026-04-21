import menu from "/images/menu/bookinglogo.png";

const Menu = () => {
  return (
    <div>
      <a
        href="https://www.booking.com/hotel/np/sudarshan-resort.fi.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={menu}
          alt="Booking.com"
          aria-label="Booking.com"
          className="
            fixed
            bottom-[180px]
            right-[20px]
            w-[75px]
            h-[75px]
            z-[100]
            cursor-pointer
          "
        />
      </a>
    </div>
  );
};

export default Menu;