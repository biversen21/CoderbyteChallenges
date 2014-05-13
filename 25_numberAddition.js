function NumberAddition(str) { 
  var numbers = str.replace(/[^0-9]/g, " ") // Use regexp to replace all non-numbers with spaces, then split on spaces
                   .split(" ");             
  var sum = 0;                             
  for( var i = 0; i < numbers.length; i++){ 
    if (numbers[i]) {	// If numbers[i] is valid, convert to integer and add to sum
      sum += parseInt(numbers[i]);
    }
  }
  return sum;
}
 
NumberAddition(readline()); 