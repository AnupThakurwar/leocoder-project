import React, { useState } from "react";
import "./main.scss";
import RadioCheck from "../../../commonComponents/radioCheckbox/radioCheck";
import TextFields from "../../../commonComponents/textfield/textfield";
import DateTime from "../../../commonComponents/dateTime/datetime";
import { Select } from "../../../commonComponents/select/select";
import FileUpload from "../../../commonComponents/fileupload/fileupload";
import {
  propertyTypes,
  propertyFeatues,
  propertyAmenities,
  selectArray,
} from "../../../constants/constants";

const Main = () => {
  const [field, setField] = useState("");
  const [fileupload, setFileUpload] = useState({
    files: null,
    flPlans: null,
  });
  const [textFields, setTextfields] = useState({
    address: "",
    listingAmount: "",
    apt: "",
    town: "",
    state: "",
    zipcode: "",
    fees: "",
    desTitle: "",
    desMessage:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  });
  const [startDater, setStartDate] = useState({
    listingDate: new Date(),
    date: new Date(),
    time: new Date(),
  });

  const [select, setSelect] = useState({
    OP: "",
    offer: "",
    terms: "",
  });

  const [selectedAmenities, setSelectedAmentites] = useState({});

  const onchangeSelectHandler = (e) => {
    // console.log("e", e);
    setSelect({
      ...select,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeHandle = (e) => {
    setField(e.target.value);
  };

  const onchangeDateTimeHandler = (e) => {
    console.log("hhelo", e.date);
    setStartDate({
      ...startDater,
      [e.name]: e.date,
    });
  };

  const onchangeTextfieldHandler = (e) => {
    setTextfields({
      ...textFields,
      [e.target.name]: e.target.value,
    });
  };

  const onchangeFileHandler = (e) => {
    console.log(e.target.files[0], e.target.name);
    if (e.target.files && e.target.files.length > 0) {
      setFileUpload({
        ...fileupload,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const handleChangeAmentites = (name) => {
    setSelectedAmentites((prev) => {
      return { ...prev, [name]: !prev[name] };
    });
  };

  // console.log(field);
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <section className="upper-section">
          <section className="checkbox-inputs">
            <RadioCheck
              type={"radio"}
              name={"land"}
              label={"Rental"}
              onChange={onChangeHandle}
              value={field}
            />
            <RadioCheck
              type={"radio"}
              name={"land"}
              label={"Sales"}
              onChange={onChangeHandle}
              value={field}
            />
            <RadioCheck
              type={"radio"}
              name={"land"}
              label={"Commercial Leasing"}
              onChange={onChangeHandle}
              value={field}
            />
            <RadioCheck
              type={"radio"}
              name={"land"}
              label={"Commercial Sales"}
              onChange={onChangeHandle}
              value={field}
            />
          </section>
          <section className="form-fields">
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
            <hr color="#315efb" />
            <div className="file-uploads">
              <div className="file-upload1">
                <FileUpload
                  label={"File Picture"}
                  name={"files"}
                  fileName={fileupload.files}
                  onchange={onchangeFileHandler}
                />
              </div>
              <div className="file-upload2">
                <FileUpload
                  label={"Upload FLPlans (PDF)"}
                  name={"flPlans"}
                  fileName={fileupload.flPlans}
                  onchange={onchangeFileHandler}
                />
              </div>
            </div>
            <div className="property-types">
              {propertyTypes?.map((types) => (
                <div className="types-showcase" key={types.id}>
                  <RadioCheck
                    type={"radio"}
                    name={types.for}
                    label={types.label}
                    onChange={onChangeHandle}
                    value={field}
                  />
                </div>
              ))}
            </div>
            <div className="property-details">
              {propertyFeatues.map((items) => (
                <div className="feature-showcase" key={items.id}>
                  {items.label}
                </div>
              ))}
            </div>
            <div className="property-amenities">
              <div className="amenities-title">Ammenities</div>
              <div className="amenities-features">
                {propertyAmenities.map((item) => {
                  const amenitiesClassNames = selectedAmenities[item?.value]
                    ? "amenities-showcase--selected amenities-showcase"
                    : "amenities-showcase";

                  return (
                    <div className={amenitiesClassNames}>
                      <button
                        onClick={() => {
                          handleChangeAmentites(item?.value);
                        }}
                      >
                        {item.label}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </section>
        <section className="lower-section">
          <div className="title">Description</div>
          <div className="section-container">
            <div className="description-section">
              <div className="des-title">
                <TextFields
                  label={"Title"}
                  isImportant={false}
                  name={"desTitle"}
                  onChange={onchangeTextfieldHandler}
                  value={textFields.desTitle}
                  className={"desTitle"}
                />
              </div>
              <hr />
              <div className="des-message">
                <TextFields
                  type="text-area"
                  label={"Message"}
                  isImportant={false}
                  name={"desMessage"}
                  onChange={onchangeTextfieldHandler}
                  value={textFields.desMessage}
                  className={"desMessage"}
                />
              </div>
            </div>
            <div className="submit-section">
              <button>Submit</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
