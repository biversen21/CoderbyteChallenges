function SwapCase(str) { 
  var splitUp = str.split("");
  var lowers = "abcdefghijklmnopqrstuvwxyz";
  for (i=0; i<splitUp.length; i++) {
    if (lowers.indexOf(splitUp[i]) != -1) {	// Checks if letter is currently lower case (could use regexp also)
      splitUp[i] = splitUp[i].toUpperCase();
    } else {
      splitUp[i] = splitUp[i].toLowerCase();
    }
  }
  return splitUp.join("");       
}
   
SwapCase(readline());  