function ABCheck(str) { 
  var splitUp = str.split("");
  for (i=0; i<splitUp.length; i++) {
    if (splitUp[i].toLowerCase() == "a") {
      if ((splitUp[i+4]) && (splitUp[i+4].toLowerCase() == "b")) {
        return true;
      }
    }
  }
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());  