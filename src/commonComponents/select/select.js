import React from "react";
import "./select.scss";

export const Select = ({
  value,
  onchangeSelector,
  optionArray,
  className,
  width,
  name,
}) => {
  return (
    <div className="select-container" style={{ width: width }}>
      <select value={value} onChange={onchangeSelector} name={name}>
        {optionArray.map((item) => (
          <option
            key={item.id}
            value={item.value}
            id={item.title}
            className={className}
          >
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};
