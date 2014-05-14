function Consecutive(arr) { 
  arr = arr.sort(function(a,b){return a - b});
  var counter = 0;
  var ender = arr[arr.length-1];
  var loopTrack = arr[0];
  var i = 0;
  while (loopTrack < ender - 1) {
    arr = arr.sort(function(a,b){return a-b});
    if (arr[i+1] !== (arr[i] + 1)) {
      arr.push(arr[i] + 1);
      counter++;
    }
    loopTrack++;
    i++;
  } 
  return counter;          
}
   
Consecutive(readline());   