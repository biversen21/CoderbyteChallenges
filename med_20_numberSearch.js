function NumberSearch(str) { 
  str = str.toLowerCase();
  var nums = "1234567890";
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var numCount = 0;
  var letterCount = 0;
  for (i=0; i<str.length; i++) {
    if (nums.indexOf(str[i]) != -1) {
      numCount += parseInt(str[i]);
    } else if (alpha.indexOf(str[i]) != -1) {
      letterCount++;
    }
  }
  return Math.round(numCount/letterCount);
}
   
NumberSearch(readline());  