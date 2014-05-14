function Division(num1,num2) { 
  var largest;
  var smallest;
  if (num1 === num2) {
    return num1;
  } else if(num1 > num2) {
    largest = num1;
    smallest = num2;
  } else {
    largest = num2;
    smallest = num1;
  }
  return factorCheck(largest, smallest);
}

function factorCheck(big, small) {
  var starter = Math.ceil(big/2);
  for (i=starter; i>0; i--) {
    if ((big % i === 0) && (small % i === 0))
      return i;
  }
}
  
Division(readline());  