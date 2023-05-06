import React, { useState } from "react";
import XlsxPopulate from "xlsx-populate";
import Somewhat from "./Somewhat.js";
import "./styles.css";

//Read xlsx file specified at input#excelFileInput below
function ExcelRead() {
  const [result, setResult] = useState({});

  function onFileInputChange(evt) {
    const files = evt.target.files;
    const f = files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      console.log("onFileInputChange: reader.onload()");
      setResult(["Parsing xlsx..."]);
      // Parse data
      const bstr = e.target.result;
      XlsxPopulate.fromDataAsync(bstr).then(async function (workbook) {
        console.log("fromDataAsync().then()");
        //build data you want from workbook
        const someResult = await Somewhat(workbook, "A1:Z999");
        setResult(someResult);
      });
    };
    if (f instanceof Blob) {
      reader.readAsArrayBuffer(f);
    }
  }

  function viewResultStr(result) {
    console.log("getResultStr()");
    return JSON.stringify(result, null, 2);
  }

  function onTextareaChangeHandler(event) {
    console.log("onTextareaChangeHandler()", event.target.value);
  }

  return (
    <div className="ExcelRead">
      <label htmlFor="excelFileInput">Select an excel file</label>
      <input id="excelFileInput" type="file" onChange={onFileInputChange} />
      <textarea
        id="result"
        value={viewResultStr(result)}
        onChange={onTextareaChangeHandler}
      />
    </div>
  );
}

export default ExcelRead;
