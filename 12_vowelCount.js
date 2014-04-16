function VowelCount(str) { 
  var vowels = "aeiouAEIOU";
  var splitUp = str.split("");
  var count = 0;
  for (i = 0; i<splitUp.length; i++) {
    if (vowels.indexOf(splitUp[i]) != -1) {
      count +=1;
    }
  }
  // code goes here  
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());     