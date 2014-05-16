function StringScramble(str1,str2) { 
  for (i=0; i<str2.length; i++) {
	  var index = str1.indexOf(str2[i]);
	  if (index === -1) {
		  return false;
	  } else {
		  str1 = str1.substring(0, index) + str1.substring(index + 1); // Remove 'used' letter from str1
	  }
  }
  return true; 
}
   
StringScramble(readline());   