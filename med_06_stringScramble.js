function StringScramble(str1,str2) { 
  for (i=0; i<str2.length; i++) {
    if (str1.indexOf(str2[i])== -1) {
      return false;
    } else {
      str1 = str1.substring(0, str1.indexOf(str2[i])) + str1.substring(str1.indexOf(str2[i]) + 1);
    }
  }
  // code goes here  
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());   