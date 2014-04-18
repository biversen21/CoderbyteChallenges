function BinaryConverter(str) { 
  var total = 0;
  var place = 1;
  for (i=str.length-1; i>=0; i--) {
    if (str.charAt(i) == 1) {
      total += place;
    }
    place *=2;
  }
  // code goes here  
  return total; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BinaryConverter(readline());           
