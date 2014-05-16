function FormattedDivision(num1,num2) { 
  var thousands = Math.floor((num1/num2)/1000);
  var millions = Math.floor(thousands/1000);
  var resultString = (num1/num2).toFixed(4).toString();	// Adds 4 extra decimals regardless of outcome
  var output = "";
  if (millions >= 1) {	// Checks if output needs 2 commas
    output = [millions + "," + (resultString.slice(-11,-8)) + "," + resultString.slice(-8)];
  } else if (thousands >= 1) {	// Checks if output needs 1 comma
    output = [thousands + "," + resultString.slice(-8)];
  } else {
    output = resultString;
  }   
  return output.toString(); 
}
   
FormattedDivision(readline());           
