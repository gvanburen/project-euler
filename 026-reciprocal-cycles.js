/*A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1

Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.*/

function reciprocalCycles(d){
  var primeArr = [];
  for(var i = d; i > 1; i--){
    if(isPrimeNum(i)){
      primeArr.push(i);
    }
  }
  longest(primeArr);
}

function isPrimeNum(n){
  if(n < 2){return false}
    var prime = true;
  for(var i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      prime = false;
    }
  }
  return prime;
}

function longest(arr){
  var count = 1, remainder = 0, tmp = 10, max = 0, result = 0;
  for(var i = 0; i < arr.length; i++){
    var list = [];
    list.push(1);
    while(true){
      remainder = tmp % arr[i];
      if(list.indexOf(remainder) > -1 || remainder == 0){
        if(count > max){
          max = count;
          result = arr[i];
        }
        count = 1;
        tmp = 10;
        break;
      } else {
        list.push(remainder);
        tmp = remainder * 10;
        count++;
      }
    }
  }
console.log(result);
}

reciprocalCycles(1000);
