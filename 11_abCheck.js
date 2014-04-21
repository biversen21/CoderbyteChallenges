function ABCheck(str) { 
  str = str.toLowerCase();

  return str.match(/a.{3}b/g) != null || str.match(/b.{3}a/g) != null;     // Use regexp and .match to check both a and b, if both null then false
}
   
ABCheck(readline());           
