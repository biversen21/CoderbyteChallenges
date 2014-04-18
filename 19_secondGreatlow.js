function SecondGreatLow(arr) { 
  arr.sort(function(a,b) {
    return a - b;
  });
  if (arr.length ==2) {
    var low = arr[1];
    var high = arr[0];
  } else {
  for (i=1; i<arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
      var low = arr[i];
      break;
    }
  }
  for (i=arr.length - 1; i>0; i--) {
    if (arr[(i - 1)] != (arr[(i)])) {
      var high = (arr[(i - 1)]);
      break;
    }
  }
}
  // code goes here  
  return low + " " + high; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());          