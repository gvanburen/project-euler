/*A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.*/

var arr = [], sumArr = [], sum = 0, limit = 28123;

for(var i = 1; i <= limit; i++){
  if(getFactors(i) > i){
    arr.push(i);
  }
}
for(var j = 0; j < arr.length; j++){
  for(var k = j; k < arr.length; k++){
    var temp = arr[j]+arr[k];
    if(temp <= limit){
      sumArr[temp] = true;
    }
  }
}
for(var x = 1; x < limit; x++){
  if(!sumArr[x]){
    sum+=x;
  }
}
console.log(sum);

function getFactors(n){
  var sum = 0;
  var limit = n/2+1
  for(var i = 1; i < limit; i++){
    if(n % i === 0){
      sum+=i;
    }
  }
  return sum;
}
