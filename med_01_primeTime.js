function PrimeTime(num) { 
  	if (num === 1) {return false}
	if (num === 2) {return true}
	for (i=2; i<num; i++) {
		if (num % i === 0) {
			return false;
		}
	} 
	return true; 
}
   
PrimeTime(readline()); 