function MostFreeTime(strArr) { 
  var max = 0;
  strArr = strArr.sort(function(a,b) {return convertTime(a, 0) - convertTime(b, 0)});  
  for (i=1; i<strArr.length; i++) {
    var temp = convertTime(strArr[i], 0) - convertTime(strArr[i-1], 1);
    if (temp>max) {
      max=temp;
    }
  }
  return reconvertTime(max);       
}

function convertTime(arr, pos) {
  arr = arr.split("-");
  arr[pos] = arr[pos].split(":");
  var hours = parseInt(arr[pos][0]);
  var minutes = parseInt(arr[pos][1]);
  if ((arr[pos][1].indexOf('A') !== -1) && (arr[pos][0] === "12")) {
    hours -= 12;
  } else if ((arr[pos][1].indexOf('P') !==-1) && (arr[pos][0] !== "12")) {
    hours += 12;
  }
  return (hours*60) + minutes;
}

function reconvertTime(result) {
  var maxHour = (Math.floor(result/60)).toString();
  var maxMinutes = (result%60).toString();
  while (maxHour.length < 2) {
    maxHour = "0" + maxHour;
  }
  while (maxMinutes.length < 2) {
    maxMinutes = "0" + maxMinutes;
  }
  return (maxHour + ":" + maxMinutes);
}
   
MostFreeTime(readline());  