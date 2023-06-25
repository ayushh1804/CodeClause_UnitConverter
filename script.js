
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
  else if( fromUnit === "Gram" ) {
    if(toUnit === "Kilogram") {
      result = inputValue * 0.001;
    }
    else if(toUnit === "Gram") {
      result = inputValue * 1;
    }else if(toUnit === "Pound"){
      result = inputValue * 0.0022;
    }else if(toUnit === "Ounce"){
      result = inputValue * 0.0352;
    }
  }
  else if(fromUnit === "Pound" ) {
    if(toUnit === "Kilogram"){
      result = inputValue*0.453592;
    }
    else if(toUnit==="Gram") {
      result= inputValue * 453.592; 
    }
    else if(toUnit==="Pound") {
      result= inputValue * 1; 
    } else if(toUnit==="Ounce") {
      result= inputValue * 16; 
    }
  }
  else if(fromUnit === "Ounce"){
    if(toUnit === "Kilogram") {
      result = inputValue* 0.0283495;
    }else if(toUnit === "Gram") {
      result = inputValue* 28.3495;
    }else if(toUnit === "Pound") {
      result = inputValue* 0.0625;
    }else if(toUnit === "Ounce") {
      result = inputValue*1;
    }

  }



  document.getElementById("result").innerHTML = result.toFixed(3) + " " + toUnit;
}
// else if (fromUnit === "Fahrenheit") {
//   if(toUnit === "Fahrenheit") {
//     result = inputValue *1;
//   }else if(toUnit === "Celcius"){
//     result = inputValue * -17.22;
//   }else if(toUnit === "Kelvin")
  
// }