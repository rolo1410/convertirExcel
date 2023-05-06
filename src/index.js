import React from "react";
import ReactDOM from "react-dom";
import ExcelRead from "./ExcelRead";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>xlsx-populate Example (read file)</h1>
      <ExcelRead />
      <div className="description">
        With{" "}
        <a
          href="https://github.com/dtjohnson/xlsx-populate"
          rel="noreferrer"
          target="_blank"
        >
          xlsx-populate
        </a>
        , This sample convert
        <pre>{`[A|B|C|D]
[X|1|2|3]
[Y|4|5|6]
[Z|7|8|9]
`}</pre>
        into
        <pre>{`{
  "X": {
    "A": "X",
    "B": 1,
    "C": 2,
    "D": 3
  },
  "Y": {
    "A": "Y",
    "B": 4,
    "C": 5,
    "D": 6
  },
  "Z": {
    "A": "Z",
    "B": 7,
    "C": 8,
    "D": 9
  }
}`}</pre>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
