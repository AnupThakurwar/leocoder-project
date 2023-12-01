import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as Dateicon } from "../../assets/images/Vectordateicon.svg";
import { ReactComponent as Timeicon } from "../../assets/images/clock (2) 1time.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./datetime.scss";

const DateTime = ({
  label,
  name,
  onChangeHandler,
  isImportant,
  startDate,
  type = "date",
}) => {
  const ExampleCustomInput = forwardRef((props, ref) => {
    return (
      <div className="custom-container">
        <label
          className={
            isImportant ? "datetime-label-with-astricks" : "datetime-label"
          }
        >
          {label}
        </label>
        <input className={"datetime-custom-input"} ref={ref} {...props} />
        <div className="icon-selector">
          {type === "date" ? <Dateicon /> : <Timeicon />}
        </div>
      </div>
    );
  });
  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={(date, e) => {
          onChangeHandler({ date, ...e, name });
        }}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default DateTime;
