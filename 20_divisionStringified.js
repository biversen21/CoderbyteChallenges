function DivisionStringified(num1,num2) { 
  var result = Math.round(num1/num2);
  var thousands = parseInt(result / 1000); 
  var millions = parseInt(thousands/1000);
  var resultString = result.toString();
  var output;
  if (millions >= 1) {	// Checks if output needs 2 commas
    output = [millions + "," + (resultString.slice(-6,-3)) + "," + resultString.slice(-3)].join("");
  } else if (thousands >= 1) {	// Checks if output needs 1 comma
    output = [thousands + "," + resultString.slice(-3)].join("");
  } else {
    output = result;
  }  
  return output;       
}

DivisionStringified(readline());     