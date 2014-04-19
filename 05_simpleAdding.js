function SimpleAdding(num) { 
  var total = 0;
  for (i = 1; i <= num; i++) {	
    total += i;
  } 
  return total; 
}

SimpleAdding(readline());   