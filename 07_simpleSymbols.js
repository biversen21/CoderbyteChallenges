function SimpleSymbols(str) { 
  var strs = str.split("");
  var letters = "abcdefghijklmnopqrstuvwxyz"
  
  for (var i = 0; i < strs.length; i++) {
    if (letters.indexOf(strs[i]) != -1 && (strs[i-1] != "+" || strs[i+1] != "+")) {		// Checks for letters, then checks chars at either side for +
      return false;
    }
  }
  return true;       
}
   
SimpleSymbols(readline());   