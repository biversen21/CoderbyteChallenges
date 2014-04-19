function LongestWord(sen) { 
  var senArray = sen.split(" ")
      .sort(function(a,b) {  // Sets custom sort function to sort by decending length
        return b.replace(/[^a-zA-Z]/g, "").length - a.replace(/[^a-zA-Z]/g, "").length; // Strips non-letters using regexp
      });
  return senArray[0];       // Returns first (largest) item in array
}
   
LongestWord(readline());     