function PowersofTwo(num) { 
  while (num > 1) {
    if (num === 2) {
      return true;
    }
      num /= 2;
  } 
  return false; 
}
  
PowersofTwo(readline());   