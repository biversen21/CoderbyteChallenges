function LetterCapitalize(str) { 
  var words = str.split(" ");
  for (i=0; i<words.length; i++) {
    var word = words[i].split("");
      word[0] = word[0].toUpperCase();
    words[i] = word.join("");
  }
  words = words.join(" ");
  // code goes here  
  return words; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());  