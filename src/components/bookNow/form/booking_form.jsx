import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import style from "./booking_form.module.css";
import FilterDropdown from "./filter";

const Booking_form = () => {
  const [form, setForm] = useState({
    fullname: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    number: "",
    room_type: "",
    room_quantity: "1",
    bed_type: "",
    arrival_date: "",
    stay: "1 Day",
    travel_assistance: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("4ufjEe2FuYXd9ArD0"); 
  }, []);

  const stayDuration = [
    { label: "1 Day" },
    { label: "2 Days" },
    { label: "3 Days" },
    { label: "4 Days" },
    { label: "More than 4 Days" },
  ];

  const roomType = [
    { label: "King Bedroom" },
    { label: "Twin Bedroom" },
  ];

  const bedType = [
    { label: "Twin" },
    { label: "King" },
  ];

  const roomQuantity = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
  ];

  // ✅ SIMPLE VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!form.fullname) newErrors.fullname = true;
    if (!form.phone) newErrors.phone = true;
    if (!form.arrival_date) newErrors.arrival_date = true;
    if (!form.room_type) newErrors.room_type = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //  SUBMIT (FIXED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await emailjs.send(
        "service_v4mqblp",   
        "template_ri2ns9r",  
        {
          fullname: form.fullname,
          phone: form.phone,
          number: form.number,
          room_type: form.room_type,
          arrival_date: form.arrival_date,
          message: form.message || "No message"
        }
      );

      setIsSubmitted(true);

      // reset form
      setForm({
        fullname: "",
        gender: "",
        country: "",
        state: "",
        city: "",
        phone: "",
        number: "",
        room_type: "",
        room_quantity: "1",
        bed_type: "",
        arrival_date: "",
        stay: "1 Day",
        travel_assistance: "",
        message: ""
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      console.log("STATUS:", error.status);
      console.log("TEXT:", error.text);
      alert("Failed to send booking ");
    }
  };

  return (
    <main>
      <section className={style.container}>

        <div className={style.header}>
          <h2 className={style.resort_booking_from}>Resort Booking Form</h2>
          <p className={style.bookatyour_fingertips}>
            Booking at your fingertips.
          </p>
        </div>

        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.gridForm}>

            <div className={style.field}>
              <label className={style.label}>Full Name *</label>
              <input
                className={style.input}
                value={form.fullname}
                onChange={(e) =>
                  setForm({ ...form, fullname: e.target.value })
                }
              />
            </div>

            <div className={style.field}>
              <FilterDropdown
                label="Gender"
                id="gender"
                options={[{ label: "Male" }, { label: "Female" }]}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className={style.field}>
              <FilterDropdown
                label="Country"
                id="country"
                options={[{ label: "Nepal" }, { label: "India" }]}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className={style.field}>
              <label className={style.label}>State *</label>
              <input
                className={style.input}
                value={form.state}
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value })
                }
              />
            </div>

            <div className={style.field}>
              <label className={style.label}>City *</label>
              <input
                className={style.input}
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />
            </div>

            <div className={style.field}>
              <label className={style.label}>Phone *</label>
              <input
                className={style.input}
                value={form.phone}
                type="tel"
                pattern="[0-9]{7,15}$"
                onChange={(e) =>{
           const value =e.target.value;
          if (/^\d*$/.test(value)) {

                
                  setForm({ ...form, phone: e.target.value })
                }
                }
                }
              />
            </div>

            <div className={style.field}>
              <label className={style.label}>Number of Guests *</label>
              <input
                className={style.input}
                value={form.number}
                onChange={(e) =>
                  setForm({ ...form, number: e.target.value })
                }
              />
            </div>

            <div className={style.field}>
              <FilterDropdown
                label="Room Type"
                id="room_type"
                options={roomType}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className={style.field}>
              <FilterDropdown
                label="Room Quantity"
                id="room_quantity"
                options={roomQuantity}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className={style.field}>
              <FilterDropdown
                label="Bed Type"
                id="bed_type"
                options={bedType}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className={style.field}>
              <label className={style.label}>Arrival Date *</label>
              <input
                type="date"
                className={style.input}
                value={form.arrival_date}
                onChange={(e) =>
                  setForm({ ...form, arrival_date: e.target.value })
                }
              />
            </div>

            <div className={style.field}>
              <FilterDropdown
                label="Stay Duration"
                id="stay"
                options={stayDuration}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
              />
            </div>

            <div className={style.full}>
              <label className={style.label}>Message</label>
              <textarea
                className={style.textarea}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </div>

            <button type="submit" className={style.button}>
              BOOK
            </button>

          </div>
        </form>

        {isSubmitted && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
         Booking sent successfully
          </div>
        )}

      </section>
    </main>
  );
};

export default Booking_form;