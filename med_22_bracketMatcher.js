function BracketMatcher(str) { 
  var counter = 0;
  for (i=0; i<str.length; i++) {
    if (str[i] === "(") {
      counter++;
    } else if (str[i] === ")") {
      counter--;
    }
    if (counter<0) {
      return 0;
    }
  }
  return counter === 0 ? 1:0;
}
   
BracketMatcher(readline());   