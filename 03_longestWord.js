function LongestWord(sen) { 
  var senArray = sen.split(" ")
      .sort(function(a,b) {
        return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length;
      });
  // code goes here  
  return senArray[0]; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());     