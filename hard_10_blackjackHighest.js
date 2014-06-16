function BlackjackHighest(strArr) { 
  var highest = "";
  var max = 0;
  var converted = [];
  for (i=0; i<strArr.length; i++) {
    converted[i] = checkVal(strArr[i]);
    if (converted[i] > max) {
      highest = strArr[i];
    }
  }
  // code goes here  
  return (blackjack(converted) + " " + highest); 
         
}

function checkVal(card) {
  switch (card) {
    case "two":
      card = 2;
      break;
    case "three":
      card = 3;
      break;
    case "four":
      card = 4;
      break;
    case "five":
      card = 5;
      break;
    case "six":
      card = 6;
      break;
    case "seven":
      card = 7;
      break;
    case "eight":
      card = 8;
      break;
    case "nine":
      card = 9;
      break;
    case "ten":
      card = 10;
      break;
    case "jack":
      card = 10;
      break;
    case "queen":
      card = 10;
      break;
    case "king":
      card = 10;
      break;
    case "ace":
      card = 11;
      break;
  }
  return card;
}

function blackjack(cards) {
  var sum = 0;
  for (i=0; i<cards.length; i++) {
    sum += cards[i];
  }
  //return sum;
  
  if (sum < 21) {
    return "below";
  } else if (sum > 21) {
    return "above";
  } else {
    return "blackjack";
  }
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BlackjackHighest(readline());       