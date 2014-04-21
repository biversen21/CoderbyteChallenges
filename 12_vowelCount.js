function VowelCount(str) { 
  var vowels = "aeiou";	
  var splitUp = str.toLowerCase().split("");
  var count = 0;
  
  for (i = 0; i < splitUp.length; i++) {
    if (vowels.indexOf(splitUp[i]) != -1) {		// Check if each letter matches a char in var vowels
      count +=1;
    }
  }
  return count;       
}
   
VowelCount(readline());     