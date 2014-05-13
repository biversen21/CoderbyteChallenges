function DashInsert(num) { 
  var splitUp = num.toString().split("");
  var result = []
  for (i=0; i<splitUp.length; i++) {
    result.push(splitUp[i]);
    if ((splitUp[i] % 2 !== 0) && (splitUp[i+1] % 2 ===1)) {	// If first number is even and next is odd, push - to result after first number
      result.push("-");
    }
  }
  result = result.join("");
  return result;      
}
   
DashInsert(readline());  