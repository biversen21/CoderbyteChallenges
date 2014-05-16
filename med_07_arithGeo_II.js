function ArithGeo(arr) { 
  var arith = true; 
  var geo = true;
  for (i=0; i<arr.length-3; i++) {	 
    if ((arr[i+1] - arr[i]) !== (arr[arr.length-(i+1)] - arr[arr.length-(i+2)])) {  // If any set of numbers deviate from pattern, not arithmetic
    arith = false;
    }   
    if ((arr[i+1] / arr[i]) !== (arr[arr.length-(i+1)] / arr[arr.length-(i+2)])) {  // If any deviate, not geometric
    geo = false;
    } 
}
  if (arith) {
    return "Arithmetic";
  } else if (geo) {
    return "Geometric";
  } else {
    return -1
  }
}
   
ArithGeo(readline());    