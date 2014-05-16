function StringReduction(str) { 
  var checking = true;
  while (checking) {
    if (reduce(str) === 0) {
      return str.length;
    }
    str = reduce(str);
  }
}

function reduce(str) {
  for (i=0; i<str.length-1; i++) {
    if (str[i] !== str[i+1]) {
      if (str.slice(i, i+2).indexOf('a') === -1) {
        return (str.slice(0, i) + "a" + str.slice(i+2));
      } else if (str.slice(i, i+2).indexOf('b') === -1) {
        return (str.slice(0, i) + "b" + str.slice(i+2));
      } else {
        return (str.slice(0, i) + "c" + str.slice(i+2));
      }
    }
  }
  return 0;
}

StringReduction(readline());     