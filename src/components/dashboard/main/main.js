import React, { useState } from "react";
import "./main.scss";
import RadioCheck from "../../../commonComponents/radioCheckbox/radioCheck";
import FileUpload from "../../../commonComponents/fileupload/fileupload";
import {
  propertyTypes,
  propertyFeatues,
  propertyAmenities,
  selectArray,
  propertyLeaseList,
} from "../../../constants/constants";
import DashboardLowerSection from "../dashboardlowersection/DashboardLowerSection";
import PersonalDetils from "../personaldetails/personaldetils";

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
            {propertyLeaseList.map((elm) => {
              return (
                <React.Fragment key={elm.id}>
                  <RadioCheck
                    type={"radio"}
                    name={"land"}
                    label={elm.label}
                    onChange={onChangeHandle}
                    value={field}
                  />
                </React.Fragment>
              );
            })}
          </section>
          <section className="form-fields">
            <PersonalDetils
              onchangeTextfieldHandler={onchangeTextfieldHandler}
              textFields={textFields}
              onchangeDateTimeHandler={onchangeDateTimeHandler}
              startDater={startDater}
              onChangeHandle={onChangeHandle}
              select={select}
              onchangeSelectHandler={onchangeSelectHandler}
              selectArray={selectArray}
            />
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
          <DashboardLowerSection
            textFields={textFields}
            onchangeTextfieldHandler={onchangeTextfieldHandler}
          />
        </section>
      </div>
    </div>
  );
};

export default Main;
