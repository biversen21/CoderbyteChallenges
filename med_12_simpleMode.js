function SimpleMode(arr) { 
  var modeArr = {};
  for (i=0; i<arr.length; i++) {
    modeArr[arr[i]] = modeArr[arr[i]] || 0;
    modeArr[arr[i]]++;
  }
  var max=1;
  var mode="";
  for(var key in modeArr) {
    if (modeArr[key]>max) {
      max = parseInt(modeArr[key]);
      mode = key;
    }
  }  
  return (mode ? mode : -1);
}
 
SimpleMode(readline());  