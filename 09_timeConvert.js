function TimeConvert(num) { 
  var minutes = num % 60;
  var hours = (num - minutes)/60; 
  
  num = "" + hours + ":" + minutes + ""
  return num;       
}
   
TimeConvert(readline());     