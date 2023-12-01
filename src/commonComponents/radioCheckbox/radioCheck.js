import React from "react";
import "./radioCheck.scss";
const RadioCheck = ({ label, type, name, className, onChange, value }) => {
  return (
    <div className="radio-check-container">
      <input
        type={type}
        name={name}
        value={label}
        onChange={onChange}
        className={className}
      />
      <label
        className={
          value === label ? "radiocheck-activelabel" : "radiocheck-label"
        }
      >
        {label}
      </label>
    </div>
  );
};

export default RadioCheck;
