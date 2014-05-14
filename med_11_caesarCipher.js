var alpha = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function CaesarCipher(str,n) { 
  var result = "";
  for (i=0; i<str.length; i++) {
    result += nextChar(str[i], n);
  }
  return result;       
}

function nextChar(current, n) {
  var nextToAdd;
  var remainderLow = (alpha.indexOf(current) + n) - 26;
  var remainderHigh = (upper.indexOf(current) + n) - 26;
  if (alpha.indexOf(current) != -1) {
    if (alpha[alpha.indexOf(current) + n]) {
      nextToAdd = alpha[alpha.indexOf(current) + n];
    } else {
      nextToAdd = alpha[remainderLow];
    }
  } else if (upper.indexOf(current) != -1) {
    if (upper[upper.indexOf(current) + n]) {
      nextToAdd = upper[upper.indexOf(current) + n];
    } else {
      nextToAdd = upper[remainderHigh];
    }
  } else {
    nextToAdd = current;
  }
  return nextToAdd;
}
   
CaesarCipher(readline());           
