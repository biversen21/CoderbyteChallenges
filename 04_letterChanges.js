function LetterChanges(str) { 
  var splitUp = str.split("");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou";
  var stringer = "";
  for (i=0; i<splitUp.length; i++) {
    if (splitUp[i].toLowerCase() == "z") {
      stringer += "A";
    } else if (alpha.indexOf(splitUp[i]) != -1) {
      if (vowels.indexOf(alpha[alpha.indexOf(splitUp[i]) + 1]) != -1) {
        stringer += alpha[alpha.indexOf(splitUp[i]) + 1].toUpperCase();
      } else {
        stringer += alpha[alpha.indexOf(splitUp[i]) +1];
      }
    }
    else {
      stringer += splitUp[i];
    }
  }
  // code goes here  
  return stringer; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());   