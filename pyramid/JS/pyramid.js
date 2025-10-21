function buildPyramid(inv) {

  const character = "@";
  const count = 17;
  const rows = [];
  let inverted = inv;

  let result = ""

  //From FreeCodeCamp
  function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
  }

  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
  }

  for (const row of rows) {
    result = result + row + "\n";
  }
  //End freeCodeCamp Code

  const newRows = [];

  for (let i = 1; i <= count; i++){
    if(inverted){
      newRows.push(padRow(i, count));
    }
    else{
      newRows.unshift(padRow(i, count));
    }
  }

  for (const row of newRows) {
    result = result + row + "\n";
  }

  console.log(result);

  document.getElementById("pyramid").innerHTML = "<pre>" + result + "</pre>";

}

document.getElementById("build").addEventListener("click", function () {
  buildPyramid(false);
});

document.getElementById("invert").addEventListener("click", function () {
  document.getElementById("pyramid").innerHTML = "";
  buildPyramid(true);
});
