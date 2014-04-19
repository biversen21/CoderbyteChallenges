function MeanMode(arr) { 
  var modeArr = {};
  var sum = 0;
  for (i=0; i<arr.length; i++) {
    modeArr[arr[i]] = modeArr[arr[i]] || 0;
    modeArr[arr[i]]++;
    sum += arr[i];
  }
  var mean = sum/arr.length;
  var max = 0;
  for (var key in modeArr) {
    if (modeArr[key] > max) {
      max = parseInt(key);
    }
  }
  // code goes here  
  if (mean === max) {
    return 1;
  } else {
    return 0;
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());     