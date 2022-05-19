import { render } from "@testing-library/react";
import App from "./App";
import calculateDates from "./Components/CalculateDates";

test("renders learn react link", () => {
  const fs = require("fs");
  const readline = require("readline");
  let pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
  const readInterface = readline.createInterface({
    input: fs.createReadStream("./testFile.txt"),
    output: process.stdout,
    console: false,
  });


  render(<App />);
  readInterface.on("line", function (line) {
    let strings = line.split(/[\s-:]+/);
    let dateTimeOne = strings[0].replace(pattern,'$3-$2-$1');
    let dateTimeTwo = strings[1].replace(pattern,'$3-$2-$1');
    let returnRes = calculateDates(dateTimeOne, dateTimeTwo, true);
      
    expect(returnRes.toString()).toMatch(strings[2]);
  });
});
