/*The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?*/

// optimized

function countDistinctPrimeFactors(n) {
    var count = 0;

    for (var i = 2; i <= Math.sqrt(n); i += i == 2 ? 1 : 2) {
        if (n % i === 0) {
            count++;
            while (n % i === 0) {
                n = Math.floor(n / i);
            }
        }
    }

    return n > 1 ? count + 1 : count;
}

function isConsecutiveNumber(n, numberOfDigits) {
    for (var i = n; i < n + numberOfDigits; i++) {
        if (countDistinctPrimeFactors(i) !== numberOfDigits) {
            return false;
        }
    }

    return true;
}

function findFirstConsecutiveNumber(numberOfDigits) {
    for (var n = 644;; n++) {
        if (isConsecutiveNumber(n, numberOfDigits)) {
            return n;
        }
    }
}

findFirstConsecutiveNumber(4);