/*The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.*/

// TEST CASE:
var n = 13;
var terms = 2; //to account for n and 1
while(n > 1){
  if(n % 2 === 0){
    n = n / 2;
  } else {
    n = (3 * n) + 1;
  }
  terms++;
}

// IMPLIMENTATION
var max = 0;
for(var i = 2; i < 1000000; i++){
  var n = i;
  var terms = 2;
  while(n > 1){
    if(n % 2 === 0){
      n = n / 2;
    } else {
      n = (3 * n) + 1;
    }
    terms++;
  }
  if(terms > max){
    max = terms;
  }
}

// IMPLIMENTATION TAKE 2
function even(n){
  return n/2;
}
function odd(n){
  return 3*n + 1;
}
function sequence(n){
  var a = [n];
  while(n != 1){
    if(n % 2 === 0){
      n = even(n);
    } else {
      n = odd(n);
    }
    a.push(n);
  }
  return a;
}
var max = 0;
var a = [];
var b = [];
var l;
for(var i = 1; i < 1000000; i++){
  b = sequence(i);
  l = b.length;
  if(l > max){
    max = l;
    a = b;
  }
}
console.log(a[0]);
