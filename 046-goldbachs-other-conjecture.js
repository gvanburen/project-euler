/*It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×12
15 = 7 + 2×22
21 = 3 + 2×32
25 = 7 + 2×32
27 = 19 + 2×22
33 = 31 + 2×12

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?*/

function isPrimeNum(n) {
    if (n < 2) {
        return false
    }
    var prime = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
        }
    }
    return prime;
}

var result = 0;
var notFound = true;
var i = 9;
while (notFound) {
    if (!isPrimeNum(i)) {
        for (var j = 1; j < i; j++) {
            var tmp = 2 * j * j;
            if (tmp <= i) {
                if (isPrimeNum(i - tmp)) {
                    break;
                }
            } else {
                notFound = false;
                result = i;
            }
        }
    }
    i += 2;
}
console.log(result);