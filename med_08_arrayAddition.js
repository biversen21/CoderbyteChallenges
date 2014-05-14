function ArrayAdditionI(arr) { 
  arr.sort(function(a,b){return a - b})
  var largest = arr.pop();	// Set largest to last (largest) array value
  var sum = 0;
  for (var i = 0; i < arr.length; i++){		// Start outer loop 
    sum += arr[i];
    for (var j = 0; j < arr.length; j++){	// Start inner to begin comparison
      if (i != j) {		// Ensure we don't compare the same array indexes
        sum += arr[j];
        if (sum == largest) {
          return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {	// If no match, start 2nd loop to re-iterate removing index values
      if (i != k) {
        sum -= arr[k];
        if (sum == largest) {
          return true;
        }
      }
    }
    sum = 0;	// Reset sum for outer loop
  }
  return false; 
}
 
ArrayAdditionI(readline());  