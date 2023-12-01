import React from "react";
import TextFields from "../../../commonComponents/textfield/textfield";
import DateTime from "../../../commonComponents/dateTime/datetime";
import RadioCheck from "../../../commonComponents/radioCheckbox/radioCheck";
import { Select } from "../../../commonComponents/select/select";

const PersonalDetils = ({
  onchangeTextfieldHandler,
  textFields,
  onchangeDateTimeHandler,
  startDater,
  onChangeHandle,
  select,
  onchangeSelectHandler,
  selectArray,
}) => {
  return (
    <div className="person-details">
      <div className="section1">
        <row className="group1">
          <TextFields
            label={"Address"}
            isImportant={true}
            name={"address"}
            onChange={onchangeTextfieldHandler}
            value={textFields.address}
            className={"address"}
          />
          <TextFields
            label={"Apt#"}
            isImportant={false}
            name={"apt"}
            onChange={onchangeTextfieldHandler}
            value={textFields.apt}
            className={"apt"}
          />
        </row>
        <row className="group2">
          <TextFields
            label={"Town"}
            isImportant={false}
            name={"town"}
            onChange={onchangeTextfieldHandler}
            value={textFields.town}
            className={"address"}
          />
          <TextFields
            label={"State"}
            isImportant={false}
            name={"state"}
            onChange={onchangeTextfieldHandler}
            value={textFields.state}
            className={"state"}
          />
          <TextFields
            label={"Zip Code"}
            isImportant={false}
            name={"zipcode"}
            onChange={onchangeTextfieldHandler}
            value={textFields.zipcode}
            className={"zipcode"}
          />
        </row>
        <row className="group3">
          <DateTime
            label={"Listing Date"}
            isImportant={true}
            name={"listingDate"}
            onChangeHandler={onchangeDateTimeHandler}
            startDate={startDater.listingDate}
          />
        </row>
        <row className="group4">
          <RadioCheck
            type={"radio"}
            name={"fees"}
            label={"No fees"}
            onChange={onChangeHandle}
          />
          <TextFields
            label={"Fee"}
            isImportant={false}
            name={"fees"}
            onChange={onchangeTextfieldHandler}
            value={textFields.fees}
            className={"fees"}
            width="50%"
            containerstyleObject={{ justifyContent: "end" }}
          />
          <Select
            value={select.OP}
            name={"OP"}
            onchangeSelector={onchangeSelectHandler}
            optionArray={selectArray}
            width={"8vw"}
          />
        </row>
        <row className="group5">
          <Select
            value={select.terms}
            name={"terms"}
            onchangeSelector={onchangeSelectHandler}
            optionArray={selectArray}
            width={"95%"}
          />
          <Select
            value={select.offer}
            name={"offer"}
            onchangeSelector={onchangeSelectHandler}
            optionArray={selectArray}
            width={"95%"}
          />
        </row>
        <row className="group6">
          <RadioCheck
            type={"checkbox"}
            name={"petFriendly"}
            label={"Pet Friendly"}
            onChange={onChangeHandle}
          />
          <RadioCheck
            type={"checkbox"}
            name={"30minute"}
            label={"30 Minute"}
            onChange={onChangeHandle}
          />
        </row>
      </div>
      <div className="section2">
        <row className="group7">
          <TextFields
            label={"Listing Amount"}
            isImportant={true}
            name={"listingAmount"}
            onChange={onchangeTextfieldHandler}
            value={textFields.listingAmount}
            className={"listingAmount"}
          />
        </row>
        <row className="group8">
          <DateTime
            label={"Date"}
            name={"date"}
            isImportant={false}
            onChangeHandler={onchangeDateTimeHandler}
            startDate={startDater.date}
          />
          <DateTime
            label={"Time"}
            name={"time"}
            isImportant={false}
            onChangeHandler={onchangeDateTimeHandler}
            startDate={startDater.time}
          />
        </row>
        <row className="group9">
          <button className="addfieldbutton">+</button>
        </row>
      </div>
    </div>
  );
};

export default PersonalDetils;
