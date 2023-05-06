# xlsx-populate_react_example

XLSX reader example using xlsx-polulate & React.js

- [xlsx\-populate \- npm](https://www.npmjs.com/package/xlsx-populate)

This sample convert

    [A|B|C|D]
    [X|1|2|3]
    [Y|4|5|6]
    [Z|7|8|9]

into

    {
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
    }

## Demo

[https://codesandbox.io/s/github/ozero/xlsx-populate_react_example_](https://codesandbox.io/s/github/ozero/xlsx-populate_react_example_)

(Created with CodeSandbox)
