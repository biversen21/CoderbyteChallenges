function SecondGreatLow(arr) { 
  arr.sort(function(a,b) {	// Sort small to large
    return a - b;
  });
  if (arr.length == 2) {	// Set values if only two values
    var low = arr[1];
    var high = arr[0];
  } else {
  for (i=1; i<arr.length; i++) {	
    if (arr[i] !== arr[i-1]) {	// Ensure second value doesn't equal first
      var low = arr[i];
      break;
    }
  }
  for (i=arr.length - 1; i>0; i--) {
    if (arr[(i - 1)] != (arr[(i)])) {	// Ensure second to last doesn't equal last
      var high = (arr[(i - 1)]);
      break;
    }
  }
}
  return low + " " + high;         
}
   
SecondGreatLow(readline());          