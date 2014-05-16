function BinaryConverter(str) { 
  var total = 0;
  var place = 1;	// Var to track which "place" in binary table loop is at
  for (i=str.length-1; i>=0; i--) {
    if (str.charAt(i) === 1) {
      total += place;
    }
    place *=2;	// Next binary "place" will be double last
  }
  return total;       
}
   
BinaryConverter(readline());           
