function ExOh(str) { 
  var splitUp = str.split("");
  var ex = 0;
  var oh = 0;
  for (i = 0; i<splitUp.length; i++) {
    if (splitUp[i] == "x") {
      ex += 1;
    } else {
      oh += 1;
    }
  }
  // code goes here  
  if (ex === oh) {
    return true; 
  } else {
    return false;
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());  