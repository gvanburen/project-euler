/*The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.*/

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

function checkPrime(arr) {
    for (var k = 0; k < arr.length; k++) {
        if (primeArr.indexOf(arr[k]) < 0) {
            return false;
        }
    }
    return true;
}

function removal(n) {
    var d = String(n);
    var trunk = [];
    for (var i = 1; i < d.length; i++) {
        trunk.push(Number(d.slice(i)));
        trunk.push(Number(d.substr(0, d.length - i)));
    }
    //    var r = d.split("").reverse().join("");
    //     for (var i = 1; i < r.length; i++) {
    //         trunk.push(Number(r.slice(i).split("").reverse().join("")));
    //     }
    return trunk;
}

var primeArr = [2, 3, 5, 7];
for (var i = 10; i < 1000000; i++) {
    if (isPrimeNum(i)) {
        primeArr.push(i);
    }
}
var sum = 0;
for (var j = 4; j < primeArr.length; j++) {
    var check = removal((primeArr[j]));
    if (checkPrime(check)) {
        sum += primeArr[j];
    }
}
console.log(sum);