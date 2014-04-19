function LetterCapitalize(str) { 
  var words = str.split(" ");
  for (i=0; i<words.length; i++) {
    var word = words[i].split("");	// Local var to split each word 
    word[0] = word[0].toUpperCase();	
    words[i] = word.join("");	// Re-sets original word to local var  
  }
  words = words.join(" ");		// Re-sets string 
  return words;          
}

LetterCapitalize(readline());  