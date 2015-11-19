/*Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?*/

//ring number
//f(0) = 1
//f(1) = 7 8 9
//       6   2
//       5 4 3
//ring width = 2n + 1
//top right corner = (2n + 1)^2
//top left corner = (2n + 1)^2 - 2n
//bottom left corner = (2n + 1)^2 - 4n
//bottom right corner = (2n + 1)^2 - 6n
//sum: 4 * (2n + 1)^2 - 12n

var sum = 1;
var limit = (1001-1)/2
for(var i = 1; i < limit+1; i++){
  sum+= 4 * Math.pow(2 * i + 1, 2) - 12 * i;
}
console.log(sum);
