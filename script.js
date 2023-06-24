
function convert() {
  const inputValue = document.getElementById("inputValue").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (fromUnit === "Kilogram") {
    if (toUnit === "Ounce") {
      result = inputValue * 35.274;
      console.log("hii");
    } else if (toUnit === "Gram") {
      result = inputValue * 1000;
    } else if (toUnit === "Pound") {
      result = inputValue * 2.20462;
    } else if (toUnit === "Kilogram") {
      result = 1 * inputValue;
    }
  }


  document.getElementById("result").innerHTML = result.toFixed(2) + " " + toUnit;
}
