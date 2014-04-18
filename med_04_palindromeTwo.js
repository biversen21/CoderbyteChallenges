function PalindromeTwo(str) { 
  var stripped = str.replace(/[^a-zA-Z]/g, "");
  stripped = stripped.split(" ").join("").toLowerCase();
  for (i=0; i<stripped.length; i++) {
    if (stripped[i] != stripped[stripped.length - 1 - i]) {
      return false;
    }
  }
  // code goes here  
  return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           
