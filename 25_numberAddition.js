function NumberAddition(str) { 
  var numbers = str.replace(/[^0-9]/g, " ") 
                   .split(" ");             
  var sum = 0;                             

  for( var i = 0; i < numbers.length; i++){ 
    if (numbers[i]) {
      sum += parseInt(numbers[i]);
    }
  }
  return sum;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline()); 