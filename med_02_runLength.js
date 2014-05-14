function RunLength(str) { 
  var curLength = 0;
  var result = "";
  var curLetter = str[0];
  
  for (i=0; i<str.length; i++) {
    if (str[i] === curLetter) {
      curLength++;
    } else {
      result += (curLength + curLetter);
      curLetter = str[i];
      curLength = 1;
    }
  }
  result += (curLength + curLetter);
      
  return result; 
         
}
  
RunLength(readline());           
