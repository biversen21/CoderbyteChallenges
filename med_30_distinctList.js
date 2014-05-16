function DistinctList(arr) { 
  arr.sort(function(a,b) {return a-b});
  var dupe = 0;
  for (i=0; i<arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      dupe++;
    }
  }
  return dupe;       
}
   
DistinctList(readline());           
