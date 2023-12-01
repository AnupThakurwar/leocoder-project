import React, { useRef } from "react";
import "./fileupload.scss";

const FileUpload = ({ label, onchange, name, fileName }) => {
  let inputRef = useRef(null);
  return (
    <div className="fileupload-container">
      <div htmlFor="file">{label}</div>
      <input
        type="file"
        name={name}
        ref={inputRef}
        onChange={onchange}
        hidden
      />
      <div className="upload-ref-button">
        <button onClick={() => inputRef.current.click()}>Choose Files</button>
        <label>{fileName ? fileName.name : "No file Choosen"}</label>
      </div>
    </div>
  );
};

export default FileUpload;
