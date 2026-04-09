import React, { useState, useEffect, useRef } from "react";
import style from "./filter.module.css";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({
  label,
  id,
  options = [],
  form,
  setForm,
  errors,
  setErrors,
  astric
}) => {

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.dropdownContainer} ref={dropdownRef}>

      {/* LABEL */}
      <label className={style.label}>
        {label}
        <span>{astric}</span>
      </label>

      {/* BOX */}
      <div
        className={style.dropdownBox}
        onClick={() => setOpen(prev => !prev)}  
      >
        {form?.[id] ? (
          <span>{form[id]}</span>
        ) : (
          <span className={style.placeholder}>Select...</span>
        )}

        <ChevronDown size={18} />
      </div>

      {/* LIST */}
      {open && (
        <div className={style.dropdownList}>
          {options.map((opt, index) => (
            <div
              key={index}
              className={style.dropdownItem}
              onClick={(e) => {
                e.stopPropagation(); // ✅ PREVENT REOPEN BUG
                setForm({ ...form, [id]: opt.label });
                setErrors?.({ ...errors, [id]: false });
                setOpen(false); // ✅ CLOSE AFTER SELECT
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;