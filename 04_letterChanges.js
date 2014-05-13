function LetterChanges(str) { 
  var splitUp = str.split("");
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var vowels = "aeiou";
  var answer = "";
  
  for (i=0; i<splitUp.length; i++) {
	  var letter = alpha.indexOf(splitUp[i]);	// Set local var to clear up code in later lines
    if (splitUp[i].toLowerCase() == "z") {
      answer += "A";
    } else if (letter != -1) {	// Checks all chars and verifies if they are letters
      	if (vowels.indexOf(alpha[letter + 1]) != -1) {		// Checks following letter in alphabet to see if vowel
        	answer += alpha[letter + 1].toUpperCase();		// If vowel, capitalizes it and adds to new string
      	} else {
        	answer += alpha[letter +1];	// If not a vowel, adds following letter to string
      	}
    } else {
      answer += splitUp[i];	// If not a letter, adds char as is
    }
  }
  return answer; 
}

LetterChanges(readline());   