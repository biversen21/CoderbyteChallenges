function MeanMode(arr) { 
  var modeArr = {};
  var sum = 0;
  for (i=0; i<arr.length; i++) {
    modeArr[arr[i]] = modeArr[arr[i]] || 0; // Sets object key to current value or 0
    modeArr[arr[i]]++;	// Increment current key value
    sum += arr[i];	// Track sum in same loop
  }
  var mean = sum/arr.length;
  var max = 0;
  for (var key in modeArr) {	// Loop keys and reset max if new value higher
    if (modeArr[key] > max) {
      max = parseInt(key);
    }
  }
  if (mean === max) {
    return 1;
  } else {
    return 0;
  }
}
   
MeanMode(readline());     