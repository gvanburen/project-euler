/*145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.*/

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    y = n;
    for (var i = 1; i < n; i++) {
        y *= i;
    }
    return y;
}

var total = 0;
var fact = [];
for (var i = 0; i < 10; i++) {
    fact[i] = factorial(i);
}

for (var i = 10; i < 2540161; i++) {
    var sum = 0;
    var num = i;
    while (num > 0) {
        var digit = num % 10;
        num = Math.floor(num / 10);
        sum += fact[digit];
    }

    if (i === sum) {
        total += i;
    }
}
console.log(total);