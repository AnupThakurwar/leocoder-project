import React from "react";
import TextFields from "../../../commonComponents/textfield/textfield";

const DashboardLowerSection = ({ onchangeTextfieldHandler, textFields }) => {
  return (
    <>
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
    </>
  );
};

export default DashboardLowerSection;
