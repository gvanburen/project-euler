/*The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.*/

// brute force
var sum = new BigNumber("0");
for (var a = 1; a <= 1000; a++) {
    var n = new BigNumber(a).pow(a);
    sum = sum.add(n);
}
console.log(sum._d.slice(sum._d.length - 10));

// optimized
function nPower(n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result = (result * n) % 10000000000;
    }
    return result;
}

function euler48(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = (sum + nPower(i)) % 10000000000;
    }
    return sum;
}

euler48(1000);