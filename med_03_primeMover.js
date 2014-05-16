function PrimeMover(num) {
	if(num == 1) return 2;	// 2 is the only even prime, allows us to loop odds only
	var primeCount = 1;    
	var i = 3;	// Start at 3 (first odd prime)
	var result = 0;  
	while(primeCount < num) { 
		 if(primeCheck(i)) {
			 primeCount +=1;
			 result = i;	// Set result = last valid prime
		 }   
		 i=i+2;	// Increment by 2 to only check odds
	 }
	 return result;         
}
 
function primeCheck(num) {	// Second function to check if prime
	var prime = num != 1;
	for(var i = 2; i < num; i++) {
		if(num%i === 0) {
			prime = false;
			break;
		}
	}  
	return prime;          
}

PrimeMover(readline());  