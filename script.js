
function convert() {
  const inputValue = document.getElementById("inputValue").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (fromUnit === "Kilogram") {
    if (toUnit === "Ounce") {
      result = inputValue * 35.274;

    } else if (toUnit === "Gram") {
      result = inputValue * 1000;
    } else if (toUnit === "Pound") {
      result = inputValue * 2.20462;
    } else if (toUnit === "Kilogram") {
      result = 1 * inputValue;
    }
  }
  else if (fromUnit === "Gram") {
    if (toUnit === "Kilogram") {
      result = inputValue * 0.001;
    }
    else if (toUnit === "Gram") {
      result = inputValue * 1;
    } else if (toUnit === "Pound") {
      result = inputValue * 0.0022;
    } else if (toUnit === "Ounce") {
      result = inputValue * 0.0352;
    }
  }
  else if (fromUnit === "Pound") {
    if (toUnit === "Kilogram") {
      result = inputValue * 0.453592;
    }
    else if (toUnit === "Gram") {
      result = inputValue * 453.592;
    }
    else if (toUnit === "Pound") {
      result = inputValue * 1;
    } else if (toUnit === "Ounce") {
      result = inputValue * 16;
    }
  }
  else if (fromUnit === "Ounce") {
    if (toUnit === "Kilogram") {
      result = inputValue * 0.0283495;
    } else if (toUnit === "Gram") {
      result = inputValue * 28.3495;
    } else if (toUnit === "Pound") {
      result = inputValue * 0.0625;
    } else if (toUnit === "Ounce") {
      result = inputValue * 1;
    }

  }
  else if (fromUnit === "Fahrenheit") {
    if (toUnit === "Fahrenheit") {
      result = inputValue * 1;
    } else if (toUnit === "Celcius") {
      result = (5 / 9) * (inputValue - 32);
    } else if (toUnit === "Kelvin")
      result = (inputValue - 32) * (5 / 9) + 273.15;
  }
  else if (fromUnit === "Celcius") {
    if (toUnit === "Fahrenheit") {
      result = (9 / 5) * inputValue + 32;
    } else if (toUnit === "Celcius") {
      result = inputValue * 1;
    } else if (toUnit === "Kelvin") {
      result = inputValue + 273.15;
    }
  }
  else if (fromUnit === "Kelvin") {
    if (toUnit === "Fahrenheit") {
      result = (inputValue - 273.15) * (9 / 5) + 32;
    } else if (toUnit === "Celcius") {
      result = inputValue - 273.15;
    } else if (toUnit === "Kelvin") {
      result = inputValue * 1;
    }
  }
  else if (fromUnit === "Kilometer") {
    if (toUnit === "Meter")
      result = inputValue * 1000;
    else if (toUnit === "Kilometer")
      result = inputValue * 1;
    else if (toUnit === "Foot")
      result = inputValue * 3280.84;
    else if (toUnit === "Mile")
      result = inputValue * 0.621371;
  }
  else if (fromUnit === "Meter") {
    if (toUnit === "Meter")
      result = inputValue * 1;
    else if (toUnit === "Kilometer")
      result = inputValue * 0.001;
    else if (toUnit === "Foot")
      result = inputValue * 3.28084
    else if (toUnit === "Mile")
      result = inputValue * 0.000621371
  }
  else if (fromUnit === "Foot") {
    if (toUnit === "Meter")
      result = inputValue * 0.3048;
    else if (toUnit === "Kilometer")
      result = inputValue * 0.0003048;
    else if (toUnit === "Foot")
      result = inputValue * 1
    else if (toUnit === "Mile")
      result = inputValue * 0.000189394
  }
  else if (fromUnit === "Mile") {
    if (toUnit === "Meter")
      result = inputValue * 1609.34;
    else if (toUnit === "Kilometer")
      result = inputValue * 1.60934;
    else if (toUnit === "Foot")
      result = inputValue * 5280;
    else if (toUnit === "Mile")
      result = inputValue * 1;
  }



  document.getElementById("result").innerHTML = result.toFixed(3) + " " + toUnit;
}
