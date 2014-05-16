function PalindromeTwo(str) { 
  var stripped = str.replace(/[^a-zA-Z]/g, "");	// Remove all non-letter characters & spaces
  stripped = stripped.toLowerCase();	// Punctuation shouldn't affect result
  for (i=0; i<stripped.length; i++) {
    if (stripped[i] != stripped[stripped.length - 1 - i]) {
      return false;
    }
  }  
  return true;    
}
   
PalindromeTwo(readline());           
