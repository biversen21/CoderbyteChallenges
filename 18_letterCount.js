function LetterCountI(str) { 
  var words = str.split(" ");
  var largest = 0;
  var wordResult = -1;	// If no words with repeats found, will return -1
  for (i=0; i<words.length; i++) {	// Start looping through words
    var wordTest = words[i];
    var count = 0;
    for (j=0; j<wordTest.length; j++) {		// Start looping through letters of each word
      var letter = wordTest[j];
      for (k=0; k<wordTest.length; k++) {	// Compare letter from 'j' loop to all subsequent letters
        if ((j != k) && (letter === wordTest[k])) {
          count++;
        }
      }
    }
    if (count > largest) {	// Sets largest letter count and matching word
      largest = count;
      wordResult = wordTest;
    }
  }
  return wordResult;
}

LetterCountI(readline()); 