/*2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?*/

// TEST CASE
var arr = [1];
var carryOver = 0;
var count = 0;
while(count < 15){
  for(var i = 0; i < count+1; i++){
    var digit = arr[i] || 0;
    digit = digit * 2 + carryOver;
    if(digit > 9){
      digit -= 10;
      carryOver = 1;
    } else {
      carryOver = 0;
    }
    arr[i] = digit;
  }
  count++;
}
var sum = 0;
for(idx in arr){
  sum+=arr[idx];
}

// IMPLIMENTATION
function exp(b,e){
  var carryOver = 0, count = 0, sum = 0, arr = [1];
  while(count < e){
    for(var i = 0; i < count+1; i++){
      var digit = arr[i] || 0;
      digit = digit * b + carryOver;
      if(digit > 9){
        digit -= 10;
        carryOver = 1;
      } else {
        carryOver = 0;
      }
      arr[i] = digit;
    }
    count++;
  }
  for(idx in arr){
    sum+=arr[idx];
  }
  return sum;
}
