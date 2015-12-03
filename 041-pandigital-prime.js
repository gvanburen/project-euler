/*We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?*/

function isPan(n) {
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var numStr = String(n).split("").sort();
    for (var i = 0; i < numStr.length; i++) {
        if (numStr[i] !== numbers[i]) {
            return false;
        }
    }
    return true;
}

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

var result;
for (var i = 7654321; i >= 7000000; i--) {
    if (isPan(i) && isPrimeNum(i)) {
        result = i;
        break;
    }
}
console.log(result);