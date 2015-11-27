/*The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?*/

// 1. build array of primes under 1,000,000
// 2. loop through array
// 3. re-arrange digits
// 4. search original array
// 5. if re-arranged digits are found add to result array

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

function scramble(n) {
    var str = String(n);
    var strArr = str.split("");
    var tmp = [],
        scrambled = [],
        count = 1;
    while (count < strArr.length) {
        if (count == 1) {
            tmp = strArr.slice(0);
        } else {
            tmp = tmp;
        }
        var d = tmp.shift(1);
        tmp.push(d);
        scrambled.push(Number(tmp.join("")));
        count++;
    }
    return scrambled;
}

function checkScramble(arr) {
    for (var k = 0; k < arr.length; k++) {
        if (primeArr.indexOf(arr[k]) < 0) {
            return false;
        }
    }
    return true;
}

var primeArr = [],
    results = [2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97];
for (var i = 100; i < 1000000; i++) {
    if (isPrimeNum(i)) {
        primeArr.push(i);
    }
}

for (var j = 0; j < primeArr.length; j++) {
    var check = scramble((primeArr[j]));
    if (checkScramble(check)) {
        results.push(primeArr[j]);
    }
}

console.log(results.length);