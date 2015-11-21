/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/

function primeNum(n) {
    var arr = [2];
    for (var i = 3; arr.length < n; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr[n - 1]);
}

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}