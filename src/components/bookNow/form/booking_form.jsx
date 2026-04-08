import { useState } from "react";
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

  const travelAssistance = [
    { label: "Yes" },
    { label: "No" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
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

            {/* FULL NAME */}
            <div className={style.field}>
              <label className={style.label}>Full Name *</label>
              <input
                className={style.input}
                placeholder="Enter your name"
                value={form.fullname}
                onChange={(e) =>
                  setForm({ ...form, fullname: e.target.value })
                }
              />
            </div>

            {/* GENDER */}
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

            {/* COUNTRY */}
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

            {/* STATE */}
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

            {/* CITY */}
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

            {/* PHONE */}
            <div className={style.field}>
              <label className={style.label}>Phone *</label>
              <input
                className={style.input}
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>

            {/* GUESTS */}
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

            {/* ROOM TYPE */}
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

            {/* ROOM QUANTITY */}
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

            {/* BED TYPE */}
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

            {/* ARRIVAL */}
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

            {/* STAY */}
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

            {/* MESSAGE */}
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

            {/* BUTTON */}
            <button type="submit" className={style.button}>
              BOOK
            </button>

          </div>
        </form>

        {isSubmitted && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            ✅ Form submitted
          </div>
        )}

      </section>
    </main>
  );
};

export default Booking_form;