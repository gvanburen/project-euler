/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?*/

function checkFactor(n){
  var arr = [];
  var square = Math.floor(Math.sqrt(n));
  for(var i = square; arr.length < 1; i--){ // will stop after the first factor is found
  /*for(var i = square; i > 1; i--){*/

    // check to see if number is a factor
    if(n % i === 0){
      // check if factor is a prime number
      if(isPrime(i)){
        arr.push(i);
      }
    }
  }
  return arr /* [0] - not neccessary if we stop the loop after the first value is found */;
}
function isPrime(n){
  for (var i = 2; i < n; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;
}
