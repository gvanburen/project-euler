/*The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?*/


var a = new BigNumber("1");
var b = new BigNumber("1");
var c = new BigNumber("2");
var count = 3;
var max = new BigNumber("10").pow("999");
while(max._d.length > c._d.length){
  a = b;
  b = c;
  console.log(a, b, c);
  c = a.add(b);
  count++;
}
console.log(count);

/*
function fibo(){
  var count = 2;
  var fibo = [1,1];

  while (String(next).length < 1000){
    var next = fibo[0] + fibo[1];
    fibo[0] = fibo[1];
    fibo[1] = next;
    count++;
  }
  return count;
}
*/
