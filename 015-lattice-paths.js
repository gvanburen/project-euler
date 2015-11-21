/*Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?*/

/*function myPath(n){
  var paths = 1;
  var grid = n;
  var cube = 2*n;
  for(var i = 0; i < grid; i++){
    paths = paths * (cube - 1);
    paths = paths / (i + 1);
  }
  console.log(paths);
}*/

function factorial(n) {
    return n === 1 ? 1 : factorial(n - 1) * n;
}

function binom(n) {
    return Math.floor(factorial(2 * n) / (Math.pow(factorial(n), 2)));
}

binom(20);