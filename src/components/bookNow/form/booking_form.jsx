import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";

import style from "./booking_form.module.css";
import FilterDropdown from "./filter";

const Booking_form = () => {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    number: "",
    room_type: "",
    room_quantity: "1",
    arrival_date: null,
    stay: "1 Day",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("fn-kr1dma-v26TXtl"); // ✅ your public key
  }, []);

  const roomPrices = {
    "King Bedroom": 2500,
    "Twin Bedroom": 2000
  };

  const stayMap = {
    "1 Day": 1,
    "2 Days": 2,
    "3 Days": 3,
    "4 Days": 4,
    "More than 4 Days": 5
  };

  const days = stayMap[form.stay] || 1;

  const checkoutDate = () => {
    if (!form.arrival_date) return "-";
    const d = new Date(form.arrival_date);
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
  };

  const formatDate = (date) => {
    return date ? date.toISOString().split("T")[0] : "";
  };

  const totalPrice =
    (roomPrices[form.room_type] || 0) *
    Number(form.room_quantity || 1) *
    days;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🚨 basic validation
    if (!form.email || !form.fullname) {
      alert("Please fill required fields");
      return;
    }

    try {
      // ✅ 1. Send to Formspree
      const res = await fetch("https://formspree.io/f/xaqazpno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          fullname: form.fullname,
          email: form.email,
          phone: form.phone,
          guests: form.number,
          room_type: form.room_type,
          room_quantity: form.room_quantity,
          stay: form.stay,
          checkin: formatDate(form.arrival_date), // ✅ FIXED
          checkout: checkoutDate(),
          total: totalPrice,
          message: form.message
        })
      });

      if (!res.ok) {
        throw new Error("Formspree failed");
      }

      // ✅ 2. Send EmailJS
      await emailjs.send(
        "service_jfkkf89",
        "template_jj0zjye", // ⚠️ make sure this exists
        {
          fullname: form.fullname,
          email: form.email,
          room_type: form.room_type,
          checkin: formatDate(form.arrival_date),
          checkout: checkoutDate(),
          total: totalPrice
        }
      );

      // ✅ success
      setIsSubmitted(true);
      setStep(1);

      setForm({
        fullname: "",
        email: "",
        phone: "",
        number: "",
        room_type: "",
        room_quantity: "1",
        arrival_date: null,
        stay: "1 Day",
        message: ""
      });
 

    } catch (error) {
      console.error("ERROR:", error);
      alert("Booking failed — check console");
    }
  };

  const roomType = [
    { label: "King Bedroom" },
    { label: "Twin Bedroom" }
  ];

  const roomQuantity = [
    { label: "1" }, { label: "2" }, { label: "3" }
  ];

  const stayOptions = Object.keys(stayMap).map(label => ({ label }));

  return (
    <div className={style.container}>

      <div className={style.header}>
        <h1>Resort Booking Form</h1>
        <p>Booking at your fingertips.</p>
      </div>

      <form className={style.form} onSubmit={handleSubmit}>

        <div className={style.stepIndicator}>
          <span className={step === 1 ? style.active : ""}>1</span>
          <span className={step === 2 ? style.active : ""}>2</span>
          <span className={step === 3 ? style.active : ""}>3</span>
        </div>

        {step === 1 && (
          <div className={style.section}>
            <h2>Guest Info</h2>

            <div className={style.gridForm}>
                  <div className={style.floatingField}>
              <input required value={form.fullname}
                onChange={(e) => setForm({ ...form, fullname: e.target.value })} />
   <input required type="email" value={form.email}
              
                onChange={(e) => setForm({ ...form, email: e.target.value })} />

             
                <label>Full Name</label>
              </div>

              <div className={style.floatingField}>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
                <label>Email</label>
              </div>

              <div className={style.floatingField}>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => {
                    if (/^\d*$/.test(e.target.value)) {
                      setForm({ ...form, phone: e.target.value });
                    }
                  }}
                />
                <label>Phone</label>
              </div>

              <div className={style.floatingField}>
                <input
                  value={form.number}
                  onChange={(e) =>
                    setForm({ ...form, number: e.target.value })
                  }
                />
                <label>Guests</label>
              </div>

            </div>

            <button type="button" className={style.primaryBtn} onClick={() => setStep(2)}>Next →</button>
          </div>
        )}

        {step === 2 && (
          <div className={style.section}>
            <h2>Booking Details</h2>
  <div className={style.gridForm}>
              <FilterDropdown label="Room Type" id="room_type" options={roomType} form={form} setForm={setForm} />
              <FilterDropdown label="Rooms" id="room_quantity" options={roomQuantity} form={form} setForm={setForm} />

              <div>
                <label>Check-in</label>
                <DatePicker
                  selected={form.arrival_date}
                  onChange={(date) =>
                    setForm({ ...form, arrival_date: date })
                  }
                  minDate={new Date()}
                  className={style.datepicker}
                  placeholderText="Select date"
                />
              </div>

              <FilterDropdown label="Stay" id="stay" options={stayOptions} form={form} setForm={setForm} />
            </div>

            <div className={style.stepActions}>
              <button type="button" onClick={() => setStep(1)}>← Back</button>
              <button type="button" onClick={() => setStep(3)}>Next →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={style.section}>
            <h2>Confirm Booking</h2>
 <div className={style.summary}>
              <p><strong>Room:</strong> {form.room_type}</p>
              <p><strong>Rooms:</strong> {form.room_quantity}</p>
              <p><strong>Stay:</strong> {form.stay}</p>
              <p><strong>Check-in:</strong> {form.arrival_date?.toDateString()}</p>
              <p><strong>Check-out:</strong> {checkoutDate()}</p>
            <h3>Total: NPR {totalPrice}</h3>
  </div>
            <textarea
               placeholder="Any special requests..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

             <div className={style.stepActions}>
              <button type="button" onClick={() => setStep(2)}>← Back</button>
              <button type="submit" className={style.primaryBtn}>
                Confirm Booking
              </button>
            </div>
          </div>
        )}

      </form>

      {isSubmitted &&  <p className={style.success}>Booking sent ✅</p>}
    </div>
  );
};

export default Booking_form;