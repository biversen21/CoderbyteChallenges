function PermutationStep(num) { 
  var result = '';
  num = num.toString().split('');
  var i = num.length - 1;
  var checking = true;

  while (checking) {
    if (num[i-1] < num[i]) {
      result = num.slice(0, i - 1).join('') + num[i] + num[i-1] + num.slice(i+1).join('');
      var start = i;
      return reverseCheck(result, start);
    }
    i--;
    if (i < 0) {
      checking = false;
    }
  }
  return -1;   
}

var final = '';
function reverseCheck(number, start) {
  final = number;
  for (i=number.length -1; i>start; i--) {
    if (number[i-1]>number[i]) {
      final = number.slice(0, i-1) + number[i] + number[i-1] + number.slice(i+1);
      if (i>start) {
        final = reverseCheck(final, start);
      }
    }
  }
  return final;
}

PermutationStep(readline());   

