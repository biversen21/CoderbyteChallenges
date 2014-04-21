function ExOh(str) { 
  var splitUp = str.split("");
  var ex = 0;
  var oh = 0;
  
  for (i = 0; i < splitUp.length; i++) {
    if (splitUp[i] == "x") {	// Letter will either be "x" or "o"
      ex += 1;
    } else {
      oh += 1;
    }
  }
  
  if (ex === oh) {
    return true; 
  } else {
    return false;
  }         
}

ExOh(readline());  