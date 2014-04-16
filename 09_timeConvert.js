function TimeConvert(num) { 
  var minutes = num % 60;
  var hours = (num - minutes)/60;
  num = "" + hours + ":" + minutes + ""
  // code goes here  
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());     