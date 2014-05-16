function RunLength(str) { 
  var curLength = 0;
  var result = "";
  var curLetter = str[0]; 
  for (i=0; i<str.length; i++) {
    if (str[i] === curLetter) {	// Loops through letters, checking if letter is a repeat of last letter
      curLength++;
    } else {
      result += (curLength + curLetter);	// If letter is new, add length and current letter to string
      curLetter = str[i];	// Set current letter to new letter
      curLength = 1;	// Reset length for new letter
    }
  }
  result += (curLength + curLetter);	// Add final length and letter to string
  return result;          
}
  
RunLength(readline());           
