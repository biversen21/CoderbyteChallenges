function DivisionStringified(num1,num2) { 
  var result = Math.round(num1/num2);
  var thousands = parseInt(result / 1000); 
  var hunThousands = parseInt(thousands/1000);
  var resultString = result.toString();
  var output;
  if (hunThousands >=1) {
    output = [hunThousands + "," + (resultString.slice(-6,-3)) + "," + resultString.slice(-3)].join("");
  } else if (thousands>=1) {
    output = [thousands + "," + resultString.slice(-3)].join("");
  } else {
    output =result;
  }
  // code goes here  
  return output; 
         
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());     