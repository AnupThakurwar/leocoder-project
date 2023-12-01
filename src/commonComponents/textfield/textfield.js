import React from "react";
import "./textfield.scss";

const TextFields = ({
  label,
  name,
  type = "text",
  isImportant,
  className,
  onChange,
  value,
  width = "100%",
  containerstyleObject = null,
}) => {
  return (
    <div className="textfield-container" style={containerstyleObject}>
      <label className={isImportant ? "label-with-astricks" : "label"}>
        {label}
      </label>
      {type === "text" ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          style={{ width: width }}
        />
      ) : (
        <textarea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          style={{ width: width }}
        />
      )}
    </div>
  );
};

export default TextFields;
