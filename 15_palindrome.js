function Palindrome(str) { 
  var splitUp = str.split(" ").join("");	// Strip spaces and rejoin as single "word"
  
  for (i=0; i<splitUp.length; i++) {
    if ((splitUp[i]) != (splitUp[splitUp.length - (i+1)])) {	// Check first and last chars, then 2nd...
        return false;
    }
  }
  return true;          
}

Palindrome(readline());   