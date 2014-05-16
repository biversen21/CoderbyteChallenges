function TripleDouble(num1,num2) { 
  var numCheck = 0;
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");
  for (i=0; i<num1.length; i++) {
    if ((num1[i] === num1[i+1]) && (num1[i] === num1[i+2])) {
      numCheck = num1[i];
      for (j=0; j<num2.length; j++) {
        if ((num2[j]===numCheck) && (num2[j] === num2[j+1])) {
          return 1;
        }
      }
    }
  }
  return 0; 
}

TripleDouble(readline());  