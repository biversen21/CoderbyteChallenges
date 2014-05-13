function CountingMinutesI(str) { 
  var times = str.split("-");
  var starting = convertToMinutes(times[0]);
  var ending = convertToMinutes(times[1]);
  if (ending > starting) {	// If ending is larger, simply subtract starting
    var result = ending - starting; 
  } else {
    var result = (1440 - starting) + ending;	// If starting is larger, subtract 24 hours * 60 minutes (remainder of current day), add ending (next day)
  }
  return result;      
}

function convertToMinutes(time) {
  var stripped = time.split(":");
  stripped[1] = stripped[1].slice(stripped[1].length - 4, 2);
  var hours = parseInt(stripped[0]);
  var minutes = parseInt(stripped[1]);
  if ((time.indexOf('p') != -1) && (hours != 12)) {	// If time is pm and not 12 (start of pm / 0 value) add 12 hours
    hours += 12;
  } else if ((time.indexOf('a') != -1) && (hours == 12)) {	// If time is am and 12 (0 value for day) subtract 12 hours
    hours -= 12;
  }
  var totalMinutes = (hours*60) + minutes;
  return totalMinutes;
}

CountingMinutesI(readline()); 