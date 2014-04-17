function DashInsert(num) { 
  var splitUp = num.toString().split("");
  var result = []
  for (i=0; i<splitUp.length; i++) {
    result.push(splitUp[i]);
    if ((splitUp[i] % 2 !== 0) && (splitUp[i+1] % 2 ===1)) {
      result.push("-");
    }
  }
  result = result.join("");
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());  