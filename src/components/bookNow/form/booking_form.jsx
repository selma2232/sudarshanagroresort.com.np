import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from "./booking_form.module.css";
import FilterDropdown from "./filter";

const Booking_form = () => {

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    fullname: "",
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
    emailjs.init("4ufjEe2FuYXd9ArD0");
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

  const totalPrice =
    (roomPrices[form.room_type] || 0) *
    Number(form.room_quantity || 1) *
    days;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_v4mqblp",
        "template_ri2ns9r",
        {
          fullname: form.fullname,
          phone: form.phone,
          room_type: form.room_type,
          total: totalPrice,
          arrival: form.arrival_date,
          checkout: checkoutDate(),
          message: form.message
        }
      );

      setIsSubmitted(true);
      setStep(1);

    } catch {
      alert("Booking failed");
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

      {/* 🔥 HEADER */}
      <div className={style.header}>
        <h1>Resort Booking Form</h1>
        <p>Booking at your fingertips.</p>
      </div>

      <form className={style.form} onSubmit={handleSubmit}>

        {/* STEP INDICATOR */}
        <div className={style.stepIndicator}>
          <span className={step === 1 ? style.active : ""}>1</span>
          <span className={step === 2 ? style.active : ""}>2</span>
          <span className={step === 3 ? style.active : ""}>3</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className={style.section}>
            <h2>Guest Info</h2>

            <div className={style.gridForm}>

              <div className={style.floatingField}>
                <input
                  required
                  value={form.fullname}
                  onChange={(e) =>
                    setForm({ ...form, fullname: e.target.value })
                  }
                />
                <label>Full Name</label>
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

            <button
              type="button"
              className={style.primaryBtn}
              onClick={() => setStep(2)}
            >
              Next →
            </button>
          </div>
        )}

        {/* STEP 2 */}
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

        {/* STEP 3 */}
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
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
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

      {isSubmitted && <p className={style.success}>Booking sent ✅</p>}
    </div>
  );
};

export default Booking_form;