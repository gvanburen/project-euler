/*The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.*/

function primeSum(n) {
    var sum = 2;
    for (var i = 3; i < n; i++) {
        if (isPrimeNum(i)) {
            sum += i;
        }
    }
    console.log(sum);
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