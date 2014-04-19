function FirstFactorial(num) {  
  if (num===0) {
    return 1;	// Sets 'Base Case' to end recursion loop
  } else {
  return num * FirstFactorial(num-1); // Recursion used rather than 'For' loop
  }
}
   
FirstFactorial(readline());   