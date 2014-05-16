function FibonacciChecker(num) { 
  var checker = true;
  var checkValue = 1;
  var last = 0;
  var holder = 0;
  while (checker) {
    if (checkValue === num) {
      return 'yes';
    } else {
      holder = checkValue;
      checkValue = checkValue + last;
      last = holder;
    }
    if (checkValue > num) {
      return 'no';
    }
  } 
}
   
FibonacciChecker(readline()); 