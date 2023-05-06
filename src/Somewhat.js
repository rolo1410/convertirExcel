//build data somewhat you want from workbook
async function Somewhat(workbook, myRange) {
  console.log("Somewhat():Range: " + myRange);
  const sheet1 = workbook.sheet(0);
  const range = sheet1.range(myRange);
  const sheet_array = range.value();
  //Sample: build into Assoc by col-A & Row-1
  let data1 = {};
  let _cols = sheet_array.shift();
  for (let rowIdx in sheet_array) {
    //
    let _row = sheet_array[rowIdx];
    let _key = _row[0];
    if (!_key) {
      continue;
    }
    if (!data1[_key]) {
      data1[_key] = [];
    }
    if (_row.join("") === "") {
      continue;
    }
    //
    let plainValues = {};
    for (let colIdx in _cols) {
      let myCell = _row[colIdx];
      let colName = _cols[colIdx];
      if (!myCell) {
        continue;
      }
      // "instanceof" won't work on Cell..
      if (myCell.text) {
        //for RichText
        plainValues[colName] = myCell.text();
      } else {
        plainValues[colName] = myCell;
      }
    }
    data1[_key] = plainValues;
  }
  return data1;
}

export default Somewhat;
