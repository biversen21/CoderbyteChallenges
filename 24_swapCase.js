function SwapCase(str) { 
  var splitUp = str.split("");
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  for (i=0; i<splitUp.length; i++) {
    if (lowers.indexOf(splitUp[i]) != -1) {
      splitUp[i] = splitUp[i].toUpperCase();
    } else {
      splitUp[i] = splitUp[i].toLowerCase();
    }
  }
  // code goes here  
  return splitUp.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());  