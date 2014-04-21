function AlphabetSoup(str) { 
  var splitUp = str.split("");
  
  return splitUp.sort().join("");        
}
   
AlphabetSoup(readline());      