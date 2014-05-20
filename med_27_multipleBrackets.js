function MultipleBrackets(str) { 
  var semi = 0;
  var square = 0;
  var counter = 0;
  for (i=0; i<str.length; i++) {
    if (str.charAt(i) === '(') {
      semi++;
      counter++;
    } else if (str.charAt(i) === ')') {
      semi--;
    } else if (str.charAt(i) === '[') {
      square++;
      counter++;
    } else if (str.charAt(i) === ']') {
      square--;
    }
    if ((semi < 0) || (square < 0)) {
      return 0;
    }
  }
  if ((semi > 0) || (square > 0)) {
    return 0;
  }
  // code goes here  
  return ("1" + " " + counter); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultipleBrackets(readline());           
