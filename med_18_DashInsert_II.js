function DashInsertII(num) { 
  var splitUp = num.toString().split("");
  result = [];
  for (i=0; i<splitUp.length; i++) {
      result.push(splitUp[i]);
    if ((splitUp[i] % 2 === 0) && (splitUp[i+1] % 2 ===0) && (splitUp[i] !=='0') && (splitUp[i+1]!=='0')) {
      result.push("*");
    } else if ((splitUp[i] %2 === 1) && (splitUp[i+1] %2 === 1)) {
      result.push("-");
    }
  }
  // code goes here  
  return result.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());  