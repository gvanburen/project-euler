/*If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.*/

var ONE_THOUSAND = Math.pow(10, 3);
var ONE_MILLION = Math.pow(10, 6);
var sum = 0;
var arr = [];

function integerToWord(integer) {
  var prefix = '';
  var suffix = '';

  if (!integer){ return "zero"; }

  if(integer < 0){
    prefix = "negative";
    suffix = integerToWord(-1 * integer);
    return prefix + " " + suffix;
  }
  if(integer <= 90){
    switch (integer) {
      case integer < 0:
        prefix = "negative";
        suffix = integerToWord(-1 * integer);
        return prefix + " "  + suffix;
      case 1: return "one";
      case 2: return "two";
      case 3: return "three";
      case 4:  return "four";
      case 5: return "five";
      case 6: return "six";
      case 7: return "seven";
      case 8: return "eight";
      case 9: return "nine";
      case 10: return "ten";
      case 11: return "eleven";
      case 12: return "twelve";
      case 13: return "thirteen";
      case 14: return "fourteen";
      case 15: return "fifteen";
      case 16: return "sixteen";
      case 17: return "seventeen";
      case 18: return "eighteen";
      case 19: return "nineteen";
      case 20: return "twenty";
      case 30: return "thirty";
      case 40: return "forty";
      case 50: return "fifty";
      case 60: return "sixty";
      case 70: return "seventy";
      case 80: return "eighty";
      case 90: return "ninety";
      default: break;
    }
  }

  if(integer < 100){
    prefix = integerToWord(integer - integer % 10);
    suffix = integerToWord(integer % 10);
    return prefix + "-"  + suffix;
  }

  if(integer < ONE_THOUSAND){
    prefix = integerToWord(parseInt(Math.floor(integer / 100), 10) )  + " hundred";
    if (integer % 100){ suffix = " and "  + integerToWord(integer % 100); }
    return prefix + suffix;
  }

  if(integer < ONE_MILLION){
    prefix = integerToWord(parseInt(Math.floor(integer / ONE_THOUSAND), 10))  + " thousand";
    if (integer % ONE_THOUSAND){ suffix = integerToWord(integer % ONE_THOUSAND); }
  } else {
    return '';
  }
  return prefix + " "  + suffix;
}

for(var i = 1; i < 1001; i++){
  var str = integerToWord(i);
  arr.push(str.split(/[\s-]+/));
}

for(var j = 0; j < arr.length; j++){
  for(var k = 0; k < arr[j].length; k++){
    sum+=arr[j][k].length;
  }
}
