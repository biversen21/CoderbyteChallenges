function Palindrome(str) { 
  var splitUp = str.split(" ").join("");
  for (i=0; i<splitUp.length; i++) {
    if ((splitUp[i]) != (splitUp[splitUp.length - (i+1)])) {
        return false;
    }
  }
  // code goes here  
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());   